#!/usr/bin/env python3
"""Conservatively crop near-white whitespace from product images."""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageOps


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


@dataclass
class CropCandidate:
    path: Path
    size: tuple[int, int]
    box: tuple[int, int, int, int]
    padded_box: tuple[int, int, int, int]
    reduction: float
    margins: tuple[float, float, float, float]


def content_bbox(image: Image.Image, threshold: int, scan_size: int) -> tuple[int, int, int, int] | None:
    rgb = image.convert("RGB")
    width, height = rgb.size
    scale = min(1.0, scan_size / max(width, height))
    if scale < 1.0:
        small_size = (max(1, round(width * scale)), max(1, round(height * scale)))
        rgb = rgb.resize(small_size, Image.Resampling.BOX)

    pixels = rgb.load()
    small_width, small_height = rgb.size
    left = small_width
    top = small_height
    right = -1
    bottom = -1

    for y in range(small_height):
        for x in range(small_width):
            r, g, b = pixels[x, y]
            if min(r, g, b) < threshold:
                left = min(left, x)
                top = min(top, y)
                right = max(right, x)
                bottom = max(bottom, y)

    if right < left or bottom < top:
        return None

    inv_scale = 1 / scale
    return (
        max(0, int(left * inv_scale)),
        max(0, int(top * inv_scale)),
        min(width, int((right + 1) * inv_scale) + 1),
        min(height, int((bottom + 1) * inv_scale) + 1),
    )


def expand_box(
    box: tuple[int, int, int, int],
    size: tuple[int, int],
    padding_ratio: float,
    min_padding: int,
) -> tuple[int, int, int, int]:
    width, height = size
    left, top, right, bottom = box
    content_width = right - left
    content_height = bottom - top
    pad_x = max(min_padding, round(content_width * padding_ratio))
    pad_y = max(min_padding, round(content_height * padding_ratio))
    return (
        max(0, left - pad_x),
        max(0, top - pad_y),
        min(width, right + pad_x),
        min(height, bottom + pad_y),
    )


def inspect_image(path: Path, args: argparse.Namespace) -> CropCandidate | None:
    with Image.open(path) as image:
        image = ImageOps.exif_transpose(image)
        width, height = image.size
        box = content_bbox(image, args.threshold, args.scan_size)
        if box is None:
            return None

    left, top, right, bottom = box
    margins = (
        left / width,
        top / height,
        (width - right) / width,
        (height - bottom) / height,
    )
    max_margin = max(margins)
    padded_box = expand_box(box, (width, height), args.padding, args.min_padding)
    crop_width = padded_box[2] - padded_box[0]
    crop_height = padded_box[3] - padded_box[1]
    reduction = 1 - ((crop_width * crop_height) / (width * height))

    if max_margin < args.min_margin and reduction < args.min_reduction:
        return None
    if reduction < args.min_reduction:
        return None

    return CropCandidate(path, (width, height), box, padded_box, reduction, margins)


def iter_images(root: Path) -> list[Path]:
    return sorted(
        path
        for path in root.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def save_image(image: Image.Image, path: Path) -> None:
    suffix = path.suffix.lower()
    save_kwargs: dict[str, object] = {}
    if suffix in {".jpg", ".jpeg"}:
        if image.mode in {"RGBA", "LA"} or (image.mode == "P" and "transparency" in image.info):
            background = Image.new("RGB", image.size, "white")
            background.paste(image, mask=image.getchannel("A"))
            image = background
        elif image.mode != "RGB":
            image = image.convert("RGB")
        save_kwargs.update({"quality": 92, "subsampling": 0, "optimize": True})
    elif suffix == ".png":
        save_kwargs.update({"optimize": True})
    image.save(path, **save_kwargs)


def apply_crop(candidate: CropCandidate) -> None:
    with Image.open(candidate.path) as image:
        image = ImageOps.exif_transpose(image)
        cropped = image.crop(candidate.padded_box)
        save_image(cropped, candidate.path)


def make_contact_sheet(candidates: list[CropCandidate], output: Path) -> None:
    if not candidates:
        return

    cell_width = 420
    cell_height = 280
    label_height = 48
    columns = 2
    rows = len(candidates)
    sheet = Image.new("RGB", (columns * cell_width, rows * (cell_height + label_height)), "white")

    for row, candidate in enumerate(candidates):
        with Image.open(candidate.path) as original:
            original = ImageOps.exif_transpose(original).convert("RGB")
            cropped = original.crop(candidate.padded_box)
        for column, image in enumerate((original, cropped)):
            preview = ImageOps.contain(image, (cell_width, cell_height), Image.Resampling.LANCZOS)
            x = column * cell_width + (cell_width - preview.width) // 2
            y = row * (cell_height + label_height) + (cell_height - preview.height) // 2
            sheet.paste(preview, (x, y))

        label = f"{candidate.path}  {candidate.size} -> {candidate.padded_box[2]-candidate.padded_box[0]}x{candidate.padded_box[3]-candidate.padded_box[1]}"
        # PIL's default font is enough for a QA contact sheet; labels are secondary.
        from PIL import ImageDraw

        draw = ImageDraw.Draw(sheet)
        draw.text((8, row * (cell_height + label_height) + cell_height + 8), label[:110], fill=(20, 20, 20))

    output.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(output, quality=90)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", default="assets/products", type=Path)
    parser.add_argument("--apply", action="store_true", help="Rewrite candidate images in place.")
    parser.add_argument("--contact-sheet", type=Path, help="Write a before/after contact sheet.")
    parser.add_argument("--threshold", type=int, default=245)
    parser.add_argument("--padding", type=float, default=0.08)
    parser.add_argument("--min-padding", type=int, default=36)
    parser.add_argument("--min-margin", type=float, default=0.18)
    parser.add_argument("--min-reduction", type=float, default=0.10)
    parser.add_argument("--scan-size", type=int, default=900)
    args = parser.parse_args()

    candidates = [candidate for path in iter_images(args.root) if (candidate := inspect_image(path, args))]

    for candidate in candidates:
        left, top, right, bottom = candidate.margins
        crop_width = candidate.padded_box[2] - candidate.padded_box[0]
        crop_height = candidate.padded_box[3] - candidate.padded_box[1]
        print(
            f"{candidate.path} {candidate.size[0]}x{candidate.size[1]} -> "
            f"{crop_width}x{crop_height} reduction={candidate.reduction:.1%} "
            f"margins LTRB={left:.0%},{top:.0%},{right:.0%},{bottom:.0%}"
        )

    print(f"candidates={len(candidates)} apply={args.apply}")

    if args.contact_sheet:
        make_contact_sheet(candidates, args.contact_sheet)
        print(f"contact_sheet={args.contact_sheet}")

    if args.apply:
        for candidate in candidates:
            apply_crop(candidate)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

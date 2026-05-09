#!/usr/bin/env python3
"""Use rembg AI segmentation to make product photos website-ready.

The script keeps PCB details photographic, removes the tabletop/background,
adds a light product-shadow on white, and crops excess whitespace.
"""

from __future__ import annotations

import argparse
import csv
from dataclasses import dataclass
from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps
from rembg import new_session, remove


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


@dataclass(frozen=True)
class Job:
    src: Path
    dst: Path


def iter_images(root: Path) -> list[Path]:
    if root.is_file():
        return [root] if root.suffix.lower() in IMAGE_EXTENSIONS else []
    return sorted(
        path
        for path in root.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def read_manifest(path: Path) -> list[Job]:
    jobs: list[Job] = []
    with path.open(newline="", encoding="utf-8") as handle:
        reader = csv.DictReader(handle)
        if "src" not in reader.fieldnames or "dst" not in reader.fieldnames:
            raise ValueError("manifest must contain src,dst columns")
        for row in reader:
            src = Path(row["src"])
            dst = Path(row["dst"])
            if str(src) and str(dst):
                jobs.append(Job(src, dst))
    return jobs


def make_jobs(paths: list[Path], manifest: Path | None) -> list[Job]:
    if manifest:
        return read_manifest(manifest)
    return [Job(path, path) for root in paths for path in iter_images(root)]


def fit_for_processing(image: Image.Image, max_side: int) -> Image.Image:
    image = ImageOps.exif_transpose(image).convert("RGB")
    if max(image.size) <= max_side:
        return image
    ratio = max_side / max(image.size)
    size = (round(image.width * ratio), round(image.height * ratio))
    return image.resize(size, Image.Resampling.LANCZOS)


def padded_alpha_crop(image: Image.Image, padding_ratio: float, min_padding: int) -> Image.Image:
    alpha = image.getchannel("A")
    bbox = alpha.getbbox()
    if not bbox:
        return image
    left, top, right, bottom = bbox
    content = max(right - left, bottom - top)
    padding = max(min_padding, round(content * padding_ratio))
    box = (
        max(0, left - padding),
        max(0, top - padding),
        min(image.width, right + padding),
        min(image.height, bottom + padding),
    )
    return image.crop(box)


def composite_on_white(
    rgba: Image.Image,
    shadow_opacity: float,
    shadow_blur: int,
    shadow_offset: tuple[int, int],
) -> Image.Image:
    alpha = rgba.getchannel("A")
    shadow = alpha.filter(ImageFilter.GaussianBlur(radius=shadow_blur))
    shadow = ImageChops.offset(shadow, *shadow_offset)
    shadow_layer = Image.new("RGBA", rgba.size, (0, 0, 0, 0))
    shadow_layer.putalpha(shadow.point(lambda pixel: int(pixel * shadow_opacity)))

    canvas = Image.new("RGBA", rgba.size, (255, 255, 255, 255))
    canvas.alpha_composite(shadow_layer)
    canvas.alpha_composite(rgba)
    return canvas.convert("RGB")


def process(job: Job, session: object, args: argparse.Namespace) -> None:
    with Image.open(job.src) as original:
        image = fit_for_processing(original, args.max_side)

    rgba = remove(
        image,
        session=session,
        alpha_matting=args.alpha_matting,
        alpha_matting_foreground_threshold=args.foreground_threshold,
        alpha_matting_background_threshold=args.background_threshold,
        alpha_matting_erode_size=args.erode_size,
    ).convert("RGBA")

    rgba = padded_alpha_crop(rgba, args.padding, args.min_padding)
    result = composite_on_white(
        rgba,
        args.shadow_opacity,
        args.shadow_blur,
        (args.shadow_x, args.shadow_y),
    )
    result = ImageEnhance.Contrast(result).enhance(args.contrast)

    job.dst.parent.mkdir(parents=True, exist_ok=True)
    result.save(job.dst, quality=args.quality, optimize=True, progressive=True, subsampling=0)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="*", type=Path, help="Images or directories to rewrite in place.")
    parser.add_argument("--manifest", type=Path, help="CSV with src,dst columns.")
    parser.add_argument("--model", default="u2net")
    parser.add_argument("--max-side", type=int, default=1800)
    parser.add_argument("--padding", type=float, default=0.14)
    parser.add_argument("--min-padding", type=int, default=70)
    parser.add_argument("--quality", type=int, default=91)
    parser.add_argument("--contrast", type=float, default=1.02)
    parser.add_argument("--shadow-opacity", type=float, default=0.16)
    parser.add_argument("--shadow-blur", type=int, default=18)
    parser.add_argument("--shadow-x", type=int, default=10)
    parser.add_argument("--shadow-y", type=int, default=18)
    parser.add_argument("--alpha-matting", action=argparse.BooleanOptionalAction, default=True)
    parser.add_argument("--foreground-threshold", type=int, default=240)
    parser.add_argument("--background-threshold", type=int, default=12)
    parser.add_argument("--erode-size", type=int, default=8)
    args = parser.parse_args()

    jobs = make_jobs(args.paths, args.manifest)
    if not jobs:
        raise SystemExit("no images to process")

    session = new_session(args.model)
    for index, job in enumerate(jobs, start=1):
        process(job, session, args)
        print(f"[{index}/{len(jobs)}] {job.src} -> {job.dst}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

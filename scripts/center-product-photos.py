#!/usr/bin/env python3
"""Crop excess background and center product photos.

This works on white, grey, and black product backgrounds by finding the
edge-connected background first, then rebuilding the image with symmetric
padding around the detected product.
"""

from __future__ import annotations

import argparse
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageOps


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def iter_images(root: Path) -> list[Path]:
    if root.is_file():
        return [root] if root.suffix.lower() in IMAGE_EXTENSIONS else []
    return sorted(
        path
        for path in root.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def edge_background_mask(rgb: np.ndarray, tolerance: int) -> np.ndarray:
    height, width, _ = rgb.shape
    border = np.concatenate(
        [
            rgb[: max(1, height // 30), :, :].reshape(-1, 3),
            rgb[-max(1, height // 30) :, :, :].reshape(-1, 3),
            rgb[:, : max(1, width // 30), :].reshape(-1, 3),
            rgb[:, -max(1, width // 30) :, :].reshape(-1, 3),
        ],
        axis=0,
    )
    bg = np.median(border, axis=0).astype(np.int16)
    diff = np.abs(rgb.astype(np.int16) - bg).max(axis=2)
    candidate = diff <= tolerance

    seen = np.zeros((height, width), dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    def seed(x: int, y: int) -> None:
        if candidate[y, x] and not seen[y, x]:
            seen[y, x] = True
            queue.append((x, y))

    for x in range(width):
        seed(x, 0)
        seed(x, height - 1)
    for y in range(height):
        seed(0, y)
        seed(width - 1, y)

    while queue:
        x, y = queue.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < width and 0 <= ny < height and candidate[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = True
                queue.append((nx, ny))
    return seen


def content_bbox(image: Image.Image, scan_size: int, tolerance: int) -> tuple[int, int, int, int] | None:
    rgb = image.convert("RGB")
    width, height = rgb.size
    scale = min(1.0, scan_size / max(width, height))
    if scale < 1.0:
        small_size = (max(1, round(width * scale)), max(1, round(height * scale)))
        rgb = rgb.resize(small_size, Image.Resampling.BOX)

    arr = np.asarray(rgb)
    bg = edge_background_mask(arr, tolerance)
    content = ~bg
    ys, xs = np.where(content)
    if len(xs) == 0 or len(ys) == 0:
        return None

    inv = 1 / scale
    return (
        max(0, int(xs.min() * inv)),
        max(0, int(ys.min() * inv)),
        min(width, int((xs.max() + 1) * inv) + 1),
        min(height, int((ys.max() + 1) * inv) + 1),
    )


def centered_crop(image: Image.Image, box: tuple[int, int, int, int], padding_ratio: float, min_padding: int) -> Image.Image:
    width, height = image.size
    left, top, right, bottom = box
    content_w = right - left
    content_h = bottom - top
    pad = max(min_padding, round(max(content_w, content_h) * padding_ratio))
    target_w = content_w + pad * 2
    target_h = content_h + pad * 2
    crop_left = left - pad
    crop_top = top - pad
    crop_right = crop_left + target_w
    crop_bottom = crop_top + target_h

    # Shift back inside the source when possible while preserving equal padding.
    if crop_left < 0:
        crop_right -= crop_left
        crop_left = 0
    if crop_top < 0:
        crop_bottom -= crop_top
        crop_top = 0
    if crop_right > width:
        shift = crop_right - width
        crop_left = max(0, crop_left - shift)
        crop_right = width
    if crop_bottom > height:
        shift = crop_bottom - height
        crop_top = max(0, crop_top - shift)
        crop_bottom = height

    return image.crop((crop_left, crop_top, crop_right, crop_bottom))


def save_image(image: Image.Image, path: Path, quality: int) -> None:
    image = image.convert("RGB")
    image.save(path, quality=quality, optimize=True, progressive=True, subsampling=0)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="+", type=Path)
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--scan-size", type=int, default=900)
    parser.add_argument("--tolerance", type=int, default=30)
    parser.add_argument("--padding", type=float, default=0.12)
    parser.add_argument("--min-padding", type=int, default=42)
    parser.add_argument("--min-reduction", type=float, default=0.04)
    parser.add_argument("--quality", type=int, default=92)
    args = parser.parse_args()

    changed = 0
    for path in [item for root in args.paths for item in iter_images(root)]:
        with Image.open(path) as handle:
            image = ImageOps.exif_transpose(handle).convert("RGB")
        box = content_bbox(image, args.scan_size, args.tolerance)
        if not box:
            continue
        cropped = centered_crop(image, box, args.padding, args.min_padding)
        reduction = 1 - ((cropped.width * cropped.height) / (image.width * image.height))
        if reduction < args.min_reduction:
            continue
        print(f"{path} {image.width}x{image.height} -> {cropped.width}x{cropped.height} reduction={reduction:.1%}")
        changed += 1
        if args.apply:
            save_image(cropped, path, args.quality)
    print(f"changed={changed} apply={args.apply}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

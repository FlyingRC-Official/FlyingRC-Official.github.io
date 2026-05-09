#!/usr/bin/env python3
"""Turn edge-connected studio/table backgrounds into pure white.

This is intentionally conservative for PCB photos: only near-neutral pixels
connected to the image edges are treated as background, which protects white
connectors, silkscreen, pads, and labels inside the product outline.
"""

from __future__ import annotations

import argparse
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def candidate_background(
    rgb: np.ndarray,
    bg_color: np.ndarray,
    distance: int,
    neutral_min: int,
    neutral_sat: int,
) -> np.ndarray:
    channels = rgb.astype(np.int16)
    maxc = channels.max(axis=2)
    minc = channels.min(axis=2)
    saturation = maxc - minc
    brightness = maxc
    close_to_bg = np.abs(channels - bg_color.astype(np.int16)).max(axis=2) <= distance
    neutral_light = (brightness >= neutral_min) & (saturation <= neutral_sat)
    very_light = brightness >= 232
    return close_to_bg | neutral_light | very_light


def edge_connected(mask: np.ndarray) -> np.ndarray:
    height, width = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    queue: deque[tuple[int, int]] = deque()

    def seed(x: int, y: int) -> None:
        if mask[y, x] and not seen[y, x]:
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
            if 0 <= nx < width and 0 <= ny < height and mask[ny, nx] and not seen[ny, nx]:
                seen[ny, nx] = True
                queue.append((nx, ny))

    return seen


def clean_image(
    path: Path,
    distance: int,
    neutral_min: int,
    neutral_sat: int,
    blur: float,
    dry_run: bool,
) -> tuple[int, int]:
    with Image.open(path) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        rgb = np.asarray(image)

    corners = np.vstack(
        [
            rgb[:80, :80].reshape(-1, 3),
            rgb[:80, -80:].reshape(-1, 3),
            rgb[-80:, :80].reshape(-1, 3),
            rgb[-80:, -80:].reshape(-1, 3),
        ]
    )
    bg_color = np.median(corners, axis=0)
    mask = edge_connected(candidate_background(rgb, bg_color, distance, neutral_min, neutral_sat))

    mask_image = Image.fromarray((mask * 255).astype(np.uint8))
    if blur > 0:
        mask_image = mask_image.filter(ImageFilter.GaussianBlur(radius=blur))

    white = Image.new("RGB", image.size, "white")
    cleaned = Image.composite(white, image, mask_image)
    cleaned = ImageEnhance.Contrast(cleaned).enhance(1.03)

    changed = int(mask.sum())
    total = mask.size
    if not dry_run:
        cleaned.save(path, quality=90, optimize=True, progressive=True, subsampling=0)
    return changed, total


def iter_images(root: Path) -> list[Path]:
    if root.is_file():
        return [root]
    return sorted(
        path
        for path in root.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("paths", nargs="+", type=Path)
    parser.add_argument("--distance", type=int, default=46)
    parser.add_argument("--neutral-min", type=int, default=178)
    parser.add_argument("--neutral-sat", type=int, default=58)
    parser.add_argument("--blur", type=float, default=1.6)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    images = [path for root in args.paths for path in iter_images(root)]
    for path in images:
        changed, total = clean_image(
            path,
            args.distance,
            args.neutral_min,
            args.neutral_sat,
            args.blur,
            args.dry_run,
        )
        print(f"{path} background={changed / total:.1%} dry_run={args.dry_run}")
    print(f"processed={len(images)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

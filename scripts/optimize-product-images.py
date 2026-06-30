#!/usr/bin/env python3
"""Compress large publishable product JPGs with macOS sips."""

from __future__ import annotations

import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PRODUCTS = ROOT / "assets" / "products"
TEXT_HEAVY_NAMES = ("specs", "dimension", "wiring", "pinout", "layout", "usage", "firmware")
MIN_SIZE = 650 * 1024


def should_optimize(path: Path) -> bool:
    name = path.stem.lower()
    if path.stat().st_size < MIN_SIZE:
        return False
    if path.name == "hero.jpg":
        return True
    if any(token in name for token in TEXT_HEAVY_NAMES):
        return False
    return True


def optimize(path: Path) -> bool:
    max_edge = "1200" if path.name == "hero.jpg" else "1400"
    quality = "70" if path.name == "hero.jpg" else "74"
    tmp_path = path.with_suffix(path.suffix + ".tmp")
    before = path.stat().st_size
    subprocess.run(
        ["sips", "-Z", max_edge, "-s", "format", "jpeg", "-s", "formatOptions", quality, str(path), "--out", str(tmp_path)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    after = tmp_path.stat().st_size
    if after < before:
        tmp_path.replace(path)
        print(f"{path.relative_to(ROOT)}: {before // 1024}K -> {after // 1024}K")
        return True
    tmp_path.unlink(missing_ok=True)
    return False


def main() -> None:
    changed = 0
    for path in sorted(PRODUCTS.rglob("*")):
        if path.suffix.lower() not in {".jpg", ".jpeg"}:
            continue
        if should_optimize(path) and optimize(path):
            changed += 1
    print(f"Optimized {changed} images.")


if __name__ == "__main__":
    main()

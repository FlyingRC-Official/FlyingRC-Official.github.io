#!/usr/bin/env python3
"""Build a lightweight static artifact for the China-near mirror."""

from __future__ import annotations

import shutil
import subprocess
import re
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist-cn"
ORIGIN = "https://flyingrc-official.github.io"
EXCLUDED_SUFFIXES = {".docx", ".hex", ".mp4", ".step", ".zip"}
TEXT_SUFFIXES = {".html", ".css", ".js", ".txt", ".svg", ".xml"}
IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".webp"}
EXCLUDED_FILES = {".gitignore", "README.md", "vercel.json", "wrangler.toml"}
ALLOWED_ROOT_FILES = {
    ".nojekyll",
    "_headers",
    "contact.html",
    "downloads.html",
    "index.html",
    "product.html",
    "projects.html",
    "robots.txt",
    "sitemap.xml",
    "styles.css",
    "support.html",
    "tutorials.html",
    "wiki.html",
}
ALLOWED_ROOT_DIRECTORIES = {"assets", "data", "en", "products", "scripts", "tutorials", "zh"}
PUBLISHABLE_EXTRA_FILES = {
    Path("assets/products/am32-esc-75a-can/dimension.png"),
    Path("assets/products/stack-f405-45a/f4d-45a-photo.png"),
    Path("assets/products/stack-f405-45a/f4d-45a-render.png"),
    Path("assets/downloads/firmware/f435wing-mini-osd/SHA256SUMS.txt"),
}
PUBLISHABLE_EXTRA_DIRECTORIES = {Path("assets/products/f435wing-mini-osd")}
LOCAL_ASSET_PATTERN = re.compile(r'(?:href|poster|src)=["\'](?P<path>/?assets/[^"\'?#]+)', re.IGNORECASE)


def git_files() -> list[Path]:
    output = subprocess.check_output(["git", "ls-files", "-z", "--cached"], cwd=ROOT)
    files = {Path(item.decode("utf-8")) for item in output.split(b"\0") if item}
    files.update(path for path in PUBLISHABLE_EXTRA_FILES if (ROOT / path).is_file())
    for directory in PUBLISHABLE_EXTRA_DIRECTORIES:
        files.update(path.relative_to(ROOT) for path in (ROOT / directory).rglob("*") if path.is_file())
    return sorted(files)


def is_excluded(path: Path) -> bool:
    if len(path.parts) == 1:
        if path.as_posix() not in ALLOWED_ROOT_FILES:
            return True
    elif path.parts[0] not in ALLOWED_ROOT_DIRECTORIES:
        return True
    if path.parts and path.parts[0] == "dist-cn":
        return True
    if path.parts and path.parts[0].startswith("上架资料"):
        return True
    if path.as_posix() in EXCLUDED_FILES:
        return True
    if path.parts[:1] == ("scripts",) and path.suffix == ".py":
        return True
    return path.suffix.lower() in EXCLUDED_SUFFIXES


def externalize_heavy_links(text: str) -> str:
    pattern = re.compile(
        r'(?P<quote>["\'])(?P<path>/?assets/[^"\']+\.(?:docx|hex|mp4|step|zip))(?P=quote)',
        re.IGNORECASE,
    )

    def replace(match: re.Match[str]) -> str:
        quote = match.group("quote")
        path = match.group("path").lstrip("/")
        return f"{quote}{ORIGIN}/{path}{quote}"

    return pattern.sub(replace, text)


def copy_file(path: Path) -> None:
    source = ROOT / path
    target = DIST / path
    target.parent.mkdir(parents=True, exist_ok=True)

    if path.suffix.lower() in TEXT_SUFFIXES:
        content = source.read_text(encoding="utf-8")
        content = externalize_heavy_links(content)
        target.write_text(content, encoding="utf-8")
        return

    shutil.copy2(source, target)


def optimize_image(path: Path) -> bool:
    if path.suffix.lower() not in IMAGE_SUFFIXES:
        return False
    full_path = DIST / path
    if not full_path.exists() or full_path.stat().st_size < 450 * 1024:
        return False

    suffix = full_path.suffix.lower()
    max_edge = 1200 if full_path.name == "hero.jpg" else 1800 if suffix == ".png" else 1400
    quality = 70 if full_path.name == "hero.jpg" else 74

    tmp_path = full_path.with_suffix(full_path.suffix + ".tmp")
    with Image.open(full_path) as source:
        image = ImageOps.exif_transpose(source)
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)
        if suffix in {".jpg", ".jpeg"}:
            image.convert("RGB").save(
                tmp_path,
                format="JPEG",
                quality=quality,
                optimize=True,
                progressive=True,
                subsampling=1,
            )
        elif suffix == ".png":
            image.save(tmp_path, format="PNG", optimize=True, compress_level=9)
        else:
            image.save(tmp_path, format="WEBP", quality=78, method=6)

    if tmp_path.stat().st_size < full_path.stat().st_size:
        tmp_path.replace(full_path)
        return True
    else:
        tmp_path.unlink(missing_ok=True)
        return False


def validate_local_asset_links() -> None:
    missing: dict[Path, set[Path]] = {}
    for html_path in DIST.rglob("*.html"):
        content = html_path.read_text(encoding="utf-8")
        for match in LOCAL_ASSET_PATTERN.finditer(content):
            asset_path = Path(match.group("path").lstrip("/"))
            if not (DIST / asset_path).is_file():
                missing.setdefault(asset_path, set()).add(html_path.relative_to(DIST))

    if missing:
        details = "\n".join(
            f"- {asset}: referenced by {', '.join(str(page) for page in sorted(pages))}"
            for asset, pages in sorted(missing.items())
        )
        raise RuntimeError(f"Mirror is missing local assets:\n{details}")


def main() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()

    copied: list[Path] = []
    for path in git_files():
        if is_excluded(path):
            continue
        copy_file(path)
        copied.append(path)

    optimized = sum(1 for path in copied if optimize_image(path))
    validate_local_asset_links()

    print(f"Built {DIST.relative_to(ROOT)} with {len(copied)} files; optimized {optimized} images.")


if __name__ == "__main__":
    main()

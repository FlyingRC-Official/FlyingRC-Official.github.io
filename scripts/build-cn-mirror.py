#!/usr/bin/env python3
"""Build a lightweight static artifact for the China-near mirror."""

from __future__ import annotations

import shutil
import subprocess
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist-cn"
ORIGIN = "https://flyingrc-official.github.io"
EXCLUDED_SUFFIXES = {".docx", ".hex", ".mp4", ".step", ".zip"}
TEXT_SUFFIXES = {".html", ".css", ".js", ".txt", ".svg"}
IMAGE_SUFFIXES = {".jpg", ".jpeg"}
EXCLUDED_FILES = {".gitignore", "README.md", "vercel.json", "wrangler.toml"}


def git_files() -> list[Path]:
    output = subprocess.check_output(["git", "ls-files", "-z", "--cached", "--others", "--exclude-standard"], cwd=ROOT)
    return [Path(item.decode("utf-8")) for item in output.split(b"\0") if item]


def is_excluded(path: Path) -> bool:
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


def optimize_image(path: Path) -> None:
    if path.suffix.lower() not in IMAGE_SUFFIXES:
        return
    full_path = DIST / path
    if not full_path.exists() or full_path.stat().st_size < 450 * 1024:
        return
    if shutil.which("sips") is None:
        return

    max_edge = "1400"
    quality = "72"
    if full_path.name == "hero.jpg":
        max_edge = "1200"
        quality = "70"

    tmp_path = full_path.with_suffix(full_path.suffix + ".tmp")
    subprocess.run(
        ["sips", "-Z", max_edge, "-s", "format", "jpeg", "-s", "formatOptions", quality, str(full_path), "--out", str(tmp_path)],
        check=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    if tmp_path.stat().st_size < full_path.stat().st_size:
        tmp_path.replace(full_path)
    else:
        tmp_path.unlink(missing_ok=True)


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

    for path in copied:
        optimize_image(path)

    print(f"Built {DIST.relative_to(ROOT)} with {len(copied)} files.")


if __name__ == "__main__":
    main()

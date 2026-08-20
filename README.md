# FlyingRC Official Static Website

This repository is prepared for GitHub Pages.

## Local preview

Open `index.html` directly in a browser, or run:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## SEO static pages

Product data stays in `data/products.js`, and tutorial data stays in
`data/tutorials.js`. After editing products, downloads, firmware metadata, or
tutorials, regenerate the static SEO pages with:

```sh
node scripts/build-static-pages.js
```

The script writes localized `/en/` and `/zh/` entry pages, localized product and
download indexes, core product pages under `/products/<slug>/`, and
`sitemap.xml`.

## China-near mirror build

The GitHub Pages site remains the canonical full site. For a Hong Kong or
Singapore-near mirror, build the lightweight static artifact:

```sh
python3 -m pip install -r requirements.txt
python3 scripts/build-cn-mirror.py
```

Deploy the generated `dist-cn/` directory to Vercel or Cloudflare Pages. The
mirror excludes heavyweight manuals, videos, and STEP files, then rewrites those
download links back to the canonical GitHub Pages site. Product images stay
local to the mirror and are recompressed during the build.

Recommended DNS shape:

```text
cn.your-domain.example -> mirror platform CNAME
```

Vercel can use the included `vercel.json`. Cloudflare Pages can use the same
build command with `dist-cn` as the output directory; `wrangler.toml` is included
for direct Pages deployment workflows.

## GitHub Pages

For an organization site, publish this repository as:

```text
FlyingRC-Official/FlyingRC-Official.github.io
```

GitHub Pages will serve it at:

```text
https://flyingrc-official.github.io/
```

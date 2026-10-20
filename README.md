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

## Production website migration

The public website now lives at https://www.flyingrctech.com/. On the
`flyingrc-official.github.io` hostname, HTML pages immediately replace the
current browser location with the corresponding new English or Chinese page.
Legacy `product.html?p=...` links retain the product, and query strings and
fragments are preserved. Contact/support links go to support; projects go to
About. The static canonical links point to the new website.

The generator emits a zero-second meta refresh in the HTML head as a permanent
migration signal, plus an immediate JavaScript redirect that preserves query
strings, fragments and legacy product selection. Static language alternates and
canonical links point to the corresponding production URLs. Legacy redirect
aliases no longer carry `noindex`, so their migration signals can be processed.

The China-near mirror builder strips the migration meta refresh; the JavaScript
redirect remains restricted to the GitHub Pages hostname. Previewing the source
HTML now follows the migration meta refresh; use the mirror artifact to preview
the retained content. Files under `assets/`, including manuals and firmware,
remain at their original URLs. GitHub Pages still serves HTTP 200: this is a
static permanent-redirect signal, not a server-side HTTP 301. Browsers without
JavaScript follow the static page destination; dynamic query-based product or
language selection requires JavaScript.

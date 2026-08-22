# Watch Catalog R2 Publishing

This directory contains scripts for publishing watch catalog entries and VTT files to Cloudflare R2.

## Overview

The watch catalog system supports on-demand page rendering without rebuilding the Next.js app. Content lives in R2 at:
- `s3://ai-translator-downloads/watch/catalog.json` - Array of WatchCatalogEntry objects
- `s3://ai-translator-downloads/watch/vtt/{vttSlug}.{lang}.30s.vtt` - VTT caption files

## Environment Variables

Required for publishing scripts (not needed for Next.js runtime):

```bash
# R2 bucket (defaults to ai-translator-downloads if not set)
R2_BUCKET=ai-translator-downloads

# R2 endpoint (required)
R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com

# R2 credentials (required)
AWS_ACCESS_KEY_ID=<r2-access-key-id>
AWS_SECRET_ACCESS_KEY=<r2-secret-access-key>
```

**Do not commit these credentials to the repository.**

For Next.js runtime (optional, falls back to bundled catalog if unset):

```bash
# Public base URL for watch assets
WATCH_ASSETS_BASE=https://<r2-public-domain>/watch

# OR use a direct catalog URL
WATCH_CATALOG_URL=https://<r2-public-domain>/watch/catalog.json
```

## Scripts

### Seed (One-time)

Upload all current watch pages and VTT files to R2:

```bash
npm run watch:seed
```

This:
1. Reads all existing watch page directories in `app/watch/*`
2. Uploads all VTT files from `public/watch/*.vtt` to R2 `watch/vtt/`
3. Creates and uploads a `catalog.json` with all entries

### Publish (Ongoing)

Add or update a single catalog entry:

```bash
npm run watch:publish add <catalog-entry.json> [vtt-dir]
```

Example:

```bash
npm run watch:publish add new-entry.json ./vtt-files
```

This:
1. Reads the catalog entry JSON file
2. Fetches existing `catalog.json` from R2
3. Merges the new entry (replaces if slug already exists)
4. Uploads updated `catalog.json`
5. Optionally uploads VTT files from the specified directory

## Catalog Entry Format

Each catalog entry must be a JSON file with this structure:

```json
{
  "slug": "example-slug",
  "videoId": "YouTubeVideoID",
  "vttSlug": "vtt-file-prefix",
  "sourceLang": "en",
  "tracks": ["en", "es", "ko", "pt"],
  "supportedLocales": ["en", "es", "ko", "pt"],
  "copy": {
    "en": {
      "title": "SEO title",
      "description": "SEO description",
      "keywords": ["keyword1", "keyword2"],
      "h1": "Page heading",
      "intro": "Introduction paragraph",
      "section1Title": "First section title",
      "section1Body": ["Paragraph 1", "Paragraph 2"],
      "section2Title": "Second section title",
      "section2Body": ["Paragraph 1"],
      "howToTitle": "How to use title",
      "howToBody": "How to use intro",
      "howToSteps": [
        { "title": "Step 1", "body": "Step 1 description" }
      ],
      "howToNote": "Note text",
      "pricingTitle": "Pricing section title",
      "pricingFree": "Free features",
      "pricingPaid": "Paid features",
      "freeLabel": "Free:",
      "paidLabel": "Paid:",
      "downloadTitle": "Download section title",
      "downloadBody": "Download section body",
      "downloadLinkText": "Link text",
      "ctaNote": "CTA note",
      "aboutTitle": "About section title",
      "aboutBody": ["About paragraph 1"],
      "language": "English",
      "topic": "Topic",
      "show": "Show name (optional)"
    },
    "es": { /* Spanish copy */ },
    "ko": { /* Korean copy */ },
    "pt": { /* Portuguese copy */ }
  }
}
```

## VTT File Naming

VTT files must follow the naming convention:

```
{vttSlug}.{lang}.30s.vtt
```

Examples:
- `U9DyHthJ6LA.en.30s.vtt`
- `U9DyHthJ6LA.es.30s.vtt`
- `ramsay-hot-ones.ko.30s.vtt`

## How It Works

### Runtime (Next.js)

1. `lib/watch/catalog-loader.ts` fetches `catalog.json` from R2 (if `WATCH_ASSETS_BASE` is set)
2. Falls back to bundled catalog if R2 is unavailable or env var is unset
3. Short in-memory cache (60s TTL) reduces R2 calls
4. `app/watch/[slug]/page.tsx` uses `dynamicParams = true` and `dynamic = 'force-dynamic'` for on-demand rendering
5. VTT files are proxied through `/api/watch-vtt/[file]` route, which fetches from R2 then falls back to `public/watch/`

### Benefits

- **No rebuild required**: Add new watch pages by uploading catalog entry + VTTs
- **Tens of thousands of pages**: No git bloat, no build time explosion
- **Graceful fallback**: If R2 is down or env is unset, existing pages still work from bundled catalog
- **Same-origin VTTs**: API route keeps YouTube embed and VTTs on the same domain

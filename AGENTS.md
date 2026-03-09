# stage5-tools Agent Guide

This file defines the default deployment workflow for this landing-page project.

## Project

- Repo path: `/Users/mikey/Developer/stage5/stage5-tools`
- Cloudflare Pages project: `stage5-tools`
- Primary domains: `stage5.tools`, `translator.tools`

## Default Deploy Behavior (One Go)

When asked to deploy, first ensure the command is run outside sandbox with escalated permissions.

Preferred auth path: if `npx wrangler whoami` succeeds, use the existing Wrangler login and deploy with:

```bash
cd /Users/mikey/Developer/stage5/stage5-tools \
  && npm run -s pages \
  && CI=1 npx wrangler pages deploy .vercel/output/static --project-name stage5-tools --commit-dirty=true
```

Token fallback: only if Wrangler is not already logged in and `/tmp/cf_pages_token` exists:

```bash
cd /Users/mikey/Developer/stage5/stage5-tools \
  && npm run -s pages \
  && TOKEN="$(cat /tmp/cf_pages_token)" \
  && CI=1 CLOUDFLARE_API_TOKEN="$TOKEN" HOME=/tmp npx wrangler pages deploy .vercel/output/static --project-name stage5-tools --commit-dirty=true
```

Notes:

- First check: run deploy commands with escalated permissions (outside sandbox).
- `npm run -s pages` runs `next build` and `next-on-pages`.
- Prefer the existing Wrangler OAuth/session login whenever available.
- Only read `/tmp/cf_pages_token` if that file exists and logged-in Wrangler auth is unavailable.
- Do not keep retrying the token path when `/tmp/cf_pages_token` is missing.
- Keep `HOME=/tmp` only for the token-based non-interactive fallback.
- Keep `CI=1` so Wrangler does not pause for interactive prompts in automation.
- Keep `--commit-dirty=true` because working tree may be dirty.
- Run these commands directly in the current shell. Do not wrap them in another quoted `/bin/zsh -lc "..."` layer, or `$(cat /tmp/cf_pages_token)` can be expanded in the wrong shell and pass an empty token.

## If Deploy Fails with `fetch failed`

1. Confirm the deploy command is running outside sandbox with escalated permissions.
2. Retry immediately using the same deploy command and the same auth path.
3. First verify whether Wrangler is already logged in:

```bash
cd /Users/mikey/Developer/stage5/stage5-tools \
  && npx wrangler whoami
```

4. If logged-in Wrangler auth is unavailable and `/tmp/cf_pages_token` exists, verify this works first:

```bash
cd /Users/mikey/Developer/stage5/stage5-tools \
  && TOKEN="$(cat /tmp/cf_pages_token)" \
  && CLOUDFLARE_API_TOKEN="$TOKEN" HOME=/tmp npx wrangler pages project list
```

5. If neither Wrangler login nor `/tmp/cf_pages_token` is available, stop and ask the user to authenticate instead of repeatedly retrying a missing token file.

6. Use retries (up to 5), still with escalated permissions, matching the auth path you selected:

Logged-in Wrangler auth:

```bash
cd /Users/mikey/Developer/stage5/stage5-tools \
  && npm run -s pages \
  && for i in 1 2 3 4 5; do
    echo "deploy attempt $i"
    CI=1 npx wrangler pages deploy .vercel/output/static --project-name stage5-tools --commit-dirty=true \
      && break
    sleep 3
  done
```

Token fallback:

```bash
cd /Users/mikey/Developer/stage5/stage5-tools \
  && npm run -s pages \
  && for i in 1 2 3 4 5; do
    echo "deploy attempt $i"
    TOKEN="$(cat /tmp/cf_pages_token)" \
      && CI=1 CLOUDFLARE_API_TOKEN="$TOKEN" HOME=/tmp npx wrangler pages deploy .vercel/output/static --project-name stage5-tools --commit-dirty=true \
      && break
    sleep 3
  done
```

## Post-Deploy Verification

- Capture Wrangler output URL: `https://<hash>.stage5-tools.pages.dev`.
- Build must pass before deploy is considered complete.
- Quick smoke checks (when DNS/network allows):

```bash
curl -sL --max-time 30 https://stage5.tools | rg "GTM-WTQTZDM4|G-5BJ3FXGGBS"
curl -sL --max-time 30 https://translator.tools | rg "GTM-WTQTZDM4|G-P85K20ZXE0"
```

If DNS resolution is unavailable in the execution environment, report deploy success using Wrangler's deployment-complete output URL.

## Analytics Guardrails

- GTM is the single analytics entrypoint from site code.
- Keep only GTM script/iframe install in `app/layout.tsx` via `NEXT_PUBLIC_GTM_ID`.
- Do not add direct GA4 `gtag` snippets in code when GTM GA4 tags are active.
- GA4 destination IDs are configured in GTM using hostname routing:
  - `stage5.tools` and `www.stage5.tools` -> `G-5BJ3FXGGBS`
  - `translator.tools` and `www.translator.tools` -> `G-P85K20ZXE0`

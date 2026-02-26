# stage5-tools Agent Guide

This file defines the default deployment workflow for this landing-page project.

## Project

- Repo path: `/Users/mikey/Developer/stage5/stage5-tools`
- Cloudflare Pages project: `stage5-tools`
- Primary domains: `stage5.tools`, `translator.tools`

## Default Deploy Behavior (One Go)

When asked to deploy, first ensure the command is run outside sandbox with escalated permissions, then run build + Pages prepare + deploy in one command:

```bash
cd /Users/mikey/Developer/stage5/stage5-tools \
  && npm run -s pages \
  && TOKEN="$(cat /tmp/cf_pages_token)" \
  && CI=1 CLOUDFLARE_API_TOKEN="$TOKEN" HOME=/tmp npx wrangler pages deploy .vercel/output/static --project-name stage5-tools --commit-dirty=true
```

Notes:

- First check: run deploy commands with escalated permissions (outside sandbox).
- `npm run -s pages` runs `next build` and `next-on-pages`.
- Use `/tmp/cf_pages_token` for Cloudflare auth.
- Keep `HOME=/tmp` so Wrangler runs non-interactively.
- Keep `CI=1` so Wrangler does not pause for interactive prompts in automation.
- Keep `--commit-dirty=true` because working tree may be dirty.
- Run this command directly in the current shell. Do not wrap it in another quoted `/bin/zsh -lc "..."` layer, or `$(cat /tmp/cf_pages_token)` can be expanded in the wrong shell and pass an empty token.

## If Deploy Fails with `fetch failed`

1. Confirm the deploy command is running outside sandbox with escalated permissions.
2. Retry immediately using the same deploy command.
3. If you see token/auth errors in non-interactive mode, verify this works first:

```bash
cd /Users/mikey/Developer/stage5/stage5-tools \
  && TOKEN="$(cat /tmp/cf_pages_token)" \
  && CLOUDFLARE_API_TOKEN="$TOKEN" HOME=/tmp npx wrangler pages project list
```

4. Use retries (up to 5), still with escalated permissions:

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

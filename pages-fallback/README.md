# Pages fallback replacement

This replaces the old Next.js Pages application. The approved release is
**published and verified**, deployment `010aa3d8-dac5-4885-8c92-1ae66bf8e597`
on September 9, 2026. See `docs/http-robustness-publication-2026-09-09.json`. The four web DNS records and active Pages custom domains still
support the production Worker routes; retain the Pages project and those records.

Build with `npm run fallback:build`. The output contains a bundled `_worker.js`
and an explicit all-paths `_routes.json`, with no old Next.js runtime or assets.

- The canonical Pages preview and new deployment aliases redirect GET/HEAD to the
  appropriate product site, preserving the path/query. Translator owns the old
  preview homepage; Watch, Echo and Reflect belong to Stage5.
- Unsupported methods receive 405 with `Allow: GET, HEAD`, without forwarding
  bodies. Malformed encoded paths receive 400. Responses are noindex/no-store.
- If an HTTPS production request reaches Pages beneath the Worker route, return
  503 with `Retry-After: 60`. This avoids redirect loops. The fallback no longer
  serves an independent application: recover the site by rolling back the
  production Worker, not by removing its routes to expose old Pages code.
- HTTP fallback GET/HEAD redirects to the same host on HTTPS. Other hosts receive
  421. There are no external fetches, cookies, telemetry, credentials or storage.

Future publications still require exact approval. Publish the frozen output to existing project
`stage5-tools`, production branch `master`, with `pages-fallback/wrangler.toml`.
Do not enable Git auto-builds or change DNS/routes as part of this action.

Existing immutable deployment URLs are separate resources and are not rewritten
by a new Pages publication. They remain available for rollback; this proposal
does not authorize deletion or claim to repair those archived URLs. The previous
August 31 Pages deployment is recorded in the September 9 dependency evidence.

Verify publication at both the canonical Pages alias and all four production web
hosts, including ordinary pages, image assets, redirects, invalid paths, and the
Pages GET/HEAD/OPTIONS/POST responses. The approved repair is not complete until
those live checks pass.

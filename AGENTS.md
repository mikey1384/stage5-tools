# stage5-tools Agent Guide

Follow the parent AGENTS.md and Mikey's exact action authority. No commit, push,
deployment, domain change, or account publication is authorized by this guide.

## Public repository: ops records live in stage5-ops

This repository is **public**. Reports, receipts, proposals, scorecards and the
local control panel live in the private sibling repo
`/Users/mikey/Developer/stage5/stage5-ops` (moved 2026-10-12). A `docs/<file>`
cited below that is not in this repository is `stage5-ops/docs/<file>`, and the
panel is `stage5-ops/control-panel/`. Never write reports, evidence, account
data or business correspondence into this repository; tax and legal records
stay outside Git.

## Project and deployment state

- Repository: `/Users/mikey/Developer/stage5/stage5-tools` (independent Git root).
- Production hosting: Worker `stage5-web` serves the four exact HTTPS web routes
  for `stage5.tools` and `translator.tools`. The original Pages project
  `stage5-tools` is the retained fallback, with automatic production/preview
  builds paused. Read both surfaces before future publication or rollback.
  Current production receipt: `docs/seo-production-migration-retry-2026-09-05.json`.
- The local September 5 candidate uses Next.js 15.5.25 and OpenNext Cloudflare
  1.20.6. The deprecated next-on-pages adapter cannot build this patched version.
  `npm run pages` therefore fails closed; do not downgrade security patches.
- `wrangler.toml` preserves the Pages fallback configuration.
  `wrangler.worker.toml` now records the four verified HTTPS production routes.
  `https://stage5-web.mikey1384.workers.dev` remains an isolated noindex preview
  with Google script loads excluded. Future Worker publication must preserve
  these four routes and the preview guard; there is no automatic Worker CI.
  The current published version and artifact are recorded in
  `docs/preview-deployment-2026-09-05.json`. Local work may be newer than that
  artifact; check the acceptance checklist before publication or promotion.
- The latest local release checks found and fixed 320px overflow and a YouTube
  readiness race. The exact approved rebuild is published and verified as
  `82a176fd-c0c1-4373-b900-4fd7013e61a6`. Its proposal and receipt are recorded in
  `docs/seo-preview-update-proposal-2026-09-05.json` and
  `docs/seo-preview-update-publication-2026-09-05.json`. Compare its
  explicit artifact hash definition and per-file manifest before uploading; do
  not mistake the older published preview version for this corrected build.
  The same artifact is now verified in production. The local config hash changed
  only after recording the already-live routes; the production receipt distinguishes
  the original build config from this synchronized routing config.
- The approved icon/text-contrast release `PERF-2026-09-06-01` was published
  to both production sites and the guarded preview at Worker version
  `8fe0c812-2aeb-49f0-9472-d5f7617a1efa`. Current receipt:
  `docs/seo-performance-release-publication-2026-09-06.json`. The prior
  `82a176fd-c0c1-4373-b900-4fd7013e61a6` version remains available for recovery.
  Its exact artifact manifest uses Python pathlib path-component ordering;
  compare every saved file hash as well as the aggregate hash before publication.
  Routes, bindings, DNS, Pages fallback and GTM v5 are preserved; ads remain off.
  Release test traffic and corrected collection filters are documented in
  `docs/seo-performance-test-traffic-observation-2026-09-06.json`. Future browser
  checks must also block `google.com/g/collect`, not only google-analytics.com.

- The latest approved compact-label release `PERF-2026-09-06-02` now serves both
  sites and the guarded preview at `605e48d1-142a-4355-9883-0cee3c37e28d`.
  Current receipt: `docs/watch-loading-release-publication-2026-09-06.json`.
  All 1,612 routes, 353 canonical pages, 117 captions, 57 responsive cases and
  14 download-event checks pass. Live files match the approved artifact; existing
  fonts, styles, routes, DNS, fallback and GTM v5 are preserved; ads remain off.
  The preceding `8fe0c812-2aeb-49f0-9472-d5f7617a1efa` version remains available
  for recovery. Field performance, Google indexing and business results remain open.
  The user directly reconfirmed Cloudflare-only use of the existing private-email
  hosting login to publish and verify this release; see its approval receipt.
  That exception does not grant private Google business-account authority.


- The approved timestamp correction `WATCH-DATES-2026-09-06-01` now serves both
  sites and the guarded preview at `afc94d19-45d6-454e-aefe-61b5e25a646c`.
  Current receipt: `docs/watch-video-dates-release-publication-2026-09-06.json`.
  Exactly 37 R2 VideoObject uploadDate values use documented source timestamps;
  all 185 Watch page versions, 1,612 routes, 353 canonical pages and 117 captions
  pass. Google's fresh Tom Hanks live test parses the exact timestamp and reports
  one valid video with both date warnings gone. Actual indexing remains open.
  The 123 caption objects, calendar dates, visible content, routes, DNS, bindings,
  fallback, GTM v5 and disabled ads are preserved. Prior version
  `605e48d1-142a-4355-9883-0cee3c37e28d` remains available for recovery.
  The current 1,559-file artifact and nine source changes are synchronized locally;
  do not use the preceding release manifest for this artifact. Two earlier Google
  indexing requests are already confirmed; do not repeat them.

- The approved `WATCH-EDITORIAL-2026-09-06-01` release now serves both production
  sites and the guarded preview at `f698a16d-7019-448d-b77d-cc5ad776e47b`.
  Receipt: `docs/watch-editorial-release-publication-2026-09-06.json`. The exact
  1,559-file artifact is synchronized to root `.open-next`; its prior bytes are
  backed up under the release's local directory. All 1,612 routes, 185 Watch
  versions, 117 captions, 64 changed-asset responses and 14 browser cases pass.
  Three caption bodies and 13 catalog entries were changed; all timings and the
  other 120 storage objects are preserved. A separately approved one-URL browser
  purge resolved the stale Portuguese caption; no CLI cache-purge scope exists.
  Ads stay off. The incomplete privacy draft was excluded. Full content and
  permitted-use review remain open. Prior Worker `afc94d19-45d6-454e-aefe-61b5e25a646c`
  and saved storage originals are the coherent recovery basis.

## Local verification and promotion

1. Establish the repository root, dirty state and intended revision. Preserve all
   unrelated user changes. Verify the active Cloudflare identity/account before
   authenticated reads or mutations; do not infer account authority from login.
2. Build locally with `npm run workers:build`, then run `npm test` and inspect the
   local Worker with `npm run workers:preview -- --port 8793`.
3. Run the rendered audit for both `RENDERED_AUDIT_HOST=stage5.tools` and
   `RENDERED_AUDIT_HOST=translator.tools`. Inspect the canonical/redirect matrix,
   all locales, R2 responses and failure behavior, plus browser and destination
   telemetry evidence. Build success alone is not production verification.
4. Follow [the rollout plan](docs/seo-rollout-2026-09-05.md). Obtain exact approval
   separately for preview publication and production host routing. Capture current
   Pages, DNS, Worker routes, bindings and custom-domain state first. Do not invent
   a deployment/rollback command while that state is unknown.
5. Record service, revision, build/config identity, deployment URL/version and UTC
   timestamp. Verify authoritative remote state and rendered production behavior.
   If verification is unavailable, leave the outcome unverified.

The candidate defaults Watch ads off. Do not enable them until the acceptance
checklist's content, consent and account gates pass. Mikey explicitly requested
Stage5 AdSense review on September 5 while those checks remained open; that
request is now submitted and verified as Getting ready / Review requested. This
overrides the earlier submission timing gate only. Do not submit a duplicate.
Do not publish GTM without approval of the exact version. See
[the single acceptance checklist](docs/seo-adsense-acceptance.md).

## Analytics Guardrails

- GTM is the single analytics entrypoint from site code.
- Keep only GTM script/iframe install in `app/layout.tsx` via `NEXT_PUBLIC_GTM_ID`.
- Do not add direct GA4 `gtag` snippets in code when GTM GA4 tags are active.
- GA4 destination IDs are configured in GTM using hostname routing:
  - `stage5.tools` and `www.stage5.tools` -> `G-5BJ3FXGGBS`
  - `translator.tools` and `www.translator.tools` -> `G-P85K20ZXE0`

## Landing Page Experiment Log

- `docs/landing-page-experiments.md` is the durable record for material
  Translator landing-page, funnel, and landing-page measurement changes.
- Update the log in the same commit as every such change. Record a stable ID,
  timezone-explicit commit timestamp, verified production-live timestamp,
  commit, exact change, falsifiable hypothesis, locked pre-change GA4 baseline,
  primary metric, guardrails, deployment evidence, and evaluation dates. Use
  `Not preserved` for an unknown historical release time; never guess it.
- On later GA4 reviews, append the observed result and status to the original
  entry. Do not rewrite its hypothesis or baseline after seeing the outcome.
- Evaluate by hostname and landing-page path. Page title may identify a release
  cohort but must not be treated as a separate landing page.
- Do not call an update a winner from raw traffic, impressions, or partial-day
  data. Prefer download intent, app activation, purchase, and settled revenue;
  state small-sample and cross-device limitations explicitly.

## Latest website publication — September 7, 2026

The approved portfolio/download release `PORTFOLIO-2026-09-07-02` is live on both domains and the guarded preview at `e99a097a-32d0-4714-8878-d3a1ad4ffda4`. Receipt: `docs/portfolio-release-publication-2026-09-07.json`. It adds the nine-language portfolio, Stage5-owned Echo and Reflect, and product-named download paths. Old Translator Echo URLs redirect to Stage5. All 1,744 routes, 366 canonical pages, 185 Watch versions, 117 captions and 74 changed-asset responses pass. The 1,570-file artifact is synchronized to root `.open-next`; its exact manifest is `.local/portfolio-20260907/artifact-manifest.json`. Prior version `f698a16d-7019-448d-b77d-cc5ad776e47b` and the preserved prior artifact remain the recovery basis. Routes, bindings, DNS, Pages fallback and GTM are unchanged; ads remain off. The unfinished `lib/legal-content.ts` draft is still excluded and preserved. Private Reflect loads no GTM, sends no writing for AI and has no completion/outbound-click tracking. Natural measurement, consent, content eligibility and AdSense outcomes remain open. Do not republish without new exact approval.

## Latest HTTP repair publication — September 9, 2026

The exact approved `HTTP-ROBUSTNESS-2026-09-09-01` release is live at Worker `45616b52-74db-4ad8-9a57-8f19d79a1a42`, serving both domains and the guarded preview. Pages project `stage5-tools` production `010aa3d8-dac5-4885-8c92-1ae66bf8e597` now serves the small gateway, not the retired full application. Receipt: `docs/http-robustness-publication-2026-09-09.json`. All 1,744 routes, 185 Watch page versions, 117 captions, 156 focused public requests and four exact remote Worker module hashes pass. DNS, routes, custom domains, bindings, GTM and ads-off behavior are preserved. The canonical Pages address redirects ordinary visits and rejects unsupported methods; historical immutable deployments retain their old code. Do not remove the Worker routes to expose Pages as an application fallback. Previous Worker `e99a097a-32d0-4714-8878-d3a1ad4ffda4` remains the recovery version. Active frozen release: `.local/http-robustness-20260909/release`, manifest `.local/http-robustness-20260909/release-manifest.json`. Root `.open-next` intentionally retains the prior 1,570-file release per this approval; do not mistake it for the new active artifact. The unpublished privacy draft remains intact. No commit, push, R2 or Google account change occurred; further publication requires new exact approval. Acceptance is 30/45; other SEO/advertising outcomes remain open.

## Latest Watch content publication — September 12, 2026

The user-approved `WATCH-EDITORIAL-2026-09-12-01` is published through **five existing R2 objects**, not a Worker deployment. Receipt: `docs/watch-editorial-publication-2026-09-12.json`. The catalog updates 105 copy fields across Lee Jung-jae, Yoo Ji-tae and Nolan in five languages; four existing caption objects normalize the Piarchia show name. Catalog SHA-256 is now `f1ddddac4545ff6f57a0469cad4be0a0b4c6fb03e80a8af703c5835b98c188ce`. All 185 Watch page versions, 117 captions and 35 redirect/download checks pass. The four caption URLs deliver approved bytes with cache HIT after normal revalidation; no purge was performed. Worker `45616b52-74db-4ad8-9a57-8f19d79a1a42` and both existing build artifacts are unchanged. The current catalog remains authoritative at runtime.

Seven intended local source-file hashes match the approved proposal. Preserve the pre-existing Spanish `huésped` difference in the local Lee Jung-jae caption; the remote payload retains the already-published `invitado` wording. Use the exact receipt/payload when comparing bytes rather than replacing unrelated local edits. Originals and publication evidence are in `control-panel/.local/watch-editorial-20260912/publication/`. Full audio, multilingual editorial, current product-claim and permitted-use review remain open; ads stay off and acceptance remains 30/45. No commit, push or Google account change occurred. Do not replay this completed publication.

## Latest analytics publication — September 14, 2026

`ANALYTICS-CONSENT-2026-09-14-01` is published and verified on the existing Worker at `59d1b507-5549-4b23-bd2d-b9cc42384256`, 100% from `2026-09-14T02:45:54.974391Z`. Receipt: `docs/analytics-consent-publication-2026-09-14.json`. Active frozen artifact: `.local/analytics-consent-20260914/release`, 1,573-file manifest SHA-256 `8db902d88faf6fc84f94cc8704e62fd528852cbe59275dde6c2f53b63e78cf82`. All remote modules, 1,744 routes, 366 canonical pages, 185 Watch versions, 117 captions, 152 public assets and nine privacy bodies pass. GA4 business account received four marked QA page views through the correct Stage5/Translator destination IDs. Ads remain off; GTM v5, routes, DNS, bindings, Pages gateway, R2 and the excluded policy draft are preserved. Root `.open-next` intentionally remains the older artifact; do not deploy it as this release.

The analytics-only choice repair is complete; regional advertising/CMP, broader policy/content eligibility, AdSense detection/review and natural funnel evidence remain open (29/45). QA URLs use `qa=analytics-consent-20260914-…`; exclude these four page views and associated test-session events from business conclusions. New full Los Angeles windows are Sep 14–20 and Sep 14–Oct 11, reviewed Sep 23 / Oct 14 at 08:00 Asia/Bangkok with existing daily reporting. Original experiment dates/limits remain unchanged. Previous Worker `45616b52-74db-4ad8-9a57-8f19d79a1a42` is the recovery version. No commit, push, new service, spending or Google account publication occurred. The private-email Cloudflare exception was explicitly approved for this release only; Google work continues under `mikey@stage5.tools`. Do not replay publication or infer new authority.


## Latest Watch workshop publication — September 19, 2026

`WATCH-RECOVERY-2026-09-19-01` is live and verified at Worker `12f8df0f-5980-41be-8d0a-f706ea9ab64c`, 100% from `2026-09-19T10:36:14.165601Z`. Receipt: `docs/watch-recovery-publication-2026-09-19.json`. It changes the existing English Tom Hanks page only, adding the approved original exercise and two noindex SRT practice files; other page languages and source interview/captions are retained. Frozen active artifact: `.local/watch-recovery-20260919/release`, 1,575 files, manifest SHA-256 `aaf854b9a827b677b61fb13fa691b3ee9446849f050761e8cfe5b3bb5533bf9b`. Root `.open-next` remains the older artifact; do not deploy it as this release.

All 1,744 existing page-route cases, 366 canonical pages, 185 Watch versions, 117 captions, 154 public assets and nine privacy bodies pass. New file URLs are noindex and www redirects pass. Remote module, DNS, routes, bindings, custom domains and Pages gateway are verified; GTM v5 and R2 are unchanged. Ads stay off. Prior Worker `59d1b507-5549-4b23-bd2d-b9cc42384256` is the recovery basis. No Git or Google account mutation occurred. The user's private-email Cloudflare exception covers this release only. Do not replay it or infer future authority.

The body `watch_app_cta` on this English page now means navigation to the Translator download page, not an installer click. Consent gating and browser navigation pass; fresh GA4 destination receipt remains open. Marked Watch QA and its resulting Korean Translator page visit must not be counted as business outcomes. Existing September 23 evaluations remain; this page's new complete-day windows are documented in `docs/landing-page-experiments.md`. Caption permission, wider content/locales, full privacy, certified advertising consent and AdSense approval remain open. Acceptance stays 30/45.


## Prepared remaining work — September 19, 2026

`WATCH-LOCALES-2026-09-19-01` is a local, unpublished five-file candidate extending the Tom Hanks workshop to four other page languages. Frozen artifact: `.local/watch-locales-20260919/release`; proposal and final local/hosting checks: `docs/watch-locales-proposal-2026-09-19.json`. Five locales pass desktop/mobile interaction and canonical/redirect/sitemap/download checks. Preview: `http://localhost:8849/ko/watch/tom-hanks-smartless`; use localhost because the numeric loopback hostname does not preserve locale rewriting. Exact new publication approval is pending; production remains `12f8df0f-5980-41be-8d0a-f706ea9ab64c`. No commit or push.

`docs/watch-remaining-review-2026-09-19.json` classifies all 37 source families; it is not completed audio or rights review. The separate 1,295-field workflow/cost catalog draft is not in the locale artifact and needs rendered verification. The fuller English policy review and provider follow-up remain local and unpublished/unsent. Do not replay prior releases or count draft preparation as eligibility.

For Cloudflare reads, the direct default.toml access token became stale while Wrangler retained valid current authentication. Use the official `wrangler auth token --json` only through an in-memory consumer that never prints or saves credentials, then verify identity/account. The recovered hosting preflight passes. Bot Management Read remains unavailable on both existing credentials. The browser control connection timed out twice; business Gmail still works, but fresh GA4 CTA receipt and Google account checks remain open. September 23 evaluations are unchanged. Panel review: `http://127.0.0.1:4318/remaining-work-review.html`.

## Latest Watch language publication — September 19, 2026

WATCH-LOCALES-2026-09-19-01 is published and verified at Worker 254926e0-e7b4-4bf9-80a0-4b03d1d215d3, 100% from 2026-09-19T12:38:21.094168Z. Receipt: docs/watch-locales-publication-2026-09-19.json. Frozen active artifact: .local/watch-locales-20260919/release, 1,575 files, manifest 4a4788ea3265d83e549ffea5267ffcb0a07333c11c244e96e30bc43b6aff2c95. All five workshop languages and download destinations, 1,744 unchanged route cases, 185 Watch versions, 117 captions, 154 assets and nine published privacy bodies pass. R2, GTM v5, routes, DNS, bindings and Pages gateway are preserved; ads off. Previous 12f8df0f-5980-41be-8d0a-f706ea9ab64c remains recovery. Root .open-next stays older; do not deploy it. No Git or Google account publication. The user's all-approved reply covers this exact release's Cloudflare identity exception and the prepared provider email only.

The provider follow-up is sent and verified; do not replay. Gmail message 1a0b9aa276ffd9fc; receipt docs/consent-provider-followup-sent-2026-09-19.json. No trial/purchase. Wider workflow/privacy drafts were excluded. Full content/source-use, certified consent, fresh GA4 receipt and crawler settings remain open. New locale windows: September 20–26 / September 20–October 17, evaluated September 29 / October 20 or later after processing; preserve September 23 evaluations and sample limits. Acceptance remains 30/45.

## Privacy and Analytics verification — September 19, 2026

Business read-only Analytics access is approved and verified through the existing
encrypted `scripts/stage5-gmail` profile. Both Analytics Data/Admin APIs are
enabled in existing project `stage5-gmail-cli-20260823`; do not repeat bootstrap.
`scripts/stage5-analytics.mjs settings` reads only the fixed business account and
property, verifying identity before API use. `report` / `realtime` take a local
JSON query file; `metadata` reads the report schema. Credentials stay in memory
and must never be printed. This grants no account-edit authority.

Receipt: `docs/privacy-consent-analytics-verification-2026-09-19.json`. Google
received the marked ordinary-browser Watch body CTA and both website page views
at 13:25 UTC. Exclude both recorded QA markers and associated events/sessions;
see the receipt and experiment log. The body CTA is download-page navigation,
not an installer event. Fresh destination custom parameter values still await
processed reporting; Realtime API cannot return event-scoped custom dimensions.
Retention remains 2-month event / 14-month user with reset on new activity.
Existing Google processing terms were accepted February 26. No Analytics
settings, GTM, production website or ads were changed.

Local `VIDEO-CHOICE-2026-09-19-01` is NOT published or approved. Frozen candidate
is `.local/privacy-consent-20260919/release`; exact manifest/proposal is in
`docs/video-choice-proposal-2026-09-19.json`. Ten local browser cases, 85 tests
and 1,744 routes pass. Google warns against click-required video loading: this
candidate has a material video-search tradeoff that must be reviewed. Root
`.open-next`, the active Watch locale release and excluded policy draft remain
preserved. Full policy/provider facts and certified advertising consent remain
open. Ads stay off; acceptance remains 30/45.

## Latest website publication — September 26, 2026

`AGENTS-2026-09-26-01` is live at Worker `4498f4eb-12d0-452f-a892-1de450f85bf6`, 100% from 2026-09-26 (deployed by Mikey via `.local/agents-20260926/deploy.sh`). It rewrites `/agents` on translator.tools around using Translator with an existing Claude or Codex subscription: exact `claude mcp add` / `codex mcp add` / Claude Desktop setup, the free caption + agent-translation path, and removal of claims the packaged app does not support (agent-opened checkout, settings changes, "toggle and relaunch", "billing same as UI"). Source is the September 19 live build (`.local/watch-locales-20260919/build`) plus that one file, in `.local/agents-20260926/build`; unpublished working-tree drafts are not included. Build, indexing audit (216 URLs) and 66/67 site tests pass (the Pages-gateway test fails identically on the prior release because `pages-fallback/` is not in release snapshots). Live check: new title/headline/setup served, both domains 200, redirects unchanged. Previous Worker `254926e0-e7b4-4bf9-80a0-4b03d1d215d3` is the recovery version (rollback command in `deploy.sh`). Direction for Translator and Echo is owned by Claude per `docs/translator-growth-plan-2026-09-26.md`; AdSense work is paused there.

Follow-up `AGENTS-NAV-2026-09-26-02` is live at Worker `af465cee-84fe-47f2-adf0-865fb2009283` (deployed by Mikey via `.local/agents-nav-20260926/deploy.sh`): "Claude & Codex" nav link to `/agents` in all nine locales, and corrected `llms.txt`, `llms-full.txt` and `agent-manifest.json` (setup commands, free caption + agent-translation path, no unsupported checkout/settings claims). Source: the `AGENTS-2026-09-26-01` build plus five files in `.local/agents-nav-20260926/build`. Live check: nav in en/ko/pricing, new llms.txt and manifest served, both domains 200. Recovery version `4498f4eb-12d0-452f-a892-1de450f85bf6`. The same five files are also changed in the working tree.



## Translator privacy publication — September 27, 2026

`TRANSLATOR-PRIVACY-2026-09-27-01` is live and verified at Worker `c52c9a62-8dbe-4b16-94b3-9fd81086038e`, 100% from `2026-09-27T09:23:46.540335Z`. Receipt: `docs/translator-privacy-publication-2026-09-27.json`. Mikey explicitly approved this policy publication and the prepared WinGet reply. Source: `.local/translator-privacy-20260927/build`, based on the published September 26 nav release plus only `lib/legal-content.ts`. The policy now describes Translator's media/provider/agent flows, credentials, retention/deletion, analytics, payments, ads and user controls in all nine locales. All nine exact policy texts, nine Stage5 privacy redirects, both full rendered-domain audits and preserved hosting state pass. Build and 66 site tests pass; the same pre-existing missing Pages fixture remains. The existing PrivacyUrl is unchanged.

Reply posted and verified: https://github.com/microsoft/winget-pkgs/pull/414314#issuecomment-5854637815. Microsoft review remains pending; this is not approval or merge. Recovery Worker: `af465cee-84fe-47f2-adf0-865fb2009283`. Routes, DNS, bindings, Pages gateway and ads-off setting are unchanged. The working-tree privacy export is synchronized; its previous unpublished draft is backed up at `.local/translator-privacy-20260927/legal-content.previous-working-tree.ts`. Other drafts and root `.open-next` are preserved. No commit/push occurred. Do not deploy the root artifact or replay this completed publication.

`SEO-TRIM-2026-10-13-01` is live at Worker `586329c8-b76a-42ef-bd01-01a332dad5bc` (approved by Mikey). It marks `noindex, follow` and drops from the sitemap the 63 localized translator.tools pages Search Console reported as "Crawled - currently not indexed" with < 10 impressions in 90 days (`NOINDEXED_LOCALIZED_PAGES` in `lib/locales.ts`; sitemap 149 → 86). Indexed pages, English, Korean and stage5.tools are unchanged. Built from the live `c52c9a62` source + 4 files, so master's unpublished drafts (`lib/legal-content.ts` edited after the September 27 publication, `YouTubeDemo.tsx`, `lib/watch/video-choice-copy.ts`) are still not live; do not deploy master wholesale. Rollback: `c52c9a62-8dbe-4b16-94b3-9fd81086038e` via `.local/seo-trim-20261013/deploy.sh`. Receipt: `stage5-ops/docs/seo-trim-publication-2026-10-13.md`. Search data comes from `stage5-ops/scripts/gsc.py`, not the web UI.

`SEO-DOWNLOADER-2026-10-19-01` is live at Worker `4c53abad-48c3-4092-9b54-01d1c8918f00` (approved by Mikey). Every `/video-downloader` page gets a "subtitles in your language" path to the app (new section after the hero, real app screenshots, existing download button; clicks labelled `Downloader - subtitles in your language`), and stage5.tools / translator.tools home titles name the product. Downloader page titles/descriptions are unchanged on purpose. Built from the live `bcd6296` source (= master) + branch `seo-downloader-path`, now merged to master, so master matches live again. Rollback: `459db03b-8c50-4380-86f5-1980349e055b` via `.local/seo-downloader-path-20261019/deploy.sh`. Receipt and experiment log: `stage5-ops/docs/seo-downloader-publication-2026-10-19.md` (kept out of this public repo with the other ops records).

# Landing page experiment log

This is the durable record for Translator acquisition-page changes. It exists so
later GA4 reviews can distinguish a plausible story from an observed result.

The [September 5 status report](seo-status-2026-09-05.md) records the latest
Search Console, GA4 and AdSense evidence. Its GA4 window ends September 4, still
in progress in the property's Los Angeles timezone when inspected. The figures
are provisional and the window spans several releases; no experiment is declared
a winner from this review.


## MEAS-2026-09-05-01 — Restore existing app events and register reporting fields

- Status: approved publication verified; business outcome and new GA4 report
  receipt remain unevaluated.
- Commit / commit timestamp: not committed; explicit approval covered deployment
  and account saves, not commit or push. API base HEAD remains
  `2610358a59fe8360cfb2faa45f92463f178b8925`; the two approved file hashes and
  bundle hash are preserved in the release proposal.
- Production live: API version `ef2f2ec5-c413-47ed-9e44-5cb6c36a5c6b` created
  September 5, 2026 at 14:08:53 UTC / 21:08:53 Asia/Bangkok, verified at 100%.
  Ten exact GA4 definitions were saved and reload-verified by 14:45:54 UTC /
  21:45:54 Asia/Bangkok. The exact individual Google server save timestamps were
  not preserved; this is the final verification time.
- Exact change: accept 34 event names already emitted by the current desktop,
  expanding the API contract from 17 to 51. Register ten bounded event-scoped
  reporting fields for Watch context, app value and commerce scope. Preserve
  authentication, deduplication, internal exclusion and server-only gross
  purchase authority. No website/GTM release, database migration, new collection
  fields, identity joins, ad activation, filter or key-event changes.
- Falsifiable hypothesis: naturally occurring supported desktop events previously
  rejected with 400 are accepted and appear in both the outbox and GA4 after
  processing, without increased pending events or duplicate purchase reporting.
  This change tests reporting completeness; more recorded events alone are not
  evidence of more customers or higher conversion.
- Locked pre-change baseline: August 8–September 4 inclusive, Los Angeles time,
  refreshed before deployment. GA4 471 shared-property sessions, 40 installer
  clicks (28 Windows / 12 Mac), 59 app opens across 19 anonymous app subjects,
  five first-value activations, nine checkout starts and five distinct purchases
  across two app subjects totaling $5. All 12 recorded server-event type totals
  match GA4; five purchases match fulfillment records. These aggregates do not
  connect an individual browser visit to an installation or purchase. See
  `measurement-ga4-destination-2026-09-05.json` and
  `measurement-aggregate-reconciliation-2026-09-05.json`.
- Primary metric: real new event-type receipt at both storage and the GA4 report
  boundary, with event-level dimensions populated for eligible subsequent data.
  Evaluate web acquisition by hostname and landing path. Do not divide desktop
  counts by website sessions to invent a matched conversion rate.
- Guardrails: preserve verified gross purchase counts/values, no duplicate key
  events, no preview-host leakage, bounded context without customer content,
  no synthetic report pollution, and explicit consent/processing cohorts.
  Queued app retries lack their original occurrence timestamp, so receipt times
  can include older activity. Refunds, fees and payouts are unreconciled.
- Validation and deployment evidence: 10 analytics tests, 25 payment tests,
  type checking, a dry bundle and all 34 strict Google debug shape checks pass.
  The uploaded live contract has all 51 exact approved events; health returns
  success and an unauthenticated event request returns 401. See
  `measurement-api-publication-2026-09-05.json` and
  `measurement-ga4-definitions-publication-2026-09-05.json`.
- First observation, September 5 at 14:28:53 UTC / 21:28:53 Asia/Bangkok:
  20 real newly accepted events across four types are stored and transport-sent,
  none pending. No processed GA4 receipt was verified. This supports acceptance
  and forwarding only; it does not establish completed reporting or a lift.
- Evaluation windows: September 6–12 is the first seven complete Los Angeles
  days; review after September 13 at 07:00 UTC / 14:00 Asia/Bangkok plus report
  processing. September 6–October 3 is the first 28 complete days; review after
  October 4 at 07:00 UTC / 14:00 Asia/Bangkok plus processing. New custom fields
  require eligible data and Google's advised 24–48-hour processing time.
  These are evaluation dates, not scheduled automation.
- Subsequent observation, September 5 at 15:15 UTC / 22:15 Asia/Bangkok:
  GA4 Realtime shows three repaired types (four events total) and six context
  keys. Destination receipt is verified for this small sample. It does not
  reconcile the earlier 20-event outbox window or establish custom-dimension
  report values. No conversion lift or winner is claimed. See
  `measurement-ga4-post-release-receipt-2026-09-05.json`.
- Concurrent changes: the earlier same-day site migration and the approved
  caption/copy publication (13 caption files; 25 catalog fields; no timing or
  route changes) can affect acquisition independently. Do not attribute a
  before/after business change to the reporting repair alone.

## Release timeline

All timestamps use Asia/Bangkok (`UTC+07:00`). Cross-check GA4 against the
**production live** time when it is known; the commit time is only a fallback.

| Change committed | Production live      | ID               | What changed                                                      | Commit    |
| ---------------- | -------------------- | ---------------- | ----------------------------------------------------------------- | --------- |
| Not committed | API: 2026-09-05 21:08:53; GA4 verified: 21:45:54 | MEAS-2026-09-05-01 | Restore 34 existing app events; register ten reporting fields | Approved working tree |
| 2026-08-23 00:36 | 2026-08-23 00:45     | LP-2026-08-23-01 | Restricted production telemetry and Watch ads to exact live hosts | `c213032` |
| 2026-08-22 20:26 | Not preserved        | LP-2026-08-22-01 | Made the complete R2 Watch catalog discoverable and measurable    | `2e07786` |
| 2026-08-15 06:08 | 2026-08-15 06:18     | LP-2026-08-15-01 | Added measured agent routes for translation, SRT editing, dubbing | `42e4b59` |
| 2026-08-12 11:43 | 2026-08-12 11:54     | LP-2026-08-12-03 | Added measured Windows, FAQ, and agent handoffs                   | `2504290` |
| 2026-08-12 07:30 | 2026-08-12 07:35     | LP-2026-08-12-02 | Added early, tracked paths to translation, downloader, and FAQ    | `4eb8148` |
| 2026-08-12 07:15 | By 2026-08-12 07:33  | LP-2026-08-12-01 | Kept the recommended mobile download CTA above the fold           | `e23b44a` |
| 2026-08-06 10:16 | Not preserved        | LP-2026-08-06-03 | Replaced abstract proof with the real multitab workspace          | `e40ab14` |
| 2026-08-06 09:47 | Not preserved        | LP-2026-08-06-02 | Clarified the homepage feature hierarchy                          | `272efd5` |
| 2026-08-06 09:00 | Not preserved        | LP-2026-08-06-01 | Refreshed homepage positioning and agent discovery                | `0e056b9` |
| 2026-06-10 12:55 | Not preserved        | Historical       | Added localized Echo page and homepage conversion work            | `a495dc5` |
| 2026-04-25 09:23 | Not preserved        | Historical       | Repositioned the homepage around translated subtitles             | `f718876` |
| 2026-03-10 17:32 | Not preserved        | Historical       | Improved homepage copy                                            | `12ec25d` |
| 2026-03-09 16:29 | Not preserved        | Historical       | Major presentation update                                         | `0752ccb` |
| 2026-03-05 17:55 | Not preserved        | Historical       | SEO improvements                                                  | `e30c964` |

## Operating rule

- Add an entry in the same commit as every material landing-page, funnel, or
  landing-page measurement change.
- Lock the pre-change baseline before release. Use hostname plus landing-page
  path as the cohort; use page title only to identify a release cohort.
- Record the commit timestamp, verified production-live timestamp, hypothesis,
  primary metric, guardrails, deployment evidence, and the earliest useful 7-
  and 28-day read dates. State the timezone and write `Not preserved` instead of
  guessing a missing historical release time.
- Append results to the original entry. Do not rewrite its hypothesis or
  baseline after seeing the outcome.
- Do not call a change a winner on impressions, raw traffic, or a partial-day
  sample. Prefer download intent, activation, purchase, and settled revenue.
- Website-to-desktop metrics are aggregate. Never infer a deterministic
  cross-device identity join.

## Locked baseline — through 2026-08-11

Property: Stage5/Translator (`526070569`). Revenue authority remains the
server-side `purchase` event.

| Window                  | Sessions | Active landing-page users | Avg engagement/session | Key events | Session key-event rate | Revenue |
| ----------------------- | -------: | ------------------------: | ---------------------: | ---------: | ---------------------: | ------: |
| Aug 5–11 (7 days)       |       95 |                        84 |                    21s |         18 |                 14.74% |   $1.00 |
| Jul 15–Aug 11 (28 days) |      410 |                       380 |                    12s |         78 |                 10.98% |   $1.00 |

Seven-day funnel evidence:

- `download_mac_click`: 11 events / 9 users.
- `download_windows_click`: 6 events / 5 users.
- `app_open`: 31 events / 8 users.
- `app_meaningful_use`: 3 events / 3 users.
- `begin_checkout`, `checkout_return_success`, and `purchase`: one each.

Seven-day acquisition quality:

| Source / medium              | Sessions | Key events |
| ---------------------------- | -------: | ---------: |
| `(direct) / (none)`          |       46 |          2 |
| `chatgpt.com / ai-assistant` |       30 |          8 |
| `youtube.com / referral`     |        6 |          1 |
| `google / organic`           |        4 |          4 |

Seven-day landing-page signals:

| Landing page        | Sessions | Avg engagement/session | Key events | Session key-event rate |
| ------------------- | -------: | ---------------------: | ---------: | ---------------------: |
| `/`                 |       43 |                    20s |          6 |                 13.95% |
| `/ko`               |        8 |                 1m 06s |          2 |                    25% |
| `/zh`               |        4 |                     3s |          2 |                    25% |
| `/zh/faq`           |        4 |                     3s |          0 |                     0% |
| `/video-downloader` |        3 |                     7s |          1 |                 33.33% |
| `/translate`        |        2 |                     2s |          1 |                    50% |

Small localized samples are directional, not proof. The Chinese FAQ is the
clearest measurable handoff gap: it attracts search demand but has not yet shown
a recorded next step.

## LP-2026-09-05-01 — Stage5 discovery and Watch ownership (live; evaluating)

- Status: approved production migration verified. Commit/time: not yet committed.
  Base commit: e543aae0a7edd536473f7af76c15f1274ce5fc89 plus the reviewed working tree.
  Production-live verified: 2026-09-05T12:03:39.739Z (September 5, 05:03:39 America/Los_Angeles).
  Full verification complete: 2026-09-05T12:18:54.072716+00:00.
- Change: distinct Stage5 homepage in five locales; Watch canonicals, sitemaps,
  links and redirects move to Stage5. Translator product URLs remain canonical
  on Translator. Remove two unavailable sources, correct video schema and AI
  processing copy, clarify previews/source links, remove player overlays, add
  failure feedback, default ads off and consent denied. Security patches require
  a separately approved Pages-to-Worker hosting migration.
- Hypothesis: within 28 complete days after a verified migration, Stage5 gains
  Google-selected canonical Watch pages and organic Watch clicks, while combined
  Watch clicks across the two properties do not fall. The clearer preview/source
  experience should improve measured engagement without materially reducing
  downloader acquisition or aggregate activation.
- Locked dated baseline: Search Console Aug 6–Sep 2: Stage5 0 clicks / 2
  impressions / 0 indexed pages; Translator Watch 0 clicks / 71 impressions;
  Translator total 62 clicks, including 54 downloader clicks. GA4 Aug 8–Sep 4:
  77 organic sessions, Watch 37 landing sessions (3 organic), 0 Watch key events;
  40 custom download clicks, 59 app opens, 5 meaningful-use events, 5 purchase
  events / $5 reported purchase revenue. AdSense 0 impressions / $0. These
  Google windows differ; the GA4 endpoint was partial and remains provisional.
  Preserve these figures and add a fresh complete pre-release window before
  approval; do not silently replace the original baseline.
- Primary outcomes: Stage5 Google-selected indexed URLs and Search Console
  organic clicks to canonical Stage5 Watch URLs. Compare combined Watch clicks
  on both domains during migration so transferred attribution is not growth.
- Guardrails: existing Translator downloader clicks; consent-adjusted Watch
  landing engagement, CTA/download intent per session; aggregate activation and
  server-authoritative purchases, with Stripe settlement reconciliation. Never
  infer an individual browser-to-desktop join from these aggregates.
- Consent changes can reduce observed GA4 counts. Annotate the default/update
  rollout and segment comparable consent cohorts; a recording drop alone is not
  evidence of audience loss. This is a bundled remediation, not a randomized test.
- Deployment evidence: isolated preview approved and published September 5 at
  07:04:24 UTC, version c6a1f829-747c-47f3-9b27-b670679d2afc. Preview analytics and
  ads are excluded; this is not the experiment's production-live timestamp.
  Production subsequently migrated to version 82a176fd-c0c1-4373-b900-4fd7013e61a6.
  See `seo-production-migration-retry-2026-09-05.json` for exact routes and artifact.
  Use September 6–12 as the first seven complete Los Angeles days (review September 13),
  and September 6–October 3 as the first 28 complete days (review October 4). These
  are evaluation dates, not scheduled automations. No winner declared.
  A new complete pre-release GA4 window was not preserved; the original dated
  baseline above remains locked and must be described with its stated limitations.
- September 5 release QA correction (local only): at 320px the shared header
  controls can wrap to preserve the language and download actions. Stage5's
  smallest-screen heading and Watch player fit the viewport; the player waits
  for YouTube readiness before polling. This fixes observed overflow/startup
  failures, without changing CTA destinations or event definitions. All 27
  Translator home checks (nine languages at three widths) pass. The locked
  hypothesis, baseline, production-live timestamp and evaluation dates above
  remain unchanged; the exact rebuilt preview is awaiting separate approval.

- September 7 daily observation: four canonical Stage5 Watch pages are confirmed
  indexed in individual Google inspections (KO Ferran Adrià, KO Paul Mescal,
  KO Florence Pugh, EN Kore-eda); three explicitly show an indexed video. The
  September 4 aggregate zero lags these newer records. The homepage record is
  internally inconsistent, Watch hub/Tom Hanks remain unknown, and VI Florence
  is crawled/not indexed. Search August 8–September 4 remains pre-migration:
  Stage5 0 clicks/2 impressions, Translator 62 clicks versus 35 in the preceding
  28 days. This supports initial canonical/indexing progress, not traffic lift.
  GA4 August 9–September 5 (complete calendar days, Los Angeles) has 37 Watch
  landing sessions, 3 organic, 0 recorded installer clicks, 0 key events/$0.
  The shared property has 39 installer intents, 59 app opens, 6 activations and
  5 purchase events/$5, all revenue attributed to Unassigned. No fresh financial
  reconciliation or individual acquisition join was performed. Most of this
  window precedes the migration; it does not meet the evaluation dates above.
  Preserve the original baseline and hypothesis. See
  [September 7 daily report](seo-daily-report-2026-09-07.md).

## LP-2026-08-22-01 — R2 Watch discovery and preview measurement

- Commit: `2e07786` — `Harden R2 watch SEO localization and telemetry`.
- Change: made every valid R2 catalog entry available on the localized Watch
  indexes and detail routes without requiring a rebuild. Added exact canonical
  and language alternates, server-rendered Article and VideoObject structured
  data, localized navigation and preview controls, exhaustive sitemap output,
  strict VTT/catalog validation, and bounded playback, cutoff, language,
  caption-delivery, and app-CTA diagnostics. AdSense remains a separate rollout
  gate and is not part of the pre-release measurement claim.
- Hypothesis: search visitors who land on a correctly localized, playable Watch
  preview will reach the desktop-app CTA at a measurable rate, while catalog and
  caption health telemetry will distinguish acquisition friction from delivery
  failures.
- Locked baseline: the production sitemap exposed 50 Watch URLs (five indexes
  plus nine bundled entries in five page locales) while R2 contained 39 entries.
  No reliable Watch funnel baseline exists: the published GTM trigger did not
  forward any of the Watch data-layer events before this release. Do not infer a
  zero-event conversion rate from that instrumentation gap.
- Primary read: `watch_app_cta / Watch detail session`, segmented by placement,
  locale, selected caption language, landing source/medium, and device. Supporting
  reads are organic Watch landing sessions, `watch_play`, `watch_cutoff`, and
  `watch_caption_load` success/error mix. None is a download, activation, or
  purchase authority.
- Guardrails: every catalog-backed sitemap URL returns 200 with an exact
  canonical and hreflang set; unsupported locale/copy combinations return 404;
  every declared VTT returns nonempty `text/vtt`; no customer content enters
  telemetry; Watch indexes remain free of the AdSense loader; and app downloads,
  `app_open`, `app_meaningful_use`, and settled `purchase` remain authoritative
  downstream measures.
- Verification: analytics tests passed 10/10, Watch validation/runtime tests
  passed 7/7, JSON-LD safety passed 1/1, the production build and Cloudflare
  adapter build passed, and an exhaustive Pages-artifact audit using the live R2
  binding passed 358 sitemap URLs, 195 Watch detail URLs, all 39 index cards per
  locale, and all 123 declared caption files. By 2026-08-23 the release was live
  on Cloudflare Pages, and published GTM Version 4 forwarded the complete set of
  13 bounded product-journey events. The exact production-live timestamp was not
  preserved and must not be guessed.
- Earliest reads: seven and 28 full days after both the Pages release and the
  corresponding GTM event-forwarding version are verified live. Require at least
  100 eligible Watch detail sessions before interpreting a small CTA rate.
- Outcome: pending; September 5 observation appended below.
- Review on 2026-09-05: the August 8–September 4 GA4 window contains 37 Watch
  landing sessions/30 active users and 74 Watch page views/31 active users,
  including indexes. There are three organic landings, all attributed to Google.
  Of the 74 views, 73 occurred on translator.tools and one on the stage5.tools
  Watch index. GA4 contains eight caption-load events, one Watch play and one
  cutoff; no Watch app-CTA event appears. No key events or revenue are attributed
  to Watch. The 100-eligible-detail-session threshold is not met, and absent
  custom dimensions prevent the intended caption-result/placement breakdown.
  Search Console's distinct August 6–September 2 Watch report shows 71 impressions
  and zero clicks; its September 3 video report lists 151 pages with indexed
  videos property-wide. This establishes early discovery and measurement, not
  conversion success. Keep the original hypothesis and baseline unchanged.

- Review on 2026-09-07: the complete-calendar August 9–September 5 GA4 window
  shows 37 Watch landing sessions/30 users, 3 organic, and 0 recorded custom
  installer-click events, key events or revenue. This landing cohort includes
  both hosts and index pages. Its nine event rows include 7 caption loads,
  7 video starts, 1 Watch play and 1 cutoff. The 100 eligible detail-session
  threshold remains unmet; no winner, failure cause or reliable conversion lift
  is established. The intended custom-dimension breakdown was not re-audited
  today. The September 6 optional app-reporting change alters future coverage.
  See [current daily account evidence](seo-daily-report-2026-09-07.json).

## LP-2026-08-23-01 — Exact production-host telemetry and advertising guard

- Commit: `c213032` — `Guard production telemetry and Watch ads`.
- Change: replaced unconditional GTM and Watch-detail AdSense script loading
  with an exact browser-host allowlist covering only `translator.tools`,
  `www.translator.tools`, `stage5.tools`, and `www.stage5.tools`. Cloudflare
  Pages project/deployment hosts, localhost, unlisted subdomains, and lookalike
  domains do not initialize GTM or AdSense and now receive
  `X-Robots-Tag: noindex, nofollow` on app-route responses so preview copies
  cannot compete with the canonical production pages in search.
- Hypothesis: excluding non-production renders will eliminate preview and local
  traffic from GA4/Google Ads and prevent accidental ad requests on Pages hosts
  without reducing measured production journeys or Watch CTA visibility.
- Locked baseline: the previous site output installed GTM on every host, and the
  Watch detail layout installed AdSense on every host. GTM's hostname lookup
  defaulted unknown hosts to the Translator measurement ID. A preserved count
  of Pages-host sessions or ad requests does not exist, so do not invent a
  contamination rate.
- Primary read: zero GA4 events with a Pages hostname after rollout, together
  with continued `page_view`, download-intent, and Watch diagnostic events on
  both production domains. This is an instrumentation-integrity check, not a
  conversion experiment.
- Guardrails: exact-match hosts only; no wildcard production subdomains; Watch
  indexes remain ad-loader free; the AdSense meta and `ads.txt` publisher IDs
  remain aligned; no second GA/gtag entrypoint; and no customer content enters
  telemetry.
- Verification: 16 analytics/host-loader tests, eight Watch tests, and one JSON-
  LD safety test pass. The production and Cloudflare adapter builds pass. The
  R2-backed rendered audit passes 358 indexable URLs, 195 Watch detail renders,
  29 noindex routes, 16 redirects, explicit 404 probes, all 39 catalog entries,
  and all 123 declared VTT responses. The host guard was verified live on both
  production domains by 2026-08-23 00:45 and on Pages deployment
  `5dabd448.stage5-tools.pages.dev` with no third-party loaders. Follow-up commit
  `a20fa39` makes the R2 publisher reject page locales that the Watch router does
  not expose while preserving those languages as caption/source languages; its
  artifact passed 25 tests, 124/124 R2 metadata checks, and the same exhaustive
  rendered audit before deployment to `3c182102.stage5-tools.pages.dev`, then
  production verification at 2026-08-23 01:03. The subsequent preview-indexing
  guard passed the four-production-host/non-production-host header matrix and
  the same exhaustive rendered audit before deployment. At
  `2026-08-23T05:42:41Z`, the public GTM resource reported Version 5 and exposed
  the intended host guard, both GA4 destinations, all five Watch events, the
  `AW-17971737430` conversion destination, and cross-domain linking limited to
  `translator.tools` and `stage5.tools`. A follow-up Cloudflare audit found all
  124 R2 objects carrying the intended cache metadata. The Watch catalog and a
  representative VTT now return `CF-Cache-Status: HIT` on consecutive custom-
  domain requests, closing the earlier edge-eligibility gap. The custom domain
  minimum TLS version was raised from 1.0 to 1.2 and verified active.
- Earliest reads: seven and 28 full days after both the website release and GTM
  Version 5 are verified live. A same-day hostname check may establish absence
  of obvious preview traffic but is not a performance outcome.
- Outcome: website rollout and GTM Version 5 live; measurement evaluation pending.
- Review on 2026-09-05: public GTM Version 5 and runtime hostname guards remain
  verified in the technical audit, and both GA4 production streams report traffic
  in the past 48 hours. The August 8–September 4 acquisition report includes four
  localhost sessions, three Pages-project sessions and one deployment-host
  session. Because this window spans the August 23 release, these rows do not
  establish a current regression. An after-release-only hostname report remains
  necessary to evaluate the stated hypothesis. No account settings changed.

## LP-2026-08-15-01 — Measured agent workflow routing

- Commit: `42e4b59` — `Measure agent workflow demand`
- Change: preserved the agent-page MCP and direct-download paths, then added an
  early, truthful choice among subtitle translation, SRT editing, and dubbing.
  Added those differentiated routes to the publisher-maintained agent manifest
  and LLM guides. Added bounded diagnostic `agent_workflow_click` with
  `destination`, `placement`, and `page_path`; the copy explicitly says that no
  remote agent service or pay-per-call endpoint is live.
- Hypothesis: qualified AI-assistant visitors will self-select a concrete video
  workflow, revealing whether the observed agent-discovery traffic includes
  demand for structure-preserving subtitle work or dubbing rather than only
  generic translation and downloads.
- Locked baseline: no `agent_workflow_click` event existed before this release.
  Through 2026-08-11, `chatgpt.com / ai-assistant` produced 119 sessions and 52
  key events over 28 days. A path-specific `/agents` session baseline was not
  preserved and must not be guessed. Through 2026-08-13, all download events
  were 17 events / 11 users over 7 days, 75 / 43 over 28 days, and 183 / 85 over
  90 days.
- Primary read: `agent_workflow_click / /agents session`, segmented by
  destination, source/medium, device, and country. Downstream reads remain
  download clicks, released `app_open`, `app_meaningful_use`, and settled
  `purchase`; never equate a route click with API or payment demand.
- Guardrails: no reduction in agent-page repository or direct-download access,
  no claim that MCP is bundled or remote, valid machine-readable artifacts,
  159-URL indexing integrity, and no duplicate event emission.
- Verification: the bounded analytics payload test, nine-locale audit,
  production build, type checks, 159-URL indexing audit, manifest JSON parse,
  and adversarial privacy/authority review passed. Cloudflare Pages completed
  commit `42e4b59`; cache-busted production checks found the visible workflow
  row, the explicit pay-per-call boundary, both differentiated routes in the
  manifest and LLM guide, and HTTP 200 health by 06:18 +07:00.
- Earliest reads: 2026-08-22 for seven full days and 2026-09-12 for 28 full days.
  Treat results as directional until at least 100 eligible `/agents` sessions.
- Outcome: pending.

## LP-2026-08-12-03 — Measured Windows, FAQ, and agent handoffs

- Commit: this release commit — `Improve measured acquisition handoffs`
- Change: kept the current homepage hero and LP-2026-08-12-02 intent links
  unchanged. Added platform-specific Windows install guidance beneath the
  existing recommended download, with diagnostic `windows_install_help_open`;
  added localized, early FAQ links to translation, downloading, and pricing,
  with diagnostic `faq_intent_click`; documented the honest split between
  browser-session attribution and server-settled revenue; and added explicit
  intent routes plus Windows publisher guidance to the agent manifest and LLM
  guides.
- Hypothesis: clearer next steps will reduce Windows install uncertainty and
  convert answer-seeking FAQ and AI-assistant visitors into qualified product
  actions without weakening the existing homepage download path.
- Locked 28-day baseline through 2026-08-11: Windows had 190 active users, 9s
  average engagement, 42 key events, and a 20.1% engagement rate. Windows
  downloads recorded 27 events / 22 users; aggregate `app_open` recorded 31
  events / 8 users and meaningful use 3 / 3. `/zh/faq` had 23 sessions, 23
  active users, 1s average engagement, and zero key events. `chatgpt.com /
ai-assistant` produced 119 sessions and 52 key events.
- Primary reads: Windows download clicks per Windows session, install-help opens
  per Windows download click, aggregate `app_open / download_windows_click`, and
  `faq_intent_click / FAQ session` by locale and destination.
- Agent-discovery read: sessions and key events from `chatgpt.com /
ai-assistant`, segmented by landing page. Treat machine-readable routing as a
  positioning asset, not a causal attribution claim.
- Commerce read: use `checkout_return_success` for browser-session acquisition
  and `purchase` for settled revenue. The server purchase's browser/session
  dimensions may correctly remain `(not set)`; never manufacture an identity
  join.
- Guardrails: no material deterioration in homepage hero download clicks,
  localized build/indexing integrity, no duplicate key events, no weakening of
  Windows publisher guidance, and no claim that a diagnostic event is an
  install, activation, or purchase.
- Verification: three analytics payload tests, the nine-locale audit, production
  build, 159-URL indexing audit, agent-manifest JSON parse, and all 87 API tests
  passed. CLI-first visual checks at 1440×900 and 390×844 preserved the current
  homepage hierarchy and kept the Chinese FAQ links above its download CTA.
  Cloudflare Pages completed commit `2504290`; cache-busted production checks
  verified the FAQ marker, agent entrypoints, expected publisher, LLM routing,
  and Windows guidance/event bundle by 11:54 +07:00.
- Purchase-classification follow-up: the tested API worktree adds
  `commerce_surface` and `attribution_scope` to checkout and settlement events,
  but that worktree already contained older uncommitted payment, analytics,
  internal-device, and retired-pilot changes. The API classification was not
  committed or deployed from this site release; do not report those parameters
  as live until that existing work is reconciled into a safe API release.
- Earliest reads: 2026-08-19 for a full seven days; 2026-09-09 for a full 28
  days. Require at least 100 eligible sessions before interpreting a zero or
  small diagnostic count.
- Outcome: pending.

## LP-2026-08-12-02 — Earlier paths to proven visitor intents

- Commit: `4eb8148` — `Add GA-informed homepage intent paths`
- Change: added localized hero-adjacent paths to AI translation, video
  downloading, and FAQ. Added diagnostic `landing_intent_click` with bounded
  `destination`, `placement`, and locale-bearing `page_path` fields.
- Hypothesis: visitors arriving with a specific job will reach the relevant
  workflow before abandoning a short homepage visit, without weakening direct
  download intent.
- Baseline: locked snapshot above. The root had 43 sessions, 20s engagement,
  and a 13.95% key-event rate in the preceding seven days.
- Primary read: `landing_intent_click / homepage session`, by destination,
  locale, device, and source/medium.
- Downstream read: aggregate download clicks, `app_open`, meaningful use, and
  purchase. `landing_intent_click` is not a key event.
- Guardrail: no material deterioration in hero download clicks per homepage
  session after controlling for source, locale, and device mix.
- Verification: analytics payload test, nine-locale audit, production build,
  159-URL indexing audit, and 390×844 layout check passed. The existing
  recommended download remained fully above the fold with no page overflow.
- Release state: Git and the Pages origin included the change by 07:33 +07:00;
  cache-busted custom-domain HTML was verified live at 07:35 +07:00.
- Earliest reads: 2026-08-19 for a full seven days; 2026-09-09 for a full 28
  days. Wait for at least 100 eligible homepage sessions before interpreting a
  zero or very small intent-click count.
- Outcome: pending.

## LP-2026-08-12-01 — Keep the mobile download CTA above the fold

- Commit: `e23b44a` — `Keep mobile download CTA above the fold`
- Change: shortened the English hero explanation and kept mobile navigation in
  one horizontally scrollable row.
- Hypothesis: reducing vertical and navigation friction will preserve more
  mobile visitors through the recommended platform download decision.
- Baseline: locked aggregate snapshot above. A device-segmented pre-change
  baseline must be recovered from GA4 before judging the mobile effect.
- Primary read: mobile hero download clicks per homepage session, split by OS
  and source/medium.
- Guardrails: desktop download rate, page overflow, localized navigation, and
  indexing integrity.
- Verification: nine-locale and 159-URL audits passed; the recommended download
  was fully visible at 390×844. Production custom-domain HTML was verified live
  by 2026-08-12 07:33 +07:00.
- Earliest reads: 2026-08-19 and 2026-09-09.
- Outcome: pending.

## 2026-08-06 homepage refresh cohort

These commits shipped close together and cannot be causally separated with the
available GA data. Preserve them as distinct changes but evaluate them as one
release cohort.

### LP-2026-08-06-03 — Real multitab workspace proof

- Commit: `e40ab14` — `Show real multitab workspace on homepage`
- Hypothesis: actual product evidence should improve trust, engagement, and
  qualified download intent compared with abstract marketing claims.
- Outcome: combined-cohort evidence only; pending a clean longer comparison.

### LP-2026-08-06-02 — Clearer feature hierarchy

- Commit: `272efd5` — `Clarify Translator homepage feature hierarchy`
- Hypothesis: clearer ordering should help short visits understand the complete
  workflow and reach a relevant action sooner.
- Outcome: combined-cohort evidence only; pending a clean longer comparison.

### LP-2026-08-06-01 — Homepage and agent-discovery refresh

- Commit: `0e056b9` — `Refresh Translator site and add agent discovery`
- Hypothesis: job-oriented positioning plus machine-readable discovery should
  increase qualified human and AI-assistant acquisition.
- Directional evidence: the current English title recorded 56 views in roughly
  its first five days, while the prior title recorded 117 over roughly the
  preceding 22 days. This suggests a higher daily pace but is not causal proof.
  In the later seven-day snapshot, `chatgpt.com / ai-assistant` produced 8 key
  events from 30 sessions.
- Outcome: promising, not yet proven independently from the same-day changes.

## Pre-log history

These commits changed the homepage before a structured baseline was preserved.
They remain useful context but should not be assigned retrospective causality:

- `a495dc5` (2026-06-10) — localized Echo page and homepage conversion work.
- `f718876` (2026-04-25) — repositioned the homepage around translated subtitles.
- `12ec25d` (2026-03-10) — homepage copy improvements.
- `0752ccb` (2026-03-09) — major presentation update.
- `e30c964` (2026-03-05) — SEO improvements.

### LP-2026-09-05-01 preview QA publication — September 5, 11:19 UTC

The locally recorded narrow-screen and player-readiness fixes are now verified
on the separately approved isolated preview 82a176fd-c0c1-4373-b900-4fd7013e61a6, published
2026-09-05T11:16:16.315926Z. This is not the experiment's production-live time.
Its locked baseline, hypothesis and T+7/T+28 production evaluation schedule are
unchanged. Remote layout/startup checks pass; preview analytics stay excluded.

### LP-2026-09-05-01 production attempt — September 5, 11:34–11:40 UTC

The approved exact preview version was briefly attached to the two Stage5 HTTPS
addresses. The apex served the candidate; www remained on Pages, so the cutover
stopped before any Translator route or Pages build change. Both routes were
removed; Cloudflare and 16 public responses verified restoration at
2026-09-05T11:40:28.415Z. This is an aborted partial rollout, not an experiment
launch. Exclude this short diagnostic period from clean before/after comparisons.
The locked hypothesis and baseline are unchanged; evaluation dates remain unset.
Evidence: `seo-production-migration-2026-09-05.json`.

### LP-2026-09-05-01 successful production migration — September 5

The additional approved www target correction resolved the failed alias check.
Both production sites passed their checkpoint at 2026-09-05T12:03:39.739Z.
Full verification finished at 2026-09-05T12:18:54.072716+00:00. All 1,612
known routes, 353 canonical pages and 117 captions pass. Exact assets and Worker
version are recorded in the production receipt. Four denied Google consent defaults
now precede GTM on production; account-level consent reporting remains open.
The hypothesis, baseline and guardrails are unchanged. Exclude the earlier
11:34–11:40 UTC aborted trial from clean comparisons. No indexing, growth or
revenue improvement is claimed from this release alone.


## PERF-2026-09-06-01 — Smaller site icons and readable supporting text

- Status: published and verified. No commit or push was authorized or performed.
  Prepared September 6, 2026 (UTC+07:00). First public asset verification:
  2026-09-06T02:49:14.387Z (September 5, 19:49:14 America/Los_Angeles).
  Worker version: `8fe0c812-2aeb-49f0-9472-d5f7617a1efa`. Commit timestamp: not committed.
- Exact change: replace the 1,129,569-byte browser/home-screen icon references
  with existing 128px/256px branded PNG members extracted byte-for-byte from the
  desktop icon bundle (11,636 and 52,569 bytes). Replace the black-circle placeholder
  icon route with the real brand icon. Increase contrast of faint text on the
  shared Translator homepage and its download recommendation label. No copy,
  CTA, URL ownership, tracking, consent, ad or pricing behavior changes.
- Falsifiable hypothesis: browser icon delivery uses at least 95% fewer bytes
  and the flagged homepage text meets the automated 4.5:1 contrast check, while
  preserving layout, all nine locales and the existing download journey.
- Locked production lab baseline: September 6 UTC; Lighthouse 13.4.1. Watch
  mobile/desktop performance 76/96 (LCP 5.13/1.27 seconds); Stage5 mobile home 96
  (LCP 2.5 seconds); Translator mobile home 77 (LCP 5.3 seconds), accessibility 96,
  with 72 low-contrast nodes. Exact report hashes and settings are in
  seo-production-performance-2026-09-06.json. Laboratory results are not field CWV.
- Business baseline: preserve the existing August 8–September 4 Los Angeles GA4
  window: 40 installer clicks, 59 app opens, five first-use activations and five
  purchases / $5 gross. This is a dated baseline across multiple releases, not
  matched visitors or a randomized comparison.
- Primary checks: actual browser-requested icon bytes and measured text contrast.
  Guardrails: unchanged page wording, links, routes, sitemap membership, locale
  rendering, download events, CTA positions and no production preview leakage.
- Evaluation: after exact approval and deployment, repeat matching production
  tests. Observe complete 7-day and 28-day Los Angeles windows from the first full
  post-release day, allowing reporting delay. Calendar dates depend on actual
  publication; no automation has been created. Do not claim conversion lift from
  icon savings or local Lighthouse scores. Google favicon appearance requires
  later recrawling and is not guaranteed.


### PERF-2026-09-06-01 — release observation

Approved release and all boundaries are verified; see
[publication receipt](seo-performance-release-publication-2026-09-06.json).
The primary mechanical checks pass: 98.97% smaller browser-icon body and zero
Translator text-contrast failures. Actual browser icon requests use the new
11,636-byte image. All four lab runs have accessibility/SEO 100. Mobile LCP
remains 3.05–3.33 seconds; the corrected desktop run is 1.30 seconds.
No business result or experiment winner is established.

Observation windows: September 6–12, 2026 (7 complete Los Angeles days) and
September 6–October 3, 2026 (28 complete Los Angeles days). Review after reporting
delay, no earlier than September 14 and October 5 respectively. No scheduled
automation was created. Preserve the locked baseline above.

Test-traffic caveat: September 5, 19:49–19:53 PDT includes a missed Google
collection endpoint in release tests. Four lab page-view requests returned 204;
46 browser cases attempted the endpoint without response capture. Do not infer
organic growth or subtract a guessed event count. The corrected desktop run
blocked every observed collection endpoint. The locked baseline and planned
complete post-release windows exclude this evening. See
[test-traffic observation](seo-performance-test-traffic-observation-2026-09-06.json).

### PERF-2026-09-06-02 — compact interactive translations, preparation record

- Prepared September 6, 2026, 03:54 UTC; not committed or published at preparation.
  Base source commit `e543aae0a7edd536473f7af76c15f1274ce5fc89` includes preserved
  working-tree changes. Exact source and artifact hashes are in
  [the proposal](watch-loading-release-proposal-2026-09-06.json).
- Change: move the 17 shared navigation/download label keys in all nine languages
  into a compact client dictionary. Keep complete page copy server-side and all
  visible words, fonts, layout, destinations and event payloads identical.
- Hypothesis: reducing initial browser JavaScript can improve load responsiveness
  while preserving installer intent, activation and purchase rates. Watch is the
  primary performance target; Translator is a conversion guardrail.
- Locked historical reference remains August 8–September 4, 2026, Los Angeles,
  USD: 40 installer clicks, 59 app opens, 5 activations and 5 purchases/$5 gross.
  This is an aggregate reference, not matched conversion attribution. The prior
  icon release is another concurrent change; later business movement cannot be
  attributed solely to this dictionary change.
- Primary mechanical measure: actual first-party initial JavaScript bytes.
  Local estimate: 33 KB less gzip data (17.1% on Watch; 17.4% on homepages).
  Guardrails: route/locale and content parity, download intent event parity,
  layout shift, accessibility, activation, purchases and settled revenue.
- Local observation: three matched Watch mobile pairs show median LCP
  2.665 → 2.545 seconds. The single Translator pair is 3.282 → 3.372 seconds;
  no Translator performance gain or conversion lift is established. All eight
  lab runs retain accessibility/SEO 100; layout shift is unchanged.
- Production-live time: not published. Release authority: pending exact approval.
  Evaluation windows: set complete 7-day and 28-day Los Angeles periods from the
  first full post-release day after verified publication, allowing reporting delay.
  No automation is created. Preserve the earlier test-traffic caveat and do not
  infer an experiment winner from lab results or overlapping release cohorts.


### PERF-2026-09-06-02 — release observation

The exact release and the Cloudflare-only hosting identity were approved directly.
Published once at September 6, 2026, 04:47:05.927536 UTC (September 5, 21:47 PDT).
Exact public files verified by 04:48:40 UTC; release checks completed at 04:56 UTC.
Worker version `605e48d1-142a-4355-9883-0cee3c37e28d`; no commit or push.
See [publication receipt](watch-loading-release-publication-2026-09-06.json).

The primary mechanical check passes: live decoded JavaScript bytes match the
approved artifact and save 33,023 bytes under the same gzip estimate on Watch.
The preparation's 17.1% figure includes the declared legacy-browser polyfill.
Excluding that noModule script, modern-browser initial scripts shrink 21.5%
(153,806 → 120,783 gzip bytes). Actual Cloudflare delivery uses Brotli; these
figures compare identical encoding assumptions rather than every visitor's transfer.

All content, routes, locales, layouts and download-event guardrails pass.
GTM v5 hostname routing is preserved, with no release-test collection responses
or installer requests. This verifies production event construction and configured
destinations, not fresh GA4 report receipt. The previous release's test-traffic
caveat remains in its own dated window.

Single current production labs: Watch mobile 2.24 s / performance 95; Watch desktop
1.45 s / 95; Translator home 2.88 s / 93; Stage5 home 3.15 s / 92. All four have
accessibility and SEO 100. These observations are separate from the matched local
pairs. No causal field or business-result improvement or experiment winner is
established; both September 6 performance releases share an observation cohort.

Evaluate complete Los Angeles windows September 6–12 (7 days) and September
6–October 3 (28 days), allowing processing delay and reviewing no earlier than
September 14 / October 5. No automation is created. Preserve the locked historical
reference and the overlap limitation; prioritize download intent, activation,
purchases and settled revenue over raw traffic or lab scores.

### September 12 daily observation — performance releases

The Sep 6–12 complete-day window is still unfinished in the Los Angeles property timezone. Its evaluation remains no earlier than Sep 14; no winner is declared and the locked baseline is unchanged. Today's broader Aug 14–Sep 10 report has 35 recorded installer clicks, 43 app opens, six app-use activation events and five purchases/$5 reported, without fresh settlement reconciliation. These rolling totals are not the post-release cohort. Optional app analytics changed Sep 6, and overlapping releases prevent attributing movement to one change. See [daily evidence](seo-daily-report-2026-09-12.json).

### September 14 evaluation — PERF-2026-09-06-01 and PERF-2026-09-06-02

- Evaluated on September 14, 2026; first seven complete America/Los_Angeles days **September 6–12**. Status: **Inconclusive — website-measurement coverage gap**. Original hypotheses and locked baselines above remain unchanged.
- GA4 reports **0 website sessions, 0 named installer events and 101 app/server events from 1 reported user**, all Unassigned. Eight event types are visible; app_open is 1, with no page_view, session_start, app_meaningful_use or purchase row. These zeros do not establish zero visitors, downloads or sales. No reliable conversion denominator exists.
- Shared-property preceding-week context, extracted September 14: **August 30–September 5 has 137 sessions, 20 organic sessions, seven installer events (5 Windows / 2 Mac), 12 app opens and four meaningful-use events**. This is not a preserved matched hostname/landing cohort and does not replace the locked baseline.
- Public GTM remains version 5 with intended hostname routing. Nineteen daily sampled HTML responses retain denied consent defaults. Visitor choices remain unfinished. Consent/reporting limitations are a plausible contributor, not a confirmed runtime diagnosis; no synthetic collection tests or settings changes were made.
- Both domains still lack enough mobile/desktop field data for Core Web Vitals. The September 6 verified lab/technical improvements remain historical observations.
- Finish native-language consent and verify the complete consent-to-destination path, then lock a new stable baseline. Do not infer causality across overlapping releases or September 6 app-analytics opt-in changes. Current rolling Watch cohort is only 37 landings, below 100 and not the fifteen editorial target pages.
- The next planned 28-day period remains September 6–October 3, review no earlier than October 5, with these coverage limits. Portfolio and editorial review dates remain unchanged. See [dated evaluation evidence](seo-performance-evaluation-2026-09-14.json) and [daily report](seo-daily-report-2026-09-14.md).

## PORTFOLIO-2026-09-07-02 — Demo visitors to product downloads

- Status: published and verified. Production live: 2026-09-07T05:03:22.307556Z (12:03:22 Asia/Bangkok). Verified 2026-09-07T05:09:09.633803+00:00. No commit or push; commit timestamp not applicable.
- Exact change: Stage5 portfolio and Echo integration as specified in the release proposal; this revision adds named Translator download links on Watch and a visible Echo App Store action before writing and as the primary finished-result action. No tracking or attribution changes.
- Hypothesis: useful demos with an explicit product download next step increase qualified download intent per eligible Stage5 demo landing. This is a hypothesis, not an observed improvement.
- Locked pre-change baseline: latest verified report, August 9–September 5 inclusive, America/Los_Angeles, preserved before publication in `.local/portfolio-20260907/publication/locked-baseline.json`. Stage5: 143 sessions, five organic sessions. Watch landings: 37 sessions (three organic), nine engaged sessions, zero download clicks. The small mixed-release sample and optional-measurement cutover limit comparison; no joined web-to-app conversion rate is established.
- Primary metric: eligible Watch landings reaching Translator download intent, grouped by hostname and landing path. Echo marketing App Store intent is a supporting measure; private Reflect clicks and completion are intentionally untracked.
- Guardrails: no writer text collection, no intrusive prompts, unchanged Watch direct installers, clear app-version limitations, no increased bounce from broken links, no preview-host telemetry. Activation, purchases and settled revenue are downstream evidence only where the measurement boundary supports attribution.
- Evidence: 47 new browser cases, 57 tests, both rendered audits and 1,744 classified local routes pass; public download destinations verified. Exact source/artifact identities are in the release proposal. Live version `e99a097a-32d0-4714-8878-d3a1ad4ffda4` and production verification are recorded in `docs/portfolio-release-publication-2026-09-07.json`.
- Evaluation dates: first seven complete Los Angeles days September 7–13, review after September 15; first 28 days September 7–October 4, review after October 6, allowing report processing. Publication occurred September 6 at 22:03 Los Angeles time, so that partial day is excluded. No winner from small samples or simultaneous portfolio changes.

### September 12 daily observation — portfolio

The Sep 7–13 complete-day window is still unfinished; review remains after Sep 15 and the original hypothesis/baseline are preserved. The broader Aug 14–Sep 10 Watch landing cohort contains 37 sessions (three organic, nine engaged) and zero named Windows/Mac installer events. It includes hub/detail landings and both domains, is below 100 eligible Watch detail sessions, and is not a completed post-release comparison. Private Reflect remains outside this measurement. The agent performs the later comparison and reports inconclusive results when coverage or sample size is insufficient; no additional user analysis is required. [Daily report](seo-daily-report-2026-09-12.md).


## WATCH-EDITORIAL-2026-09-12-01 — Scoped content and preview clarity

- Status: **Published and technically verified; business outcome unmeasured.** This is a content correction, not a randomized experiment.
- Commit / commit timestamp: none; the user approved an R2-only publication. Source checkout remains `9f5c3592e96dace893000190f658341ba4db8308` with pre-existing local changes preserved.
- Storage verified: `2026-09-12T10:01:47.240590+00:00`. Ordinary public file delivery verified: `2026-09-12T10:03:42.701824+00:00`. Full Watch page inventory verified: `2026-09-12T10:05:49.975746+00:00`. All timestamps are UTC.
- Exact change: 105 title, description and article fields across the five locale variants of Lee Jung-jae, Yoo Ji-tae and Nolan; four Piarchia caption-name corrections. URLs, video identifiers/dates, CTA destinations, caption timing and analytics configuration are preserved.
- Hypothesis: clearer preview limits and practical, source-specific editing exercises help visitors understand Translator and increase recorded download intent per eligible landing session on these 15 Stage5 URLs. Increased search impressions alone do not demonstrate that outcome.
- Locked pre-publication evidence: `control-panel/.local/watch-editorial-20260912/publication/locked-baseline.json`, based on the business-account report read at 2026-09-12T08:44:17.096115+00:00. GA4 dates are August 14–September 10, America/Los_Angeles. The broader Watch cohort has 37 sessions, three organic sessions, nine engaged sessions and zero named Windows/Mac installer events. **This includes both domains and hub/detail pages; it is not a baseline denominator for these 15 URLs. A separately filtered target-cohort GA4 baseline was not preserved in the available report.** Retrieve the same historical target cohort before comparing results, and label any later extraction with its actual retrieval time.
- Search baseline: the preserved Stage5 report through September 9 contains 21 impressions across its three listed page rows; these target URLs are absent from those rows. Do not infer indexing or total user activity from that absence.
- Primary metric: recorded named installer intent per eligible landing session, scoped to `stage5.tools` and the three changed slug families including their five page languages. Track organic landings separately. Do not treat translated titles as independent URLs.
- Guardrails: unchanged source access, caption readability, canonical/hreflang/sitemap behavior and download destinations; no ads enabled, no preview telemetry, no new personal-data collection. App activation/purchases and settled revenue remain separately sourced downstream signals; no deterministic browser-to-desktop join is claimed.
- Evaluation: first seven complete property days **September 13–19**; review at the daily report on **September 23, 08:00 Asia/Bangkok** or later if reporting is incomplete. First 28 complete property days **September 13–October 10**; review **October 14, 08:00 Asia/Bangkok** or later. Require at least 100 eligible target landing sessions before interpreting a zero or changed conversion rate; otherwise record insufficient evidence. Overlapping releases and optional analytics limit attribution.
- Verification: all five R2 readbacks and ordinary public payloads match; 185 Watch pages, 117 captions and 35 redirect/download checks pass. The existing Worker remains unchanged. See [publication receipt](watch-editorial-publication-2026-09-12.json).
- Existing September 6 performance and September 7 portfolio baselines, hypotheses and evaluation dates remain unchanged.


## ANALYTICS-CONSENT-2026-09-14-01 — restore observable website measurement

- Status: prepared and locally verified at 2026-09-14T02:29:24.100728+00:00; not committed or published. Commit timestamp and production-live timestamp: not applicable yet. Source HEAD `9f5c3592e96dace893000190f658341ba4db8308`; existing changes preserved.
- Exact change: first-party analytics-only permission in nine languages, 180-day site-specific choice, withdrawal, pre-consent event suppression and translated analytics disclosure. GTM remains v5; existing advertising conversion/linker tags are blocked. No ads enabled, routes added or private Reflect tracking introduced.
- Hypothesis: visitors who explicitly allow Analytics will produce correctly routed, observable website sessions and download-intent events. This is a measurement repair, not a conversion-lift experiment.
- Locked pre-change evidence: September 14 extraction for September 6–12 (America/Los_Angeles) has 0 reported website sessions, 0 named installer events and 101 app/server events. The prior August 30–September 5 context has 137 sessions, 20 organic sessions, 7 installer events, 12 app opens and 4 meaningful-use events. The first period lacks a valid denominator; the second is shared-property context, not a matched hostname/landing baseline. See the preserved September 14 daily evaluation. Original release hypotheses and baselines above remain unchanged.
- Primary acceptance: correct consented page-view receipt at each hostname's GA4 stream. Then record consenting website sessions and named download intent by hostname and landing path. Guardrails: usable decline and withdrawal, no prior-event replay, no private writing collection, no preview collection, no unintended advertising tags, preserved downloads and route/SEO behavior.
- Validation: 85 tests, 36 compiled Worker bootstrap cases, both rendered audits, 1,744 routes, 185 Watch pages and 117 captions. Exact artifact and scope: [release proposal](analytics-consent-proposal-2026-09-14.json). Destination receipt is not yet verified.
- Evaluation dates: set complete 7-day and 28-day America/Los_Angeles windows only after verified production collection, excluding the partial release day and allowing reporting delay. No new automation is created. Existing performance, portfolio and editorial review dates remain unchanged and must continue to state coverage and sample limits.

### September 14 publication and destination observation — analytics consent

The prepared entry above is now published and verified: Worker `59d1b507-5549-4b23-bd2d-b9cc42384256`, production-live **2026-09-14T02:45:54.974391Z** (September 13, 19:45:54 America/Los_Angeles). No commit/push; original hypothesis and locked baseline unchanged. Business GA4 received four marked QA page views through the expected Stage5/Translator IDs; no installer, activation or purchase event was generated. Those page views and associated automatic test-session events are excluded from business conclusions. The correct live consent interface and receipt close the scoped technical repair, not natural funnel measurement.

Fresh complete windows: **Sep 14–20**, review **Sep 23 at 08:00 Asia/Bangkok**; **Sep 14–Oct 11**, review **Oct 14 at 08:00 Asia/Bangkok**. These dates allow at least two full processing days; wait longer if incomplete. Use the existing daily report, without a new automation. Establish consenting-session/download-intent baselines by hostname and landing path; no consent-rate denominator or historical data recovery is available. Prior performance/portfolio/editorial dates and the 100-target-session editorial threshold remain unchanged. [Receipt](analytics-consent-publication-2026-09-14.json).

### September 19 evaluation — PORTFOLIO-2026-09-07-02 first week

Evaluated late on September 19 under the business Google identity for September
7–13, America/Los_Angeles. Verdict: **Inconclusive — missing natural website
coverage and identified QA only.** Four sessions, one engaged session and 14
events are the identified consent-release QA subset. The four event types are
page_view (5), first_visit (4), session_start (4), and user_engagement (1); there
are no installer, activation or purchase events. These zeros do not prove zero
actual visitors, installations or sales. The preceding Aug 31–Sep 6 shared-property
context has 113 sessions, 15 organic sessions and 584 events; it is not a matched
Stage5 demo cohort and does not replace the locked baseline.

No usable natural eligible-landing denominator or conversion verdict exists.
Private Reflect remains untracked. Preserve the original hypothesis, locked
baseline and 28-day review after October 6. The separate consent baseline remains
Sep 14–20, reviewed September 23; its first four processed days contain eight
Translator sessions and no named installer events. See
[portfolio evaluation](seo-portfolio-evaluation-2026-09-19.json) and
[daily evidence](seo-daily-report-2026-09-19.json).


## WATCH-RECOVERY-2026-09-19-01 — original caption workshop

- Approval: reviewed current-identity prototype and September 19 publication approval; final confirmation retains the existing source preview and authorizes the existing Cloudflare login for this release only.
- Exact cohort: English `https://stage5.tools/watch/tom-hanks-smartless`. Four other language versions are unchanged. No new HTML pages.
- Change: original fictional English/Korean dialogue, interpretation feedback, literal/edited cue comparison, explained editorial decisions, two original SRT practice files, and a body link to the Translator download page. Existing interview/captions retained; permission remains undocumented.
- Hypothesis locked before upload: giving a visitor a practical editing exercise increases consented visits to the Translator download page per eligible landing, while preserving search visibility and usability.
- Pre-change target-page GA4 denominator and conversion baseline: **not preserved**. The September 19 report's broader Watch cohort and eight post-consent Translator sessions are not a target-page baseline. Later historical retrieval must retain its actual extraction time.
- Primary measure: consented `watch_app_cta` with placement `body`, exact Stage5 hostname/path, per eligible target landing. The new body action opens a download page; it is **not an installer event**. Compare named Mac/Windows download events separately. Cutoff CTAs retain their existing installer behavior. This semantic change prevents a naive pooled before/after CTA-rate comparison.
- Guardrails: search impressions/clicks by this URL; errors, readability and load performance; downstream installer intent where observable. Private Reflect remains excluded. No deterministic web-to-app attribution, complete-traffic coverage or settled-revenue claim.
- Require at least 100 eligible target landings before interpreting a zero or changed CTA rate; otherwise report inconclusive. This is our analysis threshold, not an AdSense rule. Exclude any marked QA visits.
- Commit: none; commit timestamp: none. Verified production-live timestamp: **2026-09-19T10:36:14.165601Z** (September 19, America/Los_Angeles).
- If published September 19 in America/Los_Angeles, first seven complete days: September 20–26, review September 29 or later after processing. First 28 complete days: September 20–October 17, review October 20 or later. Existing September 23 evaluations and their cohorts remain unchanged.
- Evidence: `docs/watch-recovery-release-2026-09-19.json`; local checks and frozen manifest are preserved under `.local/watch-recovery-20260919/`.

September 19 workshop publication: all release checks passed; see `docs/watch-recovery-publication-2026-09-19.json`. New body CTA destination receipt is pending. Exclude the marked `qa=watch-recovery-20260919-01` Watch visits and known following Korean Translator page visit; the destination lacks that QA parameter. No outcome verdict is justified.


## WATCH-LOCALES-2026-09-19-01 — published September 19

- Scope: existing Tom Hanks workshop in ko/es/pt/vi; shared-component refactor preserves English wording. No new routes, source captions, prices or ad activation. This candidate is separate from the 1,295-field shared workflow draft.
- Commit and commit timestamp: none. Verified production-live timestamp: 2026-09-19T12:38:21.094168Z (September 19, America/Los_Angeles).
- Hypothesis locked before release: localized explanations and controls make the original practice task usable and increase consented download-page intent among visitors to the four localized routes.
- Baseline for the exact four-route cohort: **Not preserved**. No estimate is substituted from broader Watch landings.
- Primary metric: consented body watch_app_cta events divided by eligible sessions for the same locale-bearing landing path. This is download-page intent, not an installer download, activation or revenue. Interpret rates only after at least 100 eligible landings; report smaller counts descriptively.
- Guardrails: captions, navigation, canonical/hreflang/sitemap, mobile readability, consent and correct event locale. Ads remain off. Exclude known QA traffic.
- Evaluation: first seven complete Los Angeles days September 20–26; review September 29 at 08:00 Asia/Bangkok or later after processing. First 28 complete days September 20–October 17; review October 20 at 08:00 Asia/Bangkok or later. Original English workshop and September 23 cohorts and limits remain unchanged.
- Evidence: docs/watch-locales-proposal-2026-09-19.json. No result or lift claim yet.

September 19 language publication: see docs/watch-locales-publication-2026-09-19.json. Five live browser flows pass with all external requests blocked and analytics rejected. Exclude qa=watch-locales-20260919-01 and any related test navigation; no GA4 destination receipt or conversion lift is inferred. The exact four-route baseline remains Not preserved.

## September 19 — Fresh consent and Watch download-page receipt

No website or GTM release. At 13:25 UTC the business GA4 API verifies a Stage5
`watch_app_cta` and the expected Stage5/Translator page views after the ordinary-
browser check. The body event means navigation to the download page, not an
installer click. Fresh local browser checks confirm separate consent per host
and withdrawal. Destination values for event-scoped custom parameters remain
subject to processed reporting.

Exclude `qa=privacy-analytics-20260919-01` and
`qa=privacy-analytics-20260919-browser-02`, their associated events/sessions, and
the intermediate unmarked Translator `/ko#all-downloads` navigation around
13:21–13:24 UTC. The first headless attempt returned collector 204s but did not
appear in the checked Realtime report; do not claim receipt for those requests.

The Sep 6–17 Los Angeles report has 12 website sessions, four identified as
earlier Sep 14 QA. Remaining eight are Translator, four organic; Stage5 has no
remaining recorded sessions in that period. This opt-in sample is not complete
traffic or a joined business funnel. No test purchase/activation was created.
Keep all locked hypotheses, baselines, Sep 23 evaluations and subsequent
workshop windows unchanged. Local VIDEO-CHOICE-2026-09-19-01 is not published;
it has no production experiment start date.

Evidence: `privacy-consent-analytics-verification-2026-09-19.json`.


## September 20 — processed Watch QA parameters verified

Business Analytics API now returns one marked September 19 `watch_app_cta` with hostname `stage5.tools`, slug `tom-hanks-smartless`, locale `ko`, placement `body`, and the exact `qa=privacy-analytics-20260919-browser-02` page URL. This closes the pending destination parameter check. The preliminary September 19 day and all associated marked/unmarked test navigation stay excluded from business conversion conclusions. Body CTA still means download-page navigation, not installer download.

Sep 14–18 contains nine Translator sessions, five organic; Stage5 has zero recorded sessions, and no installer/activation/purchase events appear in this five-day window. This is not a full traffic census or completed seven-day experiment. Keep all original hypotheses, missing-baseline labels, September 23/29 review dates and 100-landing threshold unchanged. No production or Analytics configuration change occurred. Evidence: [daily API responses](seo-daily-analytics-2026-09-20.json).

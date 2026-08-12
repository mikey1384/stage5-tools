# Landing page experiment log

This is the durable record for Translator acquisition-page changes. It exists so
later GA4 reviews can distinguish a plausible story from an observed result.

## Release timeline

All timestamps use Asia/Bangkok (`UTC+07:00`). Cross-check GA4 against the
**production live** time when it is known; the commit time is only a fallback.

| Change committed | Production live      | ID               | What changed                                                     | Commit      |
| ---------------- | -------------------- | ---------------- | ---------------------------------------------------------------- | ----------- |
| 2026-08-12 11:43 | 2026-08-12 11:54     | LP-2026-08-12-03 | Added measured Windows, FAQ, and agent handoffs                  | `2504290`   |
| 2026-08-12 07:30 | 2026-08-12 07:35     | LP-2026-08-12-02 | Added early, tracked paths to translation, downloader, and FAQ   | `4eb8148`   |
| 2026-08-12 07:15 | By 2026-08-12 07:33  | LP-2026-08-12-01 | Kept the recommended mobile download CTA above the fold          | `e23b44a`   |
| 2026-08-06 10:16 | Not preserved        | LP-2026-08-06-03 | Replaced abstract proof with the real multitab workspace         | `e40ab14`   |
| 2026-08-06 09:47 | Not preserved        | LP-2026-08-06-02 | Clarified the homepage feature hierarchy                         | `272efd5`   |
| 2026-08-06 09:00 | Not preserved        | LP-2026-08-06-01 | Refreshed homepage positioning and agent discovery               | `0e056b9`   |
| 2026-06-10 12:55 | Not preserved        | Historical       | Added localized Echo page and homepage conversion work           | `a495dc5`   |
| 2026-04-25 09:23 | Not preserved        | Historical       | Repositioned the homepage around translated subtitles            | `f718876`   |
| 2026-03-10 17:32 | Not preserved        | Historical       | Improved homepage copy                                           | `12ec25d`   |
| 2026-03-09 16:29 | Not preserved        | Historical       | Major presentation update                                        | `0752ccb`   |
| 2026-03-05 17:55 | Not preserved        | Historical       | SEO improvements                                                 | `e30c964`   |

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

# Product measurement contract

This contract defines what Translator, Stage5, and Echo measure, which system is
authoritative, and what must never enter analytics.

## Authorities

| Question                                          | Authoritative source                                  | Analytics event                                        |
| ------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Did a visitor request a download?                 | Translator website data layer, including `/agents`    | `download_mac_click`, `download_windows_click`         |
| Did a visitor choose a homepage workflow?         | Translator website data layer                         | `landing_intent_click`                                 |
| Did a FAQ visitor choose a product action?        | Translator website data layer                         | `faq_intent_click`                                     |
| Did an agent-page visitor choose a workflow?      | Translator website data layer                         | `agent_workflow_click`                                 |
| Did a Windows visitor open install guidance?      | Translator website data layer                         | `windows_install_help_open`                            |
| Did a phone visitor send themselves the link?     | Translator website data layer (not yet in GTM v5)     | `download_mobile_redirect` (`action`: shown/share/copy/email) |
| Did a Watch visitor start the embedded video?     | Translator website data layer                         | `watch_play`                                           |
| Did the 30-second Watch preview reach its limit?  | Translator website data layer                         | `watch_cutoff`                                         |
| Did a Watch visitor change caption language?      | Translator website data layer                         | `watch_lang_change`                                    |
| Did a Watch caption file load or fail?            | Translator website data layer                         | `watch_caption_load`                                   |
| Did a Watch visitor choose the app CTA?           | Translator website data layer                         | `watch_app_cta`                                        |
| Did a visitor inspect the source or Echo listing? | Translator website data layer                         | `github_repository_click`, `echo_appstore_click`       |
| Did Stripe return the browser to Translator?      | Translator website data layer                         | `checkout_return_success`, `checkout_return_cancelled` |
| Did checkout begin?                               | Authenticated Stage5 API session creation             | `begin_checkout`                                       |
| Was checkout abandoned in the desktop app?        | Authenticated client report checked against Stripe    | `checkout_cancelled`                                   |
| Was money collected?                              | Stripe-signed webhook after fulfillment               | `purchase`                                             |
| Did Translator start?                             | Authenticated desktop app, server pseudonym | `app_open`                                             |
| Did Translator first deliver product value?       | Successful local use, once per installation            | `app_meaningful_use`                                   |
| Is an Echo subscription active?                   | RevenueCat and the app-store receipt                  | RevenueCat/App Store reporting                         |

The browser success page is deliberately not a purchase authority. Reloading it
cannot create revenue. Stripe transaction IDs deduplicate purchase events across
`checkout.session.completed` and `payment_intent.succeeded` webhook deliveries.

For Translator, successful local use means a video was opened or downloaded, or
a full-SRT translation completed successfully. A cancellation, failure, or
credit block is not meaningful use.

## Data minimization

Analytics may contain event names, product/pack identifiers, price and currency,
app version, operating system, CPU architecture, app locale, and an allowlisted
feature label. Server events use an HMAC-derived GA client ID. The HMAC secret and
raw device ID never enter GA4.

Desktop product analytics must never contain email addresses, filenames, local
paths, opened URLs, video URLs, subtitle or translation text, prompts, API keys,
raw device IDs, checkout return IDs, Stripe customer IDs, or other customer content.
A pseudonymous client ID is not anonymous data.

Website reports include the visited public page URL. Current Google enhanced
YouTube measurement can also include the public embedded video URL. Those web
parameters are separate from the desktop contract above; the privacy policy
must describe both accurately.

## GA4 and GTM configuration

The approved September 5 production migration was verified on both sites at
12:03:39 UTC. The live GTM resource remains version 5, and rendered browser checks
load the correct host-specific Google tag. Preview and privacy pages load no
Google scripts; ads remain off. These installation checks do not establish GA4
report ingestion, regional consent behavior, desktop attribution or revenue.
See [production verification](seo-production-migration-retry-2026-09-05.json)
and experiment LP-2026-09-05-01 in
[the experiment log](landing-page-experiments.md).

The [September 5 account audit](seo-status-2026-09-05.md) verifies that both
measurement IDs below are web streams within the shared Stage5/Translator GA4
property `526070569`. The dated August observations remain historical; current
configuration gaps and audience results are recorded in the new report.

- `translator.tools` routes through GTM to `G-P85K20ZXE0`; site code pushes only
  data-layer events and does not install a second Google tag.
- `stage5.tools` keeps its existing `G-5BJ3FXGGBS` routing.
- The GTM container must forward every named website data-layer event in the
  authority table to the host-selected GA4 stream. In particular, publish
  triggers for `watch_play`, `watch_cutoff`, `watch_lang_change`,
  `watch_caption_load`, and `watch_app_cta`; pushing an event into `dataLayer`
  alone does not send it to GA4.
- Forward the Watch diagnostic parameters `page_path`, `slug`, `video_id`,
  `locale`, `source_lang`, and `selected_lang`. Also forward `from_lang` and
  `to_lang` for language changes, `load_status` and `http_status` for caption
  loads, and `placement` for Watch app CTAs. None of these fields may contain
  caption text or source URLs.
- Mark custom download events as key events and disable the enhanced-measurement
  `file_download` event to prevent Windows downloads from counting twice.
- Mark `purchase` as a key event. `begin_checkout` and checkout-return events are
  funnel diagnostics, not revenue.
- Keep `landing_intent_click` as a diagnostic event, not a key event. Segment its
  stable `destination` value by locale-bearing `page_path` and source/medium.
- Keep `faq_intent_click` and `windows_install_help_open` as diagnostics, not key
  events. Use them to identify handoff and install-friction demand; do not treat
  either as a completed download, install, or activation.
- Keep `agent_workflow_click` as a diagnostic event, not a key event. Segment it
  by destination and source; it records routing intent, not remote API demand,
  app activation, or payment.
- Keep all Watch events diagnostic initially. Use `watch_caption_load` to monitor
  caption delivery health and `watch_cutoff` → `watch_app_cta` as the preview
  funnel; do not treat playback or a CTA click as a download or activation.

### Production configuration audit (2026-08-23)

- Published GTM Version 5 forwards the complete bounded set of 13 product-
  journey events, including all Watch diagnostics, and uses the hostname lookup
  variable rather than a hard-coded Translator measurement ID. Its public
  container resource was verified live at `2026-08-23T05:42:41Z`.
- Container `GTM-WTQTZDM4` routes `stage5.tools` to `G-5BJ3FXGGBS` and
  `translator.tools` to `G-P85K20ZXE0`.
- This website release wraps both the GTM loader and the Watch-detail AdSense
  loader in an exact runtime hostname allowlist: `translator.tools`,
  `www.translator.tools`, `stage5.tools`, and `www.stage5.tools`. Localhost,
  `stage5-tools.pages.dev`, deployment `*.stage5-tools.pages.dev` hosts,
  unlisted subdomains, and lookalike suffixes do not load either third-party
  script. App-route responses on those non-production hosts also return
  `X-Robots-Tag: noindex, nofollow`; the four production hosts do not receive
  that header.
- GTM Version 5 applies the same exact production-host regex to the Google Tag,
  Conversion Linker, both download triggers, and the bounded custom-event
  trigger. Cross-domain linking is limited to `translator.tools` and
  `stage5.tools`; the Pages project host and deployment hosts are excluded. The
  live resource also contains the intended `AW-17971737430` conversion
  destination.
- Create and forward GTM data-layer variables for `destination`, `placement`,
  `repository_url`, `checkout_mode`, `slug`, `video_id`, `locale`,
  `source_lang`, `selected_lang`, `from_lang`, `to_lang`, `load_status`, and
  `http_status`, in addition to the existing `platform`, `architecture`,
  `download_url`, `link_label`, and `page_path` variables. Undefined values are
  omitted; never synthesize customer content to fill them.
- The GA4 property currently has zero custom definitions. Register only the
  bounded parameters required for reports: `destination`, `placement`,
  `platform`, `architecture`, `checkout_mode`, `slug`, `locale`,
  `source_lang`, `selected_lang`, `from_lang`, `to_lang`, `load_status`, and
  `link_label` as event-scoped dimensions. Register `http_status` only if a
  dimension is needed for caption-delivery investigations. `page_path` is
  built in; `video_id`, `repository_url`, and `download_url` can remain
  diagnostic payload fields instead of consuming custom-definition quota.
- The current key events are `download_mac_click`, `download_windows_click`,
  and `purchase`, matching this contract. Do not promote Watch engagement or
  browser checkout-return events to revenue conversions.
- Translator's current enhanced-measurement list includes page views, scrolls,
  outbound clicks, site search, video engagement, and form interactions; file
  downloads are not enabled there. A `file_download` event still appears in the
  property's recent 28-day history, so verify its source after the GTM release
  rather than assuming current double-counting.
- GA4 reports analytics and advertising consent signals as inactive for both
  web streams. Complete the certified CMP and consent-mode rollout before
  enabling AdSense so `analytics_storage`, `ad_storage`, `ad_user_data`, and
  `ad_personalization` reflect the visitor's choice.
- `mikey@stage5.tools` has accepted full GTM account-administrator and container-
  publish access for the Translator Tools account.

## September 5 production release

Watch's canonical home is now `stage5.tools`; the older dated account audit above
remains historical evidence. The verified production release allows AdSense only on
valid Stage5 Watch detail pages and only when explicitly enabled at build time.
It defaults off. Neither publisher metadata nor a script response proves serving.

The local bootstrap queues denied defaults for all four consent-mode fields
before GTM. A certified CMP and verified updates are still required. Record the
live consent transition timestamp and expect possible changes in observed counts;
compare equivalent consent cohorts and report measurement limitations. Do not
compare a denied-only interval with previously unrestricted GA4 collection as if
it were a controlled traffic experiment.

September 5 follow-up: AdSense advertising and analytics consent-mode settings
are saved ON and legitimate-interest choices are not enabled by default. The
European message remains an unpublished draft; these account settings are not
evidence of visitor choice or active consent signals in GA4. The draft covers
seven site languages, with Korean/Vietnamese fallback unresolved. The isolated
Worker preview excludes analytics and ads. Its latest privacy-page fix
omits Google tags and uses a fresh document when entering/leaving privacy pages;
this deliberately excludes those policy views from analytics once deployed.

Keep both hostname streams in property 526070569. Stage5 organic clicks and
Google-selected canonical Watch URLs are primary acquisition outcomes. During
migration, also compare total Watch clicks across both Search Console properties
so a change in attributed hostname is not mistaken for net growth. Preserve
Translator's existing downloader pages and aggregate activation/purchase guards.

AdSense is the authority for ad impressions and estimated ad revenue; finalized
earnings/payments and Stripe settlement remain separate financial authorities.
Page RPM = estimated ad revenue / AdSense page views × 1,000. Impression RPM =
estimated ad revenue / ad impressions × 1,000. Do not substitute GA4 page views
without naming that different denominator. Also compare ad revenue per 1,000
consistently measured Watch sessions and download intent per Watch landing session.
At zero denominators, report unavailable rather than an invented RPM.

## Watch advertising and consent

Current verification and remaining launch gates are tracked in
[`seo-adsense-acceptance.md`](./seo-adsense-acceptance.md). The dated August
configuration audit above is historical evidence, not current account approval.

- Load the AdSense Auto Ads script on Watch detail pages only. The Watch index
  remains ad-script free; the site-level `google-adsense-account` metadata and
  `public/ads.txt` must use the same active publisher ID.
- Before enabling production ads, publish a Google-certified consent message in
  AdSense **Privacy & messaging** for the EEA, UK, and Switzerland. Enable its
  consent-mode integration for both advertising and analytics so the existing
  GTM container can respect those choices. Configure the applicable US-state
  privacy message as part of the same rollout.
- Keep the localized privacy-policy advertising disclosure and its Google data
  use and Ads Settings links current. The site must not send caption text,
  source URLs, contact details, or payment identifiers through ad or analytics
  events.
- The checkout-classification rollout adds
  `commerce_surface=translator_desktop`. `begin_checkout` and
  `checkout_cancelled` use `attribution_scope=server_checkout`; `purchase` uses
  `attribution_scope=server_settlement`. Do not report these custom parameters
  as live until the matching API deployment is verified.
- Add `checkout.stripe.com` to unwanted referrals so Stripe does not overwrite the
  visitor's original acquisition source on the return page.
- The Stage5 API sends retryable Measurement Protocol events from a D1 outbox.
  GA4 HTTP success is transport acknowledgement; validate schema changes against
  the Measurement Protocol debug endpoint before relying on them.

## Funnel interpretation

The website-to-desktop transition is a real boundary. Download clicks show intent;
`app_open` shows installation/launch; `app_meaningful_use` shows activation. These
stages use anonymous pseudonyms and are not presented as deterministic user-level
attribution across devices. Compare separately scoped counts and trends. A ratio
of unmatched app and website totals is not a measured conversion rate; identity
joins are not inferred.

The server-authoritative `purchase` event does not inherit the visitor's browser
client or GA session. A landing page, browser, operating system, source, or medium
of `(not set)` on `purchase` is therefore expected—not a lost website session.
Use the browser's deduplicated `checkout_return_success` event for return-page
analysis and `purchase` for confirmed gross purchase revenue. A checkout launched
from the desktop need not retain the original installer-acquisition session.
Refunds, fees and bank settlement require separate financial reconciliation. Never copy a browser
client ID into the desktop API or emit a second browser purchase merely to fill a
GA dimension.

## September 5 caption and measurement follow-up

The [current review](watch-measurement-review-2026-09-05.md) reconciles the
August 8–September 4 GA4 event report against aggregate API and fulfillment
records. Five distinct purchases/$5 agree; this is gross reporting, not net
payout. The approved API correction is live from September 5, 14:08:53 UTC:
version `ef2f2ec5-c413-47ed-9e44-5cb6c36a5c6b` accepts all 51 supported event types,
including the 34 previously rejected current-desktop types. Twenty real events
from four repaired types are stored and forwarded at the 14:28 UTC check.
Ten exact event-scoped GA4 definitions are saved and persist after reload.
See [publication receipt](watch-measurement-release-2026-09-05.json).

New event receipt and dimension values at the GA4 reporting boundary remain
unverified. Google advises 24–48 hours after custom data is sent and the dimension
created. Transport acknowledgement is not proof of report processing; queued
app activity lacks an original occurrence timestamp. Regional consent,
source-specific generic download behavior, product links and full financial
reconciliation remain open.


Subsequent September 5 destination evidence: Google Realtime now confirms three
newly accepted event types and six context parameter keys on a real event.
See `measurement-ga4-post-release-receipt-2026-09-05.json`. The rolling Realtime
window does not reconcile all earlier outbox records. Standard custom-dimension
values and complete aligned reporting windows still need verification.


## September 6 reporting verification

All ten approved custom fields are available in the standard Events report. Five
now contain explicit app values: app language, CPU architecture, commerce surface,
attribution scope and button placement. The four Watch fields and activation
feature still lack populated target values. Live GTM version 5 forwards the exact
Watch parameter names. This does not establish source-event or destination values
for those five outstanding fields. No account configuration was changed.

The observed August 9–September 5 Los Angeles window includes an incomplete final
day. Preserve the earlier August 8–September 4 baseline for later comparison; do
not substitute these partial-period totals. See
[the standard-report observation](measurement-ga4-standard-report-2026-09-06.json)
and [the public GTM recheck](measurement-gtm-parameter-recheck-2026-09-06.json).


### September 6 activation-field source diagnosis

A read-only production aggregate check at 02:05 UTC finds nine all-time stored
activations: six video downloads and three video opens. Every row has a valid
feature and was sent. The latest arrived at 13:46:49 UTC on September 5, before
custom-definition setup began at 14:19:30 UTC. No new activation has arrived since
the definitions were saved. These all-time totals differ from the dated GA4
28-day window and must not be substituted for it. The four Watch fields still
need eligible activity and destination verification. No event was generated or
replayed to fill a report. Thirteen other post-setup events are sent; none are
pending in the complete outbox. See
[aggregate source evidence](measurement-feature-source-check-2026-09-06.json).

The source-to-parameter path preserves the allowlisted feature. A missing mapping
fix is not justified by this evidence. Verify the next naturally occurring
activation in Google after processing; current report completion stays open.


### September 6 release-test traffic caveat

The website icon/contrast release tests missed google.com/g/collect in their
initial collection block rules. Four Lighthouse page-view requests received
HTTP 204; 46 responsive browser cases attempted that endpoint, with response
status not captured. GA4 reporting ingestion is unverified. No test download,
activation, playback or purchase action was performed.

Flag September 6, 02:49–02:53 UTC (September 5, 19:49–19:53 America/Los_Angeles)
as test activity. Do not subtract an estimated count from the reports. The
locked pre-release baseline ends September 4 PDT; the complete post-release
windows begin September 6 PDT, so neither includes the test evening. Future
test filters include this endpoint. The corrected desktop run confirms that
all observed collection requests were blocked. No Google account setting or
data-deletion action was taken. Evidence:
[request observation](seo-performance-test-traffic-observation-2026-09-06.json).

## Proposed delivered-event detail retention — not deployed

PRIVACY-RETENTION-2026-09-06-01 clears the server pseudonym, parameter JSON and
error field 90 days after successful forwarding. Each existing scheduled run
processes at most 500 records. Event IDs, event names, occurrence/delivery times
and delivery counts remain to prevent duplicate reporting, including purchases.
Pending delivery and all billing/credit records are outside this cleanup. This
is data minimization, not deletion of every analytics record or an opt-out.
The implementation and focused tests are local; production approval is pending.

### September 6 retention implementation published

PRIVACY-RETENTION-2026-09-06-01 is now published and verified: delivered outbox
details are cleared after 90 days, in batches of at most 500 on the existing
15-minute schedule. Event IDs/types/timestamps and delivery receipts remain for
deduplication; pending delivery and financial records are excluded. The exact
bundle, index and normal scheduled invocation are verified. No events were old
enough for cleanup at verification. This does not resolve desktop consent or
pending-event retention. See `privacy-retention-release-publication-2026-09-06.json`.


## September 6 — App privacy controls prepared, not published

PRIVACY-CONTROLS-2026-09-06-01 is ready for exact review: optional app analytics
default off, server enforcement for usage and purchase reports, withdrawal handling,
and 72-hour pending-event expiry. The 57-file Translator 1.20.0 candidate and API
bundle/migration are pinned in the [proposal](privacy-controls-proposal-2026-09-06.md).
43 API checks and 14 focused app checks pass; build, production-source types and
English/Korean/Vietnamese app views are verified locally. All 39 locales have the
complete copy. No production, Git publication or Google change occurred.

After deployment, older app versions and nonparticipants stop contributing optional
analytics; use financial records for whole-business revenue. Do not compare the new
opt-in cohort directly with the old default-on cohort. Windows distribution, live
verification, website consent and the complete policy remain open. The main
acceptance count remains 28/43; this local proposal closes no production criterion.

## Optional app analytics cutover — September 6, 2026

Cloudflare records the approved consent/expiry Worker deployment at **2026-09-06 10:15:50.753 UTC**, version `8633764c-c301-4f69-8a57-8e7a660f3e11`. Exact published bytes, database migration, authenticated default-off readback and access checks are verified; its normal 10:45 UTC schedule succeeded.

From this server change, app usage and server purchase analytics require the installation’s saved opt-in. Older apps cannot opt in and their optional events are excluded. Pending reports expire after 72 hours from the original event time. The completed 90-day delivered-detail rule still applies. This changes the reporting population: do not compare post-change app or GA4 purchase counts directly with the previous default-on cohort or interpret missing optional events as lost business.

Use payment fulfillment and Stripe records for complete gross purchase totals. GA4 purchase reports describe participating installations; they are neither complete revenue totals nor payout reconciliation. Browser download intent and app activation remain separate observations without deterministic cross-device attribution. Website and advertising consent remain separate open work.

Translator 1.20.1 was published for Apple Silicon and Intel Macs at **2026-09-06 11:06:13 UTC** and independently verified at **11:07:27 UTC**. Signature/notarization, architecture, exact public updater/notes, asset sizes and aliases all pass. Availability is verified; user installation or opt-in uptake is not inferred. Windows distribution remains separate. No synthetic production usage or purchase events were generated for this change.


## September 14 analytics-consent candidate — not published

`ANALYTICS-CONSENT-2026-09-14-01` adds basic, analytics-only consent in all nine website languages. No website data-layer event, GTM load or deduplication state is created before explicit permission. Saved permission is site-specific and expires after 180 days; withdrawal disables both destinations, clears known Google measurement cookies and unloads permitted scripts after a successful save. Blocked storage produces explicit page-only feedback. The two existing advertising tag types are blocklisted and all advertising consent remains denied. Private Reflect and privacy pages keep their exclusions. GTM v5 and the two hostname destinations remain unchanged.

This is a local candidate, not evidence of collection. After the exact release is approved and verified, record the production time and confirm a bounded consented page-view request at the intended GA4 destination. Record QA contamination separately; no synthetic installer, activation or purchase event is authorized. Reports describe consenting visitors only. Do not infer zero visitors from absent sessions or compare denied-only and opted-in cohorts as a controlled traffic experiment. The native analytics controls do not satisfy the separate certified advertising CMP gate. See [prepared review](analytics-consent-review-2026-09-14.md).

## Website analytics cutover — September 14, 2026

The candidate above is now published and destination-verified at Worker `59d1b507-5549-4b23-bd2d-b9cc42384256`, live **2026-09-14 02:45:54.974391 UTC**. Four marked QA page views reached business GA4: Stage5 homepage (1), Translator `/ko` (1), Watch Tom Hanks (2). Observed requests use the correct hostname IDs and preserve denied advertising consent in the verified bootstrap. Withdrawal and private/preview exclusions pass. No synthetic installer, activation or purchase event was generated. Exclude these marked URLs and associated test sessions from natural results.

Website reports now cover explicitly consenting visitors; first complete property day is September 14 in America/Los_Angeles. Review Sep 14–20 on Sep 23, and Sep 14–Oct 11 on Oct 14, at the existing 08:00 Asia/Bangkok daily report or later if incomplete. Preserve all original experiment hypotheses/baselines/dates and do not infer a controlled improvement across the coverage change. Certified advertising consent, natural funnel evidence, Windows work, full policy and revenue reconciliation remain separate. [Publication evidence](analytics-consent-publication-2026-09-14.json).


### September 19 English Watch workshop

On `/watch/tom-hanks-smartless` in English, body `watch_app_cta` now opens the Translator download page. It is navigation intent, not a named Mac/Windows installer click. Cutoff placement retains its existing meaning. Keep these stages separate and avoid pooling this semantic change into a before/after installer rate. Six local consent/event cases and actual production navigation pass; a fresh GA4 receipt for this new link remains open. See `docs/watch-recovery-publication-2026-09-19.json` for QA exclusions and verification limits.

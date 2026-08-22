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
| Did Translator start?                             | Authenticated desktop app, anonymous server pseudonym | `app_open`                                             |
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

Analytics must never contain email addresses, filenames, local paths, opened URLs,
video URLs, subtitle or translation text, prompts, API keys, raw device IDs,
checkout return IDs, Stripe customer IDs, or other customer content.

## GA4 and GTM configuration

- `translator.tools` routes through GTM to `G-P85K20ZXE0`; site code pushes only
  data-layer events and does not install a second Google tag.
- `stage5.tools` keeps its existing `G-5BJ3FXGGBS` routing.
- The GTM container must forward every named website data-layer event in the
  authority table to the host-selected GA4 property. In particular, publish
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

### Production configuration audit (2026-08-22)

The website emits more data-layer events than the published GTM container
currently forwards. Treat this as an operational checklist, not as evidence that
the events are already available in GA4:

- Container `GTM-WTQTZDM4` routes `stage5.tools` to `G-5BJ3FXGGBS` and
  `translator.tools` to `G-P85K20ZXE0`.
- Its published generic product-journey trigger currently matches only
  `github_repository_click`, `echo_appstore_click`,
  `checkout_return_success`, and `checkout_return_cancelled`.
- Expand that trigger to also match `landing_intent_click`, `faq_intent_click`,
  `agent_workflow_click`, `windows_install_help_open`, `watch_play`,
  `watch_cutoff`, `watch_lang_change`, `watch_caption_load`, and
  `watch_app_cta`. The resulting bounded trigger has 13 named events.
- Change the generic product-journey tag from its hard-coded Translator
  measurement ID to the existing hostname lookup variable. This preserves the
  two-property routing contract for events fired on either hostname.
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
- The currently signed-in `mikey1384@gmail.com` user has direct Analytics access
  but is not an account administrator. An existing administrator must grant
  Administrator access before `mikey@stage5.tools` can be added and the missing
  custom definitions or consent settings can be managed.

## Watch advertising and consent

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
attribution across devices. Aggregate conversion rates are valid; identity joins
are not inferred.

The server-authoritative `purchase` event does not inherit the visitor's browser
client or GA session. A landing page, browser, operating system, source, or medium
of `(not set)` on `purchase` is therefore expected—not a lost website session.
Use the browser's deduplicated `checkout_return_success` event for session-level
acquisition analysis and `purchase` for settled revenue. Never copy a browser
client ID into the desktop API or emit a second browser purchase merely to fill a
GA dimension.

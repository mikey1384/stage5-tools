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

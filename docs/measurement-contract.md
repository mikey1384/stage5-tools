# Product measurement contract

This contract defines what Translator, Stage5, and Echo measure, which system is
authoritative, and what must never enter analytics.

## Authorities

| Question                                          | Authoritative source                                  | Analytics event                                        |
| ------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Did a visitor request a download?                 | Translator website data layer                         | `download_mac_click`, `download_windows_click`         |
| Did a visitor inspect the source or Echo listing? | Translator website data layer                         | `github_repository_click`, `echo_appstore_click`       |
| Did Stripe return the browser to Translator?      | Translator website data layer                         | `checkout_return_success`, `checkout_return_cancelled` |
| Did checkout begin?                               | Authenticated Stage5 API session creation             | `begin_checkout`                                       |
| Was checkout abandoned in the desktop app?        | Authenticated client report checked against Stripe    | `checkout_cancelled`                                   |
| Was money collected?                              | Stripe-signed webhook after fulfillment               | `purchase`                                             |
| Did Translator start?                             | Authenticated desktop app, anonymous server pseudonym | `app_open`                                             |
| Did Translator first deliver product value?       | Successful local open/download, once per installation | `app_meaningful_use`                                   |
| Is an Echo subscription active?                   | RevenueCat and the app-store receipt                  | RevenueCat/App Store reporting                         |

The browser success page is deliberately not a purchase authority. Reloading it
cannot create revenue. Stripe transaction IDs deduplicate purchase events across
`checkout.session.completed` and `payment_intent.succeeded` webhook deliveries.

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

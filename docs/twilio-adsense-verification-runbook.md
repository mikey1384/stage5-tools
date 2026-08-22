# Twilio and AdSense verification runbook

This runbook records the Stage5 Tools LLC phone-verification setup, the current
AdSense blocker, and the supported diagnostic workflow. It deliberately does
not contain an Auth Token, API key secret, verification code, EIN, bank data, or
business-document attachment.

## Account map

| System | Identifier source | Purpose |
| --- | --- | --- |
| Twilio | Active `stage5` CLI profile | Owns the Stage5 U.S. number |
| Twilio | Active Numbers in the private Console | Forwards voice to the owner's current number |
| AdSense | `lib/adsense.ts` and `public/ads.txt` | Stage5 Tools LLC publisher account |
| Google | Stage5 Workspace business account | Business account and support contact |

The AdSense payments profile is a United States organization profile for
Stage5 Tools LLC. The company's U.S. formation, EIN, bank account, and mailing
address are the business-verification evidence. The owner's current physical
location does not change the company's U.S. status.

## CLI setup

The official Twilio CLI is installed in the user's npm prefix:

```bash
twilio --version
# twilio-cli/6.2.4 darwin-arm64 node-v22.16.0
```

Use a Twilio API key rather than keeping the primary Auth Token in an
environment file. The local profile name is `stage5`:

```bash
twilio profiles:list
twilio profiles:use stage5
twilio config:list
```

Twilio stores CLI profile material outside the repository in
`~/.twilio-cli/config.json`. Never copy that file, an API secret, or an Auth
Token into this repository, shell history, issue text, or analytics.

If the profile must be recreated, open **Twilio Console -> Develop -> API Key &
creds -> API Keys & auth tokens**. Prefer a Standard or narrowly Restricted API
key. The primary Auth Token may be used once by `twilio profiles:create` to
generate a Standard API key, but it must not be stored afterward.

## Read-only diagnostics

Check the active profile before every account operation:

```bash
twilio profiles:list
```

List recent inbound messages to the Stage5 number:

```bash
twilio api:core:messages:list \
  --to <E.164_STAGE5_NUMBER> \
  --date-sent-after 2026-08-22 \
  --limit 20 \
  --properties sid,from,to,status,errorCode,errorMessage,direction,dateSent
```

Fetch one message without requesting or printing its body:

```bash
twilio api:core:messages:fetch \
  --sid SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \
  --properties sid,from,to,status,errorCode,errorMessage,direction,dateSent
```

List the owned number and its current webhook metadata:

```bash
twilio api:core:incoming-phone-numbers:list \
  --phone-number <E.164_STAGE5_NUMBER> \
  --properties sid,phoneNumber,capabilities,smsUrl,smsMethod,voiceUrl,voiceMethod
```

Do not run a send, call, number-purchase, key-rotation, or webhook-update command
as part of a diagnostic check.

## Confirmed OTP failure

On 2026-08-22, Google successfully sent two AdSense verification messages to
the Stage5 Twilio number. Twilio received both and marked them failed:

| Attempt | Time shown by Twilio | Result |
| --- | --- | --- |
| First | 2026-08-22 07:43:54 PDT | Failed, error `30038` |
| Second | 2026-08-22 08:33:51 PDT | Failed, error `30038` |

Twilio error `30038`, **OTP Message Body Filtered**, means Twilio detected an
inbound one-time passcode, removed the passcode, and failed the message before
the configured webhook could receive it. The ordinary Message Redaction setting
is a separate privacy feature and does not disable this OTP policy. The Console,
REST API, CLI, webhook, and forwarding destination cannot recover a passcode
after Twilio applies `30038`.

Google's voice option rejected the Twilio number before dispatching a call. The
Twilio call-forwarding route therefore never received a Google verification
call. Adding the number to Google Account two-step verification did not change
AdSense's carrier checks.

Do not keep requesting codes while `30038` remains unresolved. Repeated attempts
cannot reach the webhook and can trigger Google's rate limits.

## Escalations filed

- Twilio Support ticket filed 2026-08-23: paid-account request for Messaging
  Support to allow the legitimate Google OTP use case or confirm that no
  exception is possible. The private ticket includes both failed Message SIDs.
- Google AdSense private email request filed 2026-08-23 from the Stage5 business
  account: request for manual or alternate phone verification of the U.S.
  organization. Google displayed **Your email has been sent**. No public
  Community post was created.

Support replies should be handled from the Stage5 Workspace business account.
Provide formation, EIN, bank, or address documents only through a verified
private Google support channel, and only when requested. Never attach them to a
public forum post.

## Resolution decision tree

1. If Twilio grants an exception, request exactly one new AdSense SMS and check
   its API status before attempting another delivery method.
2. If Google offers manual or document verification, use that route and keep the
   payments country and organization type unchanged.
3. If Twilio denies an exception and Google requires a phone, obtain a genuine
   U.S. carrier mobile or fixed-line number that can be activated and receive
   messages while the owner is abroad. Confirm its carrier classification before
   purchase. Do not substitute another Twilio, Google Voice, NumberBarn, or
   similar VoIP number.
4. Do not create a Thailand AdSense payments profile as a workaround. That would
   misstate the U.S. company's intended payment profile and create the country
   lock the business setup is designed to avoid.

## Authoritative references

- [Twilio error 30038](https://www.twilio.com/docs/api/errors/30038)
- [Twilio CLI profiles](https://www.twilio.com/docs/twilio-cli/general-usage/profiles)
- [Twilio API keys](https://www.twilio.com/docs/iam/api-keys)
- [AdSense phone verification](https://support.google.com/adsense/answer/2938681)

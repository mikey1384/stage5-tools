# stage5-tools Monitor Worker

Cloudflare Worker cron monitor for:

- HTTPS uptime
- TLS certificate expiry + CN/issuer drift
- DNS drift checks via 1.1.1.1 and 8.8.8.8
- Incident alert policy with KV-backed dedupe, reminders, and recovery alerts
- Persisted structured run logs with per-check latency and failure details

## Files

- `monitor/wrangler.toml`: Worker config + cron schedule
- `monitor/config/baseline.config.js`: expected HTTPS/TLS/DNS baselines
- `monitor/src/index.js`: Worker entrypoint and secured `/run`
- `monitor/src/monitor-core.js`: checks, alert policy, webhook/email dispatch

## Live certificate observations

The apex and `www` checks use the API's fixed-host `/healthz/tls/probe` observer,
which negotiates a fresh, CA- and SNI-verified TLS connection to the website.
[Cloudflare Workers cannot open TCP sockets to Cloudflare IP ranges](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/).
The observer accepts only `stage5.tools` and `www.stage5.tools`, coalesces concurrent
requests and caches each result for 30 seconds. The monitor accepts only that
exact observer URL and observations less than two minutes old. The Echo API check
continues to use `/healthz/tls` for its own incoming connection's certificate.

All three checks keep the 21-day expiry threshold and CN/issuer checks. Probe
failures, redirects, stale data and invalid metadata fail the check; CT records or
KV snapshots never substitute for those authoritative endpoints. Deploy and verify
the API probe before deploying this monitor configuration. A healthy scheduled
run then closes the existing expiry incident through the normal recovery policy.

## From-scratch setup

1. Create KV namespaces for monitor state/cache.

```bash
cd /Users/mikey/Developer/stage5/stage5-tools
npx wrangler kv namespace create MONITOR_STATE_KV
npx wrangler kv namespace create MONITOR_STATE_KV --preview
```

2. Put returned namespace IDs into `monitor/wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "MONITOR_STATE_KV"
id = "<prod_namespace_id>"
preview_id = "<preview_namespace_id>"
```

3. Configure required secrets.

```bash
cd /Users/mikey/Developer/stage5/stage5-tools

# required for manual /run trigger auth
npx wrangler secret put RUN_TRIGGER_TOKEN -c monitor/wrangler.toml

# recommended: email alerts via SendGrid (matches twinkle-api)
npx wrangler secret put SENDGRID_API_KEY -c monitor/wrangler.toml

# optional webhook alerts
npx wrangler secret put ALERT_WEBHOOK_URL -c monitor/wrangler.toml
npx wrangler secret put ALERT_WEBHOOK_BEARER_TOKEN -c monitor/wrangler.toml
```

4. Adjust vars in `monitor/wrangler.toml` as needed:

- `ALERT_EMAIL_FROM`
- `ALERT_EMAIL_TO` (comma-separated supported)
- `ALERT_REMINDER_INTERVAL_MS` (default `3600000`, i.e., 60 minutes)
- `ALERT_OPEN_AFTER_CONSECUTIVE_FAILURES` (default `1`; set to `2` to suppress one-off flaps)
- `TLS_CERT_SOURCE` (default `live_socket,crtsh`)
- `TLS_CERT_CACHE_MAX_AGE_MS` (default `21600000`, i.e., 6 hours; `0` disables cache fallback)
- `TLS_CERT_STALE_CACHE_MAX_AGE_MS` (default `1209600000`, i.e., 14 days; used only after all fresh certificate sources fail)
- optional sender fallback vars used in twinkle-api:
  - `ECHO_EMAIL_SENDER`
  - `EMAIL_SENDER`

5. Deploy.

```bash
cd /Users/mikey/Developer/stage5/stage5-tools
npx wrangler deploy -c monitor/wrangler.toml
```

## Manual run endpoint (secured)

`/run` is protected by `RUN_TRIGGER_TOKEN` and accepts either:

- `x-monitor-token: <RUN_TRIGGER_TOKEN>`
- `Authorization: Bearer <RUN_TRIGGER_TOKEN>`

Examples:

```bash
curl -sS 'https://<worker-url>/run?notify=0' \
  -H 'x-monitor-token: <RUN_TRIGGER_TOKEN>'
```

```bash
curl -sS 'https://<worker-url>/run?forceAlert=1&persist=1' \
  -H 'Authorization: Bearer <RUN_TRIGGER_TOKEN>'
```

Query params:

- `forceAlert=1`: injects a synthetic failure
- `notify=0`: run checks but skip outbound alert sends
- `persist=1`: persist state transitions when manually running

## Alert policy (KV-backed)

- `pass -> fail`: sends incident-opened alert once (or after `ALERT_OPEN_AFTER_CONSECUTIVE_FAILURES` runs)
- ongoing fail: suppresses minute-by-minute duplicates
- reminder: sends again after `ALERT_REMINDER_INTERVAL_MS`
- `fail -> pass`: sends recovery alert only if an incident was opened
- notification state (`lastAlertAt`, incident open/recovery timestamps) is committed only after at least one channel sends successfully; failed sends are retried on subsequent runs

## Email provider behavior

- provider: SendGrid (`SENDGRID_API_KEY`)
- click tracking is disabled per message so alert endpoints remain readable
- sender resolution order:
  1. `ALERT_EMAIL_FROM`
  2. `ECHO_EMAIL_SENDER`
  3. `EMAIL_SENDER`

## DNS source-of-truth for `www.stage5.tools`

`baseline.config.js` sets `requireAllAnswersInCloudflareIpv4Feed: true`.

Behavior:

- primary source: Cloudflare IPv4 feed (`https://www.cloudflare.com/ips-v4`)
- cached in KV (`cloudflare:ips:v4`) with TTL
- fallback static CIDR list is retained for continuity
- blocked parked IPs are always enforced:
  - `172.239.57.117`
  - `172.234.24.211`

If you want strict fail-closed behavior when the feed is unavailable, set:

- `REQUIRE_CLOUDFLARE_FEED=1`

## Baseline checks included

HTTPS checks:

- `GET https://stage5.tools`
- `GET https://www.stage5.tools`
- `GET https://api.echo.stage5.tools/healthz`
- `POST https://api.echo.stage5.tools/echo/auth/login` with `{}` expecting `400` and message `Email and password are required`

TLS checks:

- `stage5.tools`
- `www.stage5.tools`
- `api.echo.stage5.tools`

TLS source behavior:

- Echo: `https://api.echo.stage5.tools/healthz/tls` reports the certificate on that exact HTTPS connection. The endpoint closes the probe connection so renewal is checked on a new handshake. The monitor requires fresh, host-matched metadata, a successful trusted HTTPS request with no redirects, and a bounded response body/deadline. Failure alerts as unavailable; CT and cached snapshots cannot stand in for this live source.
- Other hosts default to a live TLS socket handshake (`node:tls`), falling back to `crt.sh`. Workers currently cannot inspect the peer certificate through `getPeerCertificate`, so do not rely on this source for Echo.
- `stage5.tools` and `www.stage5.tools` force `crtsh` because Workers block outbound TCP sockets to Cloudflare IP ranges
- resilience fallback: if fresh certificate sources fail, uses the most recent cached cert snapshot from KV up to `TLS_CERT_STALE_CACHE_MAX_AGE_MS`; expiry checks still run against cached `notAfter`
- CN/issuer drift checks are enforced for the live socket and connection-backed HTTPS endpoint sources by default
- set `ALLOW_NONLIVE_TLS_IDENTITY_CHECK=1` to also enforce CN/issuer drift when fallback source is used

DNS checks:

- `api.echo.stage5.tools` must CNAME to `twinkle-api-deploy-nlb-2b1103126a93cd55.elb.ap-northeast-1.amazonaws.com` (DNS names are case-insensitive; a trailing dot is equivalent). Its HTTPS and TLS checks still verify the serving endpoint. Do not pin the primary or the NLB's current IP addresses.
- `www.stage5.tools` must resolve to Cloudflare edge IP ranges and never blocked parked IPs

## Outbound connection budget

All HTTPS, TLS, and DNS checks share a five-check concurrency budget. Each check
owns at most one outbound operation at a time, keeping the Worker below
Cloudflare's six-connection limit while allowing unrelated check families to
make progress together during a partial outage.

## Local test/demo commands

```bash
cd /Users/mikey/Developer/stage5/stage5-tools
npm run monitor:test
npm run monitor:demo:pass
npm run monitor:demo:force
```

## Echo timeout diagnosis

HTTPS checks record their start time, response-header latency, total latency and
failure phase. The existing deadline now includes body validation; unused bodies
are cancelled, and checked bodies are capped at 64 KiB.

Every Echo HTTPS check sends an `x-stage5-monitor-probe: <run>:<check>` header
(run = the run's UTC time, `YYYYMMDDHHMMSS`). The Twinkle API logs each tagged
request to `twinkle-api.out.log` as a `[monitor-probe]` line: outcome, status,
elapsed time, and whether it arrived on a fresh or reused connection
(`socketRequest`, `socketAgeMs`). A request still open after five seconds gets
a `still-open` line.

After an Echo HTTPS failure, each failed request is replayed once on a brand-new
eight-second TLS socket with the same method, headers and body, tagged
`<run>:<check>:replay`. Its TCP-connect, TLS-handshake and response-header
timing are recorded, and certificate validation stays on. The replay never
changes the failed verdict or suppresses an alert.

Reading a failure (the probe id is in `echoFailureEvidence.checks[].probeId`):
- no API line for the original, replay passed: the request never reached the
  API and a fresh connection worked, so suspect the Worker's pooled connection.
- no API line for either: the network path or the host's accept path.
- an API line for the original: the API received it; its outcome and elapsed
  time show where the time went.

The existing `monitor:state:v1` KV record retains `echoFailureEvidence` across
recovery for up to seven days (latest failure only, no extra writes). Daily
management can read it with the project Wrangler CLI without live tail access:

```sh
./node_modules/.bin/wrangler kv key get --remote --config monitor/wrangler.toml \
  --namespace-id 2e5201a407b942df840f6f42a0547ca4 monitor:state:v1
```

Use full structured logs for earlier incidents; this single retained snapshot
is not an exhaustive outage history.

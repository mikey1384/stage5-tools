# stage5-tools Monitor Worker

Cloudflare Worker cron monitor for:

- HTTPS uptime
- TLS certificate expiry + CN/issuer drift
- DNS drift checks via 1.1.1.1 and 8.8.8.8
- Incident alert policy with KV-backed dedupe, reminders, and recovery alerts

## Files

- `monitor/wrangler.toml`: Worker config + cron schedule
- `monitor/config/baseline.config.js`: expected HTTPS/TLS/DNS baselines
- `monitor/src/index.js`: Worker entrypoint and secured `/run`
- `monitor/src/monitor-core.js`: checks, alert policy, webhook/email dispatch

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

- primary: live TLS socket handshake (`node:tls`) against each host
- fallback: `crt.sh` only if live socket source fails
- `stage5.tools` and `www.stage5.tools` force `crtsh` because Workers block outbound TCP sockets to Cloudflare IP ranges
- resilience fallback: if fresh certificate sources fail, uses the most recent cached cert snapshot from KV up to `TLS_CERT_STALE_CACHE_MAX_AGE_MS`; expiry checks still run against cached `notAfter`
- CN/issuer drift checks are enforced only with live socket source by default
- set `ALLOW_NONLIVE_TLS_IDENTITY_CHECK=1` to also enforce CN/issuer drift when fallback source is used

DNS checks:

- `api.echo.stage5.tools` must include `18.182.90.49`
- `www.stage5.tools` must resolve to Cloudflare edge IP ranges and never blocked parked IPs

## Local test/demo commands

```bash
cd /Users/mikey/Developer/stage5/stage5-tools
npm run monitor:test
npm run monitor:demo:pass
npm run monitor:demo:force
```

import assert from "node:assert/strict";
import test from "node:test";

import { BASELINE_CONFIG } from "../config/baseline.config.js";
import { defaultGetCertificate, runMonitor } from "../src/monitor-core.js";

const fixedNow = new Date("2026-02-28T00:00:00.000Z");

function createMemoryStateStore(seedValue = null) {
  const store = new Map();
  if (seedValue) {
    store.set("monitor:state:v1", structuredClone(seedValue));
  }

  return {
    async getJson(key) {
      if (!store.has(key)) {
        return null;
      }
      return structuredClone(store.get(key));
    },
    async putJson(key, value) {
      store.set(key, structuredClone(value));
    },
  };
}

function buildClients({
  includeBlockedIp = false,
  failWebhook = false,
  failEmail = false,
  stateStore = createMemoryStateStore(),
} = {}) {
  const sent = [];

  const httpFixtures = {
    "GET https://stage5.tools": { status: 200, body: "ok" },
    "GET https://www.stage5.tools": { status: 200, body: "ok" },
    "GET https://api.echo.stage5.tools/healthz": { status: 200, body: "ok" },
    "POST https://api.echo.stage5.tools/echo/auth/login": {
      status: 400,
      body: JSON.stringify({ error: "Email and password are required" }),
      headers: {
        "content-type": "application/json",
      },
    },
  };

  const dnsAnswers = {
    "api.echo.stage5.tools": {
      cloudflare: ["18.182.90.49"],
      google: ["18.182.90.49"],
    },
    "www.stage5.tools": {
      cloudflare: includeBlockedIp ? ["172.239.57.117"] : ["104.21.14.7", "172.67.142.44"],
      google: includeBlockedIp ? ["172.239.57.117"] : ["104.21.14.7", "172.67.142.44"],
    },
  };

  const certs = {
    "stage5.tools": {
      commonName: "stage5.tools",
      issuer: "C=US, O=Google Trust Services, CN=WE1",
      notAfter: "2026-04-27T09:40:59.000Z",
    },
    "www.stage5.tools": {
      commonName: "www.stage5.tools",
      issuer: "C=US, O=Google Trust Services, CN=WE1",
      notAfter: "2026-04-27T09:40:59.000Z",
    },
    "api.echo.stage5.tools": {
      commonName: "api.echo.stage5.tools",
      issuer: "C=US, O=Let's Encrypt, CN=R11",
      notAfter: "2026-06-15T00:00:00.000Z",
    },
  };

  return {
    clients: {
      stateStore,
      async fetch(input, init) {
        const url = typeof input === "string" ? input : input?.url;
        const method = String(init?.method || "GET").toUpperCase();
        const fixture = httpFixtures[`${method} ${url}`];
        if (!fixture) {
          throw new Error(`Missing HTTP fixture for ${method} ${url}`);
        }

        return new Response(fixture.body || "", {
          status: fixture.status,
          headers: fixture.headers || {},
        });
      },
      async resolveDns({ host, resolverName }) {
        const values = dnsAnswers[host]?.[resolverName];
        if (!values) {
          throw new Error(`Missing DNS fixture for ${host}/${resolverName}`);
        }
        return values;
      },
      async getCertificate({ host }) {
        const cert = certs[host];
        if (!cert) {
          throw new Error(`Missing cert fixture for ${host}`);
        }
        return cert;
      },
      async getCloudflareIpv4Cidrs() {
        return [
          "173.245.48.0/20",
          "103.21.244.0/22",
          "103.22.200.0/22",
          "103.31.4.0/22",
          "141.101.64.0/18",
          "108.162.192.0/18",
          "190.93.240.0/20",
          "188.114.96.0/20",
          "197.234.240.0/22",
          "198.41.128.0/17",
          "162.158.0.0/15",
          "104.16.0.0/13",
          "104.24.0.0/14",
          "172.64.0.0/13",
          "131.0.72.0/22",
        ];
      },
      async sendWebhook({ payload }) {
        if (failWebhook) {
          sent.push({
            channel: "webhook",
            status: payload.status,
            reason: payload.alertPolicy?.reason,
            sent: false,
          });
          throw new Error("webhook unavailable");
        }
        sent.push({ channel: "webhook", status: payload.status, reason: payload.alertPolicy?.reason });
        return { mocked: true };
      },
      async sendEmail({ payload }) {
        if (failEmail) {
          sent.push({
            channel: "email",
            status: payload.status,
            reason: payload.alertPolicy?.reason,
            sent: false,
          });
          throw new Error("email unavailable");
        }
        sent.push({ channel: "email", status: payload.status, reason: payload.alertPolicy?.reason });
        return { mocked: true };
      },
    },
    sent,
    stateStore,
  };
}

function buildEnv() {
  return {
    MONITOR_NAME: "stage5-tools-dns-tls-monitor",
    ALERT_WEBHOOK_URL: "https://hooks.example.invalid/stage5-monitor",
    SENDGRID_API_KEY: "demo-key",
    ALERT_EMAIL_FROM: "monitor@stage5.tools",
    ALERT_EMAIL_TO: "ops@stage5.tools",
    ALERT_REMINDER_INTERVAL_MS: "3600000",
  };
}

test("monitor pass path", async () => {
  const { clients, sent } = buildClients();

  const report = await runMonitor({
    env: buildEnv(),
    baseline: BASELINE_CONFIG,
    clients,
    now: fixedNow,
  });

  assert.equal(report.status, "pass");
  assert.equal(report.failedChecks, 0);
  assert.equal(report.failures.length, 0);
  assert.equal(report.alertPolicy.reason, "pass-suppressed");
  assert.equal(report.alertPolicy.shouldNotify, false);
  assert.equal(sent.length, 0);
});

test("monitor forced alert path", async () => {
  const { clients, sent } = buildClients();

  const report = await runMonitor({
    env: buildEnv(),
    baseline: BASELINE_CONFIG,
    clients,
    forceAlert: true,
    now: fixedNow,
  });

  assert.equal(report.status, "alert");
  assert.equal(report.failedChecks, 1);
  assert.equal(report.failures[0].category, "forced");
  assert.equal(report.alertPolicy.reason, "forced-alert");
  assert.equal(report.alertPolicy.shouldNotify, true);
  assert.equal(sent.length, 2);
  assert.deepEqual(
    sent.map((item) => item.channel).sort(),
    ["email", "webhook"]
  );
});

test("monitor detects blocked parked IP", async () => {
  const { clients } = buildClients({ includeBlockedIp: true });

  const report = await runMonitor({
    env: { MONITOR_NAME: "stage5-tools-dns-tls-monitor" },
    baseline: BASELINE_CONFIG,
    clients,
    now: fixedNow,
  });

  assert.equal(report.status, "alert");
  assert.ok(
    report.failures.some(
      (failure) =>
        failure.category === "dns" &&
        failure.reasons.some((reason) => reason.includes("Blocked parked IP answer"))
    )
  );
});

test("monitor dedupes ongoing failures, sends reminders, then recovery alert", async () => {
  const sharedState = createMemoryStateStore();
  const failContext = buildClients({ includeBlockedIp: true, stateStore: sharedState });

  const firstFail = await runMonitor({
    env: buildEnv(),
    baseline: BASELINE_CONFIG,
    clients: failContext.clients,
    now: fixedNow,
  });

  assert.equal(firstFail.status, "alert");
  assert.equal(firstFail.alertPolicy.reason, "incident-opened");
  assert.equal(firstFail.notifications.length, 2);

  const secondFail = await runMonitor({
    env: buildEnv(),
    baseline: BASELINE_CONFIG,
    clients: failContext.clients,
    now: new Date(fixedNow.getTime() + 60_000),
  });

  assert.equal(secondFail.status, "alert");
  assert.equal(secondFail.alertPolicy.reason, "incident-ongoing-suppressed");
  assert.equal(secondFail.alertPolicy.shouldNotify, false);
  assert.equal(secondFail.notifications.length, 0);

  const reminderFail = await runMonitor({
    env: buildEnv(),
    baseline: BASELINE_CONFIG,
    clients: failContext.clients,
    now: new Date(fixedNow.getTime() + 7_200_000),
  });

  assert.equal(reminderFail.status, "alert");
  assert.equal(reminderFail.alertPolicy.reason, "incident-reminder");
  assert.equal(reminderFail.notifications.length, 2);

  const recoveryContext = buildClients({ includeBlockedIp: false, stateStore: sharedState });
  const recovered = await runMonitor({
    env: buildEnv(),
    baseline: BASELINE_CONFIG,
    clients: recoveryContext.clients,
    now: new Date(fixedNow.getTime() + 7_260_000),
  });

  assert.equal(recovered.status, "pass");
  assert.equal(recovered.alertPolicy.reason, "incident-recovered");
  assert.equal(recovered.notifications.length, 2);
});

test("monitor can debounce incident opening with consecutive failure threshold", async () => {
  const sharedState = createMemoryStateStore();
  const failContext = buildClients({ includeBlockedIp: true, stateStore: sharedState });
  const recoveryContext = buildClients({ includeBlockedIp: false, stateStore: sharedState });
  const env = {
    ...buildEnv(),
    ALERT_OPEN_AFTER_CONSECUTIVE_FAILURES: "2",
  };

  const firstFail = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: failContext.clients,
    now: fixedNow,
  });

  assert.equal(firstFail.status, "alert");
  assert.equal(firstFail.alertPolicy.reason, "incident-opening-pending");
  assert.equal(firstFail.alertPolicy.shouldNotify, false);
  assert.equal(firstFail.notifications.length, 0);

  const secondFail = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: failContext.clients,
    now: new Date(fixedNow.getTime() + 60_000),
  });

  assert.equal(secondFail.status, "alert");
  assert.equal(secondFail.alertPolicy.reason, "incident-opened");
  assert.equal(secondFail.alertPolicy.shouldNotify, true);
  assert.equal(secondFail.notifications.length, 2);

  const recovered = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: recoveryContext.clients,
    now: new Date(fixedNow.getTime() + 120_000),
  });

  assert.equal(recovered.status, "pass");
  assert.equal(recovered.alertPolicy.reason, "incident-recovered");
  assert.equal(recovered.alertPolicy.shouldNotify, true);
  assert.equal(recovered.notifications.length, 2);
});

test("monitor suppresses recovery alerts for unopened transient incidents", async () => {
  const sharedState = createMemoryStateStore();
  const failContext = buildClients({ includeBlockedIp: true, stateStore: sharedState });
  const recoveryContext = buildClients({ includeBlockedIp: false, stateStore: sharedState });
  const env = {
    ...buildEnv(),
    ALERT_OPEN_AFTER_CONSECUTIVE_FAILURES: "2",
  };

  const transientFail = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: failContext.clients,
    now: fixedNow,
  });

  assert.equal(transientFail.status, "alert");
  assert.equal(transientFail.alertPolicy.reason, "incident-opening-pending");
  assert.equal(transientFail.alertPolicy.shouldNotify, false);
  assert.equal(transientFail.notifications.length, 0);

  const recovered = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: recoveryContext.clients,
    now: new Date(fixedNow.getTime() + 60_000),
  });

  assert.equal(recovered.status, "pass");
  assert.equal(recovered.alertPolicy.reason, "incident-recovered-suppressed-unopened");
  assert.equal(recovered.alertPolicy.shouldNotify, false);
  assert.equal(recovered.notifications.length, 0);
});

test("monitor retries incident-opened notification until delivery succeeds", async () => {
  const sharedState = createMemoryStateStore();
  const failingDeliveryContext = buildClients({
    includeBlockedIp: true,
    failWebhook: true,
    failEmail: true,
    stateStore: sharedState,
  });
  const recoveredDeliveryContext = buildClients({
    includeBlockedIp: true,
    stateStore: sharedState,
  });
  const env = buildEnv();

  const firstFail = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: failingDeliveryContext.clients,
    now: fixedNow,
  });

  assert.equal(firstFail.status, "alert");
  assert.equal(firstFail.alertPolicy.reason, "incident-opened");
  assert.equal(firstFail.notifications.length, 2);
  assert.equal(firstFail.notifications.every((entry) => entry.sent === false), true);
  assert.equal(firstFail.alertPolicy.notificationDelivery.sent, false);
  assert.equal(firstFail.alertPolicy.nextState.incidentOpened, false);
  assert.equal(firstFail.alertPolicy.nextState.lastAlertAt, null);

  const secondFail = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: failingDeliveryContext.clients,
    now: new Date(fixedNow.getTime() + 60_000),
  });

  assert.equal(secondFail.status, "alert");
  assert.equal(secondFail.alertPolicy.reason, "incident-opened");
  assert.equal(secondFail.alertPolicy.shouldNotify, true);
  assert.equal(secondFail.notifications.length, 2);
  assert.equal(secondFail.notifications.every((entry) => entry.sent === false), true);

  const thirdFail = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: recoveredDeliveryContext.clients,
    now: new Date(fixedNow.getTime() + 120_000),
  });

  assert.equal(thirdFail.status, "alert");
  assert.equal(thirdFail.alertPolicy.reason, "incident-opened");
  assert.equal(thirdFail.alertPolicy.notificationDelivery.sent, true);
  assert.equal(thirdFail.alertPolicy.nextState.incidentOpened, true);
  assert.ok(typeof thirdFail.alertPolicy.nextState.lastAlertAt === "string");

  const fourthFail = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: recoveredDeliveryContext.clients,
    now: new Date(fixedNow.getTime() + 180_000),
  });

  assert.equal(fourthFail.status, "alert");
  assert.equal(fourthFail.alertPolicy.reason, "incident-ongoing-suppressed");
  assert.equal(fourthFail.alertPolicy.shouldNotify, false);
  assert.equal(fourthFail.notifications.length, 0);
});

test("monitor keeps incident open until recovery notification is delivered", async () => {
  const sharedState = createMemoryStateStore();
  const failContext = buildClients({ includeBlockedIp: true, stateStore: sharedState });
  const recoveryDeliveryFailContext = buildClients({
    includeBlockedIp: false,
    failWebhook: true,
    failEmail: true,
    stateStore: sharedState,
  });
  const recoveryDeliverySuccessContext = buildClients({
    includeBlockedIp: false,
    stateStore: sharedState,
  });
  const env = buildEnv();

  const opened = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: failContext.clients,
    now: fixedNow,
  });

  assert.equal(opened.status, "alert");
  assert.equal(opened.alertPolicy.reason, "incident-opened");
  assert.equal(opened.alertPolicy.nextState.incidentOpened, true);

  const recoveryFailed = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: recoveryDeliveryFailContext.clients,
    now: new Date(fixedNow.getTime() + 60_000),
  });

  assert.equal(recoveryFailed.status, "pass");
  assert.equal(recoveryFailed.alertPolicy.reason, "incident-recovered");
  assert.equal(recoveryFailed.alertPolicy.notificationDelivery.sent, false);
  assert.equal(recoveryFailed.alertPolicy.nextState.incidentOpened, true);
  assert.equal(recoveryFailed.notifications.length, 2);
  assert.equal(recoveryFailed.notifications.every((entry) => entry.sent === false), true);

  const recoveryRetried = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: recoveryDeliverySuccessContext.clients,
    now: new Date(fixedNow.getTime() + 120_000),
  });

  assert.equal(recoveryRetried.status, "pass");
  assert.equal(recoveryRetried.alertPolicy.reason, "incident-recovered");
  assert.equal(recoveryRetried.alertPolicy.notificationDelivery.sent, true);
  assert.equal(recoveryRetried.alertPolicy.nextState.incidentOpened, false);
  assert.ok(typeof recoveryRetried.alertPolicy.nextState.lastIncidentRecoveredAt === "string");

  const steadyPass = await runMonitor({
    env,
    baseline: BASELINE_CONFIG,
    clients: recoveryDeliverySuccessContext.clients,
    now: new Date(fixedNow.getTime() + 180_000),
  });

  assert.equal(steadyPass.status, "pass");
  assert.equal(steadyPass.alertPolicy.reason, "pass-suppressed");
  assert.equal(steadyPass.alertPolicy.shouldNotify, false);
  assert.equal(steadyPass.notifications.length, 0);
});

test("defaultGetCertificate uses cached cert before retrying non-live sources", async () => {
  const stateStore = createMemoryStateStore();
  const host = "stage5.tools";
  const firstRunNow = new Date("2026-02-28T10:00:00.000Z");
  const secondRunNow = new Date(firstRunNow.getTime() + 5 * 60 * 1000);
  let fallbackFetchCalls = 0;
  const crtshBody = JSON.stringify([
    {
      name_value: host,
      common_name: host,
      issuer_name: "C=US, O=Google Trust Services LLC, CN=WE1",
      not_before: "2026-01-01T00:00:00.000Z",
      not_after: "2026-04-27T09:40:59.000Z",
    },
  ]);

  const first = await defaultGetCertificate({
    host,
    fetchImpl: async () =>
      new Response(crtshBody, {
        status: 200,
      }),
    timeoutMs: 2000,
    nowDate: firstRunNow,
    env: {
      TLS_CERT_SOURCE: "crtsh",
      TLS_CERT_CACHE_MAX_AGE_MS: String(60 * 60 * 1000),
    },
    stateStore,
  });

  assert.equal(first.source, "crtsh");
  assert.equal(first.commonName, host);

  const second = await defaultGetCertificate({
    host,
    fetchImpl: async () => {
      fallbackFetchCalls += 1;
      throw new Error("timeout");
    },
    timeoutMs: 2000,
    nowDate: secondRunNow,
    env: {
      TLS_CERT_SOURCE: "crtsh",
      TLS_CERT_CACHE_MAX_AGE_MS: String(60 * 60 * 1000),
    },
    stateStore,
  });

  assert.equal(second.source, "cached");
  assert.equal(second.commonName, host);
  assert.equal(second.cachedFromSource, "crtsh");
  assert.equal(second.fallbackReason, null);
  assert.ok(second.cacheAgeMs >= 0);
  assert.equal(fallbackFetchCalls, 0);
});

test("defaultGetCertificate ignores stale cached cert entries", async () => {
  const stateStore = createMemoryStateStore();
  const host = "stage5.tools";
  const now = new Date("2026-02-28T10:00:00.000Z");

  await stateStore.putJson("tls:cert:v1:stage5.tools", {
    fetchedAt: new Date(now.getTime() - 8 * 60 * 60 * 1000).toISOString(),
    certificate: {
      commonName: host,
      issuer: "C=US, O=Google Trust Services LLC, CN=WE1",
      source: "crtsh",
      notAfter: "2026-04-27T09:40:59.000Z",
    },
  });

  await assert.rejects(
    () =>
      defaultGetCertificate({
        host,
        fetchImpl: async () => {
          throw new Error("timeout");
        },
        timeoutMs: 2000,
        nowDate: now,
        env: {
          TLS_CERT_SOURCE: "crtsh",
          TLS_CERT_CACHE_MAX_AGE_MS: String(60 * 60 * 1000),
          TLS_CERT_STALE_CACHE_MAX_AGE_MS: String(60 * 60 * 1000),
        },
        stateStore,
      }),
    /Unable to resolve certificate/
  );
});

test("defaultGetCertificate uses stale cached cert after fresh sources fail", async () => {
  const stateStore = createMemoryStateStore();
  const host = "stage5.tools";
  const now = new Date("2026-02-28T10:00:00.000Z");

  await stateStore.putJson("tls:cert:v1:stage5.tools", {
    fetchedAt: new Date(now.getTime() - 8 * 60 * 60 * 1000).toISOString(),
    certificate: {
      commonName: host,
      issuer: "C=US, O=Google Trust Services LLC, CN=WE1",
      source: "crtsh",
      notAfter: "2026-04-27T09:40:59.000Z",
    },
  });

  const cert = await defaultGetCertificate({
    host,
    fetchImpl: async () => {
      throw new Error("crt.sh timeout");
    },
    timeoutMs: 2000,
    nowDate: now,
    env: {
      TLS_CERT_SOURCE: "crtsh",
      TLS_CERT_CACHE_MAX_AGE_MS: String(60 * 60 * 1000),
      TLS_CERT_STALE_CACHE_MAX_AGE_MS: String(14 * 60 * 60 * 1000),
    },
    stateStore,
  });

  assert.equal(cert.source, "cached");
  assert.equal(cert.stale, true);
  assert.equal(cert.cachedFromSource, "crtsh");
  assert.match(cert.fallbackReason, /crt\.sh timeout/);
});

test("monitor lets individual TLS checks override certificate source order", async () => {
  let observedCertSource = null;
  const baseline = {
    ...BASELINE_CONFIG,
    httpsChecks: [],
    dnsChecks: [],
    tlsChecks: [
      {
        host: "stage5.tools",
        certSource: "crtsh",
        minDaysRemaining: 21,
      },
    ],
  };

  const report = await runMonitor({
    env: { ...buildEnv(), TLS_CERT_SOURCE: "live_socket,crtsh" },
    baseline,
    clients: {
      stateStore: createMemoryStateStore(),
      async getCertificate({ env }) {
        observedCertSource = env.TLS_CERT_SOURCE;
        return {
          commonName: "stage5.tools",
          issuer: "C=US, O=Google Trust Services LLC, CN=WE1",
          notAfter: "2026-04-27T09:40:59.000Z",
          source: "crtsh",
        };
      },
    },
    now: fixedNow,
  });

  assert.equal(report.status, "pass");
  assert.equal(observedCertSource, "crtsh");
});

test("defaultGetCertificate enforces single-label wildcard matching for crt.sh fallback", async () => {
  const crtshBody = JSON.stringify([
    {
      name_value: "*.stage5.tools",
      common_name: "*.stage5.tools",
      issuer_name: "C=US, O=Google Trust Services LLC, CN=WE1",
      not_before: "2026-01-01T00:00:00.000Z",
      not_after: "2026-04-27T09:40:59.000Z",
    },
  ]);

  await assert.rejects(
    () =>
      defaultGetCertificate({
        host: "api.echo.stage5.tools",
        fetchImpl: async () => new Response(crtshBody, { status: 200 }),
        timeoutMs: 2000,
        nowDate: fixedNow,
        env: {
          TLS_CERT_SOURCE: "crtsh",
        },
      }),
    /Unable to resolve certificate/
  );

  const singleLabelMatch = await defaultGetCertificate({
    host: "api.stage5.tools",
    fetchImpl: async () => new Response(crtshBody, { status: 200 }),
    timeoutMs: 2000,
    nowDate: fixedNow,
    env: {
      TLS_CERT_SOURCE: "crtsh",
    },
  });

  assert.equal(singleLabelMatch.source, "crtsh");
  assert.equal(singleLabelMatch.commonName, "*.stage5.tools");
});

test("defaultGetCertificate ignores not-yet-valid crt.sh certificates", async () => {
  const body = JSON.stringify([
    {
      name_value: "stage5.tools",
      common_name: "stage5.tools",
      issuer_name: "C=US, O=Google Trust Services LLC, CN=WE1",
      not_before: "2026-03-02T00:00:00.000Z",
      not_after: "2026-09-01T00:00:00.000Z",
    },
    {
      name_value: "stage5.tools",
      common_name: "stage5.tools",
      issuer_name: "C=US, O=Google Trust Services LLC, CN=WE1",
      not_before: "2026-01-01T00:00:00.000Z",
      not_after: "2026-03-15T00:00:00.000Z",
    },
  ]);

  const cert = await defaultGetCertificate({
    host: "stage5.tools",
    fetchImpl: async () => new Response(body, { status: 200 }),
    timeoutMs: 2000,
    nowDate: fixedNow,
    env: {
      TLS_CERT_SOURCE: "crtsh",
    },
  });

  assert.equal(cert.source, "crtsh");
  assert.equal(cert.notAfter, "2026-03-15T00:00:00.000Z");
});

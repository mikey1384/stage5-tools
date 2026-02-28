import { BASELINE_CONFIG } from "../config/baseline.config.js";
import { runMonitor } from "../src/monitor-core.js";

const mode = (process.argv[2] || "pass").toLowerCase();
const forceAlert = mode === "force";

const fixedNow = new Date("2026-02-28T00:00:00.000Z");

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

const dnsAnswers = {
  "api.echo.stage5.tools": {
    cloudflare: ["18.182.90.49"],
    google: ["18.182.90.49"],
  },
  "www.stage5.tools": {
    cloudflare: ["104.21.14.7", "172.67.142.44"],
    google: ["104.21.14.7", "172.67.142.44"],
  },
};

const env = {
  MONITOR_NAME: "stage5-tools-dns-tls-monitor",
  ALERT_WEBHOOK_URL: "https://hooks.example.invalid/stage5-monitor",
  SENDGRID_API_KEY: "demo-key",
  ALERT_EMAIL_FROM: "monitor@stage5.tools",
  ALERT_EMAIL_TO: "ops@stage5.tools",
  ALERT_REMINDER_INTERVAL_MS: "3600000",
};

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

const clients = {
  async fetch(input, init) {
    const url = typeof input === "string" ? input : input?.url;
    const method = String(init?.method || "GET").toUpperCase();
    const fixture = httpFixtures[`${method} ${url}`];
    if (!fixture) {
      throw new Error(`No HTTP fixture for ${method} ${url}`);
    }
    return new Response(fixture.body || "", {
      status: fixture.status,
      headers: fixture.headers || {},
    });
  },
  async resolveDns({ host, resolverName }) {
    const resolverAnswers = dnsAnswers[host]?.[resolverName];
    if (!resolverAnswers) {
      throw new Error(`No DNS fixture for ${host} via ${resolverName}`);
    }
    return resolverAnswers;
  },
  async getCertificate({ host }) {
    const cert = certs[host];
    if (!cert) {
      throw new Error(`No cert fixture for ${host}`);
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
    sent.push({ channel: "webhook", status: payload.status });
    return { mocked: true };
  },
  async sendEmail({ payload }) {
    sent.push({ channel: "email", status: payload.status });
    return { mocked: true };
  },
};

const report = await runMonitor({
  env,
  baseline: BASELINE_CONFIG,
  clients,
  forceAlert,
  now: fixedNow,
});

const output = {
  mode,
  status: report.status,
  failedChecks: report.failedChecks,
  sent,
  failures: report.failures.map((failure) => ({
    category: failure.category,
    target: failure.target,
    reasons: failure.reasons,
  })),
};

console.log(JSON.stringify(output, null, 2));

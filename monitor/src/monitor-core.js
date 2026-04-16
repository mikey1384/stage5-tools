import { BASELINE_CONFIG } from "../config/baseline.config.js";

const DNS_RESOLVERS = {
  cloudflare: {
    url: (host, type) =>
      `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(host)}&type=${encodeURIComponent(type)}`,
    headers: {
      accept: "application/dns-json",
    },
  },
  google: {
    url: (host, type) =>
      `https://dns.google/resolve?name=${encodeURIComponent(host)}&type=${encodeURIComponent(type)}`,
    headers: {},
  },
};

const MONITOR_STATE_KEY = "monitor:state:v1";
const CLOUDFLARE_IPV4_CACHE_KEY = "cloudflare:ips:v4";
const TLS_CERT_CACHE_KEY_PREFIX = "tls:cert:v1:";
const TLS_CERT_CACHE_DEFAULT_MAX_AGE_MS = 6 * 60 * 60 * 1000;
const TLS_CERT_CACHE_ENTRY_TTL_SECONDS = 14 * 24 * 60 * 60;
const TLS_CERT_STALE_CACHE_DEFAULT_MAX_AGE_MS = TLS_CERT_CACHE_ENTRY_TTL_SECONDS * 1000;

export async function runMonitor({
  env = {},
  baseline = BASELINE_CONFIG,
  clients = {},
  forceAlert = false,
  emitAlerts = true,
  persistState = true,
  now = new Date(),
} = {}) {
  const nowDate = now instanceof Date ? now : new Date(now);
  const startedAt = nowDate.toISOString();

  const fetchImpl = clients.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new Error("A fetch implementation is required.");
  }

  const timeoutMs = Number(env.CHECK_TIMEOUT_MS || 15000);
  const dnsTimeoutMs = Number(env.DNS_TIMEOUT_MS || timeoutMs);
  const certTimeoutMs = Number(env.CERT_TIMEOUT_MS || timeoutMs);
  const reminderIntervalMs = Number(env.ALERT_REMINDER_INTERVAL_MS || 3600000);
  const openAfterConsecutiveFailures = parsePositiveInt(env.ALERT_OPEN_AFTER_CONSECUTIVE_FAILURES, 1);
  const sendPassAlerts = env.SEND_PASS_ALERTS === "1";

  const stateStore = clients.stateStore ?? createKvStateStore(env.MONITOR_STATE_KV);
  const previousState = await readMonitorState({ stateStore });

  const getCloudflareIpv4Cidrs =
    clients.getCloudflareIpv4Cidrs ??
    ((opts) =>
      defaultGetCloudflareIpv4Cidrs({
        ...opts,
        fetchImpl,
        stateStore,
      }));

  const cloudflareIpv4Context = await resolveCloudflareIpv4Context({
    baseline,
    getCloudflareIpv4Cidrs,
    timeoutMs: dnsTimeoutMs,
    nowDate,
  });

  const resolveDns =
    clients.resolveDns ??
    ((opts) =>
      defaultResolveDns({
        ...opts,
        fetchImpl,
      }));

  const getCertificate =
    clients.getCertificate ??
    ((opts) =>
      defaultGetCertificate({
        ...opts,
        fetchImpl,
        stateStore,
      }));

  const sendWebhook =
    clients.sendWebhook ??
    ((opts) =>
      defaultSendWebhook({
        ...opts,
        fetchImpl,
      }));

  const sendEmail =
    clients.sendEmail ??
    ((opts) =>
      defaultSendEmail({
        ...opts,
        fetchImpl,
      }));

  const [httpsResults, tlsResults, dnsResults] = await Promise.all([
    Promise.all(
      (baseline.httpsChecks ?? []).map((check) => runHttpsCheck({ check, fetchImpl, timeoutMs }))
    ),
    Promise.all(
      (baseline.tlsChecks ?? []).map((check) =>
        runTlsCheck({
          check,
          getCertificate,
          timeoutMs: certTimeoutMs,
          nowDate,
          env,
        })
      )
    ),
    Promise.all(
      (baseline.dnsChecks ?? []).map((check) =>
        runDnsCheck({
          check,
          baseline,
          resolveDns,
          timeoutMs: dnsTimeoutMs,
          cloudflareIpv4Context,
          requireLiveCloudflareFeed: env.REQUIRE_CLOUDFLARE_FEED === "1",
        })
      )
    ),
  ]);

  const checks = [...httpsResults, ...tlsResults, ...dnsResults];
  const failures = checks.filter((item) => !item.pass);

  if (forceAlert) {
    failures.push({
      category: "forced",
      target: "manual",
      pass: false,
      reasons: ["FORCE_ALERT is enabled."],
    });
  }

  const status = failures.length > 0 ? "alert" : "pass";
  const alertPolicy = decideAlertPolicy({
    status,
    previousState,
    nowDate,
    reminderIntervalMs,
    openAfterConsecutiveFailures,
    forceAlert,
    sendPassAlerts,
    hasStateStore: Boolean(stateStore),
  });

  const report = {
    monitor: env.MONITOR_NAME || "stage5-tools-monitor",
    status,
    generatedAt: startedAt,
    totalChecks: checks.length,
    failedChecks: failures.length,
    checks,
    failures,
    notifications: [],
    alertPolicy,
    state: {
      previousStatus: previousState?.status || "unknown",
      currentStatus: status,
      persisted: false,
    },
    cloudflareIpv4Source: {
      source: cloudflareIpv4Context.source,
      cidrCount: cloudflareIpv4Context.cidrs.length,
      warning: cloudflareIpv4Context.warning,
    },
  };

  if (emitAlerts && alertPolicy.shouldNotify) {
    const payload = buildAlertPayload(report);
    const notifications = await dispatchAlerts({ env, payload, sendWebhook, sendEmail, timeoutMs });
    report.notifications = notifications;
  }

  report.alertPolicy = finalizeAlertPolicyAfterNotification({
    alertPolicy: report.alertPolicy,
    emitAlerts,
    notifications: report.notifications,
    nowIso: startedAt,
  });

  if (persistState && stateStore) {
    try {
      await stateStore.putJson(MONITOR_STATE_KEY, report.alertPolicy.nextState);
      report.state.persisted = true;
    } catch (error) {
      report.state.persisted = false;
      report.state.persistError = normalizeError(error);
    }
  }

  return report;
}

async function runHttpsCheck({ check, fetchImpl, timeoutMs }) {
  const started = Date.now();

  try {
    const method = String(check.method || "GET").toUpperCase();
    const requestInit = {
      method,
      redirect: "follow",
      headers: check.headers || {},
    };

    if (typeof check.body === "string") {
      requestInit.body = check.body;
    }

    const response = await fetchWithTimeout(fetchImpl, check.url, requestInit, timeoutMs);

    const latencyMs = Date.now() - started;
    const min = Number(check.expectedStatusMin ?? 200);
    const max = Number(check.expectedStatusMax ?? 399);
    const reasons = [];

    if (response.status < min || response.status > max) {
      reasons.push(`HTTP status ${response.status} outside expected range ${min}-${max}.`);
    }

    if (Array.isArray(check.expectBodyIncludes) && check.expectBodyIncludes.length > 0) {
      const bodyText = await response.text();
      const missing = check.expectBodyIncludes.filter((token) => !bodyText.includes(token));
      if (missing.length > 0) {
        reasons.push(`HTTP body missing expected token(s): ${missing.join(", ")}.`);
      }
    }

    return {
      category: "https",
      target: check.url,
      name: check.name,
      method,
      pass: reasons.length === 0,
      statusCode: response.status,
      latencyMs,
      reasons,
    };
  } catch (error) {
    return {
      category: "https",
      target: check.url,
      name: check.name,
      method: String(check.method || "GET").toUpperCase(),
      pass: false,
      reasons: [normalizeError(error)],
    };
  }
}

async function runTlsCheck({ check, getCertificate, timeoutMs, nowDate, env }) {
  try {
    const certEnv = check.certSource ? { ...env, TLS_CERT_SOURCE: check.certSource } : env;
    const cert = await getCertificate({
      host: check.host,
      timeoutMs,
      nowDate,
      env: certEnv,
    });

    const reasons = [];
    const warnings = [];
    const minDaysRemaining = Number(check.minDaysRemaining ?? 21);
    const daysRemaining = daysUntil(cert.notAfter, nowDate);

    if (cert.source === "cached") {
      const ageMinutes =
        Number.isFinite(cert.cacheAgeMs) && cert.cacheAgeMs >= 0
          ? Math.round(cert.cacheAgeMs / 60000)
          : null;
      const ageText =
        ageMinutes === null ? "unknown age" : `${ageMinutes} minute${ageMinutes === 1 ? "" : "s"} old`;
      warnings.push(
        `Using ${cert.stale ? "stale " : ""}cached certificate snapshot (${ageText}) from '${
          cert.cachedFromSource || "unknown"
        }' source because fresh certificate retrieval was unavailable or deferred this run.`
      );
    }

    if (daysRemaining < minDaysRemaining) {
      reasons.push(`Certificate expires in ${daysRemaining} days (< ${minDaysRemaining}).`);
    }

    const canCheckIdentityDrift =
      cert.source === "live-tls-socket" || env.ALLOW_NONLIVE_TLS_IDENTITY_CHECK === "1";
    if (!canCheckIdentityDrift) {
      warnings.push(
        `Skipped CN/issuer drift check because cert source is '${cert.source || "unknown"}' (not live socket).`
      );
      if (cert.fallbackReason) {
        warnings.push(`Live TLS source unavailable: ${cert.fallbackReason}`);
      }
    } else {
      if (
        Array.isArray(check.expectedCommonNames) &&
        check.expectedCommonNames.length > 0 &&
        !check.expectedCommonNames.includes(cert.commonName)
      ) {
        reasons.push(
          `Certificate CN changed: got '${cert.commonName}', expected one of [${check.expectedCommonNames.join(
            ", "
          )}].`
        );
      }

      if (
        Array.isArray(check.expectedIssuerContainsAny) &&
        check.expectedIssuerContainsAny.length > 0 &&
        !check.expectedIssuerContainsAny.some((token) => cert.issuer.includes(token))
      ) {
        reasons.push(
          `Certificate issuer changed: got '${cert.issuer}', expected to include one of [${check.expectedIssuerContainsAny.join(
            ", "
          )}].`
        );
      }
    }

    return {
      category: "tls",
      target: check.host,
      pass: reasons.length === 0,
      source: cert.source || "unknown",
      commonName: cert.commonName,
      issuer: cert.issuer,
      notAfter: cert.notAfter,
      daysRemaining,
      warnings,
      reasons,
    };
  } catch (error) {
    return {
      category: "tls",
      target: check.host,
      pass: false,
      reasons: [normalizeError(error)],
    };
  }
}

async function runDnsCheck({
  check,
  baseline,
  resolveDns,
  timeoutMs,
  cloudflareIpv4Context,
  requireLiveCloudflareFeed,
}) {
  const resolvers = baseline.dnsResolvers ?? ["cloudflare", "google"];
  const answersByResolver = {};
  const reasons = [];
  const warnings = [];

  for (const resolverName of resolvers) {
    try {
      const answers = await resolveDns({
        host: check.host,
        type: check.type || "A",
        resolverName,
        timeoutMs,
      });
      answersByResolver[resolverName] = unique(answers);
    } catch (error) {
      answersByResolver[resolverName] = [];
      reasons.push(`${resolverName} resolver failed: ${normalizeError(error)}`);
    }
  }

  const mergedAnswers = unique(Object.values(answersByResolver).flat());

  if (mergedAnswers.length === 0) {
    reasons.push("No DNS answers received.");
  }

  if (Array.isArray(check.mustInclude) && check.mustInclude.length > 0) {
    const missing = check.mustInclude.filter((ip) => !mergedAnswers.includes(ip));
    if (missing.length > 0) {
      reasons.push(`Missing required DNS answer(s): ${missing.join(", ")}.`);
    }
  }

  const blocked = Array.isArray(baseline.blockedAnswers) ? baseline.blockedAnswers : [];
  const blockedHits = mergedAnswers.filter((ip) => blocked.includes(ip));
  if (blockedHits.length > 0) {
    reasons.push(`Blocked parked IP answer detected: ${blockedHits.join(", ")}.`);
  }

  const cidrRequirement = resolveCidrRequirement({
    check,
    cloudflareIpv4Context,
    requireLiveCloudflareFeed,
  });

  if (cidrRequirement.warning) {
    warnings.push(cidrRequirement.warning);
  }

  if (cidrRequirement.enforce && cidrRequirement.cidrs.length === 0) {
    reasons.push("DNS CIDR validation is configured but no allowed CIDRs were available.");
  }

  if (cidrRequirement.enforce && cidrRequirement.cidrs.length > 0) {
    const outside = mergedAnswers.filter((ip) => !isAnyCidrMatch(ip, cidrRequirement.cidrs));
    if (outside.length > 0) {
      reasons.push(`DNS answer(s) outside allowed CIDRs (${cidrRequirement.source}): ${outside.join(", ")}.`);
    }
  }

  return {
    category: "dns",
    target: check.host,
    pass: reasons.length === 0,
    recordType: check.type || "A",
    answersByResolver,
    mergedAnswers,
    cidrSource: cidrRequirement.source,
    allowedCidrCount: cidrRequirement.cidrs.length,
    warnings,
    reasons,
  };
}

function resolveCidrRequirement({ check, cloudflareIpv4Context, requireLiveCloudflareFeed }) {
  if (check.requireAllAnswersInCloudflareIpv4Feed) {
    if (cloudflareIpv4Context.cidrs.length > 0) {
      return {
        enforce: true,
        source: cloudflareIpv4Context.source,
        cidrs: cloudflareIpv4Context.cidrs,
        warning: cloudflareIpv4Context.warning || null,
      };
    }

    if (Array.isArray(check.fallbackCidrs) && check.fallbackCidrs.length > 0) {
      if (requireLiveCloudflareFeed) {
        return {
          enforce: true,
          source: "cloudflare-feed-required",
          cidrs: [],
          warning: "Cloudflare IP feed unavailable and REQUIRE_CLOUDFLARE_FEED=1; failing closed.",
        };
      }

      return {
        enforce: true,
        source: "fallback-static-cidrs",
        cidrs: check.fallbackCidrs,
        warning: "Cloudflare IP feed unavailable, using fallback static CIDRs.",
      };
    }

    return {
      enforce: true,
      source: "missing-cidr-source",
      cidrs: [],
      warning: "Cloudflare IP feed unavailable and no fallback CIDRs configured.",
    };
  }

  if (Array.isArray(check.requireAllAnswersInCidrs) && check.requireAllAnswersInCidrs.length > 0) {
    return {
      enforce: true,
      source: "static-cidrs",
      cidrs: check.requireAllAnswersInCidrs,
      warning: null,
    };
  }

  return {
    enforce: false,
    source: "none",
    cidrs: [],
    warning: null,
  };
}

function decideAlertPolicy({
  status,
  previousState,
  nowDate,
  reminderIntervalMs,
  openAfterConsecutiveFailures,
  forceAlert,
  sendPassAlerts,
  hasStateStore,
}) {
  const nowIso = nowDate.toISOString();
  const previousStatus = previousState?.status || "unknown";
  const previousConsecutiveFailures =
    previousStatus === "alert" ? Number(previousState?.consecutiveFailures || 0) : 0;
  const currentConsecutiveFailures = status === "alert" ? previousConsecutiveFailures + 1 : 0;
  const previousIncidentOpened = Boolean(
    previousState?.incidentOpened ??
      (previousStatus === "alert" && String(previousState?.lastIncidentOpenedAt || "").trim())
  );
  const lastAlertAtMs = parseDate(previousState?.lastAlertAt);
  let shouldNotify = false;
  let reason = "pass-suppressed";

  if (status === "alert") {
    if (forceAlert) {
      shouldNotify = true;
      reason = "forced-alert";
    } else if (!hasStateStore) {
      shouldNotify = true;
      reason = "alert-no-kv-dedupe-disabled";
    } else if (!previousIncidentOpened && currentConsecutiveFailures >= openAfterConsecutiveFailures) {
      shouldNotify = true;
      reason = "incident-opened";
    } else if (!previousIncidentOpened) {
      shouldNotify = false;
      reason = "incident-opening-pending";
    } else if (lastAlertAtMs && nowDate.getTime() - lastAlertAtMs >= reminderIntervalMs) {
      shouldNotify = true;
      reason = "incident-reminder";
    } else {
      shouldNotify = false;
      reason = "incident-ongoing-suppressed";
    }
  } else if (!hasStateStore) {
    shouldNotify = sendPassAlerts;
    reason = sendPassAlerts ? "pass-heartbeat-no-kv" : "pass-no-kv";
  } else if (previousIncidentOpened) {
    shouldNotify = true;
    reason = "incident-recovered";
  } else if (previousStatus === "alert") {
    shouldNotify = false;
    reason = "incident-recovered-suppressed-unopened";
  } else if (sendPassAlerts) {
    shouldNotify = true;
    reason = "pass-heartbeat";
  } else {
    shouldNotify = false;
    reason = "pass-suppressed";
  }

  const nextState = {
    status,
    updatedAt: nowIso,
    lastAlertAt: previousState?.lastAlertAt || null,
    lastIncidentOpenedAt: previousState?.lastIncidentOpenedAt || null,
    lastIncidentRecoveredAt: previousState?.lastIncidentRecoveredAt || null,
    lastReminderAt: previousState?.lastReminderAt || null,
    consecutiveFailures: currentConsecutiveFailures,
    incidentOpened: previousIncidentOpened,
    lastPolicyReason: reason,
  };

  return {
    status,
    shouldNotify,
    reason,
    previousStatus,
    previousIncidentOpened,
    reminderIntervalMs,
    openAfterConsecutiveFailures,
    nextState,
  };
}

function finalizeAlertPolicyAfterNotification({ alertPolicy, emitAlerts, notifications, nowIso }) {
  const delivery = summarizeNotificationDelivery(notifications);
  const shouldAttempt = Boolean(alertPolicy.shouldNotify && emitAlerts);
  const deliverySucceeded = shouldAttempt && delivery.sent;
  const nextState = { ...alertPolicy.nextState };

  if (deliverySucceeded) {
    applySuccessfulNotificationStateUpdate({
      nextState,
      alertPolicy,
      nowIso,
    });
  }

  return {
    ...alertPolicy,
    nextState,
    notificationDelivery: {
      attempted: shouldAttempt && delivery.attempted,
      attemptedCount: shouldAttempt ? delivery.attemptedCount : 0,
      sent: deliverySucceeded,
      sentCount: shouldAttempt ? delivery.sentCount : 0,
      failed: shouldAttempt && !delivery.sent,
      skipped: alertPolicy.shouldNotify && !emitAlerts,
    },
  };
}

function summarizeNotificationDelivery(notifications) {
  const list = Array.isArray(notifications) ? notifications : [];
  const attemptedCount = list.length;
  const sentCount = list.filter((item) => item?.sent === true).length;

  return {
    attempted: attemptedCount > 0,
    attemptedCount,
    sent: sentCount > 0,
    sentCount,
  };
}

function applySuccessfulNotificationStateUpdate({ nextState, alertPolicy, nowIso }) {
  nextState.lastAlertAt = nowIso;

  if (alertPolicy.reason === "incident-reminder") {
    nextState.lastReminderAt = nowIso;
  }

  if (
    (alertPolicy.reason === "incident-opened" ||
      alertPolicy.reason === "forced-alert" ||
      alertPolicy.reason === "alert-no-kv-dedupe-disabled") &&
    nextState.status === "alert" &&
    !alertPolicy.previousIncidentOpened
  ) {
    nextState.incidentOpened = true;
    nextState.lastIncidentOpenedAt = nowIso;
  }

  if (alertPolicy.reason === "incident-recovered" && alertPolicy.previousIncidentOpened) {
    nextState.incidentOpened = false;
    nextState.lastIncidentRecoveredAt = nowIso;
  }
}

async function dispatchAlerts({ env, payload, sendWebhook, sendEmail, timeoutMs }) {
  const notifications = [];
  const jobs = [];

  if (env.ALERT_WEBHOOK_URL) {
    jobs.push(
      sendWebhook({ env, payload, timeoutMs })
        .then((result) => {
          notifications.push({ channel: "webhook", sent: true, result });
        })
        .catch((error) => {
          notifications.push({ channel: "webhook", sent: false, error: normalizeError(error) });
        })
    );
  }

  if (canSendEmail(env)) {
    jobs.push(
      sendEmail({ env, payload, timeoutMs })
        .then((result) => {
          notifications.push({ channel: "email", sent: true, result });
        })
        .catch((error) => {
          notifications.push({ channel: "email", sent: false, error: normalizeError(error) });
        })
    );
  }

  await Promise.all(jobs);
  return notifications;
}

function buildAlertPayload(report) {
  return {
    monitor: report.monitor,
    status: report.status,
    alertPolicy: report.alertPolicy,
    generatedAt: report.generatedAt,
    failedChecks: report.failedChecks,
    totalChecks: report.totalChecks,
    failures: report.failures.map((failure) => ({
      category: failure.category,
      target: failure.target,
      reasons: failure.reasons,
    })),
    text: buildPlainAlertText(report),
  };
}

function buildPlainAlertText(report) {
  const policyReason = report.alertPolicy?.reason ? ` policy=${report.alertPolicy.reason}` : "";

  if (report.status === "pass") {
    return `[${report.monitor}] PASS - ${report.totalChecks} checks succeeded at ${report.generatedAt}.${policyReason}`;
  }

  const failureLines = report.failures
    .map((failure) => {
      const joined = Array.isArray(failure.reasons) ? failure.reasons.join(" | ") : "Unknown failure";
      return `- ${failure.category}:${failure.target} -> ${joined}`;
    })
    .join("\n");

  return `[${report.monitor}] ALERT - ${report.failedChecks}/${report.totalChecks} checks failed at ${report.generatedAt}.${policyReason}\n${failureLines}`;
}

async function resolveCloudflareIpv4Context({ baseline, getCloudflareIpv4Cidrs, timeoutMs, nowDate }) {
  const requiresFeed = (baseline.dnsChecks ?? []).some((check) => check.requireAllAnswersInCloudflareIpv4Feed);

  if (!requiresFeed) {
    return {
      source: "not-required",
      cidrs: [],
      warning: null,
    };
  }

  try {
    const cidrs = await getCloudflareIpv4Cidrs({
      feedUrl: baseline.cloudflareIpv4FeedUrl || "https://www.cloudflare.com/ips-v4",
      cacheTtlSeconds: Number(baseline.cloudflareIpsCacheTtlSeconds || 86400),
      timeoutMs,
      nowDate,
    });

    if (!Array.isArray(cidrs) || cidrs.length === 0) {
      return {
        source: "cloudflare-feed-empty",
        cidrs: [],
        warning: "Cloudflare IP feed returned zero CIDRs.",
      };
    }

    return {
      source: "cloudflare-feed",
      cidrs,
      warning: null,
    };
  } catch (error) {
    return {
      source: "cloudflare-feed-error",
      cidrs: [],
      warning: normalizeError(error),
    };
  }
}

export async function defaultGetCloudflareIpv4Cidrs({
  feedUrl,
  cacheTtlSeconds,
  timeoutMs,
  nowDate,
  fetchImpl,
  stateStore,
}) {
  if (stateStore) {
    const cached = await stateStore.getJson(CLOUDFLARE_IPV4_CACHE_KEY);
    if (cached && Array.isArray(cached.cidrs) && cached.cidrs.length > 0 && cached.fetchedAt) {
      const ageMs = nowDate.getTime() - Date.parse(cached.fetchedAt);
      if (ageMs >= 0 && ageMs <= cacheTtlSeconds * 1000) {
        return cached.cidrs;
      }
    }
  }

  const response = await fetchWithTimeout(
    fetchImpl,
    feedUrl,
    {
      method: "GET",
      headers: {
        accept: "text/plain",
      },
    },
    timeoutMs
  );

  if (!response.ok) {
    throw new Error(`Cloudflare IP feed HTTP ${response.status}.`);
  }

  const body = await response.text();
  const cidrs = body
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .filter((line) => isValidIpv4Cidr(line));

  if (cidrs.length === 0) {
    throw new Error("Cloudflare IP feed did not return valid IPv4 CIDRs.");
  }

  if (stateStore) {
    await stateStore.putJson(
      CLOUDFLARE_IPV4_CACHE_KEY,
      {
        fetchedAt: nowDate.toISOString(),
        cidrs,
      },
      {
        expirationTtl: Math.max(cacheTtlSeconds * 2, cacheTtlSeconds + 3600),
      }
    );
  }

  return cidrs;
}

export async function defaultResolveDns({ host, type, resolverName, fetchImpl, timeoutMs }) {
  const resolver = DNS_RESOLVERS[resolverName];
  if (!resolver) {
    throw new Error(`Unknown resolver '${resolverName}'.`);
  }

  const response = await fetchWithTimeout(
    fetchImpl,
    resolver.url(host, type),
    {
      method: "GET",
      headers: resolver.headers,
    },
    timeoutMs
  );

  if (!response.ok) {
    throw new Error(`Resolver HTTP ${response.status}.`);
  }

  const body = await response.json();
  if (typeof body.Status === "number" && body.Status !== 0) {
    throw new Error(`Resolver status code ${body.Status}.`);
  }

  const answers = Array.isArray(body.Answer) ? body.Answer : [];
  return answers
    .filter((answer) => {
      if (String(type).toUpperCase() === "A") {
        return Number(answer.type) === 1;
      }
      return true;
    })
    .map((answer) => String(answer.data || "").trim())
    .filter(Boolean);
}

export async function defaultGetCertificate({
  host,
  fetchImpl,
  timeoutMs,
  nowDate,
  env = {},
  stateStore,
}) {
  const sourceOrder = parseCertificateSourceOrder(env.TLS_CERT_SOURCE || "live_socket,crtsh");
  const errors = [];
  const certCacheMaxAgeMs = parseNonNegativeInt(
    env.TLS_CERT_CACHE_MAX_AGE_MS,
    TLS_CERT_CACHE_DEFAULT_MAX_AGE_MS
  );
  const certStaleCacheMaxAgeMs =
    certCacheMaxAgeMs < 1
      ? 0
      : parseNonNegativeInt(
          env.TLS_CERT_STALE_CACHE_MAX_AGE_MS,
          TLS_CERT_STALE_CACHE_DEFAULT_MAX_AGE_MS
        );
  let cachedCertificatePromise = null;
  let staleCachedCertificatePromise = null;
  const getCachedCertificate = () => {
    cachedCertificatePromise ??= readCachedCertificate({
      stateStore,
      host,
      nowDate,
      maxAgeMs: certCacheMaxAgeMs,
      staleAfterMs: certCacheMaxAgeMs,
    });
    return cachedCertificatePromise;
  };
  const getStaleCachedCertificate = () => {
    staleCachedCertificatePromise ??= readCachedCertificate({
      stateStore,
      host,
      nowDate,
      maxAgeMs: Math.max(certCacheMaxAgeMs, certStaleCacheMaxAgeMs),
      staleAfterMs: certCacheMaxAgeMs,
    });
    return staleCachedCertificatePromise;
  };

  for (const source of sourceOrder) {
    if (source !== "live_socket") {
      const cachedCertificate = await getCachedCertificate();
      if (cachedCertificate) {
        return cachedCertificateFallback({ cachedCertificate, errors });
      }
    }

    try {
      let certificate;

      if (source === "live_socket") {
        certificate = await getCertificateViaLiveTlsSocket({ host, timeoutMs });
      } else if (source === "crtsh") {
        certificate = await getCertificateViaCrtSh({ host, fetchImpl, timeoutMs, nowDate });
        certificate = {
          ...certificate,
          fallbackReason: errors.length > 0 ? errors.join(" | ") : null,
        };
      }

      if (certificate) {
        await writeCachedCertificate({ stateStore, host, certificate, nowDate });
        return certificate;
      }
    } catch (error) {
      errors.push(`${source}: ${normalizeError(error)}`);
    }
  }

  const cachedCertificate = await getCachedCertificate();
  if (cachedCertificate) {
    return cachedCertificateFallback({ cachedCertificate, errors });
  }

  const staleCachedCertificate = await getStaleCachedCertificate();
  if (staleCachedCertificate) {
    return cachedCertificateFallback({ cachedCertificate: staleCachedCertificate, errors });
  }

  throw new Error(`Unable to resolve certificate for '${host}'. Attempts: ${errors.join(" | ")}`);
}

function cachedCertificateFallback({ cachedCertificate, errors }) {
  return {
    ...cachedCertificate,
    source: "cached",
    fallbackReason: errors.length > 0 ? errors.join(" | ") : null,
  };
}

async function getCertificateViaCrtSh({ host, fetchImpl, timeoutMs, nowDate }) {
  const response = await fetchWithTimeout(
    fetchImpl,
    `https://crt.sh/?q=${encodeURIComponent(host)}&exclude=expired&output=json`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    },
    timeoutMs
  );

  if (!response.ok) {
    throw new Error(`crt.sh HTTP ${response.status}.`);
  }

  const text = (await response.text()).trim();
  if (!text) {
    throw new Error("crt.sh returned an empty response.");
  }

  const entries = parseCrtShJson(text);
  const certificate = selectBestCertificate(entries, host, nowDate);

  if (!certificate) {
    throw new Error("No matching certificate found in crt.sh response.");
  }

  return {
    ...certificate,
    source: "crtsh",
  };
}

async function getCertificateViaLiveTlsSocket({ host, timeoutMs }) {
  let tlsModule;
  try {
    tlsModule = await import("node:tls");
  } catch (error) {
    throw new Error(`node:tls unavailable: ${normalizeError(error)}`);
  }

  return new Promise((resolve, reject) => {
    let settled = false;
    const fail = (error) => {
      if (!settled) {
        settled = true;
        reject(error);
      }
    };
    const succeed = (value) => {
      if (!settled) {
        settled = true;
        resolve(value);
      }
    };

    let socket;
    try {
      socket = tlsModule.connect({
        host,
        port: 443,
        servername: host,
      });
    } catch (error) {
      fail(new Error(`Failed to create TLS socket: ${normalizeError(error)}`));
      return;
    }

    const timer = setTimeout(() => {
      try {
        socket.destroy();
      } catch {
        // noop
      }
      fail(new Error("TLS socket timeout"));
    }, timeoutMs);

    socket.once("secureConnect", () => {
      try {
        const cert = socket.getPeerCertificate(true);
        if (!cert || typeof cert !== "object") {
          throw new Error("Peer certificate is missing.");
        }

        const commonName = String(cert?.subject?.CN || cert?.subject?.commonName || "").trim();
        const issuer = formatDistinguishedName(cert?.issuer);
        const validToRaw = String(cert?.valid_to || "").trim();
        const validToMs = parseDate(validToRaw);
        if (!commonName) {
          throw new Error("Peer certificate CN is missing.");
        }
        if (!issuer) {
          throw new Error("Peer certificate issuer is missing.");
        }
        if (!validToMs) {
          throw new Error(`Unable to parse peer certificate expiry '${validToRaw}'.`);
        }

        succeed({
          source: "live-tls-socket",
          commonName,
          issuer,
          notAfter: new Date(validToMs).toISOString(),
        });
      } catch (error) {
        fail(error);
      } finally {
        clearTimeout(timer);
        socket.end();
      }
    });

    socket.once("error", (error) => {
      clearTimeout(timer);
      fail(new Error(`TLS socket error: ${normalizeError(error)}`));
    });
  });
}

export async function defaultSendWebhook({ env, payload, fetchImpl, timeoutMs }) {
  const headers = {
    "content-type": "application/json",
  };

  if (env.ALERT_WEBHOOK_BEARER_TOKEN) {
    headers.authorization = `Bearer ${env.ALERT_WEBHOOK_BEARER_TOKEN}`;
  }

  const response = await fetchWithTimeout(
    fetchImpl,
    env.ALERT_WEBHOOK_URL,
    {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    },
    timeoutMs
  );

  if (!response.ok) {
    throw new Error(`Webhook HTTP ${response.status}.`);
  }

  return {
    statusCode: response.status,
  };
}

export async function defaultSendEmail({ env, payload, fetchImpl, timeoutMs }) {
  const to = String(env.ALERT_EMAIL_TO || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (to.length === 0) {
    throw new Error("ALERT_EMAIL_TO has no valid recipients.");
  }

  const from = resolveEmailFrom(env);
  if (!from) {
    throw new Error("No sender configured. Set ALERT_EMAIL_FROM or ECHO_EMAIL_SENDER or EMAIL_SENDER.");
  }

  const statusReason = payload.alertPolicy?.reason || payload.status;
  const subjectPrefix = payload.status === "alert" ? "ALERT" : "PASS";
  const subject = `[${payload.monitor}] ${subjectPrefix} (${statusReason})`;

  if (env.SENDGRID_API_KEY) {
    const response = await fetchWithTimeout(
      fetchImpl,
      env.SENDGRID_API_URL || "https://api.sendgrid.com/v3/mail/send",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${env.SENDGRID_API_KEY}`,
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: to.map((email) => ({ email })),
              subject,
            },
          ],
          from: {
            email: from,
          },
          content: [
            {
              type: "text/plain",
              value: payload.text,
            },
          ],
        }),
      },
      timeoutMs
    );

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`SendGrid HTTP ${response.status}: ${detail}`);
    }

    return {
      provider: "sendgrid",
      statusCode: response.status,
    };
  }

  throw new Error("SendGrid is not configured. Set SENDGRID_API_KEY.");
}

function canSendEmail(env) {
  const hasRecipient = Boolean(String(env.ALERT_EMAIL_TO || "").trim());
  const hasSender = Boolean(resolveEmailFrom(env));
  const hasProvider = Boolean(env.SENDGRID_API_KEY);
  return hasRecipient && hasSender && hasProvider;
}

function resolveEmailFrom(env) {
  const preferred = String(env.ALERT_EMAIL_FROM || "").trim();
  if (preferred) {
    return preferred;
  }
  const echoSender = String(env.ECHO_EMAIL_SENDER || "").trim();
  if (echoSender) {
    return echoSender;
  }
  const generic = String(env.EMAIL_SENDER || "").trim();
  if (generic) {
    return generic;
  }
  return "";
}

function createKvStateStore(kvBinding) {
  if (!kvBinding || typeof kvBinding.get !== "function" || typeof kvBinding.put !== "function") {
    return null;
  }

  return {
    async getJson(key) {
      return kvBinding.get(key, { type: "json" });
    },
    async putJson(key, value, options = {}) {
      await kvBinding.put(key, JSON.stringify(value), options);
    },
  };
}

async function readMonitorState({ stateStore }) {
  if (!stateStore) {
    return null;
  }

  try {
    const state = await stateStore.getJson(MONITOR_STATE_KEY);
    return state && typeof state === "object" ? state : null;
  } catch {
    return null;
  }
}

function parseCertificateSourceOrder(rawValue) {
  const tokens = String(rawValue || "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  const normalized = tokens
    .map((token) => {
      if (
        token === "live" ||
        token === "socket" ||
        token === "live_socket" ||
        token === "live-tls-socket"
      ) {
        return "live_socket";
      }
      if (token === "crt.sh" || token === "ct" || token === "crtsh") {
        return "crtsh";
      }
      return null;
    })
    .filter(Boolean);

  return normalized.length > 0 ? unique(normalized) : ["live_socket", "crtsh"];
}

function buildTlsCertificateCacheKey(host) {
  return `${TLS_CERT_CACHE_KEY_PREFIX}${String(host || "").trim().toLowerCase()}`;
}

function normalizeCertificateForCache(certificate) {
  if (!certificate || typeof certificate !== "object") {
    return null;
  }

  const commonName = String(certificate.commonName || "").trim();
  const issuer = String(certificate.issuer || "").trim();
  const source = String(certificate.source || "").trim() || "unknown";
  const notAfterMs = parseDate(certificate.notAfter);

  if (!commonName || !issuer || !notAfterMs) {
    return null;
  }

  return {
    commonName,
    issuer,
    source,
    notAfter: new Date(notAfterMs).toISOString(),
  };
}

async function writeCachedCertificate({ stateStore, host, certificate, nowDate }) {
  if (!stateStore) {
    return;
  }

  const cachePayload = normalizeCertificateForCache(certificate);
  if (!cachePayload) {
    return;
  }

  try {
    await stateStore.putJson(
      buildTlsCertificateCacheKey(host),
      {
        fetchedAt: nowDate.toISOString(),
        certificate: cachePayload,
      },
      {
        expirationTtl: TLS_CERT_CACHE_ENTRY_TTL_SECONDS,
      }
    );
  } catch {
    // Cache writes are best-effort and should never fail a monitor run.
  }
}

async function readCachedCertificate({ stateStore, host, nowDate, maxAgeMs, staleAfterMs }) {
  if (!stateStore || maxAgeMs < 1) {
    return null;
  }

  try {
    const cached = await stateStore.getJson(buildTlsCertificateCacheKey(host));
    if (!cached || typeof cached !== "object") {
      return null;
    }

    const fetchedAtMs = parseDate(cached.fetchedAt);
    const ageMs = fetchedAtMs === null ? null : nowDate.getTime() - fetchedAtMs;
    if (ageMs === null || ageMs < 0 || ageMs > maxAgeMs) {
      return null;
    }

    const certificate = normalizeCertificateForCache(cached.certificate);
    if (!certificate) {
      return null;
    }

    return {
      commonName: certificate.commonName,
      issuer: certificate.issuer,
      notAfter: certificate.notAfter,
      cacheAgeMs: ageMs,
      cachedFromSource: certificate.source,
      stale: ageMs > staleAfterMs,
    };
  } catch {
    return null;
  }
}

function formatDistinguishedName(value) {
  if (!value || typeof value !== "object") {
    return "";
  }

  const keysInOrder = ["C", "ST", "L", "O", "OU", "CN"];
  const parts = [];

  for (const key of keysInOrder) {
    const raw = value[key];
    if (raw) {
      parts.push(`${key}=${String(raw).trim()}`);
    }
  }

  for (const [key, raw] of Object.entries(value)) {
    if (keysInOrder.includes(key)) {
      continue;
    }
    if (raw) {
      parts.push(`${key}=${String(raw).trim()}`);
    }
  }

  return parts.join(", ");
}

function parseCrtShJson(rawText) {
  const trimmed = rawText.trim();

  try {
    const parsed = JSON.parse(trimmed);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    const normalized = `[${trimmed.replace(/}\s*{/g, "},{")}]`;
    const parsed = JSON.parse(normalized);
    return Array.isArray(parsed) ? parsed : [parsed];
  }
}

function selectBestCertificate(entries, host, nowDate) {
  const nowMs = nowDate.getTime();
  const mapped = entries
    .map((entry) => {
      const names = parseNames(entry.name_value);
      if (entry.common_name) {
        names.push(String(entry.common_name).trim());
      }

      const notAfterMs = parseDate(entry.not_after);
      const notBeforeMs = parseDate(entry.not_before);

      return {
        names,
        commonName: String(entry.common_name || "").trim(),
        issuer: String(entry.issuer_name || "").trim(),
        notAfterMs,
        notBeforeMs,
      };
    })
    .filter((entry) => entry.names.some((name) => dnsNameMatches(name, host)));

  if (mapped.length === 0) {
    return null;
  }

  const currentlyValid = mapped
    .filter((entry) => {
      if (!entry.notAfterMs || entry.notAfterMs <= nowMs) {
        return false;
      }
      if (entry.notBeforeMs !== null && entry.notBeforeMs > nowMs) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      const startDiff = (b.notBeforeMs || 0) - (a.notBeforeMs || 0);
      if (startDiff !== 0) {
        return startDiff;
      }
      return (b.notAfterMs || 0) - (a.notAfterMs || 0);
    });

  const selected = currentlyValid[0];

  if (!selected || !selected.notAfterMs) {
    return null;
  }

  return {
    commonName: selected.commonName,
    issuer: selected.issuer,
    notAfter: new Date(selected.notAfterMs).toISOString(),
  };
}

function parseNames(nameValue) {
  if (!nameValue) {
    return [];
  }

  return String(nameValue)
    .split(/\s+/)
    .flatMap((chunk) => chunk.split("\n"))
    .map((item) => item.trim())
    .filter(Boolean);
}

function dnsNameMatches(pattern, host) {
  const value = String(pattern || "").toLowerCase();
  const normalizedHost = String(host || "").toLowerCase();

  if (value === normalizedHost) {
    return true;
  }

  if (value.startsWith("*.")) {
    const suffix = value.slice(2);
    if (!suffix) {
      return false;
    }

    const suffixWithDot = `.${suffix}`;
    if (!normalizedHost.endsWith(suffixWithDot)) {
      return false;
    }

    const wildcardLabel = normalizedHost.slice(0, -suffixWithDot.length);
    return wildcardLabel.length > 0 && !wildcardLabel.includes(".");
  }

  return false;
}

function parseDate(input) {
  if (!input) {
    return null;
  }

  const raw = String(input).trim();
  const directMs = Date.parse(raw);
  if (!Number.isNaN(directMs)) {
    return directMs;
  }
  const withZone = /z$|[+-]\d\d:?\d\d$/i.test(raw) ? raw : `${raw}Z`;
  const ms = Date.parse(withZone);
  return Number.isNaN(ms) ? null : ms;
}

function parsePositiveInt(input, fallback) {
  const parsed = Number(input);
  if (!Number.isFinite(parsed) || parsed < 1) {
    return fallback;
  }
  return Math.floor(parsed);
}

function parseNonNegativeInt(input, fallback) {
  const parsed = Number(input);
  if (!Number.isFinite(parsed) || parsed < 0) {
    return fallback;
  }
  return Math.floor(parsed);
}

function daysUntil(isoDate, fromDate) {
  const endMs = Date.parse(isoDate);
  const diffMs = endMs - fromDate.getTime();
  return Math.floor(diffMs / 86400000);
}

function normalizeError(error) {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

function unique(values) {
  return [...new Set(values)];
}

function isAnyCidrMatch(ip, cidrList) {
  return cidrList.some((cidr) => isIpInCidr(ip, cidr));
}

function isIpInCidr(ip, cidr) {
  if (!isIpv4(ip)) {
    return false;
  }

  const [range, prefixRaw] = String(cidr).split("/");
  if (!isIpv4(range)) {
    return false;
  }

  const prefix = Number(prefixRaw);
  if (!Number.isInteger(prefix) || prefix < 0 || prefix > 32) {
    return false;
  }

  const ipInt = ipv4ToInt(ip);
  const rangeInt = ipv4ToInt(range);
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;

  return (ipInt & mask) === (rangeInt & mask);
}

function isValidIpv4Cidr(cidr) {
  const [ip, prefixRaw] = String(cidr).split("/");
  if (!isIpv4(ip)) {
    return false;
  }

  const prefix = Number(prefixRaw);
  return Number.isInteger(prefix) && prefix >= 0 && prefix <= 32;
}

function isIpv4(value) {
  const parts = String(value).split(".");
  if (parts.length !== 4) {
    return false;
  }

  return parts.every((part) => {
    if (!/^\d+$/.test(part)) {
      return false;
    }
    const num = Number(part);
    return num >= 0 && num <= 255;
  });
}

function ipv4ToInt(ip) {
  return ip
    .split(".")
    .map((part) => Number(part))
    .reduce((acc, octet) => ((acc << 8) | octet) >>> 0, 0);
}

async function fetchWithTimeout(fetchImpl, url, init, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(new Error("timeout")), timeoutMs);

  try {
    return await fetchImpl(url, {
      ...init,
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

export { buildPlainAlertText, isIpInCidr };

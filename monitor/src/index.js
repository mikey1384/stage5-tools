import { runMonitor } from "./monitor-core.js";

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export default {
  async scheduled(_event, env, ctx) {
    ctx.waitUntil(
      runMonitor({
        env,
        forceAlert: env.FORCE_ALERT === "1",
      }).then((report) => {
        const line = `[${report.monitor}] ${report.status.toUpperCase()} (${report.failedChecks}/${report.totalChecks} failed)`;
        if (report.status === "alert") {
          console.error(line);
        } else {
          console.log(line);
        }
      })
    );
  },

  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/healthz") {
      return json({ ok: true });
    }

    if (url.pathname === "/run") {
      const auth = authorizeRunRequest(request, env);
      if (!auth.ok) {
        return json({ error: auth.error }, auth.status);
      }

      const forceAlert = url.searchParams.get("forceAlert") === "1";
      const notify = url.searchParams.get("notify") !== "0";
      const persistState = url.searchParams.get("persist") === "1";
      const report = await runMonitor({
        env,
        forceAlert,
        emitAlerts: notify,
        persistState,
      });

      const httpStatus = report.status === "alert" ? 503 : 200;
      return json(report, httpStatus);
    }

    return json({
      monitor: env.MONITOR_NAME || "stage5-tools-monitor",
      endpoints: ["/healthz", "/run?notify=0", "/run?forceAlert=1"],
    });
  },
};

function authorizeRunRequest(request, env) {
  const expectedToken = String(env.RUN_TRIGGER_TOKEN || "").trim();
  if (!expectedToken) {
    return {
      ok: false,
      status: 503,
      error: "RUN_TRIGGER_TOKEN is not configured.",
    };
  }

  const headerToken = String(request.headers.get("x-monitor-token") || "").trim();
  const authToken = parseBearerToken(request.headers.get("authorization"));
  const provided = headerToken || authToken;

  if (!provided) {
    return {
      ok: false,
      status: 401,
      error: "Missing monitor run token.",
    };
  }

  if (provided !== expectedToken) {
    return {
      ok: false,
      status: 403,
      error: "Invalid monitor run token.",
    };
  }

  return { ok: true };
}

function parseBearerToken(value) {
  const raw = String(value || "");
  if (!raw.toLowerCase().startsWith("bearer ")) {
    return "";
  }
  return raw.slice(7).trim();
}

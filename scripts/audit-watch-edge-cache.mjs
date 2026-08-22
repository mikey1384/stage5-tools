#!/usr/bin/env node

const PUBLIC_BASE =
  process.env.WATCH_ASSETS_BASE ?? "https://downloads.stage5.tools/watch";
const USER_AGENT = "TranslatorWatchEdgeCacheAudit/1.0";
const ELIGIBLE_STATUSES = new Set([
  "HIT",
  "MISS",
  "EXPIRED",
  "REVALIDATED",
  "STALE",
  "UPDATING",
]);

async function fetchProbe(url) {
  const response = await fetch(url, {
    headers: { "user-agent": USER_AGENT },
  });
  const body = Buffer.from(await response.arrayBuffer());
  return {
    response,
    body,
    cacheStatus: response.headers.get("cf-cache-status")?.toUpperCase() ?? null,
  };
}

async function inspect(url, expectedContentType) {
  const first = await fetchProbe(url);
  const second = await fetchProbe(url);
  const contentType = second.response.headers
    .get("content-type")
    ?.split(";", 1)[0];
  const cacheStatuses = [first.cacheStatus, second.cacheStatus];
  const issues = [];

  if (!first.response.ok || !second.response.ok) {
    issues.push(
      `expected two successful responses; received ${first.response.status} and ${second.response.status}`,
    );
  }
  if (contentType !== expectedContentType) {
    issues.push(
      `expected Content-Type ${expectedContentType}; received ${contentType ?? "none"}`,
    );
  }
  if (second.body.length === 0) issues.push("received an empty response body");
  for (const status of cacheStatuses) {
    if (!status || !ELIGIBLE_STATUSES.has(status)) {
      issues.push(
        `CF-Cache-Status ${status ?? "none"} does not show cache eligibility`,
      );
      break;
    }
  }

  return {
    url,
    body: second.body,
    cacheStatuses,
    cacheControl: second.response.headers.get("cache-control"),
    issues,
  };
}

try {
  const catalog = await inspect(
    `${PUBLIC_BASE}/catalog.json`,
    "application/json",
  );
  let parsedCatalog;
  try {
    parsedCatalog = JSON.parse(catalog.body.toString("utf8"));
  } catch (error) {
    catalog.issues.push(`catalog JSON parsing failed: ${error.message}`);
  }

  let vtt;
  if (Array.isArray(parsedCatalog) && parsedCatalog.length > 0) {
    const entry = parsedCatalog.find(
      (candidate) =>
        typeof candidate?.vttSlug === "string" &&
        Array.isArray(candidate.tracks) &&
        typeof candidate.tracks[0] === "string",
    );
    if (entry) {
      const file = `${entry.vttSlug}.${entry.tracks[0]}.30s.vtt`;
      vtt = await inspect(`${PUBLIC_BASE}/vtt/${file}`, "text/vtt");
      if (
        !/^WEBVTT(?:\r?\n|$)/.test(vtt.body.toString("utf8")) ||
        !vtt.body.includes(Buffer.from("-->"))
      ) {
        vtt.issues.push("response is not a cue-bearing WebVTT document");
      }
    } else {
      catalog.issues.push("catalog contains no entry with a usable VTT track");
    }
  } else if (!catalog.issues.some((issue) => issue.includes("JSON parsing"))) {
    catalog.issues.push("catalog root is empty or is not an array");
  }

  const probes = [catalog, ...(vtt ? [vtt] : [])];
  for (const probe of probes) {
    console.log(
      `${probe.url}: CF-Cache-Status ${probe.cacheStatuses.join(" -> ")}; Cache-Control ${probe.cacheControl ?? "none"}`,
    );
  }

  const failures = probes.flatMap((probe) =>
    probe.issues.map((issue) => `${probe.url}: ${issue}`),
  );
  if (failures.length > 0) {
    console.error(
      `Watch R2 edge-cache audit failed with ${failures.length} issue(s):`,
    );
    for (const failure of failures) console.error(`- ${failure}`);
    process.exitCode = 2;
  } else {
    console.log("Watch R2 edge-cache audit passed.");
  }
} catch (error) {
  console.error(`Watch R2 edge-cache audit failed: ${error.message}`);
  process.exitCode = 1;
}

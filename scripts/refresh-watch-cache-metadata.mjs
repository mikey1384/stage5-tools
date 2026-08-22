#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import {
  expectedVttFileNames,
  validateWatchCatalog,
} from "./watch-catalog-validation.mjs";

const PUBLIC_BASE = "https://downloads.stage5.tools/watch";
const R2_BUCKET = process.env.R2_BUCKET ?? "ai-translator-downloads";
const APPLY = process.argv.includes("--apply");
const CONFIRMATION = process.argv.find((argument) =>
  argument.startsWith("--confirm-bucket="),
);
const confirmedBucket = CONFIRMATION?.split("=", 2)[1];
const CONCURRENCY = 12;

const cachePolicies = {
  catalog: {
    contentType: "application/json",
    cacheControl: "public, max-age=60, stale-while-revalidate=300",
  },
  vtt: {
    contentType: "text/vtt",
    cacheControl: "public, max-age=3600, stale-while-revalidate=86400",
  },
};

if (APPLY && confirmedBucket !== R2_BUCKET) {
  console.error(
    `Refusing to write. Re-run with --apply --confirm-bucket=${R2_BUCKET}.`,
  );
  process.exit(1);
}

function hasCachePolicy(actual, expected) {
  if (!actual) return false;
  return expected
    .split(",")
    .map((directive) => directive.trim().toLowerCase())
    .every((directive) => actual.toLowerCase().includes(directive));
}

async function runPool(items, worker) {
  let cursor = 0;
  const workers = Array.from(
    { length: Math.min(CONCURRENCY, items.length) },
    async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        await worker(items[index]);
      }
    },
  );
  await Promise.all(workers);
}

async function fetchCatalog() {
  const response = await fetch(`${PUBLIC_BASE}/catalog.json`, {
    headers: { "user-agent": "TranslatorWatchCacheAudit/1.0" },
  });
  if (!response.ok) {
    throw new Error(`Catalog returned HTTP ${response.status}.`);
  }
  return validateWatchCatalog(await response.json());
}

function expectedObjects(catalog) {
  const objects = [
    {
      key: "watch/catalog.json",
      url: `${PUBLIC_BASE}/catalog.json`,
      ...cachePolicies.catalog,
    },
  ];
  const vttFiles = new Set(
    catalog.flatMap((entry) => expectedVttFileNames(entry)),
  );
  for (const file of vttFiles) {
    objects.push({
      key: `watch/vtt/${file}`,
      url: `${PUBLIC_BASE}/vtt/${file}`,
      ...cachePolicies.vtt,
    });
  }
  return objects;
}

async function inspectObject(object) {
  const response = await fetch(object.url, {
    method: "HEAD",
    headers: { "user-agent": "TranslatorWatchCacheAudit/1.0" },
  });
  const contentType = response.headers.get("content-type")?.split(";", 1)[0];
  const cacheControl = response.headers.get("cache-control");
  return {
    ...object,
    status: response.status,
    contentType,
    cacheControl,
    compliant:
      response.ok &&
      contentType === object.contentType &&
      hasCachePolicy(cacheControl, object.cacheControl),
  };
}

async function readValidatedBody(object) {
  const cacheBust = new URL(object.url);
  cacheBust.searchParams.set("metadata-refresh", Date.now().toString());
  const response = await fetch(cacheBust, {
    headers: { "user-agent": "TranslatorWatchCacheRefresh/1.0" },
  });
  if (!response.ok) {
    throw new Error(`${object.key} returned HTTP ${response.status}.`);
  }
  const body = Buffer.from(await response.arrayBuffer());
  if (body.length === 0) throw new Error(`${object.key} is empty.`);

  if (object.contentType === "application/json") {
    validateWatchCatalog(JSON.parse(body.toString("utf8")));
  } else if (
    !/^WEBVTT(?:\r?\n|$)/.test(body.toString("utf8")) ||
    !body.includes(Buffer.from("-->"))
  ) {
    throw new Error(`${object.key} is not a cue-bearing WebVTT document.`);
  }
  return body;
}

async function replaceMetadata(object) {
  const body = await readValidatedBody(object);
  const executable = process.platform === "win32" ? "npx.cmd" : "npx";
  const result = spawnSync(
    executable,
    [
      "wrangler",
      "r2",
      "object",
      "put",
      `${R2_BUCKET}/${object.key}`,
      "--remote",
      "--force",
      "--pipe",
      "--content-type",
      object.contentType,
      "--cache-control",
      object.cacheControl,
    ],
    {
      input: body,
      encoding: "utf8",
      maxBuffer: 5 * 1024 * 1024,
    },
  );
  if (result.status !== 0) {
    throw new Error(
      `Wrangler failed for ${object.key}: ${(result.stderr || result.stdout).trim()}`,
    );
  }
}

const catalog = await fetchCatalog();
const objects = expectedObjects(catalog);
const inspections = [];
await runPool(objects, async (object) => {
  inspections.push(await inspectObject(object));
});
const stale = inspections.filter((inspection) => !inspection.compliant);

console.log(
  `Watch R2 cache audit: ${objects.length} objects, ${objects.length - stale.length} compliant, ${stale.length} requiring metadata refresh.`,
);

if (!APPLY) {
  if (stale.length > 0) {
    console.log(
      `Dry run only. To refresh verified objects, pass --apply --confirm-bucket=${R2_BUCKET}.`,
    );
    process.exitCode = 2;
  }
} else {
  let completed = 0;
  for (const object of stale) {
    await replaceMetadata(object);
    completed += 1;
    console.log(`Refreshed ${completed}/${stale.length}: ${object.key}`);
  }

  const verification = [];
  await runPool(objects, async (object) => {
    verification.push(await inspectObject(object));
  });
  const remaining = verification.filter((inspection) => !inspection.compliant);
  if (remaining.length > 0) {
    console.error(
      `Metadata refresh completed, but ${remaining.length} object(s) still fail verification.`,
    );
    process.exitCode = 1;
  } else {
    console.log(`Verified cache metadata for all ${objects.length} Watch objects.`);
  }
}

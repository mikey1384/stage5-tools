#!/usr/bin/env node

/**
 * Seed the R2 watch catalog with all current watch pages.
 * 
 * This one-time script:
 * 1. Loads the real catalog from lib/watch (with correct IDs + real locale copy)
 * 2. Uploads all public/watch/*.vtt files to R2
 * 3. Uploads the complete catalog.json to R2
 * 
 * Usage:
 *   node scripts/seed-watch-catalog.mjs
 * 
 * Required environment variables:
 *   R2_BUCKET=ai-translator-downloads
 *   R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
 *   AWS_ACCESS_KEY_ID=<r2-access-key-id>
 *   AWS_SECRET_ACCESS_KEY=<r2-secret-access-key>
 */

import { readFile, readdir } from "fs/promises";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { join, dirname } from "path";
import { createRequire } from "node:module";
import { fileURLToPath } from "url";
import {
  expectedVttFileNames,
  validateWatchCatalog,
} from "./watch-catalog-validation.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..");
const require = createRequire(import.meta.url);

const R2_BUCKET = process.env.R2_BUCKET || "ai-translator-downloads";
const R2_ENDPOINT = process.env.R2_ENDPOINT;
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

if (!R2_ENDPOINT || !AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
  console.error("Error: Missing required environment variables");
  console.error("Required: R2_ENDPOINT, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY");
  console.error("Optional: R2_BUCKET (defaults to ai-translator-downloads)");
  process.exit(1);
}

const s3 = new S3Client({
  region: "auto",
  endpoint: R2_ENDPOINT,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

async function loadCatalogFromLib() {
  const ts = require("typescript");
  const originalLoader = require.extensions[".ts"];
  require.extensions[".ts"] = (module, filename) => {
    const source = require("node:fs").readFileSync(filename, "utf8");
    const output = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
      fileName: filename,
    }).outputText;
    module._compile(output, filename);
  };

  let catalog;
  try {
    const catalogModule = require(join(projectRoot, "lib/watch/index.ts"));
    if (typeof catalogModule.getAllVideos !== "function") {
      throw new Error("Could not load getAllVideos from lib/watch");
    }
    catalog = validateWatchCatalog(catalogModule.getAllVideos());
  } finally {
    if (originalLoader) require.extensions[".ts"] = originalLoader;
    else delete require.extensions[".ts"];
  }

  console.log(`Loaded ${catalog.length} videos from lib/watch catalog`);
  
  // Verify IDs match expected table
  const expectedIds = {
    "ferran-adria-wild-project": "xzSOmaZGtiI",
    "pique-la-resistencia": "AcGwBcHPMPQ",
    "park-chan-wook-lee-dong-jin": "CjVz6F62T4w",
    "lee-jung-jae-hunt-piarchia": "mF6xumJOVss",
    "yoo-ji-tae-piarchia": "PYY10Yq50bA",
    "kore-eda-piarchia": "j29oHrGMmtY",
    "calvo-wild-project": "Wk_4tQOvdWU",
    "nolan-colbert-oppenheimer": "WGH8RMbrGLM",
    "ramsay-hot-ones": "U9DyHthJ6LA",
  };
  
  for (const video of catalog) {
    if (expectedIds[video.slug] && video.videoId !== expectedIds[video.slug]) {
      console.error(`ERROR: ${video.slug} has videoId ${video.videoId}, expected ${expectedIds[video.slug]}`);
      process.exit(1);
    }
  }
  
  console.log("✓ All video IDs verified against expected table");
  return catalog;
}

async function uploadVtt(vttPath, fileName) {
  const content = await readFile(vttPath, "utf-8");
  
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: `watch/vtt/${fileName}`,
    Body: content,
    ContentType: "text/vtt",
    CacheControl: "public, max-age=3600, stale-while-revalidate=86400",
  });
  
  await s3.send(command);
  console.log(`✓ Uploaded VTT: ${fileName}`);
}

async function uploadCatalog(catalog) {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: "watch/catalog.json",
    Body: JSON.stringify(catalog, null, 2),
    ContentType: "application/json",
    CacheControl: "public, max-age=60, stale-while-revalidate=300",
  });
  
  await s3.send(command);
  console.log("✓ Uploaded catalog.json");
}

async function seed() {
  console.log("Loading catalog from lib/watch (real IDs + real locale copy)...");
  const catalog = await loadCatalogFromLib();
  
  // Upload VTT files
  console.log("\nUploading VTT files from public/watch...");
  const publicWatchDir = join(projectRoot, "public", "watch");
  const files = await readdir(publicWatchDir);
  const vttFiles = files.filter((f) => f.endsWith(".vtt"));
  const localVttFiles = new Set(vttFiles);
  for (const video of catalog) {
    for (const expectedFile of expectedVttFileNames(video)) {
      if (!localVttFiles.has(expectedFile)) {
        throw new Error(`Missing required local VTT: ${expectedFile}`);
      }
    }
  }
  
  for (const vttFile of vttFiles) {
    await uploadVtt(join(publicWatchDir, vttFile), vttFile);
  }
  
  console.log(`✓ Uploaded ${vttFiles.length} VTT files`);
  
  // Upload catalog
  console.log("\nUploading catalog...");
  await uploadCatalog(catalog);
  
  console.log("\n✓ Seed complete");
  console.log(`Catalog: ${catalog.length} entries with real IDs and real locale copy`);
  console.log(`VTT files: ${vttFiles.length}`);
  console.log("\nPublic URLs:");
  console.log("  Catalog: https://downloads.stage5.tools/watch/catalog.json");
  console.log("  VTTs: https://downloads.stage5.tools/watch/vtt/{vttSlug}.{lang}.30s.vtt");
}

seed().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});

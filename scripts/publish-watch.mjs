#!/usr/bin/env node

/**
 * Publish a watch catalog entry and its VTT files to R2.
 * 
 * Usage:
 *   node scripts/publish-watch.mjs add <catalog-entry.json> [vtt-dir]
 * 
 * Required environment variables:
 *   R2_BUCKET=ai-translator-downloads
 *   R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
 *   AWS_ACCESS_KEY_ID=<r2-access-key-id>
 *   AWS_SECRET_ACCESS_KEY=<r2-secret-access-key>
 * 
 * The script:
 * 1. Reads the catalog entry JSON
 * 2. Fetches existing catalog.json from R2
 * 3. Merges the new entry (replaces if slug exists)
 * 4. Uploads and verifies VTT files in s3://ai-translator-downloads/watch/vtt/
 * 5. Uploads catalog.json last so readers never see an entry before its captions
 */

import { readFile, readdir } from "fs/promises";
import {
  S3Client,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { basename, join } from "path";
import {
  expectedVttFileNames,
  validateWatchCatalog,
  validateWatchEntry,
} from "./watch-catalog-validation.mjs";

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

async function fetchCatalog() {
  try {
    const command = new GetObjectCommand({
      Bucket: R2_BUCKET,
      Key: "watch/catalog.json",
    });
    const response = await s3.send(command);
    const body = await response.Body.transformToString();
    const catalog = JSON.parse(body);
    return validateWatchCatalog(catalog);
  } catch (error) {
    if (error.name === "NoSuchKey") {
      console.log("No existing catalog found, creating new one");
      return [];
    }
    throw error;
  }
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

async function uploadVtt(filePath) {
  const content = await readFile(filePath, "utf-8");
  const fileName = basename(filePath);
  
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: `watch/vtt/${fileName}`,
    Body: content,
    ContentType: "text/vtt",
    CacheControl: "public, max-age=3600, stale-while-revalidate=86400",
  });
  
  await s3.send(command);
  console.log(`✓ Uploaded ${fileName}`);
}

async function verifyVttObjects(entry) {
  for (const fileName of expectedVttFileNames(entry)) {
    const object = await s3.send(
      new HeadObjectCommand({
        Bucket: R2_BUCKET,
        Key: `watch/vtt/${fileName}`,
      }),
    );
    if (!object.ContentLength) {
      throw new Error(`Required VTT is empty: ${fileName}`);
    }
    if (object.ContentType?.split(";", 1)[0] !== "text/vtt") {
      throw new Error(
        `Required VTT has unexpected Content-Type ${object.ContentType ?? "missing"}: ${fileName}`,
      );
    }
    console.log(`✓ Verified ${fileName}`);
  }
}

async function publishEntry(entryPath, vttDir) {
  console.log("Loading catalog entry...");
  const entryContent = await readFile(entryPath, "utf-8");
  const newEntry = JSON.parse(entryContent);
  validateWatchEntry(newEntry);
  
  console.log(`Publishing entry for slug: ${newEntry.slug}`);
  
  // Fetch existing catalog
  console.log("Fetching existing catalog from R2...");
  const catalog = await fetchCatalog();
  
  // Merge or add entry
  const existingIndex = catalog.findIndex((e) => e.slug === newEntry.slug);
  if (existingIndex >= 0) {
    console.log(`Replacing existing entry for ${newEntry.slug}`);
    catalog[existingIndex] = newEntry;
  } else {
    console.log(`Adding new entry for ${newEntry.slug}`);
    catalog.push(newEntry);
  }
  
  // Upload VTT files before making the entry visible in the catalog.
  if (vttDir) {
    console.log(`Uploading VTT files from ${vttDir}...`);
    const files = await readdir(vttDir);
    const expectedVttFiles = new Set(expectedVttFileNames(newEntry));
    const vttFiles = files.filter((file) => expectedVttFiles.has(file));
    
    for (const vttFile of vttFiles) {
      await uploadVtt(join(vttDir, vttFile));
    }
    
    console.log(`✓ Uploaded ${vttFiles.length} VTT files`);
  }

  console.log("Verifying required VTT files in R2...");
  await verifyVttObjects(newEntry);

  validateWatchCatalog(catalog);
  console.log("Uploading catalog...");
  await uploadCatalog(catalog);
  
  console.log("\n✓ Publish complete");
  console.log(`Catalog now has ${catalog.length} entries`);
}

// Main
const [, , command, ...args] = process.argv;

if (command === "add" && args.length >= 1) {
  const [entryPath, vttDir] = args;
  publishEntry(entryPath, vttDir).catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
} else {
  console.log("Usage: node scripts/publish-watch.mjs add <catalog-entry.json> [vtt-dir]");
  console.log("");
  console.log("Required environment variables:");
  console.log("  R2_BUCKET=ai-translator-downloads");
  console.log("  R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com");
  console.log("  AWS_ACCESS_KEY_ID=<r2-access-key-id>");
  console.log("  AWS_SECRET_ACCESS_KEY=<r2-secret-access-key>");
  process.exit(1);
}

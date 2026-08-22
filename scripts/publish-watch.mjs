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
 * 4. Uploads updated catalog.json to s3://ai-translator-downloads/watch/catalog.json
 * 5. Uploads VTT files to s3://ai-translator-downloads/watch/vtt/
 */

import { readFile, readdir } from "fs/promises";
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { basename } from "path";

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
    return JSON.parse(body);
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
  });
  
  await s3.send(command);
  console.log(`✓ Uploaded ${fileName}`);
}

async function publishEntry(entryPath, vttDir) {
  console.log("Loading catalog entry...");
  const entryContent = await readFile(entryPath, "utf-8");
  const newEntry = JSON.parse(entryContent);
  
  if (!newEntry.slug) {
    console.error("Error: Catalog entry must have a 'slug' field");
    process.exit(1);
  }
  
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
  
  // Upload catalog
  console.log("Uploading catalog...");
  await uploadCatalog(catalog);
  
  // Upload VTT files if directory provided
  if (vttDir) {
    console.log(`Uploading VTT files from ${vttDir}...`);
    const files = await readdir(vttDir);
    const vttFiles = files.filter((f) => f.endsWith(".vtt"));
    
    for (const vttFile of vttFiles) {
      await uploadVtt(`${vttDir}/${vttFile}`);
    }
    
    console.log(`✓ Uploaded ${vttFiles.length} VTT files`);
  }
  
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

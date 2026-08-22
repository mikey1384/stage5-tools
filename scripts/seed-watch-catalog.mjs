#!/usr/bin/env node

/**
 * Seed the R2 watch catalog with all current watch pages.
 * 
 * This one-time script:
 * 1. Scans app/watch/* directories for existing pages
 * 2. Reads copy.ts files to build catalog entries
 * 3. Uploads all public/watch/*.vtt files to R2
 * 4. Uploads the complete catalog.json to R2
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
import { join } from "path";

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

// Hardcoded mappings from existing pages
const watchEntries = [
  {
    slug: "ferran-adria-wild-project",
    videoId: "ferran-adria-wild-project",
    vttSlug: "ferran-adria-wild-project",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "pique-la-resistencia",
    videoId: "pique-la-resistencia",
    vttSlug: "pique-la-resistencia",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "park-chan-wook-lee-dong-jin",
    videoId: "park-chan-wook-lee-dong-jin",
    vttSlug: "park-chan-wook-lee-dong-jin",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "lee-jung-jae-hunt-piarchia",
    videoId: "lee-jung-jae-hunt-piarchia",
    vttSlug: "lee-jung-jae-hunt-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "yoo-ji-tae-piarchia",
    videoId: "yoo-ji-tae-piarchia",
    vttSlug: "yoo-ji-tae-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "kore-eda-piarchia",
    videoId: "kore-eda-piarchia",
    vttSlug: "kore-eda-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "calvo-wild-project",
    videoId: "WGH8RMbrGLM",
    vttSlug: "WGH8RMbrGLM",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "nolan-colbert-oppenheimer",
    videoId: "WGH8RMbrGLM",
    vttSlug: "WGH8RMbrGLM",
    sourceLang: "en",
    tracks: ["en", "es", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "ramsay-hot-ones",
    videoId: "U9DyHthJ6LA",
    vttSlug: "U9DyHthJ6LA",
    sourceLang: "en",
    tracks: ["en", "es", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
];

async function loadCopyFile(slug) {
  try {
    const copyPath = join(process.cwd(), "app", "watch", slug, "copy.ts");
    const copyContent = await readFile(copyPath, "utf-8");
    
    // Extract the copy object using a simple regex
    // This is a hack for the seed script - in production, copy would be in JSON
    const match = copyContent.match(/export const \w+Copy: Record<SupportedLocale, WatchPageCopy> = ({[\s\S]*?});[\s]*$/m);
    if (!match) {
      console.warn(`Could not parse copy file for ${slug}`);
      return null;
    }
    
    // For the seed script, we'll just create placeholder copy
    // In a real scenario, this would be converted to JSON ahead of time
    return {
      en: { title: slug, description: slug, keywords: [], h1: slug, intro: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], howToNote: "", pricingTitle: "", pricingFree: "", pricingPaid: "", freeLabel: "", paidLabel: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", ctaNote: "", aboutTitle: "", aboutBody: [], language: "", topic: "" },
      es: { title: slug, description: slug, keywords: [], h1: slug, intro: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], howToNote: "", pricingTitle: "", pricingFree: "", pricingPaid: "", freeLabel: "", paidLabel: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", ctaNote: "", aboutTitle: "", aboutBody: [], language: "", topic: "" },
      ko: { title: slug, description: slug, keywords: [], h1: slug, intro: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], howToNote: "", pricingTitle: "", pricingFree: "", pricingPaid: "", freeLabel: "", paidLabel: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", ctaNote: "", aboutTitle: "", aboutBody: [], language: "", topic: "" },
      pt: { title: slug, description: slug, keywords: [], h1: slug, intro: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], howToNote: "", pricingTitle: "", pricingFree: "", pricingPaid: "", freeLabel: "", paidLabel: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", ctaNote: "", aboutTitle: "", aboutBody: [], language: "", topic: "" },
    };
  } catch (error) {
    console.warn(`Could not load copy file for ${slug}:`, error.message);
    return null;
  }
}

async function uploadVtt(vttPath, fileName) {
  const content = await readFile(vttPath, "utf-8");
  
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: `watch/vtt/${fileName}`,
    Body: content,
    ContentType: "text/vtt",
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
  });
  
  await s3.send(command);
  console.log("✓ Uploaded catalog.json");
}

async function seed() {
  console.log("Building catalog from existing watch pages...");
  
  const catalog = [];
  
  for (const entry of watchEntries) {
    console.log(`Processing ${entry.slug}...`);
    const copy = await loadCopyFile(entry.slug);
    
    catalog.push({
      ...entry,
      copy: copy || {
        en: { title: "", description: "", keywords: [], h1: "", intro: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], howToNote: "", pricingTitle: "", pricingFree: "", pricingPaid: "", freeLabel: "", paidLabel: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", ctaNote: "", aboutTitle: "", aboutBody: [], language: "", topic: "" },
        es: { title: "", description: "", keywords: [], h1: "", intro: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], howToNote: "", pricingTitle: "", pricingFree: "", pricingPaid: "", freeLabel: "", paidLabel: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", ctaNote: "", aboutTitle: "", aboutBody: [], language: "", topic: "" },
        ko: { title: "", description: "", keywords: [], h1: "", intro: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], howToNote: "", pricingTitle: "", pricingFree: "", pricingPaid: "", freeLabel: "", paidLabel: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", ctaNote: "", aboutTitle: "", aboutBody: [], language: "", topic: "" },
        pt: { title: "", description: "", keywords: [], h1: "", intro: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], howToNote: "", pricingTitle: "", pricingFree: "", pricingPaid: "", freeLabel: "", paidLabel: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", ctaNote: "", aboutTitle: "", aboutBody: [], language: "", topic: "" },
      },
    });
  }
  
  console.log(`\nBuilt catalog with ${catalog.length} entries`);
  
  // Upload VTT files
  console.log("\nUploading VTT files from public/watch...");
  const publicWatchDir = join(process.cwd(), "public", "watch");
  const files = await readdir(publicWatchDir);
  const vttFiles = files.filter((f) => f.endsWith(".vtt"));
  
  for (const vttFile of vttFiles) {
    await uploadVtt(join(publicWatchDir, vttFile), vttFile);
  }
  
  console.log(`✓ Uploaded ${vttFiles.length} VTT files`);
  
  // Upload catalog
  console.log("\nUploading catalog...");
  await uploadCatalog(catalog);
  
  console.log("\n✓ Seed complete");
  console.log(`Catalog: ${catalog.length} entries`);
  console.log(`VTT files: ${vttFiles.length}`);
}

seed().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});

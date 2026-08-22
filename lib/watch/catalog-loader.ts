import type { WatchCatalogEntry } from "./catalog";
import { getBundledCatalog } from "./bundled-catalog";
import { getVideo as getBundledVideo, getAllSlugs as getBundledSlugs } from "./index";

// Runtime catalog cache
let catalogCache: WatchCatalogEntry[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 60_000; // 1 minute

/**
 * Load the watch catalog from R2 (if configured) or fall back to bundled catalog.
 * Uses short in-memory cache to avoid repeated fetches.
 */
export async function loadWatchCatalog(): Promise<WatchCatalogEntry[]> {
  const now = Date.now();
  
  // Return cached catalog if still fresh
  if (catalogCache && now - lastFetchTime < CACHE_TTL) {
    return catalogCache;
  }

  // Try to load from R2 if configured
  const watchAssetsBase = process.env.WATCH_ASSETS_BASE;
  const catalogUrl = watchAssetsBase 
    ? `${watchAssetsBase}/catalog.json`
    : process.env.WATCH_CATALOG_URL;

  if (catalogUrl) {
    try {
      const response = await fetch(catalogUrl, {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      });
      
      if (response.ok) {
        const catalog = await response.json() as WatchCatalogEntry[];
        catalogCache = catalog;
        lastFetchTime = now;
        return catalog;
      }
    } catch (error) {
      console.warn("Failed to fetch watch catalog from R2, falling back to bundled:", error);
    }
  }

  // Fall back to bundled catalog
  return getBundledCatalog();
}

/**
 * Get catalog entry by slug (async).
 * Tries R2 first, falls back to bundled catalog.
 */
export async function getCatalogEntry(slug: string): Promise<WatchCatalogEntry | undefined> {
  const catalog = await loadWatchCatalog();
  return catalog.find(entry => entry.slug === slug);
}

/**
 * Get catalog entry by slug (sync fallback only).
 * Only uses bundled catalog - for use in sync contexts.
 */
export function getCatalogEntrySync(slug: string): WatchCatalogEntry | undefined {
  return getBundledVideo({ slug });
}

/**
 * Get all slugs from catalog (async).
 */
export async function getAllCatalogSlugs(): Promise<string[]> {
  const catalog = await loadWatchCatalog();
  return catalog.map(entry => entry.slug);
}

/**
 * Get all slugs from bundled catalog (sync).
 */
export function getAllCatalogSlugsSync(): string[] {
  return getBundledSlugs();
}

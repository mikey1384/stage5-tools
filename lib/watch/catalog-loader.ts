import type { WatchCatalogEntry } from "./types";
import { getBundledCatalog } from "./bundled-catalog";

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
 */
export async function getCatalogEntry(slug: string): Promise<WatchCatalogEntry | null> {
  const catalog = await loadWatchCatalog();
  return catalog.find(entry => entry.slug === slug) || null;
}

/**
 * Get all slugs from catalog (async).
 */
export async function getAllCatalogSlugs(): Promise<string[]> {
  const catalog = await loadWatchCatalog();
  return catalog.map(entry => entry.slug);
}

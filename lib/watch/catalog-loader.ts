import { isLocale, type Locale } from "../locales";
import {
  isCompleteWatchPageCopy,
  type WatchCatalogEntry,
  type WatchPageCopy,
} from "./catalog";
import { getBundledCatalog } from "./bundled-catalog";
import { getVideo as getBundledVideo, getAllSlugs as getBundledSlugs } from "./index";

// Runtime catalog cache
let catalogCache: WatchCatalogEntry[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL = 60_000; // 1 minute

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isCatalogLocale(value: unknown): value is Locale {
  return typeof value === "string" && isLocale(value);
}

function isIsoCalendarDate(value: unknown): value is string {
  if (!isNonEmptyString(value) || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return (
    Number.isFinite(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
  );
}

function normalizeCatalogEntry(value: unknown): WatchCatalogEntry | undefined {
  if (!isRecord(value) || !isRecord(value.copy)) return undefined;
  const copyRecord = value.copy;
  if (!isNonEmptyString(value.slug) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.slug)) {
    return undefined;
  }
  if (!isNonEmptyString(value.videoId) || !/^[A-Za-z0-9_-]{11}$/.test(value.videoId)) {
    return undefined;
  }
  if (!isNonEmptyString(value.vttSlug) || !/^[A-Za-z0-9_-]+$/.test(value.vttSlug)) {
    return undefined;
  }
  if (!isCatalogLocale(value.sourceLang)) return undefined;
  if (
    !isNonEmptyString(value.language) ||
    !isNonEmptyString(value.topic) ||
    !isNonEmptyString(value.showName) ||
    !isIsoCalendarDate(value.datePublished)
  ) {
    return undefined;
  }

  const tracks = Array.isArray(value.tracks)
    ? [...new Set(value.tracks.filter(isCatalogLocale))]
    : [];
  if (tracks.length === 0) return undefined;

  const declaredLocales = Array.isArray(value.supportedLocales)
    ? [...new Set(value.supportedLocales.filter(isCatalogLocale))]
    : [];
  const supportedLocales = declaredLocales.filter((locale) =>
    isCompleteWatchPageCopy(copyRecord[locale]),
  );
  if (!supportedLocales.includes("en")) return undefined;

  const copy = Object.fromEntries(
    supportedLocales.map((locale) => [locale, copyRecord[locale]]),
  ) as Partial<Record<(typeof supportedLocales)[number], WatchPageCopy>> & {
    en: WatchPageCopy;
  };

  return {
    slug: value.slug,
    videoId: value.videoId,
    vttSlug: value.vttSlug,
    sourceLang: value.sourceLang,
    tracks,
    supportedLocales,
    language: value.language,
    topic: value.topic,
    showName: value.showName,
    datePublished: value.datePublished,
    ...(Array.isArray(value.structuredDataAbout)
      ? {
          structuredDataAbout: value.structuredDataAbout.filter(isRecord),
        }
      : {}),
    copy,
  };
}

export function parseWatchCatalog(value: unknown): WatchCatalogEntry[] {
  if (!Array.isArray(value)) {
    throw new Error("Watch catalog must be an array");
  }

  const entries: WatchCatalogEntry[] = [];
  const seenSlugs = new Set<string>();
  for (const candidate of value) {
    const entry = normalizeCatalogEntry(candidate);
    if (!entry || seenSlugs.has(entry.slug)) continue;
    seenSlugs.add(entry.slug);
    entries.push(entry);
  }

  if (entries.length === 0) {
    throw new Error("Watch catalog contains no valid entries");
  }
  if (entries.length !== value.length) {
    console.warn(
      `Ignored ${value.length - entries.length} invalid or duplicate watch catalog entries`,
    );
  }
  return entries;
}

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
        const catalog = parseWatchCatalog(await response.json());
        catalogCache = catalog;
        lastFetchTime = now;
        return catalog;
      }
      console.warn(
        `Watch catalog request failed with HTTP ${response.status}; using bundled fallback`,
      );
    } catch (error) {
      console.warn("Failed to refresh watch catalog from R2:", error);
    }

    if (catalogCache) {
      console.warn("Using stale watch catalog after R2 refresh failure");
      return catalogCache;
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

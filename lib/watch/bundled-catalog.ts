import { getAllVideos } from "./index";
import type { WatchCatalogEntry } from "./catalog";

/**
 * Bundled catalog fallback - uses the existing catalog system.
 * This is the fallback when R2 is not configured or fetch fails.
 */
export function getBundledCatalog(): WatchCatalogEntry[] {
  return getAllVideos();
}

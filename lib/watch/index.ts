import { initializeCatalog } from "./catalog-data";

initializeCatalog();

export { getVideo, getAllVideos, getAllSlugs, getPostCards } from "./catalog";
export type { WatchCatalogEntry, WatchPageCopy, PostCard, WatchLocale, TrackLang } from "./catalog";

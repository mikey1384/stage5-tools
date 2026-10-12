"use client";

import { trackWatchAppCta } from "../lib/analytics";
import { createWatchAppCtaEvent, resolveWatchSelectedLanguage } from "../lib/analytics-events";
import type { WorkshopLocale } from "../lib/watch/workshop-copy";
import styles from "./WatchCaptionWorkshop.module.css";

export function WatchWorkshopDownloadLink({ locale, label }: { locale: WorkshopLocale; label: string }) {
  return <a className={styles.button} href={`https://translator.tools/${locale === "en" ? "" : locale}#all-downloads`} onClick={() => {
    trackWatchAppCta(createWatchAppCtaEvent({
      pagePath: window.location.pathname,
      slug: "tom-hanks-smartless",
      videoId: "SgD4kKQ6xGM",
      locale,
      sourceLang: "en",
      selectedLang: resolveWatchSelectedLanguage(new URLSearchParams(window.location.search).get("lang"), "off"),
      placement: "body",
    }));
  }}>{label}</a>;
}

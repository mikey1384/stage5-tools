"use client";

import { AllDownloadButtons } from "./AllDownloadButtons";
import type { Locale } from "../lib/strings";
import type { WatchAppCtaPlacement } from "../lib/analytics-events";

interface WatchContext {
  slug: string;
  videoId: string;
  locale: string;
  sourceLang: string;
  selectedLang: string;
  placement: WatchAppCtaPlacement;
}

interface FeatureDownloadCtaProps {
  locale: Locale;
  note?: string;
  align?: "start" | "center";
  className?: string;
  watchContext?: WatchContext;
}

export function FeatureDownloadCta({
  locale,
  note,
  align = "start",
  className = "",
  watchContext,
}: FeatureDownloadCtaProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "rounded-[28px] border border-white/10 bg-black/30 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-sm md:p-5",
        isCentered ? "mx-auto max-w-5xl" : "max-w-5xl",
        className,
      ].join(" ")}
    >
      <AllDownloadButtons
        locale={locale}
        className={isCentered ? "justify-center" : "justify-start"}
        watchContext={watchContext}
      />
      {note ? (
        <p
          className={[
            "mt-4 text-sm text-gray-500",
            isCentered ? "text-center" : "text-left",
          ].join(" ")}
        >
          {note}
        </p>
      ) : null}
    </div>
  );
}

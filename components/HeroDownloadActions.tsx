"use client";

import Link from "next/link";
import { usePlatformDetection } from "../hooks/usePlatformDetection";
import { t, Locale } from "../lib/strings";
import { DownloadButton } from "./DownloadButton";

interface HeroDownloadActionsProps {
  locale: Locale;
  className?: string;
}

export function HeroDownloadActions({
  locale,
  className = "",
}: HeroDownloadActionsProps) {
  const { platform, architecture } = usePlatformDetection();
  const hasDetectedPlatform = platform !== "unknown";

  const recommendedPlatform = platform === "windows" ? "win" : "mac";
  const recommendedArchitecture =
    recommendedPlatform === "win"
      ? "x64"
      : architecture === "arm64"
        ? "arm64"
        : "x64";

  const label =
    recommendedPlatform === "win"
      ? t("downloadWindows", locale)
      : `${t("download", locale)} (${recommendedArchitecture === "x64" ? "Intel" : "Apple Silicon"})`;

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span className="text-xs uppercase tracking-widest text-gray-500">
        {hasDetectedPlatform
          ? t("homeDownloadRecommended", locale)
          : t("homeDownloadChoose", locale)}
      </span>
      {hasDetectedPlatform ? (
        <>
          <DownloadButton
            label={label}
            platform={recommendedPlatform}
            architecture={recommendedArchitecture}
            trackingLabel="Hero CTA"
            variant="primary"
            size="normal"
          />
          <Link
            href="#all-downloads"
            className="text-sm font-semibold text-gray-300 transition hover:text-white"
          >
            {t("homeDownloadAllVersions", locale)}
          </Link>
        </>
      ) : (
        <Link
          href="#all-downloads"
          className="inline-flex items-center px-8 py-4 text-lg font-medium text-black bg-white hover:bg-gray-100 rounded-2xl transition-all duration-300"
        >
          {t("homeDownloadAllVersions", locale)}
        </Link>
      )}
    </div>
  );
}

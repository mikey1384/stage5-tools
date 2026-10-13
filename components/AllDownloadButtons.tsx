"use client";

import { DownloadButton } from "./DownloadButton";
import { MobileDownloadPanel } from "./MobileDownloadPanel";
import { useIsPhoneOrTablet } from "../hooks/useIsPhoneOrTablet";
import { usePlatformDetection } from "../hooks/usePlatformDetection";
import { t, type Locale } from "../lib/interface-strings";
import type { WatchAppCtaPlacement } from "../lib/analytics-events";

interface WatchContext {
  slug: string;
  videoId: string;
  locale: string;
  sourceLang: string;
  selectedLang: string;
  placement: WatchAppCtaPlacement;
}

interface AllDownloadButtonsProps {
  locale: Locale;
  className?: string;
  surface?: "dark" | "light";
  watchContext?: WatchContext;
}

export function AllDownloadButtons({
  locale,
  className = "",
  surface = "dark",
  watchContext,
}: AllDownloadButtonsProps) {
  const { platform } = usePlatformDetection();
  const isPhoneOrTablet = useIsPhoneOrTablet();

  // Determine which button should be primary based on user's platform
  const isMacUser = platform === "mac";
  const isWindowsUser = platform === "windows";

  if (isPhoneOrTablet) {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <MobileDownloadPanel
          locale={locale}
          placement="all_versions"
          surface={surface}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 sm:flex-row ${className}`}
    >
      {/* Mac Downloads */}
      <DownloadButton
        label={`${t("download", locale)} (Apple Silicon)`}
        platform="mac"
        architecture="arm64"
        trackingLabel="All Versions - Mac ARM64"
        variant={isMacUser ? "primary" : "secondary"}
        size={isMacUser ? "normal" : "small"}
        surface={surface}
        badge={isMacUser ? t("homeDownloadRecommended", locale) : undefined}
        watchContext={watchContext}
      />
      <DownloadButton
        label={`${t("download", locale)} (Intel)`}
        platform="mac"
        architecture="x64"
        trackingLabel="All Versions - Mac x64"
        variant="secondary"
        size="small"
        surface={surface}
        watchContext={watchContext}
      />
      
      {/* Windows Download */}
      <DownloadButton
        label={t("downloadWindows", locale)}
        platform="win"
        architecture="x64"
        trackingLabel="All Versions - Windows x64"
        variant={isWindowsUser ? "primary" : "secondary"}
        size={isWindowsUser ? "normal" : "small"}
        surface={surface}
        badge={isWindowsUser ? t("homeDownloadRecommended", locale) : undefined}
        watchContext={watchContext}
      />
    </div>
  );
}

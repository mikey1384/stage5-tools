"use client";

import Link from "next/link";
import { useIsPhoneOrTablet } from "../hooks/useIsPhoneOrTablet";
import { usePlatformDetection } from "../hooks/usePlatformDetection";
import { t, type Locale } from "../lib/interface-strings";
import { DownloadButton } from "./DownloadButton";
import { MobileDownloadPanel } from "./MobileDownloadPanel";
import { WindowsInstallHelp } from "./WindowsInstallHelp";

interface HeroDownloadActionsProps {
  locale: Locale;
  className?: string;
  /** link_label sent with the download click; distinguishes CTA surfaces. */
  trackingLabel?: string;
}

export function HeroDownloadActions({
  locale,
  className = "",
  trackingLabel = "Hero CTA",
}: HeroDownloadActionsProps) {
  const { platform, architecture } = usePlatformDetection();
  const isPhoneOrTablet = useIsPhoneOrTablet();
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

  if (isPhoneOrTablet) {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <MobileDownloadPanel locale={locale} placement="hero_download" />
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span className="text-xs uppercase tracking-widest text-[#8C8796]">
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
            trackingLabel={trackingLabel}
            variant="primary"
            size="normal"
            className="max-w-full text-center"
          />
          <Link
            href="#all-downloads"
            className="text-sm font-semibold text-[#B7B2BF] transition hover:text-[#F4F1EA]"
          >
            {t("homeDownloadAllVersions", locale)}
          </Link>
          {platform === "windows" ? (
            <WindowsInstallHelp locale={locale} />
          ) : null}
        </>
      ) : (
        <Link
          href="#all-downloads"
          className="inline-flex max-w-full items-center px-8 py-4 text-center text-lg font-semibold text-[#17140A] bg-[#FFD84D] hover:bg-[#FFE680] rounded-full transition-all duration-300"
        >
          {t("homeDownloadAllVersions", locale)}
        </Link>
      )}
    </div>
  );
}

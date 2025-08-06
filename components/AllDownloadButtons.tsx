"use client";

import { DownloadButton } from "./DownloadButton";
import { usePlatformDetection } from "../hooks/usePlatformDetection";
import { t } from "../lib/strings";

interface AllDownloadButtonsProps {
  locale: "en" | "ko";
  className?: string;
}

export function AllDownloadButtons({
  locale,
  className = "",
}: AllDownloadButtonsProps) {
  const { platform } = usePlatformDetection();

  // Determine which button should be primary based on user's platform
  const isMacUser = platform === "mac";
  const isWindowsUser = platform === "windows";

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}
    >
      {/* Mac Downloads */}
      <DownloadButton
        label={`${t("download", locale)} (Apple Silicon)`}
        platform="mac"
        architecture="arm64"
        variant={isMacUser ? "primary" : "secondary"}
        size={isMacUser ? "normal" : "small"}
      />
      <DownloadButton
        label={`${t("download", locale)} (Intel)`}
        platform="mac"
        architecture="x64"
        variant="secondary"
        size="small"
      />
      
      {/* Windows Download */}
      <DownloadButton
        label={t("downloadWindows", locale)}
        platform="win"
        architecture="x64"
        variant={isWindowsUser ? "primary" : "secondary"}
        size={isWindowsUser ? "normal" : "small"}
      />
    </div>
  );
} 
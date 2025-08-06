"use client";

import { DownloadButton } from "./DownloadButton";
import { usePlatformDetection } from "../hooks/usePlatformDetection";
import { t } from "../lib/strings";

interface SmartDownloadButtonsProps {
  locale: "en" | "ko";
  className?: string;
}

export function SmartDownloadButtons({
  locale,
  className = "",
}: SmartDownloadButtonsProps) {
  const { platform } = usePlatformDetection();

  const showWindows = platform === "windows" || platform === "unknown";
  const showMac = platform === "mac" || platform === "unknown";

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}
    >
      {showMac && (
        <>
          <DownloadButton
            label={`${t("download", locale)} (Apple Silicon)`}
            platform="mac"
            architecture="arm64"
            variant="primary"
          />
          <DownloadButton
            label={`${t("download", locale)} (Intel)`}
            platform="mac"
            architecture="x64"
            variant="secondary"
          />
        </>
      )}

      {showWindows && (
        <>
          <DownloadButton
            label={`${t("downloadWindows", locale)} (x64)`}
            platform="windows"
            architecture="x64"
            variant={showMac ? "secondary" : "primary"}
          />
          <DownloadButton
            label={`${t("downloadWindows", locale)} (ARM64)`}
            platform="windows"
            architecture="arm64"
            variant="secondary"
          />
        </>
      )}
    </div>
  );
}

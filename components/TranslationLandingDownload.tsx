"use client";

import { useState } from "react";
import { useIsPhoneOrTablet } from "../hooks/useIsPhoneOrTablet";
import { usePlatformDetection } from "../hooks/usePlatformDetection";
import { DownloadButton } from "./DownloadButton";
import { MobileDownloadPanel } from "./MobileDownloadPanel";

import { translationLandingUI, type TranslationLandingLocale } from "../lib/translation-landing-ui";

const installers = {
  "mac-arm64": { platform: "mac", architecture: "arm64", name: "Mac (Apple Silicon)" },
  "mac-x64": { platform: "mac", architecture: "x64", name: "Mac (Intel)" },
  "win-x64": { platform: "win", architecture: "x64", name: "Windows" },
} as const;

type Installer = keyof typeof installers;

export function TranslationLandingDownload({ locale, trackingLabel }: { locale: TranslationLandingLocale; trackingLabel: string }) {
  const ui = translationLandingUI[locale];
  const { platform, architecture } = usePlatformDetection();
  const isPhoneOrTablet = useIsPhoneOrTablet();
  const [selection, setSelection] = useState<Installer | null>(null);
  const detected = platform === "windows"
    ? "win-x64"
    : architecture === "arm64" ? "mac-arm64" : "mac-x64";
  const selected = selection ?? detected;
  const installer = installers[selected];

  if (isPhoneOrTablet) {
    return <MobileDownloadPanel locale={locale} placement="hero_download" />;
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <label htmlFor="translation-installer" className="text-sm font-semibold text-[#D9D5CE]">
        {ui.chooseComputer}
      </label>
      <select
        id="translation-installer"
        value={selected}
        onChange={(event) => setSelection(event.target.value as Installer)}
        className="w-full rounded-xl border border-[#4A4553] bg-[#15131A] px-4 py-3 text-base text-[#F4F1EA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD84D]"
      >
        {Object.entries(installers).map(([key, value]) => (
          <option key={key} value={key}>{value.name}</option>
        ))}
      </select>
      <DownloadButton
        label={`${ui.downloadFor} ${installer.name}`}
        platform={installer.platform}
        architecture={installer.architecture}
        trackingLabel={trackingLabel}
        className="w-full text-center"
      />
    </div>
  );
}

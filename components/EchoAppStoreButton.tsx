"use client";

import { trackAppStoreClick } from "../lib/analytics";

export const ECHO_APP_STORE_URL =
  "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505";

interface EchoAppStoreButtonProps {
  trackingLabel: string;
  variant?: "primary" | "secondary";
  topLine?: string;
  bottomLine?: string;
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 814 1000"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}

export function EchoAppStoreButton({
  trackingLabel,
  variant = "primary",
  topLine = "Download on the",
  bottomLine = "App Store",
}: EchoAppStoreButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-base font-semibold transition-all duration-300";
  const variantClasses =
    variant === "primary"
      ? "bg-white text-black hover:bg-gray-200"
      : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10";

  return (
    <a
      href={ECHO_APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
      aria-label="Download Echo on the App Store"
      onClick={() =>
        trackAppStoreClick({
          event: "echo_appstore_click",
          link_label: trackingLabel,
          page_path: window.location.pathname,
        })
      }
    >
      <AppleLogo className="h-6 w-6" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[11px] font-medium uppercase tracking-wide opacity-70">
          {topLine}
        </span>
        <span className="text-lg font-semibold">{bottomLine}</span>
      </span>
    </a>
  );
}

"use client";

import type { ReactNode } from "react";
import { trackDownload } from "../lib/analytics";

type TrackedArtifactLinkProps = {
  architecture: "arm64" | "x64";
  children: ReactNode;
  className?: string;
  href: string;
  label: string;
  platform: "macOS" | "Windows";
};

export function TrackedArtifactLink({
  architecture,
  children,
  className,
  href,
  label,
  platform,
}: TrackedArtifactLinkProps) {
  return (
    <a
      href={href}
      className={className}
      data-platform={platform}
      data-architecture={architecture}
      onClick={() =>
        trackDownload({
          event:
            platform === "Windows"
              ? "download_windows_click"
              : "download_mac_click",
          platform: platform === "Windows" ? "windows" : "mac",
          architecture,
          download_url: href,
          link_label: label,
          page_path: window.location.pathname,
        })
      }
    >
      {children}
    </a>
  );
}

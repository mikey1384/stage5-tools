export type DownloadEventPayload = {
  event: "download_mac_click" | "download_windows_click";
  platform: "mac" | "windows";
  architecture: "arm64" | "x64";
  download_url: string;
  link_label: string;
  page_path: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackDownload(payload: DownloadEventPayload): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

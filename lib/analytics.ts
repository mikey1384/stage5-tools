import type {
  FaqIntentEventPayload,
  LandingIntentEventPayload,
  WindowsInstallHelpEventPayload,
} from "./analytics-events";

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

function pushAnalyticsEvent(payload: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackDownload(payload: DownloadEventPayload): void {
  pushAnalyticsEvent(payload);
}

export function trackLandingIntent(payload: LandingIntentEventPayload): void {
  pushAnalyticsEvent(payload);
}

export function trackFaqIntent(payload: FaqIntentEventPayload): void {
  pushAnalyticsEvent(payload);
}

export function trackWindowsInstallHelp(
  payload: WindowsInstallHelpEventPayload,
): void {
  pushAnalyticsEvent(payload);
}

export type AppStoreEventPayload = {
  event: "echo_appstore_click";
  link_label: string;
  page_path: string;
};

export function trackAppStoreClick(payload: AppStoreEventPayload): void {
  pushAnalyticsEvent(payload);
}

export type GitHubEventPayload = {
  event: "github_repository_click";
  link_label: string;
  page_path: string;
  placement: string;
  repository_url: string;
};

export function trackGitHubClick(payload: GitHubEventPayload): void {
  pushAnalyticsEvent(payload);
}

export type CheckoutReturnEventPayload = {
  event: "checkout_return_success" | "checkout_return_cancelled";
  checkout_mode: "credits" | "byo";
  page_path: string;
};

export function trackCheckoutReturn(payload: CheckoutReturnEventPayload): void {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  const opaqueReturnKey =
    url.searchParams.get("return_id") ||
    url.searchParams.get("session_id") ||
    payload.checkout_mode;
  const dedupeKey = `stage5:${payload.event}:${opaqueReturnKey}`;
  try {
    if (window.sessionStorage.getItem(dedupeKey) === "1") return;
    window.sessionStorage.setItem(dedupeKey, "1");
  } catch {
    // Tracking remains best-effort when storage is unavailable.
  }

  pushAnalyticsEvent(payload);
}

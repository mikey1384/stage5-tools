import type {
  AgentWorkflowEventPayload,
  FaqIntentEventPayload,
  LandingIntentEventPayload,
  MobileDownloadEventPayload,
  WatchAppCtaEventPayload,
  WatchCaptionLoadEventPayload,
  WatchCutoffEventPayload,
  WatchLangChangeEventPayload,
  WatchPlayEventPayload,
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
    stage5AnalyticsConsent?: {
      getChoice(): "granted" | "denied" | null;
      canTrack(): boolean;
      choose(choice: "granted" | "denied"): { saved: boolean };
    };
  }
}

function canTrack(): boolean {
  return typeof window !== "undefined" && window.stage5AnalyticsConsent?.canTrack() === true;
}

function pushAnalyticsEvent(payload: Record<string, unknown>): void {
  if (!canTrack()) return;
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

export function trackAgentWorkflow(payload: AgentWorkflowEventPayload): void {
  pushAnalyticsEvent(payload);
}

export function trackWindowsInstallHelp(
  payload: WindowsInstallHelpEventPayload,
): void {
  pushAnalyticsEvent(payload);
}

export function trackMobileDownload(payload: MobileDownloadEventPayload): void {
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
  if (!canTrack()) return;

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

export function trackWatchPlay(payload: WatchPlayEventPayload): void {
  if (!canTrack()) return;

  const dedupeKey = `stage5:watch_play:${payload.slug}`;
  try {
    if (window.sessionStorage.getItem(dedupeKey) === "1") return;
    window.sessionStorage.setItem(dedupeKey, "1");
  } catch {
    // Tracking remains best-effort when storage is unavailable.
  }

  pushAnalyticsEvent(payload);
}

export function trackWatchCutoff(payload: WatchCutoffEventPayload): void {
  if (!canTrack()) return;

  const dedupeKey = `stage5:watch_cutoff:${payload.slug}`;
  try {
    if (window.sessionStorage.getItem(dedupeKey) === "1") return;
    window.sessionStorage.setItem(dedupeKey, "1");
  } catch {
    // Tracking remains best-effort when storage is unavailable.
  }

  pushAnalyticsEvent(payload);
}

export function trackWatchLangChange(
  payload: WatchLangChangeEventPayload,
): void {
  pushAnalyticsEvent(payload);
}

export function trackWatchCaptionLoad(
  payload: WatchCaptionLoadEventPayload,
): void {
  pushAnalyticsEvent(payload);
}

export function trackWatchAppCta(payload: WatchAppCtaEventPayload): void {
  pushAnalyticsEvent(payload);
}

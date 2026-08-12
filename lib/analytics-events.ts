export type LandingIntentDestination = "translate" | "video_downloader" | "faq";

export type LandingIntentEventPayload = {
  event: "landing_intent_click";
  destination: LandingIntentDestination;
  placement: "home_hero";
  page_path: string;
};

export function createHomeLandingIntentEvent(
  destination: LandingIntentDestination,
  pagePath: string,
): LandingIntentEventPayload {
  return {
    event: "landing_intent_click",
    destination,
    placement: "home_hero",
    page_path: pagePath,
  };
}

export type FaqIntentDestination = "translate" | "video_downloader" | "pricing";

export type FaqIntentEventPayload = {
  event: "faq_intent_click";
  destination: FaqIntentDestination;
  placement: "faq_hero";
  page_path: string;
};

export function createFaqIntentEvent(
  destination: FaqIntentDestination,
  pagePath: string,
): FaqIntentEventPayload {
  return {
    event: "faq_intent_click",
    destination,
    placement: "faq_hero",
    page_path: pagePath,
  };
}

export type WindowsInstallHelpEventPayload = {
  event: "windows_install_help_open";
  placement: "hero_download";
  page_path: string;
};

export function createWindowsInstallHelpEvent(
  pagePath: string,
): WindowsInstallHelpEventPayload {
  return {
    event: "windows_install_help_open",
    placement: "hero_download",
    page_path: pagePath,
  };
}

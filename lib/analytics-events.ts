export type LandingIntentDestination =
  | "translate"
  | "video_downloader"
  | "faq";

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

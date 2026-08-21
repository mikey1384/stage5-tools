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

export type AgentWorkflowDestination =
  "translate" | "subtitle_editor" | "dubbing";

export type AgentWorkflowEventPayload = {
  event: "agent_workflow_click";
  destination: AgentWorkflowDestination;
  placement: "agents_hero";
  page_path: string;
};

export function createAgentWorkflowEvent(
  destination: AgentWorkflowDestination,
  pagePath: string,
): AgentWorkflowEventPayload {
  return {
    event: "agent_workflow_click",
    destination,
    placement: "agents_hero",
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

export type WatchPlayEventPayload = {
  event: "watch_play";
  page_path: string;
  slug: string;
  video_id: string;
  locale: string;
  source_lang: string;
  selected_lang: string;
};

export function createWatchPlayEvent({
  pagePath,
  slug,
  videoId,
  locale,
  sourceLang,
  selectedLang,
}: {
  pagePath: string;
  slug: string;
  videoId: string;
  locale: string;
  sourceLang: string;
  selectedLang: string;
}): WatchPlayEventPayload {
  return {
    event: "watch_play",
    page_path: pagePath,
    slug,
    video_id: videoId,
    locale,
    source_lang: sourceLang,
    selected_lang: selectedLang,
  };
}

export type WatchCutoffEventPayload = {
  event: "watch_cutoff";
  page_path: string;
  slug: string;
  video_id: string;
  locale: string;
  source_lang: string;
  selected_lang: string;
};

export function createWatchCutoffEvent({
  pagePath,
  slug,
  videoId,
  locale,
  sourceLang,
  selectedLang,
}: {
  pagePath: string;
  slug: string;
  videoId: string;
  locale: string;
  sourceLang: string;
  selectedLang: string;
}): WatchCutoffEventPayload {
  return {
    event: "watch_cutoff",
    page_path: pagePath,
    slug,
    video_id: videoId,
    locale,
    source_lang: sourceLang,
    selected_lang: selectedLang,
  };
}

export type WatchLangChangeEventPayload = {
  event: "watch_lang_change";
  page_path: string;
  slug: string;
  video_id: string;
  locale: string;
  source_lang: string;
  selected_lang: string;
  from_lang: string;
  to_lang: string;
};

export function createWatchLangChangeEvent({
  pagePath,
  slug,
  videoId,
  locale,
  sourceLang,
  selectedLang,
  fromLang,
  toLang,
}: {
  pagePath: string;
  slug: string;
  videoId: string;
  locale: string;
  sourceLang: string;
  selectedLang: string;
  fromLang: string;
  toLang: string;
}): WatchLangChangeEventPayload {
  return {
    event: "watch_lang_change",
    page_path: pagePath,
    slug,
    video_id: videoId,
    locale,
    source_lang: sourceLang,
    selected_lang: selectedLang,
    from_lang: fromLang,
    to_lang: toLang,
  };
}

export type WatchAppCtaPlacement = "cutoff" | "body" | "footer";

export type WatchAppCtaEventPayload = {
  event: "watch_app_cta";
  page_path: string;
  slug: string;
  video_id: string;
  locale: string;
  source_lang: string;
  selected_lang: string;
  placement: WatchAppCtaPlacement;
};

export function createWatchAppCtaEvent({
  pagePath,
  slug,
  videoId,
  locale,
  sourceLang,
  selectedLang,
  placement,
}: {
  pagePath: string;
  slug: string;
  videoId: string;
  locale: string;
  sourceLang: string;
  selectedLang: string;
  placement: WatchAppCtaPlacement;
}): WatchAppCtaEventPayload {
  return {
    event: "watch_app_cta",
    page_path: pagePath,
    slug,
    video_id: videoId,
    locale,
    source_lang: sourceLang,
    selected_lang: selectedLang,
    placement,
  };
}

import assert from "node:assert/strict";
import test from "node:test";

import {
  createAgentWorkflowEvent,
  createFaqIntentEvent,
  createHomeLandingIntentEvent,
  createWatchAppCtaEvent,
  createWatchCaptionLoadEvent,
  createWatchCutoffEvent,
  createWatchLangChangeEvent,
  createWatchPlayEvent,
  resolveWatchSelectedLanguage,
  createWindowsInstallHelpEvent,
} from "../lib/analytics-events.ts";

test("creates the bounded agent-workflow payload", () => {
  assert.deepEqual(createAgentWorkflowEvent("subtitle_editor", "/agents"), {
    event: "agent_workflow_click",
    destination: "subtitle_editor",
    placement: "agents_hero",
    page_path: "/agents",
  });
});

test("creates the bounded homepage intent payload", () => {
  assert.deepEqual(createHomeLandingIntentEvent("translate", "/ko"), {
    event: "landing_intent_click",
    destination: "translate",
    placement: "home_hero",
    page_path: "/ko",
  });
});

test("creates the bounded FAQ intent payload", () => {
  assert.deepEqual(createFaqIntentEvent("video_downloader", "/zh/faq"), {
    event: "faq_intent_click",
    destination: "video_downloader",
    placement: "faq_hero",
    page_path: "/zh/faq",
  });
});

test("creates the bounded Windows install-help payload", () => {
  assert.deepEqual(createWindowsInstallHelpEvent("/"), {
    event: "windows_install_help_open",
    placement: "hero_download",
    page_path: "/",
  });
});

test("creates the bounded watch play payload", () => {
  assert.deepEqual(
    createWatchPlayEvent({
      pagePath: "/watch/ferran-adria-wild-project",
      slug: "ferran-adria-wild-project",
      videoId: "xzSOmaZGtiI",
      locale: "en",
      sourceLang: "es",
      selectedLang: "en",
    }),
    {
      event: "watch_play",
      page_path: "/watch/ferran-adria-wild-project",
      slug: "ferran-adria-wild-project",
      video_id: "xzSOmaZGtiI",
      locale: "en",
      source_lang: "es",
      selected_lang: "en",
    }
  );
});

test("creates the bounded watch cutoff payload", () => {
  assert.deepEqual(
    createWatchCutoffEvent({
      pagePath: "/watch/pique-la-resistencia",
      slug: "pique-la-resistencia",
      videoId: "AcGwBcHPMPQ",
      locale: "es",
      sourceLang: "es",
      selectedLang: "off",
    }),
    {
      event: "watch_cutoff",
      page_path: "/watch/pique-la-resistencia",
      slug: "pique-la-resistencia",
      video_id: "AcGwBcHPMPQ",
      locale: "es",
      source_lang: "es",
      selected_lang: "off",
    }
  );
});

test("creates the bounded watch language change payload", () => {
  assert.deepEqual(
    createWatchLangChangeEvent({
      pagePath: "/watch/park-chan-wook-lee-dong-jin",
      slug: "park-chan-wook-lee-dong-jin",
      videoId: "CjVz6F62T4w",
      locale: "ko",
      sourceLang: "ko",
      selectedLang: "en",
      fromLang: "ko",
      toLang: "en",
    }),
    {
      event: "watch_lang_change",
      page_path: "/watch/park-chan-wook-lee-dong-jin",
      slug: "park-chan-wook-lee-dong-jin",
      video_id: "CjVz6F62T4w",
      locale: "ko",
      source_lang: "ko",
      selected_lang: "en",
      from_lang: "ko",
      to_lang: "en",
    }
  );
});

test("creates the bounded watch app CTA payload", () => {
  assert.deepEqual(
    createWatchAppCtaEvent({
      pagePath: "/watch/kore-eda-piarchia",
      slug: "kore-eda-piarchia",
      videoId: "j29oHrGMmtY",
      locale: "en",
      sourceLang: "ko",
      selectedLang: "en",
      placement: "cutoff",
    }),
    {
      event: "watch_app_cta",
      page_path: "/watch/kore-eda-piarchia",
      slug: "kore-eda-piarchia",
      video_id: "j29oHrGMmtY",
      locale: "en",
      source_lang: "ko",
      selected_lang: "en",
      placement: "cutoff",
    }
  );
});

test("creates the bounded watch caption-load payload", () => {
  assert.deepEqual(
    createWatchCaptionLoadEvent({
      pagePath: "/vi/watch/ramsay-hot-ones",
      slug: "ramsay-hot-ones",
      videoId: "U9DyHthJ6LA",
      locale: "vi",
      sourceLang: "en",
      selectedLang: "vi",
      loadStatus: "http_error",
      httpStatus: 404,
    }),
    {
      event: "watch_caption_load",
      page_path: "/vi/watch/ramsay-hot-ones",
      slug: "ramsay-hot-ones",
      video_id: "U9DyHthJ6LA",
      locale: "vi",
      source_lang: "en",
      selected_lang: "vi",
      load_status: "http_error",
      http_status: 404,
    },
  );
});

test("uses only a bounded current Watch caption language for CTA telemetry", () => {
  assert.equal(resolveWatchSelectedLanguage("vi", "en"), "vi");
  assert.equal(resolveWatchSelectedLanguage("off", "en"), "off");
  assert.equal(
    resolveWatchSelectedLanguage("caption text or an arbitrary value", "ko"),
    "ko",
  );
  assert.equal(resolveWatchSelectedLanguage(null, "pt"), "pt");
});

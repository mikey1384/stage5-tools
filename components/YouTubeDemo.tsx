"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FeatureDownloadCta } from "./FeatureDownloadCta";
import type { Locale } from "../lib/locales";
import type { TrackLang } from "../lib/watch";
import {
  createWatchCaptionLoadEvent,
  createWatchCutoffEvent,
  createWatchLangChangeEvent,
  createWatchPlayEvent,
} from "../lib/analytics-events";
import {
  trackWatchCaptionLoad,
  trackWatchCutoff,
  trackWatchLangChange,
  trackWatchPlay,
} from "../lib/analytics";
import {
  getWatchUiCopy,
  WATCH_LANGUAGE_LABELS,
} from "../lib/watch/ui-copy";

declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string;
          playerVars?: {
            rel?: number;
            modestbranding?: number;
          };
          events?: {
            onReady?: (event: { target: YouTubePlayer }) => void;
            onStateChange?: (event: { data: number; target: YouTubePlayer }) => void;
          };
        }
      ) => YouTubePlayer;
      PlayerState: {
        PLAYING: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  getCurrentTime: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
}

interface Caption {
  start: number;
  end: number;
  text: string;
}

const CUTOFF_TIME = 30;

interface YouTubeDemoProps {
  locale: Locale;
  slug: string;
  videoId: string;
  sourceLang: TrackLang;
  availableTracks: TrackLang[];
  initialSelectedLang: TrackLang | "off";
  videoDownloaderHref: string;
  vttSlug?: string;
}

export function YouTubeDemo({
  locale,
  slug,
  videoId,
  sourceLang,
  availableTracks,
  initialSelectedLang,
  videoDownloaderHref,
  vttSlug,
}: YouTubeDemoProps) {
  const uiCopy = getWatchUiCopy(locale);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const showOverlayRef = useRef(false);
  const captionsRef = useRef<Caption[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentCaption, setCurrentCaption] = useState<string>("");

  const [selectedLang, setSelectedLang] =
    useState<TrackLang | "off">(initialSelectedLang);
  const selectedLangRef = useRef<TrackLang | "off">(selectedLang);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    selectedLangRef.current = selectedLang;
  }, [selectedLang]);

  useEffect(() => {
    if (selectedLang === "off") {
      captionsRef.current = [];
      setCurrentCaption("");
      return;
    }

    const controller = new AbortController();
    let isCurrentRequest = true;

    const loadCaptions = async () => {
      captionsRef.current = [];
      try {
        const vttPath = vttSlug || slug;
        const response = await fetch(
          `/api/watch-vtt/${vttPath}.${selectedLang}.30s.vtt`,
          { signal: controller.signal },
        );
        if (!isCurrentRequest) return;
        if (response.ok) {
          const vttText = await response.text();
          if (!isCurrentRequest) return;
          const parsed = parseVTT(vttText);
          captionsRef.current = parsed;
          trackWatchCaptionLoad(
            createWatchCaptionLoadEvent({
              pagePath: window.location.pathname,
              slug,
              videoId,
              locale,
              sourceLang,
              selectedLang,
              loadStatus: parsed.length > 0 ? "success" : "empty",
              httpStatus: response.status,
            }),
          );
          if (playerRef.current) {
            startTimeCheck();
          }
        } else {
          trackWatchCaptionLoad(
            createWatchCaptionLoadEvent({
              pagePath: window.location.pathname,
              slug,
              videoId,
              locale,
              sourceLang,
              selectedLang,
              loadStatus: "http_error",
              httpStatus: response.status,
            }),
          );
        }
      } catch {
        if (!isCurrentRequest || controller.signal.aborted) return;
        trackWatchCaptionLoad(
          createWatchCaptionLoadEvent({
            pagePath: window.location.pathname,
            slug,
            videoId,
            locale,
            sourceLang,
            selectedLang,
            loadStatus: "network_error",
          }),
        );
      }
    };

    void loadCaptions();
    return () => {
      isCurrentRequest = false;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, selectedLang, slug, sourceLang, videoId, vttSlug]);

  useEffect(() => {
    const previousReadyHandler = window.onYouTubeIframeAPIReady;
    let installedReadyHandler:
      | (() => void)
      | undefined;

    if (typeof window.YT !== "undefined") {
      initPlayer();
    } else {
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "youtube-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      installedReadyHandler = () => {
        previousReadyHandler?.();
        initPlayer();
      };
      window.onYouTubeIframeAPIReady = installedReadyHandler;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      if (
        installedReadyHandler &&
        window.onYouTubeIframeAPIReady === installedReadyHandler
      ) {
        window.onYouTubeIframeAPIReady = previousReadyHandler;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const parseVTT = (vtt: string): Caption[] => {
    const lines = vtt.split("\n");
    const parsedCaptions: Caption[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      if (line.includes("-->")) {
        const [startStr, endStr] = line.split("-->").map((s) => s.trim());
        const start = parseTimestamp(startStr);
        const end = parseTimestamp(endStr);

        i++;
        let text = "";
        while (i < lines.length && lines[i].trim() !== "") {
          text += (text ? " " : "") + lines[i].trim();
          i++;
        }

        if (text && start < CUTOFF_TIME) {
          parsedCaptions.push({ start, end, text });
        }
      }
      i++;
    }

    return parsedCaptions;
  };

  const parseTimestamp = (timestamp: string): number => {
    const parts = timestamp.split(":");
    if (parts.length === 3) {
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      const seconds = parseFloat(parts[2].replace(",", "."));
      return hours * 3600 + minutes * 60 + seconds;
    }
    return 0;
  };

  const initPlayer = () => {
    if (!window.YT || playerRef.current) return;

    playerRef.current = new window.YT.Player(`youtube-player-${slug}`, {
      videoId,
      playerVars: {
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onReady: () => {
          startTimeCheck();
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            startTimeCheck();
            if (!hasPlayedRef.current) {
              hasPlayedRef.current = true;
              const pagePath = typeof window !== "undefined" ? window.location.pathname : "";
              trackWatchPlay(
                createWatchPlayEvent({
                  pagePath,
                  slug,
                  videoId,
                  locale,
                  sourceLang,
                  selectedLang: selectedLangRef.current,
                })
              );
            }
          }
        },
      },
    });
  };

  const startTimeCheck = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!playerRef.current) return;

      const currentTime = playerRef.current.getCurrentTime();

      if (captionsRef.current.length > 0 && selectedLangRef.current !== "off") {
        const caption = captionsRef.current.find(
          (c) => currentTime >= c.start && currentTime <= c.end
        );
        setCurrentCaption(caption ? caption.text : "");
      } else {
        setCurrentCaption("");
      }

      if (currentTime >= CUTOFF_TIME && !showOverlayRef.current) {
        playerRef.current.pauseVideo();
        showOverlayRef.current = true;
        setShowOverlay(true);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        const pagePath = typeof window !== "undefined" ? window.location.pathname : "";
        trackWatchCutoff(
          createWatchCutoffEvent({
            pagePath,
            slug,
            videoId,
            locale,
            sourceLang,
            selectedLang: selectedLangRef.current,
          })
        );
      }
    }, 100);
  };

  const handleReplay = () => {
    if (playerRef.current) {
      showOverlayRef.current = false;
      setShowOverlay(false);
      setCurrentCaption("");
      playerRef.current.seekTo(0, true);
      playerRef.current.playVideo();
      startTimeCheck();
    }
  };

  const handleDismiss = () => {
    showOverlayRef.current = false;
    setShowOverlay(false);
  };

  const handleLanguageChange = (lang: TrackLang | "off") => {
    const fromLang = selectedLang;
    selectedLangRef.current = lang;
    setSelectedLang(lang);
    setCurrentCaption("");
    const url = new URL(window.location.href);
    if (lang === "off") {
      url.searchParams.set("lang", "off");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState({}, "", url.toString());
    
    if (fromLang !== lang) {
      const pagePath = typeof window !== "undefined" ? window.location.pathname : "";
      trackWatchLangChange(
        createWatchLangChangeEvent({
          pagePath,
          slug,
          videoId,
          locale,
          sourceLang,
          selectedLang: lang === "off" ? "off" : lang,
          fromLang: fromLang === "off" ? "off" : fromLang,
          toLang: lang === "off" ? "off" : lang,
        })
      );
    }
  };

  const allLanguageOptions: Array<TrackLang | "off"> = [
    ...availableTracks,
    "off",
  ];

  return (
    <div ref={containerRef} className="relative">
      <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
        <div id={`youtube-player-${slug}`} className="h-full w-full" />

        <div
          aria-label={uiCopy.captionLanguageLabel}
          className="pointer-events-auto absolute right-4 top-4 flex gap-1 rounded-lg bg-black/80 p-1 shadow-lg"
        >
          {allLanguageOptions.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`rounded px-3 py-1 text-sm font-medium transition ${
                selectedLang === lang
                  ? "bg-white/20 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {lang === "off" ? uiCopy.off : WATCH_LANGUAGE_LABELS[lang]}
            </button>
          ))}
        </div>

        {currentCaption && !showOverlay && selectedLang !== "off" && (
          <div className="pointer-events-none absolute bottom-8 left-0 right-0 flex justify-center px-4">
            <div className="rounded-lg bg-black/90 px-3 py-1.5 text-center text-sm font-medium text-white shadow-lg sm:px-4 sm:py-2 sm:text-base">
              {currentCaption}
            </div>
          </div>
        )}

        {showOverlay && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="mx-4 max-w-2xl rounded-2xl border border-white/10 bg-black/90 p-8 text-center">
              <h3 className="text-2xl font-semibold text-white">
                {uiCopy.firstThirtySeconds}
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                {uiCopy.restInTranslator}
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <FeatureDownloadCta
                  locale={locale}
                  note={uiCopy.playerDownloadNote}
                  align="center"
                  watchContext={{
                    slug,
                    videoId,
                    locale,
                    sourceLang,
                    selectedLang: selectedLang === "off" ? "off" : selectedLang,
                    placement: "cutoff",
                  }}
                />
                <Link
                  href={videoDownloaderHref}
                  className="inline-flex items-center justify-center rounded-xl border border-sky-500/50 bg-sky-500/10 px-6 py-3 text-base font-semibold text-sky-200 transition hover:border-sky-400 hover:bg-sky-500/20"
                >
                  {uiCopy.learnVideoDownloading}
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 border-t border-white/10 pt-6 text-sm">
                <button
                  onClick={handleReplay}
                  className="text-gray-400 transition hover:text-white"
                >
                  {uiCopy.replay}
                </button>
                <span className="text-gray-700">·</span>
                <button
                  onClick={handleDismiss}
                  className="text-gray-400 transition hover:text-white"
                >
                  {uiCopy.dismiss}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

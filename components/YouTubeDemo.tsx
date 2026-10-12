"use client";

import { getWatchExperienceCopy } from "../lib/watch/experience-copy";
import { getVideoChoiceCopy } from "../lib/watch/video-choice-copy";
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
          host?: string;
          playerVars?: {
            rel?: number;
            origin?: string;
          };
          events?: {
            onError?: () => void;
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
  playerOrigin: string;
  slug: string;
  videoId: string;
  sourceLang: TrackLang;
  availableTracks: TrackLang[];
  initialSelectedLang: TrackLang | "off";
  videoDownloaderHref: string;
  vttSlug?: string;
}

export function YouTubeDemo(props: YouTubeDemoProps) {
  return <YouTubeChoice key={`${props.locale}:${props.slug}:${props.videoId}`} {...props} />;
}

function YouTubeChoice(props: YouTubeDemoProps) {
  const [connected, setConnected] = useState(false);
  const choice = getVideoChoiceCopy(props.locale);

  return (
    <section data-youtube-choice="required" data-player-origin={props.playerOrigin}>
      {connected ? (
        <>
          <YouTubePlayerPreview {...props} />
          <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
            <button type="button" onClick={() => window.location.reload()}
              className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10">
              {choice.disconnect}
            </button>
            <p className="text-xs leading-relaxed text-gray-400">{choice.withdrawal}</p>
          </div>
        </>
      ) : (
        <div className="flex min-h-[240px] flex-col justify-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
          <p className="text-xs tracking-widest text-sky-200">YouTube</p>
          <h3 className="text-xl font-semibold text-white">{choice.title}</h3>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-300">{choice.body}</p>
          <a className="w-fit text-sm text-sky-200 underline underline-offset-4"
            href={`https://policies.google.com/privacy?hl=${props.locale}`} target="_blank" rel="noopener noreferrer">
            {choice.privacy}
          </a>
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => setConnected(true)}
              className="rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-500">
              {choice.load}
            </button>
            <a className="text-sm text-sky-200 underline underline-offset-4"
              href={`https://www.youtube.com/watch?v=${props.videoId}`} target="_blank" rel="noopener noreferrer">
              {choice.source}
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

function YouTubePlayerPreview({
  locale,
  playerOrigin,
  slug,
  videoId,
  sourceLang,
  availableTracks,
  initialSelectedLang,
  videoDownloaderHref,
  vttSlug,
}: YouTubeDemoProps) {
  const uiCopy = getWatchUiCopy(locale);
  const experience = getWatchExperienceCopy(locale);
  const [playerError, setPlayerError] = useState(false);
  const [captionError, setCaptionError] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);
  const playerReadyRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const showOverlayRef = useRef(false);
  const replayPendingRef = useRef(false);
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
    setCaptionError(false);
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
          { signal: AbortSignal.any([controller.signal, AbortSignal.timeout(10_000)]) },
        );
        if (!isCurrentRequest) return;
        if (response.ok) {
          const vttText = await response.text();
          if (!isCurrentRequest) return;
          const parsed = parseVTT(vttText);
          captionsRef.current = parsed;
          setCaptionError(parsed.length === 0);
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
          setCaptionError(true);
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
        setCaptionError(true);
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
        tag.onerror = () => setPlayerError(true);
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
      playerReadyRef.current = false;
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
      host: "https://www.youtube-nocookie.com",
      playerVars: {
        rel: 0,
        origin: window.location.origin,
      },
      events: {
        onError: () => setPlayerError(true),
        onReady: (event) => {
          if (event.target !== playerRef.current) return;
          playerReadyRef.current = true;
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
    if (!playerReadyRef.current) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!playerReadyRef.current || !playerRef.current) return;

      const currentTime = playerRef.current.getCurrentTime();

      // seekTo is asynchronous. Ignore the previous endpoint until the player
      // reports that replay has actually moved back into the preview.
      if (replayPendingRef.current) {
        if (currentTime >= CUTOFF_TIME) return;
        replayPendingRef.current = false;
      }

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
      replayPendingRef.current = true;
      showOverlayRef.current = false;
      setShowOverlay(false);
      setCurrentCaption("");
      playerRef.current.seekTo(0, true);
      playerRef.current.playVideo();
      startTimeCheck();
    }
  };

  const handleDismiss = () => {
    // Keep the preview-completed marker so resuming the source is not blocked again.
    showOverlayRef.current = true;
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
    <div ref={containerRef} className="space-y-4">
      <p className="text-sm text-gray-300">{uiCopy.firstThirtySeconds} · <a className="text-sky-200 underline underline-offset-4" href={`https://www.youtube.com/watch?v=${videoId}`}>{experience.original}</a></p>
      <div className="aspect-video min-h-[200px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
        <iframe
          id={`youtube-player-${slug}`}
          title={`${uiCopy.watch}: ${slug.replaceAll("-", " ")}`}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&origin=${encodeURIComponent(playerOrigin)}&rel=0`}
          className="h-full min-h-[200px] w-full"
          allow="encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className="text-xs text-gray-400">{experience.vendor}</p>
      {playerError && <p role="status" className="text-amber-200">{experience.unavailable}</p>}
      <div aria-label={uiCopy.captionLanguageLabel} className="flex flex-wrap gap-2">
        {allLanguageOptions.map(lang => <button key={lang} onClick={() => handleLanguageChange(lang)} aria-pressed={selectedLang === lang} className={`rounded-lg px-3 py-2 text-sm ${selectedLang === lang ? "bg-white/20 text-white" : "text-gray-400 hover:text-white"}`}>
          {lang === "off" ? uiCopy.off : WATCH_LANGUAGE_LABELS[lang]}
        </button>)}
      </div>
      <div className="flex min-h-24 items-center justify-center rounded-xl bg-white/5 px-4 py-3 text-center text-base text-white">
        {captionError ? experience.captionsUnavailable : currentCaption || uiCopy.firstThirtySeconds}
      </div>
      {showOverlay && <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">{uiCopy.firstThirtySeconds}</h3>
        <p className="mt-3 text-gray-300">{uiCopy.restInTranslator}</p>
        <a className="mt-4 inline-block text-sky-200 underline underline-offset-4" href={`https://www.youtube.com/watch?v=${videoId}`}>{experience.original}</a>
        <div className="mt-5 flex gap-6 text-sm">
          <button onClick={handleReplay} className="text-gray-300 underline">{uiCopy.replay}</button>
          <button onClick={handleDismiss} className="text-gray-300 underline">{uiCopy.dismiss}</button>
        </div>
        <div className="mt-6"><FeatureDownloadCta locale={locale} note={uiCopy.playerDownloadNote} watchContext={{ slug, videoId, locale, sourceLang, selectedLang, placement: "cutoff" }} /></div>
        <Link href={videoDownloaderHref} className="mt-4 inline-block text-sky-200 underline">{uiCopy.learnVideoDownloading}</Link>
      </div>}
    </div>
  );
}

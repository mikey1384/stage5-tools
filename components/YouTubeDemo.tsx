"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FeatureDownloadCta } from "./FeatureDownloadCta";
import type { Locale } from "../lib/locales";
import type { TrackLang } from "../app/watch/posts";

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

const LANGUAGE_LABELS: Record<TrackLang, string> = {
  en: "English",
  es: "Español",
  ko: "한국어",
  pt: "Português",
};

interface YouTubeDemoProps {
  locale: Locale;
  slug: string;
  videoId: string;
  sourceLang: TrackLang;
  availableTracks: TrackLang[];
  videoDownloaderHref: string;
  vttSlug?: string;
}

export function YouTubeDemo({
  locale,
  slug,
  videoId,
  sourceLang,
  availableTracks,
  videoDownloaderHref,
  vttSlug,
}: YouTubeDemoProps) {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const showOverlayRef = useRef(false);
  const captionsRef = useRef<Caption[]>([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentCaption, setCurrentCaption] = useState<string>("");
  
  // Determine initial selected language
  const getInitialLang = (): TrackLang | "off" => {
    // Check URL param
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get("lang");
      if (langParam) {
        if (langParam === "off") return "off";
        if (availableTracks.includes(langParam as TrackLang)) {
          return langParam as TrackLang;
        }
      }
    }
    
    // If page locale is the source language, default to "off"
    if (locale === sourceLang) {
      return "off";
    }
    
    // If page locale is a supported track, use it
    if (availableTracks.includes(locale as TrackLang)) {
      return locale as TrackLang;
    }
    
    // Default to "en" if available, else first track
    return availableTracks.includes("en") ? "en" : availableTracks[0];
  };

  const [selectedLang, setSelectedLang] = useState<TrackLang | "off">(getInitialLang);

  useEffect(() => {
    if (selectedLang === "off") {
      captionsRef.current = [];
      setCurrentCaption("");
      return;
    }

    const loadCaptions = async () => {
      try {
        const vttPath = vttSlug || slug;
        const response = await fetch(`/watch/${vttPath}.${selectedLang}.30s.vtt`);
        if (response.ok) {
          const vttText = await response.text();
          const parsed = parseVTT(vttText);
          captionsRef.current = parsed;
          if (playerRef.current) {
            startTimeCheck();
          }
        }
      } catch {
        // No captions available, continue without
      }
    };

    loadCaptions();
  }, [selectedLang, slug, vttSlug]);

  useEffect(() => {
    if (typeof window.YT !== "undefined") {
      initPlayer();
      return;
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
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

      if (captionsRef.current.length > 0 && selectedLang !== "off") {
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
    setSelectedLang(lang);
    setCurrentCaption("");
    const url = new URL(window.location.href);
    if (lang === "off") {
      url.searchParams.set("lang", "off");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState({}, "", url.toString());
  };

  const allLanguageOptions: Array<TrackLang | "off"> = [
    ...availableTracks,
    "off",
  ];

  return (
    <div ref={containerRef} className="relative">
      <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
        <div id={`youtube-player-${slug}`} className="h-full w-full" />

        <div className="pointer-events-auto absolute right-4 top-4 flex gap-1 rounded-lg bg-black/80 p-1 shadow-lg">
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
              {lang === "off" ? "Off" : LANGUAGE_LABELS[lang]}
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
                First 30 seconds
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                The rest of the translation happens in Translator.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <FeatureDownloadCta
                  locale={locale}
                  note="Download the video and add translated subtitles"
                  align="center"
                />
                <Link
                  href={videoDownloaderHref}
                  className="inline-flex items-center justify-center rounded-xl border border-sky-500/50 bg-sky-500/10 px-6 py-3 text-base font-semibold text-sky-200 transition hover:border-sky-400 hover:bg-sky-500/20"
                >
                  Learn about video downloading →
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 border-t border-white/10 pt-6 text-sm">
                <button
                  onClick={handleReplay}
                  className="text-gray-400 transition hover:text-white"
                >
                  Replay first 30s
                </button>
                <span className="text-gray-700">·</span>
                <button
                  onClick={handleDismiss}
                  className="text-gray-400 transition hover:text-white"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

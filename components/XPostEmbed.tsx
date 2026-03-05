"use client";

import { useEffect, useRef, useState } from "react";

const X_WIDGETS_SRC = "https://platform.twitter.com/widgets.js";
const WIDGETS_STATE_ATTR = "data-x-widgets-state";
const PROMO_POST_ID = "2012356594286100524";
const PROMO_POST_URL = `https://twitter.com/mikeytkn/status/${PROMO_POST_ID}`;

type TwitterWidgets = {
  createTweet: (
    id: string,
    target: HTMLElement,
    options?: {
      theme?: "dark" | "light";
      align?: "left" | "center" | "right";
      conversation?: "none" | "all";
      dnt?: boolean;
    },
  ) => Promise<HTMLElement>;
};

type TwitterGlobal = {
  widgets?: TwitterWidgets;
  ready?: (cb: () => void) => void;
};

let twitterReadyPromise: Promise<TwitterGlobal> | null = null;

declare global {
  interface Window {
    twttr?: TwitterGlobal;
  }
}

function loadTwitterWidgets(): Promise<TwitterGlobal> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Twitter widgets require a browser"));
  }

  if (window.twttr?.widgets?.createTweet) {
    return Promise.resolve(window.twttr);
  }

  if (twitterReadyPromise) {
    return twitterReadyPromise;
  }

  twitterReadyPromise = new Promise<TwitterGlobal>((resolve, reject) => {
    const EXISTING_SCRIPT_TIMEOUT_MS = 4000;

    const resolveWhenReady = () => {
      if (window.twttr?.widgets?.createTweet) {
        resolve(window.twttr);
        return;
      }

      if (window.twttr?.ready) {
        window.twttr.ready(() => {
          if (window.twttr?.widgets?.createTweet) {
            resolve(window.twttr);
          } else {
            reject(new Error("Twitter widgets did not initialize"));
          }
        });
        return;
      }

      window.setTimeout(() => {
        if (window.twttr?.widgets?.createTweet) {
          resolve(window.twttr);
        } else {
          reject(new Error("Twitter widgets unavailable"));
        }
      }, 0);
    };

    const existingScript = document.querySelector(
      `script[src="${X_WIDGETS_SRC}"]`,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      const knownState = existingScript.getAttribute(WIDGETS_STATE_ATTR);
      if (window.twttr?.widgets?.createTweet) {
        resolve(window.twttr);
      } else if (knownState === "error") {
        // Recover from a previous transient load failure in the same SPA session.
        existingScript.remove();
        if (window.twttr && !window.twttr.widgets?.createTweet) {
          window.twttr = undefined;
        }
      } else {
        let settled = false;

        const cleanup = () => {
          existingScript.removeEventListener("load", onLoad);
          existingScript.removeEventListener("error", onError);
        };

        const onLoad = () => {
          if (settled) return;
          settled = true;
          cleanup();
          resolveWhenReady();
        };

        const onError = () => {
          if (settled) return;
          settled = true;
          cleanup();
          existingScript.setAttribute(WIDGETS_STATE_ATTR, "error");
          reject(new Error("Twitter widgets script failed"));
        };

        existingScript.addEventListener("load", onLoad, { once: true });
        existingScript.addEventListener("error", onError, { once: true });

        window.setTimeout(() => {
          if (settled) return;
          settled = true;
          cleanup();
          if (window.twttr?.widgets?.createTweet) {
            resolve(window.twttr);
          } else {
            reject(new Error("Twitter widgets script timed out"));
          }
        }, EXISTING_SCRIPT_TIMEOUT_MS);
        return;
      }
    }

    const script = document.createElement("script");
    script.setAttribute(WIDGETS_STATE_ATTR, "loading");
    script.src = X_WIDGETS_SRC;
    script.async = true;
    script.charset = "utf-8";
    script.addEventListener(
      "load",
      () => {
        script.setAttribute(WIDGETS_STATE_ATTR, "loaded");
        resolveWhenReady();
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      () => {
        script.setAttribute(WIDGETS_STATE_ATTR, "error");
        reject(new Error("Failed to load Twitter widgets script"));
      },
      { once: true },
    );
    document.head.appendChild(script);
  });

  return twitterReadyPromise.catch((error) => {
    twitterReadyPromise = null;
    throw error;
  });
}

export function XPostEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    const container = containerRef.current;

    if (!container) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    container.innerHTML = "";

    loadTwitterWidgets()
      .then((twttr) => {
        if (cancelled || !containerRef.current) {
          return;
        }
        if (!twttr.widgets?.createTweet) {
          throw new Error("Twitter createTweet unavailable");
        }
        return twttr.widgets.createTweet(PROMO_POST_ID, containerRef.current, {
          theme: "dark",
          align: "center",
          conversation: "none",
          dnt: true,
        });
      })
      .then(() => {
        if (!cancelled) {
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative min-h-[420px] sm:min-h-[480px]">
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity ${
          status === "loading" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={status !== "loading"}
      >
        <div className="h-9 w-9 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>

      <div
        ref={containerRef}
        className={`flex justify-center transition-opacity ${
          status === "ready" ? "opacity-100" : "opacity-0"
        }`}
      />

      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <a
            href={PROMO_POST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 underline underline-offset-4 hover:text-white"
          >
            View promo post on X
          </a>
        </div>
      )}
    </div>
  );
}

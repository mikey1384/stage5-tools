"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Real app screenshots: the same scene subtitled in six languages by the
// app, cross-fading. Decorative: the page's H1 and copy carry the meaning,
// and the first frame's alt describes what is shown.

const FRAMES = [
  { native: "한국어", src: "/screenshots/player-ko-2026-10.webp" },
  { native: "Español", src: "/screenshots/player-es-2026-10.webp" },
  { native: "日本語", src: "/screenshots/player-ja-2026-10.webp" },
  { native: "Tiếng Việt", src: "/screenshots/player-vi-2026-10.webp" },
  { native: "Français", src: "/screenshots/player-fr-2026-10.webp" },
  { native: "العربية", src: "/screenshots/player-ar-2026-10.webp" },
] as const;

export interface HeroImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export function HeroLanguageShowcase({ image }: { image: HeroImage }) {
  const [index, setIndex] = useState(0);
  // Load the other languages only after the first frame is on screen.
  const [loadRest, setLoadRest] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;
    const warm = window.setTimeout(() => setLoadRest(true), 1200);
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % FRAMES.length),
      3200
    );
    return () => {
      window.clearTimeout(warm);
      window.clearInterval(timer);
    };
  }, []);

  const current = FRAMES[index];

  return (
    <figure className="relative m-0 overflow-hidden rounded-[26px] border border-[#2A2732] bg-[#1A1820]">
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        priority
        sizes="(min-width: 1024px) 620px, 100vw"
        className="block h-auto w-full"
      />
      {loadRest
        ? FRAMES.slice(1).map((frame, i) => (
            <Image
              key={frame.src}
              src={frame.src}
              width={image.width}
              height={image.height}
              alt=""
              aria-hidden="true"
              sizes="(min-width: 1024px) 620px, 100vw"
              className="absolute inset-0 block h-auto w-full transition-opacity duration-700"
              style={{ opacity: index === i + 1 ? 1 : 0 }}
            />
          ))
        : null}
      <div
        aria-hidden="true"
        className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#2A2732] bg-[#0F0E13]/85 px-2 py-1 text-[11px] text-[#D9D5CE] sm:bottom-4 sm:left-4 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[13px]"
      >
        <span className="flex h-3.5 items-center gap-[2px]">
          <span className="soul-bar h-3 w-[3px] rounded-sm bg-[#FFD84D]" />
          <span className="soul-bar h-3 w-[3px] rounded-sm bg-[#FFD84D] [animation-delay:.2s]" />
          <span className="soul-bar h-3 w-[3px] rounded-sm bg-[#FFD84D] [animation-delay:.4s]" />
        </span>
        English → {current.native}
      </div>
    </figure>
  );
}

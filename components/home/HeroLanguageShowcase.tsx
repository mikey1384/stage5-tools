"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// A real app screenshot with a yellow subtitle that keeps changing language.
// Decorative: the page's H1 and copy carry the meaning; this is aria-hidden
// except for the image alt.

const SHOWCASE_LINES = [
  { native: "한국어", line: "맨 처음 해 본 날부터, 전부 이야기해 볼게요." },
  { native: "Español", line: "Aquí va toda la historia, desde el primer intento." },
  { native: "日本語", line: "最初に挑戦した日から、全部お話しします。" },
  { native: "Tiếng Việt", line: "Đây là toàn bộ câu chuyện, từ lần thử đầu tiên." },
  { native: "Français", line: "Voici toute l’histoire, depuis le tout premier essai." },
  { native: "العربية", line: "إليكم القصة كاملة، منذ المحاولة الأولى." },
] as const;

export interface HeroImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export function HeroLanguageShowcase({ image }: { image: HeroImage }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % SHOWCASE_LINES.length),
      2800
    );
    return () => window.clearInterval(timer);
  }, []);

  const current = SHOWCASE_LINES[index];

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
      <div
        aria-hidden="true"
        className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#2A2732] bg-[#0F0E13]/85 px-3 py-1.5 text-[13px] text-[#D9D5CE]"
      >
        <span className="flex h-3.5 items-center gap-[2px]">
          <span className="soul-bar h-3 w-[3px] rounded-sm bg-[#FFD84D]" />
          <span className="soul-bar h-3 w-[3px] rounded-sm bg-[#FFD84D] [animation-delay:.2s]" />
          <span className="soul-bar h-3 w-[3px] rounded-sm bg-[#FFD84D] [animation-delay:.4s]" />
        </span>
        English → {current.native}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-[5%]"
      >
        <p
          key={index}
          dir="auto"
          className="soul-rise m-0 max-w-[86%] rounded-lg bg-black/60 px-4 py-2 text-center text-[clamp(0.95rem,2vw,1.4rem)] font-semibold leading-snug text-[#FFD84D]"
        >
          {current.line}
        </p>
      </div>
    </figure>
  );
}

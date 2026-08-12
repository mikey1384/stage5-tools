"use client";

import Link from "next/link";
import { trackFaqIntent } from "../lib/analytics";
import {
  createFaqIntentEvent,
  type FaqIntentDestination,
} from "../lib/analytics-events";
import { localizePathForLocale } from "../lib/locale-routing";
import type { Locale } from "../lib/locales";

type FaqIntentCopy = {
  label: string;
  links: Record<FaqIntentDestination, string>;
};

const COPY: Record<Locale, FaqIntentCopy> = {
  en: {
    label: "Go straight to what you need",
    links: {
      translate: "Translate a video",
      video_downloader: "Download a video",
      pricing: "Check pricing",
    },
  },
  ko: {
    label: "필요한 곳으로 바로 이동하세요",
    links: {
      translate: "영상 번역하기",
      video_downloader: "영상 다운로드하기",
      pricing: "가격 확인하기",
    },
  },
  es: {
    label: "Ve directo a lo que necesitas",
    links: {
      translate: "Traducir un video",
      video_downloader: "Descargar un video",
      pricing: "Ver precios",
    },
  },
  ja: {
    label: "必要なページへすぐ移動",
    links: {
      translate: "動画を翻訳する",
      video_downloader: "動画をダウンロードする",
      pricing: "料金を確認する",
    },
  },
  zh: {
    label: "直接前往你需要的功能",
    links: {
      translate: "翻译视频",
      video_downloader: "下载视频",
      pricing: "查看价格",
    },
  },
  fr: {
    label: "Accédez directement à votre besoin",
    links: {
      translate: "Traduire une vidéo",
      video_downloader: "Télécharger une vidéo",
      pricing: "Voir les tarifs",
    },
  },
  de: {
    label: "Direkt zum passenden Werkzeug",
    links: {
      translate: "Video übersetzen",
      video_downloader: "Video herunterladen",
      pricing: "Preise ansehen",
    },
  },
  pt: {
    label: "Vá direto ao que você precisa",
    links: {
      translate: "Traduzir um vídeo",
      video_downloader: "Baixar um vídeo",
      pricing: "Ver preços",
    },
  },
  vi: {
    label: "Đi thẳng đến điều bạn cần",
    links: {
      translate: "Dịch video",
      video_downloader: "Tải video",
      pricing: "Xem giá",
    },
  },
};

const DESTINATIONS: Array<{
  destination: FaqIntentDestination;
  href: string;
}> = [
  { destination: "translate", href: "/translate" },
  { destination: "video_downloader", href: "/video-downloader" },
  { destination: "pricing", href: "/pricing" },
];

export function FaqIntentLinks({ locale }: { locale: Locale }) {
  const copy = COPY[locale];

  return (
    <div className="mt-6" data-faq-intent-links>
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
        {copy.label}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {DESTINATIONS.map(({ destination, href }) => (
          <Link
            key={destination}
            href={localizePathForLocale(locale, href)}
            onClick={() =>
              trackFaqIntent(
                createFaqIntentEvent(destination, window.location.pathname),
              )
            }
            className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/[0.06] px-3 py-2 text-xs font-semibold text-amber-50/80 transition hover:border-amber-200/55 hover:bg-amber-200/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
          >
            {copy.links[destination]}
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

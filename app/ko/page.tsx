import type { Metadata } from "next";
import Home from "../(home)/page";
import { t } from "../../lib/strings";

const locale = "ko" as const;

export const metadata: Metadata = {
  title: t("pageTitle", locale),
  description: t("subheadline", locale),
  keywords: [
    "AI video translator",
    "video translation software",
    "YouTube subtitle translator",
    "add subtitles to video",
    "translate YouTube video",
    "video subtitle editor",
    "SRT translator",
    "subtitle editor",
    "subtitle translation",
    "Translator app",
  ],
  alternates: {
    canonical: "https://translator.tools/ko",
    languages: {
      "x-default": "https://translator.tools/",
      en: "https://translator.tools/",
      ko: "https://translator.tools/ko",
    },
  },
  openGraph: {
    title: t("pageTitle", locale),
    description: t("subheadline", locale),
    url: "https://translator.tools/ko",
    siteName: "Translator",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://translator.tools/thumb.jpg",
        width: 1200,
        height: 630,
        alt: "Translator by Stage 5",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t("pageTitle", locale),
    description: t("subheadline", locale),
    images: ["https://translator.tools/thumb.jpg"],
  },
};

export default async function KoreanHomePage() {
  return <Home searchParams={Promise.resolve({ l: locale })} />;
}

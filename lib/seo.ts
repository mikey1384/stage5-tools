import type { Metadata } from "next";
import type { Locale } from "./strings";

const BASE_URL = "https://translator.tools";

const defaultImage = {
  url: `${BASE_URL}/thumb.jpg`,
  width: 1200,
  height: 630,
  alt: "Translator by Stage5",
};

interface BuildMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  locale?: Locale;
}

function toEnglishPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/ko") return "/";
  return normalized.startsWith("/ko/") ? normalized.slice(3) || "/" : normalized;
}

function toKoreanPath(path: string): string {
  const englishPath = toEnglishPath(path);
  return englishPath === "/" ? "/ko" : `/ko${englishPath}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  locale = "en",
}: BuildMetadataProps): Metadata {
  const englishPath = toEnglishPath(path);
  const koreanPath = toKoreanPath(englishPath);
  const canonicalPath = locale === "ko" ? koreanPath : englishPath;

  const canonicalUrl = new URL(canonicalPath, BASE_URL).toString();
  const englishUrl = new URL(englishPath, BASE_URL).toString();
  const koreanUrl = new URL(koreanPath, BASE_URL).toString();
  const ogLocale = locale === "ko" ? "ko_KR" : "en_US";
  const alternateOgLocale = locale === "ko" ? ["en_US"] : ["ko_KR"];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": englishUrl,
        en: englishUrl,
        ko: koreanUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Translator",
      type: "website",
      locale: ogLocale,
      alternateLocale: alternateOgLocale,
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage.url],
    },
  };
}

export const defaultOpenGraphImage = defaultImage;

import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  localizedLocalesForPath,
  localizePathForLocale,
  openGraphLocaleByLocale,
  type Locale,
} from "./locales";

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

interface BuildSoftwareApplicationStructuredDataProps {
  description: string;
  path: string;
  locale?: Locale;
}

interface BreadcrumbStructuredDataItem {
  name: string;
  path: string;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  locale = "en",
}: BuildMetadataProps): Metadata {
  const englishPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalPath = localizePathForLocale(locale, englishPath);
  const canonicalUrl = new URL(canonicalPath, BASE_URL).toString();
  const availableLocales = localizedLocalesForPath(englishPath);
  const languageUrls = Object.fromEntries(
    availableLocales.map((supportedLocale) => [
      supportedLocale,
      new URL(localizePathForLocale(supportedLocale, englishPath), BASE_URL).toString(),
    ])
  ) as Record<string, string>;
  const ogLocale = openGraphLocaleByLocale[locale];
  const alternateOgLocale = availableLocales.filter(
    (supportedLocale) => supportedLocale !== locale
  ).map((supportedLocale) => openGraphLocaleByLocale[supportedLocale]);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": languageUrls[DEFAULT_LOCALE],
        ...languageUrls,
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

export function absoluteSiteUrl(path: string): string {
  return new URL(path, BASE_URL).toString();
}

export function buildSoftwareApplicationStructuredData({
  description,
  path,
  locale = "en",
}: BuildSoftwareApplicationStructuredDataProps) {
  const englishPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalPath = localizePathForLocale(locale, englishPath);
  const canonicalUrl = absoluteSiteUrl(canonicalPath);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Translator",
    url: canonicalUrl,
    inLanguage: locale,
    description,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "macOS, Windows",
    image: defaultImage.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free download with optional paid AI transcription, translation, and dubbing.",
    },
  };
}

export function buildBreadcrumbStructuredData(
  locale: Locale,
  items: BreadcrumbStructuredDataItem[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteSiteUrl(localizePathForLocale(locale, item.path)),
    })),
  };
}

export const defaultOpenGraphImage = defaultImage;

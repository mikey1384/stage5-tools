import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  indexableLocalesForPath,
  localizePathForLocale,
  localizeSupportedPathForLocale,
  openGraphLocaleByLocale,
  shouldIndexLocalePath,
  type Locale,
} from "./locales";
import { canonicalOriginForPath, canonicalSiteUrl, STAGE5_ORIGIN } from "./site-routing";

const BASE_URL = "https://translator.tools";

const defaultImage = {
  url: `${BASE_URL}/translator-social-card-editorial-2026-08.png`,
  width: 1200,
  height: 630,
  alt: "Translator multitab video translation workstation",
};

interface BuildMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  locale?: Locale;
  availableLocales?: readonly Locale[];
  origin?: string;
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
  availableLocales,
  origin,
}: BuildMetadataProps): Metadata {
  const englishPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalOrigin = origin ?? canonicalOriginForPath(englishPath);
  // R2 Watch copy predates Stage5 ownership; normalize only its old brand suffix.
  const resolvedTitle = canonicalOrigin === STAGE5_ORIGIN
    ? title.replace(/\s*\|\s*Translator\s*$/i, " | Stage5")
    : title;
  const canonicalPath = availableLocales
    ? localizeSupportedPathForLocale(locale, englishPath)
    : localizePathForLocale(locale, englishPath);
  const canonicalUrl = new URL(canonicalPath, canonicalOrigin).toString();
  const resolvedAvailableLocales = availableLocales
    ? [...new Set([DEFAULT_LOCALE, ...availableLocales])]
    : indexableLocalesForPath(englishPath);
  const shouldIndex = availableLocales
    ? resolvedAvailableLocales.includes(locale)
    : shouldIndexLocalePath(locale, englishPath);
  const languageUrls = Object.fromEntries(
    resolvedAvailableLocales.map((supportedLocale) => [
      supportedLocale,
      new URL(
        availableLocales
          ? localizeSupportedPathForLocale(supportedLocale, englishPath)
          : localizePathForLocale(supportedLocale, englishPath),
        canonicalOrigin,
      ).toString(),
    ]),
  ) as Record<string, string>;
  const ogLocale = openGraphLocaleByLocale[locale];
  const alternateOgLocale = resolvedAvailableLocales
    .filter((supportedLocale) => supportedLocale !== locale)
    .map((supportedLocale) => openGraphLocaleByLocale[supportedLocale]);

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": languageUrls[DEFAULT_LOCALE],
        ...languageUrls,
      },
    },
    robots: shouldIndex
      ? undefined
      : {
          index: false,
          follow: true,
        },
    openGraph: {
      title: resolvedTitle,
      description,
      url: canonicalUrl,
      siteName: canonicalOrigin === STAGE5_ORIGIN ? "Stage5" : "Translator",
      type: "website",
      locale: ogLocale,
      alternateLocale: alternateOgLocale,
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [defaultImage.url],
    },
  };
}

export function absoluteSiteUrl(path: string): string {
  return canonicalSiteUrl(path);
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
  items: BreadcrumbStructuredDataItem[],
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

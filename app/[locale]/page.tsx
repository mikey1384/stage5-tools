import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../(home)/page";
import { getHomeMetadata } from "../(home)/home-copy";
import {
  HOME_LOCALIZED_LOCALES,
  isLocale,
  type Locale,
} from "../../lib/locales";

function resolveLocalizedHomeLocale(locale: string): Exclude<Locale, "en"> {
  if (!isLocale(locale) || locale === "en") {
    notFound();
  }

  return locale;
}

export function generateStaticParams() {
  return HOME_LOCALIZED_LOCALES.filter((locale) => locale !== "en").map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocalizedHomeLocale(locale);
  return getHomeMetadata(resolvedLocale);
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resolvedLocale = resolveLocalizedHomeLocale(locale);
  return <Home searchParams={Promise.resolve({ l: resolvedLocale })} />;
}

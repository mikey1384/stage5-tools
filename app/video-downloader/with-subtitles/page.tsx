import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { TranslationLandingPage } from "../../../components/TranslationLandingPage";
import { getLocale } from "../../../lib/get-locale";
import { buildMetadata } from "../../../lib/seo";
import {
  getSubtitleGuideContent,
  SUBTITLE_GUIDE_PATH,
} from "../../../lib/subtitle-guide-content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const guide = getSubtitleGuideContent(locale) ?? getSubtitleGuideContent("en")!;
  return buildMetadata({
    title: guide.title,
    description: guide.description,
    path: SUBTITLE_GUIDE_PATH,
    keywords: [],
    locale: guide.locale,
  });
}

export default async function SubtitleGuidePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale(await searchParams);
  const guide = getSubtitleGuideContent(locale);
  // Only en, pt and es have this guide; other locales go to the English page.
  if (!guide) permanentRedirect(SUBTITLE_GUIDE_PATH);
  return <TranslationLandingPage copy={guide} />;
}

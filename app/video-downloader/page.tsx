import Link from "next/link";
import type { Metadata } from "next";
import { AllDownloadButtons } from "../../components/AllDownloadButtons";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

export const metadata: Metadata = buildMetadata({
  title: "Free Video Downloader - Download YouTube Videos | Translator",
  description:
    "Download YouTube videos and more by URL. Save high-quality files for subtitle editing and AI translation with Translator.",
  path: "/video-downloader",
  keywords: [
    "YouTube video downloader",
    "download video from URL",
    "free video downloader",
    "video downloader for subtitles",
    "AI video translator",
  ],
});

export default async function VideoDownloaderPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);

  const highlights = [
    {
      titleKey: "videoDownloaderFeature1Title" as const,
      descKey: "videoDownloaderFeature1Desc" as const,
    },
    {
      titleKey: "videoDownloaderFeature2Title" as const,
      descKey: "videoDownloaderFeature2Desc" as const,
    },
    {
      titleKey: "videoDownloaderFeature3Title" as const,
      descKey: "videoDownloaderFeature3Desc" as const,
    },
  ];

  const steps = [
    t("videoDownloaderStep1", locale),
    t("videoDownloaderStep2", locale),
    t("videoDownloaderStep3", locale),
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: "/" },
            { label: t("navVideoDownloader", locale) },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              {t("videoDownloaderTitle", locale)}
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              {t("videoDownloaderSubtitle", locale)}
            </p>
          </div>
          <div className="mt-8">
            <AllDownloadButtons locale={locale} />
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.titleKey}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-xl font-semibold text-white">
                  {t(item.titleKey, locale)}
                </h2>
                <p className="mt-3 text-sm text-gray-400">
                  {t(item.descKey, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-light text-white">
              {t("videoDownloaderHowItWorks", locale)}
            </h2>
            <ol className="mt-6 space-y-4 text-gray-400">
              {steps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("videoDownloaderPlatforms", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("videoDownloaderPlatformsDesc", locale)}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>• {t("videoDownloaderPlatform1", locale)}</li>
                <li>• {t("videoDownloaderPlatform2", locale)}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("videoDownloaderQuality", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("videoDownloaderQualityDesc", locale)}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>• {t("videoDownloaderQuality1", locale)}</li>
                <li>• {t("videoDownloaderQuality2", locale)}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("videoDownloaderPairEditor", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("videoDownloaderPairEditorDesc", locale)}
              </p>
              <Link
                href="/subtitle-editor"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("translateGoToEditor", locale)}
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("videoDownloaderTranslateAi", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("videoDownloaderTranslateAiDesc", locale)}
              </p>
              <Link
                href="/translate"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("subtitleEditorExploreTranslation", locale)}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <AllDownloadButtons locale={locale} />
          <p className="text-sm text-gray-500 mt-4">
            {t("videoDownloaderFreeNote", locale)}
          </p>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

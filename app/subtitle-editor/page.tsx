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
  title: "Free Subtitle Editor - Edit, Sync & Merge Subtitles | Translator",
  description:
    "Edit SRT, VTT, and ASS subtitles with a free subtitle editor. Sync timing, merge tracks, and export clean files.",
  path: "/subtitle-editor",
  keywords: [
    "subtitle editor",
    "SRT editor",
    "sync subtitles",
    "merge subtitles",
    "subtitle timing",
    "free subtitle editor",
  ],
});

export default async function SubtitleEditorPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);

  const features = [
    {
      titleKey: "subtitleEditorFeature1Title" as const,
      descKey: "subtitleEditorFeature1Desc" as const,
    },
    {
      titleKey: "subtitleEditorFeature2Title" as const,
      descKey: "subtitleEditorFeature2Desc" as const,
    },
    {
      titleKey: "subtitleEditorFeature3Title" as const,
      descKey: "subtitleEditorFeature3Desc" as const,
    },
  ];

  const workflow = [
    t("subtitleEditorStep1", locale),
    t("subtitleEditorStep2", locale),
    t("subtitleEditorStep3", locale),
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: "/" },
            { label: t("navSubtitleEditor", locale) },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              {t("subtitleEditorTitle", locale)}
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              {t("subtitleEditorSubtitle", locale)}
            </p>
          </div>
          <div className="mt-8">
            <AllDownloadButtons locale={locale} />
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item) => (
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
              {t("subtitleEditorWorkflow", locale)}
            </h2>
            <ol className="mt-6 space-y-4 text-gray-400">
              {workflow.map((step) => (
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
                {t("subtitleEditorNeedVideo", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("subtitleEditorNeedVideoDesc", locale)}
              </p>
              <Link
                href="/video-downloader"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("translateGoToDownloader", locale)}
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("subtitleEditorReadyTranslate", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("subtitleEditorReadyTranslateDesc", locale)}
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
            {t("subtitleEditorFreeNote", locale)}
          </p>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

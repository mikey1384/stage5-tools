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
  title: "AI Video Translation - Translate Subtitles to 30+ Languages | Translator",
  description:
    "Translate video subtitles to 30+ languages with AI. Use GPT + Claude for fast, accurate subtitle translation.",
  path: "/translate",
  keywords: [
    "AI subtitle translation",
    "translate video subtitles",
    "automatic video translation",
    "AI video translator",
    "SRT translator",
    "YouTube subtitle translator",
  ],
});

export default async function TranslatePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);

  const features = [
    {
      titleKey: "translateFeature1Title" as const,
      descKey: "translateFeature1Desc" as const,
    },
    {
      titleKey: "translateFeature2Title" as const,
      descKey: "translateFeature2Desc" as const,
    },
    {
      titleKey: "translateFeature3Title" as const,
      descKey: "translateFeature3Desc" as const,
    },
  ];

  const languageLinks = [
    { labelKey: "langSpanish" as const, href: "/translate/spanish" },
    { labelKey: "langKorean" as const, href: "/translate/korean" },
    { labelKey: "langJapanese" as const, href: "/translate/japanese" },
    { labelKey: "langChinese" as const, href: "/translate/chinese" },
    { labelKey: "langFrench" as const, href: "/translate/french" },
    { labelKey: "langGerman" as const, href: "/translate/german" },
    { labelKey: "langPortuguese" as const, href: "/translate/portuguese" },
  ];

  const steps = [
    t("translateStep1", locale),
    t("translateStep2", locale),
    t("translateStep3", locale),
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: "/" },
            { label: t("navAiTranslation", locale) },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              {t("translateTitle", locale)}
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              {t("translateSubtitle", locale)}
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
              {t("translateHowItWorks", locale)}
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
          <div className="max-w-5xl">
            <h2 className="text-3xl font-light text-white">
              {t("translateLanguagesTitle", locale)}
            </h2>
            <p className="mt-3 text-gray-400">
              {t("translateLanguagesDesc", locale)}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {languageLinks.map((lang) => (
                <Link
                  key={lang.href}
                  href={lang.href}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/40"
                >
                  {t(lang.labelKey, locale)}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("translateNeedSubtitles", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("translateNeedSubtitlesDesc", locale)}
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
                {t("translateStartWithUrl", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("translateStartWithUrlDesc", locale)}
              </p>
              <Link
                href="/video-downloader"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("translateGoToDownloader", locale)}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <AllDownloadButtons locale={locale} />
          <p className="text-sm text-gray-500 mt-4">
            {t("translateCreditsNote", locale)}
          </p>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

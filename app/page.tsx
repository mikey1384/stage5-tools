import Link from "next/link";
import Script from "next/script";
import { AllDownloadButtons } from "../components/AllDownloadButtons";
import { FeatureRow } from "../components/FeatureRow";
import {
  VideoDownloadIcon,
  SubtitleMergeIcon,
  AITranslationIcon,
} from "../components/icons";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { t } from "../lib/strings";
import { getLocale } from "../lib/get-locale";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Translator",
  url: "https://translator.tools",
  description:
    "AI-powered video translation and subtitle editing tool for creators and teams.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "macOS, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free download with optional paid AI transcription and translation",
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);

  const features = [
    {
      title: t("videoDownload", locale),
      description: t("videoDownloadDesc", locale),
      icon: VideoDownloadIcon,
      label: t("free", locale),
      href: "/video-downloader",
      ctaLabel: "Learn about the downloader",
    },
    {
      title: t("subtitleEditing", locale),
      description: t("subtitleEditingDesc", locale),
      icon: SubtitleMergeIcon,
      label: t("free", locale),
      href: "/subtitle-editor",
      ctaLabel: "Explore the subtitle editor",
    },
    {
      title: t("aiTranslation", locale),
      description: t("aiTranslationDesc", locale),
      icon: AITranslationIcon,
      href: "/translate",
      ctaLabel: "See AI translation details",
    },
  ];

  const howItWorks = [
    {
      titleKey: "homeStep1Title" as const,
      descKey: "homeStep1Desc" as const,
    },
    {
      titleKey: "homeStep2Title" as const,
      descKey: "homeStep2Desc" as const,
    },
    {
      titleKey: "homeStep3Title" as const,
      descKey: "homeStep3Desc" as const,
    },
    {
      titleKey: "homeStep4Title" as const,
      descKey: "homeStep4Desc" as const,
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

  const otherLanguages = [
    "langArabic" as const,
    "langBulgarian" as const,
    "langCroatian" as const,
    "langCzech" as const,
    "langDanish" as const,
    "langDutch" as const,
    "langEnglish" as const,
    "langFinnish" as const,
    "langGreek" as const,
    "langHebrew" as const,
    "langHindi" as const,
    "langHungarian" as const,
    "langIndonesian" as const,
    "langItalian" as const,
    "langMalay" as const,
    "langNorwegian" as const,
    "langPolish" as const,
    "langRomanian" as const,
    "langRussian" as const,
    "langSerbian" as const,
    "langSwedish" as const,
    "langThai" as const,
    "langTurkish" as const,
    "langUkrainian" as const,
    "langVietnamese" as const,
  ];

  const useCases = [
    {
      titleKey: "homeUseCase1Title" as const,
      descKey: "homeUseCase1Desc" as const,
      href: "/translate",
    },
    {
      titleKey: "homeUseCase2Title" as const,
      descKey: "homeUseCase2Desc" as const,
      href: "/subtitle-editor",
    },
    {
      titleKey: "homeUseCase3Title" as const,
      descKey: "homeUseCase3Desc" as const,
      href: "/video-downloader",
    },
    {
      titleKey: "homeUseCase4Title" as const,
      descKey: "homeUseCase4Desc" as const,
      href: "/translate/japanese",
    },
  ];

  const faqPreview = [
    { qKey: "homeFaqQ1" as const, aKey: "homeFaqA1" as const },
    { qKey: "homeFaqQ2" as const, aKey: "homeFaqA2" as const },
    { qKey: "homeFaqQ3" as const, aKey: "homeFaqA3" as const },
    { qKey: "homeFaqQ4" as const, aKey: "homeFaqA4" as const },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        {/* Hero */}
        <section className="text-center py-12 md:py-20">
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl font-montserrat font-bold tracking-tight text-white">
              {t("headline", locale)}
            </h1>
            <div className="font-montserrat font-medium text-lg text-white mt-1">
              by stage_5
            </div>
            <h2 className="text-xl md:text-2xl text-gray-400 mt-4 font-normal">
              {t("tagline", locale)}
            </h2>
          </div>
          <a
            href="https://www.producthunt.com/products/translator-3?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-translator-5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1063984&theme=dark&t=1768993812067"
              alt="Translator - Translate any video to 30+ languages with latest AI | Product Hunt"
              width={250}
              height={54}
            />
          </a>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {t("subheadline", locale)}
          </p>

          <div className="mt-8">
            <AllDownloadButtons locale={locale} />
          </div>

          {/* Promo Video */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-white/10">
              <iframe
                src="https://www.youtube.com/embed/0HXMpUGDhkU"
                title="Translator App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-0">
          {features.map((feature, index) => (
            <FeatureRow
              key={feature.title}
              {...feature}
              direction={index % 2 ? "rtl" : "ltr"}
            />
          ))}
        </section>

        {/* How it works */}
        <section className="py-24 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-light text-white">
                  {t("homeHowItWorks", locale)}
                </h2>
                <p className="text-gray-400 mt-3 max-w-2xl">
                  {t("homeHowItWorksDesc", locale)}
                </p>
              </div>
              <Link
                href="/translate"
                className="text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("homeExploreAiTranslation", locale)}
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-4 mt-10">
              {howItWorks.map((step, index) => (
                <div
                  key={step.titleKey}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-xs uppercase tracking-widest text-gray-500">
                    {t("homeStep", locale)} {index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {t(step.titleKey, locale)}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400">
                    {t(step.descKey, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported languages */}
        <section className="py-24 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              {t("homeSupportedLanguages", locale)}
            </h2>
            <p className="text-gray-400 mt-3 max-w-3xl">
              {t("homeSupportedLanguagesDesc", locale)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {languageLinks.map((lang) => (
                <Link
                  key={lang.href}
                  href={lang.href}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/40"
                >
                  {t(lang.labelKey, locale)}
                </Link>
              ))}
              {otherLanguages.map((langKey) => (
                <span
                  key={langKey}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
                >
                  {t(langKey, locale)}
                </span>
              ))}
            </div>
            <Link
              href="/translate"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              {t("homeSeeAllLanguages", locale)}
            </Link>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-24 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-light text-white">
              {t("homeUseCases", locale)}
            </h2>
            <p className="text-gray-400 mt-3 max-w-3xl">
              {t("homeUseCasesDesc", locale)}
            </p>
            <div className="grid gap-6 md:grid-cols-2 mt-10">
              {useCases.map((useCase) => (
                <div
                  key={useCase.titleKey}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {t(useCase.titleKey, locale)}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400">
                    {t(useCase.descKey, locale)}
                  </p>
                  <Link
                    href={useCase.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
                  >
                    {t("homeLearnMore", locale)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ preview */}
        <section className="py-24 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-4xl font-light text-white">
                  {t("homeFaqTitle", locale)}
                </h2>
                <p className="text-gray-400 mt-3 max-w-2xl">
                  {t("homeFaqDesc", locale)}
                </p>
              </div>
              <Link
                href="/faq"
                className="text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("homeViewFullFaq", locale)}
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mt-10">
              {faqPreview.map((item) => (
                <div
                  key={item.qKey}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {t(item.qKey, locale)}
                  </h3>
                  <p className="mt-3 text-sm text-gray-400">
                    {t(item.aKey, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download section */}
        <section id="download" className="py-32 text-center">
          <AllDownloadButtons locale={locale} />
          <p className="text-sm text-gray-500 mt-4">{t("footer", locale)}</p>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

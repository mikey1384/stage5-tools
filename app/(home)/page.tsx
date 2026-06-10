import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { AllDownloadButtons } from "../../components/AllDownloadButtons";
import { HeroDownloadActions } from "../../components/HeroDownloadActions";
import { HomepageScreenshotSlot } from "../../components/HomepageScreenshotSlot";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { HOME_LOCALIZED_LOCALES } from "../../lib/locales";
import { localizePathForLocale } from "../../lib/locale-routing";
import { productHuntReviews } from "../../lib/reviews";
import { t, type Locale } from "../../lib/strings";

import {
  getHomeMetadata,
  getHomeSeoContext,
  homeCopy,
  type HomeMetric,
} from "./home-copy";

function getHomeStructuredData(locale: Locale) {
  const { copy, canonicalUrl } = getHomeSeoContext(locale);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Translator",
    url: canonicalUrl,
    inLanguage: [...HOME_LOCALIZED_LOCALES],
    description: copy.metadataDescription,
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Video subtitle translation",
    operatingSystem: "macOS, Windows",
    image: "https://translator.tools/thumb.jpg",
    screenshot: [
      "https://translator.tools/screenshots/watch-translated-subtitles.webp",
      "https://translator.tools/screenshots/subtitle-editor-workflow.webp",
      "https://translator.tools/screenshots/highlight-clips.webp",
    ],
    featureList: [
      "Download or import internet videos",
      "AI transcription and subtitle translation into 39 languages",
      "Subtitle editor synced to the video timeline",
      "Export SRT files or burn subtitles into video",
      "AI dubbing and highlight clip extraction",
    ],
    downloadUrl: "https://translator.tools/#all-downloads",
    softwareHelp: {
      "@type": "WebPage",
      url: "https://translator.tools/faq",
    },
    publisher: {
      "@type": "Organization",
      name: "Stage5 Tools",
      url: "https://translator.tools",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free download with optional paid AI transcription, translation, and dubbing.",
    },
  };
}

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
  "langBengali" as const,
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
  "langSwedish" as const,
  "langTagalog" as const,
  "langThai" as const,
  "langTurkish" as const,
  "langUkrainian" as const,
  "langUrdu" as const,
  "langVietnamese" as const,
];

const watchSubtitleScreenshot = {
  src: "/screenshots/watch-translated-subtitles.webp",
  width: 1600,
  height: 1003,
};
const highlightClipsScreenshot = {
  src: "/screenshots/highlight-clips.webp",
  width: 1600,
  height: 710,
};


export async function generateMetadata(): Promise<Metadata> {
  return getHomeMetadata(await getLocale());
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = homeCopy[locale];
  const localizedHref = (href: string) => localizePathForLocale(locale, href);
  const structuredData = getHomeStructuredData(locale);
  const heroScreenshot = watchSubtitleScreenshot;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/14 blur-3xl" />
        <div className="absolute right-[-10rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-amber-400/12 blur-3xl" />
        <div className="absolute bottom-[6rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <SiteNav locale={locale} />

        <section className="py-10 md:py-16">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] xl:items-start">
            <div className="max-w-3xl xl:pt-4">
              <SectionLabel>{copy.eyebrow}</SectionLabel>
              <h1 className="mt-6 font-montserrat text-5xl font-bold tracking-tight text-white md:text-7xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                {copy.subtitle}
              </p>

              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400">
                {copy.heroNote}{" "}
                <Link
                  href={localizedHref("/pricing")}
                  className="font-semibold text-white transition hover:text-cyan-200"
                >
                  {copy.heroPricingLink}
                </Link>{" "}
                <span className="text-gray-600">/</span>{" "}
                <Link
                  href={localizedHref("/faq")}
                  className="font-semibold text-white transition hover:text-cyan-200"
                >
                  {copy.heroFaqLink}
                </Link>
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.heroPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-gray-200 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/15 text-xs text-emerald-200">
                        +
                      </span>
                      <span>{point}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_58%)]" />
              <div className="relative rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.36)] backdrop-blur-sm md:p-5 xl:p-6">
                <MockWindow
                  title={copy.mockSearchTag}
                  accent="from-cyan-400/20 via-cyan-300/5 to-transparent"
                >
                  <HomepageScreenshotSlot
                    src={heroScreenshot.src}
                    alt={copy.heroDiscoveryAlt}
                    width={heroScreenshot.width}
                    height={heroScreenshot.height}
                    loading="eager"
                    fetchPriority="high"
                    className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f]"
                    imageClassName="block w-full"
                    fallback={
                      <div className="flex min-h-[320px] items-end rounded-[28px] border border-dashed border-white/15 bg-[linear-gradient(135deg,#09111d,#05070c_65%)] p-6">
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                            {copy.mockSearchTag}
                          </div>
                          <div className="mt-3 text-lg text-white">
                            {copy.mockSearchQuery}
                          </div>
                        </div>
                      </div>
                    }
                  />
                  <p className="mt-4 text-sm leading-6 text-gray-400">
                    {copy.heroScreenshotCaption}
                  </p>
                </MockWindow>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <HeroBenefitCard
                    title={copy.heroBenefitTitle1}
                    description={copy.heroBenefitBody1}
                  />

                  <HeroBenefitCard
                    title={copy.heroBenefitTitle2}
                    description={copy.heroBenefitBody2}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.metrics.map((metric) => (
              <MetricCard key={`${metric.value}-${metric.label}`} metric={metric} />
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <MockWindow
              title={copy.viewerWindowTitle}
              accent="from-amber-300/20 via-amber-200/5 to-transparent"
            >
              <HomepageScreenshotSlot
                src={watchSubtitleScreenshot.src}
                alt={copy.viewerAlt}
                width={watchSubtitleScreenshot.width}
                height={watchSubtitleScreenshot.height}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-[#120d07]"
                imageClassName="block w-full"
                fallback={
                  <div className="flex min-h-[320px] items-end rounded-[28px] border border-dashed border-white/15 bg-[linear-gradient(135deg,#1a1209,#05070c_65%)] p-6">
                    <div className="text-lg text-white">{copy.viewerTitle}</div>
                  </div>
                }
              />
              <p className="mt-4 text-sm leading-6 text-gray-400">
                {copy.viewerScreenshotCaption}
              </p>
            </MockWindow>

            <div>
              <SectionLabel>{copy.viewerEyebrow}</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-4xl font-light text-white md:text-5xl">
                {copy.viewerTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                {copy.viewerDescription}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SectionLabel>{copy.actionEyebrow}</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-4xl font-light text-white md:text-5xl">
                {copy.actionTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                {copy.actionDescription}
              </p>
            </div>

            <MockWindow
              title={copy.actionWindowTitle}
              accent="from-emerald-300/18 via-emerald-200/5 to-transparent"
            >
              <HomepageScreenshotSlot
                src={highlightClipsScreenshot.src}
                alt={copy.actionAlt}
                width={highlightClipsScreenshot.width}
                height={highlightClipsScreenshot.height}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07110a]"
                imageClassName="block w-full"
                fallback={
                  <div className="flex min-h-[320px] items-end rounded-[28px] border border-dashed border-white/15 bg-[linear-gradient(135deg,#08140d,#05070c_65%)] p-6">
                    <div className="text-lg text-white">{copy.actionTitle}</div>
                  </div>
                }
              />
              <p className="mt-4 text-sm leading-6 text-gray-400">
                {copy.actionScreenshotCaption}
              </p>
            </MockWindow>
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionLabel>{copy.comparisonEyebrow}</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-4xl font-light text-white md:text-5xl">
                {copy.comparisonTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                {copy.comparisonDescription}
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="grid border-b border-white/10 bg-white/6 md:grid-cols-2">
                <div className="px-6 py-4 text-sm font-semibold text-gray-400">
                  {copy.typicalLabel}
                </div>
                <div className="border-t border-white/10 px-6 py-4 text-sm font-semibold text-white md:border-l md:border-t-0">
                  {copy.translatorLabel}
                </div>
              </div>
              {copy.comparisonRows.map((row) => (
                <div
                  key={`${row.typical}-${row.translator}`}
                  className="grid border-b border-white/10 last:border-b-0 md:grid-cols-2"
                >
                  <div className="px-6 py-5 text-sm leading-7 text-gray-400">
                    {row.typical}
                  </div>
                  <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-white md:border-l md:border-t-0">
                    {row.translator}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>{copy.sellingEyebrow}</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-4xl font-light text-white md:text-5xl">
                {copy.sellingTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
                {copy.sellingDescription}
              </p>
            </div>
            <Link
              href={localizedHref("/about")}
              className="text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              {copy.aboutLinkLabel}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {copy.sellingPoints.map((point) => (
              <div
                key={point.title}
                className="group rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 transition hover:border-white/20 hover:bg-white/8"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gray-500">
                  {copy.sellingCardEyebrow}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  {point.description}
                </p>
                <Link
                  href={localizedHref(point.href)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-cyan-200"
                >
                  {point.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>{copy.socialEyebrow}</SectionLabel>
              <h2 className="mt-6 text-4xl font-light text-white md:text-5xl">
                {copy.socialTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
                {copy.socialDescription}
              </p>
            </div>
            <a
              href="https://www.producthunt.com/products/translator-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              {copy.productHuntLinkLabel}
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {productHuntReviews.map((review) => (
              <blockquote
                key={`${review.author}-${review.quote}`}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <p className="text-lg leading-8 text-white">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm text-gray-400">
                  {review.author} · {review.source}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-12">
            <HeroDownloadActions locale={locale} className="items-center" />
          </div>
        </section>

        <section className="py-20">
          <SectionLabel>{copy.languagesEyebrow}</SectionLabel>
          <h2 className="mt-6 max-w-4xl text-4xl font-light text-white md:text-5xl">
            {copy.languagesTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
            {copy.languagesDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {languageLinks.map((language) => (
              <Link
                key={language.href}
                href={localizedHref(language.href)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/40"
              >
                {t(language.labelKey, locale)}
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
        </section>

        <section id="all-downloads" className="py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>{copy.bottomEyebrow}</SectionLabel>
            <h2 className="mt-6 text-4xl font-light text-white md:text-5xl">
              {copy.bottomTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {copy.bottomDescription}
            </p>
          </div>

          <div className="mt-10">
            <AllDownloadButtons locale={locale} />
          </div>
          <p className="mt-4 text-sm text-gray-500">{t("footer", locale)}</p>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-300">
      {children}
    </span>
  );
}

function MetricCard({ metric }: { metric: HomeMetric }) {
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 backdrop-blur-sm">
      <div className="text-3xl font-semibold leading-[1.02] tracking-tight text-white md:text-[2rem]">
        {metric.value}
      </div>
      <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.26em] text-gray-400">
        {metric.label}
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-400">{metric.detail}</p>
    </div>
  );
}

function MockWindow({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#05070c]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accent}`} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500">
            {title}
          </div>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

function HeroBenefitCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <h3 className="text-xl font-semibold leading-tight text-white md:text-[1.65rem]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-gray-300">{description}</p>
    </div>
  );
}

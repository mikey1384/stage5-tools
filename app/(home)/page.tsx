import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { AllDownloadButtons } from "../../components/AllDownloadButtons";
import { HeroDownloadActions } from "../../components/HeroDownloadActions";
import { GitHubRepositoryLink } from "../../components/GitHubRepositoryLink";
import { HomepageScreenshotSlot } from "../../components/HomepageScreenshotSlot";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { HOME_LOCALIZED_LOCALES } from "../../lib/locales";
import { localizePathForLocale } from "../../lib/locale-routing";
import {
  openSourceProofCopy,
  TRANSLATOR_REPOSITORY_URL,
} from "../../lib/open-source";
import { productHuntReviews } from "../../lib/reviews";
import { t, type Locale } from "../../lib/strings";

import { getHomeMetadata, getHomeSeoContext, homeCopy } from "./home-copy";
import { homeExperienceCopy } from "./home-experience-copy";

const screenshots = {
  hero: {
    src: "/screenshots/subtitle-display-translation-only-2026-08.webp",
    width: 2400,
    height: 1600,
  },
  multitab: {
    src: "/screenshots/multitab-workspace-2026-08.webp",
    width: 2400,
    height: 1440,
  },
  originalClassic: {
    src: "/screenshots/subtitle-display-original-classic-2026-08.webp",
    width: 2400,
    height: 1600,
  },
  dualLineBox: {
    src: "/screenshots/subtitle-display-dual-linebox-2026-08.webp",
    width: 2400,
    height: 1600,
  },
  library: {
    src: "/screenshots/download-library-2026-08.webp",
    width: 2400,
    height: 1600,
  },
  source: {
    src: "/screenshots/video-downloader-workflow-editorial-2026-08.webp",
    width: 1920,
    height: 1080,
  },
  editor: {
    src: "/screenshots/subtitle-editor-workflow-editorial-2026-08.webp",
    width: 1920,
    height: 1080,
  },
  clips: {
    src: "/screenshots/highlight-clips-editorial-2026-08.webp",
    width: 1920,
    height: 1080,
  },
} as const;

function getHomeStructuredData(locale: Locale) {
  const { copy, canonicalUrl } = getHomeSeoContext(locale);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Translator",
    alternateName: "Stage5 Translator",
    url: canonicalUrl,
    inLanguage: [...HOME_LOCALIZED_LOCALES],
    description: copy.metadataDescription,
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "AI video translation and subtitle editing",
    operatingSystem: "macOS, Windows",
    image:
      "https://translator.tools/translator-social-card-editorial-2026-08.png",
    screenshot: [
      "https://translator.tools/screenshots/subtitle-display-translation-only-2026-08.webp",
      "https://translator.tools/screenshots/multitab-workspace-2026-08.webp",
      "https://translator.tools/screenshots/subtitle-display-original-classic-2026-08.webp",
      "https://translator.tools/screenshots/subtitle-display-dual-linebox-2026-08.webp",
      "https://translator.tools/screenshots/download-library-2026-08.webp",
      "https://translator.tools/screenshots/subtitle-editor-workflow-editorial-2026-08.webp",
      "https://translator.tools/screenshots/video-downloader-workflow-editorial-2026-08.webp",
      "https://translator.tools/screenshots/highlight-clips-editorial-2026-08.webp",
    ],
    featureList: [
      "Download or import internet videos",
      "Open multiple independent video workspaces in browser-style tabs",
      "Keep background jobs running with visible progress and completion states",
      "AI transcription and two-pass subtitle translation",
      "Translate subtitles into 39 languages",
      "Review original and translated subtitles against the video",
      "Show the original transcript, translated subtitles, or both",
      "Choose Default, Classic, Boxed, or LineBox subtitle styles",
      "Edit subtitle wording and timing",
      "Keep downloaded videos in a reusable in-app library",
      "Export SRT files or videos with burned-in subtitles",
      "Create AI dubbing and highlight clips",
      "Control the source build through a local MCP interface for LLM agents",
      "Use Stage5 credits or supported bring-your-own API keys",
    ],
    isAccessibleForFree: true,
    downloadUrl: [
      "https://downloads.stage5.tools/mac/latest/Translator-arm64.dmg",
      "https://downloads.stage5.tools/mac/latest/Translator-x64.dmg",
      "https://downloads.stage5.tools/win/latest/Translator-x64.exe",
    ],
    license: "https://github.com/mikey1384/translator/blob/master/LICENSE",
    sameAs: [TRANSLATOR_REPOSITORY_URL],
    subjectOf: {
      "@type": "SoftwareSourceCode",
      name: "Stage5 Translator source code",
      codeRepository: TRANSLATOR_REPOSITORY_URL,
      license: "https://github.com/mikey1384/translator/blob/master/LICENSE",
      programmingLanguage: ["TypeScript", "JavaScript"],
      runtimePlatform: "Electron",
    },
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
        "Free desktop app with free core video and subtitle tools. Optional AI features use Stage5 credits or supported bring-your-own provider accounts.",
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
  const experience = homeExperienceCopy[locale];
  const openSourceCopy = openSourceProofCopy[locale];
  const localizedHref = (href: string) => localizePathForLocale(locale, href);
  const structuredData = getHomeStructuredData(locale);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07080a] text-[#f3f1e9] selection:bg-[#ff5a9d] selection:text-black">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <SiteNav locale={locale} />

        <section className="pb-20 pt-8 md:pb-28 md:pt-12">
          <div className="border-t border-white/20 pt-5">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
              <span>Stage5 / Translator</span>
              <span>macOS + Windows</span>
            </div>
          </div>

          <div className="mt-12 grid gap-10 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.55fr)] xl:items-end">
            <div>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <h1 className="mt-7 max-w-[1120px] font-[var(--font-montserrat)] text-[clamp(3.55rem,8.6vw,8.7rem)] font-bold leading-[0.88] tracking-[-0.065em] text-[#f3f1e9]">
                {copy.title}
              </h1>
            </div>

            <div className="border-l border-white/20 pl-6 xl:mb-2 xl:pl-8">
              <p className="max-w-xl text-lg leading-8 text-white/72 md:text-xl">
                {copy.subtitle}
              </p>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
              <p className="mt-5 max-w-lg text-sm leading-6 text-white/48">
                {copy.heroNote}{" "}
                <Link
                  href={localizedHref("/pricing")}
                  className="font-semibold text-[#a9bfff] underline decoration-[#a9bfff]/40 underline-offset-4 transition hover:text-white"
                >
                  {copy.heroPricingLink}
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-14 border-y border-white/20 py-4 md:mt-20">
            <div className="grid gap-4 md:grid-cols-4 md:gap-0">
              {copy.heroPoints.map((point, index) => (
                <div
                  key={point}
                  className="grid grid-cols-[2rem_1fr] gap-3 py-2 md:border-l md:border-white/15 md:px-5 md:first:border-l-0 md:first:pl-0"
                >
                  <span className="font-mono text-xs text-[#ff75ac]">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-6 text-white/70">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <figure className="mt-8 md:mt-12">
            <ProductFrame label={copy.mockSearchTag} tone="blue">
              <HomepageScreenshotSlot
                src={screenshots.hero.src}
                alt={experience.heroAlt}
                width={screenshots.hero.width}
                height={screenshots.hero.height}
                loading="eager"
                fetchPriority="high"
                className="bg-[#172032]"
                imageClassName="block h-auto w-full"
                fallback={<ScreenshotFallback label={copy.mockSearchQuery} />}
              />
            </ProductFrame>
            <figcaption className="mt-4 grid gap-2 border-b border-white/20 pb-8 text-sm leading-6 text-white/48 md:grid-cols-[1fr_auto]">
              <span>{experience.heroCaption}</span>
              <span className="font-mono uppercase tracking-[0.2em] text-white/35">
                Translation only / current app
              </span>
            </figcaption>
          </figure>

          <div className="mt-10 grid border-y border-white/20 md:grid-cols-[0.78fr_1.22fr]">
            <div className="py-8 md:border-r md:border-white/20 md:pr-8">
              <Eyebrow>{experience.displayEyebrow}</Eyebrow>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                {experience.displayTitle}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/52 md:text-base">
                {experience.displayDescription}
              </p>
            </div>
            <div className="grid md:grid-cols-3">
              {experience.displayModes.map((mode, index) => (
                <div
                  key={mode.label}
                  className="border-t border-white/15 py-7 md:border-l md:border-t-0 md:px-6"
                >
                  <span className="font-mono text-[10px] text-[#ff75ac]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {mode.label}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {mode.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid border-b border-white/20 md:grid-cols-4">
            {copy.metrics.map((metric, index) => (
              <div
                key={`${metric.value}-${metric.label}`}
                className="py-8 md:border-l md:border-white/15 md:px-6 md:first:border-l-0 md:first:pl-0"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[10px] text-white/30">
                    0{index + 1}
                  </span>
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {metric.label}
                </div>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/20 py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="lg:sticky lg:top-10 lg:self-start">
              <Eyebrow>{copy.sellingEyebrow}</Eyebrow>
              <h2 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                {copy.sellingTitle}
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/58">
                {copy.sellingDescription}
              </p>
            </div>

            <div className="border-t border-white/20">
              {copy.sellingPoints.map((point, index) => (
                <article
                  key={point.title}
                  className="group grid gap-5 border-b border-white/20 py-8 md:grid-cols-[4rem_1fr_auto] md:items-start"
                >
                  <span className="font-mono text-xs text-[#ff75ac]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white md:text-3xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-white/52">
                      {point.description}
                    </p>
                  </div>
                  <Link
                    href={localizedHref(point.href)}
                    className="text-sm font-semibold text-[#a9bfff] transition group-hover:translate-x-1 group-hover:text-white"
                  >
                    {point.cta} →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <figure>
              <ProductFrame label={copy.sellingPoints[0].title} tone="pink">
                <HomepageScreenshotSlot
                  src={screenshots.source.src}
                  alt={copy.sellingPoints[0].title}
                  width={screenshots.source.width}
                  height={screenshots.source.height}
                  className="bg-[#111724]"
                  imageClassName="block h-auto w-full"
                  fallback={
                    <ScreenshotFallback label={copy.sellingPoints[0].title} />
                  }
                />
              </ProductFrame>
            </figure>

            <figure className="lg:mt-28">
              <ProductFrame label={copy.sellingPoints[2].title} tone="blue">
                <HomepageScreenshotSlot
                  src={screenshots.editor.src}
                  alt={copy.sellingPoints[2].title}
                  width={screenshots.editor.width}
                  height={screenshots.editor.height}
                  className="bg-[#111724]"
                  imageClassName="block h-auto w-full"
                  fallback={
                    <ScreenshotFallback label={copy.sellingPoints[2].title} />
                  }
                />
              </ProductFrame>
            </figure>
          </div>
        </section>
      </div>

      <section className="bg-[#ece8de] text-[#101114]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 md:px-8 md:py-32">
          <div
            id="multitab"
            className="grid scroll-mt-10 gap-12 border-t border-black/25 pt-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
          >
            <div>
              <Eyebrow dark>{copy.viewerEyebrow}</Eyebrow>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                {copy.viewerTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-black/62">
                {copy.viewerDescription}
              </p>
            </div>

            <figure className="border border-black/20 bg-[#090d14] p-2 md:p-3">
              <HomepageScreenshotSlot
                src={screenshots.multitab.src}
                alt={copy.viewerAlt}
                width={screenshots.multitab.width}
                height={screenshots.multitab.height}
                className="overflow-hidden border border-white/15 bg-[#141b26] shadow-[0_32px_80px_rgba(0,0,0,0.34)]"
                imageClassName="block h-auto w-full"
                fallback={<ScreenshotFallback label={copy.viewerWindowTitle} />}
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm leading-6 text-white/55">
                {copy.viewerScreenshotCaption}
              </figcaption>
            </figure>
          </div>

          <div className="mt-16 border-t border-black/25 pt-8 md:mt-20">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <Eyebrow dark>{experience.stylesEyebrow}</Eyebrow>
                <h2 className="mt-6 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                  {experience.stylesTitle}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-black/62">
                  {experience.stylesDescription}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <figure className="border border-black/20 bg-[#10151f] p-2 md:p-3">
                  <HomepageScreenshotSlot
                    src={screenshots.originalClassic.src}
                    alt={experience.classicCaption}
                    width={screenshots.originalClassic.width}
                    height={screenshots.originalClassic.height}
                    className="overflow-hidden border border-white/10 bg-[#141b26]"
                    imageClassName="block h-auto w-full"
                    fallback={
                      <ScreenshotFallback label={experience.classicCaption} />
                    }
                  />
                  <figcaption className="px-2 pb-1 pt-3 text-sm leading-6 text-white/58">
                    {experience.classicCaption}
                  </figcaption>
                </figure>
                <figure className="border border-black/20 bg-[#10151f] p-2 md:mt-10 md:p-3">
                  <HomepageScreenshotSlot
                    src={screenshots.dualLineBox.src}
                    alt={experience.dualCaption}
                    width={screenshots.dualLineBox.width}
                    height={screenshots.dualLineBox.height}
                    className="overflow-hidden border border-white/10 bg-[#141b26]"
                    imageClassName="block h-auto w-full"
                    fallback={
                      <ScreenshotFallback label={experience.dualCaption} />
                    }
                  />
                  <figcaption className="px-2 pb-1 pt-3 text-sm leading-6 text-white/58">
                    {experience.dualCaption}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-black/25 pt-8 md:mt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <figure className="order-2 border border-black/20 bg-[#10151f] p-2 lg:order-1 md:p-3">
              <HomepageScreenshotSlot
                src={screenshots.library.src}
                alt={experience.libraryCaption}
                width={screenshots.library.width}
                height={screenshots.library.height}
                className="overflow-hidden border border-white/10 bg-[#141b26]"
                imageClassName="block h-auto w-full"
                fallback={
                  <ScreenshotFallback label={experience.libraryTitle} />
                }
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm leading-6 text-white/58">
                {experience.libraryCaption}
              </figcaption>
            </figure>
            <div className="order-1 lg:order-2">
              <Eyebrow dark>{experience.libraryEyebrow}</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                {experience.libraryTitle}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/62">
                {experience.libraryDescription}
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 border-t border-black/25 pt-8 md:mt-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <figure className="order-2 border border-black/20 bg-[#121826] p-2 md:order-1 md:p-3">
              <HomepageScreenshotSlot
                src={screenshots.clips.src}
                alt={copy.actionAlt}
                width={screenshots.clips.width}
                height={screenshots.clips.height}
                className="overflow-hidden"
                imageClassName="block h-auto w-full"
                fallback={<ScreenshotFallback label={copy.actionWindowTitle} />}
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm leading-6 text-white/55">
                {copy.actionScreenshotCaption}
              </figcaption>
            </figure>

            <div className="order-1 md:order-2">
              <Eyebrow dark>{copy.actionEyebrow}</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                {copy.actionTitle}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/62">
                {copy.actionDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <section className="py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <div>
              <Eyebrow>{copy.comparisonEyebrow}</Eyebrow>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                {copy.comparisonTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
                {copy.comparisonDescription}
              </p>
            </div>

            <div className="border-t border-white/25">
              <div className="grid grid-cols-2 border-b border-white/25 py-4 text-[10px] font-semibold uppercase tracking-[0.2em]">
                <span className="pr-5 text-white/35">{copy.typicalLabel}</span>
                <span className="border-l border-white/20 pl-5 text-[#a9bfff]">
                  {copy.translatorLabel}
                </span>
              </div>
              {copy.comparisonRows.map((row, index) => (
                <div
                  key={`${row.typical}-${row.translator}`}
                  className="grid grid-cols-2 border-b border-white/20 py-7 text-sm leading-7 md:text-base"
                >
                  <div className="pr-5 text-white/34">
                    <span className="mr-3 font-mono text-[10px]">
                      0{index + 1}
                    </span>
                    {row.typical}
                  </div>
                  <div className="border-l border-white/20 pl-5 text-white/80">
                    {row.translator}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/20 py-16 md:py-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>{copy.socialEyebrow}</Eyebrow>
              <h2 className="mt-6 max-w-5xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                {copy.socialTitle}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/55">
                {copy.socialDescription}
              </p>
            </div>
            <a
              href="https://www.producthunt.com/products/translator-3"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold text-[#a9bfff] underline decoration-[#a9bfff]/40 underline-offset-4 transition hover:text-white"
            >
              {copy.productHuntLinkLabel}
            </a>
          </div>

          <div className="mt-10 grid border-t border-white/20 lg:grid-cols-3">
            {productHuntReviews.map((review, index) => (
              <blockquote
                key={`${review.author}-${review.quote}`}
                className="border-b border-white/20 py-8 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="font-mono text-xs text-[#ff75ac]">
                  0{index + 1}
                </span>
                <p className="mt-5 text-xl leading-8 tracking-[-0.02em] text-white md:text-2xl">
                  “{review.quote}”
                </p>
                <footer className="mt-7 text-sm text-white/40">
                  {review.author} / {review.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="agents" className="scroll-mt-8 border-b border-white/20 py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div>
              <Eyebrow>{experience.agentEyebrow}</Eyebrow>
              <h2 className="mt-6 max-w-5xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                {experience.agentTitle}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/55">
                {experience.agentDescription}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/agents"
                  className="inline-flex items-center justify-center border border-[#ff75ac] bg-[#ff75ac] px-6 py-3 text-sm font-semibold text-black transition hover:border-white hover:bg-white"
                >
                  {experience.agentCta} →
                </Link>
                <Link
                  href={localizedHref("/#all-downloads")}
                  className="text-sm font-semibold text-white/65 underline decoration-white/25 underline-offset-4 transition hover:text-white"
                >
                  {t("navDownload", locale)} ↓
                </Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 font-mono text-[11px] text-white/42">
                <a className="underline underline-offset-4 hover:text-white" href="/llms.txt">
                  llms.txt
                </a>
                <a className="underline underline-offset-4 hover:text-white" href="/llms-full.txt">
                  llms-full.txt
                </a>
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href="/agent-manifest.json"
                >
                  agent-manifest.json
                </a>
              </div>
            </div>
            <ol className="border-t border-white/25 lg:border-l lg:border-t-0 lg:pl-10">
              {experience.agentPoints.map((point, index) => (
                <li
                  key={point}
                  className="grid grid-cols-[2.25rem_1fr] gap-4 border-b border-white/15 py-7 text-sm leading-7 text-white/65"
                >
                  <span className="font-mono text-[10px] text-[#ff75ac]">
                    0{index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-white/20 py-16 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div>
              <Eyebrow>{openSourceCopy.eyebrow}</Eyebrow>
              <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                {openSourceCopy.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/55">
                {openSourceCopy.description}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <GitHubRepositoryLink
                  label={openSourceCopy.repositoryCta}
                  placement="homepage_open_source_section"
                  className="inline-flex items-center justify-center border border-[#a9bfff] bg-[#a9bfff] px-6 py-3 text-sm font-semibold text-black transition hover:border-white hover:bg-white"
                >
                  {openSourceCopy.repositoryCta} ↗
                </GitHubRepositoryLink>
                <Link
                  href={localizedHref("/open-source")}
                  className="text-sm font-semibold text-white/65 underline decoration-white/25 underline-offset-4 transition hover:text-white"
                >
                  {openSourceCopy.detailsCta} →
                </Link>
              </div>
            </div>

            <div className="border-t border-white/25 lg:border-l lg:border-t-0 lg:pl-10">
              <div className="flex items-center justify-between border-b border-white/15 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/38">
                <span>github.com</span>
                <span>public / MIT</span>
              </div>
              <div className="break-all border-b border-white/15 py-7 font-mono text-sm leading-7 text-[#a9bfff]">
                github.com/mikey1384/translator
              </div>
              <ol className="divide-y divide-white/15">
                {openSourceCopy.facts.map((fact, index) => (
                  <li
                    key={fact}
                    className="grid grid-cols-[2rem_1fr] gap-4 py-5 text-sm leading-6 text-white/65"
                  >
                    <span className="font-mono text-[10px] text-[#ff75ac]">
                      0{index + 1}
                    </span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <Eyebrow>{copy.languagesEyebrow}</Eyebrow>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl">
                {copy.languagesTitle}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
                {copy.languagesDescription}
              </p>
            </div>

            <div className="border-t border-white/25 pt-8">
              <div className="flex flex-wrap gap-x-7 gap-y-5">
                {languageLinks.map((language) => (
                  <Link
                    key={language.href}
                    href={localizedHref(language.href)}
                    className="text-2xl font-semibold tracking-[-0.03em] text-white underline decoration-white/20 underline-offset-8 transition hover:text-[#a9bfff] md:text-4xl"
                  >
                    {t(language.labelKey, locale)}
                  </Link>
                ))}
              </div>
              <div className="mt-12 flex flex-wrap gap-x-5 gap-y-3 text-sm leading-7 text-white/40">
                {otherLanguages.map((langKey) => (
                  <span key={langKey}>{t(langKey, locale)}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="all-downloads" className="bg-[#a9bfff] text-[#0b0c10]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 text-center md:px-8 md:py-32">
          <Eyebrow dark>{copy.bottomEyebrow}</Eyebrow>
          <h2 className="mx-auto mt-7 max-w-6xl text-6xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-8xl lg:text-9xl">
            {copy.bottomTitle}
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/60">
            {copy.bottomDescription}
          </p>
          <div className="mt-10">
            <AllDownloadButtons locale={locale} surface="light" />
          </div>
          <p className="mt-5 text-sm text-black/45">{t("footer", locale)}</p>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] ${
        dark ? "text-black/48" : "text-white/45"
      }`}
    >
      <span className={`h-px w-8 ${dark ? "bg-black/35" : "bg-[#ff75ac]"}`} />
      <span>{children}</span>
    </div>
  );
}

function ProductFrame({
  label,
  tone,
  children,
}: {
  label: string;
  tone: "blue" | "pink";
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden border border-white/20 bg-[#10141d] shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
      <div className="flex items-center justify-between border-b border-white/15 bg-[#0b0d12] px-4 py-3">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/28" />
          <span className="h-2 w-2 rounded-full bg-white/16" />
          <span
            className={`h-2 w-2 rounded-full ${tone === "blue" ? "bg-[#a9bfff]" : "bg-[#ff75ac]"}`}
          />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/38">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function ScreenshotFallback({ label }: { label: string }) {
  return (
    <div className="flex min-h-[360px] items-end bg-[#121826] p-8 text-xl text-white">
      {label}
    </div>
  );
}

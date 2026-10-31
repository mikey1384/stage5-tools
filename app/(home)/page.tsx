import Link from "next/link";
import type { Metadata } from "next";
import { AllDownloadButtons } from "../../components/AllDownloadButtons";
import { HeroDownloadActions } from "../../components/HeroDownloadActions";
import { GitHubRepositoryLink } from "../../components/GitHubRepositoryLink";
import { HomeIntentLinks } from "../../components/HomeIntentLinks";
import { HeroLanguageShowcase } from "../../components/home/HeroLanguageShowcase";
import { HomepageScreenshotSlot } from "../../components/HomepageScreenshotSlot";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { Stage5Home, getStage5HomeMetadata } from "../../components/Stage5Home";
import { getSite } from "../../lib/get-site";
import { getLocale } from "../../lib/get-locale";
import { serializeJsonLd } from "../../lib/json-ld";
import { HOME_LOCALIZED_LOCALES } from "../../lib/locales";
import { localizePathForLocale } from "../../lib/locale-routing";
import {
  openSourceProofCopy,
  TRANSLATOR_REPOSITORY_URL,
} from "../../lib/open-source";
import { productHuntReviews } from "../../lib/reviews";
import type { Locale } from "../../lib/strings";

import { getHomeMetadata, getHomeSeoContext, homeCopy } from "./home-copy";
import { homeExperienceCopy } from "./home-experience-copy";
import { homeSoulCopy } from "./home-soul-copy";

const screenshots = {
  hero: {
    src: "/screenshots/player-ko-2026-10.webp",
    width: 2400,
    height: 1600,
  },
  multitab: {
    src: "/screenshots/tabs-workspace-2026-10.webp",
    width: 2400,
    height: 1744,
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
    src: "/screenshots/clips-shorts-2026-10.webp",
    width: 2304,
    height: 1752,
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
      "https://translator.tools/screenshots/player-ko-2026-10.webp",
      "https://translator.tools/screenshots/tabs-workspace-2026-10.webp",
      "https://translator.tools/screenshots/subtitle-display-original-classic-2026-08.webp",
      "https://translator.tools/screenshots/subtitle-display-dual-linebox-2026-08.webp",
      "https://translator.tools/screenshots/download-library-2026-08.webp",
      "https://translator.tools/screenshots/subtitle-editor-workflow-editorial-2026-08.webp",
      "https://translator.tools/screenshots/video-downloader-workflow-editorial-2026-08.webp",
      "https://translator.tools/screenshots/clips-shorts-2026-10.webp",
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
      "Control the installed app through packaged MCP / Agent Control for LLM agents",
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
      url: "https://stage5.tools",
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

// All 39 subtitle languages in their own script. Languages with a dedicated
// landing page link to it.
const nativeLanguages: ReadonlyArray<{
  native: string;
  lang: string;
  href?: string;
}> = [
  { native: "English", lang: "en" },
  { native: "한국어", lang: "ko", href: "/translate/korean" },
  { native: "日本語", lang: "ja", href: "/translate/japanese" },
  { native: "简体中文", lang: "zh-Hans", href: "/translate/chinese" },
  { native: "繁體中文", lang: "zh-Hant", href: "/translate/chinese" },
  { native: "Tiếng Việt", lang: "vi" },
  { native: "Español", lang: "es", href: "/translate/spanish" },
  { native: "Français", lang: "fr", href: "/translate/french" },
  { native: "Deutsch", lang: "de", href: "/translate/german" },
  { native: "Italiano", lang: "it" },
  { native: "Português", lang: "pt", href: "/translate/portuguese" },
  { native: "Русский", lang: "ru" },
  { native: "Nederlands", lang: "nl" },
  { native: "Polski", lang: "pl" },
  { native: "Svenska", lang: "sv" },
  { native: "Türkçe", lang: "tr" },
  { native: "Norsk", lang: "no" },
  { native: "Dansk", lang: "da" },
  { native: "Suomi", lang: "fi" },
  { native: "Ελληνικά", lang: "el" },
  { native: "Čeština", lang: "cs" },
  { native: "Magyar", lang: "hu" },
  { native: "Română", lang: "ro" },
  { native: "Українська", lang: "uk" },
  { native: "हिन्दी", lang: "hi" },
  { native: "Bahasa Indonesia", lang: "id" },
  { native: "ไทย", lang: "th" },
  { native: "Bahasa Melayu", lang: "ms" },
  { native: "Tagalog", lang: "tl" },
  { native: "বাংলা", lang: "bn" },
  { native: "தமிழ்", lang: "ta" },
  { native: "తెలుగు", lang: "te" },
  { native: "मराठी", lang: "mr" },
  { native: "اردو", lang: "ur" },
  { native: "العربية", lang: "ar" },
  { native: "עברית", lang: "he" },
  { native: "فارسی", lang: "fa" },
  { native: "Kiswahili", lang: "sw" },
  { native: "Afrikaans", lang: "af" },
];

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return (await getSite()) === "stage5" ? getStage5HomeMetadata(locale) : getHomeMetadata(locale);
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  if ((await getSite()) === "stage5") return <Stage5Home locale={locale} />;
  const copy = homeCopy[locale];
  const experience = homeExperienceCopy[locale];
  const openSourceCopy = openSourceProofCopy[locale];
  const localizedHref = (href: string) => localizePathForLocale(locale, href);
  const structuredData = getHomeStructuredData(locale);
  const sellingPointLabel = (href: string) =>
    copy.sellingPoints.find((point) => point.href === href)?.cta ??
    copy.heroFaqLink;
  const homeIntentLinks = [
    {
      destination: "translate" as const,
      href: localizedHref("/translate"),
      label: sellingPointLabel("/translate"),
    },
    {
      destination: "video_downloader" as const,
      href: localizedHref("/video-downloader"),
      label: sellingPointLabel("/video-downloader"),
    },
    {
      destination: "faq" as const,
      href: localizedHref("/faq"),
      label: copy.heroFaqLink,
    },
  ];

  const soul = homeSoulCopy[locale];
  const featureHrefs = [
    "/video-downloader",
    "/translate",
    "/subtitle-editor",
    "/dubbing",
    "/#clips",
    "/video-discovery",
    "/#multitab",
    "/agents",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0F0E13] font-[family-name:var(--font-body)] text-[#F4F1EA] [&:lang(ko)]:[word-break:keep-all] selection:bg-[#FFD84D] selection:text-[#17140A]">
      <script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />

      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <SiteNav locale={locale} />

        <section className="flex flex-col gap-12 pb-20 pt-6 lg:flex-row lg:items-center lg:gap-14 lg:pb-24 lg:pt-12">
          <div className="flex min-w-0 flex-1 flex-col gap-6 lg:max-w-[540px]">
            <SoulEyebrow>{copy.eyebrow}</SoulEyebrow>
            <h1 className="m-0 font-[family-name:var(--font-display)] text-[clamp(2.5rem,5.6vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.035em] [overflow-wrap:anywhere] [&:lang(de)]:hyphens-auto">
              {soul.heroTitleBefore}
              <span className="text-[#FFD84D]">{soul.heroTitleHighlight}</span>
              {soul.heroTitleAfter}
            </h1>
            <p className="m-0 max-w-[34rem] text-lg leading-8 text-[#B7B2BF] md:text-xl">
              {soul.heroSubtitle}
            </p>
            <HeroDownloadActions locale={locale} className="items-start" />
            <p className="m-0 max-w-lg text-sm leading-6 text-[#A39FAD]">
              {soul.heroNote}{" "}
              <Link
                href={localizedHref("/pricing")}
                className="font-semibold text-[#FFD84D] underline decoration-[#FFD84D]/40 underline-offset-4 transition hover:text-[#FFE680]"
              >
                {copy.heroPricingLink}
              </Link>
            </p>
            <HomeIntentLinks links={homeIntentLinks} />
          </div>
          <div className="min-w-0 flex-1">
            <HeroLanguageShowcase
              image={{
                src: screenshots.hero.src,
                width: screenshots.hero.width,
                height: screenshots.hero.height,
                alt: experience.heroAlt,
              }}
            />
            <FilmCredit />
          </div>
        </section>

        <SoulSection>
          <SoulHeading>{soul.momentsTitle}</SoulHeading>
          <ol className="m-0 grid list-none gap-5 p-0 md:grid-cols-3">
            {soul.moments.map((moment, index) => (
              <li
                key={moment.title}
                className="flex flex-col gap-3 rounded-[22px] border border-[#25222C] bg-[#15131A] p-6"
              >
                <span className="font-[family-name:var(--font-display)] text-[44px] font-extrabold leading-none text-[#FFD84D]">
                  {index + 1}
                </span>
                <span className="text-xl font-semibold">{moment.title}</span>
                <span className="text-base leading-7 text-[#A39FAD]">
                  {moment.body}
                </span>
              </li>
            ))}
          </ol>
          <p className="mb-0 mt-6 max-w-4xl text-base leading-7 text-[#D9D5CE]">
            {soul.mostSitesLine}{" "}
            <Link
              href={localizedHref("/video-downloader")}
              className="whitespace-nowrap font-semibold text-[#FFD84D] underline decoration-[#FFD84D]/40 underline-offset-4 transition hover:text-[#FFE680]"
            >
              {soul.mostSitesCta} →
            </Link>
          </p>
          <p className="mb-0 mt-3 max-w-4xl text-sm leading-6 text-[#A39FAD]">
            {soul.webVideoNote}
          </p>
        </SoulSection>

        <SoulSection>
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <SoulHeading flush>{soul.featuresTitle}</SoulHeading>
            <span className="text-base text-[#A39FAD]">
              {soul.featuresSubtitle}
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {soul.features.map((feature, index) => (
              <Link
                key={feature.title}
                href={localizedHref(featureHrefs[index])}
                className="group flex flex-col gap-2.5 rounded-[20px] border border-[#25222C] bg-[#15131A] p-6 text-[#F4F1EA] transition hover:-translate-y-0.5 hover:border-[#4A4553] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD84D]"
              >
                <span className="text-lg font-semibold">{feature.title}</span>
                <span className="text-[15px] leading-6 text-[#A39FAD]">
                  {feature.body}
                </span>
                <span className="mt-auto pt-1 text-sm font-semibold text-[#FFD84D]">
                  {feature.cta} →
                </span>
              </Link>
            ))}
          </div>
        </SoulSection>

        <SoulSection id="multitab">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SoulEyebrow>{copy.viewerEyebrow}</SoulEyebrow>
              <SoulHeading>{copy.viewerTitle}</SoulHeading>
              <p className="m-0 max-w-xl text-base leading-7 text-[#A39FAD]">
                {copy.viewerDescription}
              </p>
            </div>
            <figure className="m-0">
              <SoulFrame>
                <HomepageScreenshotSlot
                  src={screenshots.multitab.src}
                  alt={copy.viewerAlt}
                  width={screenshots.multitab.width}
                  height={screenshots.multitab.height}
                  className="bg-[#1A1820]"
                  imageClassName="block h-auto w-full"
                  fallback={<ScreenshotFallback label={copy.viewerWindowTitle} />}
                />
              </SoulFrame>
              <figcaption className="mt-3 text-sm leading-6 text-[#8C8796]">
                {copy.viewerScreenshotCaption}
                <FilmCredit />
              </figcaption>
            </figure>
          </div>
        </SoulSection>

        <SoulSection id="clips">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <figure className="m-0 lg:order-1">
              <SoulFrame>
                <HomepageScreenshotSlot
                  src={screenshots.clips.src}
                  alt={copy.actionAlt}
                  width={screenshots.clips.width}
                  height={screenshots.clips.height}
                  className="bg-[#1A1820]"
                  imageClassName="block h-auto w-full"
                  fallback={<ScreenshotFallback label={copy.actionWindowTitle} />}
                />
              </SoulFrame>
              <figcaption className="mt-3 text-sm leading-6 text-[#8C8796]">
                {copy.actionScreenshotCaption}
                <FilmCredit />
              </figcaption>
            </figure>
            <div className="lg:order-2">
              <SoulEyebrow>{copy.actionEyebrow}</SoulEyebrow>
              <SoulHeading>{copy.actionTitle}</SoulHeading>
              <p className="m-0 max-w-xl text-base leading-7 text-[#A39FAD]">
                {copy.actionDescription}
              </p>
            </div>
          </div>
        </SoulSection>

        <SoulSection>
          <SoulEyebrow>{copy.languagesEyebrow}</SoulEyebrow>
          <SoulHeading>{copy.languagesTitle}</SoulHeading>
          <p className="m-0 mb-7 max-w-2xl text-base leading-7 text-[#A39FAD]">
            {copy.languagesDescription}
          </p>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {nativeLanguages.map((language) => (
              <li key={language.native}>
                {language.href ? (
                  <Link
                    href={localizedHref(language.href)}
                    lang={language.lang}
                    className="inline-block rounded-full border border-[#FFD84D]/60 px-4 py-2 text-[15px] text-[#F4F1EA] transition hover:border-[#FFD84D] hover:text-[#FFD84D]"
                  >
                    {language.native}
                  </Link>
                ) : (
                  <span
                    lang={language.lang}
                    className="inline-block rounded-full border border-[#2A2732] px-4 py-2 text-[15px] text-[#D9D5CE]"
                  >
                    {language.native}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </SoulSection>

        <SoulSection>
          <SoulHeading>{soul.pricingTitle}</SoulHeading>
          <div className="grid gap-4 md:grid-cols-3">
            {soul.pricing.map((card, index) => (
              <div
                key={card.value}
                className={`flex flex-col gap-2 rounded-[20px] border p-6 ${
                  index === 1 ? "border-[#FFD84D]" : "border-[#25222C]"
                }`}
              >
                <span
                  className={`font-[family-name:var(--font-display)] text-3xl font-extrabold ${
                    index === 1 ? "text-[#FFD84D]" : ""
                  }`}
                >
                  {card.value}
                </span>
                <span className="text-base leading-7 text-[#A39FAD]">
                  {card.body}
                </span>
              </div>
            ))}
          </div>
          <Link
            href={localizedHref("/pricing")}
            className="mt-5 inline-block text-[15px] font-semibold text-[#FFD84D] underline decoration-[#FFD84D]/40 underline-offset-4 hover:text-[#FFE680]"
          >
            {copy.heroPricingLink} →
          </Link>
        </SoulSection>

        <SoulSection>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SoulEyebrow>{copy.socialEyebrow}</SoulEyebrow>
              <SoulHeading flush>{copy.socialTitle}</SoulHeading>
              <p className="m-0 mt-4 max-w-3xl text-base leading-7 text-[#A39FAD]">
                {copy.socialDescription}
              </p>
            </div>
            <a
              href="https://www.producthunt.com/products/translator-3"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold text-[#FFD84D] underline decoration-[#FFD84D]/40 underline-offset-4 hover:text-[#FFE680]"
            >
              {copy.productHuntLinkLabel}
            </a>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {productHuntReviews.map((review) => (
              <blockquote
                key={`${review.author}-${review.quote}`}
                className="m-0 rounded-[20px] border border-[#25222C] bg-[#15131A] p-6"
              >
                <p className="m-0 text-lg leading-8 text-[#F4F1EA]">
                  “{review.quote}”
                </p>
                <footer className="mt-5 text-sm text-[#8C8796]">
                  {review.author} / {review.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </SoulSection>

        <SoulSection id="agents">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SoulEyebrow>{experience.agentEyebrow}</SoulEyebrow>
              <SoulHeading>{experience.agentTitle}</SoulHeading>
              <p className="m-0 max-w-2xl text-base leading-7 text-[#A39FAD]">
                {experience.agentDescription}
              </p>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/agents"
                  className="inline-flex items-center justify-center rounded-full border border-[#3A3644] bg-[#1F1C26] px-6 py-3 text-sm font-semibold text-[#F4F1EA] transition hover:border-[#FFD84D]"
                >
                  {experience.agentCta} →
                </Link>
                <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-[#8C8796]">
                  <a className="underline underline-offset-4 hover:text-[#F4F1EA]" href="/llms.txt">
                    llms.txt
                  </a>
                  <a className="underline underline-offset-4 hover:text-[#F4F1EA]" href="/llms-full.txt">
                    llms-full.txt
                  </a>
                  <a className="underline underline-offset-4 hover:text-[#F4F1EA]" href="/agent-manifest.json">
                    agent-manifest.json
                  </a>
                </div>
              </div>
            </div>
            <ol className="m-0 list-none divide-y divide-[#25222C] border-y border-[#25222C] p-0">
              {experience.agentPoints.map((point, index) => (
                <li
                  key={point}
                  className="grid grid-cols-[2rem_1fr] gap-3 py-5 text-[15px] leading-7 text-[#A39FAD]"
                >
                  <span className="font-[family-name:var(--font-display)] font-bold text-[#FFD84D]">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ol>
          </div>
        </SoulSection>

        <SoulSection>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <SoulEyebrow>{openSourceCopy.eyebrow}</SoulEyebrow>
              <SoulHeading flush>{openSourceCopy.title}</SoulHeading>
              <p className="m-0 mt-4 max-w-2xl text-base leading-7 text-[#A39FAD]">
                {openSourceCopy.description}
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
              <GitHubRepositoryLink
                label={openSourceCopy.repositoryCta}
                placement="homepage_open_source_section"
                className="inline-flex items-center justify-center rounded-full border border-[#3A3644] bg-[#1F1C26] px-6 py-3 text-sm font-semibold text-[#F4F1EA] transition hover:border-[#FFD84D]"
              >
                {openSourceCopy.repositoryCta} ↗
              </GitHubRepositoryLink>
              <Link
                href={localizedHref("/open-source")}
                className="text-sm font-semibold text-[#A39FAD] underline decoration-[#A39FAD]/40 underline-offset-4 hover:text-[#F4F1EA]"
              >
                {openSourceCopy.detailsCta} →
              </Link>
            </div>
          </div>
        </SoulSection>
      </div>

      <section
        id="all-downloads"
        className="border-t border-[#25222C] bg-[#15131A]"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 py-20 text-center md:px-8 md:py-28">
          <h2 className="m-0 max-w-[46rem] font-[family-name:var(--font-display)] text-[clamp(2.1rem,4.6vw,3.6rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
            {soul.closingTitle}
          </h2>
          <p className="m-0 max-w-2xl text-lg leading-8 text-[#A39FAD]">
            {copy.bottomDescription}
          </p>
          <AllDownloadButtons locale={locale} surface="dark" />
          <p className="m-0 text-sm text-[#8C8796]">{soul.closingNote}</p>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}

function SoulEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#FFD84D] [&:lang(ja)]:tracking-[0.04em] [&:lang(ko)]:tracking-[0.04em] [&:lang(zh)]:tracking-[0.04em]">
      {children}
    </div>
  );
}

function SoulHeading({
  children,
  flush = false,
}: {
  children: React.ReactNode;
  flush?: boolean;
}) {
  return (
    <h2
      className={`m-0 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.4vw,2.8rem)] font-bold leading-[1.08] tracking-[-0.03em] ${
        flush ? "" : "mb-7"
      }`}
    >
      {children}
    </h2>
  );
}

function SoulSection({
  id,
  children,
}: {
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-t border-[#25222C] py-16 md:py-20"
    >
      {children}
    </section>
  );
}

function SoulFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#2A2732] bg-[#1A1820]">
      {children}
    </div>
  );
}

function ScreenshotFallback({ label }: { label: string }) {
  return (
    <div className="flex min-h-[320px] items-end bg-[#1A1820] p-8 text-xl text-[#F4F1EA]">
      {label}
    </div>
  );
}

/** CC BY 3.0 attribution for the film stills in the screenshots. */
function FilmCredit() {
  return (
    <span className="mt-2 block text-xs leading-5 text-[#6F6A78]">
      Film:{" "}
      <a
        href="https://mango.blender.org"
        className="underline decoration-[#3A3644] underline-offset-2 hover:text-[#A39FAD]"
        rel="noopener"
      >
        Tears of Steel
      </a>{" "}
      © Blender Foundation, CC BY 3.0
    </span>
  );
}

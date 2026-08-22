import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { FeatureDownloadCta } from "../../../components/FeatureDownloadCta";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
import { YouTubeDemo } from "../../../components/YouTubeDemo";
import { getLocale } from "../../../lib/get-locale";
import {
  homeHrefForLocale,
  localizePathForLocale,
} from "../../../lib/locale-routing";
import { buildMetadata } from "../../../lib/seo";
import { getCatalogEntry, getAllCatalogSlugsSync } from "../../../lib/watch/catalog-loader";
import type { WatchLocale } from "../../../lib/watch";

// Enable on-demand rendering for new slugs from R2 without rebuild
export const dynamicParams = true;
export const revalidate = 60;

export function generateStaticParams() {
  // Pre-generate known slugs from bundled catalog as a warm set
  // New slugs from R2 will work via dynamicParams=true
  const slugs = getAllCatalogSlugsSync();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const video = await getCatalogEntry(slug);
  
  if (!video) {
    notFound();
  }

  const locale = await getLocale();
  const copy = video.copy[locale as WatchLocale];
  
  if (!copy) {
    notFound();
  }

  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: `/watch/${slug}`,
    keywords: copy.keywords,
    locale,
  });
}

export default async function WatchPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const searchParamsValue = await searchParams;
  const locale = await getLocale(searchParamsValue);
  
  const video = await getCatalogEntry(slug);
  
  if (!video) {
    notFound();
  }

  const copy = video.copy[locale as WatchLocale];
  
  if (!copy) {
    notFound();
  }

  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.h1,
    description: copy.description,
    url: `https://translator.tools${localizeHref(`/watch/${slug}`)}`,
    datePublished: video.datePublished,
    author: {
      "@type": "Organization",
      name: "Stage5 Tools",
    },
    publisher: {
      "@type": "Organization",
      name: "Stage5 Tools",
      url: "https://translator.tools",
    },
    about: video.structuredDataAbout || [],
  };

  const postCard = {
    slug: video.slug,
    title: video.copy.en.h1,
    language: video.language,
    topic: video.topic,
  };

  const freeLabel = copy.freeLabel || "Free:";
  const paidLabel = copy.paidLabel || "Paid:";
  const downloadLinkText = copy.downloadLinkText || "Learn about video downloading →";
  const ctaNote = copy.ctaNote || "Download and subtitle editing are free. AI transcription and translation require Stage5 credits or your own API key.";

  return (
    <main className="min-h-screen bg-black text-white">
      <Script
        id="article-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: "Home", href: homeHref },
            { label: "Watch", href: localizeHref("/watch") },
            { label: postCard.title },
          ]}
        />

        <article className="pb-24">
          <header className="mx-auto max-w-4xl pb-12 pt-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              <span>{postCard.language}</span>
              <span className="text-gray-700">·</span>
              <span>{postCard.topic}</span>
              <span className="text-gray-700">·</span>
              <span>{video.showName}</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              {copy.h1}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              {copy.intro}
            </p>
          </header>

          <div className="mx-auto max-w-4xl">
            <YouTubeDemo
              locale={locale}
              slug={slug}
              videoId={video.videoId}
              sourceLang={video.sourceLang}
              availableTracks={video.tracks}
              videoDownloaderHref={localizeHref("/video-downloader")}
              vttSlug={video.vttSlug}
            />

            <div className="prose prose-invert mt-12 max-w-none">
              <h2 className="text-3xl font-semibold text-white">
                {copy.section1Title}
              </h2>
              {copy.section1Body.map((paragraph, i) => (
                <p key={i} className="text-lg leading-8 text-gray-300">
                  {paragraph}
                </p>
              ))}

              <h2 className="mt-12 text-3xl font-semibold text-white">
                {copy.howToTitle}
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                {copy.howToBody}
              </p>

              <ol className="mt-6 space-y-4 text-lg leading-8 text-gray-300">
                {copy.howToSteps.map((step, i) => (
                  <li key={i}>
                    <strong className="text-white">{step.title}</strong> —{" "}
                    {step.body}
                  </li>
                ))}
              </ol>

              {copy.howToNote && (
                <p className="mt-6 text-base leading-7 text-gray-400">
                  {copy.howToNote}
                </p>
              )}

              <div className="mt-12 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-8">
                <h3 className="text-xl font-semibold text-white">
                  {copy.pricingTitle}
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-gray-300">
                  <li>
                    <strong className="text-white">{freeLabel}</strong>{" "}
                    {copy.pricingFree}
                  </li>
                  <li>
                    <strong className="text-white">{paidLabel}</strong>{" "}
                    {copy.pricingPaid}
                  </li>
                </ul>
              </div>

              {copy.contentTitle && (
                <>
                  <h2 className="mt-12 text-3xl font-semibold text-white">
                    {copy.contentTitle}
                  </h2>
                  {copy.contentBody && copy.contentBody.map((paragraph, i) => (
                    <p key={i} className="text-lg leading-8 text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </>
              )}

              <h2 className="mt-12 text-3xl font-semibold text-white">
                {copy.section2Title}
              </h2>
              {copy.section2Body.map((paragraph, i) => (
                <p key={i} className="text-lg leading-8 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 border-t border-white/10 pt-12">
              <h2 className="text-3xl font-semibold text-white">
                {copy.downloadTitle}
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                {copy.downloadBody}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={localizeHref("/video-downloader")}
                  className="inline-flex items-center justify-center rounded-xl border border-sky-500/50 bg-sky-500/10 px-6 py-3 text-base font-semibold text-sky-200 transition hover:border-sky-400 hover:bg-sky-500/20"
                >
                  {downloadLinkText}
                </Link>
              </div>
              <FeatureDownloadCta
                locale={locale}
                note={ctaNote}
                align="start"
                className="mt-8"
                watchContext={{
                  slug,
                  videoId: video.videoId,
                  sourceLang: video.sourceLang,
                  selectedLang: "off",
                  placement: "body",
                }}
              />
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-xl font-semibold text-white">
                {copy.aboutTitle}
              </h3>
              {copy.aboutBody.map((paragraph, i) => (
                <p key={i} className="mt-3 text-base leading-7 text-gray-400">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
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
import { posts } from "../posts";

const post = posts.find((p) => p.slug === "park-chan-wook-lee-dong-jin")!;

const copy: Record<string, { title: string; h1: string; intro: string }> = {
  en: {
    title: "Watch Park Chan-wook on Lee Dong-jin's Piarchia with English Subtitles | Translator",
    h1: "Watch Park Chan-wook Discuss Decision to Leave",
    intro: "Director Park Chan-wook discusses Decision to Leave with film critic Lee Dong-jin. A Korean-language interview about filmmaking, misunderstandings, and craft that English speakers rarely get to see.",
  },
  es: {
    title: "Ve a Park Chan-wook en Piarchia con Subtítulos | Translator",
    h1: "Park Chan-wook Habla Sobre Decision to Leave",
    intro: "El director Park Chan-wook discute Decision to Leave con el crítico de cine Lee Dong-jin. Una entrevista en coreano sobre cine, malentendidos y oficio.",
  },
  ko: {
    title: "박찬욱 감독의 이동진의 파이아키아 인터뷰 보기 | Translator",
    h1: "박찬욱 감독의 헤어질결심 이야기",
    intro: "박찬욱 감독이 영화평론가 이동진과 헤어질결심에 대해 이야기합니다. 영화 제작, 오해, 그리고 장인정신에 대한 한국어 인터뷰입니다.",
  },
  pt: {
    title: "Assista Park Chan-wook no Piarchia com Legendas | Translator",
    h1: "Park Chan-wook Fala Sobre Decision to Leave",
    intro: "O diretor Park Chan-wook discute Decision to Leave com o crítico de cinema Lee Dong-jin. Uma entrevista em coreano sobre cinema, mal-entendidos e ofício.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const localeCopy = copy[locale] || copy.en;
  return buildMetadata({
    title: localeCopy.title,
    description: localeCopy.intro,
    path: "/watch/park-chan-wook-lee-dong-jin",
    keywords: ["Park Chan-wook", "Decision to Leave", "Lee Dong-jin", "Korean film interview"],
    locale,
  });
}

export default async function ParkChanWookLeeDongJinPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const localeCopy = copy[locale] || copy.en;
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: localeCopy.h1,
    description: localeCopy.intro,
    url: `https://translator.tools${localizeHref("/watch/park-chan-wook-lee-dong-jin")}`,
    datePublished: "2026-08-21",
    author: { "@type": "Organization", name: "Stage5 Tools" },
    publisher: { "@type": "Organization", name: "Stage5 Tools", url: "https://translator.tools" },
    about: [
      { "@type": "Person", name: "Park Chan-wook", description: "Film director known for Oldboy, The Handmaiden, and Decision to Leave" },
      {
        "@type": "VideoObject",
        name: "박찬욱 감독에 대한 오해와 진실",
        description: "Interview with director Park Chan-wook about misunderstandings and Decision to Leave",
        uploadDate: "2022-06-15",
        contentUrl: "https://www.youtube.com/watch?v=5s7st9scmlo",
        embedUrl: "https://www.youtube.com/embed/5s7st9scmlo",
        inLanguage: "ko",
      },
    ],
  };

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
            { label: post.title },
          ]}
        />

        <article className="pb-24">
          <header className="mx-auto max-w-4xl pb-12 pt-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              <span>{post.language}</span>
              <span className="text-gray-700">·</span>
              <span>{post.topic}</span>
              <span className="text-gray-700">·</span>
              <span>Lee Dong-jin&apos;s Piarchia</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              {localeCopy.h1}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              {localeCopy.intro}
            </p>
          </header>

          <div className="mx-auto max-w-4xl">
            <YouTubeDemo
              locale={locale}
              slug={post.slug}
              videoId="5s7st9scmlo"
              sourceLang={post.sourceLang}
              availableTracks={post.tracks}
              videoDownloaderHref={localizeHref("/video-downloader")}
            />

            <div className="mt-16 border-t border-white/10 pt-12">
              <h2 className="text-3xl font-semibold text-white">
                Download Translator
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Translator works on macOS and Windows. Download the video and add translated subtitles.
              </p>
              <FeatureDownloadCta
                locale={locale}
                note="Download and subtitle editing are free. AI transcription and translation require Stage5 credits or your own API key."
                align="start"
                className="mt-8"
              />
            </div>
          </div>
        </article>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

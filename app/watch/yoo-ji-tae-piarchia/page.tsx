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

const post = posts.find((p) => p.slug === "yoo-ji-tae-piarchia")!;

const copy: Record<string, { title: string; h1: string; intro: string }> = {
  en: {
    title: "Watch Yoo Ji-tae on Lee Dong-jin's Piarchia with English Subtitles | Translator",
    h1: "Watch Yoo Ji-tae Discuss One Fine Spring Day and Oldboy",
    intro: "Actor Yoo Ji-tae discusses One Fine Spring Day and Oldboy with film critic Lee Dong-jin. A Korean-language interview about improvisation, love scenes, and creating Lee Woo-jin.",
  },
  es: {
    title: "Ve a Yoo Ji-tae en Piarchia con Subtítulos | Translator",
    h1: "Yoo Ji-tae Habla Sobre One Fine Spring Day y Oldboy",
    intro: "El actor Yoo Ji-tae discute One Fine Spring Day y Oldboy con el crítico de cine Lee Dong-jin. Una entrevista en coreano sobre improvisación, escenas de amor y la creación de Lee Woo-jin.",
  },
  ko: {
    title: "유지태 배우의 이동진의 파이아키아 인터뷰 보기 | Translator",
    h1: "유지태 배우의 봄날은 간다와 올드보이 이야기",
    intro: "유지태 배우가 영화평론가 이동진과 봄날은 간다와 올드보이에 대해 이야기합니다. 즉흥 연기, 러브 신, 그리고 이우진 캐릭터 창조에 대한 한국어 인터뷰입니다.",
  },
  pt: {
    title: "Assista Yoo Ji-tae no Piarchia com Legendas | Translator",
    h1: "Yoo Ji-tae Fala Sobre One Fine Spring Day e Oldboy",
    intro: "O ator Yoo Ji-tae discute One Fine Spring Day e Oldboy com o crítico de cinema Lee Dong-jin. Uma entrevista em coreano sobre improvisação, cenas de amor e a criação de Lee Woo-jin.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const localeCopy = copy[locale] || copy.en;
  return buildMetadata({
    title: localeCopy.title,
    description: localeCopy.intro,
    path: "/watch/yoo-ji-tae-piarchia",
    keywords: ["Yoo Ji-tae", "Oldboy", "One Fine Spring Day", "Lee Dong-jin", "Korean film interview"],
    locale,
  });
}

export default async function YooJiTaePiarchiaPage({
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
    url: `https://translator.tools${localizeHref("/watch/yoo-ji-tae-piarchia")}`,
    datePublished: "2026-08-21",
    author: { "@type": "Organization", name: "Stage5 Tools" },
    publisher: { "@type": "Organization", name: "Stage5 Tools", url: "https://translator.tools" },
    about: [
      { "@type": "Person", name: "Yoo Ji-tae", description: "Actor known for Oldboy and One Fine Spring Day" },
      {
        "@type": "VideoObject",
        name: "20주년에 이어 앞으로 영원히 고전이 될 두 작품",
        description: "Interview with actor Yoo Ji-tae about One Fine Spring Day and Oldboy",
        contentUrl: "https://www.youtube.com/watch?v=PYY10Yq50bA",
        embedUrl: "https://www.youtube.com/embed/PYY10Yq50bA",
        inLanguage: "ko",
        duration: "PT1H2M25S",
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
              videoId="PYY10Yq50bA"
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

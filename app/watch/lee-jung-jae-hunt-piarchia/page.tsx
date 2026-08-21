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

const post = posts.find((p) => p.slug === "lee-jung-jae-hunt-piarchia")!;

const copy: Record<string, { title: string; h1: string; intro: string }> = {
  en: {
    title: "Watch Lee Jung-jae on Lee Dong-jin's Piarchia with English Subtitles | Translator",
    h1: "Watch Lee Jung-jae Talk About Making Hunt",
    intro: "Actor-turned-director Lee Jung-jae sits down with critic Lee Dong-jin to discuss his directorial debut Hunt, a spy thriller set during South Korea's turbulent 1980s. A conversation about directing for the first time that most English speakers miss because it's in Korean.",
  },
  es: {
    title: "Ve a Lee Jung-jae en Piarchia con Subtítulos | Translator",
    h1: "Lee Jung-jae Habla Sobre Hunt",
    intro: "El actor convertido en director Lee Jung-jae se sienta con el crítico Lee Dong-jin para discutir su debut como director Hunt, un thriller de espías ambientado en la turbulenta década de 1980 de Corea del Sur.",
  },
  ko: {
    title: "이정재 감독의 이동진의 파이아키아 인터뷰 보기 | Translator",
    h1: "이정재 감독의 헌트 이야기",
    intro: "배우에서 감독이 된 이정재가 영화평론가 이동진과 함께 그의 감독 데뷔작 헌트에 대해 이야기합니다. 1980년대 한국의 격동기를 배경으로 한 스파이 스릴러에 대한 대화입니다.",
  },
  pt: {
    title: "Assista Lee Jung-jae no Piarchia com Legendas | Translator",
    h1: "Lee Jung-jae Fala Sobre Hunt",
    intro: "O ator que virou diretor Lee Jung-jae se senta com o crítico Lee Dong-jin para discutir sua estreia na direção Hunt, um thriller de espionagem ambientado nos turbulentos anos 1980 da Coreia do Sul.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const localeCopy = copy[locale] || copy.en;
  return buildMetadata({
    title: localeCopy.title,
    description: localeCopy.intro,
    path: "/watch/lee-jung-jae-hunt-piarchia",
    keywords: ["Lee Jung-jae", "Hunt", "Lee Dong-jin", "Korean film interview"],
    locale,
  });
}

export default async function LeeJungJaeHuntPiarchiaPage({
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
    url: `https://translator.tools${localizeHref("/watch/lee-jung-jae-hunt-piarchia")}`,
    datePublished: "2026-08-21",
    author: { "@type": "Organization", name: "Stage5 Tools" },
    publisher: { "@type": "Organization", name: "Stage5 Tools", url: "https://translator.tools" },
    about: [
      { "@type": "Person", name: "Lee Jung-jae", description: "Actor and director known for Squid Game and Hunt (directorial debut)" },
      {
        "@type": "VideoObject",
        name: "[헌트]의 이정재 감독님을 모셨습니다!!!",
        description: "Interview with director Lee Jung-jae about Hunt",
        contentUrl: "https://www.youtube.com/watch?v=mF6xumJOVss",
        embedUrl: "https://www.youtube.com/embed/mF6xumJOVss",
        inLanguage: "ko",
        duration: "PT42M16S",
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
              videoId="mF6xumJOVss"
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

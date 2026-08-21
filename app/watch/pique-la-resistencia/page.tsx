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

const post = posts.find((p) => p.slug === "pique-la-resistencia")!;

const copy: Record<string, { title: string; h1: string; intro: string }> = {
  en: {
    title: "Watch Gerard Piqué on La Resistencia with English Subtitles | Translator",
    h1: "Watch Gerard Piqué on Spanish Late-Night Television",
    intro: "Barcelona defender Gerard Piqué invited himself onto David Broncano's late-night show via Twitter, showed up at Teatro Arlequín, and sat through a Spanish interview that starts with jokes most English speakers will never hear.",
  },
  es: {
    title: "Ve a Gerard Piqué en La Resistencia con Subtítulos | Translator",
    h1: "Gerard Piqué en La Resistencia",
    intro: "El defensa del Barcelona Gerard Piqué se invitó al programa de David Broncano por Twitter, apareció en el Teatro Arlequín y participó en una entrevista que se volvió viral.",
  },
  ko: {
    title: "Gerard Piqué의 La Resistencia 인터뷰 보기 | Translator",
    h1: "스페인 심야 방송의 Gerard Piqué",
    intro: "바르셀로나 수비수 Gerard Piqué가 트위터를 통해 David Broncano의 심야 쇼에 자신을 초대했고, Teatro Arlequín에 나타나 스페인어 인터뷰에 참여했습니다.",
  },
  pt: {
    title: "Assista Gerard Piqué no La Resistencia com Legendas | Translator",
    h1: "Gerard Piqué na Televisão Noturna Espanhola",
    intro: "O defensor do Barcelona Gerard Piqué se convidou para o programa noturno de David Broncano via Twitter, apareceu no Teatro Arlequín e participou de uma entrevista em espanhol.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const localeCopy = copy[locale] || copy.en;
  return buildMetadata({
    title: localeCopy.title,
    description: localeCopy.intro,
    path: "/watch/pique-la-resistencia",
    keywords: ["Gerard Piqué", "La Resistencia", "David Broncano", "Spanish interview"],
    locale,
  });
}

export default async function PiqueLaResistenciaPage({
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
    url: `https://translator.tools${localizeHref("/watch/pique-la-resistencia")}`,
    datePublished: "2026-08-21",
    author: { "@type": "Organization", name: "Stage5 Tools" },
    publisher: { "@type": "Organization", name: "Stage5 Tools", url: "https://translator.tools" },
    about: [
      { "@type": "Person", name: "Gerard Piqué", description: "Professional footballer and FC Barcelona defender" },
      {
        "@type": "VideoObject",
        name: "LA RESISTENCIA - Entrevista a Gerard Piqué",
        description: "Interview with footballer Gerard Piqué on Spanish late-night comedy show La Resistencia",
        uploadDate: "2019-03-28",
        contentUrl: "https://www.youtube.com/watch?v=nLJXEX86318",
        embedUrl: "https://www.youtube.com/embed/nLJXEX86318",
        inLanguage: "es",
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
              <span>La Resistencia</span>
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
              videoId="nLJXEX86318"
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

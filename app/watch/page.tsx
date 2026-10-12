import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import {
  homeHrefForLocale,
  localizePathForLocale,
} from "../../lib/locale-routing";
import { WATCH_LOCALIZED_LOCALES } from "../../lib/locales";
import { buildMetadata } from "../../lib/seo";
import { loadWatchCatalog } from "../../lib/watch/catalog-loader";
import { getPostCardForLocale } from "../../lib/watch/catalog";
import { getWatchUiCopy } from "../../lib/watch/ui-copy";
import { canonicalSiteUrl } from "../../lib/site-routing";
import { demoDownloadCopy } from "../../lib/demo-download-copy";

type WatchSupportedLocale = "en" | "es" | "ko" | "pt" | "vi";

export const revalidate = 60;

const pageCopy: Record<WatchSupportedLocale, {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
}> = {
  en: {
    title: "Watch: Worked examples | Stage5",
    description:
      "See how Translator helps you watch foreign-language videos with English subtitles. Worked examples from real interviews and content worth watching.",
    eyebrow: "Worked examples",
    h1: "Watch videos worth finding.",
    intro:
      "Browse interviews from film, music, and culture. Each page brings together context, the original YouTube source, and a 30-second caption preview in the available languages. Choose a conversation to explore, or follow its source link to watch the full original.",
  },
  es: {
    title: "Ver: Ejemplos prácticos | Stage5",
    description:
      "Ve cómo Translator te ayuda a ver videos en idiomas extranjeros con subtítulos. Ejemplos prácticos de entrevistas reales y contenido que vale la pena ver.",
    eyebrow: "Ejemplos prácticos",
    h1: "Ve videos que valen la pena encontrar.",
    intro:
      "Explora entrevistas de cine, música y cultura. Cada página reúne contexto, la fuente original de YouTube y un avance subtitulado de 30 segundos en los idiomas disponibles. Elige una conversación o sigue el enlace a la fuente para ver el original completo.",
  },
  ko: {
    title: "보기: 실제 예시 | Stage5",
    description:
      "Translator가 외국어 영상을 자막과 함께 시청하는 데 어떻게 도움이 되는지 확인하세요. 실제 인터뷰와 볼 가치가 있는 콘텐츠의 예시입니다.",
    eyebrow: "실제 예시",
    h1: "찾을 가치가 있는 영상을 보세요.",
    intro:
      "영화, 음악, 문화 인터뷰를 둘러보세요. 각 페이지는 대화의 배경, YouTube 원본 링크, 사용 가능한 언어로 된 30초 자막 미리보기를 제공합니다. 관심 있는 대화를 고르거나 원본 링크에서 전체 영상을 시청하세요.",
  },
  pt: {
    title: "Assistir: Exemplos práticos | Stage5",
    description:
      "Veja como o Translator ajuda você a assistir vídeos em idiomas estrangeiros com legendas. Exemplos práticos de entrevistas reais e conteúdo que vale a pena assistir.",
    eyebrow: "Exemplos práticos",
    h1: "Assista vídeos que valem a pena encontrar.",
    intro:
      "Explore entrevistas de cinema, música e cultura. Cada página reúne contexto, a fonte original no YouTube e uma prévia legendada de 30 segundos nos idiomas disponíveis. Escolha uma conversa ou siga o link da fonte para assistir ao original completo.",
  },
  vi: {
    title: "Xem: Ví dụ thực tế | Stage5",
    description:
      "Xem cách Translator giúp bạn xem video ngoại ngữ với phụ đề tiếng Việt. Các ví dụ thực tế từ phỏng vấn và nội dung đáng xem.",
    eyebrow: "Ví dụ thực tế",
    h1: "Xem video đáng để tìm hiểu.",
    intro:
      "Khám phá phỏng vấn về điện ảnh, âm nhạc và văn hóa. Mỗi trang có bối cảnh, liên kết YouTube gốc và bản xem trước 30 giây với các ngôn ngữ phụ đề hiện có. Chọn cuộc trò chuyện bạn quan tâm hoặc theo liên kết nguồn để xem toàn bộ video gốc.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = pageCopy[locale as WatchSupportedLocale];
  
  if (!copy) {
    notFound();
  }
  
  return buildMetadata({
    title: copy.title,
    description: copy.description,
    path: "/watch",
    keywords: [
      "video translation examples",
      "watch foreign videos",
      "Translator examples",
      "subtitle translation workflow",
    ],
    locale,
    availableLocales: WATCH_LOCALIZED_LOCALES,
  });
}

export default async function WatchIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = pageCopy[locale as WatchSupportedLocale];
  
  if (!copy) {
    notFound();
  }

  const catalog = await loadWatchCatalog();
  const posts = catalog.flatMap((video) => {
    const card = getPostCardForLocale(video, locale);
    return card ? [card] : [];
  });
  const ui = getWatchUiCopy(locale);
  const download = demoDownloadCopy[locale];
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav
          site="stage5"
          locale={locale}
          supportedLocales={WATCH_LOCALIZED_LOCALES}
        />

        <Breadcrumbs
          items={[
            { label: ui.home, href: homeHref },
            { label: ui.watch },
          ]}
        />

        <section className="pb-24 pt-10">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/80">
              {copy.eyebrow}
            </div>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              {copy.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              {copy.intro}
            </p>
            <div className="mt-7 flex max-w-2xl flex-wrap items-center gap-4">
              <a href={canonicalSiteUrl(localizePathForLocale(locale, "/#all-downloads"))} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#a9bfff] px-5 py-3 text-base font-semibold text-black transition hover:bg-white">{download.translatorLabel} <span className="ml-2" aria-hidden="true">↗</span></a>
              <p className="max-w-sm text-sm leading-6 text-gray-300">{download.translatorBody}</p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={localizeHref(`/watch/${post.slug}`)}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400">
                  {post.eyebrow ? (
                    <span>{post.eyebrow}</span>
                  ) : (
                    <>
                      <span>{post.language}</span>
                      <span className="text-gray-700">·</span>
                      <span>{post.topic}</span>
                    </>
                  )}
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white group-hover:text-sky-200">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-gray-400">
                  {post.description}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-gray-300 transition group-hover:text-white">
                  {ui.readMore}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

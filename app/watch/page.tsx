import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import {
  homeHrefForLocale,
  localizePathForLocale,
} from "../../lib/locale-routing";
import { buildMetadata } from "../../lib/seo";
import { posts } from "./posts";

type WatchSupportedLocale = "en" | "es" | "ko" | "pt" | "vi";

const pageCopy: Record<WatchSupportedLocale, {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
}> = {
  en: {
    title: "Watch: Worked examples | Translator",
    description:
      "See how Translator helps you watch foreign-language videos with English subtitles. Worked examples from real interviews and content worth watching.",
    eyebrow: "Worked examples",
    h1: "Watch videos worth finding.",
    intro:
      "These posts show how Translator helps you find and watch foreign-language videos that are worth your time. Each example walks through the real workflow: paste a URL, download the video, transcribe or translate it, and watch with subtitles you can edit.",
  },
  es: {
    title: "Ver: Ejemplos prácticos | Translator",
    description:
      "Ve cómo Translator te ayuda a ver videos en idiomas extranjeros con subtítulos. Ejemplos prácticos de entrevistas reales y contenido que vale la pena ver.",
    eyebrow: "Ejemplos prácticos",
    h1: "Ve videos que valen la pena encontrar.",
    intro:
      "Estos posts muestran cómo Translator te ayuda a encontrar y ver videos en idiomas extranjeros que valen la pena. Cada ejemplo recorre el flujo real: pegar una URL, descargar el video, transcribirlo o traducirlo, y ver con subtítulos que puedes editar.",
  },
  ko: {
    title: "보기: 실제 예시 | Translator",
    description:
      "Translator가 외국어 영상을 자막과 함께 시청하는 데 어떻게 도움이 되는지 확인하세요. 실제 인터뷰와 볼 가치가 있는 콘텐츠의 예시입니다.",
    eyebrow: "실제 예시",
    h1: "찾을 가치가 있는 영상을 보세요.",
    intro:
      "이 게시물은 Translator가 시간을 들일 가치가 있는 외국어 영상을 찾고 시청하는 데 어떻게 도움이 되는지 보여줍니다. 각 예시는 실제 워크플로우를 안내합니다: URL 붙여넣기, 영상 다운로드, 전사 또는 번역, 편집 가능한 자막으로 시청.",
  },
  pt: {
    title: "Assistir: Exemplos práticos | Translator",
    description:
      "Veja como o Translator ajuda você a assistir vídeos em idiomas estrangeiros com legendas. Exemplos práticos de entrevistas reais e conteúdo que vale a pena assistir.",
    eyebrow: "Exemplos práticos",
    h1: "Assista vídeos que valem a pena encontrar.",
    intro:
      "Esses posts mostram como o Translator ajuda você a encontrar e assistir vídeos em idiomas estrangeiros que valem seu tempo. Cada exemplo percorre o fluxo real: cole uma URL, baixe o vídeo, transcreva ou traduza, e assista com legendas que você pode editar.",
  },
  vi: {
    title: "Xem: Ví dụ thực tế | Translator",
    description:
      "Xem cách Translator giúp bạn xem video ngoại ngữ với phụ đề tiếng Việt. Các ví dụ thực tế từ phỏng vấn và nội dung đáng xem.",
    eyebrow: "Ví dụ thực tế",
    h1: "Xem video đáng để tìm hiểu.",
    intro:
      "Các bài viết này cho thấy Translator giúp bạn tìm và xem video ngoại ngữ đáng giá thời gian. Mỗi ví dụ hướng dẫn quy trình thực tế: dán URL, tải video, phiên âm hoặc dịch, và xem với phụ đề có thể chỉnh sửa.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = pageCopy[locale as WatchSupportedLocale];
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
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: "Home", href: homeHref },
            { label: "Watch" },
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
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={localizeHref(`/watch/${post.slug}`)}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  <span>{post.language}</span>
                  <span className="text-gray-700">·</span>
                  <span>{post.topic}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white group-hover:text-sky-200">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-gray-400">
                  {post.description}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-gray-300 transition group-hover:text-white">
                  Read more →
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

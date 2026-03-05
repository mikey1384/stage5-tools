import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AllDownloadButtons } from "../../../components/AllDownloadButtons";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
import { getLocale } from "../../../lib/get-locale";
import { homeHrefForLocale, localizePathForLocale } from "../../../lib/locale-routing";
import { buildMetadata } from "../../../lib/seo";
import { t } from "../../../lib/strings";

type LocalizedLanguageContent = {
  name: string;
  title: string;
  description: string;
  intro: string;
  useCases: readonly string[];
  keywords: readonly string[];
};

const languageData = {
  spanish: {
    en: {
      name: "Spanish",
      title: "Translate Videos to Spanish | Translator",
      description:
        "Translate video subtitles to Spanish for audiences across Latin America and Spain with AI-assisted subtitle translation.",
      intro:
        "Reach Spanish-speaking audiences with AI-translated subtitles that sound natural in both Latin America and Spain.",
      useCases: [
        "Creators expanding YouTube channels into Latin America.",
        "Businesses localizing training videos for Spanish-speaking teams.",
        "Educators sharing lessons with bilingual students.",
      ],
      keywords: [
        "translate video to Spanish",
        "Spanish subtitle translator",
        "AI video translation Spanish",
        "YouTube subtitle translator Spanish",
      ],
    },
    ko: {
      name: "스페인어",
      title: "영상을 스페인어로 번역 | Translator",
      description:
        "AI 자막 번역으로 라틴아메리카와 스페인 시청자를 위해 비디오 자막을 스페인어로 번역하세요.",
      intro:
        "라틴아메리카와 스페인 시청자를 위해 자연스러운 스페인어 자막으로 영상을 제공하세요.",
      useCases: [
        "라틴아메리카로 YouTube 채널을 확장하는 크리에이터.",
        "스페인어권 팀을 위해 교육 영상을 현지화하는 기업.",
        "이중언어 학습자를 위해 강의를 공유하는 교육자.",
      ],
      keywords: [
        "스페인어 비디오 번역",
        "스페인어 자막 번역",
        "AI 스페인어 자막",
        "YouTube 스페인어 자막",
      ],
    },
  },
  korean: {
    en: {
      name: "Korean",
      title: "Translate Videos to Korean | Translator",
      description:
        "Translate video subtitles to Korean for K-drama, K-pop, and gaming audiences with AI-assisted subtitle translation.",
      intro:
        "Make your videos accessible to Korean-speaking viewers, from K-drama fans to growing gaming communities.",
      useCases: [
        "Fan translators sharing K-drama or variety clips.",
        "Creators localizing gaming and esports content for Korea.",
        "Brands launching products with Korean subtitles.",
      ],
      keywords: [
        "translate video to Korean",
        "Korean subtitle translator",
        "AI video translation Korean",
        "K-drama subtitles",
      ],
    },
    ko: {
      name: "한국어",
      title: "영상을 한국어로 번역 | Translator",
      description:
        "K-드라마, K-팝, 게임 시청자를 위해 AI 보조 번역으로 비디오 자막을 한국어로 번역하세요.",
      intro:
        "K-드라마 팬부터 게임 커뮤니티까지, 한국어 시청자를 위해 영상을 쉽게 현지화하세요.",
      useCases: [
        "드라마·예능 클립을 공유하는 팬 번역가.",
        "국내 시청자를 위해 게임·e스포츠 콘텐츠를 현지화하는 크리에이터.",
        "한국어 자막으로 제품을 출시하는 브랜드.",
      ],
      keywords: [
        "한국어 비디오 번역",
        "한국어 자막 번역",
        "AI 한국어 자막",
        "K드라마 자막",
      ],
    },
  },
  japanese: {
    en: {
      name: "Japanese",
      title: "Translate Videos to Japanese | Translator",
      description:
        "Translate video subtitles to Japanese for anime, gaming, and creator audiences with AI-assisted subtitle translation.",
      intro:
        "Translate videos into Japanese for anime lovers, gaming communities, and creators building a global audience.",
      useCases: [
        "Anime commentary channels localizing for Japan.",
        "Game studios translating trailers and updates.",
        "Creators adding Japanese subtitles for global reach.",
      ],
      keywords: [
        "translate video to Japanese",
        "Japanese subtitle translator",
        "AI video translation Japanese",
        "anime subtitles",
      ],
    },
    ko: {
      name: "일본어",
      title: "영상을 일본어로 번역 | Translator",
      description:
        "애니메이션·게임·크리에이터 시청자를 위해 AI 보조 자막 번역으로 비디오를 일본어로 번역하세요.",
      intro:
        "애니 팬과 게임 커뮤니티, 글로벌 시청자를 위해 일본어 자막을 빠르게 제작하세요.",
      useCases: [
        "일본 시청자를 대상으로 해설 콘텐츠를 만드는 크리에이터.",
        "트레일러와 업데이트 영상을 현지화하는 게임 스튜디오.",
        "글로벌 도달을 위해 일본어 자막을 추가하는 제작팀.",
      ],
      keywords: [
        "일본어 비디오 번역",
        "일본어 자막 번역",
        "AI 일본어 자막",
        "애니 자막 번역",
      ],
    },
  },
  chinese: {
    en: {
      name: "Chinese",
      title: "Translate Videos to Chinese | Translator",
      description:
        "Translate video subtitles to Chinese for large audiences in Mainland China, Taiwan, and beyond.",
      intro:
        "Open your content to Chinese-speaking audiences with fast AI subtitle translation and clean exports.",
      useCases: [
        "Businesses localizing product demos for China.",
        "Creators adding Chinese subtitles for global reach.",
        "Educators sharing lectures with bilingual students.",
      ],
      keywords: [
        "translate video to Chinese",
        "Chinese subtitle translator",
        "AI video translation Chinese",
        "Mandarin subtitles",
      ],
    },
    ko: {
      name: "중국어",
      title: "영상을 중국어로 번역 | Translator",
      description:
        "중국 본토, 대만 등 대규모 중국어권 시청자를 위해 비디오 자막을 중국어로 번역하세요.",
      intro:
        "빠른 AI 자막 번역과 깔끔한 내보내기로 중국어권 시청자에게 콘텐츠를 확장하세요.",
      useCases: [
        "중국 시장을 위해 제품 데모 영상을 현지화하는 기업.",
        "글로벌 도달을 위해 중국어 자막을 추가하는 크리에이터.",
        "이중언어 학습자를 위해 강의를 공유하는 교육자.",
      ],
      keywords: [
        "중국어 비디오 번역",
        "중국어 자막 번역",
        "AI 중국어 자막",
        "만다린 자막",
      ],
    },
  },
  french: {
    en: {
      name: "French",
      title: "Translate Videos to French | Translator",
      description:
        "Translate video subtitles to French for audiences in France, Canada, and Africa. AI subtitle translation at scale.",
      intro:
        "Translate your videos to French to reach viewers in France, Canada, and Francophone regions worldwide.",
      useCases: [
        "Creators expanding into France and Canada.",
        "Businesses localizing training videos for global teams.",
        "Language learners practicing with French subtitles.",
      ],
      keywords: [
        "translate video to French",
        "French subtitle translator",
        "AI video translation French",
        "French subtitles",
      ],
    },
    ko: {
      name: "프랑스어",
      title: "영상을 프랑스어로 번역 | Translator",
      description:
        "프랑스, 캐나다, 아프리카 시청자를 위해 AI 보조 번역으로 비디오 자막을 프랑스어로 번역하세요.",
      intro:
        "프랑스와 캐나다, 프랑스어권 지역 시청자를 위해 프랑스어 자막으로 콘텐츠를 확장하세요.",
      useCases: [
        "프랑스·캐나다 시장으로 확장하는 크리에이터.",
        "글로벌 팀용 교육 영상을 현지화하는 기업.",
        "프랑스어 자막으로 학습 콘텐츠를 제공하는 교육자.",
      ],
      keywords: [
        "프랑스어 비디오 번역",
        "프랑스어 자막 번역",
        "AI 프랑스어 자막",
        "프랑스어 자막",
      ],
    },
  },
  german: {
    en: {
      name: "German",
      title: "Translate Videos to German | Translator",
      description:
        "Translate video subtitles to German for audiences in Germany, Austria, and Switzerland with AI-assisted translation.",
      intro:
        "Reach German-speaking audiences with subtitles that preserve tone and technical vocabulary.",
      useCases: [
        "Creators localizing tutorials for the DACH region.",
        "Businesses translating product walkthroughs.",
        "Educators sharing lessons with German subtitles.",
      ],
      keywords: [
        "translate video to German",
        "German subtitle translator",
        "AI video translation German",
        "German subtitles",
      ],
    },
    ko: {
      name: "독일어",
      title: "영상을 독일어로 번역 | Translator",
      description:
        "독일, 오스트리아, 스위스 시청자를 위해 AI 보조 번역으로 비디오 자막을 독일어로 번역하세요.",
      intro:
        "톤과 전문 용어를 유지하는 독일어 자막으로 독일어권 시청자에게 도달하세요.",
      useCases: [
        "DACH 지역용 튜토리얼을 현지화하는 크리에이터.",
        "제품 설명 영상을 번역하는 기업.",
        "독일어 자막으로 수업을 공유하는 교육자.",
      ],
      keywords: [
        "독일어 비디오 번역",
        "독일어 자막 번역",
        "AI 독일어 자막",
        "독일어 자막",
      ],
    },
  },
  portuguese: {
    en: {
      name: "Portuguese",
      title: "Translate Videos to Portuguese | Translator",
      description:
        "Translate video subtitles to Portuguese for Brazil and Portugal. AI translation built for creators.",
      intro:
        "Translate subtitles into Portuguese to connect with Brazil, Portugal, and Portuguese-speaking communities.",
      useCases: [
        "Creators reaching Brazilian audiences.",
        "Businesses localizing training videos for LATAM teams.",
        "Fans translating entertainment content for PT viewers.",
      ],
      keywords: [
        "translate video to Portuguese",
        "Portuguese subtitle translator",
        "AI video translation Portuguese",
        "Brazilian Portuguese subtitles",
      ],
    },
    ko: {
      name: "포르투갈어",
      title: "영상을 포르투갈어로 번역 | Translator",
      description:
        "브라질과 포르투갈 시청자를 위해 크리에이터 친화적인 AI 번역으로 비디오 자막을 포르투갈어로 번역하세요.",
      intro:
        "브라질과 포르투갈, 포르투갈어권 커뮤니티를 위해 포르투갈어 자막으로 도달 범위를 넓히세요.",
      useCases: [
        "브라질 시청자를 대상으로 확장하는 크리에이터.",
        "LATAM 팀용 교육 영상을 현지화하는 기업.",
        "포르투갈어권 시청자를 위해 콘텐츠를 번역하는 팬 커뮤니티.",
      ],
      keywords: [
        "포르투갈어 비디오 번역",
        "포르투갈어 자막 번역",
        "AI 포르투갈어 자막",
        "브라질 포르투갈어 자막",
      ],
    },
  },
} as const satisfies Record<
  string,
  { en: LocalizedLanguageContent; ko: LocalizedLanguageContent }
>;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(languageData).map((language) => ({ language }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>;
}): Promise<Metadata> {
  const { language } = await params;
  const data = languageData[language as keyof typeof languageData];
  if (!data) return {};
  const locale = await getLocale();
  const localizedData = data[locale];

  return buildMetadata({
    title: localizedData.title,
    description: localizedData.description,
    path: `/translate/${language}`,
    keywords: [...localizedData.keywords],
    locale,
  });
}

export default async function LanguagePage({
  params,
  searchParams,
}: {
  params: Promise<{ language: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { language } = await params;
  const data = languageData[language as keyof typeof languageData];
  if (!data) notFound();

  const queryParams = await searchParams;
  const locale = await getLocale(queryParams);
  const localizedData = data[locale];
  const homeHref = homeHrefForLocale(locale);
  const translateHref = localizePathForLocale(locale, "/translate");
  const subtitleEditorHref = localizePathForLocale(locale, "/subtitle-editor");
  const heading =
    locale === "ko"
      ? `영상을 ${localizedData.name}로 번역`
      : `Translate videos to ${localizedData.name}`;
  const useCasesHeading = locale === "ko" ? "주요 활용 사례" : "Common use cases";
  const workflowTitle =
    locale === "ko" ? "AI 자막 번역 워크플로우" : "AI subtitle translation workflow";
  const workflowDescription =
    locale === "ko"
      ? "자막을 불러오고 AI로 번역한 뒤, 게시 가능한 SRT 파일로 내보내세요."
      : "Import subtitles, translate with AI, and export SRT files ready for publishing.";
  const workflowBackLabel =
    locale === "ko" ? "AI 번역으로 돌아가기 →" : "Back to AI Translation →";
  const cleanupTitle =
    locale === "ko"
      ? "번역 전에 자막을 먼저 정리하세요"
      : "Edit and sync before you translate";
  const cleanupDescription =
    locale === "ko"
      ? "현지화 전에 자막 편집기로 타이밍과 문장을 정리하면 품질이 좋아집니다."
      : "Use the subtitle editor to clean timing and phrasing before localization.";
  const finalNote =
    locale === "ko"
      ? `${localizedData.name} 자막을 AI 보조 워크플로우로 번역하세요.`
      : `Translate subtitles to ${localizedData.name} with AI-assisted workflows.`;

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navAiTranslation", locale), href: translateHref },
            { label: localizedData.name },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">{heading}</h1>
            <p className="mt-6 text-lg text-gray-400">{localizedData.intro}</p>
          </div>
          <div className="mt-8">
            <AllDownloadButtons locale={locale} />
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-light text-white">{useCasesHeading}</h2>
            <ul className="mt-6 space-y-4 text-gray-400">
              {localizedData.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{workflowTitle}</h3>
              <p className="mt-3 text-sm text-gray-400">{workflowDescription}</p>
              <Link
                href={translateHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {workflowBackLabel}
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{cleanupTitle}</h3>
              <p className="mt-3 text-sm text-gray-400">{cleanupDescription}</p>
              <Link
                href={subtitleEditorHref}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("translateGoToEditor", locale)}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <AllDownloadButtons locale={locale} />
          <p className="text-sm text-gray-500 mt-4">{finalNote}</p>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

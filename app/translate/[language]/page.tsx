import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AllDownloadButtons } from "../../../components/AllDownloadButtons";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
import { getLocale } from "../../../lib/get-locale";
import { buildMetadata } from "../../../lib/seo";

const languageData = {
  spanish: {
    name: "Spanish",
    title: "Translate Videos to Spanish | Translator",
    description:
      "Translate video subtitles to Spanish for audiences across Latin America and Spain. Fast, accurate AI subtitle translation.",
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
  korean: {
    name: "Korean",
    title: "Translate Videos to Korean | Translator",
    description:
      "Translate video subtitles to Korean for K-drama, K-pop, and gaming audiences. AI subtitle translation in minutes.",
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
  japanese: {
    name: "Japanese",
    title: "Translate Videos to Japanese | Translator",
    description:
      "Translate video subtitles to Japanese for anime, gaming, and creator audiences. Accurate AI subtitle translation.",
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
  chinese: {
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
  french: {
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
  german: {
    name: "German",
    title: "Translate Videos to German | Translator",
    description:
      "Translate video subtitles to German for audiences in Germany, Austria, and Switzerland with AI accuracy.",
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
  portuguese: {
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
} as const;

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

  return buildMetadata({
    title: data.title,
    description: data.description,
    path: `/translate/${language}`,
    keywords: [...data.keywords],
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

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "AI Translation", href: "/translate" },
            { label: data.name },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Translate videos to {data.name}
            </h1>
            <p className="mt-6 text-lg text-gray-400">{data.intro}</p>
          </div>
          <div className="mt-8">
            <AllDownloadButtons locale={locale} />
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-light text-white">
              Common use cases
            </h2>
            <ul className="mt-6 space-y-4 text-gray-400">
              {data.useCases.map((useCase) => (
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
              <h3 className="text-xl font-semibold text-white">
                AI subtitle translation workflow
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Import subtitles, translate with AI, and export SRT, VTT, or ASS
                files ready for publishing.
              </p>
              <Link
                href="/translate"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                Back to AI Translation →
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                Edit and sync before you translate
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Use the subtitle editor to clean timing and phrasing before
                localization.
              </p>
              <Link
                href="/subtitle-editor"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                Go to Subtitle Editor →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <AllDownloadButtons locale={locale} />
          <p className="text-sm text-gray-500 mt-4">
            Translate subtitles to {data.name} with AI-powered accuracy.
          </p>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

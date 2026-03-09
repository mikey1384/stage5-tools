import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { FeatureDownloadCta } from "../../../components/FeatureDownloadCta";
import { HeroDownloadActions } from "../../../components/HeroDownloadActions";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
import { getLocale } from "../../../lib/get-locale";
import {
  getLanguagePageContent,
  translatedLanguageSlugs,
} from "../../../lib/translate-language-page-content";
import { isTranslatedLanguageSlug } from "../../../lib/translate-language-slugs";
import { homeHrefForLocale, localizePathForLocale } from "../../../lib/locale-routing";
import { buildMetadata } from "../../../lib/seo";
import { t } from "../../../lib/strings";

export const dynamicParams = false;

const watchSubtitleScreenshot = {
  src: "/screenshots/watch-translated-subtitles.webp",
  width: 1600,
  height: 1003,
};

export function generateStaticParams() {
  return translatedLanguageSlugs.map((language) => ({ language }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>;
}): Promise<Metadata> {
  const { language } = await params;
  if (!isTranslatedLanguageSlug(language)) return {};

  const locale = await getLocale();
  const content = getLanguagePageContent(locale, language);

  return buildMetadata({
    title: content.title,
    description: content.description,
    path: `/translate/${language}`,
    keywords: content.keywords,
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
  if (!isTranslatedLanguageSlug(language)) notFound();

  const queryParams = await searchParams;
  const locale = await getLocale(queryParams);
  const content = getLanguagePageContent(locale, language);
  const homeHref = homeHrefForLocale(locale);
  const translateHref = localizePathForLocale(locale, "/translate");
  const subtitleEditorHref = localizePathForLocale(locale, "/subtitle-editor");

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navAiTranslation", locale), href: translateHref },
            { label: content.name },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                {t("navAiTranslation", locale)}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {content.heading}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {content.intro}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {content.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400">
                {content.finalNote}
              </p>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <Image
                  src={watchSubtitleScreenshot.src}
                  alt={content.heading}
                  width={watchSubtitleScreenshot.width}
                  height={watchSubtitleScreenshot.height}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {content.useCasesHeading}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {content.heading}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {content.useCases.map((useCase) => (
                <div
                  key={useCase}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm leading-6 text-gray-300">{useCase}</p>
                </div>
              ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {content.workflowTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {content.workflowDescription}
                </p>
                <Link
                  href={translateHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
                >
                  {content.workflowBackLabel}
                </Link>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-2xl font-semibold text-white">
                  {content.cleanupTitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {content.cleanupDescription}
                </p>
                <Link
                  href={subtitleEditorHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
                >
                  {t("translateGoToEditor", locale)}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="all-downloads" className="pb-20 pt-8 text-center">
          <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {content.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300">
            {content.finalNote}
          </p>
          <FeatureDownloadCta
            locale={locale}
            note={content.finalNote}
            align="center"
            className="mt-8"
          />
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

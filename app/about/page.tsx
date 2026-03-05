import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { homeHrefForLocale, localizePathForLocale } from "../../lib/locale-routing";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: `${t("aboutTitle", locale)} | Translator`,
    description: t("aboutSubtitle", locale),
    path: "/about",
    keywords:
      locale === "ko"
        ? [
            "Stage5 Tools 소개",
            "Translator 앱 소개",
            "AI 비디오 번역 도구",
            "자막 편집 앱",
          ]
        : [
            "Stage5 Tools",
            "Translator app",
            "about Translator",
            "AI video translation company",
          ],
    locale,
  });
}

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navAbout", locale) },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              {t("aboutTitle", locale)}
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              {t("aboutSubtitle", locale)}
            </p>
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">
                {t("aboutMission", locale)}
              </h2>
              <p className="mt-3 text-sm text-gray-400">
                {t("aboutMissionDesc", locale)}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">
                {t("aboutVision", locale)}
              </h2>
              <p className="mt-3 text-sm text-gray-400">
                {t("aboutVisionDesc", locale)}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("aboutBuiltFor", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("aboutBuiltForDesc", locale)}
              </p>
              <Link
                href={localizeHref("/translate")}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("subtitleEditorExploreTranslation", locale)}
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("aboutContactUs", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("aboutContactUsDesc", locale)}
              </p>
              <Link
                href={localizeHref("/contact")}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("aboutGetInTouch", locale)}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

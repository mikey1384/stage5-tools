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
    title: `${t("contactTitle", locale)} | Translator`,
    description: t("contactSubtitle", locale),
    path: "/contact",
    keywords:
      locale === "ko"
        ? [
            "Translator 문의",
            "Stage5 Tools 지원",
            "비디오 번역 문의",
            "엔터프라이즈 번역 문의",
          ]
        : [
            "Translator contact",
            "Stage5 Tools support",
            "video translation help",
          ],
    locale,
  });
}

export default async function ContactPage({
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
            { label: t("navContact", locale) },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              {t("contactTitle", locale)}
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              {t("contactSubtitle", locale)}
            </p>
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">
                {t("contactEmail", locale)}
              </h2>
              <p className="mt-3 text-sm text-gray-400">
                {t("contactEmailDesc", locale)}
              </p>
              <p className="mt-4">
                <a
                  href="mailto:mikey@stage5.tools"
                  className="text-gray-300 transition hover:text-white"
                >
                  mikey@stage5.tools
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">
                {t("contactEnterprise", locale)}
              </h2>
              <p className="mt-3 text-sm text-gray-400">
                {t("contactEnterpriseDesc", locale)}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href={localizeHref("/pricing")}
                  className="text-gray-300 transition hover:text-white"
                >
                  {t("navPricing", locale)} →
                </Link>
                <Link
                  href={localizeHref("/translate")}
                  className="text-gray-300 transition hover:text-white"
                >
                  {t("navAiTranslation", locale)} →
                </Link>
                <Link
                  href={localizeHref("/faq")}
                  className="text-gray-300 transition hover:text-white"
                >
                  {t("navFaq", locale)} →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

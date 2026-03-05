import type { Metadata } from "next";
import Link from "next/link";
import { AllDownloadButtons } from "../../components/AllDownloadButtons";
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
    title: `${t("pricingTitle", locale)} | Translator`,
    description: t("pricingSubtitle", locale),
    path: "/pricing",
    keywords:
      locale === "ko"
        ? [
            "Translator 가격",
            "AI 번역 크레딧",
            "비디오 번역 요금",
            "무료 자막 편집기",
          ]
        : [
            "Translator pricing",
            "AI translation credits",
            "video translation pricing",
            "subtitle editor free",
          ],
    locale,
  });
}

export default async function PricingPage({
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
            { label: t("navPricing", locale) },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              {t("pricingTitle", locale)}
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              {t("pricingSubtitle", locale)}
            </p>
          </div>
          <div className="mt-8">
            <AllDownloadButtons locale={locale} />
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm uppercase tracking-widest text-gray-500">
                {t("pricingFreeLabel", locale)}
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                {t("pricingFreePrice", locale)}
              </h2>
              <p className="mt-3 text-sm text-gray-400">
                {t("pricingFreeDesc", locale)}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                <li>• {t("pricingFreeItem1", locale)}</li>
                <li>• {t("pricingFreeItem2", locale)}</li>
                <li>• {t("pricingFreeItem3", locale)}</li>
                <li>• {t("pricingFreeItem4", locale)}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="text-sm uppercase tracking-widest text-gray-500">
                {t("pricingCreditsLabel", locale)}
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                {t("pricingCreditsPrice", locale)}
              </h2>
              <p className="mt-3 text-sm text-gray-400">
                {t("pricingCreditsDesc", locale)}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                <li>• {t("pricingCreditsItem1", locale)}</li>
                <li>• {t("pricingCreditsItem2", locale)}</li>
                <li>• {t("pricingCreditsItem3", locale)}</li>
                <li>• {t("pricingCreditsItem4", locale)}</li>
              </ul>
              <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-gray-300">
                <div className="text-[11px] uppercase tracking-widest text-gray-500">
                  {t("pricingExamplePacks", locale)}
                </div>
                <ul className="mt-3 space-y-2">
                  <li>• {t("pricingPack1", locale)}</li>
                  <li>• {t("pricingPack2", locale)}</li>
                  <li>• {t("pricingPack3", locale)}</li>
                  <li>• {t("pricingPack4", locale)}</li>
                </ul>
                <p className="mt-3 text-gray-400">
                  {t("pricingByoNote", locale)}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("pricingFreeQuestion", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("pricingFreeAnswer", locale)}
              </p>
              <Link
                href={localizeHref("/subtitle-editor")}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("pricingExploreEditor", locale)}
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("pricingCostQuestion", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("pricingCostAnswer", locale)}
              </p>
              <Link
                href={localizeHref("/contact")}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("pricingContactSales", locale)}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

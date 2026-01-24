import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

export const metadata: Metadata = buildMetadata({
  title: "Translator FAQ - Video Translation & Subtitle Editing",
  description:
    "Answers to common questions about Translator: downloads, subtitle formats, AI translation, pricing, and system requirements.",
  path: "/faq",
  keywords: [
    "Translator FAQ",
    "subtitle editor FAQ",
    "video translation help",
    "SRT translator questions",
  ],
});

export default async function FAQPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);

  const faqs = [
    { qKey: "faqQ1" as const, aKey: "faqA1" as const },
    { qKey: "faqQ2" as const, aKey: "faqA2" as const },
    { qKey: "faqQ3" as const, aKey: "faqA3" as const },
    { qKey: "faqQ4" as const, aKey: "faqA4" as const },
    { qKey: "faqQ5" as const, aKey: "faqA5" as const },
    { qKey: "faqQ6" as const, aKey: "faqA6" as const },
    { qKey: "faqQ7" as const, aKey: "faqA7" as const },
    { qKey: "faqQ8" as const, aKey: "faqA8" as const },
    { qKey: "faqQ9" as const, aKey: "faqA9" as const },
    { qKey: "faqQ10" as const, aKey: "faqA10" as const },
  ];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: "/" },
            { label: t("navFaq", locale) },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              {t("faqTitle", locale)}
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              {t("faqSubtitle", locale)}
            </p>
          </div>
        </section>

        <section className="py-12 border-t border-gray-900">
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.qKey}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-lg font-semibold text-white">
                  {t(faq.qKey, locale)}
                </h2>
                <p className="mt-3 text-sm text-gray-400">
                  {t(faq.aKey, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t border-gray-900">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("faqReadyTranslate", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("faqReadyTranslateDesc", locale)}
              </p>
              <Link
                href="/translate"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("subtitleEditorExploreTranslation", locale)}
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">
                {t("faqNeedPricing", locale)}
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                {t("faqNeedPricingDesc", locale)}
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("faqViewPricing", locale)}
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

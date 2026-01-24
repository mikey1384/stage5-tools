import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

export const metadata: Metadata = buildMetadata({
  title: "Contact Stage5 Tools - Translator",
  description:
    "Contact Stage5 Tools for Translator support, partnerships, or enterprise video translation.",
  path: "/contact",
  keywords: ["Translator contact", "Stage5 Tools support", "video translation help"],
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: "/" },
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
                  href="/pricing"
                  className="text-gray-300 transition hover:text-white"
                >
                  {t("navPricing", locale)} →
                </Link>
                <Link
                  href="/translate"
                  className="text-gray-300 transition hover:text-white"
                >
                  {t("navAiTranslation", locale)} →
                </Link>
                <Link
                  href="/faq"
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

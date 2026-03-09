import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { privacyContent } from "../../lib/legal-content";
import { homeHrefForLocale } from "../../lib/locale-routing";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const content = privacyContent[locale];
  return buildMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: "/privacy",
    keywords: content.keywords,
    locale,
  });
}

export default async function PrivacyPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const homeHref = homeHrefForLocale(locale);
  const content = privacyContent[locale];

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: content.breadcrumb },
          ]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">{content.title}</h1>
            <p className="mt-6 text-lg text-gray-400">{content.intro}</p>
          </div>
        </section>

        <section className="py-12 border-t border-gray-900">
          <div className="space-y-10 text-sm text-gray-400 max-w-3xl">
            {content.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3">{section.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

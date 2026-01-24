import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy - Translator",
  description:
    "Privacy policy for Translator by Stage5 Tools. Learn how we collect, use, and protect your data.",
  path: "/privacy",
  keywords: ["Translator privacy policy", "Stage5 Tools privacy", "data policy"],
});

export default async function PrivacyPage({
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
          items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              This Privacy Policy explains how Stage5 Tools collects, uses, and
              protects information when you use Translator.
            </p>
          </div>
        </section>

        <section className="py-12 border-t border-gray-900">
          <div className="space-y-10 text-sm text-gray-400 max-w-3xl">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Information we collect
              </h2>
              <p className="mt-3">
                We collect information you provide directly (such as contact
                details), usage data to improve Translator, and technical data
                needed to deliver downloads and AI features.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                How we use information
              </h2>
              <p className="mt-3">
                We use data to operate the app, provide customer support,
                process payments, improve features, and keep the service secure.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Sharing and third parties
              </h2>
              <p className="mt-3">
                We only share data with trusted providers needed to deliver
                services (such as hosting, analytics, and payment processing).
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Data retention
              </h2>
              <p className="mt-3">
                We retain data only as long as needed to provide the service and
                comply with legal obligations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Your rights</h2>
              <p className="mt-3">
                You can request access, correction, or deletion of your data.
                Contact us at mikey@stage5.tools to make a request.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. Updates will be
                posted on this page with a new effective date.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Contact us</h2>
              <p className="mt-3">
                If you have questions about this policy, email
                mikey@stage5.tools.
              </p>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

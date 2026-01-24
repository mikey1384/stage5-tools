import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { buildMetadata } from "../../lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service - Translator",
  description:
    "Terms of Service for Translator by Stage5 Tools. Review usage rules, payments, and limitations.",
  path: "/terms",
  keywords: ["Translator terms", "Stage5 Tools terms", "terms of service"],
});

export default async function TermsPage({
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
          items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
        />

        <section className="py-6 md:py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg text-gray-400">
              These terms govern your use of Translator and related services
              from Stage5 Tools.
            </p>
          </div>
        </section>

        <section className="py-12 border-t border-gray-900">
          <div className="space-y-10 text-sm text-gray-400 max-w-3xl">
            <div>
              <h2 className="text-xl font-semibold text-white">Use of service</h2>
              <p className="mt-3">
                You agree to use Translator in compliance with applicable laws
                and platform terms for any videos you download or translate.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Accounts</h2>
              <p className="mt-3">
                You are responsible for maintaining the security of your
                account, devices, and credentials.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Payments</h2>
              <p className="mt-3">
                AI features use paid credits. All prices, taxes, and refund
                policies are shown at checkout.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Intellectual property
              </h2>
              <p className="mt-3">
                Translator and its content are owned by Stage5 Tools. You retain
                rights to your own videos and subtitle files.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Service availability
              </h2>
              <p className="mt-3">
                We may update or discontinue features at any time. We do our
                best to keep services running reliably.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Limitation of liability
              </h2>
              <p className="mt-3">
                Translator is provided &quot;as is&quot; without warranties. To
                the fullest extent permitted, Stage5 Tools is not liable for
                indirect damages or losses.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Contact</h2>
              <p className="mt-3">
                Questions about these terms? Email mikey@stage5.tools.
              </p>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

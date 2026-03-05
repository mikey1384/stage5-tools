import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { homeHrefForLocale } from "../../lib/locale-routing";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: locale === "ko" ? "서비스 이용약관 | Translator" : "Terms of Service | Translator",
    description:
      locale === "ko"
        ? "Stage5 Tools의 Translator 서비스 이용약관입니다. 이용 규칙, 결제, 책임 제한을 확인하세요."
        : "Terms of Service for Translator by Stage5 Tools. Review usage rules, payments, and limitations.",
    path: "/terms",
    keywords:
      locale === "ko"
        ? ["Translator 이용약관", "Stage5 Tools 약관", "서비스 이용약관"]
        : ["Translator terms", "Stage5 Tools terms", "terms of service"],
    locale,
  });
}

export default async function TermsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const homeHref = homeHrefForLocale(locale);
  const content =
    locale === "ko"
      ? {
          breadcrumb: t("footerTerms", locale),
          title: "서비스 이용약관",
          intro:
            "본 약관은 Stage5 Tools의 Translator 및 관련 서비스 이용에 적용됩니다.",
          sections: [
            {
              title: "서비스 이용",
              body: "사용자는 다운로드하거나 번역하는 콘텐츠에 대해 관련 법률 및 플랫폼 정책을 준수해야 합니다.",
            },
            {
              title: "계정 및 보안",
              body: "계정, 기기, 인증 정보의 보안 유지 책임은 사용자에게 있습니다.",
            },
            {
              title: "결제",
              body: "AI 기능은 유료 크레딧을 사용합니다. 가격, 세금, 환불 정책은 결제 단계에서 안내됩니다.",
            },
            {
              title: "지식재산권",
              body: "Translator 및 관련 콘텐츠의 권리는 Stage5 Tools에 있습니다. 사용자가 업로드한 비디오와 자막 파일의 권리는 사용자에게 있습니다.",
            },
            {
              title: "서비스 가용성",
              body: "서비스 품질 향상을 위해 기능이 변경되거나 중단될 수 있으며, 안정적 운영을 위해 최선을 다합니다.",
            },
            {
              title: "책임의 제한",
              body: "Translator는 현행 상태로 제공되며, 법이 허용하는 범위에서 Stage5 Tools는 간접 손해에 대해 책임을 지지 않습니다.",
            },
            {
              title: "문의",
              body: "약관 관련 문의는 mikey@stage5.tools 로 연락해 주세요.",
            },
          ],
        }
      : {
          breadcrumb: "Terms of Service",
          title: "Terms of Service",
          intro:
            "These terms govern your use of Translator and related services from Stage5 Tools.",
          sections: [
            {
              title: "Use of service",
              body: "You agree to use Translator in compliance with applicable laws and platform terms for any videos you download or translate.",
            },
            {
              title: "Accounts",
              body: "You are responsible for maintaining the security of your account, devices, and credentials.",
            },
            {
              title: "Payments",
              body: "AI features use paid credits. All prices, taxes, and refund policies are shown at checkout.",
            },
            {
              title: "Intellectual property",
              body: "Translator and its content are owned by Stage5 Tools. You retain rights to your own videos and subtitle files.",
            },
            {
              title: "Service availability",
              body: "We may update or discontinue features at any time. We do our best to keep services running reliably.",
            },
            {
              title: "Limitation of liability",
              body: 'Translator is provided "as is" without warranties. To the fullest extent permitted, Stage5 Tools is not liable for indirect damages or losses.',
            },
            {
              title: "Contact",
              body: "Questions about these terms? Email mikey@stage5.tools.",
            },
          ],
        };

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

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
    title: locale === "ko" ? "개인정보 처리방침 | Translator" : "Privacy Policy | Translator",
    description:
      locale === "ko"
        ? "Stage5 Tools의 Translator 개인정보 처리방침입니다. 수집 정보와 활용 방식, 보호 정책을 확인하세요."
        : "Privacy policy for Translator by Stage5 Tools. Learn how we collect, use, and protect your data.",
    path: "/privacy",
    keywords:
      locale === "ko"
        ? ["Translator 개인정보 처리방침", "Stage5 Tools 개인정보", "데이터 보호 정책"]
        : ["Translator privacy policy", "Stage5 Tools privacy", "data policy"],
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
  const content =
    locale === "ko"
      ? {
          breadcrumb: t("footerPrivacy", locale),
          title: "개인정보 처리방침",
          intro:
            "본 개인정보 처리방침은 Stage5 Tools가 Translator 서비스 이용 과정에서 정보를 수집, 이용, 보호하는 방법을 설명합니다.",
          sections: [
            {
              title: "수집하는 정보",
              body: "연락처 등 사용자가 직접 제공한 정보, 서비스 개선을 위한 사용 데이터, 다운로드와 AI 기능 제공에 필요한 기술 정보를 수집할 수 있습니다.",
            },
            {
              title: "정보의 이용 목적",
              body: "서비스 운영, 고객 지원, 결제 처리, 기능 개선, 보안 유지를 위해 정보를 사용합니다.",
            },
            {
              title: "제3자 제공",
              body: "호스팅, 분석, 결제 처리 등 서비스 제공에 필요한 범위에서 신뢰할 수 있는 파트너에게만 정보를 공유합니다.",
            },
            {
              title: "보관 기간",
              body: "서비스 제공과 법적 의무 이행에 필요한 기간 동안만 데이터를 보관합니다.",
            },
            {
              title: "이용자 권리",
              body: "사용자는 정보 열람, 정정, 삭제를 요청할 수 있습니다.",
            },
            {
              title: "정책 변경",
              body: "본 방침은 필요 시 업데이트될 수 있으며, 변경 시 본 페이지에 최신 버전을 게시합니다.",
            },
            {
              title: "문의",
              body: "개인정보 관련 문의는 mikey@stage5.tools 로 연락해 주세요.",
            },
          ],
        }
      : {
          breadcrumb: "Privacy Policy",
          title: "Privacy Policy",
          intro:
            "This Privacy Policy explains how Stage5 Tools collects, uses, and protects information when you use Translator.",
          sections: [
            {
              title: "Information we collect",
              body: "We collect information you provide directly (such as contact details), usage data to improve Translator, and technical data needed to deliver downloads and AI features.",
            },
            {
              title: "How we use information",
              body: "We use data to operate the app, provide customer support, process payments, improve features, and keep the service secure.",
            },
            {
              title: "Sharing and third parties",
              body: "We only share data with trusted providers needed to deliver services (such as hosting, analytics, and payment processing).",
            },
            {
              title: "Data retention",
              body: "We retain data only as long as needed to provide the service and comply with legal obligations.",
            },
            {
              title: "Your rights",
              body: "You can request access, correction, or deletion of your data.",
            },
            {
              title: "Changes to this policy",
              body: "We may update this policy from time to time. Updates will be posted on this page with a new effective date.",
            },
            {
              title: "Contact us",
              body: "If you have questions about this policy, email mikey@stage5.tools.",
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

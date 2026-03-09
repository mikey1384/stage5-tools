import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FeatureDownloadCta } from "../../components/FeatureDownloadCta";
import { HeroDownloadActions } from "../../components/HeroDownloadActions";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { homeHrefForLocale, localizePathForLocale } from "../../lib/locale-routing";
import type { Locale } from "../../lib/locales";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

type ContactPageCopy = {
  metadataDescription: string;
  heroEyebrow: string;
  heroPoints: string[];
  sectionEyebrow: string;
  sectionTitle: string;
  quickLinksTitle: string;
  ctaTitle: string;
  ctaBody: string;
  ctaNote: string;
};

const pageCopy: Record<Locale, ContactPageCopy> = {
  en: {
    metadataDescription:
      "Contact Stage5 about support, pricing, partnerships, and heavier Translator workflows.",
    heroEyebrow: "Talk to a human",
    heroPoints: [
      "Ask product or setup questions",
      "Talk through pricing, BYO, or heavier usage",
      "Reach out if you are trying to make Translator fit a real workflow",
    ],
    sectionEyebrow: "How to reach us",
    sectionTitle: "Keep it simple. If the site did not answer it, just ask.",
    quickLinksTitle: "Good pages to check before you write",
    ctaTitle: "Download Translator first if you want the fastest answer.",
    ctaBody:
      "A lot of questions become obvious once the app is open and the free tools are in front of you. If not, email us after that.",
    ctaNote:
      "Downloading and subtitle editing are free. AI only costs money when you actually run AI features.",
  },
  ko: {
    metadataDescription:
      "지원, 가격, 제휴, 대량 사용, 실제 워크플로우에 맞춘 Translator 문의.",
    heroEyebrow: "사람에게 바로 묻기",
    heroPoints: [
      "제품이나 설정 관련 질문을 바로 할 수 있습니다",
      "가격, BYO, 더 큰 사용량에 대해 상담할 수 있습니다",
      "실제 워크플로우에 맞춰 Translator를 써야 한다면 문의하면 됩니다",
    ],
    sectionEyebrow: "연락 방법",
    sectionTitle: "사이트에서 답을 못 찾았다면 그냥 물어보면 됩니다.",
    quickLinksTitle: "메일 보내기 전에 보면 좋은 페이지",
    ctaTitle: "가장 빠른 답은 Translator를 먼저 직접 열어보는 것입니다.",
    ctaBody:
      "앱을 열고 무료 도구를 직접 써보면 많은 질문이 바로 풀립니다. 그래도 남는 게 있으면 그때 메일을 보내면 됩니다.",
    ctaNote:
      "다운로드와 자막 편집은 무료입니다. AI 비용은 AI 기능을 실제로 실행할 때만 생깁니다.",
  },
  es: {
    metadataDescription:
      "Contacta con Stage5 sobre soporte, precios, alianzas y flujos de Translator mas intensos.",
    heroEyebrow: "Habla con una persona",
    heroPoints: [
      "Haz preguntas sobre el producto o la configuracion",
      "Habla de precios, BYO o uso mas pesado",
      "Escribe si estas intentando hacer que Translator encaje en un flujo real",
    ],
    sectionEyebrow: "Como contactarnos",
    sectionTitle: "Mantenlo simple. Si el sitio no lo respondio, solo pregunta.",
    quickLinksTitle: "Paginas utiles antes de escribir",
    ctaTitle: "Descarga primero Translator si quieres la respuesta mas rapida.",
    ctaBody:
      "Muchas preguntas se aclaran en cuanto abres la app y tienes delante las herramientas gratis. Si no, escribenos despues de eso.",
    ctaNote:
      "La descarga y la edicion de subtitulos son gratis. La IA solo cuesta cuando realmente usas funciones de IA.",
  },
  ja: {
    metadataDescription:
      "サポート、料金、提携、より重い Translator の使い方について Stage5 に連絡できます。",
    heroEyebrow: "人に直接聞く",
    heroPoints: [
      "製品や設定について質問できます",
      "料金、BYO、より大きな利用について相談できます",
      "Translator を実際のワークフローに乗せたいなら連絡できます",
    ],
    sectionEyebrow: "連絡方法",
    sectionTitle: "シンプルにいきましょう。サイトで答えが出なければ、そのまま聞いてください。",
    quickLinksTitle: "連絡する前に見るとよいページ",
    ctaTitle: "いちばん早い答えがほしいなら、先に Translator を開いてください。",
    ctaBody:
      "アプリを開いて無料ツールを触ると、多くの疑問はそこで解けます。それでも残るなら、そのあとでメールしてください。",
    ctaNote:
      "ダウンロードと字幕編集は無料です。AI の費用は AI 機能を実際に使ったときだけ発生します。",
  },
  zh: {
    metadataDescription:
      "如果你想联系 Stage5 询问支持、价格、合作或更重度的 Translator 使用场景，可以从这里开始。",
    heroEyebrow: "直接和人沟通",
    heroPoints: [
      "可以直接问产品或设置问题",
      "可以聊价格、BYO 或更重度的使用",
      "如果你想让 Translator 适配真实工作流，也可以联系",
    ],
    sectionEyebrow: "如何联系",
    sectionTitle: "保持简单。如果网站没回答，就直接来问。",
    quickLinksTitle: "写邮件前值得先看的页面",
    ctaTitle: "如果你想最快得到答案，先下载 Translator。",
    ctaBody:
      "很多问题在你打开应用、看到免费工具之后就会变得很清楚。如果还不清楚，再给我们发邮件。",
    ctaNote:
      "下载和字幕编辑是免费的。只有你真的运行 AI 功能时才会产生 AI 费用。",
  },
  fr: {
    metadataDescription:
      "Contactez Stage5 pour le support, les tarifs, les partenariats et les usages Translator plus lourds.",
    heroEyebrow: "Parlez a un humain",
    heroPoints: [
      "Posez vos questions produit ou configuration",
      "Parlez tarifs, BYO ou usage plus intensif",
      "Ecrivez si vous essayez de faire entrer Translator dans un vrai flux",
    ],
    sectionEyebrow: "Comment nous joindre",
    sectionTitle: "Faites simple. Si le site n'a pas repondu, demandez.",
    quickLinksTitle: "Bonnes pages a verifier avant d'ecrire",
    ctaTitle: "Telechargez d'abord Translator si vous voulez la reponse la plus rapide.",
    ctaBody:
      "Beaucoup de questions deviennent evidentes une fois l'app ouverte et les outils gratuits sous les yeux. Sinon, envoyez-nous un email apres cela.",
    ctaNote:
      "Le telechargement et l'edition de sous-titres sont gratuits. L'IA ne coute de l'argent que lorsque vous lancez vraiment des fonctions IA.",
  },
  de: {
    metadataDescription:
      "Kontaktiere Stage5 zu Support, Preisen, Partnerschaften und groesseren Translator-Workflows.",
    heroEyebrow: "Mit einem Menschen sprechen",
    heroPoints: [
      "Fragen zu Produkt oder Einrichtung stellen",
      "Preise, BYO oder groessere Nutzung besprechen",
      "Schreiben, wenn du Translator in einen echten Workflow einpassen willst",
    ],
    sectionEyebrow: "So erreichst du uns",
    sectionTitle: "Mach es einfach. Wenn die Website es nicht beantwortet hat, frag einfach.",
    quickLinksTitle: "Gute Seiten vor dem Schreiben",
    ctaTitle: "Lade zuerst Translator herunter, wenn du die schnellste Antwort willst.",
    ctaBody:
      "Viele Fragen klaeren sich, sobald die App offen ist und die kostenlosen Tools vor dir liegen. Wenn nicht, schreib uns danach eine Mail.",
    ctaNote:
      "Download und Untertitelbearbeitung sind kostenlos. KI kostet nur dann Geld, wenn du KI-Funktionen wirklich startest.",
  },
  pt: {
    metadataDescription:
      "Fale com a Stage5 sobre suporte, precos, parcerias e fluxos mais pesados no Translator.",
    heroEyebrow: "Fale com uma pessoa",
    heroPoints: [
      "Tire duvidas sobre produto ou configuracao",
      "Converse sobre precos, BYO ou uso mais pesado",
      "Entre em contato se estiver tentando encaixar o Translator em um fluxo real",
    ],
    sectionEyebrow: "Como falar com a gente",
    sectionTitle: "Sem complicar. Se o site nao respondeu, e so perguntar.",
    quickLinksTitle: "Paginas boas para ver antes de escrever",
    ctaTitle: "Baixe primeiro o Translator se quiser a resposta mais rapida.",
    ctaBody:
      "Muitas perguntas ficam obvias quando o app esta aberto e as ferramentas gratis estao na sua frente. Se nao, mande email depois disso.",
    ctaNote:
      "Baixar e editar legendas e gratis. A IA so custa dinheiro quando voce realmente usa recursos de IA.",
  },
};

const metadataKeywords: Record<Locale, string[]> = {
  en: [
    "Translator contact",
    "Stage5 Tools support",
    "video translation help",
  ],
  ko: [
    "Translator 문의",
    "Stage5 Tools 지원",
    "비디오 번역 문의",
    "엔터프라이즈 번역 문의",
  ],
  es: [
    "contacto de Translator",
    "soporte de Stage5 Tools",
    "ayuda con traduccion de video",
    "contacto para traduccion empresarial",
  ],
  ja: [
    "Translator お問い合わせ",
    "Stage5 Tools サポート",
    "動画翻訳サポート",
    "法人翻訳のお問い合わせ",
  ],
  zh: [
    "Translator 联系方式",
    "Stage5 Tools 支持",
    "视频翻译帮助",
    "企业翻译咨询",
  ],
  fr: [
    "contact Translator",
    "support Stage5 Tools",
    "aide traduction video",
    "contact traduction entreprise",
  ],
  de: [
    "Translator Kontakt",
    "Stage5 Tools Support",
    "Hilfe zur Video-Uebersetzung",
    "Anfrage fuer Unternehmens-Uebersetzung",
  ],
  pt: [
    "contato do Translator",
    "suporte Stage5 Tools",
    "ajuda com traducao de video",
    "contato para traducao empresarial",
  ],
};

function getPageCopy(locale: Locale): ContactPageCopy {
  return pageCopy[locale];
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getPageCopy(locale);

  return buildMetadata({
    title: `${t("contactTitle", locale)} | Translator`,
    description: copy.metadataDescription,
    path: "/contact",
    keywords: metadataKeywords[locale],
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
  const copy = getPageCopy(locale);
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  const quickLinks = [
    { label: t("navPricing", locale), href: "/pricing" },
    { label: t("navAiTranslation", locale), href: "/translate" },
    { label: t("navFaq", locale), href: "/faq" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navContact", locale) },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {t("contactTitle", locale)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {t("contactSubtitle", locale)}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-pink-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  {t("contactEmail", locale)}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {t("contactEmailDesc", locale)}
                </p>
                <p className="mt-5 text-lg font-medium text-white">
                  <a
                    href="mailto:mikey@stage5.tools"
                    className="transition hover:text-pink-200"
                  >
                    mikey@stage5.tools
                  </a>
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-black/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  {t("contactEnterprise", locale)}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {t("contactEnterpriseDesc", locale)}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.sectionEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.sectionTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-semibold text-white">
                {t("contactEmail", locale)}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                {t("contactEmailDesc", locale)}
              </p>
              <a
                href="mailto:mikey@stage5.tools"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                mikey@stage5.tools
              </a>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-semibold text-white">
                {copy.quickLinksTitle}
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={localizeHref(link.href)}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="all-downloads" className="pb-20 pt-8 text-center">
          <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {copy.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300">
            {copy.ctaBody}
          </p>
          <FeatureDownloadCta
            locale={locale}
            note={copy.ctaNote}
            align="center"
            className="mt-8"
          />
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

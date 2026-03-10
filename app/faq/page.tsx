import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
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

type FaqPageCopy = {
  metadataDescription: string;
  heroEyebrow: string;
  heroPoints: string[];
  sectionEyebrow: string;
  sectionTitle: string;
  bottomCards: Array<{
    title: string;
    body: string;
    ctaLabel: string;
    href: string;
  }>;
  ctaTitle: string;
  ctaBody: string;
  ctaNote: string;
};

const pageCopy: Partial<Record<Locale, FaqPageCopy>> = {
  en: {
    metadataDescription:
      "Answers about pricing, formats, platforms, internet requirements, and how Translator handles AI translation, subtitles, and exports.",
    heroEyebrow: "Quick answers",
    heroPoints: [
      "What is free and what uses credits",
      "What file formats and platforms the app supports",
      "How translation, exports, and internet-dependent features work",
    ],
    sectionEyebrow: "Common questions",
    sectionTitle: "The answers people usually need before they install or pay.",
    bottomCards: [
      {
        title: "Want to see translation first?",
        body: "If you want to understand how subtitle translation works before worrying about details, the translation page is the best next stop.",
        ctaLabel: "See AI Translation",
        href: "/translate",
      },
      {
        title: "Need the pricing version of this?",
        body: "If the real question is what stays free and when money starts getting involved, the pricing page explains the difference between free tools, credits, and BYO.",
        ctaLabel: "See Pricing",
        href: "/pricing",
      },
    ],
    ctaTitle: "Download Translator and figure out the rest once the app is in front of you.",
    ctaBody:
      "Most people understand the product much faster once they can try the free tools, open a video, and see how the workflow feels.",
    ctaNote:
      "Downloading and subtitle editing are free. AI only costs money when you actually run AI features.",
  },
  ko: {
    metadataDescription:
      "가격, 지원 형식, 플랫폼, 인터넷 필요 여부, 그리고 Translator의 번역·자막·내보내기 방식에 대한 답변.",
    heroEyebrow: "빠른 답변",
    heroPoints: [
      "무엇이 무료이고 무엇이 크레딧을 쓰는지",
      "어떤 파일 형식과 플랫폼을 지원하는지",
      "번역, 내보내기, 인터넷이 필요한 기능이 어떻게 돌아가는지",
    ],
    sectionEyebrow: "자주 나오는 질문",
    sectionTitle: "설치하거나 결제하기 전에 가장 많이 확인하는 것들입니다.",
    bottomCards: [
      {
        title: "먼저 번역 쪽이 궁금하다면",
        body: "세부 정보보다 실제 자막 번역 흐름이 먼저 궁금하다면 번역 페이지를 먼저 보는 편이 가장 빠릅니다.",
        ctaLabel: "AI 번역 보기",
        href: "/translate",
      },
      {
        title: "사실 궁금한 게 가격이라면",
        body: "무엇이 무료이고 언제부터 돈이 드는지가 핵심이라면 가격 페이지에서 무료 도구, 크레딧, BYO의 차이를 바로 볼 수 있습니다.",
        ctaLabel: "가격 보기",
        href: "/pricing",
      },
    ],
    ctaTitle: "Translator를 다운로드하고, 나머지는 앱을 직접 보면서 판단하세요.",
    ctaBody:
      "대부분은 무료 도구를 직접 써보고 영상을 열어보면 제품이 훨씬 빨리 이해됩니다.",
    ctaNote:
      "다운로드와 자막 편집은 무료입니다. AI 비용은 AI 기능을 실제로 실행할 때만 생깁니다.",
  },
  es: {
    metadataDescription:
      "Respuestas sobre precios, formatos, plataformas, requisitos de internet y sobre como Translator maneja traduccion con IA, subtitulos y exportaciones.",
    heroEyebrow: "Respuestas rapidas",
    heroPoints: [
      "Que es gratis y que usa creditos",
      "Que formatos y plataformas admite la app",
      "Como funcionan la traduccion, las exportaciones y las funciones que dependen de internet",
    ],
    sectionEyebrow: "Preguntas comunes",
    sectionTitle: "Las respuestas que la gente suele necesitar antes de instalar o pagar.",
    bottomCards: [
      {
        title: "Quieres ver primero la traduccion?",
        body: "Si quieres entender como funciona la traduccion de subtitulos antes de entrar en detalles, la pagina de traduccion es la mejor siguiente parada.",
        ctaLabel: "Ver Traduccion con IA",
        href: "/translate",
      },
      {
        title: "Necesitas la version sobre precios?",
        body: "Si la pregunta real es que sigue siendo gratis y cuando empieza a costar dinero, la pagina de precios explica la diferencia entre herramientas gratis, creditos y BYO.",
        ctaLabel: "Ver Precios",
        href: "/pricing",
      },
    ],
    ctaTitle: "Descarga Translator y entiende el resto cuando tengas la app delante.",
    ctaBody:
      "La mayoria entiende el producto mucho mas rapido cuando puede probar las herramientas gratis, abrir un video y sentir el flujo por si misma.",
    ctaNote:
      "La descarga y la edicion de subtitulos son gratis. La IA solo cuesta cuando realmente usas funciones de IA.",
  },
  ja: {
    metadataDescription:
      "料金、対応形式、対応プラットフォーム、インターネット要件、そして Translator の AI 翻訳、字幕、書き出しの扱い方についての回答です。",
    heroEyebrow: "すぐ分かる答え",
    heroPoints: [
      "無料の範囲とクレジットが必要な範囲",
      "対応しているファイル形式とプラットフォーム",
      "翻訳、書き出し、インターネット依存機能の動き方",
    ],
    sectionEyebrow: "よくある質問",
    sectionTitle: "インストールや支払いの前に、たいていの人が確認したい答えです。",
    bottomCards: [
      {
        title: "まず翻訳を見たいですか。",
        body: "細かい仕様より先に字幕翻訳の流れをつかみたいなら、次は翻訳ページを見るのがいちばん早いです。",
        ctaLabel: "AI 翻訳を見る",
        href: "/translate",
      },
      {
        title: "料金の話を知りたいですか。",
        body: "本当に知りたいのが無料の範囲と課金が始まる場所なら、料金ページで無料ツール、クレジット、BYO の違いが分かります。",
        ctaLabel: "料金を見る",
        href: "/pricing",
      },
    ],
    ctaTitle: "Translator をダウンロードして、あとはアプリを見ながら判断してください。",
    ctaBody:
      "多くの人は、無料ツールを試し、動画を開き、流れを触ったほうがずっと早く製品を理解できます。",
    ctaNote:
      "ダウンロードと字幕編集は無料です。AI の費用は AI 機能を実際に使ったときだけ発生します。",
  },
  zh: {
    metadataDescription:
      "这里回答价格、格式、平台、是否需要联网，以及 Translator 如何处理 AI 翻译、字幕和导出。",
    heroEyebrow: "快速回答",
    heroPoints: [
      "哪些是免费的，哪些会用到积分",
      "应用支持哪些文件格式和平台",
      "翻译、导出和依赖联网的功能是怎么工作的",
    ],
    sectionEyebrow: "常见问题",
    sectionTitle: "这些通常是大家在安装或付费前最想先弄清楚的事。",
    bottomCards: [
      {
        title: "想先看翻译怎么做？",
        body: "如果你想先理解字幕翻译的流程，再去关心细节，那么翻译页面是最合适的下一站。",
        ctaLabel: "查看 AI 翻译",
        href: "/translate",
      },
      {
        title: "真正想问的是价格？",
        body: "如果核心问题是哪些继续免费、什么时候开始花钱，价格页面会解释免费工具、积分和 BYO 的区别。",
        ctaLabel: "查看价格",
        href: "/pricing",
      },
    ],
    ctaTitle: "先下载 Translator，剩下的等你把应用打开再判断。",
    ctaBody:
      "大多数人一旦能先试免费工具、打开一个视频、自己走一遍流程，就会更快理解这个产品。",
    ctaNote:
      "下载和字幕编辑是免费的。只有你真的运行 AI 功能时才会产生 AI 费用。",
  },
  fr: {
    metadataDescription:
      "Reponses sur les tarifs, les formats, les plateformes, les besoins en internet et sur la facon dont Translator gere la traduction IA, les sous-titres et les exports.",
    heroEyebrow: "Reponses rapides",
    heroPoints: [
      "Ce qui est gratuit et ce qui utilise des credits",
      "Les formats et plateformes pris en charge",
      "Le fonctionnement de la traduction, des exports et des fonctions qui dependent d'internet",
    ],
    sectionEyebrow: "Questions courantes",
    sectionTitle: "Les reponses dont les gens ont le plus souvent besoin avant d'installer ou de payer.",
    bottomCards: [
      {
        title: "Vous voulez voir la traduction d'abord ?",
        body: "Si vous voulez comprendre le flux de traduction de sous-titres avant d'entrer dans les details, la page traduction est la meilleure suite.",
        ctaLabel: "Voir la traduction IA",
        href: "/translate",
      },
      {
        title: "Vous cherchez surtout la reponse cote prix ?",
        body: "Si la vraie question est ce qui reste gratuit et quand l'argent entre en jeu, la page tarifs explique la difference entre outils gratuits, credits et BYO.",
        ctaLabel: "Voir les tarifs",
        href: "/pricing",
      },
    ],
    ctaTitle: "Telechargez Translator et clarifiez le reste une fois l'app sous les yeux.",
    ctaBody:
      "La plupart des gens comprennent beaucoup plus vite le produit une fois qu'ils peuvent essayer les outils gratuits, ouvrir une video et sentir le flux.",
    ctaNote:
      "Le telechargement et l'edition de sous-titres sont gratuits. L'IA ne coute de l'argent que lorsque vous lancez vraiment des fonctions IA.",
  },
  de: {
    metadataDescription:
      "Antworten zu Preisen, Formaten, Plattformen, Internetbedarf und dazu, wie Translator KI-Uebersetzung, Untertitel und Exporte handhabt.",
    heroEyebrow: "Schnelle Antworten",
    heroPoints: [
      "Was kostenlos ist und was Credits verbraucht",
      "Welche Dateiformate und Plattformen die App unterstuetzt",
      "Wie Uebersetzung, Exporte und internetabhaengige Funktionen funktionieren",
    ],
    sectionEyebrow: "Hauefige Fragen",
    sectionTitle: "Die Antworten, die die meisten vor Installation oder Zahlung zuerst brauchen.",
    bottomCards: [
      {
        title: "Willst du zuerst die Uebersetzung sehen?",
        body: "Wenn du erst verstehen willst, wie die Untertitel-Uebersetzung ablaeuft, bevor du in Details gehst, ist die Uebersetzungsseite der beste naechste Schritt.",
        ctaLabel: "KI-Uebersetzung ansehen",
        href: "/translate",
      },
      {
        title: "Brauchst du die Preisversion davon?",
        body: "Wenn die eigentliche Frage ist, was kostenlos bleibt und wann Geld ins Spiel kommt, erklaert die Preisseite den Unterschied zwischen kostenlosen Tools, Credits und BYO.",
        ctaLabel: "Preise ansehen",
        href: "/pricing",
      },
    ],
    ctaTitle: "Lade Translator herunter und klaere den Rest, wenn die App vor dir ist.",
    ctaBody:
      "Die meisten verstehen das Produkt viel schneller, sobald sie die kostenlosen Tools ausprobieren, ein Video oeffnen und den Ablauf selbst sehen koennen.",
    ctaNote:
      "Download und Untertitelbearbeitung sind kostenlos. KI kostet nur dann Geld, wenn du KI-Funktionen wirklich startest.",
  },
  pt: {
    metadataDescription:
      "Respostas sobre preco, formatos, plataformas, necessidade de internet e sobre como o Translator lida com traducao por IA, legendas e exportacoes.",
    heroEyebrow: "Respostas rapidas",
    heroPoints: [
      "O que e gratis e o que usa creditos",
      "Quais formatos e plataformas o app suporta",
      "Como funcionam traducao, exportacoes e recursos que dependem da internet",
    ],
    sectionEyebrow: "Perguntas comuns",
    sectionTitle: "As respostas que as pessoas costumam precisar antes de instalar ou pagar.",
    bottomCards: [
      {
        title: "Quer ver a traducao primeiro?",
        body: "Se voce quer entender como a traducao de legendas funciona antes de entrar nos detalhes, a pagina de traducao e a melhor proxima parada.",
        ctaLabel: "Ver traducao com IA",
        href: "/translate",
      },
      {
        title: "Precisa da versao sobre preco?",
        body: "Se a pergunta real e o que continua gratis e quando o dinheiro entra na conversa, a pagina de precos explica a diferenca entre ferramentas gratis, creditos e BYO.",
        ctaLabel: "Ver precos",
        href: "/pricing",
      },
    ],
    ctaTitle: "Baixe o Translator e entenda o resto quando o app estiver na sua frente.",
    ctaBody:
      "A maioria das pessoas entende o produto muito mais rapido quando pode testar as ferramentas gratis, abrir um video e sentir como o fluxo funciona.",
    ctaNote:
      "Baixar e editar legendas e gratis. A IA so custa dinheiro quando voce realmente usa recursos de IA.",
  },
  vi: {
    metadataDescription:
      "Câu trả lời về giá, định dạng, nền tảng, yêu cầu internet và cách Translator xử lý dịch AI, phụ đề và xuất file.",
    heroEyebrow: "Câu trả lời nhanh",
    heroPoints: [
      "Phần nào miễn phí và phần nào dùng credit",
      "Ứng dụng hỗ trợ những định dạng và nền tảng nào",
      "Dịch, xuất file và các tính năng cần internet hoạt động ra sao",
    ],
    sectionEyebrow: "Câu hỏi thường gặp",
    sectionTitle:
      "Những câu trả lời mọi người thường cần trước khi cài đặt hoặc trả tiền.",
    bottomCards: [
      {
        title: "Muốn xem phần dịch trước?",
        body: "Nếu bạn muốn hiểu cách dịch phụ đề hoạt động trước khi bận tâm đến chi tiết, trang dịch là điểm dừng tiếp theo hợp lý nhất.",
        ctaLabel: "Xem Dịch bằng AI",
        href: "/translate",
      },
      {
        title: "Thực ra bạn đang hỏi về giá?",
        body: "Nếu câu hỏi thực sự là phần nào vẫn miễn phí và lúc nào bắt đầu tốn tiền, trang giá sẽ giải thích khác biệt giữa công cụ miễn phí, credit và BYO.",
        ctaLabel: "Xem Giá",
        href: "/pricing",
      },
    ],
    ctaTitle:
      "Tải Translator rồi hiểu phần còn lại khi ứng dụng nằm ngay trước mặt bạn.",
    ctaBody:
      "Hầu hết mọi người hiểu sản phẩm nhanh hơn nhiều khi họ có thể thử các công cụ miễn phí, mở một video và cảm nhận quy trình hoạt động.",
    ctaNote:
      "Tải xuống và chỉnh sửa phụ đề đều miễn phí. AI chỉ tốn tiền khi bạn thực sự chạy các tính năng AI.",
  },
};

const metadataKeywords: Partial<Record<Locale, string[]>> = {
  en: [
    "Translator FAQ",
    "subtitle editor FAQ",
    "video translation help",
    "SRT translator questions",
  ],
  ko: [
    "Translator FAQ",
    "자막 편집기 FAQ",
    "비디오 번역 도움말",
    "SRT 번역 질문",
  ],
  es: [
    "FAQ de Translator",
    "FAQ del editor de subtitulos",
    "ayuda de traduccion de video",
    "preguntas sobre traductor SRT",
  ],
  ja: [
    "Translator FAQ",
    "字幕エディタ FAQ",
    "動画翻訳ヘルプ",
    "SRT 翻訳の質問",
  ],
  zh: [
    "Translator 常见问题",
    "字幕编辑器 FAQ",
    "视频翻译帮助",
    "SRT 翻译问题",
  ],
  fr: [
    "FAQ Translator",
    "FAQ editeur de sous-titres",
    "aide traduction video",
    "questions traducteur SRT",
  ],
  de: [
    "Translator FAQ",
    "Untertitel-Editor FAQ",
    "Hilfe zur Video-Uebersetzung",
    "SRT-Uebersetzer Fragen",
  ],
  pt: [
    "FAQ do Translator",
    "FAQ do editor de legendas",
    "ajuda com traducao de video",
    "perguntas sobre tradutor SRT",
  ],
  vi: [
    "FAQ Translator",
    "FAQ trình chỉnh sửa phụ đề",
    "hỗ trợ dịch video",
    "câu hỏi về trình dịch SRT",
  ],
};

function getPageCopy(locale: Locale): FaqPageCopy {
  return pageCopy[locale] ?? pageCopy.en!;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getPageCopy(locale);

  return buildMetadata({
    title: `${t("faqTitle", locale)} | Translator`,
    description: copy.metadataDescription,
    path: "/faq",
    keywords: metadataKeywords[locale] ?? metadataKeywords.en!,
    locale,
  });
}

export default async function FAQPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = getPageCopy(locale);
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

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

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: t(faq.qKey, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(faq.aKey, locale),
      },
    })),
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navFaq", locale) },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {t("faqTitle", locale)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {t("faqSubtitle", locale)}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
            </div>

            <div className="grid gap-4">
              {faqs.slice(0, 3).map((faq) => (
                <div
                  key={`hero-${faq.qKey}`}
                  className="rounded-[28px] border border-white/10 bg-black/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm"
                >
                  <h2 className="text-lg font-semibold text-white">
                    {t(faq.qKey, locale)}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {t(faq.aKey, locale)}
                  </p>
                </div>
              ))}
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
            {faqs.map((faq) => (
              <div
                key={faq.qKey}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {t(faq.qKey, locale)}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {t(faq.aKey, locale)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {copy.bottomCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <h2 className="text-2xl font-semibold text-white">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {card.body}
                </p>
                <Link
                  href={localizeHref(card.href)}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
                >
                  {card.ctaLabel}
                </Link>
              </div>
            ))}
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

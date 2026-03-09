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

type PricingPageCopy = {
  metadataDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroPoints: string[];
  plansEyebrow: string;
  plansTitle: string;
  plans: Array<{
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
  }>;
  packsEyebrow: string;
  packsTitle: string;
  packsDescription: string;
  packs: Array<{
    name: string;
    price: string;
    value: string;
  }>;
  packFootnote: string;
  byoEyebrow: string;
  byoTitle: string;
  byoDescription: string;
  byoItems: string[];
  faqCards: Array<{
    title: string;
    body: string;
    ctaLabel: string;
    href: string;
  }>;
  ctaTitle: string;
  ctaBody: string;
  ctaNote: string;
  metadataKeywords: string[];
};

const pageCopy = {
  en: {
    metadataDescription:
      "Free to start. Pay only when AI runs with Stage5 credits, or unlock BYO once and use your own OpenAI, Anthropic, and ElevenLabs accounts.",
    heroEyebrow: "Free to start",
    heroTitle: "Pay only when AI actually runs.",
    heroDescription:
      "Downloading, subtitle editing, subtitle merging, and exports stay free. When you want transcription, translation, highlights, or dubbing, you can either use Stage5 credits for convenience or unlock BYO once and bill your own provider accounts directly.",
    heroPoints: [
      "No subscription just to install and use the app",
      "Free core tools for download, subtitle editing, merging, and exports",
      "Choose between Stage5 credits and BYO provider billing",
    ],
    plansEyebrow: "How billing works",
    plansTitle: "Two ways to pay for AI, one free core app.",
    plans: [
      {
        eyebrow: "Free core app",
        title: "$0 to download and start using it",
        body: "The parts people use to bring videos in and work on subtitles stay free, so you can get real value from the app before spending anything on AI.",
        items: [
          "Download videos from URLs",
          "Edit and sync subtitles",
          "Merge subtitle tracks",
          "Export SRT and finished subtitle work",
        ],
      },
      {
        eyebrow: "Stage5 credits",
        title: "The simplest way to run AI",
        body: "Buy credits inside the app and spend them only when you run transcription, translation, summaries or highlights, or dubbing. No API setup required.",
        items: [
          "Best for people who want the easiest path",
          "Good when you do not want to manage provider accounts",
          "Works for transcription, translation, summaries, highlights, and dubbing",
        ],
      },
      {
        eyebrow: "BYO mode",
        title: "$10 one-time unlock, then use your own keys",
        body: "If you want direct control over provider billing, unlock BYO once and run supported AI features on your OpenAI, Anthropic, or ElevenLabs accounts instead of spending Stage5 credits.",
        items: [
          "Usually cheaper than credits if you already manage API usage",
          "Lets you choose your own provider path",
          "Good for heavier users who want direct billing",
        ],
      },
    ],
    packsEyebrow: "Example credit packs",
    packsTitle: "Stage5 credit packs still work like a simple wallet.",
    packsDescription:
      "These are rough translation-equivalent estimates based on current app heuristics. Quality modes, dubbing, and different AI paths can consume more.",
    packs: [
      { name: "Micro", price: "$1", value: "~50 minutes" },
      { name: "Starter", price: "$5", value: "~8 hours" },
      { name: "Standard", price: "$10", value: "~18 hours" },
      { name: "Pro", price: "$50", value: "~127 hours" },
    ],
    packFootnote:
      "Use credits when you want convenience. Use BYO when you want the app workflow but prefer provider-direct billing.",
    byoEyebrow: "When BYO makes sense",
    byoTitle: "BYO is for people who already pay for AI and do not want to pay twice.",
    byoDescription:
      "If you already use paid OpenAI, Anthropic, or ElevenLabs API accounts, BYO lets you keep Translator's workflow while billing usage to those API accounts instead of consuming Stage5 credits.",
    byoItems: [
      "Best fit for heavier users who already manage API spend",
      "Good when you want provider-direct billing but still want the app experience",
      "Useful if you want credits for convenience sometimes and your own keys other times",
    ],
    faqCards: [
      {
        title: "What stays free?",
        body: "The app download, video downloading, subtitle editing, subtitle merging, and standard export tools stay free. You only pay when AI work actually runs.",
        ctaLabel: "See Subtitle Editor",
        href: "/subtitle-editor",
      },
      {
        title: "Need more than pricing?",
        body: "If you are trying to estimate heavier usage or decide between credits and BYO, the best next step is to talk through your actual workflow instead of guessing from a table.",
        ctaLabel: "Contact us",
        href: "/contact",
      },
    ],
    ctaTitle: "Download Translator and decide later how you want to pay for AI.",
    ctaBody:
      "Start with the free tools, then use Stage5 credits for the easy path or BYO if you want direct provider billing.",
    ctaNote:
      "Downloading and subtitle editing stay free. AI costs only show up when you run AI features.",
    metadataKeywords: [
      "Translator pricing",
      "AI translation credits",
      "video translation pricing",
      "BYO API keys",
    ],
  },
  ko: {
    metadataDescription:
      "무료로 시작하고 AI가 실제로 돌 때만 결제하세요. Stage5 크레딧을 쓰거나 BYO를 한 번만 열고 OpenAI, Anthropic, ElevenLabs API 계정으로 직접 결제할 수 있습니다.",
    heroEyebrow: "무료로 시작",
    heroTitle: "AI가 실제로 돌 때만 결제하세요.",
    heroDescription:
      "다운로드, 자막 편집, 자막 병합, 내보내기는 계속 무료입니다. 전사, 번역, 하이라이트, 더빙이 필요할 때만 Stage5 크레딧을 쓰거나, BYO를 한 번 열고 직접 쓰는 API 계정으로 결제할 수 있습니다.",
    heroPoints: [
      "앱을 설치하고 쓰기 위해 구독할 필요가 없습니다",
      "다운로드, 자막 편집, 병합, 내보내기 같은 핵심 도구는 무료입니다",
      "Stage5 크레딧과 BYO 직접 결제 중에서 고를 수 있습니다",
    ],
    plansEyebrow: "결제 방식",
    plansTitle: "무료 코어 앱 하나, AI 결제 방식은 두 가지.",
    plans: [
      {
        eyebrow: "무료 코어 앱",
        title: "$0으로 시작",
        body: "영상 가져오기와 자막 작업에 필요한 핵심 기능은 무료라서 AI에 돈을 쓰기 전에도 앱 자체로 충분한 가치를 얻을 수 있습니다.",
        items: [
          "URL로 영상 다운로드",
          "자막 편집과 싱크 조정",
          "자막 트랙 병합",
          "SRT와 완성된 자막 결과물 내보내기",
        ],
      },
      {
        eyebrow: "Stage5 크레딧",
        title: "가장 간단하게 AI를 쓰는 방법",
        body: "앱 안에서 크레딧을 사고, 전사, 번역, 요약이나 하이라이트, 더빙을 돌릴 때만 씁니다. API 설정은 필요 없습니다.",
        items: [
          "가장 간단한 경로를 원하는 사람에게 적합합니다",
          "프로바이더 계정을 직접 관리하고 싶지 않을 때 좋습니다",
          "전사, 번역, 요약, 하이라이트, 더빙에 쓸 수 있습니다",
        ],
      },
      {
        eyebrow: "BYO 모드",
        title: "$10에 한번 잠금 해제하고 평생 내 API 키로 사용",
        body: "프로바이더 결제를 직접 관리하고 싶다면 BYO를 한 번만 잠금 해제한 뒤 OpenAI, Anthropic, ElevenLabs API 계정으로 지원 기능을 직접 실행할 수 있습니다.",
        items: [
          "이미 API 사용량을 관리한다면 보통 크레딧보다 저렴합니다",
          "원하는 프로바이더 경로를 직접 고를 수 있습니다",
          "사용량이 많은 사람에게 잘 맞습니다",
        ],
      },
    ],
    packsEyebrow: "예시 크레딧 팩",
    packsTitle: "Stage5 크레딧은 단순한 지갑처럼 이해하면 됩니다.",
    packsDescription:
      "현재 앱 추정치 기준의 대략적인 번역 환산 시간입니다. 품질 모드나 더빙, 다른 AI 경로를 쓰면 더 빨리 소모될 수 있습니다.",
    packs: [
      { name: "Micro", price: "$1", value: "~50분" },
      { name: "Starter", price: "$5", value: "~8시간" },
      { name: "Standard", price: "$10", value: "~18시간" },
      { name: "Pro", price: "$50", value: "~127시간" },
    ],
    packFootnote:
      "간편함이 중요하면 크레딧을 쓰고, 앱 흐름은 그대로 두되 프로바이더 직접 결제를 원하면 BYO를 쓰면 됩니다.",
    byoEyebrow: "BYO가 맞는 경우",
    byoTitle: "BYO는 이미 AI 비용을 직접 내고 있고, 이중으로 내고 싶지 않은 사람을 위한 옵션입니다.",
    byoDescription:
      "이미 OpenAI, Anthropic, ElevenLabs의 유료 API 계정을 쓰고 있다면 BYO로 Translator의 흐름은 그대로 쓰면서 사용량은 Stage5 크레딧 대신 그 API 계정으로 직접 청구할 수 있습니다.",
    byoItems: [
      "이미 API 비용을 직접 관리하는 헤비 유저에게 잘 맞습니다",
      "프로바이더 직접 결제를 원하지만 앱 경험은 그대로 쓰고 싶을 때 좋습니다",
      "어떤 때는 크레딧, 어떤 때는 내 키를 쓰고 싶을 때 유용합니다",
    ],
    faqCards: [
      {
        title: "무엇이 계속 무료인가요?",
        body: "앱 다운로드, 영상 다운로드, 자막 편집, 자막 병합, 기본 내보내기 도구는 계속 무료입니다. AI 작업이 실제로 실행될 때만 비용이 생깁니다.",
        ctaLabel: "자막 편집기 보기",
        href: "/subtitle-editor",
      },
      {
        title: "가격표만으로 판단하기 어렵다면",
        body: "사용량이 많거나 크레딧과 BYO 중 무엇이 맞는지 고민된다면 표만 보기보다 실제 쓰는 흐름 기준으로 이야기하는 편이 더 정확합니다.",
        ctaLabel: "문의하기",
        href: "/contact",
      },
    ],
    ctaTitle: "Translator를 다운로드하고, AI 결제 방식은 나중에 정하세요.",
    ctaBody:
      "무료 도구로 먼저 시작하고, 가장 쉬운 길이 필요하면 Stage5 크레딧을, 직접 결제를 원하면 BYO를 쓰면 됩니다.",
    ctaNote:
      "다운로드와 자막 편집은 무료입니다. AI 비용은 AI 기능을 실제로 실행할 때만 생깁니다.",
    metadataKeywords: [
      "Translator 가격",
      "AI 번역 크레딧",
      "비디오 번역 요금",
      "BYO API 키",
    ],
  },
  es: {
    metadataDescription:
      "Empieza gratis. Paga solo cuando la IA se ejecuta con créditos de Stage5, o desbloquea BYO una vez y usa tus propias cuentas de OpenAI, Anthropic y ElevenLabs.",
    heroEyebrow: "Gratis para empezar",
    heroTitle: "Paga solo cuando la IA de verdad se ejecuta.",
    heroDescription:
      "La descarga, la edición de subtítulos, la fusión de subtítulos y las exportaciones siguen siendo gratis. Cuando quieras transcripción, traducción, resúmenes, destacados o doblaje, puedes usar créditos de Stage5 por comodidad o desbloquear BYO una vez y facturar directamente a tus propias cuentas proveedoras.",
    heroPoints: [
      "Sin suscripción solo para instalar y usar la app",
      "Herramientas base gratis para descargar, editar subtítulos, fusionar y exportar",
      "Elige entre créditos de Stage5 y facturación BYO con tu proveedor",
    ],
    plansEyebrow: "Cómo funciona el cobro",
    plansTitle: "Dos formas de pagar la IA, una app base gratuita.",
    plans: [
      {
        eyebrow: "App base gratuita",
        title: "$0 para descargar y empezar a usarla",
        body: "Las partes que la gente usa para traer videos y trabajar los subtítulos siguen siendo gratis, así que puedes obtener valor real antes de gastar nada en IA.",
        items: [
          "Descargar videos desde URLs",
          "Editar y sincronizar subtítulos",
          "Fusionar pistas de subtítulos",
          "Exportar SRT y trabajo final de subtítulos",
        ],
      },
      {
        eyebrow: "Créditos Stage5",
        title: "La forma más simple de ejecutar IA",
        body: "Compra créditos dentro de la app y gástalos solo cuando ejecutes transcripción, traducción, resúmenes o destacados, o doblaje. No hace falta configurar APIs.",
        items: [
          "Ideal para quien quiere el camino más fácil",
          "Útil si no quieres gestionar cuentas de proveedores",
          "Sirve para transcripción, traducción, resúmenes, destacados y doblaje",
        ],
      },
      {
        eyebrow: "Modo BYO",
        title: "Desbloqueo único de $10 y luego usas tus propias claves",
        body: "Si quieres controlar directamente la facturación del proveedor, desbloquea BYO una vez y ejecuta las funciones de IA compatibles con tus cuentas de OpenAI, Anthropic o ElevenLabs en lugar de gastar créditos de Stage5.",
        items: [
          "Suele salir más barato que los créditos si ya gestionas uso de APIs",
          "Te deja elegir tu propia ruta de proveedor",
          "Va bien para usuarios intensivos que quieren cobro directo",
        ],
      },
    ],
    packsEyebrow: "Packs de créditos de ejemplo",
    packsTitle: "Los packs de créditos Stage5 siguen funcionando como una cartera simple.",
    packsDescription:
      "Son estimaciones aproximadas equivalentes a traducción basadas en las heurísticas actuales de la app. Los modos de calidad, el doblaje y otras rutas de IA pueden consumir más.",
    packs: [
      { name: "Micro", price: "$1", value: "~50 minutos" },
      { name: "Starter", price: "$5", value: "~8 horas" },
      { name: "Standard", price: "$10", value: "~18 horas" },
      { name: "Pro", price: "$50", value: "~127 horas" },
    ],
    packFootnote:
      "Usa créditos cuando quieras comodidad. Usa BYO cuando quieras el flujo de la app pero prefieras facturación directa con el proveedor.",
    byoEyebrow: "Cuándo tiene sentido BYO",
    byoTitle: "BYO es para quien ya paga IA y no quiere pagar dos veces.",
    byoDescription:
      "Si ya usas cuentas API de pago de OpenAI, Anthropic o ElevenLabs, BYO te deja mantener el flujo de Translator mientras la facturación va a esas cuentas en lugar de consumir créditos de Stage5.",
    byoItems: [
      "Mejor encaje para usuarios intensivos que ya controlan gasto en API",
      "Útil si quieres cobro directo del proveedor sin perder la experiencia de la app",
      "Práctico si a veces quieres créditos por comodidad y otras veces tus propias claves",
    ],
    faqCards: [
      {
        title: "¿Qué sigue siendo gratis?",
        body: "La descarga de la app, la descarga de videos, la edición de subtítulos, la fusión de subtítulos y las herramientas estándar de exportación siguen siendo gratis. Solo pagas cuando la IA realmente se ejecuta.",
        ctaLabel: "Ver Editor de Subtítulos",
        href: "/subtitle-editor",
      },
      {
        title: "¿Necesitas más que una tabla de precios?",
        body: "Si intentas estimar un uso más intenso o decidir entre créditos y BYO, el siguiente paso real es hablar de tu flujo concreto en vez de adivinar desde una tabla.",
        ctaLabel: "Contáctanos",
        href: "/contact",
      },
    ],
    ctaTitle: "Descarga Translator y decide después cómo quieres pagar la IA.",
    ctaBody:
      "Empieza con las herramientas gratis, luego usa créditos de Stage5 para el camino fácil o BYO si quieres facturación directa del proveedor.",
    ctaNote:
      "La descarga y la edición de subtítulos siguen siendo gratis. Los costos de IA solo aparecen cuando ejecutas funciones de IA.",
    metadataKeywords: [
      "precios de Translator",
      "créditos de traducción con IA",
      "precio de traducción de video",
      "claves API BYO",
    ],
  },
  ja: {
    metadataDescription:
      "無料で開始できます。Stage5 クレジットで AI を実行したときだけ支払うか、BYO を一度だけ解放して自分の OpenAI、Anthropic、ElevenLabs アカウントを使えます。",
    heroEyebrow: "無料で開始",
    heroTitle: "AI が実際に動いたときだけ支払います。",
    heroDescription:
      "ダウンロード、字幕編集、字幕結合、書き出しは無料のままです。文字起こし、翻訳、要約、ハイライト、吹き替えが必要なときだけ、手軽な Stage5 クレジットを使うか、BYO を一度解放して自分のプロバイダーアカウントへ直接課金できます。",
    heroPoints: [
      "アプリを入れて使うだけのためのサブスクは不要",
      "ダウンロード、字幕編集、結合、書き出しなどの基本ツールは無料",
      "Stage5 クレジットと BYO の直接課金を選べる",
    ],
    plansEyebrow: "料金の仕組み",
    plansTitle: "無料のコアアプリ 1 つ、AI の支払い方は 2 つ。",
    plans: [
      {
        eyebrow: "無料コアアプリ",
        title: "ダウンロードして使い始めるのは $0",
        body: "動画を持ち込み、字幕を扱うための中核機能は無料のままなので、AI にお金を使う前でもアプリ自体から十分な価値を得られます。",
        items: [
          "URL から動画をダウンロード",
          "字幕の編集と同期調整",
          "字幕トラックの結合",
          "SRT と完成した字幕作業を書き出し",
        ],
      },
      {
        eyebrow: "Stage5 クレジット",
        title: "いちばん簡単に AI を使う方法",
        body: "アプリ内でクレジットを購入し、文字起こし、翻訳、要約やハイライト、吹き替えを実行したときだけ使います。API 設定は不要です。",
        items: [
          "いちばん簡単な道を求める人向け",
          "プロバイダーアカウント管理をしたくないときに向く",
          "文字起こし、翻訳、要約、ハイライト、吹き替えに使える",
        ],
      },
      {
        eyebrow: "BYO モード",
        title: "$10 の一回解放で自分のキーを使う",
        body: "プロバイダー課金を自分で管理したいなら、BYO を一度解放して、Stage5 クレジットの代わりに OpenAI、Anthropic、ElevenLabs アカウントで対応 AI 機能を実行できます。",
        items: [
          "すでに API 利用を管理しているなら、たいていクレジットより安い",
          "自分でプロバイダー経路を選べる",
          "利用量が多く直接課金したい人に向く",
        ],
      },
    ],
    packsEyebrow: "クレジットパック例",
    packsTitle: "Stage5 クレジットパックは、今もシンプルなウォレット感覚です。",
    packsDescription:
      "現在のアプリの目安に基づく、おおよその翻訳換算です。品質モード、吹き替え、別の AI 経路では消費が増えることがあります。",
    packs: [
      { name: "Micro", price: "$1", value: "約50分" },
      { name: "Starter", price: "$5", value: "約8時間" },
      { name: "Standard", price: "$10", value: "約18時間" },
      { name: "Pro", price: "$50", value: "約127時間" },
    ],
    packFootnote:
      "手軽さを重視するならクレジット。アプリの流れは欲しいけれど請求はプロバイダー直結がいいなら BYO です。",
    byoEyebrow: "BYO が合うケース",
    byoTitle: "BYO は、すでに AI に払っていて二重に払いたくない人向けです。",
    byoDescription:
      "すでに OpenAI、Anthropic、ElevenLabs の有料 API アカウントを使っているなら、BYO で Translator の流れはそのままに、Stage5 クレジットではなく各 API アカウントへ直接使用量を載せられます。",
    byoItems: [
      "すでに API コストを管理しているヘビーユーザー向け",
      "プロバイダー直課金が欲しいがアプリ体験は保ちたいときに良い",
      "便利さのためにクレジットを使う時と、自分のキーを使う時を使い分けたいなら便利",
    ],
    faqCards: [
      {
        title: "何が無料のままですか？",
        body: "アプリのダウンロード、動画ダウンロード、字幕編集、字幕結合、標準的な書き出しツールは無料のままです。AI 作業が実際に動いたときだけ支払いが発生します。",
        ctaLabel: "字幕エディタを見る",
        href: "/subtitle-editor",
      },
      {
        title: "価格表だけでは足りないですか？",
        body: "利用量が多いケースを見積もったり、クレジットと BYO のどちらにするか決めたいなら、表だけで推測するより実際の流れを基準に話す方が確実です。",
        ctaLabel: "お問い合わせ",
        href: "/contact",
      },
    ],
    ctaTitle: "Translator をダウンロードして、AI の支払い方は後で決めてください。",
    ctaBody:
      "まずは無料ツールから始めて、簡単な道なら Stage5 クレジット、直接課金なら BYO を選べます。",
    ctaNote:
      "ダウンロードと字幕編集は無料です。AI コストは AI 機能を実行したときだけ発生します。",
    metadataKeywords: [
      "Translator 料金",
      "AI 翻訳クレジット",
      "動画翻訳料金",
      "BYO API キー",
    ],
  },
  zh: {
    metadataDescription:
      "免费开始。只有在用 Stage5 积分实际运行 AI 时才付费，或者一次性解锁 BYO，直接使用你自己的 OpenAI、Anthropic 和 ElevenLabs 账户。",
    heroEyebrow: "免费开始",
    heroTitle: "只有 AI 真正运行时才付费。",
    heroDescription:
      "下载、字幕编辑、字幕合并和导出都会一直免费。只有当你需要转写、翻译、摘要、重点提取或配音时，才可以选择用 Stage5 积分图省事，或者一次性解锁 BYO，直接计费到你自己的服务商账户。",
    heroPoints: [
      "安装和使用应用不需要先订阅",
      "下载、字幕编辑、合并和导出这些核心工具免费",
      "可在 Stage5 积分和 BYO 服务商直付之间选择",
    ],
    plansEyebrow: "计费方式",
    plansTitle: "一个免费的核心应用，两种 AI 付费方式。",
    plans: [
      {
        eyebrow: "免费核心应用",
        title: "下载并开始使用只要 $0",
        body: "把视频导入进来并处理字幕的核心部分都保持免费，所以你在为 AI 花钱之前，就能先从应用本身拿到真实价值。",
        items: [
          "通过 URL 下载视频",
          "编辑并同步字幕",
          "合并字幕轨道",
          "导出 SRT 和完成后的字幕成果",
        ],
      },
      {
        eyebrow: "Stage5 积分",
        title: "运行 AI 最省事的方式",
        body: "在应用内购买积分，只在你运行转写、翻译、摘要或重点提取、配音时消耗。不需要配置 API。",
        items: [
          "适合想走最简单路径的人",
          "适合不想自己管理服务商账户的时候",
          "可用于转写、翻译、摘要、重点提取和配音",
        ],
      },
      {
        eyebrow: "BYO 模式",
        title: "一次性 $10 解锁，然后使用你自己的密钥",
        body: "如果你想直接掌控服务商计费，只需一次性解锁 BYO，就能用自己的 OpenAI、Anthropic 或 ElevenLabs 账户运行支持的 AI 功能，而不是消耗 Stage5 积分。",
        items: [
          "如果你本来就在管理 API 用量，通常会比积分更便宜",
          "让你自己决定走哪条服务商路径",
          "更适合用量较大、想直接结算的人",
        ],
      },
    ],
    packsEyebrow: "积分包示例",
    packsTitle: "Stage5 积分包本质上仍然像一个简单钱包。",
    packsDescription:
      "这些是基于当前应用估算逻辑的大致翻译等价量。质量模式、配音和不同 AI 路径可能会消耗更多。",
    packs: [
      { name: "Micro", price: "$1", value: "约50分钟" },
      { name: "Starter", price: "$5", value: "约8小时" },
      { name: "Standard", price: "$10", value: "约18小时" },
      { name: "Pro", price: "$50", value: "约127小时" },
    ],
    packFootnote:
      "想省事就用积分。想保留应用流程，但希望走服务商直付，就用 BYO。",
    byoEyebrow: "什么情况下适合 BYO",
    byoTitle: "BYO 适合那些本来就在为 AI 付费、不想再付第二次的人。",
    byoDescription:
      "如果你已经在使用付费的 OpenAI、Anthropic 或 ElevenLabs API 账户，BYO 可以让你保留 Translator 的工作流，同时把费用直接记到这些 API 账户，而不是消耗 Stage5 积分。",
    byoItems: [
      "最适合已经在管理 API 开销的重度用户",
      "适合想要服务商直付、但又想保留应用体验的时候",
      "如果你有时想图省事用积分，有时又想用自己的密钥，也很合适",
    ],
    faqCards: [
      {
        title: "哪些内容仍然免费？",
        body: "应用下载、视频下载、字幕编辑、字幕合并和标准导出工具都会一直免费。只有真正运行 AI 工作时才会产生费用。",
        ctaLabel: "查看字幕编辑器",
        href: "/subtitle-editor",
      },
      {
        title: "只看价格表还不够？",
        body: "如果你在估算高频使用场景，或者在积分和 BYO 之间做选择，下一步最好是按你的实际工作流来讨论，而不是只靠一张表猜。",
        ctaLabel: "联系我们",
        href: "/contact",
      },
    ],
    ctaTitle: "下载 Translator，稍后再决定你想怎么为 AI 付费。",
    ctaBody:
      "先从免费工具开始，需要省事就用 Stage5 积分，想直接由服务商计费就用 BYO。",
    ctaNote:
      "下载和字幕编辑一直免费。只有运行 AI 功能时才会出现 AI 成本。",
    metadataKeywords: [
      "Translator 价格",
      "AI 翻译积分",
      "视频翻译价格",
      "BYO API 密钥",
    ],
  },
  fr: {
    metadataDescription:
      "Commencez gratuitement. Payez seulement quand l'IA tourne avec des credits Stage5, ou debloquez BYO une fois et utilisez vos propres comptes OpenAI, Anthropic et ElevenLabs.",
    heroEyebrow: "Gratuit pour commencer",
    heroTitle: "Payez seulement quand l'IA tourne vraiment.",
    heroDescription:
      "Le telechargement, l'edition de sous-titres, la fusion de sous-titres et les exports restent gratuits. Quand vous voulez de la transcription, de la traduction, des resumes, des highlights ou du doublage, vous pouvez utiliser les credits Stage5 pour la simplicite ou debloquer BYO une fois et facturer directement vos propres comptes fournisseur.",
    heroPoints: [
      "Pas d'abonnement juste pour installer et utiliser l'app",
      "Outils de base gratuits pour telechargement, edition, fusion et export",
      "Choisissez entre credits Stage5 et facturation BYO directe",
    ],
    plansEyebrow: "Comment la facturation marche",
    plansTitle: "Deux facons de payer l'IA, une app de base gratuite.",
    plans: [
      {
        eyebrow: "App de base gratuite",
        title: "0 $ pour telecharger et commencer",
        body: "Les parties que les gens utilisent pour importer des videos et travailler les sous-titres restent gratuites, donc vous pouvez tirer une vraie valeur de l'app avant de depenser quoi que ce soit en IA.",
        items: [
          "Telecharger des videos depuis des URL",
          "Editer et synchroniser des sous-titres",
          "Fusionner des pistes de sous-titres",
          "Exporter du SRT et un travail de sous-titres finalise",
        ],
      },
      {
        eyebrow: "Credits Stage5",
        title: "La facon la plus simple d'utiliser l'IA",
        body: "Achetez des credits dans l'app et depensez-les seulement quand vous lancez transcription, traduction, resumes ou highlights, ou doublage. Aucune configuration d'API requise.",
        items: [
          "Ideal pour celles et ceux qui veulent le chemin le plus simple",
          "Utile si vous ne voulez pas gerer des comptes fournisseur",
          "Fonctionne pour transcription, traduction, resumes, highlights et doublage",
        ],
      },
      {
        eyebrow: "Mode BYO",
        title: "Deblocage unique a 10 $, puis utilisez vos propres cles",
        body: "Si vous voulez controler directement la facturation fournisseur, debloquez BYO une fois et lancez les fonctions IA prises en charge sur vos comptes OpenAI, Anthropic ou ElevenLabs au lieu de depenser des credits Stage5.",
        items: [
          "Souvent moins cher que les credits si vous gerez deja votre usage API",
          "Vous laisse choisir votre propre parcours fournisseur",
          "Bien adapte aux gros utilisateurs qui veulent une facturation directe",
        ],
      },
    ],
    packsEyebrow: "Exemples de packs de credits",
    packsTitle: "Les packs de credits Stage5 fonctionnent toujours comme un portefeuille simple.",
    packsDescription:
      "Ce sont des estimations grossieres equivalentes a la traduction, basees sur les heuristiques actuelles de l'app. Les modes qualite, le doublage et d'autres parcours IA peuvent consommer plus.",
    packs: [
      { name: "Micro", price: "$1", value: "~50 minutes" },
      { name: "Starter", price: "$5", value: "~8 heures" },
      { name: "Standard", price: "$10", value: "~18 heures" },
      { name: "Pro", price: "$50", value: "~127 heures" },
    ],
    packFootnote:
      "Utilisez les credits pour la simplicite. Utilisez BYO si vous voulez le flux de l'app mais preferez une facturation fournisseur directe.",
    byoEyebrow: "Quand BYO a du sens",
    byoTitle: "BYO est fait pour les gens qui paient deja l'IA et ne veulent pas payer deux fois.",
    byoDescription:
      "Si vous utilisez deja des comptes API payants OpenAI, Anthropic ou ElevenLabs, BYO vous permet de garder le flux Translator tout en facturant l'usage a ces comptes au lieu de consommer des credits Stage5.",
    byoItems: [
      "Le meilleur choix pour les gros utilisateurs qui gerent deja leurs depenses API",
      "Pratique si vous voulez une facturation fournisseur directe sans perdre l'experience de l'app",
      "Utile si vous voulez parfois des credits pour la simplicite et parfois vos propres cles",
    ],
    faqCards: [
      {
        title: "Qu'est-ce qui reste gratuit ?",
        body: "Le telechargement de l'app, le telechargement video, l'edition de sous-titres, la fusion de sous-titres et les outils d'export standard restent gratuits. Vous payez seulement quand un travail IA tourne vraiment.",
        ctaLabel: "Voir l'editeur de sous-titres",
        href: "/subtitle-editor",
      },
      {
        title: "Besoin de plus qu'une grille tarifaire ?",
        body: "Si vous essayez d'estimer un usage plus lourd ou de choisir entre credits et BYO, le meilleur prochain pas est de parler de votre vrai flux au lieu de deviner a partir d'un tableau.",
        ctaLabel: "Nous contacter",
        href: "/contact",
      },
    ],
    ctaTitle: "Telechargez Translator et decidez plus tard comment payer l'IA.",
    ctaBody:
      "Commencez avec les outils gratuits, puis utilisez les credits Stage5 pour la voie simple ou BYO si vous voulez une facturation fournisseur directe.",
    ctaNote:
      "Le telechargement et l'edition de sous-titres restent gratuits. Les couts IA n'apparaissent que lorsque vous lancez des fonctions IA.",
    metadataKeywords: [
      "tarifs Translator",
      "credits de traduction IA",
      "prix traduction video",
      "cles API BYO",
    ],
  },
  de: {
    metadataDescription:
      "Kostenlos starten. Bezahle nur, wenn KI uber Stage5-Credits wirklich lauft, oder schalte BYO einmal frei und nutze deine eigenen OpenAI-, Anthropic- und ElevenLabs-Konten.",
    heroEyebrow: "Kostenlos starten",
    heroTitle: "Bezahle nur, wenn KI wirklich lauft.",
    heroDescription:
      "Download, Untertitelbearbeitung, Untertitel-Zusammenfuhrung und Exporte bleiben kostenlos. Wenn du Transkription, Ubersetzung, Zusammenfassungen, Highlights oder Dubbing willst, kannst du fur den bequemen Weg Stage5-Credits nutzen oder BYO einmal freischalten und direkt uber deine eigenen Provider-Konten abrechnen.",
    heroPoints: [
      "Kein Abo nur fur Installation und Nutzung der App",
      "Kostenlose Kernwerkzeuge fur Download, Untertitelbearbeitung, Merge und Export",
      "Wahle zwischen Stage5-Credits und direkter BYO-Provider-Abrechnung",
    ],
    plansEyebrow: "So funktioniert die Abrechnung",
    plansTitle: "Zwei Wege, KI zu bezahlen, eine kostenlose Kern-App.",
    plans: [
      {
        eyebrow: "Kostenlose Kern-App",
        title: "$0 zum Downloaden und Loslegen",
        body: "Die Teile, mit denen Leute Videos hereinholen und an Untertiteln arbeiten, bleiben kostenlos. So bekommst du schon echten Nutzen, bevor du uberhaupt Geld fur KI ausgibst.",
        items: [
          "Videos von URLs herunterladen",
          "Untertitel bearbeiten und synchronisieren",
          "Untertitelspuren zusammenfuhren",
          "SRT und fertige Untertitelarbeit exportieren",
        ],
      },
      {
        eyebrow: "Stage5-Credits",
        title: "Der einfachste Weg, KI auszufuhren",
        body: "Kaufe Credits in der App und verbrauche sie nur, wenn du Transkription, Ubersetzung, Zusammenfassungen oder Highlights oder Dubbing startest. Kein API-Setup notig.",
        items: [
          "Am besten fur Leute, die den leichtesten Weg wollen",
          "Gut, wenn du keine Provider-Konten verwalten willst",
          "Funktioniert fur Transkription, Ubersetzung, Zusammenfassungen, Highlights und Dubbing",
        ],
      },
      {
        eyebrow: "BYO-Modus",
        title: "$10 einmalig freischalten, dann eigene Schlussel nutzen",
        body: "Wenn du die Provider-Abrechnung direkt steuern willst, schalte BYO einmal frei und nutze unterstutzte KI-Funktionen uber deine OpenAI-, Anthropic- oder ElevenLabs-Konten statt Stage5-Credits zu verbrauchen.",
        items: [
          "Oft gunstiger als Credits, wenn du API-Nutzung ohnehin schon verwaltest",
          "Lasst dich deinen eigenen Provider-Weg wahlen",
          "Gut fur Heavy User, die direkte Abrechnung wollen",
        ],
      },
    ],
    packsEyebrow: "Beispiel-Credit-Pakete",
    packsTitle: "Stage5-Credit-Pakete funktionieren weiter wie eine einfache Wallet.",
    packsDescription:
      "Das sind grobe Ubersetzungs-Aquivalente auf Basis der aktuellen App-Heuristiken. Qualitatsmodi, Dubbing und andere KI-Wege konnen mehr verbrauchen.",
    packs: [
      { name: "Micro", price: "$1", value: "~50 Minuten" },
      { name: "Starter", price: "$5", value: "~8 Stunden" },
      { name: "Standard", price: "$10", value: "~18 Stunden" },
      { name: "Pro", price: "$50", value: "~127 Stunden" },
    ],
    packFootnote:
      "Nutze Credits fur Bequemlichkeit. Nutze BYO, wenn du den App-Workflow willst, aber lieber direkt beim Provider abrechnen mochtest.",
    byoEyebrow: "Wann BYO sinnvoll ist",
    byoTitle: "BYO ist fur Leute, die ohnehin fur KI zahlen und nicht doppelt zahlen wollen.",
    byoDescription:
      "Wenn du bereits bezahlte API-Konten bei OpenAI, Anthropic oder ElevenLabs nutzt, kannst du mit BYO den Translator-Workflow behalten und die Nutzung direkt diesen Konten belasten statt Stage5-Credits zu verbrauchen.",
    byoItems: [
      "Beste Wahl fur Heavy User, die API-Ausgaben schon selbst verwalten",
      "Gut, wenn du direkte Provider-Abrechnung willst, aber das App-Erlebnis behalten mochtest",
      "Praktisch, wenn du mal Credits fur Bequemlichkeit und mal deine eigenen Schlussel nutzen willst",
    ],
    faqCards: [
      {
        title: "Was bleibt kostenlos?",
        body: "App-Download, Video-Download, Untertitelbearbeitung, Untertitel-Zusammenfuhrung und Standard-Exportwerkzeuge bleiben kostenlos. Du zahlst nur, wenn KI-Arbeit wirklich lauft.",
        ctaLabel: "Zum Untertitel-Editor",
        href: "/subtitle-editor",
      },
      {
        title: "Brauchst du mehr als eine Preistabelle?",
        body: "Wenn du hoheren Verbrauch abschatzen oder zwischen Credits und BYO entscheiden willst, ist der bessere nachste Schritt ein Gesprach uber deinen echten Workflow statt ein Ratespiel anhand einer Tabelle.",
        ctaLabel: "Kontakt aufnehmen",
        href: "/contact",
      },
    ],
    ctaTitle: "Lade Translator herunter und entscheide spater, wie du KI bezahlen willst.",
    ctaBody:
      "Starte mit den kostenlosen Tools, nutze dann Stage5-Credits fur den einfachen Weg oder BYO fur direkte Provider-Abrechnung.",
    ctaNote:
      "Download und Untertitelbearbeitung bleiben kostenlos. KI-Kosten tauchen nur auf, wenn du KI-Funktionen wirklich startest.",
    metadataKeywords: [
      "Translator Preise",
      "KI Ubersetzungscredits",
      "Video Ubersetzung Preise",
      "BYO API Schlussel",
    ],
  },
  pt: {
    metadataDescription:
      "Comece gratis. Pague so quando a IA rodar com creditos Stage5, ou desbloqueie o BYO uma vez e use suas proprias contas da OpenAI, Anthropic e ElevenLabs.",
    heroEyebrow: "Gratis para comecar",
    heroTitle: "Pague so quando a IA realmente rodar.",
    heroDescription:
      "Download, edicao de legendas, uniao de legendas e exportacoes continuam gratis. Quando voce quiser transcricao, traducao, resumos, destaques ou dublagem, pode usar creditos Stage5 pela praticidade ou desbloquear o BYO uma vez e cobrar direto nas suas proprias contas de provedor.",
    heroPoints: [
      "Sem assinatura so para instalar e usar o app",
      "Ferramentas centrais gratis para download, edicao, uniao e exportacao",
      "Escolha entre creditos Stage5 e cobranca BYO direta no provedor",
    ],
    plansEyebrow: "Como a cobranca funciona",
    plansTitle: "Duas formas de pagar pela IA, um app base gratis.",
    plans: [
      {
        eyebrow: "App base gratis",
        title: "$0 para baixar e comecar a usar",
        body: "As partes que as pessoas usam para trazer videos e trabalhar nas legendas continuam gratis, entao voce consegue valor real do app antes de gastar qualquer coisa com IA.",
        items: [
          "Baixar videos por URL",
          "Editar e sincronizar legendas",
          "Unir faixas de legenda",
          "Exportar SRT e trabalho final de legendas",
        ],
      },
      {
        eyebrow: "Creditos Stage5",
        title: "O jeito mais simples de rodar IA",
        body: "Compre creditos dentro do app e gaste so quando rodar transcricao, traducao, resumos ou destaques, ou dublagem. Nao precisa configurar API.",
        items: [
          "Melhor para quem quer o caminho mais facil",
          "Bom quando voce nao quer gerenciar contas de provedor",
          "Funciona para transcricao, traducao, resumos, destaques e dublagem",
        ],
      },
      {
        eyebrow: "Modo BYO",
        title: "Desbloqueio unico de $10 e depois suas proprias chaves",
        body: "Se voce quer controle direto sobre a cobranca do provedor, desbloqueie o BYO uma vez e rode os recursos de IA compativeis nas suas contas da OpenAI, Anthropic ou ElevenLabs em vez de gastar creditos Stage5.",
        items: [
          "Geralmente fica mais barato que creditos se voce ja gerencia uso de API",
          "Permite escolher seu proprio caminho de provedor",
          "Bom para usuarios mais pesados que querem cobranca direta",
        ],
      },
    ],
    packsEyebrow: "Exemplos de pacotes de credito",
    packsTitle: "Os pacotes de credito Stage5 continuam funcionando como uma carteira simples.",
    packsDescription:
      "Essas sao estimativas aproximadas equivalentes a traducao, baseadas nas heuristicas atuais do app. Modos de qualidade, dublagem e caminhos diferentes de IA podem consumir mais.",
    packs: [
      { name: "Micro", price: "$1", value: "~50 minutos" },
      { name: "Starter", price: "$5", value: "~8 horas" },
      { name: "Standard", price: "$10", value: "~18 horas" },
      { name: "Pro", price: "$50", value: "~127 horas" },
    ],
    packFootnote:
      "Use creditos quando quiser praticidade. Use BYO quando quiser o fluxo do app, mas preferir cobranca direta no provedor.",
    byoEyebrow: "Quando o BYO faz sentido",
    byoTitle: "BYO e para quem ja paga por IA e nao quer pagar duas vezes.",
    byoDescription:
      "Se voce ja usa contas pagas de API da OpenAI, Anthropic ou ElevenLabs, o BYO deixa voce manter o fluxo do Translator enquanto o uso vai para essas contas em vez de consumir creditos Stage5.",
    byoItems: [
      "Melhor encaixe para usuarios intensivos que ja gerenciam gasto de API",
      "Bom quando voce quer cobranca direta no provedor sem abrir mao da experiencia do app",
      "Util se voce quer as vezes creditos pela praticidade e outras vezes suas proprias chaves",
    ],
    faqCards: [
      {
        title: "O que continua gratis?",
        body: "O download do app, o download de videos, a edicao de legendas, a uniao de legendas e as ferramentas padrao de exportacao continuam gratis. Voce so paga quando o trabalho de IA realmente roda.",
        ctaLabel: "Ver Editor de Legendas",
        href: "/subtitle-editor",
      },
      {
        title: "Precisa de mais do que uma tabela de precos?",
        body: "Se voce esta tentando estimar um uso mais pesado ou decidir entre creditos e BYO, o melhor proximo passo e falar sobre seu fluxo real em vez de adivinhar a partir de uma tabela.",
        ctaLabel: "Fale conosco",
        href: "/contact",
      },
    ],
    ctaTitle: "Baixe o Translator e decida depois como quer pagar pela IA.",
    ctaBody:
      "Comece com as ferramentas gratis, depois use creditos Stage5 para o caminho facil ou BYO se quiser cobranca direta no provedor.",
    ctaNote:
      "Download e edicao de legendas continuam gratis. Os custos de IA so aparecem quando voce roda recursos de IA.",
    metadataKeywords: [
      "precos do Translator",
      "creditos de traducao com IA",
      "preco de traducao de video",
      "chaves de API BYO",
    ],
  },
} satisfies Record<Locale, PricingPageCopy>;

function getPageCopy(locale: Locale): PricingPageCopy {
  return pageCopy[locale];
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getPageCopy(locale);

  return buildMetadata({
    title: `${t("navPricing", locale)} | Translator`,
    description: copy.metadataDescription,
    path: "/pricing",
    keywords: copy.metadataKeywords,
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
  const copy = getPageCopy(locale);
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navPricing", locale) },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {copy.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {copy.heroDescription}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
            </div>

            <div className="grid gap-4">
              {copy.plans.map((plan) => (
                <div
                  key={plan.title}
                  className="rounded-[28px] border border-white/10 bg-black/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                    {plan.eyebrow}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {plan.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {plan.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.plansEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.plansTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.plans.map((plan) => (
              <div
                key={`${plan.eyebrow}-details`}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  {plan.eyebrow}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {plan.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {plan.body}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-gray-300">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.packsEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.packsTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
              {copy.packsDescription}
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.packs.map((pack) => (
              <div
                key={pack.name}
                className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
              >
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                  {pack.name}
                </div>
                <div className="mt-4 text-4xl font-semibold tracking-tight text-white">
                  {pack.price}
                </div>
                <p className="mt-3 text-base text-gray-300">{pack.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-gray-400">
            {copy.packFootnote}
          </p>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                  {copy.byoEyebrow}
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {copy.byoTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
                  {copy.byoDescription}
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-black/30 p-6">
                <ul className="space-y-4 text-sm leading-6 text-gray-300">
                  {copy.byoItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {copy.faqCards.map((card) => (
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

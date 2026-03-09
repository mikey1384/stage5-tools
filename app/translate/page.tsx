import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FeatureDownloadCta } from "../../components/FeatureDownloadCta";
import { HeroDownloadActions } from "../../components/HeroDownloadActions";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import type { Locale } from "../../lib/locales";
import {
  homeHrefForLocale,
  localizePathForLocale,
} from "../../lib/locale-routing";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

type TranslatePageCopy = {
  heroEyebrow: string;
  heroDescription: string;
  heroPoints: string[];
  screenshotCaption: string;
  screenshotAlt: string;
  outcomesEyebrow: string;
  outcomesTitle: string;
  features: Array<{ title: string; body: string }>;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSteps: Array<{ step: string; title: string; body: string }>;
  languageEyebrow: string;
  languageDescription: string;
  languages: Array<{ label: string; href?: string }>;
  bridgeTitle: string;
  bridgeBody: string;
  bridgePrimary: string;
  bridgeSecondary: string;
  ctaTitle: string;
  ctaBody: string;
  metadataDescription: string;
  metadataKeywords: string[];
};

const watchSubtitleScreenshot = {
  src: "/screenshots/watch-translated-subtitles.webp",
  width: 1600,
  height: 1003,
};

const pageCopy = {
  en: {
    heroEyebrow: "Watch it in your own language",
    heroDescription:
      "Translate YouTube subtitles or local SRT files into 39 languages. Use Stage5 credits for the simple path with GPT-5.1 plus optional GPT-5.4 review, or switch to your own OpenAI or Anthropic keys.",
    heroPoints: [
      "Translate subtitles without breaking timing",
      "Choose between Stage5 credits and your own provider keys",
      "Move from translated viewing to finished subtitled or dubbed videos in one app",
    ],
    screenshotCaption:
      "Translated subtitles appear inside the same workflow, so you can watch, review, and keep editing without bouncing between tools.",
    screenshotAlt: "Watching a video with translated subtitles in Translator",
    outcomesEyebrow: "What you get",
    outcomesTitle:
      "Good subtitle translation should help you follow the video naturally without forcing you to fight the subtitles.",
    features: [
      {
        title: "Stage5 quality mode adds GPT-5.4 review",
        body: "The default Stage5 path starts with GPT-5.1, and Quality mode adds a stronger GPT-5.4 review pass when you need better wording.",
      },
      {
        title: "Bring your own OpenAI or Anthropic keys",
        body: "Unlock BYO once, add your keys, and run translation on your own provider accounts instead of spending Stage5 credits.",
      },
      {
        title: "Built for real subtitle work",
        body: "Keep timing intact, review lines in context, and move straight into exports, dubbed versions, or more editing without starting over.",
      },
    ],
    workflowEyebrow: "How it works",
    workflowTitle:
      "A simple path from source subtitles to a translated version you can actually use.",
    workflowSteps: [
      {
        step: "01",
        title: "Start with subtitles you trust",
        body: "Import an existing subtitle file or generate one from the source video so you are starting from something real.",
      },
      {
        step: "02",
        title: "Choose the language, quality, and billing mode",
        body: "Pick the target language, decide whether you want the extra GPT-5.4 review pass, and run it on Stage5 credits or your own provider keys.",
      },
      {
        step: "03",
        title: "Review and turn it into output",
        body: "Watch the translated result, polish what matters, and move into subtitled video exports or the next step in the workflow.",
      },
    ],
    languageEyebrow: "Language reach",
    languageDescription:
      "Translate into the same broad set of languages the app supports, not just the few routes that already have dedicated detail pages.",
    languages: [
      { label: "English" },
      { label: "Korean", href: "/translate/korean" },
      { label: "Japanese", href: "/translate/japanese" },
      { label: "Chinese (Simplified)", href: "/translate/chinese" },
      { label: "Chinese (Traditional)", href: "/translate/chinese" },
      { label: "Vietnamese" },
      { label: "Spanish", href: "/translate/spanish" },
      { label: "French", href: "/translate/french" },
      { label: "German", href: "/translate/german" },
      { label: "Italian" },
      { label: "Portuguese", href: "/translate/portuguese" },
      { label: "Russian" },
      { label: "Dutch" },
      { label: "Polish" },
      { label: "Swedish" },
      { label: "Turkish" },
      { label: "Norwegian" },
      { label: "Danish" },
      { label: "Finnish" },
      { label: "Greek" },
      { label: "Czech" },
      { label: "Hungarian" },
      { label: "Romanian" },
      { label: "Ukrainian" },
      { label: "Hindi" },
      { label: "Indonesian" },
      { label: "Thai" },
      { label: "Malay" },
      { label: "Tagalog (Filipino)" },
      { label: "Bengali" },
      { label: "Tamil" },
      { label: "Telugu" },
      { label: "Marathi" },
      { label: "Urdu" },
      { label: "Arabic" },
      { label: "Hebrew" },
      { label: "Farsi (Persian)" },
      { label: "Swahili" },
      { label: "Afrikaans" },
    ],
    bridgeTitle: "Need the steps around translation too?",
    bridgeBody:
      "Bring in cleaner subtitles first, or start from a URL if the video is not on your machine yet.",
    bridgePrimary: "See Subtitle Editor",
    bridgeSecondary: "See Video Downloader",
    ctaTitle:
      "Download Translator and turn subtitles into something you can actually watch in your own language.",
    ctaBody:
      "Translate the video, review it in context, and keep going to dubbed or subtitled outputs without leaving the workflow.",
    metadataDescription:
      "Translate YouTube subtitles or local SRT files into 39 languages with Stage5 credits or your own OpenAI and Anthropic API keys.",
    metadataKeywords: [
      "AI subtitle translation",
      "translate video subtitles",
      "automatic video translation",
      "AI video translator",
      "SRT translator",
      "YouTube subtitle translator",
    ],
  },
  ko: {
    heroEyebrow: "내 언어로 바로 보기",
    heroDescription:
      "유튜브 자막이나 로컬 SRT 파일을 39개 언어로 번역하세요. 가장 간단한 방법은 Stage5 크레딧 경로이고, 필요하면 GPT-5.4 검토를 더할 수 있으며, 원하면 OpenAI나 Anthropic API 키로 직접 돌릴 수도 있습니다.",
    heroPoints: [
      "타이밍을 깨지 않고 자막을 번역합니다",
      "Stage5 크레딧과 내 API 키 중에서 선택할 수 있습니다",
      "번역 시청에서 완성된 자막 영상이나 더빙 영상까지 한 앱에서 이어집니다",
    ],
    screenshotCaption:
      "번역 자막이 같은 워크플로우 안에 나타나기 때문에, 툴을 옮겨 다니지 않고 바로 보고, 검토하고, 계속 수정할 수 있습니다.",
    screenshotAlt: "Translator에서 번역 자막으로 영상을 시청하는 화면",
    outcomesEyebrow: "얻게 되는 것",
    outcomesTitle:
      "좋은 자막 번역은 자막과 씨름하게 만들지 않고 영상을 더 자연스럽게 따라가게 해줘야 합니다.",
    features: [
      {
        title: "Stage5 품질 모드에서는 GPT-5.4 검토가 더해집니다",
        body: "기본 Stage5 경로는 GPT-5.1로 시작하고, 더 자연스러운 표현이 필요할 때 품질 모드에서 GPT-5.4 검토 패스를 추가합니다.",
      },
      {
        title: "OpenAI나 Anthropic 키를 직접 쓸 수 있습니다",
        body: "BYO를 한 번만 열어두면 Stage5 크레딧 대신 내 API 계정으로 번역을 직접 실행할 수 있습니다.",
      },
      {
        title: "실제 자막 작업 흐름에 맞게 만들어졌습니다",
        body: "타이밍을 유지하고, 실제 영상 안에서 검토하고, 다시 시작하지 않고 바로 내보내기나 더빙, 추가 편집으로 이어갈 수 있습니다.",
      },
    ],
    workflowEyebrow: "작동 방식",
    workflowTitle:
      "원본 자막에서 실제로 쓸 수 있는 번역 버전까지 가는 단순한 흐름입니다.",
    workflowSteps: [
      {
        step: "01",
        title: "믿을 수 있는 자막부터 시작합니다",
        body: "기존 자막 파일을 가져오거나 원본 영상에서 자막을 생성해 실제 기반이 있는 상태에서 시작합니다.",
      },
      {
        step: "02",
        title: "언어, 품질, 결제 경로를 고릅니다",
        body: "대상 언어를 고르고, GPT-5.4 검토가 필요한지 결정한 뒤, Stage5 크레딧으로 돌릴지 내 API 키로 직접 돌릴지 선택합니다.",
      },
      {
        step: "03",
        title: "검토하고 결과물로 이어갑니다",
        body: "번역 결과를 실제 영상 안에서 보고, 중요한 부분을 다듬고, 자막 영상 내보내기나 다음 단계로 이어갑니다.",
      },
    ],
    languageEyebrow: "언어 확장성",
    languageDescription:
      "전용 상세 페이지가 몇 개 없더라도, 앱이 실제로 지원하는 전체 언어 폭을 여기서 바로 보여줍니다.",
    languages: [
      { label: "영어" },
      { label: "한국어", href: "/translate/korean" },
      { label: "일본어", href: "/translate/japanese" },
      { label: "중국어(간체)", href: "/translate/chinese" },
      { label: "중국어(번체)", href: "/translate/chinese" },
      { label: "베트남어" },
      { label: "스페인어", href: "/translate/spanish" },
      { label: "프랑스어", href: "/translate/french" },
      { label: "독일어", href: "/translate/german" },
      { label: "이탈리아어" },
      { label: "포르투갈어", href: "/translate/portuguese" },
      { label: "러시아어" },
      { label: "네덜란드어" },
      { label: "폴란드어" },
      { label: "스웨덴어" },
      { label: "터키어" },
      { label: "노르웨이어" },
      { label: "덴마크어" },
      { label: "핀란드어" },
      { label: "그리스어" },
      { label: "체코어" },
      { label: "헝가리어" },
      { label: "루마니아어" },
      { label: "우크라이나어" },
      { label: "힌디어" },
      { label: "인도네시아어" },
      { label: "태국어" },
      { label: "말레이어" },
      { label: "타갈로그어(필리핀어)" },
      { label: "벵골어" },
      { label: "타밀어" },
      { label: "텔루구어" },
      { label: "마라티어" },
      { label: "우르두어" },
      { label: "아랍어" },
      { label: "히브리어" },
      { label: "페르시아어" },
      { label: "스와힐리어" },
      { label: "아프리칸스어" },
    ],
    bridgeTitle: "번역 전후 단계도 같이 필요하다면",
    bridgeBody:
      "먼저 더 깨끗한 자막을 만들거나, 영상이 아직 내 컴퓨터에 없다면 URL부터 시작할 수 있습니다.",
    bridgePrimary: "자막 편집기 보기",
    bridgeSecondary: "동영상 다운로드 보기",
    ctaTitle:
      "Translator를 다운로드하고 자막을 내 언어로 실제로 볼 수 있는 버전으로 바꾸세요.",
    ctaBody:
      "영상을 번역하고 실제 맥락 안에서 검토한 뒤, 다른 툴로 옮기지 않고 자막 영상이나 더빙 결과물까지 이어가세요.",
    metadataDescription:
      "유튜브 자막이나 로컬 SRT 파일을 39개 언어로 번역하세요. Stage5 크레딧이나 OpenAI·Anthropic API 키로 실행할 수 있습니다.",
    metadataKeywords: [
      "AI 자막 번역",
      "비디오 자막 번역",
      "자동 비디오 번역",
      "AI 비디오 번역기",
      "SRT 번역기",
      "YouTube 자막 번역",
    ],
  },
  es: {
    heroEyebrow: "Míralo en tu propio idioma",
    heroDescription:
      "Traduce subtítulos de YouTube o archivos SRT locales a 39 idiomas. Usa créditos de Stage5 para la ruta más simple con GPT-5.1 y revisión opcional con GPT-5.4, o cambia a tus propias claves de OpenAI o Anthropic.",
    heroPoints: [
      "Traduce subtítulos sin romper el timing",
      "Elige entre créditos de Stage5 o tus propias claves del proveedor",
      "Pasa de ver la traducción a exportar videos subtitulados o doblados en una sola app",
    ],
    screenshotCaption:
      "Los subtítulos traducidos aparecen dentro del mismo flujo, así que puedes mirar, revisar y seguir editando sin saltar entre herramientas.",
    screenshotAlt: "Ver un video con subtítulos traducidos en Translator",
    outcomesEyebrow: "Lo que obtienes",
    outcomesTitle:
      "Una buena traducción de subtítulos debe ayudarte a seguir el video con naturalidad, sin obligarte a pelearte con los subtítulos.",
    features: [
      {
        title: "El modo de calidad de Stage5 añade revisión con GPT-5.4",
        body: "La ruta predeterminada de Stage5 empieza con GPT-5.1, y el modo Quality añade una pasada de revisión más fuerte con GPT-5.4 cuando necesitas mejor redacción.",
      },
      {
        title: "Trae tus propias claves de OpenAI o Anthropic",
        body: "Activa BYO una vez, añade tus claves y ejecuta la traducción en tus propias cuentas del proveedor en vez de gastar créditos de Stage5.",
      },
      {
        title: "Hecho para trabajo real de subtítulos",
        body: "Mantén intacto el timing, revisa líneas en contexto y pasa directo a exportaciones, versiones dobladas o más edición sin empezar de cero.",
      },
    ],
    workflowEyebrow: "Cómo funciona",
    workflowTitle:
      "Un camino simple desde los subtítulos originales hasta una versión traducida que de verdad puedes usar.",
    workflowSteps: [
      {
        step: "01",
        title: "Empieza con subtítulos en los que confíes",
        body: "Importa un archivo de subtítulos existente o genera uno desde el video original para partir de algo real.",
      },
      {
        step: "02",
        title: "Elige idioma, calidad y forma de pago",
        body: "Selecciona el idioma de destino, decide si quieres la revisión extra con GPT-5.4 y ejecútalo con créditos de Stage5 o con tus propias claves.",
      },
      {
        step: "03",
        title: "Revisa y conviértelo en resultado final",
        body: "Mira el resultado traducido, pule lo que importa y sigue hacia exportaciones con subtítulos o al siguiente paso del flujo.",
      },
    ],
    languageEyebrow: "Alcance de idiomas",
    languageDescription:
      "Traduce al mismo conjunto amplio de idiomas que soporta la app, no solo a las pocas rutas que ya tienen páginas dedicadas.",
    languages: [
      { label: "inglés" },
      { label: "coreano", href: "/translate/korean" },
      { label: "japonés", href: "/translate/japanese" },
      { label: "chino (simplificado)", href: "/translate/chinese" },
      { label: "chino (tradicional)", href: "/translate/chinese" },
      { label: "vietnamita" },
      { label: "español", href: "/translate/spanish" },
      { label: "francés", href: "/translate/french" },
      { label: "alemán", href: "/translate/german" },
      { label: "italiano" },
      { label: "portugués", href: "/translate/portuguese" },
      { label: "ruso" },
      { label: "neerlandés" },
      { label: "polaco" },
      { label: "sueco" },
      { label: "turco" },
      { label: "noruego" },
      { label: "danés" },
      { label: "finés" },
      { label: "griego" },
      { label: "checo" },
      { label: "húngaro" },
      { label: "rumano" },
      { label: "ucraniano" },
      { label: "hindi" },
      { label: "indonesio" },
      { label: "tailandés" },
      { label: "malayo" },
      { label: "tagalo (filipino)" },
      { label: "bengalí" },
      { label: "tamil" },
      { label: "telugu" },
      { label: "maratí" },
      { label: "urdu" },
      { label: "árabe" },
      { label: "hebreo" },
      { label: "farsi (persa)" },
      { label: "suajili" },
      { label: "afrikáans" },
    ],
    bridgeTitle: "¿También necesitas los pasos alrededor de la traducción?",
    bridgeBody:
      "Primero puedes traer subtítulos más limpios, o empezar desde una URL si el video todavía no está en tu equipo.",
    bridgePrimary: "Ver Editor de Subtítulos",
    bridgeSecondary: "Ver Descargador de Video",
    ctaTitle:
      "Descarga Translator y convierte subtítulos en algo que realmente puedas ver en tu idioma.",
    ctaBody:
      "Traduce el video, revísalo en contexto y sigue hasta salidas subtituladas o dobladas sin salir del flujo.",
    metadataDescription:
      "Traduce subtítulos de YouTube o archivos SRT locales a 39 idiomas con créditos de Stage5 o con tus propias claves API de OpenAI y Anthropic.",
    metadataKeywords: [
      "traducción de subtítulos con IA",
      "traducir subtítulos de video",
      "traducción automática de video",
      "traductor de video con IA",
      "traductor SRT",
      "traductor de subtítulos de YouTube",
    ],
  },
  ja: {
    heroEyebrow: "自分の言語で見る",
    heroDescription:
      "YouTube 字幕やローカル SRT ファイルを 39 言語に翻訳できます。GPT-5.1 に必要なら GPT-5.4 レビューを足す簡単な Stage5 クレジット経路を使うか、自分の OpenAI / Anthropic キーに切り替えられます。",
    heroPoints: [
      "タイミングを崩さずに字幕を翻訳",
      "Stage5 クレジットか自分のプロバイダーキーを選べる",
      "翻訳して見るところから字幕付き動画や吹き替え動画の出力まで 1 つのアプリで進められる",
    ],
    screenshotCaption:
      "翻訳字幕は同じワークフロー内に出るので、ツールを行き来せずに見て、確認して、続けて編集できます。",
    screenshotAlt: "Translator で翻訳字幕付きの動画を見ている画面",
    outcomesEyebrow: "得られるもの",
    outcomesTitle:
      "良い字幕翻訳は、字幕と格闘させるのではなく、動画を自然に追えるようにするべきです。",
    features: [
      {
        title: "Stage5 の Quality モードは GPT-5.4 レビューを追加",
        body: "標準の Stage5 経路は GPT-5.1 から始まり、より良い言い回しが必要なときは Quality モードで GPT-5.4 の強いレビュー工程を追加します。",
      },
      {
        title: "自分の OpenAI / Anthropic キーを持ち込める",
        body: "BYO を一度有効化してキーを追加すれば、Stage5 クレジットを使わず自分のプロバイダーアカウントで翻訳を実行できます。",
      },
      {
        title: "実際の字幕作業向けに作られている",
        body: "タイミングを保ち、文脈の中で行を確認し、そのまま書き出しや吹き替え、追加編集へ進めます。",
      },
    ],
    workflowEyebrow: "使い方",
    workflowTitle:
      "元字幕から実際に使える翻訳版まで、シンプルにつながる流れです。",
    workflowSteps: [
      {
        step: "01",
        title: "信頼できる字幕から始める",
        body: "既存の字幕ファイルを読み込むか、元動画から生成して、実体のある素材から始めます。",
      },
      {
        step: "02",
        title: "言語、品質、課金方法を選ぶ",
        body: "対象言語を選び、GPT-5.4 の追加レビューが必要か決め、Stage5 クレジットか自分のキーで実行します。",
      },
      {
        step: "03",
        title: "確認して出力につなげる",
        body: "翻訳結果を見て、重要な部分を整え、字幕付き書き出しや次の工程へ進みます。",
      },
    ],
    languageEyebrow: "対応言語",
    languageDescription:
      "専用の詳細ページがまだ少なくても、アプリが実際に対応している幅広い言語をここでそのまま使えます。",
    languages: [
      { label: "英語" },
      { label: "韓国語", href: "/translate/korean" },
      { label: "日本語", href: "/translate/japanese" },
      { label: "中国語（簡体字）", href: "/translate/chinese" },
      { label: "中国語（繁体字）", href: "/translate/chinese" },
      { label: "ベトナム語" },
      { label: "スペイン語", href: "/translate/spanish" },
      { label: "フランス語", href: "/translate/french" },
      { label: "ドイツ語", href: "/translate/german" },
      { label: "イタリア語" },
      { label: "ポルトガル語", href: "/translate/portuguese" },
      { label: "ロシア語" },
      { label: "オランダ語" },
      { label: "ポーランド語" },
      { label: "スウェーデン語" },
      { label: "トルコ語" },
      { label: "ノルウェー語" },
      { label: "デンマーク語" },
      { label: "フィンランド語" },
      { label: "ギリシャ語" },
      { label: "チェコ語" },
      { label: "ハンガリー語" },
      { label: "ルーマニア語" },
      { label: "ウクライナ語" },
      { label: "ヒンディー語" },
      { label: "インドネシア語" },
      { label: "タイ語" },
      { label: "マレー語" },
      { label: "タガログ語（フィリピン語）" },
      { label: "ベンガル語" },
      { label: "タミル語" },
      { label: "テルグ語" },
      { label: "マラーティー語" },
      { label: "ウルドゥー語" },
      { label: "アラビア語" },
      { label: "ヘブライ語" },
      { label: "ファルシ語（ペルシャ語）" },
      { label: "スワヒリ語" },
      { label: "アフリカーンス語" },
    ],
    bridgeTitle: "翻訳の前後の工程も必要ですか？",
    bridgeBody:
      "先に字幕をきれいにしたり、まだ手元に動画がないなら URL から始めたりできます。",
    bridgePrimary: "字幕エディタを見る",
    bridgeSecondary: "動画ダウンローダーを見る",
    ctaTitle:
      "Translator をダウンロードして、字幕を自分の言語でちゃんと見られる形に変えてください。",
    ctaBody:
      "動画を翻訳し、文脈の中で確認し、そのまま字幕付き出力や吹き替え出力まで進められます。",
    metadataDescription:
      "YouTube 字幕やローカル SRT ファイルを 39 言語に翻訳。Stage5 クレジットでも、自分の OpenAI / Anthropic API キーでも実行できます。",
    metadataKeywords: [
      "AI 字幕翻訳",
      "動画字幕翻訳",
      "自動動画翻訳",
      "AI 動画翻訳",
      "SRT 翻訳",
      "YouTube 字幕翻訳",
    ],
  },
  zh: {
    heroEyebrow: "用你的语言观看",
    heroDescription:
      "把 YouTube 字幕或本地 SRT 文件翻译成 39 种语言。你可以用 Stage5 积分走最省事的 GPT-5.1 路径，并按需加上 GPT-5.4 复核，也可以切换到自己的 OpenAI 或 Anthropic 密钥。",
    heroPoints: [
      "翻译字幕时不破坏时间轴",
      "可在 Stage5 积分和自己的服务商密钥之间选择",
      "从翻译观看一路衔接到字幕视频或配音视频输出，都在同一个应用里完成",
    ],
    screenshotCaption:
      "翻译后的字幕会直接出现在同一条工作流里，所以你可以继续观看、检查和修改，不用来回切工具。",
    screenshotAlt: "在 Translator 中观看带翻译字幕的视频",
    outcomesEyebrow: "你会得到什么",
    outcomesTitle:
      "好的字幕翻译应该让你自然跟上视频内容，而不是逼你一直和字幕较劲。",
    features: [
      {
        title: "Stage5 质量模式会加入 GPT-5.4 复核",
        body: "默认的 Stage5 路径先用 GPT-5.1，若你需要更好的措辞，Quality 模式会再加一轮更强的 GPT-5.4 复核。",
      },
      {
        title: "支持接入你自己的 OpenAI 或 Anthropic 密钥",
        body: "BYO 只需解锁一次，填入你的密钥后，就能直接用你自己的服务商账户跑翻译，而不是消耗 Stage5 积分。",
      },
      {
        title: "就是为真实字幕工作而做的",
        body: "保留时间轴，在上下文里检查台词，然后直接继续导出、配音或进一步编辑，不用重头再来。",
      },
    ],
    workflowEyebrow: "工作方式",
    workflowTitle:
      "从原始字幕到真正可用的翻译版本，路径很直接。",
    workflowSteps: [
      {
        step: "01",
        title: "先从可靠的字幕开始",
        body: "导入已有字幕文件，或从原始视频生成字幕，确保起点是真实可用的内容。",
      },
      {
        step: "02",
        title: "选择语言、质量和计费方式",
        body: "选定目标语言，决定是否需要额外的 GPT-5.4 复核，再选择用 Stage5 积分还是你自己的服务商密钥运行。",
      },
      {
        step: "03",
        title: "检查后继续产出结果",
        body: "观看翻译结果，打磨真正重要的地方，然后继续导出字幕视频或进入下一步工作流。",
      },
    ],
    languageEyebrow: "语言覆盖",
    languageDescription:
      "不仅限于少数已经有单独详情页的路线，你可以翻译到应用本身支持的整套语言范围。",
    languages: [
      { label: "英语" },
      { label: "韩语", href: "/translate/korean" },
      { label: "日语", href: "/translate/japanese" },
      { label: "简体中文", href: "/translate/chinese" },
      { label: "繁体中文", href: "/translate/chinese" },
      { label: "越南语" },
      { label: "西班牙语", href: "/translate/spanish" },
      { label: "法语", href: "/translate/french" },
      { label: "德语", href: "/translate/german" },
      { label: "意大利语" },
      { label: "葡萄牙语", href: "/translate/portuguese" },
      { label: "俄语" },
      { label: "荷兰语" },
      { label: "波兰语" },
      { label: "瑞典语" },
      { label: "土耳其语" },
      { label: "挪威语" },
      { label: "丹麦语" },
      { label: "芬兰语" },
      { label: "希腊语" },
      { label: "捷克语" },
      { label: "匈牙利语" },
      { label: "罗马尼亚语" },
      { label: "乌克兰语" },
      { label: "印地语" },
      { label: "印度尼西亚语" },
      { label: "泰语" },
      { label: "马来语" },
      { label: "他加禄语（菲律宾语）" },
      { label: "孟加拉语" },
      { label: "泰米尔语" },
      { label: "泰卢固语" },
      { label: "马拉地语" },
      { label: "乌尔都语" },
      { label: "阿拉伯语" },
      { label: "希伯来语" },
      { label: "波斯语" },
      { label: "斯瓦希里语" },
      { label: "南非语" },
    ],
    bridgeTitle: "还需要处理翻译前后的步骤吗？",
    bridgeBody:
      "你可以先拿到更干净的字幕，或者如果视频还不在本机上，就先从 URL 开始。",
    bridgePrimary: "查看字幕编辑器",
    bridgeSecondary: "查看视频下载器",
    ctaTitle:
      "下载 Translator，把字幕变成你真的能用自己语言观看的版本。",
    ctaBody:
      "翻译视频，在上下文里检查，然后继续走到字幕输出或配音输出，全程不离开工作流。",
    metadataDescription:
      "把 YouTube 字幕或本地 SRT 文件翻译成 39 种语言，可使用 Stage5 积分，或使用你自己的 OpenAI 和 Anthropic API 密钥。",
    metadataKeywords: [
      "AI 字幕翻译",
      "视频字幕翻译",
      "自动视频翻译",
      "AI 视频翻译器",
      "SRT 翻译器",
      "YouTube 字幕翻译",
    ],
  },
  fr: {
    heroEyebrow: "Regardez dans votre langue",
    heroDescription:
      "Traduisez des sous-titres YouTube ou des fichiers SRT locaux dans 39 langues. Utilisez les credits Stage5 pour la voie la plus simple avec GPT-5.1 et une relecture GPT-5.4 en option, ou passez a vos propres cles OpenAI ou Anthropic.",
    heroPoints: [
      "Traduisez les sous-titres sans casser le timing",
      "Choisissez entre les credits Stage5 et vos propres cles fournisseur",
      "Passez du visionnage traduit a une video sous-titree ou doublee dans une seule app",
    ],
    screenshotCaption:
      "Les sous-titres traduits apparaissent dans le meme flux, donc vous pouvez regarder, verifier et continuer a modifier sans changer d'outil.",
    screenshotAlt: "Visionnage d'une video avec sous-titres traduits dans Translator",
    outcomesEyebrow: "Ce que vous obtenez",
    outcomesTitle:
      "Une bonne traduction de sous-titres doit vous aider a suivre la video naturellement, sans vous forcer a lutter contre les sous-titres.",
    features: [
      {
        title: "Le mode qualite Stage5 ajoute une relecture GPT-5.4",
        body: "Le parcours Stage5 par defaut commence avec GPT-5.1, et le mode Quality ajoute une passe de relecture GPT-5.4 plus forte quand vous avez besoin d'une meilleure formulation.",
      },
      {
        title: "Apportez vos propres cles OpenAI ou Anthropic",
        body: "Debloquez BYO une fois, ajoutez vos cles, puis lancez la traduction sur vos propres comptes fournisseur au lieu de depenser des credits Stage5.",
      },
      {
        title: "Concu pour un vrai travail de sous-titres",
        body: "Gardez le timing intact, relisez les lignes en contexte et passez directement a l'export, au doublage ou a plus d'edition sans recommencer.",
      },
    ],
    workflowEyebrow: "Comment ca marche",
    workflowTitle:
      "Un chemin simple entre les sous-titres source et une version traduite que vous pouvez vraiment utiliser.",
    workflowSteps: [
      {
        step: "01",
        title: "Partez de sous-titres fiables",
        body: "Importez un fichier de sous-titres existant ou generez-en un depuis la video source pour partir de quelque chose de reel.",
      },
      {
        step: "02",
        title: "Choisissez la langue, la qualite et la facturation",
        body: "Choisissez la langue cible, decidez si vous voulez la relecture GPT-5.4 supplementaire, puis lancez avec des credits Stage5 ou vos propres cles fournisseur.",
      },
      {
        step: "03",
        title: "Relisez et transformez en resultat final",
        body: "Regardez le resultat traduit, peaufinez l'essentiel et enchainez vers l'export sous-titre ou l'etape suivante du flux.",
      },
    ],
    languageEyebrow: "Couverture linguistique",
    languageDescription:
      "Traduisez vers le meme ensemble large de langues que l'app prend en charge, pas seulement vers les quelques parcours qui ont deja une page detaillee.",
    languages: [
      { label: "anglais" },
      { label: "coreen", href: "/translate/korean" },
      { label: "japonais", href: "/translate/japanese" },
      { label: "chinois simplifie", href: "/translate/chinese" },
      { label: "chinois traditionnel", href: "/translate/chinese" },
      { label: "vietnamien" },
      { label: "espagnol", href: "/translate/spanish" },
      { label: "francais", href: "/translate/french" },
      { label: "allemand", href: "/translate/german" },
      { label: "italien" },
      { label: "portugais", href: "/translate/portuguese" },
      { label: "russe" },
      { label: "neerlandais" },
      { label: "polonais" },
      { label: "suedois" },
      { label: "turc" },
      { label: "norvegien" },
      { label: "danois" },
      { label: "finnois" },
      { label: "grec" },
      { label: "tcheque" },
      { label: "hongrois" },
      { label: "roumain" },
      { label: "ukrainien" },
      { label: "hindi" },
      { label: "indonesien" },
      { label: "thai" },
      { label: "malais" },
      { label: "tagalog (filipino)" },
      { label: "bengali" },
      { label: "tamoul" },
      { label: "telougou" },
      { label: "marathi" },
      { label: "ourdou" },
      { label: "arabe" },
      { label: "hebreu" },
      { label: "farsi (persan)" },
      { label: "swahili" },
      { label: "afrikaans" },
    ],
    bridgeTitle: "Vous avez aussi besoin des etapes autour de la traduction ?",
    bridgeBody:
      "Vous pouvez d'abord recuperer des sous-titres plus propres, ou partir d'une URL si la video n'est pas encore sur votre machine.",
    bridgePrimary: "Voir l'editeur de sous-titres",
    bridgeSecondary: "Voir le telechargeur video",
    ctaTitle:
      "Telechargez Translator et transformez vos sous-titres en quelque chose que vous pouvez vraiment regarder dans votre langue.",
    ctaBody:
      "Traduisez la video, relisez-la en contexte et continuez vers des sorties sous-titrees ou doublees sans quitter le flux.",
    metadataDescription:
      "Traduisez des sous-titres YouTube ou des fichiers SRT locaux dans 39 langues avec des credits Stage5 ou vos propres cles API OpenAI et Anthropic.",
    metadataKeywords: [
      "traduction de sous-titres IA",
      "traduire des sous-titres video",
      "traduction video automatique",
      "traducteur video IA",
      "traducteur SRT",
      "traducteur de sous-titres YouTube",
    ],
  },
  de: {
    heroEyebrow: "In deiner Sprache ansehen",
    heroDescription:
      "Ubersetze YouTube-Untertitel oder lokale SRT-Dateien in 39 Sprachen. Nutze Stage5-Credits fur den einfachen Weg mit GPT-5.1 plus optionaler GPT-5.4-Prufung oder wechsle zu deinen eigenen OpenAI- oder Anthropic-Schlusseln.",
    heroPoints: [
      "Untertitel ubersetzen, ohne das Timing zu zerstoren",
      "Zwischen Stage5-Credits und eigenen Provider-Schlusseln wahlen",
      "Vom ubersetzten Anschauen bis zum fertigen untertitelten oder synchronisierten Video in einer App bleiben",
    ],
    screenshotCaption:
      "Die ubersetzten Untertitel erscheinen direkt im selben Workflow, sodass du ansehen, prufen und weiterbearbeiten kannst, ohne zwischen Tools zu springen.",
    screenshotAlt: "Ein Video mit ubersetzten Untertiteln in Translator ansehen",
    outcomesEyebrow: "Was du bekommst",
    outcomesTitle:
      "Gute Untertitelubersetzung sollte dir helfen, dem Video naturlich zu folgen, statt mit den Untertiteln kampfen zu mussen.",
    features: [
      {
        title: "Der Stage5-Qualitatsmodus fugt GPT-5.4-Review hinzu",
        body: "Der Standardweg in Stage5 startet mit GPT-5.1, und der Quality-Modus fugt einen starkeren GPT-5.4-Review-Durchgang hinzu, wenn du bessere Formulierungen brauchst.",
      },
      {
        title: "Eigene OpenAI- oder Anthropic-Schlussel mitbringen",
        body: "Schalte BYO einmal frei, hinterlege deine Schlussel und lasse die Ubersetzung uber deine eigenen Provider-Konten laufen, statt Stage5-Credits zu verbrauchen.",
      },
      {
        title: "Fur echte Untertitelarbeit gebaut",
        body: "Behalte das Timing bei, prufe Zeilen im Kontext und gehe direkt weiter zu Exporten, Dubbing oder weiterer Bearbeitung, ohne neu anzufangen.",
      },
    ],
    workflowEyebrow: "So funktioniert es",
    workflowTitle:
      "Ein einfacher Weg von den Ausgangs-Untertiteln zu einer ubersetzten Version, die du wirklich nutzen kannst.",
    workflowSteps: [
      {
        step: "01",
        title: "Mit Untertiteln starten, denen du vertraust",
        body: "Importiere eine vorhandene Untertiteldatei oder erzeuge eine aus dem Originalvideo, damit du auf etwas Echtem aufbaust.",
      },
      {
        step: "02",
        title: "Sprache, Qualitat und Abrechnungsweg wahlen",
        body: "Wahle die Zielsprache, entscheide uber den zusatzlichen GPT-5.4-Review und starte mit Stage5-Credits oder deinen eigenen Provider-Schlusseln.",
      },
      {
        step: "03",
        title: "Prufen und in ein Ergebnis uberfuhren",
        body: "Sieh dir das ubersetzte Ergebnis an, feile an den wichtigen Stellen und gehe weiter zu Untertitel-Exporten oder zum nachsten Schritt.",
      },
    ],
    languageEyebrow: "Sprachreichweite",
    languageDescription:
      "Ubersetze in dieselbe breite Sprachpalette, die die App unterstutzt, nicht nur in die wenigen Routen mit eigener Detailseite.",
    languages: [
      { label: "Englisch" },
      { label: "Koreanisch", href: "/translate/korean" },
      { label: "Japanisch", href: "/translate/japanese" },
      { label: "Chinesisch (vereinfacht)", href: "/translate/chinese" },
      { label: "Chinesisch (traditionell)", href: "/translate/chinese" },
      { label: "Vietnamesisch" },
      { label: "Spanisch", href: "/translate/spanish" },
      { label: "Franzosisch", href: "/translate/french" },
      { label: "Deutsch", href: "/translate/german" },
      { label: "Italienisch" },
      { label: "Portugiesisch", href: "/translate/portuguese" },
      { label: "Russisch" },
      { label: "Niederlandisch" },
      { label: "Polnisch" },
      { label: "Schwedisch" },
      { label: "Turkisch" },
      { label: "Norwegisch" },
      { label: "Danisch" },
      { label: "Finnisch" },
      { label: "Griechisch" },
      { label: "Tschechisch" },
      { label: "Ungarisch" },
      { label: "Rumanisch" },
      { label: "Ukrainisch" },
      { label: "Hindi" },
      { label: "Indonesisch" },
      { label: "Thailändisch" },
      { label: "Malaiisch" },
      { label: "Tagalog (Filipino)" },
      { label: "Bengalisch" },
      { label: "Tamil" },
      { label: "Telugu" },
      { label: "Marathi" },
      { label: "Urdu" },
      { label: "Arabisch" },
      { label: "Hebräisch" },
      { label: "Farsi (Persisch)" },
      { label: "Swahili" },
      { label: "Afrikaans" },
    ],
    bridgeTitle: "Brauchst du auch die Schritte rund um die Ubersetzung?",
    bridgeBody:
      "Hol dir zuerst sauberere Untertitel oder starte mit einer URL, wenn das Video noch nicht auf deinem Rechner liegt.",
    bridgePrimary: "Zum Untertitel-Editor",
    bridgeSecondary: "Zum Video-Downloader",
    ctaTitle:
      "Lade Translator herunter und mache aus Untertiteln etwas, das du wirklich in deiner Sprache ansehen kannst.",
    ctaBody:
      "Ubersetze das Video, prufe es im Kontext und geh direkt weiter zu untertitelten oder synchronisierten Ausgaben, ohne den Workflow zu verlassen.",
    metadataDescription:
      "Ubersetze YouTube-Untertitel oder lokale SRT-Dateien in 39 Sprachen mit Stage5-Credits oder mit deinen eigenen OpenAI- und Anthropic-API-Schlusseln.",
    metadataKeywords: [
      "KI Untertitelubersetzung",
      "Video Untertitel ubersetzen",
      "automatische Videoubersetzung",
      "KI Videoubersetzer",
      "SRT Ubersetzer",
      "YouTube Untertitel Ubersetzer",
    ],
  },
  pt: {
    heroEyebrow: "Assista no seu idioma",
    heroDescription:
      "Traduza legendas do YouTube ou arquivos SRT locais para 39 idiomas. Use creditos Stage5 para o caminho mais simples com GPT-5.1 e revisao opcional com GPT-5.4, ou mude para as suas proprias chaves da OpenAI ou Anthropic.",
    heroPoints: [
      "Traduza legendas sem quebrar a sincronia",
      "Escolha entre creditos Stage5 e suas proprias chaves de provedor",
      "Va da visualizacao traduzida ate videos legendados ou dublados prontos no mesmo app",
    ],
    screenshotCaption:
      "As legendas traduzidas aparecem no mesmo fluxo, entao voce pode assistir, revisar e continuar editando sem ficar trocando de ferramenta.",
    screenshotAlt: "Assistindo a um video com legendas traduzidas no Translator",
    outcomesEyebrow: "O que voce recebe",
    outcomesTitle:
      "Uma boa traducao de legendas deve ajudar voce a acompanhar o video com naturalidade, sem obrigar voce a brigar com as legendas.",
    features: [
      {
        title: "O modo de qualidade Stage5 adiciona revisao com GPT-5.4",
        body: "O caminho padrao da Stage5 comeca com GPT-5.1, e o modo Quality adiciona uma revisao mais forte com GPT-5.4 quando voce precisa de melhor formulacao.",
      },
      {
        title: "Use suas proprias chaves da OpenAI ou Anthropic",
        body: "Desbloqueie o BYO uma vez, adicione suas chaves e rode a traducao nas suas proprias contas de provedor em vez de gastar creditos Stage5.",
      },
      {
        title: "Feito para trabalho real com legendas",
        body: "Mantenha a sincronia intacta, revise as linhas no contexto e siga direto para exportacoes, versoes dubladas ou mais edicoes sem recomecar.",
      },
    ],
    workflowEyebrow: "Como funciona",
    workflowTitle:
      "Um caminho simples das legendas de origem ate uma versao traduzida que voce realmente consegue usar.",
    workflowSteps: [
      {
        step: "01",
        title: "Comece com legendas em que voce confia",
        body: "Importe um arquivo de legenda existente ou gere um a partir do video original para comecar de algo real.",
      },
      {
        step: "02",
        title: "Escolha idioma, qualidade e forma de cobranca",
        body: "Selecione o idioma de destino, decida se quer a revisao extra com GPT-5.4 e rode com creditos Stage5 ou com suas proprias chaves de provedor.",
      },
      {
        step: "03",
        title: "Revise e transforme em resultado",
        body: "Assista ao resultado traduzido, ajuste o que importa e siga para exportacoes legendadas ou para a proxima etapa do fluxo.",
      },
    ],
    languageEyebrow: "Alcance de idiomas",
    languageDescription:
      "Traduza para o mesmo conjunto amplo de idiomas que o app suporta, nao apenas para as poucas rotas que ja tem paginas detalhadas.",
    languages: [
      { label: "ingles" },
      { label: "coreano", href: "/translate/korean" },
      { label: "japones", href: "/translate/japanese" },
      { label: "chines (simplificado)", href: "/translate/chinese" },
      { label: "chines (tradicional)", href: "/translate/chinese" },
      { label: "vietnamita" },
      { label: "espanhol", href: "/translate/spanish" },
      { label: "frances", href: "/translate/french" },
      { label: "alemao", href: "/translate/german" },
      { label: "italiano" },
      { label: "portugues", href: "/translate/portuguese" },
      { label: "russo" },
      { label: "holandes" },
      { label: "polones" },
      { label: "sueco" },
      { label: "turco" },
      { label: "noruegues" },
      { label: "dinamarques" },
      { label: "finlandes" },
      { label: "grego" },
      { label: "tcheco" },
      { label: "hungaro" },
      { label: "romeno" },
      { label: "ucraniano" },
      { label: "hindi" },
      { label: "indonesio" },
      { label: "tailandes" },
      { label: "malaio" },
      { label: "tagalo (filipino)" },
      { label: "bengali" },
      { label: "tamil" },
      { label: "telugo" },
      { label: "marati" },
      { label: "urdu" },
      { label: "arabe" },
      { label: "hebraico" },
      { label: "farsi (persa)" },
      { label: "swahili" },
      { label: "africaner" },
    ],
    bridgeTitle: "Precisa tambem das etapas em volta da traducao?",
    bridgeBody:
      "Voce pode primeiro trazer legendas mais limpas ou comecar por uma URL se o video ainda nao estiver na sua maquina.",
    bridgePrimary: "Ver Editor de Legendas",
    bridgeSecondary: "Ver Downloader de Video",
    ctaTitle:
      "Baixe o Translator e transforme legendas em algo que voce realmente consiga assistir no seu idioma.",
    ctaBody:
      "Traduza o video, revise no contexto e siga ate saidas legendadas ou dubladas sem sair do fluxo.",
    metadataDescription:
      "Traduza legendas do YouTube ou arquivos SRT locais para 39 idiomas com creditos Stage5 ou com suas proprias chaves de API da OpenAI e Anthropic.",
    metadataKeywords: [
      "traducao de legendas com IA",
      "traduzir legendas de video",
      "traducao automatica de video",
      "tradutor de video com IA",
      "tradutor SRT",
      "tradutor de legendas do YouTube",
    ],
  },
} satisfies Record<Locale, TranslatePageCopy>;

function getPageCopy(locale: Locale): TranslatePageCopy {
  return pageCopy[locale];
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getPageCopy(locale);
  return buildMetadata({
    title: `${t("translateTitle", locale)} | Translator`,
    description: copy.metadataDescription,
    path: "/translate",
    keywords: copy.metadataKeywords,
    locale,
  });
}

export default async function TranslatePage({
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
            { label: t("navAiTranslation", locale) },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {t("translateTitle", locale)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {copy.heroDescription}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400">
                {t("translateCreditsNote", locale)}
              </p>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <Image
                  src={watchSubtitleScreenshot.src}
                  alt={copy.screenshotAlt}
                  width={watchSubtitleScreenshot.width}
                  height={watchSubtitleScreenshot.height}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="text-sm leading-6 text-gray-400">
                {copy.screenshotCaption}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.outcomesEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.outcomesTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.features.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.workflowEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.workflowTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.workflowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6"
              >
                <div className="text-sm font-semibold text-cyan-300">
                  {item.step}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="max-w-5xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.languageEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {t("translateLanguagesTitle", locale)}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
              {copy.languageDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {copy.languages.map((language) =>
                language.href ? (
                  <Link
                    key={`${language.label}-${language.href}`}
                    href={localizeHref(language.href)}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/40"
                  >
                    {language.label}
                  </Link>
                ) : (
                  <span
                    key={language.label}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-200"
                  >
                    {language.label}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {copy.bridgeTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
                  {copy.bridgeBody}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href={localizeHref("/subtitle-editor")}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  {copy.bridgePrimary}
                </Link>
                <Link
                  href={localizeHref("/video-downloader")}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  {copy.bridgeSecondary}
                </Link>
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
          <FeatureDownloadCta locale={locale} note={t("translateCreditsNote", locale)} align="center" className="mt-8" />
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

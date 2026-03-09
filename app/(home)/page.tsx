import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { AllDownloadButtons } from "../../components/AllDownloadButtons";
import { HeroDownloadActions } from "../../components/HeroDownloadActions";
import { HomepageScreenshotSlot } from "../../components/HomepageScreenshotSlot";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { HOME_LOCALIZED_LOCALES, openGraphLocaleByLocale } from "../../lib/locales";
import { localizePathForLocale } from "../../lib/locale-routing";
import { productHuntReviews } from "../../lib/reviews";
import { t, type Locale } from "../../lib/strings";

type HomeMetric = {
  value: string;
  label: string;
  detail: string;
};

type ComparisonRow = {
  typical: string;
  translator: string;
};

type SellingPoint = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

type HomeCopy = {
  pageTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroPoints: readonly string[];
  heroNote: string;
  heroPricingLink: string;
  heroFaqLink: string;
  heroScreenshotCaption: string;
  metrics: readonly HomeMetric[];
  comparisonEyebrow: string;
  comparisonTitle: string;
  comparisonDescription: string;
  typicalLabel: string;
  translatorLabel: string;
  comparisonRows: readonly ComparisonRow[];
  sellingEyebrow: string;
  sellingTitle: string;
  sellingDescription: string;
  sellingPoints: readonly SellingPoint[];
  socialEyebrow: string;
  socialTitle: string;
  socialDescription: string;
  languagesEyebrow: string;
  languagesTitle: string;
  languagesDescription: string;
  bottomEyebrow: string;
  bottomTitle: string;
  bottomDescription: string;
  mockSearchQuery: string;
  mockSearchTag: string;
  heroBenefitTitle1: string;
  heroBenefitBody1: string;
  heroBenefitTitle2: string;
  heroBenefitBody2: string;
  viewerEyebrow: string;
  viewerWindowTitle: string;
  viewerTitle: string;
  viewerDescription: string;
  viewerScreenshotCaption: string;
  actionEyebrow: string;
  actionWindowTitle: string;
  actionTitle: string;
  actionDescription: string;
  actionScreenshotCaption: string;
  aboutLinkLabel: string;
  sellingCardEyebrow: string;
  productHuntLinkLabel: string;
  heroDiscoveryAlt: string;
  viewerAlt: string;
  actionAlt: string;
};

const baseHomeCopy = {
  en: {
    pageTitle:
      "Translator - Search global videos in your language | Free desktop app",
    metadataDescription:
      "Search for videos in your own language, discover creators outside your language bubble, and watch with translated subtitles in a few clicks. Then dub, clip, edit, and export in one desktop app.",
    eyebrow: "Not just another AI video translator",
    title:
      "If it's in another language, you may never even find it. Translator gets you past that barrier first.",
    subtitle:
      "Search in your own language. Find videos, creators, interviews, tutorials, and trends from completely different language worlds. Watch them with translated subtitles in a few clicks, then dub, clip, or localize them in the same app.",
    heroPoints: [
      "Search globally using your native language",
      "Watch foreign-language videos with translated subtitles fast",
      "Turn discoveries into dubs, clips, or localized exports",
      "Keep downloader, subtitles, dubbing, and export in one desktop workflow",
    ],
    heroNote:
      "Free download. Downloading and subtitle editing are free. AI features use credits only when you run them.",
    heroPricingLink: "See pricing",
    heroFaqLink: "Read the FAQ",
    heroScreenshotCaption:
      "Describe the kind of video you want, add country or recency only if it matters, and Translator returns channels and videos ready to watch or download.",
    metrics: [
      {
        value: "39",
        label: "subtitle languages",
        detail: "Built to cross language barriers, not just polish subtitles.",
      },
      {
        value: "Search first",
        label: "discovery before translation",
        detail: "Use your own language to reach videos your feed never surfaced.",
      },
      {
        value: "One app",
        label: "not five disconnected tools",
        detail: "Download, transcribe, translate, dub, clip, and export in one place.",
      },
      {
        value: "Viewer to creator",
        label: "workflow stays open",
        detail: "Watch for yourself or turn the same video into publishable assets.",
      },
    ],
    comparisonEyebrow: "What other tools miss",
    comparisonTitle: "Most AI video translators start too late.",
    comparisonDescription:
      "They only help once you already have the video. Translator helps you find it first, watch it in your own language, and turn it into a finished output in one workflow.",
    typicalLabel: "Typical AI translator",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Starts after you already found a video.",
        translator:
          "Lets you search in your own language and surface videos from other language worlds first.",
      },
      {
        typical: "Hands back translated text or subtitles.",
        translator:
          "Lets you watch, edit, dub, summarize, clip, and export from the same workflow.",
      },
      {
        typical: "Needs separate tools for downloading, editing, TTS, and export.",
        translator:
          "Keeps the full video workflow in one desktop workspace.",
      },
      {
        typical: "Feels like a utility.",
        translator:
          "Feels like access to a bigger internet and a faster way to act on what you find.",
      },
    ],
    sellingEyebrow: "What you actually get",
    sellingTitle:
      "Find videos beyond your language bubble, then watch, subtitle, dub, and export them in one app.",
    sellingDescription:
      "Translator helps you find foreign-language videos, watch them in your own language, and turn them into subtitled or dubbed videos without juggling five tools.",
    sellingPoints: [
      {
        title: "Find videos your YouTube algorithm would never surface",
        description:
          "Type what you want in your own language and use Translator to pull in videos you would never discover through local feeds alone.",
        href: "/video-discovery",
        cta: "See video discovery",
      },
      {
        title: "Watch first, then decide what’s worth keeping",
        description:
          "Get translated subtitles fast, keep the original context nearby, and decide whether a video is worth deeper editing, dubbing, or clipping.",
        href: "/subtitle-editor",
        cta: "See the editor",
      },
      {
        title: "Finish the whole workflow in one app",
        description:
          "Download, transcribe, translate, dub, burn subtitles, and export without bouncing between tabs and apps.",
        href: "/video-downloader",
        cta: "See the downloader",
      },
      {
        title: "Pay when AI runs, not before",
        description:
          "The app is free to download, free to edit subtitles with, and flexible enough for power users who want credits or BYO keys.",
        href: "/pricing",
        cta: "View pricing",
      },
    ],
    socialEyebrow: "What people say",
    socialTitle: "People notice the difference quickly.",
    socialDescription:
      "The product lands because it feels like a full workflow with taste, not another thin wrapper around model output.",
    languagesEyebrow: "Language reach",
    languagesTitle: "Translate into 39 subtitle languages without leaving the workflow.",
    languagesDescription:
      "Start with the languages people expect, then reach across the long tail when the right video or audience lives elsewhere.",
    bottomEyebrow: "Open a bigger internet",
    bottomTitle: "Download Translator and start watching past your language boundary.",
    bottomDescription:
      "Find videos your YouTube algorithm never showed you, watch them in your own language, and turn the best ones into subtitled or dubbed videos you can keep.",
    mockSearchQuery: "best japanese street interviews about work culture",
    mockSearchTag: "Search in English",
    heroBenefitTitle1: "Watch first with translated subtitles",
    heroBenefitBody1:
      "You can understand foreign-language videos quickly before deciding whether they are worth saving, clipping, or localizing.",
    heroBenefitTitle2: "Move from discovery to output in one app",
    heroBenefitBody2:
      "When a video matters, keep going with subtitles, dubbing, summary, highlights, and export without changing tools.",
    viewerEyebrow: "See it as it happens",
    viewerWindowTitle: "Live translated subtitles",
    viewerTitle: "Translated subtitles appear line by line while the job is still running.",
    viewerDescription:
      "You can start enjoying the video in your own language right away instead of waiting for the entire translation job to finish first.",
    viewerScreenshotCaption:
      "As each subtitle line is translated, it shows up in the player immediately. You do not have to wait for the entire file to finish first.",
    actionEyebrow: "Turn it into something",
    actionWindowTitle: "Highlight clips",
    actionTitle: "Pull the best moments out of a long video without doing it by hand.",
    actionDescription:
      "Once you find something worth keeping, Translator can help surface standout moments and turn a full video into short clips you can actually use.",
    actionScreenshotCaption:
      "Clip candidates appear with timestamps, summaries, and previews so you can keep the parts worth sharing.",
    aboutLinkLabel: "Why we built it",
    sellingCardEyebrow: "Why it matters",
    productHuntLinkLabel: "View on Product Hunt",
    heroDiscoveryAlt: "AI video recommendation search results",
    viewerAlt: "Reviewing a video with translated subtitles",
    actionAlt: "Reviewing highlight clip candidates",
  },
  ko: {
    pageTitle:
      "Translator - 내 언어로 전 세계 영상을 찾는 데스크톱 앱 | 무료 다운로드",
    metadataDescription:
      "내 언어로 검색하고, 다른 언어권의 영상과 크리에이터를 발견하고, 몇 번의 클릭으로 번역 자막과 함께 시청하세요. 이후 더빙, 클립, 편집, 내보내기까지 한 앱에서 이어집니다.",
    eyebrow: "그냥 또 하나의 AI 비디오 번역기가 아닙니다",
    title: "언어가 다르면 발견조차 어렵습니다. Translator는 그 장벽부터 넘깁니다.",
    subtitle:
      "내 언어로 검색하세요. 전혀 다른 언어권의 영상, 크리에이터, 인터뷰, 튜토리얼, 트렌드를 발견할 수 있습니다. 몇 번의 클릭으로 번역 자막과 함께 바로 보고, 같은 앱에서 더빙, 클립 추출, 현지화까지 이어집니다.",
    heroPoints: [
      "모국어로 검색해 다른 언어권 영상을 찾습니다",
      "번역 자막으로 빠르게 시청합니다",
      "발견한 영상을 더빙, 클립, 현지화 자산으로 바꿉니다",
      "다운로드부터 자막, 더빙, 내보내기까지 한 앱에서 처리합니다",
    ],
    heroNote:
      "무료로 다운로드해 시작하세요. 다운로드와 자막 편집은 무료이고, AI 기능은 실행할 때만 크레딧을 사용합니다.",
    heroPricingLink: "요금 보기",
    heroFaqLink: "FAQ 보기",
    heroScreenshotCaption:
      "원하는 영상의 성격만 적고 필요할 때만 국가나 최신성을 지정하세요. Translator가 바로 보거나 다운로드할 수 있는 채널과 영상을 찾아줍니다.",
    metrics: [
      {
        value: "39",
        label: "자막 지원 언어",
        detail: "단순 자막 정리가 아니라 언어 장벽을 넘는 경험을 만듭니다.",
      },
      {
        value: "검색부터",
        label: "발견에서 시작",
        detail: "내 언어로 검색해 기존 피드가 놓친 영상을 찾습니다.",
      },
      {
        value: "한 앱",
        label: "분리된 도구가 아닙니다",
        detail: "다운로드, 전사, 번역, 더빙, 클립, 내보내기를 한곳에서 처리합니다.",
      },
      {
        value: "시청에서 제작까지",
        label: "워크플로우가 이어집니다",
        detail: "직접 보기에도 좋고, 같은 영상을 자산으로 바꾸기에도 좋습니다.",
      },
    ],
    comparisonEyebrow: "다른 툴과 다른 점",
    comparisonTitle: "대부분의 AI 번역기는 영상을 찾은 다음에야 도움이 됩니다.",
    comparisonDescription:
      "이미 어떤 영상을 번역할지 알고 있다고 가정하기 때문입니다. Translator는 발견 전, 시청 중, 번역 후의 경험까지 바꿉니다.",
    typicalLabel: "일반적인 AI 번역기",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "이미 찾은 영상을 업로드한 뒤에야 시작합니다.",
        translator:
          "내 언어로 검색해 다른 언어권 영상을 먼저 발견하게 도와줍니다.",
      },
      {
        typical: "번역된 텍스트나 자막만 돌려줍니다.",
        translator:
          "시청, 편집, 더빙, 요약, 클립 추출, 내보내기까지 같은 흐름에서 이어집니다.",
      },
      {
        typical: "다운로드, 편집, TTS, 내보내기를 다른 도구로 나눠야 합니다.",
        translator: "전체 비디오 워크플로우를 하나의 데스크톱 앱에 담았습니다.",
      },
      {
        typical: "단순한 유틸리티처럼 느껴집니다.",
        translator:
          "더 넓은 인터넷에 접근하고, 발견한 것을 바로 활용하게 해주는 제품처럼 느껴집니다.",
      },
    ],
    sellingEyebrow: "Translator로 할 수 있는 것",
    sellingTitle:
      "내 언어로 찾고, 같은 앱에서 바로 보고, 자막, 더빙, 내보내기까지 이어집니다.",
    sellingDescription:
      "Translator는 다른 언어권 영상을 찾고, 내 언어로 시청하고, 자막 영상이나 더빙 영상으로 바꾸는 과정을 여러 도구 없이 한 앱에서 이어줍니다.",
    sellingPoints: [
      {
        title: "유튜브 알고리즘이 보여주지 않던 영상을 찾습니다",
        description:
          "내 언어로 입력하고, 현지 피드만으로는 절대 발견하지 못했을 영상을 Translator로 끌어옵니다.",
        href: "/video-discovery",
        cta: "영상 발견 보기",
      },
      {
        title: "먼저 보고, 무엇을 남길지 결정합니다",
        description:
          "번역 자막으로 빠르게 이해하고, 원문 맥락을 같이 보면서 편집, 더빙, 클립 추출이 필요한지 판단할 수 있습니다.",
        href: "/subtitle-editor",
        cta: "자막 편집기 보기",
      },
      {
        title: "전체 워크플로우를 한 앱에서 끝냅니다",
        description:
          "다운로드, 전사, 번역, 더빙, 자막 입히기, 내보내기를 여러 앱 사이에서 왔다 갔다 하지 않고 끝낼 수 있습니다.",
        href: "/video-downloader",
        cta: "다운로더 보기",
      },
      {
        title: "AI를 쓸 때만 비용이 듭니다",
        description:
          "앱은 무료로 내려받고, 자막 편집도 무료로 쓸 수 있으며, 필요할 때만 크레딧이나 BYO 키로 AI를 사용합니다.",
        href: "/pricing",
        cta: "요금 보기",
      },
    ],
    socialEyebrow: "사용자 반응",
    socialTitle: "사람들은 차이를 빠르게 알아챕니다.",
    socialDescription:
      "모델 출력만 감싼 얇은 도구가 아니라, 완성도 있는 워크플로우 제품처럼 느껴지기 때문입니다.",
    languagesEyebrow: "언어 확장성",
    languagesTitle: "39개 자막 언어로 바로 이어집니다.",
    languagesDescription:
      "많이 찾는 언어부터 시작하고, 진짜 중요한 영상이나 타깃 시청자가 다른 곳에 있을 때 더 멀리 확장하세요.",
    bottomEyebrow: "더 큰 인터넷을 여세요",
    bottomTitle: "Translator를 다운로드하고 언어 경계 밖의 영상을 보기 시작하세요.",
    bottomDescription:
      "유튜브 알고리즘이 보여주지 않던 영상을 찾고, 내 언어로 시청하고, 좋은 영상은 보관할 수 있는 자막 영상이나 더빙 영상으로 바꾸세요.",
    mockSearchQuery: "일본 직장 문화 인터뷰 추천",
    mockSearchTag: "한국어로 검색",
    heroBenefitTitle1: "번역 자막으로 먼저 빠르게 확인합니다",
    heroBenefitBody1:
      "외국어 영상을 바로 이해한 뒤 저장할지, 클립으로 만들지, 현지화할지 판단할 수 있습니다.",
    heroBenefitTitle2: "발견부터 결과물까지 한 앱에서 이어집니다",
    heroBenefitBody2:
      "가치 있는 영상이라면 자막, 더빙, 요약, 하이라이트, 내보내기까지 같은 흐름에서 바로 이어갈 수 있습니다.",
    viewerEyebrow: "기다리지 않고 보기",
    viewerWindowTitle: "실시간 번역 자막",
    viewerTitle: "전체 번역이 끝나기 전부터 자막이 한 줄씩 바로 올라옵니다.",
    viewerDescription:
      "전체 번역이 끝날 때까지 기다릴 필요 없이, 보고 싶은 영상을 내 언어 자막과 함께 바로 즐길 수 있습니다.",
    viewerScreenshotCaption:
      "번역이 완료된 줄부터 플레이어에 바로 반영됩니다. 전체 자막 파일이 끝날 때까지 기다릴 필요가 없습니다.",
    actionEyebrow: "바로 활용하기",
    actionWindowTitle: "하이라이트 클립",
    actionTitle: "긴 영상에서도 좋은 장면만 바로 뽑아낼 수 있습니다.",
    actionDescription:
      "가치 있는 영상을 찾았다면, Translator가 눈에 띄는 구간을 잡아 주고 긴 영상을 짧고 활용 가능한 클립으로 바꾸는 흐름까지 이어줍니다.",
    actionScreenshotCaption:
      "타임코드, 요약, 클립 미리보기가 함께 보여서 공유할 만한 장면만 빠르게 고를 수 있습니다.",
    aboutLinkLabel: "제품 배경 보기",
    sellingCardEyebrow: "핵심 장점",
    productHuntLinkLabel: "Product Hunt 보기",
    heroDiscoveryAlt: "AI 비디오 추천 검색 결과 화면",
    viewerAlt: "번역 자막과 함께 비디오를 검토하는 화면",
    actionAlt: "하이라이트 클립 후보를 검토하는 화면",
  },
} as const;

const homeCopy = {
  ...baseHomeCopy,
  es: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Busca videos globales en tu idioma | App de escritorio gratis",
    metadataDescription:
      "Busca videos en tu propio idioma, descubre creadores fuera de tu burbuja lingüística y míralos con subtítulos traducidos en pocos clics. Luego dobla, recorta, edita y exporta en una sola app de escritorio.",
    eyebrow: "No es otro traductor de video con IA",
    title:
      "Si está en otro idioma, quizá ni siquiera lo encuentres. Translator rompe primero esa barrera.",
    subtitle:
      "Busca en tu propio idioma. Encuentra videos, creadores, entrevistas, tutoriales y tendencias de mundos lingüísticos completamente distintos. Míralos con subtítulos traducidos en pocos clics y luego dóblalos, recórtalos o localízalos en la misma app.",
    heroPoints: [
      "Busca globalmente usando tu idioma nativo",
      "Mira videos en otros idiomas con subtítulos traducidos en segundos",
      "Convierte hallazgos en doblajes, clips o exportaciones localizadas",
      "Mantén descarga, subtítulos, doblaje y exportación en un solo flujo de escritorio",
    ],
    heroNote:
      "Descarga gratis. Descargar y editar subtítulos es gratis. Las funciones con IA usan créditos solo cuando las ejecutas.",
    heroPricingLink: "Ver precios",
    heroFaqLink: "Leer el FAQ",
    heroScreenshotCaption:
      "Describe el tipo de video que buscas y añade país o recencia solo si importa. Translator te devuelve canales y videos listos para ver o descargar.",
    metrics: [
      {
        value: "39",
        label: "idiomas de subtítulos",
        detail: "Hecho para superar barreras lingüísticas, no solo para pulir subtítulos.",
      },
      {
        value: "Busca primero",
        label: "descubre antes de traducir",
        detail: "Usa tu propio idioma para llegar a videos que tu feed nunca te mostró.",
      },
      {
        value: "Una app",
        label: "no cinco herramientas desconectadas",
        detail: "Descarga, transcribe, traduce, dobla, recorta y exporta en un solo lugar.",
      },
      {
        value: "De espectador a creador",
        label: "el flujo sigue abierto",
        detail: "Mira para ti o convierte ese mismo video en activos listos para publicar.",
      },
    ],
    comparisonEyebrow: "Lo que otras herramientas no resuelven",
    comparisonTitle:
      "La mayoría de los traductores con IA solo ayudan después de encontrar el video.",
    comparisonDescription:
      "Solo ayudan cuando ya tienes el video. Translator te ayuda a encontrarlo primero, verlo en tu propio idioma y convertirlo en un resultado terminado dentro de un solo flujo.",
    typicalLabel: "Traductor IA típico",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Empieza cuando ya encontraste un video.",
        translator:
          "Te deja buscar en tu idioma y descubrir primero videos de otros mundos lingüísticos.",
      },
      {
        typical: "Devuelve solo texto o subtítulos traducidos.",
        translator:
          "Te deja mirar, editar, doblar, resumir, recortar y exportar dentro del mismo flujo.",
      },
      {
        typical: "Necesita herramientas aparte para descargar, editar, TTS y exportar.",
        translator: "Mantiene todo el flujo de video en un solo espacio de trabajo de escritorio.",
      },
      {
        typical: "Se siente como una utilidad.",
        translator:
          "Se siente como acceso a un internet más amplio y a una forma más rápida de actuar sobre lo que encuentras.",
      },
    ],
    sellingEyebrow: "Lo que realmente obtienes",
    sellingTitle:
      "Encuentra videos fuera de tu burbuja lingüística y luego míralos, subtitúlalos, dóblalos y expórtalos en una sola app.",
    sellingDescription:
      "Translator te ayuda a encontrar videos en otros idiomas, verlos en tu propio idioma y convertirlos en videos subtitulados o doblados sin tener que combinar cinco herramientas.",
    sellingPoints: [
      {
        title: "Encuentra videos que tu algoritmo de YouTube nunca te mostraría",
        description:
          "Escribe lo que quieres en tu propio idioma y usa Translator para traer videos que nunca descubrirías solo con los feeds locales.",
        href: "/video-discovery",
        cta: "Ver descubrimiento de videos",
      },
      {
        title: "Mira primero y decide después",
        description:
          "Obtén subtítulos traducidos rápido, conserva el contexto original cerca y decide si vale la pena editar, doblar o recortar más a fondo.",
        href: "/subtitle-editor",
        cta: "Ver el editor",
      },
      {
        title: "Termina el trabajo sin dispersarte",
        description:
          "Descarga, transcribe, traduce, dobla, quema subtítulos y exporta sin saltar entre pestañas y apps.",
        href: "/video-downloader",
        cta: "Ver el descargador",
      },
      {
        title: "Pagas cuando corre la IA, no antes",
        description:
          "La app es gratis para descargar, gratis para editar subtítulos y flexible para usuarios avanzados que quieren créditos o claves BYO.",
        href: "/pricing",
        cta: "Ver precios",
      },
    ],
    socialEyebrow: "Lo que dice la gente",
    socialTitle: "La diferencia se nota rápido.",
    socialDescription:
      "El producto convence porque se siente como un flujo completo con criterio, no como otro envoltorio delgado sobre la salida de un modelo.",
    languagesEyebrow: "Alcance de idiomas",
    languagesTitle:
      "Traduce a 39 idiomas de subtítulos sin salir del flujo de trabajo.",
    languagesDescription:
      "Empieza con los idiomas que la gente espera y luego llega a la larga cola cuando el video o la audiencia correcta vive en otro lugar.",
    bottomEyebrow: "Abre un internet más grande",
    bottomTitle:
      "Descarga Translator y empieza a mirar más allá de tu frontera lingüística.",
    bottomDescription:
      "Encuentra videos que tu algoritmo de YouTube nunca te mostró, míralos en tu propio idioma y convierte los mejores en videos subtitulados o doblados que puedas conservar.",
    mockSearchQuery: "mejores entrevistas japonesas callejeras sobre cultura laboral",
    mockSearchTag: "Buscar en español",
    heroBenefitTitle1: "Mira primero con subtítulos traducidos",
    heroBenefitBody1:
      "Puedes entender videos en otros idiomas rápidamente antes de decidir si vale la pena guardarlos, recortarlos o localizarlos.",
    heroBenefitTitle2: "Pasa del descubrimiento al resultado en una sola app",
    heroBenefitBody2:
      "Cuando un video importa, sigue con subtítulos, doblaje, resumen, destacados y exportación sin cambiar de herramienta.",
    viewerEyebrow: "Míralo mientras sucede",
    viewerWindowTitle: "Subtítulos traducidos en vivo",
    viewerTitle:
      "Los subtítulos traducidos aparecen línea por línea mientras el trabajo sigue en curso.",
    viewerDescription:
      "Puedes empezar a disfrutar el video en tu idioma enseguida en lugar de esperar a que termine toda la traducción.",
    viewerScreenshotCaption:
      "Cada línea traducida aparece de inmediato en el reproductor. No tienes que esperar a que termine todo el archivo.",
    actionEyebrow: "Conviértelo en algo útil",
    actionWindowTitle: "Clips destacados",
    actionTitle: "Saca los mejores momentos de un video largo sin hacerlo a mano.",
    actionDescription:
      "Cuando encuentras algo que vale la pena guardar, Translator puede señalar los mejores momentos y convertir un video completo en clips cortos que realmente puedes usar.",
    actionScreenshotCaption:
      "Los clips candidatos aparecen con marcas de tiempo, resúmenes y vistas previas para que conserves solo las partes que vale la pena compartir.",
    aboutLinkLabel: "Por qué lo construimos",
    sellingCardEyebrow: "Por qué importa",
    productHuntLinkLabel: "Ver en Product Hunt",
    heroDiscoveryAlt: "Resultados de búsqueda de recomendaciones de video con IA",
    viewerAlt: "Revisando un video con subtítulos traducidos",
    actionAlt: "Revisando candidatos de clips destacados",
  },
  ja: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - 自分の言語で世界の動画を探せるデスクトップアプリ | 無料ダウンロード",
    metadataDescription:
      "自分の言語で動画を探し、言語の壁の外にいるクリエイターを見つけ、翻訳字幕付きですぐ視聴できます。そのまま吹き替え、切り抜き、編集、書き出しまで1つのデスクトップアプリで続けられます。",
    eyebrow: "ただの AI 動画翻訳ツールではありません",
    title:
      "別の言語にある動画は、そもそも見つけられないことがあります。Translator はまずその壁を越えます。",
    subtitle:
      "自分の言語で検索しましょう。まったく別の言語圏にある動画、クリエイター、インタビュー、チュートリアル、トレンドを見つけられます。翻訳字幕ですぐ視聴し、そのまま同じアプリで吹き替え、切り抜き、ローカライズまで進めます。",
    heroPoints: [
      "母語で検索して他言語圏の動画を見つける",
      "翻訳字幕付きで外国語動画をすばやく視聴する",
      "見つけた動画を吹き替え、クリップ、ローカライズ出力に変える",
      "ダウンロードから字幕、吹き替え、書き出しまで1つのデスクトップワークフローで完結",
    ],
    heroNote:
      "無料でダウンロードできます。ダウンロードと字幕編集は無料。AI 機能は実行した分だけクレジットを使います。",
    heroPricingLink: "料金を見る",
    heroFaqLink: "FAQ を読む",
    heroScreenshotCaption:
      "探したい動画のタイプを書き、必要なときだけ国や新しさを加えてください。Translator が視聴やダウンロードに進めるチャンネルと動画を返します。",
    metrics: [
      {
        value: "39",
        label: "字幕対応言語",
        detail: "単に字幕を整えるだけでなく、言語の壁を越えるために作られています。",
      },
      {
        value: "まず検索",
        label: "翻訳より前の発見",
        detail: "自分の言語で、普段のフィードでは出会えない動画に届きます。",
      },
      {
        value: "1つのアプリ",
        label: "分断された5つのツールではない",
        detail: "ダウンロード、文字起こし、翻訳、吹き替え、クリップ、書き出しを1か所で行えます。",
      },
      {
        value: "視聴者から制作者へ",
        label: "ワークフローが閉じない",
        detail: "自分のために見ることも、同じ動画を公開用素材に変えることもできます。",
      },
    ],
    comparisonEyebrow: "他のツールが見落とすこと",
    comparisonTitle:
      "ほとんどの AI 翻訳ツールは、動画を見つけた後にしか役立ちません。",
    comparisonDescription:
      "そうしたツールは、すでに動画を持っている前提です。Translator はその前に動画を見つけ、自分の言語で視聴し、1つの流れで成果物まで持っていけるようにします。",
    typicalLabel: "一般的な AI 翻訳ツール",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "すでに見つけた動画をアップロードしてから始まる。",
        translator:
          "自分の言語で検索し、他言語圏の動画を先に見つけられます。",
      },
      {
        typical: "翻訳テキストや字幕だけを返す。",
        translator:
          "視聴、編集、吹き替え、要約、クリップ、書き出しまで同じ流れで続けられます。",
      },
      {
        typical: "ダウンロード、編集、TTS、書き出しに別ツールが必要。",
        translator: "動画ワークフロー全体を1つのデスクトップ空間にまとめます。",
      },
      {
        typical: "単なるユーティリティに感じる。",
        translator:
          "より広いインターネットへの入り口であり、見つけたものをすぐ動かせる感覚になります。",
      },
    ],
    sellingEyebrow: "実際にできること",
    sellingTitle:
      "言語バブルの外にある動画を見つけたら、そのまま視聴、字幕、吹き替え、書き出しまで1つのアプリで進められます。",
    sellingDescription:
      "Translator は、他言語の動画を見つけ、自分の言語で視聴し、字幕付きや吹き替え付きの動画に変えるところまでを、5つのツールをつなぎ合わせずに進められるようにします。",
    sellingPoints: [
      {
        title: "YouTube のアルゴリズムでは出てこない動画を見つける",
        description:
          "見たい内容を自分の言語で入力すると、ローカルなフィードだけではまず出会えない動画を Translator が引き上げます。",
        href: "/video-discovery",
        cta: "動画発見を見る",
      },
      {
        title: "まず見てから、どう使うか決める",
        description:
          "翻訳字幕ですぐ理解し、原文の文脈も近くに保ちながら、編集、吹き替え、切り抜きに進む価値があるか判断できます。",
        href: "/subtitle-editor",
        cta: "エディターを見る",
      },
      {
        title: "ツールを増やさず最後まで進める",
        description:
          "ダウンロード、文字起こし、翻訳、吹き替え、字幕焼き込み、書き出しをタブやアプリを行き来せず終えられます。",
        href: "/video-downloader",
        cta: "ダウンローダーを見る",
      },
      {
        title: "AI を動かしたときだけ支払う",
        description:
          "アプリは無料でダウンロードでき、字幕編集も無料。必要なときだけクレジットや BYO キーで AI を使えます。",
        href: "/pricing",
        cta: "料金を見る",
      },
    ],
    socialEyebrow: "ユーザーの声",
    socialTitle: "違いはすぐに伝わります。",
    socialDescription:
      "単なるモデル出力の薄いラッパーではなく、ワークフロー全体として完成度を感じられるからです。",
    languagesEyebrow: "言語の広がり",
    languagesTitle: "39 の字幕言語へ、ワークフローを離れずに翻訳できます。",
    languagesDescription:
      "まずは期待される主要言語から始め、本当に重要な動画や視聴者が別の場所にいるときは長い尾まで広げられます。",
    bottomEyebrow: "もっと広いインターネットへ",
    bottomTitle:
      "Translator をダウンロードして、言語の壁の向こうにある動画を見始めましょう。",
    bottomDescription:
      "YouTube のアルゴリズムが見せてこなかった動画を見つけ、自分の言語で視聴し、良いものは字幕付きや吹き替え付きの動画として手元に残せます。",
    mockSearchQuery: "仕事文化についての日本の街頭インタビュー おすすめ",
    mockSearchTag: "日本語で検索",
    heroBenefitTitle1: "翻訳字幕でまず確認できる",
    heroBenefitBody1:
      "外国語動画をすばやく理解してから、保存、クリップ化、ローカライズする価値があるか判断できます。",
    heroBenefitTitle2: "発見から出力まで1つのアプリ",
    heroBenefitBody2:
      "価値のある動画なら、字幕、吹き替え、要約、ハイライト、書き出しまでそのまま進めます。",
    viewerEyebrow: "その場で見始める",
    viewerWindowTitle: "ライブ翻訳字幕",
    viewerTitle:
      "ジョブがまだ進行中でも、翻訳字幕が1行ずつ表示されます。",
    viewerDescription:
      "翻訳全体の完了を待たなくても、すぐに自分の言語で動画を楽しみ始められます。",
    viewerScreenshotCaption:
      "字幕が翻訳されるたびに、すぐプレーヤーに表示されます。ファイル全体の完了を待つ必要はありません。",
    actionEyebrow: "使える形に変える",
    actionWindowTitle: "ハイライトクリップ",
    actionTitle: "長い動画から良い瞬間だけを手作業なしで抜き出せます。",
    actionDescription:
      "残す価値のある動画を見つけたら、Translator が目立つ瞬間を見つけ、長編動画を使える短いクリップに変えるのを助けます。",
    actionScreenshotCaption:
      "タイムスタンプ、要約、プレビュー付きで候補クリップが並ぶので、共有したい部分だけを残せます。",
    aboutLinkLabel: "なぜ作ったのか",
    sellingCardEyebrow: "重要な理由",
    productHuntLinkLabel: "Product Hunt で見る",
    heroDiscoveryAlt: "AI 動画推薦の検索結果画面",
    viewerAlt: "翻訳字幕付きで動画を確認している画面",
    actionAlt: "ハイライトクリップ候補を確認している画面",
  },
  zh: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - 用你的语言搜索全球视频 | 免费桌面应用",
    metadataDescription:
      "用你的语言搜索视频，发现语言圈外的创作者，并在几次点击内用翻译字幕观看。然后在同一款桌面应用里继续配音、剪辑、编辑和导出。",
    eyebrow: "不只是又一个 AI 视频翻译器",
    title: "如果内容在另一种语言里，你甚至可能根本找不到。Translator 先帮你越过这道门槛。",
    subtitle:
      "用你的语言搜索。发现完全不同语言世界里的视频、创作者、访谈、教程和趋势。几次点击就能带着翻译字幕观看，然后在同一款应用里继续配音、剪辑或做本地化输出。",
    heroPoints: [
      "用母语搜索全球视频",
      "快速用翻译字幕观看外语视频",
      "把发现的视频继续做成配音、剪辑或本地化输出",
      "下载、字幕、配音和导出都留在同一套桌面工作流里",
    ],
    heroNote:
      "免费下载。下载和字幕编辑免费，AI 功能只在你实际运行时消耗积分。",
    heroPricingLink: "查看价格",
    heroFaqLink: "查看 FAQ",
    heroScreenshotCaption:
      "描述你想找的视频类型，只有在需要时再加国家或时效。Translator 会返回可直接观看或下载的频道和视频。",
    metrics: [
      {
        value: "39",
        label: "字幕语言",
        detail: "它的目标不是只打磨字幕，而是跨越语言壁垒。",
      },
      {
        value: "先搜索",
        label: "先发现，再翻译",
        detail: "用你的语言找到原本不会出现在本地推荐流里的视频。",
      },
      {
        value: "一款应用",
        label: "不是五个分散工具",
        detail: "下载、转写、翻译、配音、剪辑和导出都在同一个地方完成。",
      },
      {
        value: "从观众到创作者",
        label: "工作流保持打开",
        detail: "既能自己看，也能把同一支视频变成可发布的素材。",
      },
    ],
    comparisonEyebrow: "其他工具忽略了什么",
    comparisonTitle: "大多数 AI 翻译工具只在你已经找到视频之后才开始有用。",
    comparisonDescription:
      "它们只在你已经拿到视频之后才有帮助。Translator 则先帮你找到视频，用你的语言观看，再在同一条工作流里把它变成最终成品。",
    typicalLabel: "常见 AI 翻译器",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "在你找到视频之后才开始。",
        translator: "让你先用自己的语言搜索并发现其他语言世界里的视频。",
      },
      {
        typical: "只返回翻译后的文本或字幕。",
        translator: "让你在同一条流程里继续观看、编辑、配音、摘要、剪辑和导出。",
      },
      {
        typical: "下载、编辑、TTS 和导出都要分开处理。",
        translator: "把完整的视频工作流放进同一个桌面工作区。",
      },
      {
        typical: "更像一个小工具。",
        translator: "更像通向更大互联网的入口，也是把发现内容迅速落地的方式。",
      },
    ],
    sellingEyebrow: "你真正得到的是什么",
    sellingTitle: "跳出你的语言圈找到视频，然后在一款应用里完成观看、字幕、配音和导出。",
    sellingDescription:
      "Translator 帮你找到外语视频，用你的语言观看，并把它变成带字幕或带配音的视频，不用在五个工具之间来回拼接。",
    sellingPoints: [
      {
        title: "找到 YouTube 算法永远不会推给你的视频",
        description:
          "用你的语言输入想看的内容，再用 Translator 拉出那些只靠本地推荐流永远发现不了的视频。",
        href: "/video-discovery",
        cta: "查看视频发现",
      },
      {
        title: "先看，再决定怎么处理",
        description:
          "快速得到翻译字幕，把原始语境留在身边，再判断这支视频是否值得继续编辑、配音或剪辑。",
        href: "/subtitle-editor",
        cta: "查看编辑器",
      },
      {
        title: "不用工具蔓延也能做完",
        description:
          "下载、转写、翻译、配音、烧录字幕和导出都能完成，不用在标签页和应用之间来回切换。",
        href: "/video-downloader",
        cta: "查看下载器",
      },
      {
        title: "只有在 AI 运行时才付费",
        description:
          "应用免费下载，字幕编辑免费，也适合想用积分或 BYO 密钥的高阶用户。",
        href: "/pricing",
        cta: "查看价格",
      },
    ],
    socialEyebrow: "用户怎么说",
    socialTitle: "人们很快就能感受到差别。",
    socialDescription:
      "因为它更像一套有完整品味的工作流产品，而不是又一个包着模型输出的薄壳。",
    languagesEyebrow: "语言覆盖",
    languagesTitle: "无需离开工作流，就能翻译成 39 种字幕语言。",
    languagesDescription:
      "先覆盖大家最常用的语言，再在真正重要的视频或受众在别处时延伸到长尾语言。",
    bottomEyebrow: "打开更大的互联网",
    bottomTitle: "下载 Translator，开始观看你语言边界之外的视频。",
    bottomDescription:
      "找到 YouTube 算法从未给你看过的视频，用你的语言观看，并把最值得保留的内容做成带字幕或带配音的视频。",
    mockSearchQuery: "关于职场文化的日本街头采访 推荐",
    mockSearchTag: "用中文搜索",
    heroBenefitTitle1: "先用翻译字幕看一遍",
    heroBenefitBody1:
      "你可以先快速理解外语视频，再决定值不值得保存、剪辑或做本地化。",
    heroBenefitTitle2: "从发现到产出都在一款应用里",
    heroBenefitBody2:
      "当视频真的有价值时，你可以继续做字幕、配音、摘要、高光和导出，而不用换工具。",
    viewerEyebrow: "边跑边看",
    viewerWindowTitle: "实时翻译字幕",
    viewerTitle: "翻译任务还没结束，字幕也会一行一行地出现。",
    viewerDescription:
      "你不必等整段翻译完成，几乎立刻就能用自己的语言开始看视频。",
    viewerScreenshotCaption:
      "每当一行字幕翻译完成，就会立刻出现在播放器里。你不需要等整个文件结束。",
    actionEyebrow: "把它变成可用内容",
    actionWindowTitle: "高光片段",
    actionTitle: "不用手工也能从长视频里抽出最精彩的片段。",
    actionDescription:
      "当你找到值得保留的内容时，Translator 可以帮你找出最亮眼的时刻，并把整支长视频变成真正能用的短片段。",
    actionScreenshotCaption:
      "候选片段会带时间戳、摘要和预览出现，让你只保留值得分享的部分。",
    aboutLinkLabel: "为什么我们做它",
    sellingCardEyebrow: "为什么重要",
    productHuntLinkLabel: "在 Product Hunt 上查看",
    heroDiscoveryAlt: "AI 视频推荐搜索结果",
    viewerAlt: "正在查看带翻译字幕的视频",
    actionAlt: "正在查看高光片段候选",
  },
  fr: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Recherchez des vidéos mondiales dans votre langue | App desktop gratuite",
    metadataDescription:
      "Recherchez des vidéos dans votre langue, découvrez des créateurs hors de votre bulle linguistique et regardez-les avec des sous-titres traduits en quelques clics. Ensuite, doublez, découpez, éditez et exportez dans une seule app desktop.",
    eyebrow: "Pas juste un autre traducteur vidéo IA",
    title:
      "Si c’est dans une autre langue, vous ne le trouverez peut-être même jamais. Translator vous aide d’abord à franchir cette barrière.",
    subtitle:
      "Cherchez dans votre langue. Trouvez des vidéos, créateurs, interviews, tutoriels et tendances venant de mondes linguistiques totalement différents. Regardez-les avec des sous-titres traduits en quelques clics, puis doublez, découpez ou localisez le tout dans la même app.",
    heroPoints: [
      "Recherchez partout avec votre langue maternelle",
      "Regardez vite des vidéos en langue étrangère avec des sous-titres traduits",
      "Transformez vos découvertes en doublages, clips ou exports localisés",
      "Gardez téléchargement, sous-titres, doublage et export dans un seul workflow desktop",
    ],
    heroNote:
      "Téléchargement gratuit. Le téléchargement et l’édition de sous-titres sont gratuits. Les fonctions IA n’utilisent des crédits que lorsque vous les lancez.",
    heroPricingLink: "Voir les tarifs",
    heroFaqLink: "Lire la FAQ",
    heroScreenshotCaption:
      "Décrivez le type de vidéo recherché et n’ajoutez le pays ou la récence que si cela compte. Translator vous renvoie des chaînes et des vidéos prêtes à regarder ou télécharger.",
    metrics: [
      {
        value: "39",
        label: "langues de sous-titres",
        detail: "Conçu pour franchir les barrières linguistiques, pas seulement pour polir des sous-titres.",
      },
      {
        value: "Chercher d’abord",
        label: "la découverte avant la traduction",
        detail: "Utilisez votre langue pour atteindre des vidéos que votre flux ne vous a jamais montrées.",
      },
      {
        value: "Une seule app",
        label: "pas cinq outils séparés",
        detail: "Téléchargez, transcrivez, traduisez, doublez, découpez et exportez au même endroit.",
      },
      {
        value: "De spectateur à créateur",
        label: "le workflow reste ouvert",
        detail: "Regardez pour vous ou transformez la même vidéo en contenu publiable.",
      },
    ],
    comparisonEyebrow: "Ce que les autres outils ratent",
    comparisonTitle:
      "La plupart des traducteurs IA n’aident qu’après que vous avez trouvé la vidéo.",
    comparisonDescription:
      "Ils n’aident qu’une fois la vidéo déjà en main. Translator vous aide d’abord à la trouver, à la regarder dans votre langue, puis à la transformer en résultat final dans un seul workflow.",
    typicalLabel: "Traducteur IA classique",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Commence une fois la vidéo déjà trouvée.",
        translator:
          "Vous permet d’abord de chercher dans votre langue et de faire remonter des vidéos d’autres mondes linguistiques.",
      },
      {
        typical: "Rend juste du texte ou des sous-titres traduits.",
        translator:
          "Vous permet de regarder, éditer, doubler, résumer, découper et exporter dans le même flux.",
      },
      {
        typical: "Nécessite d’autres outils pour le téléchargement, l’édition, le TTS et l’export.",
        translator: "Conserve tout le workflow vidéo dans un seul espace desktop.",
      },
      {
        typical: "Donne l’impression d’un simple utilitaire.",
        translator:
          "Donne l’impression d’un accès à un internet plus vaste et d’un moyen plus rapide d’agir sur ce que vous trouvez.",
      },
    ],
    sellingEyebrow: "Ce que vous obtenez vraiment",
    sellingTitle:
      "Trouvez des vidéos hors de votre bulle linguistique, puis regardez-les, sous-titrez-les, doublez-les et exportez-les dans une seule app.",
    sellingDescription:
      "Translator vous aide à trouver des vidéos en langue étrangère, à les regarder dans votre langue, puis à les transformer en vidéos sous-titrées ou doublées sans jongler avec cinq outils.",
    sellingPoints: [
      {
        title: "Trouvez des vidéos que votre algorithme YouTube ne vous montrerait jamais",
        description:
          "Décrivez ce que vous voulez dans votre langue et laissez Translator faire remonter des vidéos que vos flux locaux seuls ne feraient jamais apparaître.",
        href: "/video-discovery",
        cta: "Voir la découverte vidéo",
      },
      {
        title: "Regardez d’abord, décidez ensuite",
        description:
          "Obtenez vite des sous-titres traduits, gardez le contexte original à portée de main et décidez si la vidéo mérite une édition, un doublage ou un découpage plus poussé.",
        href: "/subtitle-editor",
        cta: "Voir l’éditeur",
      },
      {
        title: "Allez au bout sans empiler les outils",
        description:
          "Téléchargez, transcrivez, traduisez, doublez, incrustez les sous-titres et exportez sans jongler entre onglets et applications.",
        href: "/video-downloader",
        cta: "Voir le téléchargeur",
      },
      {
        title: "Vous payez quand l’IA tourne, pas avant",
        description:
          "L’app est gratuite à télécharger, gratuite pour éditer les sous-titres, et flexible pour les utilisateurs avancés qui veulent des crédits ou des clés BYO.",
        href: "/pricing",
        cta: "Voir les tarifs",
      },
    ],
    socialEyebrow: "Ce qu’en disent les gens",
    socialTitle: "La différence se remarque vite.",
    socialDescription:
      "Le produit convainc parce qu’il ressemble à un vrai workflow complet, pas à un simple emballage autour d’une sortie de modèle.",
    languagesEyebrow: "Portée linguistique",
    languagesTitle:
      "Traduisez vers 39 langues de sous-titres sans quitter le workflow.",
    languagesDescription:
      "Commencez par les langues les plus attendues, puis allez vers la longue traîne quand la bonne vidéo ou la bonne audience se trouve ailleurs.",
    bottomEyebrow: "Ouvrez un internet plus vaste",
    bottomTitle:
      "Téléchargez Translator et commencez à regarder au-delà de votre frontière linguistique.",
    bottomDescription:
      "Trouvez des vidéos que votre algorithme YouTube ne vous a jamais montrées, regardez-les dans votre langue, puis transformez les meilleures en vidéos sous-titrées ou doublées à conserver.",
    mockSearchQuery: "meilleures interviews de rue japonaises sur la culture du travail",
    mockSearchTag: "Chercher en français",
    heroBenefitTitle1: "Regardez d’abord avec des sous-titres traduits",
    heroBenefitBody1:
      "Vous pouvez comprendre rapidement des vidéos en langue étrangère avant de décider si elles valent la peine d’être sauvegardées, découpées ou localisées.",
    heroBenefitTitle2: "Passez de la découverte au résultat dans une seule app",
    heroBenefitBody2:
      "Quand une vidéo compte, continuez avec les sous-titres, le doublage, le résumé, les temps forts et l’export sans changer d’outil.",
    viewerEyebrow: "Voyez-le pendant que ça tourne",
    viewerWindowTitle: "Sous-titres traduits en direct",
    viewerTitle:
      "Les sous-titres traduits apparaissent ligne par ligne pendant que la tâche tourne encore.",
    viewerDescription:
      "Vous pouvez commencer à profiter de la vidéo dans votre langue tout de suite, au lieu d’attendre la fin complète de la traduction.",
    viewerScreenshotCaption:
      "Chaque ligne traduite apparaît immédiatement dans le lecteur. Vous n’avez pas à attendre la fin du fichier entier.",
    actionEyebrow: "Transformez-la en quelque chose d’utile",
    actionWindowTitle: "Clips marquants",
    actionTitle:
      "Sortez les meilleurs moments d’une longue vidéo sans le faire à la main.",
    actionDescription:
      "Quand vous trouvez quelque chose qui mérite d’être gardé, Translator peut faire remonter les meilleurs moments et transformer une longue vidéo en clips courts réellement exploitables.",
    actionScreenshotCaption:
      "Les clips proposés apparaissent avec horodatages, résumés et aperçus pour ne garder que les passages qui valent le partage.",
    aboutLinkLabel: "Pourquoi nous l’avons créé",
    sellingCardEyebrow: "Pourquoi c’est utile",
    productHuntLinkLabel: "Voir sur Product Hunt",
    heroDiscoveryAlt: "Résultats de recherche de recommandations vidéo IA",
    viewerAlt: "Visionnage d’une vidéo avec sous-titres traduits",
    actionAlt: "Examen de suggestions de clips marquants",
  },
  de: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Weltweite Videos in deiner Sprache finden | Kostenlose Desktop-App",
    metadataDescription:
      "Suche Videos in deiner Sprache, entdecke Creator außerhalb deiner Sprachblase und sieh sie mit übersetzten Untertiteln in wenigen Klicks an. Danach kannst du alles in derselben Desktop-App dubben, schneiden, bearbeiten und exportieren.",
    eyebrow: "Nicht einfach noch ein KI-Videoübersetzer",
    title:
      "Wenn etwas in einer anderen Sprache ist, findest du es vielleicht nicht einmal. Translator hilft dir zuerst über genau diese Hürde hinweg.",
    subtitle:
      "Suche in deiner eigenen Sprache. Finde Videos, Creator, Interviews, Tutorials und Trends aus völlig anderen Sprachwelten. Schau sie mit übersetzten Untertiteln an und geh in derselben App direkt zu Dub, Clip oder Lokalisierung weiter.",
    heroPoints: [
      "Mit deiner Muttersprache weltweit suchen",
      "Fremdsprachige Videos schnell mit übersetzten Untertiteln ansehen",
      "Entdeckungen in Dubs, Clips oder lokalisierte Exporte verwandeln",
      "Download, Untertitel, Dubbing und Export in einem Desktop-Workflow behalten",
    ],
    heroNote:
      "Kostenloser Download. Download und Untertitelbearbeitung sind kostenlos. KI-Funktionen verbrauchen nur Credits, wenn du sie startest.",
    heroPricingLink: "Preise ansehen",
    heroFaqLink: "FAQ lesen",
    heroScreenshotCaption:
      "Beschreibe die Art von Video, die du suchst, und füge Land oder Aktualität nur hinzu, wenn es wichtig ist. Translator liefert Kanäle und Videos, die du direkt ansehen oder herunterladen kannst.",
    metrics: [
      {
        value: "39",
        label: "Untertitelsprachen",
        detail: "Entwickelt, um Sprachbarrieren zu überwinden, nicht nur Untertitel zu polieren.",
      },
      {
        value: "Erst suchen",
        label: "Entdecken vor dem Übersetzen",
        detail: "Nutze deine Sprache, um Videos zu erreichen, die dein Feed nie gezeigt hat.",
      },
      {
        value: "Eine App",
        label: "nicht fünf getrennte Tools",
        detail: "Download, Transkription, Übersetzung, Dubbing, Clips und Export an einem Ort.",
      },
      {
        value: "Vom Zuschauer zum Creator",
        label: "der Workflow bleibt offen",
        detail: "Schau für dich selbst oder verwandle dasselbe Video in veröffentlichbare Assets.",
      },
    ],
    comparisonEyebrow: "Was andere Tools übersehen",
    comparisonTitle:
      "Die meisten KI-Übersetzer helfen erst, nachdem du das Video gefunden hast.",
    comparisonDescription:
      "Sie helfen erst, wenn du das Video schon hast. Translator hilft dir zuerst dabei, es zu finden, es in deiner Sprache anzusehen und es in einem einzigen Ablauf zu einem fertigen Ergebnis zu machen.",
    typicalLabel: "Typischer KI-Übersetzer",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Startet erst, wenn du schon ein Video gefunden hast.",
        translator:
          "Lässt dich zuerst in deiner Sprache suchen und Videos aus anderen Sprachwelten entdecken.",
      },
      {
        typical: "Gibt nur übersetzten Text oder Untertitel zurück.",
        translator:
          "Lässt dich im selben Ablauf schauen, bearbeiten, dubben, zusammenfassen, clippen und exportieren.",
      },
      {
        typical: "Braucht separate Tools für Download, Bearbeitung, TTS und Export.",
        translator: "Behält den kompletten Video-Workflow in einem Desktop-Arbeitsraum.",
      },
      {
        typical: "Fühlt sich wie ein Hilfsprogramm an.",
        translator:
          "Fühlt sich eher wie Zugang zu einem größeren Internet und zu schnellerem Handeln auf Basis deiner Funde an.",
      },
    ],
    sellingEyebrow: "Was du wirklich bekommst",
    sellingTitle:
      "Finde Videos außerhalb deiner Sprachblase und schau sie dann an, versehe sie mit Untertiteln, dubbe sie und exportiere sie in einer einzigen App.",
    sellingDescription:
      "Translator hilft dir, fremdsprachige Videos zu finden, sie in deiner Sprache anzusehen und daraus untertitelte oder gedubbte Videos zu machen, ohne fünf verschiedene Tools zusammenzustückeln.",
    sellingPoints: [
      {
        title: "Finde Videos, die dein YouTube-Algorithmus dir nie zeigen würde",
        description:
          "Beschreibe in deiner eigenen Sprache, was du sehen willst, und lass Translator Videos holen, die du allein über lokale Feeds nie entdecken würdest.",
        href: "/video-discovery",
        cta: "Video-Discovery ansehen",
      },
      {
        title: "Erst ansehen, dann entscheiden",
        description:
          "Bekomme schnell übersetzte Untertitel, halte den Originalkontext in der Nähe und entscheide dann, ob sich tiefere Bearbeitung, Dubbing oder Clipping lohnt.",
        href: "/subtitle-editor",
        cta: "Editor ansehen",
      },
      {
        title: "Ohne Tool-Chaos fertig werden",
        description:
          "Lade herunter, transkribiere, übersetze, dubbe, brenne Untertitel ein und exportiere, ohne zwischen Tabs und Apps zu springen.",
        href: "/video-downloader",
        cta: "Downloader ansehen",
      },
      {
        title: "Du zahlst erst, wenn KI läuft",
        description:
          "Die App ist kostenlos herunterladbar, kostenlos zum Bearbeiten von Untertiteln und flexibel für Power-User mit Credits oder BYO-Schlüsseln.",
        href: "/pricing",
        cta: "Preise ansehen",
      },
    ],
    socialEyebrow: "Was Leute sagen",
    socialTitle: "Den Unterschied merkt man schnell.",
    socialDescription:
      "Das Produkt funktioniert, weil es sich wie ein vollständiger Workflow mit Anspruch anfühlt und nicht wie eine dünne Hülle um Modellausgabe.",
    languagesEyebrow: "Sprachreichweite",
    languagesTitle:
      "Übersetze in 39 Untertitelsprachen, ohne den Workflow zu verlassen.",
    languagesDescription:
      "Starte mit den erwarteten Sprachen und geh dann in den Long Tail, wenn das richtige Video oder Publikum woanders sitzt.",
    bottomEyebrow: "Öffne ein größeres Internet",
    bottomTitle:
      "Lade Translator herunter und beginne, jenseits deiner Sprachgrenze zu schauen.",
    bottomDescription:
      "Finde Videos, die dein YouTube-Algorithmus dir nie gezeigt hat, schau sie in deiner Sprache an und verwandle die besten in untertitelte oder gedubbte Videos, die du behalten kannst.",
    mockSearchQuery: "beste japanische Straßeninterviews über Arbeitskultur",
    mockSearchTag: "Auf Deutsch suchen",
    heroBenefitTitle1: "Erst mit übersetzten Untertiteln ansehen",
    heroBenefitBody1:
      "Du verstehst fremdsprachige Videos schnell und kannst erst dann entscheiden, ob sie sich zum Speichern, Clippen oder Lokalisieren lohnen.",
    heroBenefitTitle2: "Von der Entdeckung zum Ergebnis in einer App",
    heroBenefitBody2:
      "Wenn ein Video wichtig wird, mach mit Untertiteln, Dubbing, Zusammenfassung, Highlights und Export weiter, ohne das Tool zu wechseln.",
    viewerEyebrow: "Sehen, während es passiert",
    viewerWindowTitle: "Live übersetzte Untertitel",
    viewerTitle:
      "Übersetzte Untertitel erscheinen Zeile für Zeile, während der Job noch läuft.",
    viewerDescription:
      "Du kannst das Video sofort in deiner Sprache genießen, statt auf den Abschluss der gesamten Übersetzung zu warten.",
    viewerScreenshotCaption:
      "Sobald eine Untertitelzeile übersetzt ist, erscheint sie direkt im Player. Du musst nicht auf die ganze Datei warten.",
    actionEyebrow: "Mach etwas daraus",
    actionWindowTitle: "Highlight-Clips",
    actionTitle:
      "Hol die besten Momente aus einem langen Video heraus, ohne es von Hand zu machen.",
    actionDescription:
      "Wenn du etwas Wertvolles gefunden hast, kann Translator starke Momente hervorheben und ein langes Video in kurze Clips verwandeln, die du wirklich verwenden kannst.",
    actionScreenshotCaption:
      "Clip-Kandidaten erscheinen mit Zeitstempeln, Zusammenfassungen und Vorschauen, damit du nur die teilbaren Teile behältst.",
    aboutLinkLabel: "Warum wir das gebaut haben",
    sellingCardEyebrow: "Warum es wichtig ist",
    productHuntLinkLabel: "Auf Product Hunt ansehen",
    heroDiscoveryAlt: "Suchergebnisse der KI-Videoempfehlung",
    viewerAlt: "Ein Video mit übersetzten Untertiteln ansehen",
    actionAlt: "Kandidaten für Highlight-Clips prüfen",
  },
  pt: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Pesquise vídeos globais no seu idioma | App desktop grátis",
    metadataDescription:
      "Pesquise vídeos no seu idioma, descubra criadores fora da sua bolha linguística e assista com legendas traduzidas em poucos cliques. Depois faça dublagem, cortes, edição e exportação na mesma app desktop.",
    eyebrow: "Não é só mais um tradutor de vídeo com IA",
    title:
      "Se estiver em outro idioma, talvez você nem encontre. O Translator ajuda você a passar primeiro por essa barreira.",
    subtitle:
      "Pesquise no seu próprio idioma. Encontre vídeos, criadores, entrevistas, tutoriais e tendências de universos linguísticos completamente diferentes. Assista com legendas traduzidas em poucos cliques e depois siga para dublagem, cortes ou localização na mesma app.",
    heroPoints: [
      "Pesquise globalmente usando seu idioma nativo",
      "Assista rápido a vídeos em outros idiomas com legendas traduzidas",
      "Transforme descobertas em dublagens, clipes ou exports localizados",
      "Mantenha download, legendas, dublagem e exportação no mesmo fluxo desktop",
    ],
    heroNote:
      "Download grátis. Download de vídeos e edição de legendas são gratuitos. Os recursos de IA usam créditos apenas quando você roda a ação.",
    heroPricingLink: "Ver preços",
    heroFaqLink: "Ler o FAQ",
    heroScreenshotCaption:
      "Descreva o tipo de vídeo que você quer e adicione país ou recência só quando isso realmente importar. O Translator retorna canais e vídeos prontos para assistir ou baixar.",
    metrics: [
      {
        value: "39",
        label: "idiomas de legenda",
        detail: "Feito para atravessar barreiras de idioma, não só para polir legendas.",
      },
      {
        value: "Buscar primeiro",
        label: "descoberta antes da tradução",
        detail: "Use seu idioma para chegar a vídeos que o seu feed nunca mostrou.",
      },
      {
        value: "Um app",
        label: "não cinco ferramentas desconectadas",
        detail: "Baixe, transcreva, traduza, duble, recorte e exporte em um só lugar.",
      },
      {
        value: "De espectador a criador",
        label: "o fluxo continua aberto",
        detail: "Assista por conta própria ou transforme o mesmo vídeo em material publicável.",
      },
    ],
    comparisonEyebrow: "O que outras ferramentas deixam passar",
    comparisonTitle:
      "A maioria dos tradutores com IA só ajuda depois que você já encontrou o vídeo.",
    comparisonDescription:
      "Eles só ajudam quando você já tem o vídeo em mãos. O Translator ajuda você a encontrá-lo primeiro, assisti-lo no seu idioma e transformá-lo em um resultado final dentro de um único fluxo.",
    typicalLabel: "Tradutor de IA típico",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Só começa depois que o vídeo já foi encontrado.",
        translator:
          "Permite buscar no seu idioma e descobrir primeiro vídeos de outros universos linguísticos.",
      },
      {
        typical: "Entrega apenas texto ou legendas traduzidas.",
        translator:
          "Permite assistir, editar, dublar, resumir, recortar e exportar no mesmo fluxo.",
      },
      {
        typical: "Exige ferramentas separadas para download, edição, TTS e exportação.",
        translator: "Mantém todo o fluxo de vídeo dentro do mesmo espaço desktop.",
      },
      {
        typical: "Parece uma utilidade simples.",
        translator:
          "Parece acesso a uma internet maior e a um jeito mais rápido de agir sobre o que você encontra.",
      },
    ],
    sellingEyebrow: "O que você realmente recebe",
    sellingTitle:
      "Encontre vídeos fora da sua bolha de idioma e depois assista, legende, duble e exporte tudo em um só app.",
    sellingDescription:
      "O Translator ajuda você a encontrar vídeos em outros idiomas, assisti-los no seu próprio idioma e transformá-los em vídeos legendados ou dublados sem costurar cinco ferramentas diferentes.",
    sellingPoints: [
      {
        title: "Encontre vídeos que o seu algoritmo do YouTube nunca mostraria",
        description:
          "Escreva o que quer no seu idioma e use o Translator para puxar vídeos que você nunca descobriria apenas com feeds locais.",
        href: "/video-discovery",
        cta: "Ver descoberta de vídeos",
      },
      {
        title: "Assista primeiro e decida depois",
        description:
          "Receba legendas traduzidas rápido, mantenha o contexto original por perto e decida se vale seguir para edição, dublagem ou cortes.",
        href: "/subtitle-editor",
        cta: "Ver o editor",
      },
      {
        title: "Termine sem espalhar ferramentas",
        description:
          "Baixe, transcreva, traduza, duble, queime legendas e exporte sem pular entre abas e apps.",
        href: "/video-downloader",
        cta: "Ver o downloader",
      },
      {
        title: "Você paga quando a IA roda, não antes",
        description:
          "O app é grátis para baixar, grátis para editar legendas e flexível para usuários avançados que querem créditos ou chaves BYO.",
        href: "/pricing",
        cta: "Ver preços",
      },
    ],
    socialEyebrow: "O que as pessoas dizem",
    socialTitle: "A diferença aparece rápido.",
    socialDescription:
      "O produto funciona porque parece um fluxo completo com critério, e não mais uma camada fina sobre a saída do modelo.",
    languagesEyebrow: "Alcance de idioma",
    languagesTitle:
      "Traduza para 39 idiomas de legenda sem sair do fluxo de trabalho.",
    languagesDescription:
      "Comece pelos idiomas que todo mundo espera e depois vá para a cauda longa quando o vídeo certo ou o público certo estiver em outro lugar.",
    bottomEyebrow: "Abra uma internet maior",
    bottomTitle:
      "Baixe o Translator e comece a assistir além da sua fronteira de idioma.",
    bottomDescription:
      "Encontre vídeos que o algoritmo do YouTube nunca mostrou para você, assista no seu idioma e transforme os melhores em vídeos legendados ou dublados para guardar.",
    mockSearchQuery: "melhores entrevistas de rua japonesas sobre cultura de trabalho",
    mockSearchTag: "Pesquisar em português",
    heroBenefitTitle1: "Assista primeiro com legendas traduzidas",
    heroBenefitBody1:
      "Você entende vídeos em outros idiomas rapidamente antes de decidir se vale salvar, recortar ou localizar.",
    heroBenefitTitle2: "Vá da descoberta ao resultado em um só app",
    heroBenefitBody2:
      "Quando um vídeo importa, continue com legendas, dublagem, resumo, destaques e exportação sem trocar de ferramenta.",
    viewerEyebrow: "Veja enquanto acontece",
    viewerWindowTitle: "Legendas traduzidas ao vivo",
    viewerTitle:
      "As legendas traduzidas aparecem linha por linha enquanto o trabalho ainda está rodando.",
    viewerDescription:
      "Você pode começar a aproveitar o vídeo no seu idioma imediatamente, em vez de esperar a tradução inteira terminar.",
    viewerScreenshotCaption:
      "Cada linha traduzida aparece imediatamente no player. Você não precisa esperar o arquivo inteiro terminar.",
    actionEyebrow: "Transforme em algo útil",
    actionWindowTitle: "Clipes de destaque",
    actionTitle:
      "Puxe os melhores momentos de um vídeo longo sem fazer isso na mão.",
    actionDescription:
      "Quando você encontra algo que vale guardar, o Translator pode destacar os melhores momentos e transformar um vídeo longo em clipes curtos realmente utilizáveis.",
    actionScreenshotCaption:
      "Os candidatos a clipes aparecem com timestamps, resumos e prévias para que você mantenha só as partes que valem o compartilhamento.",
    aboutLinkLabel: "Por que criamos isso",
    sellingCardEyebrow: "Por que isso importa",
    productHuntLinkLabel: "Ver no Product Hunt",
    heroDiscoveryAlt: "Resultados de busca de recomendações de vídeo com IA",
    viewerAlt: "Assistindo a um vídeo com legendas traduzidas",
    actionAlt: "Analisando candidatos a clipes de destaque",
  },
} satisfies Record<Locale, HomeCopy>;

function getHomeSeoContext(locale: Locale) {
  const copy = homeCopy[locale];
  const languageUrls = Object.fromEntries(
    HOME_LOCALIZED_LOCALES.map((supportedLocale) => [
      supportedLocale,
      new URL(localizePathForLocale(supportedLocale, "/"), "https://translator.tools").toString(),
    ])
  ) as Record<Locale, string>;
  const canonicalUrl = languageUrls[locale];
  const ogLocale = openGraphLocaleByLocale[locale];
  const alternateOgLocale = HOME_LOCALIZED_LOCALES.filter(
    (supportedLocale) => supportedLocale !== locale
  ).map((supportedLocale) => openGraphLocaleByLocale[supportedLocale]);

  return {
    copy,
    canonicalUrl,
    ogLocale,
    alternateOgLocale,
    languageUrls,
  };
}

function getHomeStructuredData(locale: Locale) {
  const { copy, canonicalUrl } = getHomeSeoContext(locale);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Translator",
    url: canonicalUrl,
    inLanguage: [...HOME_LOCALIZED_LOCALES],
    description: copy.metadataDescription,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "macOS, Windows",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free download with optional paid AI transcription, translation, and dubbing.",
    },
  };
}

const languageLinks = [
  { labelKey: "langSpanish" as const, href: "/translate/spanish" },
  { labelKey: "langKorean" as const, href: "/translate/korean" },
  { labelKey: "langJapanese" as const, href: "/translate/japanese" },
  { labelKey: "langChinese" as const, href: "/translate/chinese" },
  { labelKey: "langFrench" as const, href: "/translate/french" },
  { labelKey: "langGerman" as const, href: "/translate/german" },
  { labelKey: "langPortuguese" as const, href: "/translate/portuguese" },
];

const otherLanguages = [
  "langArabic" as const,
  "langBengali" as const,
  "langCzech" as const,
  "langDanish" as const,
  "langDutch" as const,
  "langEnglish" as const,
  "langFinnish" as const,
  "langGreek" as const,
  "langHebrew" as const,
  "langHindi" as const,
  "langHungarian" as const,
  "langIndonesian" as const,
  "langItalian" as const,
  "langMalay" as const,
  "langNorwegian" as const,
  "langPolish" as const,
  "langRomanian" as const,
  "langRussian" as const,
  "langSwedish" as const,
  "langTagalog" as const,
  "langThai" as const,
  "langTurkish" as const,
  "langUkrainian" as const,
  "langUrdu" as const,
  "langVietnamese" as const,
];

const heroDiscoveryScreenshot = {
  src: "/screenshots/ai-video-recommendation.webp",
  width: 1600,
  height: 1017,
};
const watchSubtitleScreenshot = {
  src: "/screenshots/watch-translated-subtitles.webp",
  width: 1600,
  height: 1003,
};
const highlightClipsScreenshot = {
  src: "/screenshots/highlight-clips.webp",
  width: 1600,
  height: 710,
};

export function getHomeMetadata(locale: Locale): Metadata {
  const { copy, languageUrls, canonicalUrl, ogLocale, alternateOgLocale } =
    getHomeSeoContext(locale);

  return {
    title: copy.pageTitle,
    description: copy.metadataDescription,
    keywords: [
      "AI video translator",
      "cross language video discovery",
      "search videos in your language",
      "video subtitle translator",
      "subtitle editor",
      "video dubbing software",
      "translate YouTube video",
      "discover foreign language videos",
      "video localization workflow",
      "Translator app",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": languageUrls.en,
        ...languageUrls,
      },
    },
    openGraph: {
      title: copy.pageTitle,
      description: copy.metadataDescription,
      url: canonicalUrl,
      siteName: "Translator",
      locale: ogLocale,
      alternateLocale: alternateOgLocale,
      type: "website",
      images: [
        {
          url: "https://translator.tools/thumb.jpg",
          width: 1200,
          height: 630,
          alt: "Translator by Stage 5",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.pageTitle,
      description: copy.metadataDescription,
      images: ["https://translator.tools/thumb.jpg"],
    },
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return getHomeMetadata(await getLocale());
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = homeCopy[locale];
  const localizedHref = (href: string) => localizePathForLocale(locale, href);
  const structuredData = getHomeStructuredData(locale);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/14 blur-3xl" />
        <div className="absolute right-[-10rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-amber-400/12 blur-3xl" />
        <div className="absolute bottom-[6rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <SiteNav locale={locale} />

        <section className="py-10 md:py-16">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] xl:items-start">
            <div className="max-w-3xl xl:pt-4">
              <SectionLabel>{copy.eyebrow}</SectionLabel>
              <h1 className="mt-6 font-montserrat text-5xl font-bold tracking-tight text-white md:text-7xl">
                {copy.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
                {copy.subtitle}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.heroPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-gray-200 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/15 text-xs text-emerald-200">
                        +
                      </span>
                      <span>{point}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>

              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400">
                {copy.heroNote}{" "}
                <Link
                  href={localizedHref("/pricing")}
                  className="font-semibold text-white transition hover:text-cyan-200"
                >
                  {copy.heroPricingLink}
                </Link>{" "}
                <span className="text-gray-600">/</span>{" "}
                <Link
                  href={localizedHref("/faq")}
                  className="font-semibold text-white transition hover:text-cyan-200"
                >
                  {copy.heroFaqLink}
                </Link>
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_58%)]" />
              <div className="relative rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.36)] backdrop-blur-sm md:p-5 xl:p-6">
                <MockWindow
                  title={copy.mockSearchTag}
                  accent="from-cyan-400/20 via-cyan-300/5 to-transparent"
                >
                  <HomepageScreenshotSlot
                    src={heroDiscoveryScreenshot.src}
                    alt={copy.heroDiscoveryAlt}
                    width={heroDiscoveryScreenshot.width}
                    height={heroDiscoveryScreenshot.height}
                    loading="eager"
                    fetchPriority="high"
                    className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f]"
                    imageClassName="block w-full"
                    fallback={
                      <div className="flex min-h-[320px] items-end rounded-[28px] border border-dashed border-white/15 bg-[linear-gradient(135deg,#09111d,#05070c_65%)] p-6">
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                            {copy.mockSearchTag}
                          </div>
                          <div className="mt-3 text-lg text-white">
                            {copy.mockSearchQuery}
                          </div>
                        </div>
                      </div>
                    }
                  />
                  <p className="mt-4 text-sm leading-6 text-gray-400">
                    {copy.heroScreenshotCaption}
                  </p>
                </MockWindow>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <HeroBenefitCard
                    title={copy.heroBenefitTitle1}
                    description={copy.heroBenefitBody1}
                  />

                  <HeroBenefitCard
                    title={copy.heroBenefitTitle2}
                    description={copy.heroBenefitBody2}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.metrics.map((metric) => (
              <MetricCard key={`${metric.value}-${metric.label}`} metric={metric} />
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <MockWindow
              title={copy.viewerWindowTitle}
              accent="from-amber-300/20 via-amber-200/5 to-transparent"
            >
              <HomepageScreenshotSlot
                src={watchSubtitleScreenshot.src}
                alt={copy.viewerAlt}
                width={watchSubtitleScreenshot.width}
                height={watchSubtitleScreenshot.height}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-[#120d07]"
                imageClassName="block w-full"
                fallback={
                  <div className="flex min-h-[320px] items-end rounded-[28px] border border-dashed border-white/15 bg-[linear-gradient(135deg,#1a1209,#05070c_65%)] p-6">
                    <div className="text-lg text-white">{copy.viewerTitle}</div>
                  </div>
                }
              />
              <p className="mt-4 text-sm leading-6 text-gray-400">
                {copy.viewerScreenshotCaption}
              </p>
            </MockWindow>

            <div>
              <SectionLabel>{copy.viewerEyebrow}</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-4xl font-light text-white md:text-5xl">
                {copy.viewerTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                {copy.viewerDescription}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SectionLabel>{copy.actionEyebrow}</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-4xl font-light text-white md:text-5xl">
                {copy.actionTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                {copy.actionDescription}
              </p>
            </div>

            <MockWindow
              title={copy.actionWindowTitle}
              accent="from-emerald-300/18 via-emerald-200/5 to-transparent"
            >
              <HomepageScreenshotSlot
                src={highlightClipsScreenshot.src}
                alt={copy.actionAlt}
                width={highlightClipsScreenshot.width}
                height={highlightClipsScreenshot.height}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07110a]"
                imageClassName="block w-full"
                fallback={
                  <div className="flex min-h-[320px] items-end rounded-[28px] border border-dashed border-white/15 bg-[linear-gradient(135deg,#08140d,#05070c_65%)] p-6">
                    <div className="text-lg text-white">{copy.actionTitle}</div>
                  </div>
                }
              />
              <p className="mt-4 text-sm leading-6 text-gray-400">
                {copy.actionScreenshotCaption}
              </p>
            </MockWindow>
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionLabel>{copy.comparisonEyebrow}</SectionLabel>
              <h2 className="mt-6 max-w-2xl text-4xl font-light text-white md:text-5xl">
                {copy.comparisonTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
                {copy.comparisonDescription}
              </p>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="grid border-b border-white/10 bg-white/6 md:grid-cols-2">
                <div className="px-6 py-4 text-sm font-semibold text-gray-400">
                  {copy.typicalLabel}
                </div>
                <div className="border-t border-white/10 px-6 py-4 text-sm font-semibold text-white md:border-l md:border-t-0">
                  {copy.translatorLabel}
                </div>
              </div>
              {copy.comparisonRows.map((row) => (
                <div
                  key={`${row.typical}-${row.translator}`}
                  className="grid border-b border-white/10 last:border-b-0 md:grid-cols-2"
                >
                  <div className="px-6 py-5 text-sm leading-7 text-gray-400">
                    {row.typical}
                  </div>
                  <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-white md:border-l md:border-t-0">
                    {row.translator}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>{copy.sellingEyebrow}</SectionLabel>
              <h2 className="mt-6 max-w-3xl text-4xl font-light text-white md:text-5xl">
                {copy.sellingTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
                {copy.sellingDescription}
              </p>
            </div>
            <Link
              href={localizedHref("/about")}
              className="text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              {copy.aboutLinkLabel}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {copy.sellingPoints.map((point) => (
              <div
                key={point.title}
                className="group rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 transition hover:border-white/20 hover:bg-white/8"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gray-500">
                  {copy.sellingCardEyebrow}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  {point.description}
                </p>
                <Link
                  href={localizedHref(point.href)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-cyan-200"
                >
                  {point.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>{copy.socialEyebrow}</SectionLabel>
              <h2 className="mt-6 text-4xl font-light text-white md:text-5xl">
                {copy.socialTitle}
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
                {copy.socialDescription}
              </p>
            </div>
            <a
              href="https://www.producthunt.com/products/translator-3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              {copy.productHuntLinkLabel}
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {productHuntReviews.map((review) => (
              <blockquote
                key={`${review.author}-${review.quote}`}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <p className="text-lg leading-8 text-white">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm text-gray-400">
                  {review.author} · {review.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="py-20">
          <SectionLabel>{copy.languagesEyebrow}</SectionLabel>
          <h2 className="mt-6 max-w-4xl text-4xl font-light text-white md:text-5xl">
            {copy.languagesTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-300">
            {copy.languagesDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {languageLinks.map((language) => (
              <Link
                key={language.href}
                href={localizedHref(language.href)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/40"
              >
                {t(language.labelKey, locale)}
              </Link>
            ))}
            {otherLanguages.map((langKey) => (
              <span
                key={langKey}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
              >
                {t(langKey, locale)}
              </span>
            ))}
          </div>
        </section>

        <section id="all-downloads" className="py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>{copy.bottomEyebrow}</SectionLabel>
            <h2 className="mt-6 text-4xl font-light text-white md:text-5xl">
              {copy.bottomTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {copy.bottomDescription}
            </p>
          </div>

          <div className="mt-10">
            <AllDownloadButtons locale={locale} />
          </div>
          <p className="mt-4 text-sm text-gray-500">{t("footer", locale)}</p>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-300">
      {children}
    </span>
  );
}

function MetricCard({ metric }: { metric: HomeMetric }) {
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 backdrop-blur-sm">
      <div className="text-3xl font-semibold leading-[1.02] tracking-tight text-white md:text-[2rem]">
        {metric.value}
      </div>
      <div className="mt-4 text-[11px] font-medium uppercase tracking-[0.26em] text-gray-400">
        {metric.label}
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-400">{metric.detail}</p>
    </div>
  );
}

function MockWindow({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#05070c]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
      <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accent}`} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          </div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-500">
            {title}
          </div>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}

function HeroBenefitCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <h3 className="text-xl font-semibold leading-tight text-white md:text-[1.65rem]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-gray-300">{description}</p>
    </div>
  );
}

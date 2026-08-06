import type { Metadata } from "next";
import {
  HOME_LOCALIZED_LOCALES,
  openGraphLocaleByLocale,
} from "../../lib/locales";
import { localizePathForLocale } from "../../lib/locale-routing";
import type { Locale } from "../../lib/strings";

export type HomeMetric = {
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
      "AI Video Translator for Subtitles, Dubbing & Clips | Translator",
    metadataDescription:
      "Translate multiple videos in one desktop app with browser-style tabs: import, transcribe, review subtitles in context, dub, clip, and export. Free for macOS and Windows.",
    eyebrow: "The complete AI video translation workflow",
    title: "The video translator that finishes the job.",
    subtitle:
      "Paste a link or open a file. Translator takes you from video and speech to reviewed subtitles, dubbing, highlight clips, and finished exports—without the usual chain of disconnected tools.",
    heroPoints: [
      "Start from a video URL or a file on your computer",
      "Keep multiple videos running in their own browser-style tabs",
      "Edit every line and timestamp against the actual video",
      "Export SRT, subtitled video, dubbing, or ready-to-share clips",
    ],
    heroNote:
      "Free to install. Downloads, subtitle editing, merging, and standard exports stay free. Pay only when you run AI—or use your own API keys.",
    heroPricingLink: "See pricing",
    heroFaqLink: "Read the FAQ",
    heroScreenshotCaption:
      "Translated subtitle lines stay tied to the video timeline, so you can review, fix, and export from one place.",
    metrics: [
      {
        value: "39",
        label: "subtitle languages",
        detail:
          "Reach the language your audience speaks without rebuilding the workflow.",
      },
      {
        value: "Two-pass",
        label: "translation and review",
        detail:
          "A first translation plus a second quality pass for wording that survives context.",
      },
      {
        value: "$0",
        label: "to install and start",
        detail:
          "Video download, subtitle editing, merging, and standard exports stay free.",
      },
      {
        value: "Multi-tab",
        label: "multiple jobs, one window",
        detail:
          "Each video keeps its own player, subtitles, edits, and live job status.",
      },
    ],
    comparisonEyebrow: "Translation is only the middle",
    comparisonTitle: "Most video translators hand the hard parts back to you.",
    comparisonDescription:
      "A translated text file is not a finished video. Translator keeps the source, timing, review, rendering, dubbing, and clips connected until the work is ready to use.",
    typicalLabel: "The usual toolchain",
    translatorLabel: "One Translator workflow",
    comparisonRows: [
      {
        typical: "Upload a file, wait, and download detached text.",
        translator:
          "Keep every translated line attached to the video and the moment it belongs to.",
      },
      {
        typical: "Move to another app to repair timing and awkward wording.",
        translator:
          "Review, improve, and retime subtitles while watching the source in the same workspace.",
      },
      {
        typical:
          "Find separate tools for downloading, dubbing, clips, and rendering.",
        translator:
          "Move from a URL to subtitles, dubbing, highlight clips, SRT, or a finished video without rebuilding context.",
      },
      {
        typical:
          "Pay a subscription before you know whether the workflow fits.",
        translator:
          "Install for free, keep the core tools free, and pay only when AI actually runs.",
      },
    ],
    sellingEyebrow: "One continuous workspace",
    sellingTitle:
      "Translator replaces the glue work between five different apps.",
    sellingDescription:
      "The video, transcript, translation, timing, voice, clips, and exports stay together. You spend time deciding what is good—not moving files between services.",
    sellingPoints: [
      {
        title: "Bring in almost any video",
        description:
          "Paste a supported video URL or open a local file. The source lands directly inside the same workspace where the rest of the job happens.",
        href: "/video-downloader",
        cta: "See the downloader",
      },
      {
        title: "Translate for context, not just grammar",
        description:
          "Generate timed subtitles, run a quality review pass, and inspect every line against the people, visuals, and moment on screen.",
        href: "/translate",
        cta: "See AI translation",
      },
      {
        title: "Own the final edit",
        description:
          "Fix wording and timing, mount existing subtitle files, compare original and translated lines, then export the format you actually need.",
        href: "/subtitle-editor",
        cta: "See the editor",
      },
      {
        title: "Keep every video in its own tab",
        description:
          "Open browser-style tabs for separate videos. Running jobs continue in the background, show live progress, and signal when they finish—without losing your place in the active video.",
        href: "/#multitab",
        cta: "See the multitab workflow",
      },
    ],
    socialEyebrow: "Built like a product",
    socialTitle: "Not an AI wrapper. A video workstation.",
    socialDescription:
      "Translator is opinionated about the work around the model: files, timing, review, playback, exports, cost control, and the decisions that make an output publishable.",
    languagesEyebrow: "Language reach",
    languagesTitle: "One workflow. Thirty-nine ways to be understood.",
    languagesDescription:
      "Start with the languages people expect, then reach across the long tail when the right video or audience needs subtitles somewhere else.",
    bottomEyebrow: "One app, start to finish",
    bottomTitle: "Translate your next video from start to finish.",
    bottomDescription:
      "Find or open a video, generate and translate subtitles, review them against the footage, then export or dub the result. Multiple jobs stay organized in tabs inside one desktop app.",
    mockSearchQuery: "internet video -> reviewed English subtitles",
    mockSearchTag: "Video to subtitles workflow",
    heroBenefitTitle1: "Review translated subtitles in context",
    heroBenefitBody1:
      "You can see each translated line against the video before deciding what needs editing.",
    heroBenefitTitle2: "Move from URL to finished output",
    heroBenefitBody2:
      "When a video matters, keep going from download to transcription, translation, subtitle editing, and export without changing tools.",
    viewerEyebrow: "Multitab workspace",
    viewerWindowTitle: "Three videos, one workspace",
    viewerTitle: "One window. Every video still in motion.",
    viewerDescription:
      "Give each video its own tab, then move between translation, review, and clipping without destroying context. Background jobs keep running and the tab strip tells you when to come back.",
    viewerScreenshotCaption:
      "Every tab is a full, independent Translator workspace. Live progress rings, completion badges, and error states stay visible while you work somewhere else.",
    actionEyebrow: "More than subtitles",
    actionWindowTitle: "Highlight clips",
    actionTitle: "A long video can become the clips worth keeping.",
    actionDescription:
      "Once you find something worth keeping, Translator can help surface standout moments and turn a full video into short clips you can actually use.",
    actionScreenshotCaption:
      "Clip candidates appear with timestamps, summaries, and previews so you can keep the parts worth sharing.",
    aboutLinkLabel: "Why we built it",
    sellingCardEyebrow: "Why it matters",
    productHuntLinkLabel: "View on Product Hunt",
    heroDiscoveryAlt: "Reviewing translated subtitles inside Translator",
    viewerAlt: "Translator multitab workspace with independent video jobs",
    actionAlt: "Reviewing highlight clip candidates",
  },
  ko: {
    pageTitle: "AI 영상 번역기 - 자막 번역·더빙·클립까지 한 번에 | Translator",
    metadataDescription:
      "여러 영상을 브라우저처럼 탭에 열고 다운로드, 음성 인식, 자막 번역·검수, 더빙, 클립, 내보내기까지 한 번에. macOS·Windows용 무료 데스크톱 앱입니다.",
    eyebrow: "영상 번역의 처음부터 끝까지",
    title: "번역만 하고 끝내지 않는 영상 번역기.",
    subtitle:
      "영상 링크 하나를 붙여 넣거나 파일을 여세요. 다운로드, 음성 인식, 자막 번역과 검수, 더빙, 하이라이트 클립, 내보내기까지 Translator 하나면 됩니다.",
    heroPoints: [
      "영상 URL이나 내 컴퓨터의 파일로 바로 시작",
      "여러 영상을 탭에 열어 둔 채 번역 작업을 동시에 진행",
      "영상을 보면서 문장과 타이밍을 한 줄씩 수정",
      "SRT·자막 영상·더빙·하이라이트 클립으로 완성",
    ],
    heroNote:
      "설치와 핵심 기능은 무료입니다. 영상 다운로드, 자막 편집·병합, 기본 내보내기는 계속 무료로 쓰고 AI를 실행할 때만 결제하세요. 내 API 키를 연결해도 됩니다.",
    heroPricingLink: "요금 보기",
    heroFaqLink: "FAQ 보기",
    heroScreenshotCaption:
      "영상과 원문, 번역문, 타이밍이 한 화면에 함께 있어 번역 결과를 실제 장면에 맞춰 바로 다듬을 수 있습니다.",
    metrics: [
      {
        value: "39",
        label: "자막 번역 언어",
        detail:
          "작업 방식을 바꾸지 않고 원하는 언어의 시청자에게 닿을 수 있습니다.",
      },
      {
        value: "2단계",
        label: "번역 후 품질 검수",
        detail: "초벌 번역 뒤 한 번 더 다듬어 문맥에 어울리는 표현을 만듭니다.",
      },
      {
        value: "$0",
        label: "설치와 핵심 기능",
        detail: "영상 다운로드, 자막 편집·병합, 기본 내보내기는 무료입니다.",
      },
      {
        value: "멀티탭",
        label: "영상마다 독립된 작업 공간",
        detail:
          "각 영상의 재생 화면, 자막, 편집 내용, 진행 상태를 그대로 유지합니다.",
      },
    ],
    comparisonEyebrow: "번역은 작업의 중간일 뿐",
    comparisonTitle:
      "대부분의 영상 번역기는 어려운 마무리를 사용자에게 넘깁니다.",
    comparisonDescription:
      "번역된 텍스트 파일만으로는 완성된 영상이 되지 않습니다. Translator는 원본 영상, 타이밍, 검수, 더빙, 클립, 내보내기를 끝까지 하나의 작업으로 이어 줍니다.",
    typicalLabel: "여러 도구를 이어 쓰는 방식",
    translatorLabel: "Translator 하나로 끝내는 방식",
    comparisonRows: [
      {
        typical: "파일을 올리고 기다린 뒤, 영상과 떨어진 번역문을 받습니다.",
        translator:
          "모든 번역 문장이 실제 영상 장면과 타이밍에 연결된 채로 유지됩니다.",
      },
      {
        typical: "어색한 문장과 자막 싱크를 고치려고 또 다른 앱을 엽니다.",
        translator:
          "영상을 보면서 번역문과 타이밍을 같은 화면에서 바로 다듬습니다.",
      },
      {
        typical:
          "다운로드, 더빙, 클립 제작, 렌더링을 위해 여러 서비스를 오갑니다.",
        translator:
          "영상 URL 하나에서 시작해 자막, 더빙, 클립, SRT, 완성 영상까지 그대로 이어 갑니다.",
      },
      {
        typical: "나에게 맞는지 확인하기도 전에 구독부터 시작합니다.",
        translator:
          "무료로 설치하고 핵심 기능을 써 본 뒤, AI를 실행할 때만 비용을 냅니다.",
      },
    ],
    sellingEyebrow: "끊기지 않는 하나의 작업 공간",
    sellingTitle: "다섯 개의 앱을 이어 붙이던 일을 Translator 하나로 끝내세요.",
    sellingDescription:
      "영상, 원문, 번역문, 타이밍, 음성, 클립, 내보내기 설정이 한곳에 남아 있습니다. 파일을 옮기는 대신 결과물의 품질에 집중할 수 있습니다.",
    sellingPoints: [
      {
        title: "어떤 영상이든 바로 가져오세요",
        description:
          "지원되는 영상 URL을 붙여 넣거나 내 컴퓨터의 파일을 여세요. 가져온 영상은 이후 모든 작업이 이루어지는 같은 화면에 남습니다.",
        href: "/video-downloader",
        cta: "다운로더 보기",
      },
      {
        title: "문법보다 문맥에 맞게 번역하세요",
        description:
          "타이밍이 잡힌 자막을 만들고 품질 검수를 거친 뒤, 인물과 장면을 직접 보면서 문장마다 결과를 확인합니다.",
        href: "/translate",
        cta: "AI 번역 보기",
      },
      {
        title: "마지막 편집권은 내가 가집니다",
        description:
          "원문과 번역문을 함께 보고 표현과 타이밍을 수정한 다음, 필요한 형식으로 SRT나 완성 영상을 내보냅니다.",
        href: "/subtitle-editor",
        cta: "자막 편집기 보기",
      },
      {
        title: "영상마다 탭을 하나씩 열어 두세요",
        description:
          "여러 영상을 브라우저처럼 탭에 나눠 여세요. 다른 영상을 살피는 동안에도 실행 중인 작업은 계속되고, 진행률과 완료 여부가 탭에 바로 표시됩니다.",
        href: "/#multitab",
        cta: "멀티탭 작업 방식 보기",
      },
    ],
    socialEyebrow: "처음부터 제품답게",
    socialTitle: "AI를 감싼 껍데기가 아니라, 실제 영상 작업 도구입니다.",
    socialDescription:
      "Translator는 모델 호출 전후의 일을 제대로 설계했습니다. 파일 관리, 자막 타이밍, 영상 재생, 품질 검수, 내보내기, 비용 선택까지 실제 작업에 필요한 흐름을 놓치지 않습니다.",
    languagesEyebrow: "언어 확장성",
    languagesTitle: "하나의 작업 방식으로 39개 언어에 닿으세요.",
    languagesDescription:
      "많이 찾는 언어부터 시작하고, 필요한 시청자가 다른 언어권에 있을 때 더 멀리 확장하세요.",
    bottomEyebrow: "하나의 앱에서 끝까지",
    bottomTitle: "다음 영상을 처음부터 끝까지 번역하세요.",
    bottomDescription:
      "영상을 찾거나 불러오고, 자막을 만들고 번역한 뒤, 영상과 함께 검토·편집하고 내보내거나 더빙하세요. 여러 작업도 하나의 데스크톱 앱에서 탭으로 관리할 수 있습니다.",
    mockSearchQuery: "인터넷 영상 -> 검토된 한국어 자막",
    mockSearchTag: "영상에서 자막까지",
    heroBenefitTitle1: "영상과 번역문을 함께 봅니다",
    heroBenefitBody1:
      "각 번역 줄을 실제 영상과 함께 보면서 무엇을 고쳐야 할지 판단할 수 있습니다.",
    heroBenefitTitle2: "URL 하나에서 완성본까지 갑니다",
    heroBenefitBody2:
      "가치 있는 영상이라면 다운로드, 전사, 번역, 자막 편집, 내보내기까지 같은 흐름에서 바로 이어갈 수 있습니다.",
    viewerEyebrow: "멀티탭 작업 공간",
    viewerWindowTitle: "영상 세 개, 작업 공간 하나",
    viewerTitle: "영상마다 탭 하나. 작업은 끊기지 않습니다.",
    viewerDescription:
      "각 영상을 별도 탭에 열어 두고 번역, 검수, 클립 작업 사이를 자유롭게 오가세요. 다른 탭을 보는 동안에도 작업은 계속되고, 언제 돌아가야 할지는 탭에서 바로 알 수 있습니다.",
    viewerScreenshotCaption:
      "탭마다 재생 화면, 자막, 편집 상태를 그대로 유지합니다. 진행률, 완료, 오류 표시가 탭에 남아 있어 다른 영상을 작업하면서도 놓치지 않습니다.",
    actionEyebrow: "자막 그 이상",
    actionWindowTitle: "하이라이트 클립",
    actionTitle: "긴 영상에서 남길 장면까지 바로 찾아냅니다.",
    actionDescription:
      "가치 있는 영상을 찾았다면, Translator가 눈에 띄는 구간을 잡아 주고 긴 영상을 짧고 활용 가능한 클립으로 바꾸는 흐름까지 이어줍니다.",
    actionScreenshotCaption:
      "타임코드, 요약, 클립 미리보기가 함께 보여서 공유할 만한 장면만 빠르게 고를 수 있습니다.",
    aboutLinkLabel: "제품 배경 보기",
    sellingCardEyebrow: "핵심 장점",
    productHuntLinkLabel: "Product Hunt 보기",
    heroDiscoveryAlt: "Translator 안에서 번역 자막을 검토하는 화면",
    viewerAlt: "여러 영상 작업을 독립된 탭으로 연 Translator 화면",
    actionAlt: "하이라이트 클립 후보를 검토하는 화면",
  },
} as const;

export const homeCopy = {
  ...baseHomeCopy,
  es: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Subtítulos traducidos con IA para videos de internet | App de escritorio gratis",
    metadataDescription:
      "Descarga o importa un video de internet, genera subtítulos traducidos de alta calidad, revísalos y edítalos, y exporta un video subtitulado o un SRT limpio desde una app de escritorio.",
    eyebrow: "Subtítulos traducidos con IA, del video al export",
    title:
      "Convierte videos de internet en subtítulos traducidos listos para usar.",
    subtitle:
      "Pega una URL de video o importa un archivo. Translator descarga el video, transcribe el audio, traduce los subtítulos, te deja revisar cada línea en contexto y exporta un SRT limpio o un video subtitulado.",
    heroPoints: [
      "Descarga o importa videos sin salir de la app",
      "Genera subtítulos traducidos con tiempos listos para revisar",
      "Edita texto y tiempos mientras ves el video",
      "Exporta archivos SRT o videos subtitulados terminados",
    ],
    heroNote:
      "Descarga gratis. Descargar y editar subtítulos es gratis. Las funciones con IA usan créditos solo cuando las ejecutas.",
    heroPricingLink: "Ver precios",
    heroFaqLink: "Leer el FAQ",
    heroScreenshotCaption:
      "Las líneas traducidas se mantienen unidas a la línea de tiempo del video, para que puedas revisar, corregir y exportar desde un solo lugar.",
    metrics: [
      {
        value: "39",
        label: "idiomas de subtítulos",
        detail:
          "Traduce subtítulos para las audiencias que tus videos necesitan.",
      },
      {
        value: "Revisa primero",
        label: "flujo editable de subtítulos",
        detail:
          "Comprueba las líneas traducidas en contexto antes de publicar o compartir.",
      },
      {
        value: "Una app",
        label: "no cinco herramientas desconectadas",
        detail:
          "Descarga, transcribe, traduce, edita y exporta en un solo lugar.",
      },
      {
        value: "Resultado final",
        label: "no solo texto del modelo",
        detail:
          "Termina con un SRT o un video subtitulado que de verdad puedes usar.",
      },
    ],
    comparisonEyebrow: "Lo que otras herramientas no resuelven",
    comparisonTitle:
      "La mayoría de los traductores con IA se detienen antes de que los subtítulos sean utilizables.",
    comparisonDescription:
      "Una traducción aproximada no basta cuando todavía faltan tiempos, redacción, revisión y exportación. Translator mantiene todo el trabajo de subtitulado en un solo flujo.",
    typicalLabel: "Traductor IA típico",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical:
          "Devuelve texto traducido o un archivo de subtítulos sin pulir.",
        translator:
          "Mantiene los subtítulos traducidos conectados al video para revisar cada línea en contexto.",
      },
      {
        typical: "Rompe los tiempos o deja la revisión para otra herramienta.",
        translator:
          "Te deja editar redacción y tiempos antes de convertir los subtítulos en salida final.",
      },
      {
        typical:
          "Necesita herramientas aparte para descargar, editar y exportar.",
        translator:
          "Mantiene video, transcripción, traducción, editor y exportación en un solo espacio de escritorio.",
      },
      {
        typical: "Se siente como una utilidad.",
        translator:
          "Se siente como un flujo de producción para crear subtítulos que sí publicarías.",
      },
    ],
    sellingEyebrow: "Lo que realmente obtienes",
    sellingTitle:
      "Descarga, traduce subtítulos, revisa y exporta en una sola app.",
    sellingDescription:
      "Translator convierte videos de internet en subtítulos traducidos revisados y resultados subtitulados terminados sin combinar descargador, transcriptor, traductor, editor y exportador.",
    sellingPoints: [
      {
        title: "Empieza desde una URL de video o un archivo local",
        description:
          "Pega una URL de video compatible o importa un video de tu máquina, y sigue con el trabajo de subtítulos en la misma app.",
        href: "/video-downloader",
        cta: "Ver el descargador",
      },
      {
        title: "Genera subtítulos traducidos que puedes revisar",
        description:
          "Crea subtítulos, tradúcelos y revisa el resultado contra el video en vez de confiar en texto separado del contexto.",
        href: "/translate",
        cta: "Ver traducción IA",
      },
      {
        title: "Corrige los subtítulos antes de exportar",
        description:
          "Ajusta redacción, tiempos y archivos antes de exportar SRT o incrustar subtítulos en el video final.",
        href: "/subtitle-editor",
        cta: "Ver el editor",
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
      "Empieza con los idiomas que la gente espera y llega a la larga cola cuando el video o la audiencia necesita subtítulos en otro lugar.",
    bottomEyebrow: "Una sola app, de principio a fin",
    bottomTitle: "Traduce tu próximo video de principio a fin.",
    bottomDescription:
      "Encuentra o abre un video, genera y traduce subtítulos, revísalos junto al video y exporta o dobla el resultado. Organiza varios trabajos en pestañas dentro de una sola app de escritorio.",
    mockSearchQuery: "video de internet -> subtítulos en español revisados",
    mockSearchTag: "Flujo de video a subtítulos",
    heroBenefitTitle1: "Revisa subtítulos traducidos en contexto",
    heroBenefitBody1:
      "Puedes ver cada línea traducida contra el video antes de decidir qué necesita edición.",
    heroBenefitTitle2: "Pasa de URL a resultado final",
    heroBenefitBody2:
      "Cuando un video importa, sigue desde descarga hasta transcripción, traducción, edición de subtítulos y exportación sin cambiar de herramienta.",
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
    actionTitle:
      "Saca los mejores momentos de un video largo sin hacerlo a mano.",
    actionDescription:
      "Cuando encuentras algo que vale la pena guardar, Translator puede señalar los mejores momentos y convertir un video completo en clips cortos que realmente puedes usar.",
    actionScreenshotCaption:
      "Los clips candidatos aparecen con marcas de tiempo, resúmenes y vistas previas para que conserves solo las partes que vale la pena compartir.",
    aboutLinkLabel: "Por qué lo construimos",
    sellingCardEyebrow: "Por qué importa",
    productHuntLinkLabel: "Ver en Product Hunt",
    heroDiscoveryAlt: "Revisión de subtítulos traducidos dentro de Translator",
    viewerAlt: "Revisando un video con subtítulos traducidos",
    actionAlt: "Revisando candidatos de clips destacados",
  },
  ja: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - インターネット動画にAI翻訳字幕を作るデスクトップアプリ | 無料ダウンロード",
    metadataDescription:
      "インターネット動画をダウンロードまたは読み込み、高品質な翻訳字幕を生成し、確認と編集を行って、字幕付き動画やきれいなSRTとして書き出せます。",
    eyebrow: "動画から書き出しまでつながるAI翻訳字幕",
    title: "インターネット動画を、使える翻訳字幕に変えます。",
    subtitle:
      "動画URLを貼り付けるか、ファイルを読み込んでください。Translator が動画を取り込み、音声を文字起こしし、字幕を翻訳し、各行を文脈の中で確認して、SRTや字幕付き動画として書き出せます。",
    heroPoints: [
      "アプリ内で動画をダウンロードまたは読み込み",
      "確認しやすいタイミング付きの翻訳字幕を生成",
      "動画を見ながら表現とタイミングを編集",
      "SRTファイルや字幕付き動画として書き出し",
    ],
    heroNote:
      "無料でダウンロードできます。ダウンロードと字幕編集は無料。AI 機能は実行した分だけクレジットを使います。",
    heroPricingLink: "料金を見る",
    heroFaqLink: "FAQ を読む",
    heroScreenshotCaption:
      "翻訳字幕は動画のタイムラインに結びついたままなので、1か所で確認、修正、書き出しまで進められます。",
    metrics: [
      {
        value: "39",
        label: "字幕対応言語",
        detail: "必要な視聴者に合わせて字幕を複数言語へ翻訳できます。",
      },
      {
        value: "まず確認",
        label: "編集できる字幕ワークフロー",
        detail: "公開や共有の前に、翻訳行を動画の文脈で確認できます。",
      },
      {
        value: "1つのアプリ",
        label: "分断された5つのツールではない",
        detail:
          "ダウンロード、文字起こし、翻訳、編集、書き出しを1か所で行えます。",
      },
      {
        value: "完成した出力",
        label: "モデルのテキストだけではない",
        detail: "実際に使えるSRTや字幕付き動画として終えられます。",
      },
    ],
    comparisonEyebrow: "他のツールが見落とすこと",
    comparisonTitle:
      "ほとんどのAI動画翻訳ツールは、字幕が使える状態になる前に止まります。",
    comparisonDescription:
      "大まかな翻訳だけでは足りません。タイミング、表現、確認、書き出しまで終えて初めて字幕として使えます。Translator はその作業全体を1つの流れにします。",
    typicalLabel: "一般的な AI 翻訳ツール",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "翻訳テキストや未調整の字幕ファイルだけを返す。",
        translator:
          "翻訳字幕を動画につないだまま、各行を文脈の中で確認できます。",
      },
      {
        typical: "タイミングが崩れたり、確認を別ツール任せにしたりする。",
        translator: "最終出力にする前に、表現とタイミングを編集できます。",
      },
      {
        typical: "ダウンロード、編集、書き出しに別ツールが必要。",
        translator:
          "動画、文字起こし、翻訳、字幕編集、書き出しを1つのデスクトップ空間にまとめます。",
      },
      {
        typical: "単なるユーティリティに感じる。",
        translator:
          "実際に公開できる字幕を作るための制作ワークフローに感じられます。",
      },
    ],
    sellingEyebrow: "実際にできること",
    sellingTitle: "ダウンロード、字幕翻訳、確認、書き出しを1つのアプリで。",
    sellingDescription:
      "Translator は、インターネット動画を確認済みの翻訳字幕と字幕付き出力に変えます。ダウンローダー、文字起こし、翻訳、字幕編集、書き出しツールをつなぎ合わせる必要はありません。",
    sellingPoints: [
      {
        title: "動画URLまたはローカルファイルから開始",
        description:
          "対応するインターネット動画URLを貼り付けるか、手元の動画を読み込み、そのまま同じアプリで字幕作業を続けられます。",
        href: "/video-downloader",
        cta: "ダウンローダーを見る",
      },
      {
        title: "確認できる翻訳字幕を生成",
        description:
          "字幕を作成して翻訳し、動画から切り離されたモデル出力ではなく、実際の動画の中で結果を確認できます。",
        href: "/translate",
        cta: "AI翻訳を見る",
      },
      {
        title: "書き出し前に字幕を整える",
        description:
          "SRTとして書き出したり、動画に字幕を焼き込んだりする前に、表現、タイミング、字幕ファイルを調整できます。",
        href: "/subtitle-editor",
        cta: "エディターを見る",
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
      "まずは期待される主要言語から始め、必要な視聴者に合わせて長い尾まで広げられます。",
    bottomEyebrow: "ひとつのアプリで最後まで",
    bottomTitle: "次の動画を、最初から最後まで翻訳。",
    bottomDescription:
      "動画を探すか読み込み、字幕を作成・翻訳し、映像を見ながら確認・編集して、書き出しや吹き替えまで。複数の作業もタブで並行して管理できます。",
    mockSearchQuery: "インターネット動画 -> 確認済み日本語字幕",
    mockSearchTag: "動画から字幕まで",
    heroBenefitTitle1: "翻訳字幕を文脈の中で確認",
    heroBenefitBody1:
      "各翻訳行を動画と照らし合わせ、どこを直すべきか判断できます。",
    heroBenefitTitle2: "URLから完成出力まで",
    heroBenefitBody2:
      "価値のある動画なら、ダウンロード、文字起こし、翻訳、字幕編集、書き出しまでそのまま進めます。",
    viewerEyebrow: "その場で見始める",
    viewerWindowTitle: "ライブ翻訳字幕",
    viewerTitle: "ジョブがまだ進行中でも、翻訳字幕が1行ずつ表示されます。",
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
    heroDiscoveryAlt: "Translatorで翻訳字幕を確認している画面",
    viewerAlt: "翻訳字幕付きで動画を確認している画面",
    actionAlt: "ハイライトクリップ候補を確認している画面",
  },
  zh: {
    ...baseHomeCopy.en,
    pageTitle: "Translator - 为互联网视频生成 AI 翻译字幕 | 免费桌面应用",
    metadataDescription:
      "下载或导入互联网视频，生成高质量翻译字幕，在视频中审核和编辑，然后导出成品字幕视频或干净的 SRT。",
    eyebrow: "从视频到导出的 AI 翻译字幕",
    title: "把互联网视频变成可直接使用的翻译字幕。",
    subtitle:
      "粘贴视频 URL 或导入文件。Translator 会下载视频、转写音频、翻译字幕，让你在上下文中逐行审核，并导出干净的 SRT 或带字幕的视频。",
    heroPoints: [
      "在应用内下载或导入视频",
      "生成带可审核时间轴的翻译字幕",
      "一边看视频一边修改措辞和时间",
      "导出 SRT 文件或成品字幕视频",
    ],
    heroNote: "免费下载。下载和字幕编辑免费，AI 功能只在你实际运行时消耗积分。",
    heroPricingLink: "查看价格",
    heroFaqLink: "查看 FAQ",
    heroScreenshotCaption:
      "翻译字幕会保持在视频时间轴上，所以你可以在一个地方审核、修正并导出。",
    metrics: [
      {
        value: "39",
        label: "字幕语言",
        detail: "把字幕翻译成你的视频需要触达的语言。",
      },
      {
        value: "先审核",
        label: "可编辑的字幕流程",
        detail: "在发布或分享之前，在上下文里检查翻译后的每一行。",
      },
      {
        value: "一款应用",
        label: "不是五个分散工具",
        detail: "下载、转写、翻译、编辑和导出都在同一个地方完成。",
      },
      {
        value: "成品输出",
        label: "不只是模型文本",
        detail: "最终得到真正可用的 SRT 或带字幕视频。",
      },
    ],
    comparisonEyebrow: "其他工具忽略了什么",
    comparisonTitle: "大多数 AI 视频翻译器在字幕真正可用之前就停下了。",
    comparisonDescription:
      "粗略翻译还不够。时间轴、措辞、审核和导出都完成之后，字幕才真正可用。Translator 把整个字幕工作流放在一起。",
    typicalLabel: "常见 AI 翻译器",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "只返回翻译文本或粗糙字幕文件。",
        translator: "让翻译字幕始终连接在视频上，逐行在上下文中审核。",
      },
      {
        typical: "时间轴容易被破坏，审核还要交给别的工具。",
        translator: "在字幕成为最终输出前，你可以修改措辞和时间。",
      },
      {
        typical: "下载、编辑和导出都要分开处理。",
        translator: "把视频、转写、翻译、字幕编辑和导出放进同一个桌面工作区。",
      },
      {
        typical: "更像一个小工具。",
        translator: "更像一条用来制作可发布字幕的生产流程。",
      },
    ],
    sellingEyebrow: "你真正得到的是什么",
    sellingTitle: "下载、翻译字幕、审核并导出，全在一款应用里。",
    sellingDescription:
      "Translator 把互联网视频变成经过审核的翻译字幕和成品字幕视频，不需要在下载器、转写工具、翻译器、字幕编辑器和导出工具之间来回拼接。",
    sellingPoints: [
      {
        title: "从视频 URL 或本地文件开始",
        description:
          "粘贴支持的互联网视频 URL，或导入本机视频，然后在同一款应用中继续字幕工作。",
        href: "/video-downloader",
        cta: "查看下载器",
      },
      {
        title: "生成可以审核的翻译字幕",
        description:
          "创建字幕、翻译字幕，并在视频中检查结果，而不是只看脱离上下文的模型输出。",
        href: "/translate",
        cta: "查看 AI 翻译",
      },
      {
        title: "导出前先修好字幕",
        description:
          "在导出 SRT 或把字幕烧进成品视频之前，先调整措辞、时间和字幕文件。",
        href: "/subtitle-editor",
        cta: "查看编辑器",
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
      "先覆盖大家最常用的语言，再在视频或受众需要其他字幕时延伸到长尾语言。",
    bottomEyebrow: "一个应用，从开始到完成",
    bottomTitle: "在 Translator 里完成下一段视频的全部翻译。",
    bottomDescription:
      "查找或导入视频，生成并翻译字幕，对照画面审核编辑，再导出或配音。多个任务也能在同一个桌面应用中通过标签页并行管理。",
    mockSearchQuery: "互联网视频 -> 已审核中文字幕",
    mockSearchTag: "视频到字幕流程",
    heroBenefitTitle1: "在上下文中审核翻译字幕",
    heroBenefitBody1: "你可以把每一行翻译对照视频查看，再判断哪里需要修改。",
    heroBenefitTitle2: "从 URL 到最终输出",
    heroBenefitBody2:
      "当视频真的有价值时，你可以一路完成下载、转写、翻译、字幕编辑和导出，不用换工具。",
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
    heroDiscoveryAlt: "在 Translator 中审核翻译字幕",
    viewerAlt: "正在查看带翻译字幕的视频",
    actionAlt: "正在查看高光片段候选",
  },
  fr: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Sous-titres traduits par IA pour vidéos internet | App desktop gratuite",
    metadataDescription:
      "Téléchargez ou importez une vidéo internet, générez des sous-titres traduits de haute qualité, relisez-les et éditez-les, puis exportez une vidéo sous-titrée ou un SRT propre.",
    eyebrow: "Sous-titres traduits par IA, de la vidéo à l’export",
    title:
      "Transformez des vidéos internet en sous-titres traduits prêts à utiliser.",
    subtitle:
      "Collez une URL vidéo ou importez un fichier. Translator télécharge la vidéo, transcrit l’audio, traduit les sous-titres, vous laisse relire chaque ligne en contexte et exporte un SRT propre ou une vidéo sous-titrée.",
    heroPoints: [
      "Téléchargez ou importez des vidéos sans quitter l’app",
      "Générez des sous-titres traduits avec un timing prêt à relire",
      "Éditez le texte et le timing pendant que vous regardez la vidéo",
      "Exportez des fichiers SRT ou des vidéos sous-titrées terminées",
    ],
    heroNote:
      "Téléchargement gratuit. Le téléchargement et l’édition de sous-titres sont gratuits. Les fonctions IA n’utilisent des crédits que lorsque vous les lancez.",
    heroPricingLink: "Voir les tarifs",
    heroFaqLink: "Lire la FAQ",
    heroScreenshotCaption:
      "Les lignes traduites restent liées à la timeline vidéo, pour relire, corriger et exporter au même endroit.",
    metrics: [
      {
        value: "39",
        label: "langues de sous-titres",
        detail:
          "Traduisez les sous-titres pour les audiences que vos vidéos doivent atteindre.",
      },
      {
        value: "Relire d’abord",
        label: "workflow de sous-titres éditable",
        detail:
          "Vérifiez les lignes traduites en contexte avant de publier ou partager.",
      },
      {
        value: "Une seule app",
        label: "pas cinq outils séparés",
        detail:
          "Téléchargez, transcrivez, traduisez, éditez et exportez au même endroit.",
      },
      {
        value: "Résultat final",
        label: "pas seulement du texte de modèle",
        detail:
          "Repartez avec un SRT ou une vidéo sous-titrée réellement utilisable.",
      },
    ],
    comparisonEyebrow: "Ce que les autres outils ratent",
    comparisonTitle:
      "La plupart des traducteurs vidéo IA s’arrêtent avant que les sous-titres soient utilisables.",
    comparisonDescription:
      "Une traduction approximative ne suffit pas quand il reste le timing, la formulation, la relecture et l’export. Translator garde tout le travail de sous-titrage dans un seul workflow.",
    typicalLabel: "Traducteur IA classique",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Rend du texte traduit ou un fichier de sous-titres brut.",
        translator:
          "Garde les sous-titres traduits connectés à la vidéo pour relire chaque ligne en contexte.",
      },
      {
        typical: "Casse le timing ou laisse la relecture à un autre outil.",
        translator:
          "Vous permet d’éditer formulation et timing avant d’en faire une sortie finale.",
      },
      {
        typical:
          "Nécessite d’autres outils pour télécharger, éditer et exporter.",
        translator:
          "Garde vidéo, transcription, traduction, éditeur et export dans un seul espace desktop.",
      },
      {
        typical: "Donne l’impression d’un simple utilitaire.",
        translator:
          "Ressemble à un workflow de production pour créer des sous-titres que vous pourriez publier.",
      },
    ],
    sellingEyebrow: "Ce que vous obtenez vraiment",
    sellingTitle:
      "Téléchargez, traduisez les sous-titres, relisez et exportez dans une seule app.",
    sellingDescription:
      "Translator transforme des vidéos internet en sous-titres traduits relus et en sorties sous-titrées terminées, sans assembler téléchargeur, transcription, traducteur, éditeur et export.",
    sellingPoints: [
      {
        title: "Commencez par une URL vidéo ou un fichier local",
        description:
          "Collez une URL vidéo prise en charge ou importez une vidéo de votre machine, puis poursuivez le travail de sous-titrage dans la même app.",
        href: "/video-downloader",
        cta: "Voir le téléchargeur",
      },
      {
        title: "Générez des sous-titres traduits que vous pouvez relire",
        description:
          "Créez des sous-titres, traduisez-les et vérifiez le résultat face à la vidéo au lieu de faire confiance à une sortie détachée du contexte.",
        href: "/translate",
        cta: "Voir la traduction IA",
      },
      {
        title: "Corrigez les sous-titres avant l’export",
        description:
          "Ajustez formulation, timing et fichiers de sous-titres avant d’exporter en SRT ou d’incruster les sous-titres dans la vidéo finale.",
        href: "/subtitle-editor",
        cta: "Voir l’éditeur",
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
      "Commencez par les langues les plus attendues, puis allez vers la longue traîne quand une vidéo ou une audience a besoin de sous-titres ailleurs.",
    bottomEyebrow: "Une seule app, du début à la fin",
    bottomTitle: "Traduisez votre prochaine vidéo du début à la fin.",
    bottomDescription:
      "Recherchez ou ouvrez une vidéo, générez et traduisez les sous-titres, relisez-les face à l’image, puis exportez ou doublez le résultat. Plusieurs tâches restent organisées dans des onglets, au sein d’une seule application.",
    mockSearchQuery: "vidéo internet -> sous-titres français relus",
    mockSearchTag: "Workflow vidéo vers sous-titres",
    heroBenefitTitle1: "Relisez les sous-titres traduits en contexte",
    heroBenefitBody1:
      "Vous pouvez voir chaque ligne traduite face à la vidéo avant de décider ce qu’il faut éditer.",
    heroBenefitTitle2: "Passez de l’URL au résultat final",
    heroBenefitBody2:
      "Quand une vidéo compte, continuez du téléchargement à la transcription, traduction, édition des sous-titres et export sans changer d’outil.",
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
    heroDiscoveryAlt: "Relecture de sous-titres traduits dans Translator",
    viewerAlt: "Visionnage d’une vidéo avec sous-titres traduits",
    actionAlt: "Examen de suggestions de clips marquants",
  },
  de: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - KI-übersetzte Untertitel für Internetvideos | Kostenlose Desktop-App",
    metadataDescription:
      "Lade ein Internetvideo herunter oder importiere es, generiere hochwertige übersetzte Untertitel, prüfe und bearbeite sie und exportiere ein untertiteltes Video oder eine saubere SRT-Datei.",
    eyebrow: "KI-übersetzte Untertitel vom Video bis zum Export",
    title: "Verwandle Internetvideos in fertige übersetzte Untertitel.",
    subtitle:
      "Füge eine Video-URL ein oder importiere eine Datei. Translator lädt das Video, transkribiert den Ton, übersetzt die Untertitel, lässt dich jede Zeile im Kontext prüfen und exportiert eine saubere SRT-Datei oder ein untertiteltes Video.",
    heroPoints: [
      "Videos in der App herunterladen oder importieren",
      "Übersetzte Untertitel mit prüfbarem Timing erzeugen",
      "Text und Timing beim Ansehen bearbeiten",
      "SRT-Dateien oder fertige untertitelte Videos exportieren",
    ],
    heroNote:
      "Kostenloser Download. Download und Untertitelbearbeitung sind kostenlos. KI-Funktionen verbrauchen nur Credits, wenn du sie startest.",
    heroPricingLink: "Preise ansehen",
    heroFaqLink: "FAQ lesen",
    heroScreenshotCaption:
      "Übersetzte Untertitel bleiben mit der Video-Timeline verbunden, damit du sie an einem Ort prüfen, korrigieren und exportieren kannst.",
    metrics: [
      {
        value: "39",
        label: "Untertitelsprachen",
        detail:
          "Übersetze Untertitel für die Zielgruppen, die deine Videos erreichen sollen.",
      },
      {
        value: "Erst prüfen",
        label: "editierbarer Untertitel-Workflow",
        detail:
          "Prüfe übersetzte Zeilen im Kontext, bevor du veröffentlichst oder teilst.",
      },
      {
        value: "Eine App",
        label: "nicht fünf getrennte Tools",
        detail:
          "Download, Transkription, Übersetzung, Bearbeitung und Export an einem Ort.",
      },
      {
        value: "Fertige Ausgabe",
        label: "nicht nur Modelltext",
        detail:
          "Am Ende steht eine SRT-Datei oder ein untertiteltes Video, das du wirklich nutzen kannst.",
      },
    ],
    comparisonEyebrow: "Was andere Tools übersehen",
    comparisonTitle:
      "Die meisten KI-Videoübersetzer hören auf, bevor die Untertitel wirklich nutzbar sind.",
    comparisonDescription:
      "Eine grobe Übersetzung reicht nicht, wenn Timing, Formulierung, Prüfung und Export noch fehlen. Translator hält die ganze Untertitelarbeit in einem Workflow.",
    typicalLabel: "Typischer KI-Übersetzer",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Gibt übersetzten Text oder eine rohe Untertiteldatei zurück.",
        translator:
          "Hält übersetzte Untertitel mit dem Video verbunden, damit du jede Zeile im Kontext prüfen kannst.",
      },
      {
        typical:
          "Zerstört Timing oder verschiebt die Prüfung in ein anderes Tool.",
        translator:
          "Lässt dich Formulierung und Timing bearbeiten, bevor daraus die finale Ausgabe wird.",
      },
      {
        typical: "Braucht separate Tools für Download, Bearbeitung und Export.",
        translator:
          "Hält Video, Transkription, Übersetzung, Editor und Export in einem Desktop-Arbeitsraum.",
      },
      {
        typical: "Fühlt sich wie ein Hilfsprogramm an.",
        translator:
          "Fühlt sich wie ein Produktionsworkflow für Untertitel an, die du wirklich veröffentlichen würdest.",
      },
    ],
    sellingEyebrow: "Was du wirklich bekommst",
    sellingTitle:
      "Herunterladen, Untertitel übersetzen, prüfen und exportieren in einer App.",
    sellingDescription:
      "Translator macht aus Internetvideos geprüfte übersetzte Untertitel und fertige untertitelte Ausgaben, ohne Downloader, Transkription, Übersetzer, Editor und Exporttool zusammenzustückeln.",
    sellingPoints: [
      {
        title: "Starte mit einer Video-URL oder lokalen Datei",
        description:
          "Füge eine unterstützte Internetvideo-URL ein oder importiere ein Video von deinem Rechner und führe die Untertitelarbeit in derselben App fort.",
        href: "/video-downloader",
        cta: "Downloader ansehen",
      },
      {
        title: "Erzeuge übersetzte Untertitel, die du prüfen kannst",
        description:
          "Erstelle Untertitel, übersetze sie und prüfe das Ergebnis am Video statt an losgelöstem Modelltext.",
        href: "/translate",
        cta: "KI-Übersetzung ansehen",
      },
      {
        title: "Korrigiere Untertitel vor dem Export",
        description:
          "Passe Formulierungen, Timing und Untertiteldateien an, bevor du SRT exportierst oder Untertitel ins fertige Video einbrennst.",
        href: "/subtitle-editor",
        cta: "Editor ansehen",
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
      "Starte mit den erwarteten Sprachen und geh dann in den Long Tail, wenn Video oder Publikum andere Untertitel brauchen.",
    bottomEyebrow: "Eine App, vom Anfang bis zum Export",
    bottomTitle: "Übersetze dein nächstes Video von Anfang bis Ende.",
    bottomDescription:
      "Finde oder öffne ein Video, erstelle und übersetze Untertitel, prüfe und bearbeite sie direkt am Bild und exportiere oder vertone das Ergebnis. Mehrere Aufgaben bleiben in Tabs in einer Desktop-App organisiert.",
    mockSearchQuery: "Internetvideo -> geprüfte deutsche Untertitel",
    mockSearchTag: "Video-zu-Untertitel-Workflow",
    heroBenefitTitle1: "Übersetzte Untertitel im Kontext prüfen",
    heroBenefitBody1:
      "Du siehst jede übersetzte Zeile am Video und entscheidest erst dann, was bearbeitet werden muss.",
    heroBenefitTitle2: "Von der URL zur fertigen Ausgabe",
    heroBenefitBody2:
      "Wenn ein Video wichtig wird, geh vom Download über Transkription, Übersetzung, Untertitelbearbeitung und Export weiter, ohne das Tool zu wechseln.",
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
    heroDiscoveryAlt: "Prüfung übersetzter Untertitel in Translator",
    viewerAlt: "Ein Video mit übersetzten Untertiteln ansehen",
    actionAlt: "Kandidaten für Highlight-Clips prüfen",
  },
  pt: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Legendas traduzidas por IA para vídeos da internet | App desktop grátis",
    metadataDescription:
      "Baixe ou importe um vídeo da internet, gere legendas traduzidas de alta qualidade, revise e edite, depois exporte um vídeo legendado ou um SRT limpo em um app desktop.",
    eyebrow: "Legendas traduzidas por IA, do vídeo ao export",
    title:
      "Transforme vídeos da internet em legendas traduzidas prontas para usar.",
    subtitle:
      "Cole uma URL de vídeo ou importe um arquivo. O Translator baixa o vídeo, transcreve o áudio, traduz as legendas, permite revisar cada linha no contexto e exporta um SRT limpo ou um vídeo legendado.",
    heroPoints: [
      "Baixe ou importe vídeos sem sair do app",
      "Gere legendas traduzidas com timing pronto para revisar",
      "Edite texto e timing enquanto assiste ao vídeo",
      "Exporte arquivos SRT ou vídeos legendados finalizados",
    ],
    heroNote:
      "Download grátis. Download de vídeos e edição de legendas são gratuitos. Os recursos de IA usam créditos apenas quando você roda a ação.",
    heroPricingLink: "Ver preços",
    heroFaqLink: "Ler o FAQ",
    heroScreenshotCaption:
      "As linhas traduzidas ficam ligadas à timeline do vídeo, então você revisa, corrige e exporta em um só lugar.",
    metrics: [
      {
        value: "39",
        label: "idiomas de legenda",
        detail:
          "Traduza legendas para os públicos que seus vídeos precisam alcançar.",
      },
      {
        value: "Revise primeiro",
        label: "fluxo editável de legendas",
        detail:
          "Confira as linhas traduzidas no contexto antes de publicar ou compartilhar.",
      },
      {
        value: "Um app",
        label: "não cinco ferramentas desconectadas",
        detail: "Baixe, transcreva, traduza, edite e exporte em um só lugar.",
      },
      {
        value: "Resultado final",
        label: "não só texto do modelo",
        detail:
          "Termine com um SRT ou vídeo legendado que você realmente pode usar.",
      },
    ],
    comparisonEyebrow: "O que outras ferramentas deixam passar",
    comparisonTitle:
      "A maioria dos tradutores de vídeo com IA para antes das legendas ficarem utilizáveis.",
    comparisonDescription:
      "Uma tradução aproximada não basta quando timing, redação, revisão e exportação ainda precisam acontecer. O Translator mantém todo o trabalho de legendagem em um só fluxo.",
    typicalLabel: "Tradutor de IA típico",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Entrega texto traduzido ou um arquivo de legenda bruto.",
        translator:
          "Mantém as legendas traduzidas conectadas ao vídeo para revisar cada linha no contexto.",
      },
      {
        typical: "Quebra o timing ou deixa a revisão para outra ferramenta.",
        translator:
          "Permite editar redação e timing antes de transformar as legendas em resultado final.",
      },
      {
        typical:
          "Exige ferramentas separadas para download, edição e exportação.",
        translator:
          "Mantém vídeo, transcrição, tradução, editor e exportação no mesmo espaço desktop.",
      },
      {
        typical: "Parece uma utilidade simples.",
        translator:
          "Parece um fluxo de produção para criar legendas que você realmente publicaria.",
      },
    ],
    sellingEyebrow: "O que você realmente recebe",
    sellingTitle: "Baixe, traduza legendas, revise e exporte em um só app.",
    sellingDescription:
      "O Translator transforma vídeos da internet em legendas traduzidas revisadas e resultados legendados finalizados sem costurar downloader, transcrição, tradutor, editor e exportador.",
    sellingPoints: [
      {
        title: "Comece por uma URL de vídeo ou arquivo local",
        description:
          "Cole uma URL de vídeo compatível ou importe um vídeo da sua máquina, depois continue o trabalho de legendas no mesmo app.",
        href: "/video-downloader",
        cta: "Ver o downloader",
      },
      {
        title: "Gere legendas traduzidas que você pode revisar",
        description:
          "Crie legendas, traduza e confira o resultado contra o vídeo em vez de confiar em texto separado do contexto.",
        href: "/translate",
        cta: "Ver tradução com IA",
      },
      {
        title: "Corrija as legendas antes de exportar",
        description:
          "Ajuste redação, timing e arquivos de legenda antes de exportar SRT ou embutir legendas no vídeo final.",
        href: "/subtitle-editor",
        cta: "Ver o editor",
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
      "Comece pelos idiomas esperados e avance para a cauda longa quando o vídeo ou o público precisar de legendas em outro lugar.",
    bottomEyebrow: "Um app, do início ao fim",
    bottomTitle: "Traduza seu próximo vídeo do início ao fim.",
    bottomDescription:
      "Encontre ou abra um vídeo, gere e traduza as legendas, revise e edite junto às imagens e depois exporte ou duble o resultado. Várias tarefas ficam organizadas em abas dentro de um só aplicativo.",
    mockSearchQuery: "vídeo da internet -> legendas em português revisadas",
    mockSearchTag: "Fluxo de vídeo para legendas",
    heroBenefitTitle1: "Revise legendas traduzidas no contexto",
    heroBenefitBody1:
      "Você vê cada linha traduzida contra o vídeo antes de decidir o que precisa editar.",
    heroBenefitTitle2: "Vá da URL ao resultado final",
    heroBenefitBody2:
      "Quando um vídeo importa, siga do download para transcrição, tradução, edição de legendas e exportação sem trocar de ferramenta.",
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
    heroDiscoveryAlt: "Revisão de legendas traduzidas no Translator",
    viewerAlt: "Assistindo a um vídeo com legendas traduzidas",
    actionAlt: "Analisando candidatos a clipes de destaque",
  },
  vi: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Phụ đề dịch bằng AI cho video internet | Ứng dụng desktop miễn phí",
    metadataDescription:
      "Tải xuống hoặc nhập video internet, tạo phụ đề dịch chất lượng cao, rà soát và chỉnh sửa, rồi xuất video có phụ đề hoặc tệp SRT sạch trong một ứng dụng desktop.",
    eyebrow: "Phụ đề dịch bằng AI, từ video đến xuất file",
    title: "Biến video internet thành phụ đề dịch sẵn sàng sử dụng.",
    subtitle:
      "Dán URL video hoặc nhập tệp. Translator tải video, chép lời âm thanh, dịch phụ đề, cho bạn rà từng dòng trong ngữ cảnh và xuất tệp SRT sạch hoặc video có phụ đề.",
    heroPoints: [
      "Tải xuống hoặc nhập video mà không rời app",
      "Tạo phụ đề dịch với timing sẵn sàng rà soát",
      "Chỉnh câu chữ và timing trong khi xem video",
      "Xuất tệp SRT hoặc video có phụ đề hoàn chỉnh",
    ],
    heroNote:
      "Tải xuống miễn phí. Tải video và chỉnh sửa phụ đề đều miễn phí. Tính năng AI chỉ dùng credit khi bạn thực sự chạy chúng.",
    heroPricingLink: "Xem giá",
    heroFaqLink: "Đọc FAQ",
    heroScreenshotCaption:
      "Các dòng phụ đề đã dịch luôn gắn với timeline video, nên bạn có thể rà, sửa và xuất file ở cùng một nơi.",
    metrics: [
      {
        value: "39",
        label: "ngôn ngữ phụ đề",
        detail: "Dịch phụ đề cho những khán giả mà video của bạn cần tiếp cận.",
      },
      {
        value: "Rà trước",
        label: "quy trình phụ đề có thể chỉnh sửa",
        detail:
          "Kiểm tra từng dòng đã dịch trong ngữ cảnh trước khi đăng hoặc chia sẻ.",
      },
      {
        value: "Một ứng dụng",
        label: "không phải năm công cụ rời rạc",
        detail:
          "Tải xuống, chép lời, dịch, chỉnh sửa và xuất file trong cùng một nơi.",
      },
      {
        value: "Đầu ra hoàn chỉnh",
        label: "không chỉ là văn bản từ mô hình",
        detail:
          "Kết thúc bằng tệp SRT hoặc video có phụ đề mà bạn thật sự dùng được.",
      },
    ],
    comparisonEyebrow: "Điều mà các công cụ khác bỏ lỡ",
    comparisonTitle:
      "Hầu hết công cụ dịch video AI dừng lại trước khi phụ đề thật sự dùng được.",
    comparisonDescription:
      "Một bản dịch thô là chưa đủ khi timing, câu chữ, rà soát và xuất file vẫn còn phải làm. Translator giữ toàn bộ công việc phụ đề trong một quy trình.",
    typicalLabel: "Trình dịch AI thông thường",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Chỉ trả lại văn bản dịch hoặc tệp phụ đề thô.",
        translator:
          "Giữ phụ đề đã dịch gắn với video để bạn rà từng dòng trong ngữ cảnh.",
      },
      {
        typical: "Làm vỡ timing hoặc đẩy việc rà soát sang công cụ khác.",
        translator:
          "Cho phép chỉnh câu chữ và timing trước khi biến phụ đề thành đầu ra cuối.",
      },
      {
        typical: "Cần công cụ riêng cho tải xuống, chỉnh sửa và xuất file.",
        translator:
          "Giữ video, chép lời, dịch, trình chỉnh sửa và xuất file trong một workspace desktop.",
      },
      {
        typical: "Cảm giác như một tiện ích đơn lẻ.",
        translator:
          "Cảm giác như quy trình sản xuất phụ đề mà bạn thật sự có thể đăng.",
      },
    ],
    sellingEyebrow: "Những gì bạn thực sự có được",
    sellingTitle:
      "Tải xuống, dịch phụ đề, rà soát và xuất file trong một ứng dụng.",
    sellingDescription:
      "Translator biến video internet thành phụ đề dịch đã được rà soát và đầu ra có phụ đề hoàn chỉnh mà không phải ghép downloader, công cụ chép lời, trình dịch, trình chỉnh sửa và công cụ xuất file.",
    sellingPoints: [
      {
        title: "Bắt đầu từ URL video hoặc tệp cục bộ",
        description:
          "Dán URL video được hỗ trợ hoặc nhập video từ máy của bạn, rồi tiếp tục làm phụ đề trong cùng một ứng dụng.",
        href: "/video-downloader",
        cta: "Xem trình tải xuống",
      },
      {
        title: "Tạo phụ đề dịch mà bạn có thể rà soát",
        description:
          "Tạo phụ đề, dịch chúng và kiểm tra kết quả cùng với video thay vì tin vào văn bản tách khỏi ngữ cảnh.",
        href: "/translate",
        cta: "Xem dịch bằng AI",
      },
      {
        title: "Sửa phụ đề trước khi xuất",
        description:
          "Chỉnh câu chữ, timing và tệp phụ đề trước khi xuất SRT hoặc burn phụ đề vào video cuối.",
        href: "/subtitle-editor",
        cta: "Xem trình chỉnh sửa",
      },
      {
        title: "Chỉ trả tiền khi AI thực sự chạy",
        description:
          "Ứng dụng được tải miễn phí, chỉnh phụ đề miễn phí, và đủ linh hoạt cho người dùng nâng cao muốn dùng credit hoặc khóa BYO.",
        href: "/pricing",
        cta: "Xem giá",
      },
    ],
    socialEyebrow: "Mọi người nói gì",
    socialTitle: "Người ta nhận ra sự khác biệt rất nhanh.",
    socialDescription:
      "Sản phẩm tạo cảm giác như một quy trình hoàn chỉnh có gu, chứ không phải thêm một lớp vỏ mỏng bọc quanh đầu ra mô hình.",
    languagesEyebrow: "Độ phủ ngôn ngữ",
    languagesTitle: "Dịch sang 39 ngôn ngữ phụ đề mà không rời khỏi quy trình.",
    languagesDescription:
      "Bắt đầu với những ngôn ngữ người dùng mong đợi, rồi vươn ra phần đuôi dài khi video hoặc khán giả cần phụ đề ở nơi khác.",
    bottomEyebrow: "Một ứng dụng, từ đầu đến cuối",
    bottomTitle: "Dịch video tiếp theo của bạn từ đầu đến cuối.",
    bottomDescription:
      "Tìm hoặc mở video, tạo và dịch phụ đề, xem lại và chỉnh sửa ngay cùng hình ảnh, rồi xuất hoặc lồng tiếng kết quả. Nhiều công việc được sắp xếp trong các tab của cùng một ứng dụng máy tính.",
    mockSearchQuery: "video internet -> phụ đề tiếng Việt đã rà",
    mockSearchTag: "Quy trình video sang phụ đề",
    heroBenefitTitle1: "Rà phụ đề dịch trong ngữ cảnh",
    heroBenefitBody1:
      "Bạn có thể xem từng dòng dịch cùng với video trước khi quyết định cần chỉnh gì.",
    heroBenefitTitle2: "Đi từ URL đến đầu ra hoàn chỉnh",
    heroBenefitBody2:
      "Khi một video quan trọng, đi tiếp từ tải xuống đến chép lời, dịch, chỉnh phụ đề và xuất file mà không đổi công cụ.",
    viewerEyebrow: "Xem ngay khi nó diễn ra",
    viewerWindowTitle: "Phụ đề dịch trực tiếp",
    viewerTitle:
      "Phụ đề dịch xuất hiện từng dòng ngay cả khi tác vụ vẫn đang chạy.",
    viewerDescription:
      "Bạn có thể bắt đầu xem video bằng ngôn ngữ của mình ngay lập tức thay vì phải chờ toàn bộ tác vụ dịch hoàn thành.",
    viewerScreenshotCaption:
      "Mỗi khi một dòng phụ đề được dịch xong, nó sẽ hiện ngay trong trình phát. Bạn không phải đợi toàn bộ tệp hoàn tất.",
    actionEyebrow: "Biến nó thành thứ gì đó hữu ích",
    actionWindowTitle: "Clip nổi bật",
    actionTitle:
      "Lấy ra những khoảnh khắc hay nhất từ một video dài mà không cần làm thủ công.",
    actionDescription:
      "Khi bạn tìm được thứ đáng giữ, Translator có thể giúp làm nổi bật những đoạn đáng chú ý và biến một video dài thành các clip ngắn thực sự dùng được.",
    actionScreenshotCaption:
      "Các clip đề xuất hiện kèm mốc thời gian, tóm tắt và xem trước để bạn chỉ giữ lại những phần đáng chia sẻ.",
    aboutLinkLabel: "Vì sao chúng tôi xây dựng nó",
    sellingCardEyebrow: "Vì sao điều đó quan trọng",
    productHuntLinkLabel: "Xem trên Product Hunt",
    heroDiscoveryAlt: "Rà phụ đề đã dịch trong Translator",
    viewerAlt: "Đang xem lại video với phụ đề đã dịch",
    actionAlt: "Đang xem lại các clip nổi bật được đề xuất",
  },
} satisfies Record<Locale, HomeCopy>;

export function getHomeSeoContext(locale: Locale) {
  const copy = homeCopy[locale];
  const languageUrls = Object.fromEntries(
    HOME_LOCALIZED_LOCALES.map((supportedLocale) => [
      supportedLocale,
      new URL(
        localizePathForLocale(supportedLocale, "/"),
        "https://translator.tools",
      ).toString(),
    ]),
  ) as Record<Locale, string>;
  const canonicalUrl = languageUrls[locale];
  const ogLocale = openGraphLocaleByLocale[locale];
  const alternateOgLocale = HOME_LOCALIZED_LOCALES.filter(
    (supportedLocale) => supportedLocale !== locale,
  ).map((supportedLocale) => openGraphLocaleByLocale[supportedLocale]);

  return {
    copy,
    canonicalUrl,
    ogLocale,
    alternateOgLocale,
    languageUrls,
  };
}
export function getHomeMetadata(locale: Locale): Metadata {
  const { copy, languageUrls, canonicalUrl, ogLocale, alternateOgLocale } =
    getHomeSeoContext(locale);

  return {
    title: copy.pageTitle,
    description: copy.metadataDescription,
    keywords: [
      "AI video translator",
      "AI subtitle generator",
      "translated subtitles",
      "video subtitle translator",
      "subtitle editor",
      "SRT translator",
      "translate YouTube video",
      "burn subtitles into video",
      "video localization workflow",
      "multi tab video translator",
      "parallel video translation",
      "Translator app",
      ...(locale === "ko"
        ? [
            "AI 영상 번역기",
            "영상 자막 번역",
            "유튜브 자막 번역",
            "SRT 번역",
            "영상 더빙 프로그램",
            "자막 편집 프로그램",
            "여러 영상 동시 번역",
            "멀티탭 영상 번역기",
          ]
        : []),
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
          url: "https://translator.tools/translator-social-card-editorial-2026-08.png",
          width: 1200,
          height: 630,
          alt: "Translator multitab video translation workstation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.pageTitle,
      description: copy.metadataDescription,
      images: ["https://translator.tools/translator-social-card-editorial-2026-08.png"],
    },
  };
}

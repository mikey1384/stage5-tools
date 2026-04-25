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
      "Translator - AI translated subtitles for internet videos | Free desktop app",
    metadataDescription:
      "Download or import an internet video, generate high-quality translated subtitles, review and edit them, then export a finished subtitled video or clean SRT in one desktop app.",
    eyebrow: "AI translated subtitles from video to export",
    title: "Turn internet videos into finished translated subtitles.",
    subtitle:
      "Paste a video URL or import a file. Translator downloads the video, transcribes the audio, translates the subtitles, lets you review every line in context, and exports a clean SRT or subtitled video.",
    heroPoints: [
      "Download or import videos without leaving the app",
      "Generate translated subtitles with review-ready timing",
      "Edit wording and timing while watching the video",
      "Export SRT files or finished subtitled videos",
    ],
    heroNote:
      "Free download. Downloading and subtitle editing are free. AI features use credits only when you run them.",
    heroPricingLink: "See pricing",
    heroFaqLink: "Read the FAQ",
    heroScreenshotCaption:
      "Translated subtitle lines stay tied to the video timeline, so you can review, fix, and export from one place.",
    metrics: [
      {
        value: "39",
        label: "subtitle languages",
        detail: "Translate subtitles for audiences across the languages your videos need.",
      },
      {
        value: "Review first",
        label: "editable subtitle workflow",
        detail: "Check translated lines in context before you publish or share them.",
      },
      {
        value: "One app",
        label: "not five disconnected tools",
        detail: "Download, transcribe, translate, edit, and export in one place.",
      },
      {
        value: "Finished output",
        label: "not just model text",
        detail: "Leave with an SRT file or a subtitled video you can actually use.",
      },
    ],
    comparisonEyebrow: "What other tools miss",
    comparisonTitle: "Most AI video translators stop before the subtitles are usable.",
    comparisonDescription:
      "A rough translation is not enough when timing, wording, review, and export still need to happen. Translator keeps the whole subtitle job in one workflow.",
    typicalLabel: "Typical AI translator",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "Hands back translated text or a raw subtitle file.",
        translator:
          "Keeps translated subtitles connected to the video so you can review every line in context.",
      },
      {
        typical: "Breaks timing or makes review someone else’s problem.",
        translator:
          "Lets you edit wording and timing before the subtitles become final output.",
      },
      {
        typical: "Needs separate tools for downloading, editing, and export.",
        translator:
          "Keeps the video, transcript, translation, editor, and export path in one desktop workspace.",
      },
      {
        typical: "Feels like a utility.",
        translator:
          "Feels like a production workflow for making subtitles you would actually publish.",
      },
    ],
    sellingEyebrow: "What you actually get",
    sellingTitle: "Download, translate subtitles, review, and export in one app.",
    sellingDescription:
      "Translator turns internet videos into reviewed translated subtitles and finished subtitled outputs without juggling a downloader, transcription tool, translator, editor, and exporter.",
    sellingPoints: [
      {
        title: "Start from a video URL or local file",
        description:
          "Paste a supported internet video URL or import a video from your machine, then keep the subtitle workflow moving in the same app.",
        href: "/video-downloader",
        cta: "See the downloader",
      },
      {
        title: "Generate translated subtitles you can review",
        description:
          "Create subtitles, translate them, and inspect the result against the video instead of trusting detached model output.",
        href: "/translate",
        cta: "See AI translation",
      },
      {
        title: "Fix the subtitles before export",
        description:
          "Adjust wording, timing, and subtitle files before you export SRT or burn subtitles into the finished video.",
        href: "/subtitle-editor",
        cta: "See the editor",
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
      "Start with the languages people expect, then reach across the long tail when the right video or audience needs subtitles somewhere else.",
    bottomEyebrow: "Make the subtitles",
    bottomTitle: "Download Translator and turn a video into translated subtitles.",
    bottomDescription:
      "Bring in a video, generate translated subtitles, review them in context, and export something clean enough to watch, share, or publish.",
    mockSearchQuery: "internet video -> reviewed English subtitles",
    mockSearchTag: "Video to subtitles workflow",
    heroBenefitTitle1: "Review translated subtitles in context",
    heroBenefitBody1:
      "You can see each translated line against the video before deciding what needs editing.",
    heroBenefitTitle2: "Move from URL to finished output",
    heroBenefitBody2:
      "When a video matters, keep going from download to transcription, translation, subtitle editing, and export without changing tools.",
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
    heroDiscoveryAlt: "Reviewing translated subtitles inside Translator",
    viewerAlt: "Reviewing a video with translated subtitles",
    actionAlt: "Reviewing highlight clip candidates",
  },
  ko: {
    pageTitle:
      "Translator - 인터넷 영상에 AI 번역 자막을 만드는 데스크톱 앱 | 무료 다운로드",
    metadataDescription:
      "인터넷 영상을 다운로드하거나 가져와서 고품질 번역 자막을 만들고, 영상 안에서 검토/수정한 뒤 SRT나 자막 입힌 영상으로 내보내세요.",
    eyebrow: "영상에서 내보내기까지 이어지는 AI 번역 자막",
    title: "인터넷 영상을 바로 쓸 수 있는 번역 자막으로 바꾸세요.",
    subtitle:
      "영상 URL을 붙여 넣거나 파일을 가져오세요. Translator가 영상을 다운로드하고, 음성을 전사하고, 자막을 번역한 뒤, 영상 안에서 한 줄씩 검토하고 SRT나 자막 입힌 영상으로 내보낼 수 있게 해줍니다.",
    heroPoints: [
      "앱 안에서 영상을 다운로드하거나 가져옵니다",
      "검토하기 좋은 타이밍의 번역 자막을 생성합니다",
      "영상을 보면서 표현과 타이밍을 수정합니다",
      "SRT 또는 자막 입힌 영상으로 내보냅니다",
    ],
    heroNote:
      "무료로 다운로드해 시작하세요. 다운로드와 자막 편집은 무료이고, AI 기능은 실행할 때만 크레딧을 사용합니다.",
    heroPricingLink: "요금 보기",
    heroFaqLink: "FAQ 보기",
    heroScreenshotCaption:
      "번역 자막이 영상 타임라인과 함께 유지되기 때문에, 한곳에서 검토하고 고치고 내보낼 수 있습니다.",
    metrics: [
      {
        value: "39",
        label: "자막 지원 언어",
        detail: "필요한 시청자에 맞춰 여러 언어로 자막을 번역할 수 있습니다.",
      },
      {
        value: "검토 먼저",
        label: "수정 가능한 자막 흐름",
        detail: "공유하거나 게시하기 전에 번역 자막을 영상 맥락 안에서 확인합니다.",
      },
      {
        value: "한 앱",
        label: "분리된 도구가 아닙니다",
        detail: "다운로드, 전사, 번역, 편집, 내보내기를 한곳에서 처리합니다.",
      },
      {
        value: "완성 결과물",
        label: "모델 텍스트가 아닙니다",
        detail: "실제로 쓸 수 있는 SRT나 자막 입힌 영상으로 끝납니다.",
      },
    ],
    comparisonEyebrow: "다른 툴과 다른 점",
    comparisonTitle: "대부분의 AI 번역기는 자막이 실제로 쓸 만해지기 전에 멈춥니다.",
    comparisonDescription:
      "거친 번역만으로는 부족합니다. 타이밍, 표현, 검토, 내보내기까지 끝나야 실제 자막이 됩니다. Translator는 그 전체 과정을 한 흐름으로 묶습니다.",
    typicalLabel: "일반적인 AI 번역기",
    translatorLabel: "Translator",
    comparisonRows: [
      {
        typical: "번역된 텍스트나 거친 자막 파일만 돌려줍니다.",
        translator:
          "번역 자막을 영상과 함께 유지해 한 줄씩 맥락 안에서 검토할 수 있습니다.",
      },
      {
        typical: "타이밍이 깨지거나 검토를 다른 도구에 맡겨야 합니다.",
        translator:
          "최종 결과물이 되기 전에 표현과 타이밍을 직접 다듬을 수 있습니다.",
      },
      {
        typical: "다운로드, 편집, 내보내기를 다른 도구로 나눠야 합니다.",
        translator: "영상, 전사, 번역, 자막 편집, 내보내기를 하나의 데스크톱 앱에 담았습니다.",
      },
      {
        typical: "단순한 유틸리티처럼 느껴집니다.",
        translator:
          "실제로 게시하거나 공유할 수 있는 자막을 만드는 제작 흐름처럼 느껴집니다.",
      },
    ],
    sellingEyebrow: "Translator로 할 수 있는 것",
    sellingTitle: "다운로드, 자막 번역, 검토, 내보내기를 한 앱에서 끝내세요.",
    sellingDescription:
      "Translator는 인터넷 영상을 검토 가능한 번역 자막과 완성된 자막 결과물로 바꿔줍니다. 다운로더, 전사 도구, 번역기, 자막 편집기, 내보내기 도구를 따로 오갈 필요가 없습니다.",
    sellingPoints: [
      {
        title: "영상 URL이나 로컬 파일에서 시작합니다",
        description:
          "지원되는 인터넷 영상 URL을 붙여 넣거나 내 컴퓨터의 영상을 가져온 뒤, 같은 앱에서 자막 작업을 이어갑니다.",
        href: "/video-downloader",
        cta: "다운로더 보기",
      },
      {
        title: "검토할 수 있는 번역 자막을 만듭니다",
        description:
          "자막을 만들고 번역한 뒤, 영상과 분리된 모델 출력이 아니라 실제 영상 안에서 결과를 확인합니다.",
        href: "/translate",
        cta: "AI 번역 보기",
      },
      {
        title: "내보내기 전에 자막을 고칩니다",
        description:
          "SRT로 내보내거나 영상에 자막을 입히기 전에 표현, 타이밍, 자막 파일을 정리할 수 있습니다.",
        href: "/subtitle-editor",
        cta: "자막 편집기 보기",
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
      "많이 찾는 언어부터 시작하고, 필요한 시청자가 다른 언어권에 있을 때 더 멀리 확장하세요.",
    bottomEyebrow: "자막을 완성하세요",
    bottomTitle: "Translator를 다운로드하고 영상을 번역 자막으로 바꾸세요.",
    bottomDescription:
      "영상을 가져오고, 번역 자막을 만들고, 맥락 안에서 검토한 뒤, 보기 좋고 공유 가능한 결과물로 내보내세요.",
    mockSearchQuery: "인터넷 영상 -> 검토된 한국어 자막",
    mockSearchTag: "영상에서 자막까지",
    heroBenefitTitle1: "번역 자막을 영상 안에서 검토합니다",
    heroBenefitBody1:
      "각 번역 줄을 실제 영상과 함께 보면서 무엇을 고쳐야 할지 판단할 수 있습니다.",
    heroBenefitTitle2: "URL에서 완성 결과물까지 이어집니다",
    heroBenefitBody2:
      "가치 있는 영상이라면 다운로드, 전사, 번역, 자막 편집, 내보내기까지 같은 흐름에서 바로 이어갈 수 있습니다.",
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
    heroDiscoveryAlt: "Translator 안에서 번역 자막을 검토하는 화면",
    viewerAlt: "번역 자막과 함께 비디오를 검토하는 화면",
    actionAlt: "하이라이트 클립 후보를 검토하는 화면",
  },
} as const;

const homeCopy = {
  ...baseHomeCopy,
  es: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - Subtítulos traducidos con IA para videos de internet | App de escritorio gratis",
    metadataDescription:
      "Descarga o importa un video de internet, genera subtítulos traducidos de alta calidad, revísalos y edítalos, y exporta un video subtitulado o un SRT limpio desde una app de escritorio.",
    eyebrow: "Subtítulos traducidos con IA, del video al export",
    title: "Convierte videos de internet en subtítulos traducidos listos para usar.",
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
        detail: "Traduce subtítulos para las audiencias que tus videos necesitan.",
      },
      {
        value: "Revisa primero",
        label: "flujo editable de subtítulos",
        detail: "Comprueba las líneas traducidas en contexto antes de publicar o compartir.",
      },
      {
        value: "Una app",
        label: "no cinco herramientas desconectadas",
        detail: "Descarga, transcribe, traduce, edita y exporta en un solo lugar.",
      },
      {
        value: "Resultado final",
        label: "no solo texto del modelo",
        detail: "Termina con un SRT o un video subtitulado que de verdad puedes usar.",
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
        typical: "Devuelve texto traducido o un archivo de subtítulos sin pulir.",
        translator:
          "Mantiene los subtítulos traducidos conectados al video para revisar cada línea en contexto.",
      },
      {
        typical: "Rompe los tiempos o deja la revisión para otra herramienta.",
        translator:
          "Te deja editar redacción y tiempos antes de convertir los subtítulos en salida final.",
      },
      {
        typical: "Necesita herramientas aparte para descargar, editar y exportar.",
        translator: "Mantiene video, transcripción, traducción, editor y exportación en un solo espacio de escritorio.",
      },
      {
        typical: "Se siente como una utilidad.",
        translator:
          "Se siente como un flujo de producción para crear subtítulos que sí publicarías.",
      },
    ],
    sellingEyebrow: "Lo que realmente obtienes",
    sellingTitle: "Descarga, traduce subtítulos, revisa y exporta en una sola app.",
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
    bottomEyebrow: "Crea los subtítulos",
    bottomTitle: "Descarga Translator y convierte un video en subtítulos traducidos.",
    bottomDescription:
      "Importa un video, genera subtítulos traducidos, revísalos en contexto y exporta algo lo bastante limpio para ver, compartir o publicar.",
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
    actionTitle: "Saca los mejores momentos de un video largo sin hacerlo a mano.",
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
        detail: "ダウンロード、文字起こし、翻訳、編集、書き出しを1か所で行えます。",
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
        translator:
          "最終出力にする前に、表現とタイミングを編集できます。",
      },
      {
        typical: "ダウンロード、編集、書き出しに別ツールが必要。",
        translator: "動画、文字起こし、翻訳、字幕編集、書き出しを1つのデスクトップ空間にまとめます。",
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
    bottomEyebrow: "字幕を完成させる",
    bottomTitle: "Translator をダウンロードして、動画を翻訳字幕に変えましょう。",
    bottomDescription:
      "動画を取り込み、翻訳字幕を作り、文脈の中で確認し、視聴、共有、公開に使える形で書き出せます。",
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
    heroDiscoveryAlt: "Translatorで翻訳字幕を確認している画面",
    viewerAlt: "翻訳字幕付きで動画を確認している画面",
    actionAlt: "ハイライトクリップ候補を確認している画面",
  },
  zh: {
    ...baseHomeCopy.en,
    pageTitle:
      "Translator - 为互联网视频生成 AI 翻译字幕 | 免费桌面应用",
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
    heroNote:
      "免费下载。下载和字幕编辑免费，AI 功能只在你实际运行时消耗积分。",
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
    bottomEyebrow: "完成字幕",
    bottomTitle: "下载 Translator，把视频变成翻译字幕。",
    bottomDescription:
      "导入视频，生成翻译字幕，在上下文里审核，然后导出足够干净、可以观看、分享或发布的结果。",
    mockSearchQuery: "互联网视频 -> 已审核中文字幕",
    mockSearchTag: "视频到字幕流程",
    heroBenefitTitle1: "在上下文中审核翻译字幕",
    heroBenefitBody1:
      "你可以把每一行翻译对照视频查看，再判断哪里需要修改。",
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
    title: "Transformez des vidéos internet en sous-titres traduits prêts à utiliser.",
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
        detail: "Traduisez les sous-titres pour les audiences que vos vidéos doivent atteindre.",
      },
      {
        value: "Relire d’abord",
        label: "workflow de sous-titres éditable",
        detail: "Vérifiez les lignes traduites en contexte avant de publier ou partager.",
      },
      {
        value: "Une seule app",
        label: "pas cinq outils séparés",
        detail: "Téléchargez, transcrivez, traduisez, éditez et exportez au même endroit.",
      },
      {
        value: "Résultat final",
        label: "pas seulement du texte de modèle",
        detail: "Repartez avec un SRT ou une vidéo sous-titrée réellement utilisable.",
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
        typical: "Nécessite d’autres outils pour télécharger, éditer et exporter.",
        translator: "Garde vidéo, transcription, traduction, éditeur et export dans un seul espace desktop.",
      },
      {
        typical: "Donne l’impression d’un simple utilitaire.",
        translator:
          "Ressemble à un workflow de production pour créer des sous-titres que vous pourriez publier.",
      },
    ],
    sellingEyebrow: "Ce que vous obtenez vraiment",
    sellingTitle: "Téléchargez, traduisez les sous-titres, relisez et exportez dans une seule app.",
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
    bottomEyebrow: "Créez les sous-titres",
    bottomTitle: "Téléchargez Translator et transformez une vidéo en sous-titres traduits.",
    bottomDescription:
      "Importez une vidéo, générez des sous-titres traduits, relisez-les en contexte et exportez un résultat assez propre pour regarder, partager ou publier.",
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
        detail: "Übersetze Untertitel für die Zielgruppen, die deine Videos erreichen sollen.",
      },
      {
        value: "Erst prüfen",
        label: "editierbarer Untertitel-Workflow",
        detail: "Prüfe übersetzte Zeilen im Kontext, bevor du veröffentlichst oder teilst.",
      },
      {
        value: "Eine App",
        label: "nicht fünf getrennte Tools",
        detail: "Download, Transkription, Übersetzung, Bearbeitung und Export an einem Ort.",
      },
      {
        value: "Fertige Ausgabe",
        label: "nicht nur Modelltext",
        detail: "Am Ende steht eine SRT-Datei oder ein untertiteltes Video, das du wirklich nutzen kannst.",
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
        typical: "Zerstört Timing oder verschiebt die Prüfung in ein anderes Tool.",
        translator:
          "Lässt dich Formulierung und Timing bearbeiten, bevor daraus die finale Ausgabe wird.",
      },
      {
        typical: "Braucht separate Tools für Download, Bearbeitung und Export.",
        translator: "Hält Video, Transkription, Übersetzung, Editor und Export in einem Desktop-Arbeitsraum.",
      },
      {
        typical: "Fühlt sich wie ein Hilfsprogramm an.",
        translator:
          "Fühlt sich wie ein Produktionsworkflow für Untertitel an, die du wirklich veröffentlichen würdest.",
      },
    ],
    sellingEyebrow: "Was du wirklich bekommst",
    sellingTitle: "Herunterladen, Untertitel übersetzen, prüfen und exportieren in einer App.",
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
    bottomEyebrow: "Mach die Untertitel fertig",
    bottomTitle: "Lade Translator herunter und verwandle ein Video in übersetzte Untertitel.",
    bottomDescription:
      "Bring ein Video hinein, erzeuge übersetzte Untertitel, prüfe sie im Kontext und exportiere etwas Sauberes zum Ansehen, Teilen oder Veröffentlichen.",
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
    title: "Transforme vídeos da internet em legendas traduzidas prontas para usar.",
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
        detail: "Traduza legendas para os públicos que seus vídeos precisam alcançar.",
      },
      {
        value: "Revise primeiro",
        label: "fluxo editável de legendas",
        detail: "Confira as linhas traduzidas no contexto antes de publicar ou compartilhar.",
      },
      {
        value: "Um app",
        label: "não cinco ferramentas desconectadas",
        detail: "Baixe, transcreva, traduza, edite e exporte em um só lugar.",
      },
      {
        value: "Resultado final",
        label: "não só texto do modelo",
        detail: "Termine com um SRT ou vídeo legendado que você realmente pode usar.",
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
        typical: "Exige ferramentas separadas para download, edição e exportação.",
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
    bottomEyebrow: "Finalize as legendas",
    bottomTitle: "Baixe o Translator e transforme um vídeo em legendas traduzidas.",
    bottomDescription:
      "Traga um vídeo, gere legendas traduzidas, revise no contexto e exporte algo limpo o bastante para assistir, compartilhar ou publicar.",
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
        detail: "Kiểm tra từng dòng đã dịch trong ngữ cảnh trước khi đăng hoặc chia sẻ.",
      },
      {
        value: "Một ứng dụng",
        label: "không phải năm công cụ rời rạc",
        detail: "Tải xuống, chép lời, dịch, chỉnh sửa và xuất file trong cùng một nơi.",
      },
      {
        value: "Đầu ra hoàn chỉnh",
        label: "không chỉ là văn bản từ mô hình",
        detail: "Kết thúc bằng tệp SRT hoặc video có phụ đề mà bạn thật sự dùng được.",
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
    sellingTitle: "Tải xuống, dịch phụ đề, rà soát và xuất file trong một ứng dụng.",
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
    bottomEyebrow: "Hoàn thiện phụ đề",
    bottomTitle: "Tải Translator và biến video thành phụ đề dịch.",
    bottomDescription:
      "Đưa video vào, tạo phụ đề dịch, rà soát trong ngữ cảnh và xuất thứ đủ sạch để xem, chia sẻ hoặc đăng.",
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
      "AI subtitle generator",
      "translated subtitles",
      "video subtitle translator",
      "subtitle editor",
      "SRT translator",
      "translate YouTube video",
      "burn subtitles into video",
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
  const heroScreenshot = watchSubtitleScreenshot;

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
                    src={heroScreenshot.src}
                    alt={copy.heroDiscoveryAlt}
                    width={heroScreenshot.width}
                    height={heroScreenshot.height}
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

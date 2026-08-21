import type { Locale } from "../../../lib/locales";

interface WatchPageCopy {
  title: string; description: string; keywords: string[];
  h1: string; intro: string;
  section1Title: string; section1Body: string[];
  howToTitle: string; howToBody: string;
  howToSteps: Array<{ title: string; body: string }>;
  pricingTitle: string; pricingFree: string; pricingPaid: string;
  section2Title: string; section2Body: string[];
  downloadTitle: string; downloadBody: string;
  aboutTitle: string; aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt";

export const yooJiTaePiarchiaCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
  title: "Watch Yoo Ji-tae on Lee Dong-jin's Piarchia with English Subtitles | Translator",
  description: "Actor Yoo Ji-tae discusses One Fine Spring Day and Oldboy with film critic Lee Dong-jin. A Korean-language interview about improvisation, love scenes, and creating Lee Woo-jin.",
  keywords: [
    "Yoo Ji-tae interview",
    "Oldboy",
    "One Fine Spring Day",
    "Lee Dong-jin"
  ],
  h1: "Watch Yoo Ji-tae Talk About One Fine Spring Day and Oldboy",
  intro: "Actor Yoo Ji-tae sits down with critic Lee Dong-jin to discuss two films that shaped his career: the improvised intimacy of One Fine Spring Day and the calculated menace of Lee Woo-jin in Oldboy.",
  section1Title: "Two films, twenty years later",
  section1Body: [
    "One Fine Spring Day (2001) and Oldboy (2003) are Korean cinema landmarks. Yoo Ji-tae was in both, playing wildly different characters: the improv-driven relationship in Hur Jin-ho's One Fine Spring Day, and the meticulously controlled antagonist Lee Woo-jin in Park Chan-wook's Oldboy.",
    "Lee Dong-jin is one of Korea's most respected film critics. This interview digs into how Yoo approached these roles—improvising dialogue on set with director Hur Jin-ho, how to play a love scene sincerely, and building Lee Woo-jin as a villain who stayed with viewers long after Oldboy ended.",
    "The interview is in Korean. English speakers who care about Korean cinema or Yoo's work don't get to hear this conversation unless they speak the language or find subtitles."
  ],
  howToTitle: "How to watch the full interview with English subtitles",
  howToBody: "Translator is a desktop app that lets you download videos, add translated subtitles, and watch them in your language. Here's the workflow:",
  howToSteps: [
    {
      title: "Paste the YouTube URL",
      body: "Copy the video link and paste it into Translator's download field."
    },
    {
      title: "Download the video",
      body: "Translator pulls down the video and any available captions. This is free and happens on your machine."
    },
    {
      title: "Transcribe or translate",
      body: "If the video doesn't have Korean captions, you can transcribe it using AI. If it does, you can translate those captions."
    },
    {
      title: "Watch with subtitles you control",
      body: "The app plays the video with your translated subtitles. You can edit the timing, fix translations, and export the final SRT file."
    }
  ],
  pricingTitle: "What's free, what's paid",
  pricingFree: "Downloading videos, managing your library, editing subtitles manually, and exporting SRT files.",
  pricingPaid: "AI transcription and translation. You can use Stage5 credits or unlock BYO once for $10.",
  section2Title: "Korean film content in English",
  section2Body: [
    "Korean cinema has produced some of the most interesting film content on YouTube. Most of it doesn't have English subtitles.",
    "Translator gives you control: choose your translation model, edit the subtitles line by line, and export the final file."
  ],
  downloadTitle: "Download Translator",
  downloadBody: "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels.",
  aboutTitle: "About this post",
  aboutBody: [
    "The YouTube video is embedded directly from the official source. The first 30 seconds of captions can be displayed in English, Spanish, or Portuguese.",
    "Source: Lee Dong-jin's Piarchia, featuring actor Yoo Ji-tae. Video is in Korean. Duration: 1:02:25."
  ]
},
  es: { title: "Yoo Ji-tae | Translator", description: "Yoo Ji-tae habla sobre Oldboy y One Fine Spring Day", keywords: ["Yoo Ji-tae"], h1: "Yoo Ji-tae y Dos Películas Clásicas", intro: "El actor Yoo Ji-tae discute One Fine Spring Day (Hur Jin-ho) y Oldboy (Park Chan-wook) con el crítico Lee Dong-jin.", section1Title: "Sobre la entrevista", section1Body: ["Yoo Ji-tae protagonizó dos películas fundamentales: One Fine Spring Day de Hur Jin-ho y Oldboy de Park Chan-wook."], howToTitle: "Cómo ver con subtítulos", howToBody: "Translator es una app que descarga videos y añade subtítulos. Así funciona:", howToSteps: [{title: "Pega URL", body: "Copia el enlace del video."}, {title: "Descarga", body: "Translator baja el video."}, {title: "Transcribe o traduce", body: "Usa IA para transcribir o traducir."}, {title: "Ve con subtítulos", body: "Edita y exporta subtítulos."}], pricingTitle: "Qué es gratis", pricingFree: "Descargar, editar, exportar.", pricingPaid: "IA requiere créditos Stage5 o API key.", section2Title: "Contenido en español", section2Body: ["Translator da control sobre subtítulos."], downloadTitle: "Descarga Translator", downloadBody: "Funciona en macOS y Windows.", aboutTitle: "Sobre este post", aboutBody: ["Video de YouTube oficial. Primeros 30s con subtítulos."] },
  ko: { title: "유지태 배우 인터뷰 | Translator", description: "유지태가 봄날은 간다와 올드보이에 대해 이야기합니다", keywords: ["Yoo Ji-tae"], h1: "유지태의 봄날은 간다와 올드보이 이야기", intro: "유지태 배우가 평론가 이동진과 함께 그의 경력을 형성한 두 영화에 대해 이야기합니다: 허진호의 봄날은 간다와 박찬욱의 올드보이.", section1Title: "소개", section1Body: ["유지태는 허진호의 봄날은 간다와 박찬욱의 올드보이에 출연했습니다."], howToTitle: "자막과 함께 보는 방법", howToBody: "Translator는 영상을 다운로드하고 자막을 추가하는 앱입니다:", howToSteps: [{title: "URL 붙여넣기", body: "영상 링크를 복사합니다."}, {title: "다운로드", body: "Translator가 영상을 가져옵니다."}, {title: "전사 또는 번역", body: "AI로 전사하거나 번역합니다."}, {title: "자막으로 시청", body: "편집하고 내보냅니다."}], pricingTitle: "무료 기능", pricingFree: "다운로드, 편집, 내보내기.", pricingPaid: "AI는 Stage5 크레딧 또는 API 키 필요.", section2Title: "콘텐츠", section2Body: ["Translator는 자막 제어권을 제공합니다."], downloadTitle: "Translator 다운로드", downloadBody: "macOS와 Windows에서 작동합니다.", aboutTitle: "게시물 정보", aboutBody: ["공식 YouTube 영상. 처음 30초 자막 포함."] },
  pt: { title: "Yoo Ji-tae | Translator", description: "Yoo Ji-tae fala sobre Oldboy e One Fine Spring Day", keywords: ["Yoo Ji-tae"], h1: "Yoo Ji-tae e Dois Filmes Clássicos", intro: "O ator Yoo Ji-tae discute One Fine Spring Day (Hur Jin-ho) e Oldboy (Park Chan-wook) com o crítico Lee Dong-jin.", section1Title: "Sobre", section1Body: ["Yoo Ji-tae estrelou dois filmes fundamentais: One Fine Spring Day de Hur Jin-ho e Oldboy de Park Chan-wook."], howToTitle: "Como assistir com legendas", howToBody: "Translator é um app que baixa vídeos e adiciona legendas. Veja como:", howToSteps: [{title: "Cole URL", body: "Copie o link do vídeo."}, {title: "Baixe", body: "Translator baixa o vídeo."}, {title: "Transcreva ou traduza", body: "Use IA para transcrever ou traduzir."}, {title: "Assista com legendas", body: "Edite e exporte legendas."}], pricingTitle: "O que é grátis", pricingFree: "Baixar, editar, exportar.", pricingPaid: "IA requer créditos Stage5 ou API key.", section2Title: "Conteúdo", section2Body: ["Translator dá controle sobre legendas."], downloadTitle: "Baixe Translator", downloadBody: "Funciona no macOS e Windows.", aboutTitle: "Sobre este post", aboutBody: ["Vídeo oficial do YouTube. Primeiros 30s com legendas."] }
};

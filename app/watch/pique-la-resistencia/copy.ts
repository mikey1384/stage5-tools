import type { Locale } from "../../../lib/locales";

interface WatchPageCopy {
  title: string; description: string; keywords: string[]; h1: string; intro: string;
  section1Title: string; section1Body: string[]; howToTitle: string; howToBody: string;
  howToSteps: Array<{title: string; body: string}>; pricingTitle: string;
  pricingFree: string; pricingPaid: string; section2Title: string; section2Body: string[];
  downloadTitle: string; downloadBody: string; aboutTitle: string; aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt";

export const piqueLaResistenciaCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
  "title": "Watch Gerard Piqué on La Resistencia with English Subtitles | Translator",
  "description": "Barcelona defender Gerard Piqué sits down with David Broncano for a Spanish late-night interview that starts crude and gets interesting.",
  "keywords": [
    "Gerard Piqué interview",
    "La Resistencia",
    "David Broncano",
    "Spanish interview"
  ],
  "h1": "Watch Gerard Piqué on Spanish Late-Night Television",
  "intro": "Barcelona defender Gerard Piqué invited himself onto David Broncano's late-night show via Twitter, showed up at Teatro Arlequín, and sat through a Spanish interview that starts with jokes most English speakers will never hear.",
  "section1Title": "A footballer walks into a late-night show",
  "section1Body": [
    "La Resistencia is one of Spain's most-watched late-night comedy shows. Host David Broncano is known for crude humor and unpredictable interviews. Gerard Piqué—at the time still playing for FC Barcelona—saw a joke exchange on Twitter and invited himself on.",
    "The conversation moves through football, money, celebrity, and Piqué's business ventures. Broncano's opening is deliberately provocative, which is part of the show's format. Later in the interview, Piqué made headlines by saying his net worth was bigger than RCD Espanyol's budget—a comment that became its own news cycle in Spanish sports media.",
    "The interview is in Spanish. English speakers miss the tone, the timing, and the entire setup that makes Spanish late-night comedy work."
  ],
  "howToTitle": "How to watch the full interview with English subtitles",
  "howToBody": "Translator is a desktop app that lets you download videos, add translated subtitles, and watch them in your language.",
  "howToSteps": [
    {
      "title": "Paste the YouTube URL",
      "body": "Copy the video link and paste it into Translator's download field."
    },
    {
      "title": "Download the video",
      "body": "Translator pulls down the video and any available captions."
    },
    {
      "title": "Transcribe or translate",
      "body": "Use AI to transcribe or translate the captions."
    },
    {
      "title": "Watch with subtitles you control",
      "body": "Edit the timing, fix translations, and export the final SRT file."
    }
  ],
  "pricingTitle": "What's free, what's paid",
  "pricingFree": "Downloading videos, managing your library, editing subtitles manually, and exporting SRT files.",
  "pricingPaid": "AI transcription and translation. Use Stage5 credits or unlock BYO once for $10.",
  "section2Title": "Spanish sports media in English",
  "section2Body": [
    "Spain produces some of the best football content on YouTube—interviews, analysis, documentaries. Most of it doesn't have English subtitles.",
    "Translator gives you control: choose your translation model, edit the subtitles line by line, and export the final file."
  ],
  "downloadTitle": "Download Translator",
  "downloadBody": "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels.",
  "aboutTitle": "About this post",
  "aboutBody": [
    "The YouTube video is embedded directly from the official source. The first 30 seconds of captions can be displayed in English, Korean, or Portuguese.",
    "Source: La Resistencia, hosted by David Broncano, featuring Gerard Piqué. Published March 28, 2019. Video is in Spanish."
  ]
},
  es: {
  "title": "Ver Entrevista | Translator",
  "description": "Entrevista en español",
  "keywords": [
    "entrevista"
  ],
  "h1": "Ver Entrevista",
  "intro": "Una conversación interesante.",
  "section1Title": "Sobre la entrevista",
  "section1Body": [
    "Contenido en español."
  ],
  "howToTitle": "Cómo ver con subtítulos",
  "howToBody": "Translator descarga videos y añade subtítulos.",
  "howToSteps": [
    {
      "title": "Pega URL",
      "body": "Copia el enlace."
    },
    {
      "title": "Descarga",
      "body": "Baja el video."
    },
    {
      "title": "Traduce",
      "body": "Usa IA."
    },
    {
      "title": "Ve",
      "body": "Edita subtítulos."
    }
  ],
  "pricingTitle": "Gratis y de pago",
  "pricingFree": "Descargar, editar, exportar.",
  "pricingPaid": "IA requiere créditos.",
  "section2Title": "Contenido",
  "section2Body": [
    "Translator da control."
  ],
  "downloadTitle": "Descarga Translator",
  "downloadBody": "Funciona en macOS y Windows.",
  "aboutTitle": "Sobre este post",
  "aboutBody": [
    "Video oficial de YouTube."
  ]
},
  ko: {
  "title": "인터뷰 보기 | Translator",
  "description": "인터뷰",
  "keywords": [
    "인터뷰"
  ],
  "h1": "인터뷰 보기",
  "intro": "흥미로운 대화입니다.",
  "section1Title": "인터뷰 소개",
  "section1Body": [
    "내용"
  ],
  "howToTitle": "자막과 함께 보기",
  "howToBody": "Translator는 영상을 다운로드하고 자막을 추가합니다.",
  "howToSteps": [
    {
      "title": "URL",
      "body": "링크 복사."
    },
    {
      "title": "다운로드",
      "body": "영상 가져오기."
    },
    {
      "title": "번역",
      "body": "AI 사용."
    },
    {
      "title": "시청",
      "body": "편집."
    }
  ],
  "pricingTitle": "무료와 유료",
  "pricingFree": "다운로드, 편집, 내보내기.",
  "pricingPaid": "AI는 크레딧 필요.",
  "section2Title": "콘텐츠",
  "section2Body": [
    "Translator는 제어권 제공."
  ],
  "downloadTitle": "Translator 다운로드",
  "downloadBody": "macOS와 Windows 지원.",
  "aboutTitle": "게시물 정보",
  "aboutBody": [
    "공식 YouTube 영상."
  ]
},
  pt: {
  "title": "Assistir Entrevista | Translator",
  "description": "Entrevista",
  "keywords": [
    "entrevista"
  ],
  "h1": "Assistir Entrevista",
  "intro": "Uma conversa interessante.",
  "section1Title": "Sobre a entrevista",
  "section1Body": [
    "Conteúdo."
  ],
  "howToTitle": "Como assistir com legendas",
  "howToBody": "Translator baixa vídeos e adiciona legendas.",
  "howToSteps": [
    {
      "title": "Cole URL",
      "body": "Copie o link."
    },
    {
      "title": "Baixe",
      "body": "Baixe o vídeo."
    },
    {
      "title": "Traduza",
      "body": "Use IA."
    },
    {
      "title": "Assista",
      "body": "Edite legendas."
    }
  ],
  "pricingTitle": "Grátis e pago",
  "pricingFree": "Baixar, editar, exportar.",
  "pricingPaid": "IA requer créditos.",
  "section2Title": "Conteúdo",
  "section2Body": [
    "Translator dá controle."
  ],
  "downloadTitle": "Baixe Translator",
  "downloadBody": "Funciona no macOS e Windows.",
  "aboutTitle": "Sobre este post",
  "aboutBody": [
    "Vídeo oficial do YouTube."
  ]
}
};

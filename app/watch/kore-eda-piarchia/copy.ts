import type { Locale } from "../../../lib/locales";

interface WatchPageCopy {
  title: string; description: string; keywords: string[]; h1: string; intro: string;
  section1Title: string; section1Body: string[]; howToTitle: string; howToBody: string;
  howToSteps: Array<{title: string; body: string}>; pricingTitle: string;
  pricingFree: string; pricingPaid: string; section2Title: string; section2Body: string[];
  downloadTitle: string; downloadBody: string; aboutTitle: string; aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt";

export const koreEdaPiarchiaCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
  "title": "Watch Hirokazu Kore-eda on Lee Dong-jin's Piarchia with English Subtitles | Translator",
  "description": "Director Hirokazu Kore-eda discusses his film career with critic Lee Dong-jin. A Korean-language interview about filmmaking craft, looking back at works like Shoplifters, Nobody Knows, After Life, and Broker.",
  "keywords": [
    "Hirokazu Kore-eda interview",
    "Kore-eda",
    "Lee Dong-jin",
    "Shoplifters",
    "고레에다 히로카즈"
  ],
  "h1": "Watch Hirokazu Kore-eda Look Back at His Film Career",
  "intro": "Director Hirokazu Kore-eda sits down with critic Lee Dong-jin to trace the arc of his film life—a career spanning documentaries, family dramas, and films that examine what it means to care for people who aren't connected by blood. A conversation about filmmaking craft that most English speakers miss because it's in Korean.",
  "section1Title": "A director looking back",
  "section1Body": [
    "Hirokazu Kore-eda's films—Shoplifters, Nobody Knows, After Life, Broker—don't feel like typical commercial cinema. They move slowly, let moments breathe, and focus on relationships that exist outside conventional family structures. They're the kind of films critics point to when talking about craft: deliberate framing, minimal exposition, and trust that the audience will follow without hand-holding.",
    "Lee Dong-jin is one of Korea's most respected film critics. His YouTube show Piarchia (파이아키아) gives directors space to talk through their work without the constraints of festival press circuits. This interview with Kore-eda traces his career from early documentaries through the films that defined his approach to storytelling. It's not a promotional interview—it's a conversation between two people who understand film talking about how a body of work comes together over decades.",
    "The interview is in Korean. Kore-eda is Japanese, but the conversation happens in Korean. English speakers who follow international cinema or care about his work don't get to hear this unless they speak the language or find subtitles."
  ],
  "howToTitle": "How to watch the full interview with English subtitles",
  "howToBody": "Translator is a desktop app that lets you download videos, add translated subtitles, and watch them in your language. Here's the workflow:",
  "howToSteps": [
    {
      "title": "Paste the YouTube URL",
      "body": "Copy the video link and paste it into Translator's download field."
    },
    {
      "title": "Download the video",
      "body": "Translator pulls down the video and any available captions. This is free and happens on your machine."
    },
    {
      "title": "Transcribe or translate",
      "body": "If the video doesn't have Korean captions, you can transcribe it using AI. If it does, you can translate those captions to English. You can use Stage5 credits (pay per minute) or bring your own API key from OpenAI or Anthropic."
    },
    {
      "title": "Watch with subtitles you control",
      "body": "The app plays the video with your translated subtitles. You can edit the timing, fix translations, choose subtitle styles, and export the final SRT file."
    }
  ],
  "pricingTitle": "What's free, what's paid",
  "pricingFree": "Downloading videos, managing your library, editing subtitles manually, and exporting SRT files.",
  "pricingPaid": "AI transcription and translation. You can use Stage5 credits (example: $1 for ~50 minutes, $10 for ~18 hours) or unlock BYO once for $10 and bring your own API key from OpenAI or Anthropic to pay them directly.",
  "section2Title": "International film content in English",
  "section2Body": [
    "YouTube hosts thousands of film interviews, critic roundtables, and director discussions that never get English subtitles. Korean cinema coverage, Japanese director Q&As, Brazilian documentaries—most of it stays inaccessible to English speakers because YouTube's auto-generated translations are often incomplete or missing for non-English content.",
    "Translator gives you control: choose your translation model, edit the subtitles line by line, adjust timing if the captions drift, and export the final file. If you've been clicking through international film content wishing you could follow along without guessing, this is what the app does.",
    "This isn't about replacing your browser's auto-translate feature. This is for videos you actually want to sit down and watch—where the accuracy of the subtitles and your ability to control them matters."
  ],
  "downloadTitle": "Download Translator",
  "downloadBody": "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels. The download and subtitle editor are free to use.",
  "aboutTitle": "About this post",
  "aboutBody": [
    "The YouTube video is embedded directly from the official source. The first 30 seconds of captions shown in the player can be displayed in English, Spanish (Español), or Portuguese (Português). All three caption tracks were transcribed and translated in Translator. They are not YouTube automatic captions. The rest of the episode is not published here—this post explains the workflow so you can translate the full video yourself.",
    "Source: Lee Dong-jin's Piarchia (B tv 이동진의 파이아키아), hosted by critic Lee Dong-jin, featuring director Hirokazu Kore-eda (고레에다 히로카즈). Video is in Korean. Title: [인터뷰] 고레에다 히로카즈와 이동진이 함께 영화 인생의 궤적을 되짚다. Duration: 46:38."
  ]
},
  es: {
    title: "Ver Entrevista a Kore-eda | Translator",
    description: "El director Hirokazu Kore-eda discute su carrera cinematográfica con el crítico Lee Dong-jin.",
    keywords: ["Kore-eda entrevista", "Shoplifters"],
    h1: "Hirokazu Kore-eda Mira Hacia Atrás en Su Carrera",
    intro: "El director Hirokazu Kore-eda se sienta con el crítico Lee Dong-jin para rastrear el arco de su vida cinematográfica.",
    section1Title: "Un director mirando atrás",
    section1Body: ["Las películas de Kore-eda—Shoplifters, Nobody Knows, After Life, Broker—no se sienten como cine comercial típico. Se mueven lentamente y se centran en relaciones fuera de las estructuras familiares convencionales."],
    howToTitle: "Cómo ver con subtítulos",
    howToBody: "Translator descarga videos y añade subtítulos.",
    howToSteps: [{title: "Pega URL", body: "Copia el enlace."}, {title: "Descarga", body: "Baja el video."}, {title: "Traduce", body: "Usa IA."}, {title: "Ve", body: "Edita."}],
    pricingTitle: "Gratis y de pago",
    pricingFree: "Descargar, editar, exportar.",
    pricingPaid: "IA requiere créditos Stage5 o API key.",
    section2Title: "Contenido de cine internacional",
    section2Body: ["YouTube tiene miles de entrevistas de cine que nunca obtienen subtítulos en español."],
    downloadTitle: "Descarga Translator",
    downloadBody: "Funciona en macOS y Windows.",
    aboutTitle: "Sobre este post",
    aboutBody: ["Video de YouTube oficial. Primeros 30s con subtítulos en inglés, español o portugués.", "Fuente: Piarchia de Lee Dong-jin, con el director Hirokazu Kore-eda. Video en coreano. Duración: 46:38."]
  },
  ko: {
    title: "고레에다 히로카즈 감독 인터뷰 보기 | Translator",
    description: "고레에다 히로카즈 감독이 영화평론가 이동진과 함께 그의 영화 경력에 대해 이야기합니다.",
    keywords: ["고레에다 히로카즈", "이동진 파이아키아"],
    h1: "고레에다 히로카즈 감독의 영화 인생 회고",
    intro: "고레에다 히로카즈 감독이 평론가 이동진과 함께 그의 영화 인생의 궤적을 되짚습니다.",
    section1Title: "되돌아보는 감독",
    section1Body: ["고레에다 히로카즈의 영화—어느 가족, 아무도 모른다, 원더풀 라이프, 브로커—는 전형적인 상업 영화처럼 느껴지지 않습니다."],
    howToTitle: "자막과 함께 보는 방법",
    howToBody: "Translator는 영상을 다운로드하고 자막을 추가합니다.",
    howToSteps: [{title: "URL", body: "링크 복사."}, {title: "다운로드", body: "영상 가져오기."}, {title: "번역", body: "AI 사용."}, {title: "시청", body: "편집."}],
    pricingTitle: "무료와 유료",
    pricingFree: "다운로드, 편집, 내보내기.",
    pricingPaid: "AI는 크레딧 필요.",
    section2Title: "국제 영화 콘텐츠",
    section2Body: ["YouTube에는 영어 자막이 없는 수천 개의 영화 인터뷰가 있습니다."],
    downloadTitle: "Translator 다운로드",
    downloadBody: "macOS와 Windows 지원.",
    aboutTitle: "게시물 정보",
    aboutBody: ["공식 YouTube 영상. 처음 30초 자막 포함.", "출처: 이동진의 파이아키아, 고레에다 히로카즈 감독 출연. 한국어 영상. 길이: 46:38."]
  },
  pt: {
    title: "Assistir Entrevista com Kore-eda | Translator",
    description: "O diretor Hirokazu Kore-eda discute sua carreira cinematográfica com o crítico Lee Dong-jin.",
    keywords: ["Kore-eda entrevista", "Shoplifters"],
    h1: "Hirokazu Kore-eda Olha Para Trás em Sua Carreira",
    intro: "O diretor Hirokazu Kore-eda se senta com o crítico Lee Dong-jin para rastrear o arco de sua vida cinematográfica.",
    section1Title: "Um diretor olhando para trás",
    section1Body: ["Os filmes de Kore-eda—Shoplifters, Nobody Knows, After Life, Broker—não parecem cinema comercial típico. Eles se movem devagar e se concentram em relacionamentos fora das estruturas familiares convencionais."],
    howToTitle: "Como assistir com legendas",
    howToBody: "Translator baixa vídeos e adiciona legendas.",
    howToSteps: [{title: "Cole URL", body: "Copie o link."}, {title: "Baixe", body: "Baixe o vídeo."}, {title: "Traduza", body: "Use IA."}, {title: "Assista", body: "Edite."}],
    pricingTitle: "Grátis e pago",
    pricingFree: "Baixar, editar, exportar.",
    pricingPaid: "IA requer créditos Stage5 ou API key.",
    section2Title: "Conteúdo de cinema internacional",
    section2Body: ["YouTube hospeda milhares de entrevistas de cinema que nunca recebem legendas em português."],
    downloadTitle: "Baixe Translator",
    downloadBody: "Funciona no macOS e Windows.",
    aboutTitle: "Sobre este post",
    aboutBody: ["Vídeo oficial do YouTube. Primeiros 30s com legendas em inglês, espanhol ou português.", "Fonte: Piarchia de Lee Dong-jin, com o diretor Hirokazu Kore-eda. Vídeo em coreano. Duração: 46:38."]
  }
};

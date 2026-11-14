import type { TranslationLandingContent } from "./translation-landing-content";

// "Download a video and watch it with subtitles in your language": how-to
// guides in the downloader lane, where the site already ranks. One page per
// locale that has search demand for it (see LOCALE_LIMITED_PATHS in locales.ts).
// Prices and free minutes must match /pricing.

export const SUBTITLE_GUIDE_PATH = "/video-downloader/with-subtitles";

export type SubtitleGuideContent = TranslationLandingContent & {
  locale: "en" | "pt" | "es";
  section: NonNullable<TranslationLandingContent["section"]>;
};

export const subtitleGuidePages: readonly SubtitleGuideContent[] = [
  {
    locale: "en",
    path: SUBTITLE_GUIDE_PATH,
    section: {
      breadcrumb: "Video downloader",
      parentPath: "/video-downloader",
      faqHeading: "Questions about downloading videos with subtitles",
      relatedHeading: "Related guides",
    },
    title: "Download a YouTube video with subtitles in your language | Translator",
    description:
      "Save a YouTube lecture, interview or film and watch it with subtitles in your language, even if the video has none. Free downloader for Mac and Windows.",
    eyebrow: "DOWNLOAD + SUBTITLES",
    heading: "Download a YouTube video with subtitles in your language",
    intro:
      "Found a long lecture, interview or documentary in a language you only half follow? Translator saves the video to your computer, listens to it, and writes the subtitles in your language, even when the video has no subtitles of its own.",
    sources: {
      heading: "What you can do with it",
      items: [
        { title: "Videos without subtitles", body: "The app listens to the speech and writes every line, so it does not depend on the uploader's captions." },
        { title: "Long videos", body: "Full lectures, podcasts and films work the same way as short clips. You can start watching the first part while the rest is prepared." },
        { title: "Keep the result", body: "Save the subtitles as an SRT file, or export a copy of the video with the subtitles on screen." },
      ],
    },
    stepsHeading: "From a link to a video you can follow",
    steps: [
      { title: "Paste the link", body: "Copy the video's address from YouTube or most other public video sites and paste it into Translator. Downloading is always free." },
      { title: "Choose your language", body: "Pick one of 39 subtitle languages and press the Translate button. Translator writes the subtitles and translates them." },
      { title: "Watch or export", body: "Watch with the subtitles in the app, fix any line you want, then save an SRT or a subtitled video." },
    ],
    image: {
      src: "/screenshots/player-en-2026-10.webp",
      mobileSrc: "/screenshots/player-en-2026-10-1200.webp",
      height: 1456,
      alt: "Translator playing a Tears of Steel scene with subtitles written by the app beside the video.",
      caption: "A real app screenshot: the video plays with its subtitles, and every line can be edited beside it.",
    },
    faqs: [
      { question: "Is it free?", answer: "Downloading videos is free. Writing and translating subtitles uses AI minutes: a new install normally gets about 12 free minutes once, and after that you buy minutes as you need them, from US$1 for about 29 minutes. There is no subscription." },
      { question: "Does the video need to have subtitles already?", answer: "No. Translator creates the subtitles from the speech in the video, so it also works when the video has no captions or only automatic ones." },
      { question: "How much does a two-hour video cost?", answer: "The US$10 pack covers about 11 hours of video at the standard setting, so a two-hour film or lecture uses a small part of it. The app shows the cost for your video before it starts." },
      { question: "Can I keep the video with the subtitles on it?", answer: "Yes. Export a new video file with the subtitles on screen, or save the subtitles as an SRT file to use in any player." },
      { question: "Which sites does the downloader support?", answer: "YouTube and most public video sites. Services with copy protection, such as Netflix or Disney+, and private videos are not supported. Download only videos you have the right to save." },
      { question: "Does it work on a phone?", answer: "Translator is a desktop app for Mac and Windows. On a phone, send yourself the link and open it on your computer." },
    ],
    trackingLabel: "Guide - download with subtitles",
    related: [
      { path: "/video-downloader", label: "Free video downloader" },
      { path: "/translate", label: "Translate video subtitles" },
      { path: "/pricing", label: "Pricing" },
    ],
  },
  {
    locale: "pt",
    path: SUBTITLE_GUIDE_PATH,
    section: {
      breadcrumb: "Baixador de vídeos",
      parentPath: "/video-downloader",
      faqHeading: "Dúvidas sobre baixar vídeos com legenda",
      relatedHeading: "Veja também",
    },
    title: "Baixar vídeo do YouTube com legenda em português | Translator",
    description:
      "Baixe uma aula, entrevista ou filme do YouTube e assista com legenda em português, mesmo que o vídeo não tenha legenda. Baixador gratuito para Mac e Windows.",
    eyebrow: "BAIXAR + LEGENDA",
    heading: "Baixe um vídeo do YouTube com legenda em português",
    intro:
      "Achou uma aula, entrevista ou documentário em inglês e não consegue acompanhar tudo? O Translator baixa o vídeo para o seu computador, ouve o áudio e escreve a legenda em português, mesmo quando o vídeo não tem legenda nenhuma.",
    sources: {
      heading: "O que dá para fazer",
      items: [
        { title: "Vídeos sem legenda", body: "O aplicativo ouve as falas e escreve cada linha. Não depende da legenda de quem publicou o vídeo." },
        { title: "Vídeos longos", body: "Aulas completas, podcasts e filmes funcionam do mesmo jeito que vídeos curtos. Você já pode assistir ao começo enquanto o restante fica pronto." },
        { title: "Guarde o resultado", body: "Salve a legenda em um arquivo SRT ou exporte uma cópia do vídeo com a legenda na tela." },
      ],
    },
    stepsHeading: "Do link ao vídeo com legenda em português",
    steps: [
      { title: "Cole o link", body: "Copie o endereço do vídeo no YouTube ou na maioria dos sites públicos de vídeo e cole no Translator. Baixar é sempre gratuito." },
      { title: "Escolha português", body: "Selecione português entre os 39 idiomas de legenda e clique no botão de traduzir. O Translator escreve a legenda e traduz as falas." },
      { title: "Assista ou exporte", body: "Assista com a legenda no próprio aplicativo, corrija a linha que quiser e salve o SRT ou o vídeo legendado." },
    ],
    image: {
      src: "/screenshots/player-pt-2026-10.webp",
      mobileSrc: "/screenshots/player-pt-2026-10-1200.webp",
      height: 1456,
      alt: "Translator exibindo uma cena de Tears of Steel com legenda em português e a fala original em inglês ao lado.",
      caption: "Captura real do aplicativo: uma cena em inglês com legenda em português, com a fala original ao lado para conferir.",
    },
    faqs: [
      { question: "É gratuito?", answer: "Baixar vídeos é gratuito. Escrever e traduzir a legenda usa minutos de IA: uma instalação nova normalmente recebe cerca de 12 minutos grátis, uma única vez. Depois disso, você compra minutos quando precisar, a partir de US$ 1 por cerca de 29 minutos. Não há assinatura." },
      { question: "O vídeo precisa já ter legenda?", answer: "Não. O Translator cria a legenda a partir das falas do vídeo. Por isso funciona mesmo quando o vídeo não tem legenda ou só tem a legenda automática." },
      { question: "Quanto custa legendar um vídeo de duas horas?", answer: "O pacote de US$ 10 cobre cerca de 11 horas de vídeo no modo padrão, então um filme ou uma aula de duas horas usa só uma pequena parte. O aplicativo mostra o custo do seu vídeo antes de começar." },
      { question: "Posso salvar o vídeo já com a legenda?", answer: "Sim. Exporte um novo arquivo de vídeo com a legenda na tela ou salve a legenda em SRT para usar em qualquer player." },
      { question: "Quais sites o baixador aceita?", answer: "YouTube e a maioria dos sites públicos de vídeo. Serviços com proteção contra cópia, como Netflix ou Disney+, e vídeos privados não são aceitos. Baixe apenas vídeos que você tem o direito de salvar." },
      { question: "Funciona no celular?", answer: "O Translator é um aplicativo para Mac e Windows. No celular, envie o link para você mesmo e abra no computador." },
    ],
    trackingLabel: "Guide - download with Portuguese subtitles",
    related: [
      { path: "/video-downloader", label: "Baixador de vídeos gratuito" },
      { path: "/translate", label: "Traduzir legendas para português" },
    ],
  },
  {
    locale: "es",
    path: SUBTITLE_GUIDE_PATH,
    section: {
      breadcrumb: "Descargador de videos",
      parentPath: "/video-downloader",
      faqHeading: "Preguntas sobre descargar videos con subtítulos",
      relatedHeading: "Más guías",
    },
    title: "Descargar videos de YouTube con subtítulos en español | Translator",
    description:
      "Descarga una clase, entrevista o película de YouTube y mírala con subtítulos en español, aunque el video no tenga subtítulos. Descargador gratis para Mac y Windows.",
    eyebrow: "DESCARGAR + SUBTÍTULOS",
    heading: "Descarga un video de YouTube con subtítulos en español",
    intro:
      "¿Encontraste una clase, una entrevista o un documental en inglés y no logras seguirlo todo? Translator descarga el video a tu computadora, escucha el audio y escribe los subtítulos en español, incluso cuando el video no tiene ningún subtítulo.",
    sources: {
      heading: "Lo que puedes hacer",
      items: [
        { title: "Videos sin subtítulos", body: "La aplicación escucha lo que se dice y escribe cada línea. No depende de los subtítulos de quien subió el video." },
        { title: "Videos largos", body: "Las clases completas, los pódcast y las películas funcionan igual que los videos cortos. Puedes empezar a ver el principio mientras se prepara el resto." },
        { title: "Guarda el resultado", body: "Guarda los subtítulos en un archivo SRT o exporta una copia del video con los subtítulos en pantalla." },
      ],
    },
    stepsHeading: "Del enlace al video con subtítulos en español",
    steps: [
      { title: "Pega el enlace", body: "Copia la dirección del video en YouTube o en la mayoría de los sitios públicos de video y pégala en Translator. Descargar siempre es gratis." },
      { title: "Elige español", body: "Selecciona español entre los 39 idiomas de subtítulos y pulsa el botón de traducir. Translator escribe los subtítulos y los traduce." },
      { title: "Mira o exporta", body: "Mira el video con los subtítulos en la aplicación, corrige la línea que quieras y guarda el SRT o el video subtitulado." },
    ],
    image: {
      src: "/screenshots/player-es-2026-10.webp",
      height: 1600,
      alt: "Translator mostrando una escena de Tears of Steel con subtítulos en español y la frase original en inglés al lado.",
      caption: "Captura real de la aplicación: una escena en inglés con subtítulos en español y la frase original al lado para comparar.",
    },
    faqs: [
      { question: "¿Es gratis?", answer: "Descargar videos es gratis. Escribir y traducir los subtítulos usa minutos de IA: una instalación nueva suele recibir unos 12 minutos gratis, una sola vez. Después compras minutos cuando los necesites, desde US$1 por unos 29 minutos. No hay suscripción." },
      { question: "¿El video tiene que tener subtítulos?", answer: "No. Translator crea los subtítulos a partir de lo que se dice en el video. Por eso funciona aunque el video no tenga subtítulos o solo tenga los automáticos." },
      { question: "¿Cuánto cuesta subtitular un video de dos horas?", answer: "El paquete de US$10 cubre unas 11 horas de video en el modo estándar, así que una película o una clase de dos horas usa solo una pequeña parte. La aplicación muestra el costo de tu video antes de empezar." },
      { question: "¿Puedo guardar el video con los subtítulos puestos?", answer: "Sí. Exporta un nuevo archivo de video con los subtítulos en pantalla o guarda los subtítulos en SRT para usarlos en cualquier reproductor." },
      { question: "¿Qué sitios acepta el descargador?", answer: "YouTube y la mayoría de los sitios públicos de video. No se aceptan servicios con protección contra copia, como Netflix o Disney+, ni videos privados. Descarga solo videos que tengas derecho a guardar." },
      { question: "¿Funciona en el celular?", answer: "Translator es una aplicación para Mac y Windows. Desde el celular, envíate el enlace y ábrelo en tu computadora." },
    ],
    trackingLabel: "Guide - download with Spanish subtitles",
    related: [
      { path: "/video-downloader", label: "Descargador de videos gratis" },
      { path: "/translate", label: "Traducir subtítulos al español" },
    ],
  },
];

export function getSubtitleGuideContent(locale: string) {
  return subtitleGuidePages.find((page) => page.locale === locale);
}

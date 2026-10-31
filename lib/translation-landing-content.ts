import type { Locale } from "./locales";
import type { TranslationLandingLocale } from "./translation-landing-ui";
import { vietnameseTranslateContent } from "./translate-vietnamese-content";
import { englishPairPages } from "./translation-landing-english-pairs";

type FAQ = { question: string; answer: string };
type Step = { title: string; body: string };
type Pitfall = {
  title: string;
  body: string;
  example?: { original: string; variants: readonly { label: string; text: string }[] };
};
export type TranslationLandingContent = {
  locale: TranslationLandingLocale;
  path: string;
  // Language-detail pages only: what the page helps the reader do, as
  // "<source>><target>" with "own" for the page's language. hreflang joins
  // only pages with the same direction (lib/translate-page-direction.ts).
  direction?: `${string}>${string}`;
  sources?: { heading: string; items: readonly Step[] };
  pitfalls?: { heading: string; originalLang: string; variantLang: string; items: readonly Pitfall[] };
  title: string;
  description: string;
  heading: string;
  intro: string;
  eyebrow: string;
  stepsHeading: string;
  steps: readonly Step[];
  image: { src: string; alt: string; caption: string; height?: number };
  faqs: readonly FAQ[];
  trackingLabel: string;
  related: readonly { path: string; label: string }[];
};

const englishPracticalFAQs: FAQ[] = [
  { question: "Can I translate an existing SRT file?", answer: "Yes. Open the SRT in Translator and translate its text without recreating the subtitles. The original timings are retained. Load the matching video to check the result before exporting." },
  { question: "What if my video has no subtitles?", answer: "Create subtitles from the speech first. Check the transcript for missing words and incorrect names, then translate it. Errors in the source transcript can carry into the translation." },
  { question: "Is subtitle translation free?", answer: "The app is free to download. AI tasks may have a cost: use Stage5 credits or connect your own AI service. Check the selected option in the app before starting a task." },
  { question: "Can I use Translator on my phone?", answer: "Translator is a desktop app for Mac and Windows. On a phone, use the send-yourself-the-link panel and open the download link on your computer." },
];

const englishSteps = (target: string): Step[] => [
  { title: "Open your video or SRT", body: "Use the subtitles you already have, or create a transcript from the video's speech." },
  { title: `Choose ${target}`, body: `Select ${target} as the subtitle language and start the translation.` },
  { title: "Review and export", body: "Check each line against the video, edit the wording, then save an SRT or export the video with subtitles." },
];
const ptImage = {
  src: "/screenshots/player-pt-2026-10.png", height: 1456,
  alt: "Translator showing a Tears of Steel scene with Portuguese subtitles and the original English dialogue alongside the translation.",
  caption: "",
};
const viImage = {
  src: "/screenshots/player-vi-2026-10.webp",
  alt: "Translator hiển thị phim Tears of Steel với phụ đề tiếng Việt, câu gốc tiếng Anh và bản dịch cạnh nhau.",
  caption: "Một đoạn phim tiếng Anh với phụ đề tiếng Việt trong Translator. Bạn có thể đối chiếu câu gốc và bản dịch ngay bên cạnh video.",
};
const enHubRelated = [
  { path: "/translate/spanish", label: "English to Spanish" },
  { path: "/translate/japanese", label: "Japanese to English" },
  { path: "/translate/german", label: "German to English" },
  { path: "/translate/korean", label: "Korean to English" },
  { path: "/translate/french", label: "English to French" },
  { path: "/translate/portuguese", label: "English to Portuguese" },
];
const viRelated = [
  { path: "/translate", label: "Dịch phụ đề video" },
  { path: "/translate/japanese", label: "Tiếng Nhật sang tiếng Việt" },
  { path: "/translate/korean", label: "Tiếng Hàn sang tiếng Việt" },
];

function englishHub(input: Pick<TranslationLandingContent, "path" | "title" | "description" | "heading" | "intro" | "eyebrow" | "stepsHeading" | "image" | "trackingLabel"> & { target: string; specificFAQ: FAQ }): TranslationLandingContent {
  const { target, specificFAQ, ...page } = input;
  return { ...page, locale: "en", steps: englishSteps(target), faqs: [specificFAQ, ...englishPracticalFAQs], related: enHubRelated };
}

export const translationLandingPages: readonly TranslationLandingContent[] = [
  {
    ...vietnameseTranslateContent, locale: "vi", path: "/translate", eyebrow: "TIẾNG ANH → TIẾNG VIỆT",
    stepsHeading: "Từ video tiếng Anh đến phụ đề tiếng Việt", image: viImage,
    trackingLabel: "Translate - Vietnamese subtitles", related: viRelated.filter(link => link.path !== "/translate"),
  },
  {
    locale: "pt", path: "/translate",
    title: "Tradutor de legendas para português | Stage5 Translator",
    description: "Traduza legendas de vídeos e arquivos SRT para português. Revise cada fala, ajuste o texto e salve o SRT ou o vídeo legendado no Mac ou Windows.",
    heading: "Traduza suas legendas para português", eyebrow: "DO INGLÊS PARA O PORTUGUÊS",
    intro: "Quer acompanhar um vídeo em inglês com legendas em português? Abra o vídeo ou o arquivo SRT no Translator, traduza as falas e ajuste cada linha enquanto assiste.",
    stepsHeading: "Do vídeo à legenda em português",
    steps: [
      { title: "Abra o vídeo ou SRT", body: "Aproveite as legendas que você já tem. Se o vídeo não tiver legenda, gere a transcrição do áudio primeiro." },
      { title: "Escolha português", body: "Selecione português como idioma de destino e traduza as legendas." },
      { title: "Revise e salve", body: "Confira o texto junto com o vídeo, corrija o que precisar e exporte o SRT ou o vídeo legendado." },
    ],
    image: { ...ptImage, alt: "Translator exibindo Tears of Steel com legendas em português e as falas em inglês ao lado da tradução.", caption: "Um trecho de Tears of Steel, falado em inglês, com legendas em português no aplicativo. Você pode comparar as falas e ajustar a tradução junto com o vídeo." },
    faqs: [
      { question: "Dá para traduzir um arquivo SRT pronto?", answer: "Sim. Abra o SRT no Translator e traduza o texto, mantendo os tempos da legenda original. Se tiver o vídeo, abra também para conferir a tradução em contexto." },
      { question: "E se o vídeo ainda não tiver legenda?", answer: "Gere a transcrição do áudio primeiro. Confira se as falas e os nomes foram reconhecidos corretamente antes de traduzir para português." },
      { question: "Posso adaptar a tradução para o português do Brasil?", answer: "Sim. Revise as falas e ajuste palavras, expressões e formas de tratamento no editor. A IA pode errar nomes e sentidos que dependem do contexto, então confira os trechos importantes antes de exportar." },
      { question: "O tradutor de legendas é gratuito?", answer: "O download do aplicativo é gratuito. As tarefas de IA podem ter custo: você pode usar créditos Stage5 ou conectar seu próprio serviço de IA. Confira a opção selecionada no aplicativo antes de começar." },
      { question: "Funciona no celular?", answer: "O Translator é um aplicativo para Mac e Windows. Se estiver no celular, envie o link para você e faça o download no computador." },
    ], trackingLabel: "Translate - Portuguese subtitles", related: [],
  },
  ...(["japanese", "korean"] as const).map((language): TranslationLandingContent => {
    const source = language === "japanese" ? "Nhật" : "Hàn";
    return {
      locale: "vi", path: `/translate/${language}`, direction: `${language}>own`, eyebrow: `TIẾNG ${source.toUpperCase()} → TIẾNG VIỆT`,
      title: `Dịch video tiếng ${source} sang tiếng Việt | Stage5 Translator`,
      description: language === "japanese" ? "Tạo phụ đề tiếng Việt cho video tiếng Nhật. Xem lại lời thoại, sửa bản dịch và lưu SRT hoặc xuất video có phụ đề bằng Translator trên Mac, Windows." : "Dịch phụ đề video tiếng Hàn sang tiếng Việt, đối chiếu từng câu và sửa trước khi xuất. Dùng video hoặc tệp SRT trên Mac, Windows.",
      heading: language === "japanese" ? "Dịch video tiếng Nhật sang tiếng Việt" : "Xem video tiếng Hàn với phụ đề tiếng Việt",
      intro: language === "japanese" ? "Muốn xem video tiếng Nhật với phụ đề tiếng Việt? Mở video hoặc tệp SRT trong Translator, dịch lời thoại rồi đối chiếu từng câu ngay bên cạnh video. Bạn có thể sửa tên riêng, cách xưng hô và những câu chưa đúng ý trước khi xuất." : "Có video tiếng Hàn nhưng chưa có phụ đề tiếng Việt? Dùng phụ đề sẵn có hoặc tạo phụ đề từ lời thoại trong Translator, rồi dịch sang tiếng Việt. Xem lại từng câu cùng video để chỉnh cách xưng hô và diễn đạt cho phù hợp.",
      stepsHeading: `Từ lời thoại tiếng ${source} đến phụ đề tiếng Việt`,
      steps: [
        { title: `Mở video hoặc SRT tiếng ${source}`, body: "Nếu video chưa có phụ đề, tạo phụ đề từ lời thoại và kiểm tra bản chép lời trước." },
        { title: "Dịch sang tiếng Việt", body: "Chọn tiếng Việt làm ngôn ngữ đích, rồi dịch các câu phụ đề." },
        { title: "Đối chiếu, sửa và xuất", body: "Xem bản dịch cùng video, chỉnh những câu chưa đúng ý rồi lưu SRT hoặc xuất video có phụ đề." },
      ],
      image: { ...viImage, caption: `Ảnh chụp ứng dụng với phụ đề tiếng Việt. Phần minh họa dùng phim Tears of Steel nói tiếng Anh, không phải video tiếng ${source}. Với video của bạn, hãy kiểm tra bản dịch cùng lời thoại gốc.` },
      faqs: [
        { question: `Cần chú ý gì khi dịch từ tiếng ${source}?`, answer: language === "japanese" ? "Hãy kiểm tra tên riêng, cách xưng hô và những câu lược bỏ chủ ngữ. Bản dịch có thể đọc trôi chảy nhưng hiểu sai người đang được nhắc đến. Đối chiếu các đoạn quan trọng với lời thoại gốc trước khi xuất." : "Chú ý cách xưng hô, mức độ kính trọng và những câu phụ thuộc vào ngữ cảnh. AI có thể chọn sai đại từ hoặc sắc thái. Bạn có thể sửa từng câu phụ đề để phù hợp với nhân vật và tình huống." },
        ...vietnameseTranslateContent.faqs.slice(0, 2),
        vietnameseTranslateContent.faqs[3], vietnameseTranslateContent.faqs[4],
      ], trackingLabel: `Translate - ${language === "japanese" ? "Japanese" : "Korean"} to Vietnamese`,
      related: viRelated.filter(link => link.path !== `/translate/${language}`),
    };
  }),
  {
    locale: "es", path: "/translate/portuguese", direction: "portuguese>own", title: "Traducir vídeos del portugués al español | Stage5 Translator",
    description: "Crea subtítulos en español para vídeos en portugués. Revisa cada frase, corrige la traducción y guarda un SRT o el vídeo subtitulado en Mac o Windows.",
    heading: "Traduce vídeos del portugués al español", eyebrow: "PORTUGUÉS → ESPAÑOL",
    intro: "Sigue un vídeo en portugués con subtítulos en español. Abre el vídeo o su archivo SRT en Translator, traduce las frases y comprueba el resultado junto a la imagen antes de guardarlo.",
    stepsHeading: "Del portugués a los subtítulos en español",
    steps: [
      { title: "Abre el vídeo o el SRT", body: "Usa los subtítulos que ya tengas. Si no hay subtítulos, crea primero una transcripción del audio." },
      { title: "Elige español", body: "Selecciona español como idioma de destino y traduce los subtítulos." },
      { title: "Revisa y exporta", body: "Comprueba cada frase con el vídeo, corrige el texto y guarda un SRT o el vídeo con subtítulos." },
    ],
    image: { src: "/screenshots/player-es-2026-10.webp", alt: "Translator con subtítulos en español sobre una escena de Tears of Steel y el editor al lado del vídeo.", caption: "Así se ven los subtítulos en español en la aplicación. La demostración utiliza Tears of Steel, una película en inglés; no es una muestra de audio en portugués." },
    faqs: [
      { question: "¿Qué conviene revisar al traducir del portugués?", answer: "Revisa las expresiones y las palabras parecidas al español que tienen otro significado. Comprueba también los nombres y el tono de cada escena. Puedes corregir cada línea antes de exportar." },
      { question: "¿Puedo traducir un SRT que ya tengo?", answer: "Sí. Abre el archivo SRT y traduce sus frases sin volver a transcribir el audio. Se conservan los tiempos del original. Si tienes el vídeo, úsalo para revisar la traducción en contexto." },
      { question: "¿También puedo crear subtítulos en portugués?", answer: "Sí. Elige portugués como idioma de destino para traducir desde español u otro idioma. Revisa el vocabulario y las expresiones para adaptarlos a tu público antes de guardar el resultado." },
      { question: "¿La traducción es gratuita?", answer: "La descarga de la aplicación es gratuita. Las tareas de IA pueden tener un coste: puedes usar créditos Stage5 o conectar tu propio servicio de IA. Comprueba la opción elegida en la aplicación antes de empezar." },
      { question: "¿Funciona en el móvil?", answer: "Translator es una aplicación para Mac y Windows. Desde el móvil, envíate el enlace y descarga la aplicación en tu ordenador." },
    ], trackingLabel: "Translate - Portuguese to Spanish", related: [{ path: "/translate", label: "Traducir subtítulos de otros idiomas" }],
  },
  ...englishPairPages,
  englishHub({ path: "/translate", title: "AI Subtitle Translator for Video and SRT | Stage5 Translator",
    description: "Translate video subtitles into the language you need, including Hindi. Review and edit the result, then export an SRT or subtitled video on Mac or Windows.",
    heading: "Translate video subtitles into your language", eyebrow: "VIDEO + SRT · SUBTITLE TRANSLATION",
    intro: "Translate the dialogue in a video without losing track of the scene. Start with a video or SRT in Translator, choose your subtitle language, and review the original and translation side by side before exporting.",
    stepsHeading: "From a video or SRT to translated subtitles", target: "your subtitle language", trackingLabel: "Translate - AI subtitle translator",
    image: { src: "/screenshots/player-hi-2026-10.png", height: 1456, alt: "Translator showing Hindi subtitles on Tears of Steel alongside the English dialogue and translated lines.", caption: "English dialogue with Hindi subtitles in Translator, using a scene from Tears of Steel. Review the wording and line breaks beside the video before exporting." },
    specificFAQ: { question: "Can I translate English subtitles into Hindi?", answer: "Yes. Open an English video or SRT, choose Hindi as the target, then review the translated lines. Check names, mixed English and Hindi speech, and how the Devanagari text wraps on screen. The same workflow supports other subtitle languages." },
  }),
];

export function getTranslationLandingContent(locale: Locale, path: string) {
  return translationLandingPages.find(page => page.locale === locale && page.path === path);
}

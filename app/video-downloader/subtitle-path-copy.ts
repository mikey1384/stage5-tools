import type { Locale } from "../../lib/locales";

// Copy for the downloader page's "get it in your language" section: the path
// for visitors who came to save a video but would rather understand it. Kept
// out of page.tsx so the page file exports only Next.js page members.

export type SubtitlePathCopy = {
  heroLink: string;
  eyebrow: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  body: string;
  steps: [string, string, string];
  caption: string;
};

export const subtitlePathCopy: Record<Locale, SubtitlePathCopy> = {
  en: {
    heroLink: "Need subtitles in your language? See how ↓",
    eyebrow: "Want it in your language?",
    titleBefore: "Save the video. Then watch it in ",
    titleHighlight: "your language",
    titleAfter: ".",
    body: "The app that downloads the video can also listen to it, write the subtitles and translate them into any of 39 languages — or dub it with a natural voice. Try it on your own video before you pay for anything.",
    steps: [
      "Paste the link and save the video. Always free.",
      "Turn on subtitles: Translator listens and writes every line.",
      "Watch it in your language, export it with subtitles, or dub it.",
    ],
    caption:
      "Real app screenshots: one English scene, subtitled by Translator in six languages.",
  },
  ko: {
    heroLink: "한국어 자막도 필요하세요? 방법 보기 ↓",
    eyebrow: "한국어로 보고 싶다면",
    titleBefore: "영상을 내려받고, ",
    titleHighlight: "한국어",
    titleAfter: "로 보세요.",
    body: "영상을 내려받는 바로 그 앱이 영상을 듣고 자막을 만들고, 39개 언어 중 원하는 언어로 번역해 줘요. 자연스러운 목소리로 더빙할 수도 있어요. 결제하기 전에 내 영상으로 먼저 써 보세요.",
    steps: [
      "링크를 붙여넣고 영상을 저장해요. 언제나 무료예요.",
      "자막을 켜면 Translator가 듣고 한 줄씩 받아 적어요.",
      "한국어 자막으로 보거나, 자막을 입혀 내보내거나, 더빙하세요.",
    ],
    caption:
      "실제 앱 화면이에요. 영어 장면 하나를 Translator가 여섯 개 언어 자막으로 만들었어요.",
  },
  es: {
    heroLink: "¿Necesitas subtítulos en tu idioma? Mira cómo ↓",
    eyebrow: "¿Lo quieres en tu idioma?",
    titleBefore: "Descarga el video. Y míralo en ",
    titleHighlight: "español",
    titleAfter: ".",
    body: "La misma app que descarga el video puede escucharlo, escribir los subtítulos y traducirlos a cualquiera de 39 idiomas, o doblarlo con una voz natural. Pruébala con tu propio video antes de pagar nada.",
    steps: [
      "Pega el enlace y guarda el video. Siempre gratis.",
      "Activa los subtítulos: Translator escucha y escribe cada línea.",
      "Míralo en español, expórtalo con subtítulos o dóblalo.",
    ],
    caption:
      "Capturas reales de la app: una escena en inglés subtitulada por Translator en seis idiomas.",
  },
  ja: {
    heroLink: "日本語字幕も欲しいですか？方法を見る ↓",
    eyebrow: "自分の言葉で見たいなら",
    titleBefore: "動画をダウンロードして、そのまま",
    titleHighlight: "日本語",
    titleAfter: "で。",
    body: "動画をダウンロードするこのアプリは、音声を聞き取って字幕を書き起こし、39 言語のどれにでも翻訳できます。自然な声で吹き替えることもできます。お金を払う前に、まずはご自分の動画で試してみてください。",
    steps: [
      "リンクを貼って動画を保存。いつでも無料です。",
      "字幕をオンにすると、Translator が聞き取って一行ずつ書き起こします。",
      "日本語字幕で見る、字幕付きで書き出す、吹き替える。",
    ],
    caption:
      "実際のアプリ画面です。英語のワンシーンを Translator が 6 言語の字幕にしました。",
  },
  zh: {
    heroLink: "还想要中文字幕？看看怎么做 ↓",
    eyebrow: "想用中文看？",
    titleBefore: "视频存下来，就能用",
    titleHighlight: "中文",
    titleAfter: "看懂。",
    body: "下载视频的这款应用，还能听懂视频、写出字幕，并翻译成 39 种语言中的任意一种，也可以用自然的声音配音。付费之前，先用你自己的视频试一试。",
    steps: [
      "粘贴链接，保存视频，始终免费。",
      "打开字幕：Translator 边听边写出每一句。",
      "用中文字幕观看、导出带字幕的视频，或者配音。",
    ],
    caption: "真实应用截图：同一个英文场景，由 Translator 生成六种语言的字幕。",
  },
  fr: {
    heroLink: "Besoin de sous-titres dans votre langue ? Voir comment ↓",
    eyebrow: "Vous la voulez dans votre langue ?",
    titleBefore: "Téléchargez la vidéo. Puis regardez-la en ",
    titleHighlight: "français",
    titleAfter: ".",
    body: "L’app qui télécharge la vidéo peut aussi l’écouter, écrire les sous-titres et les traduire dans l’une des 39 langues, ou la doubler avec une voix naturelle. Essayez-la sur votre propre vidéo avant de payer quoi que ce soit.",
    steps: [
      "Collez le lien et enregistrez la vidéo. Toujours gratuit.",
      "Activez les sous-titres : Translator écoute et écrit chaque ligne.",
      "Regardez-la en français, exportez-la sous-titrée ou doublez-la.",
    ],
    caption:
      "Vraies captures de l’app : une scène en anglais sous-titrée par Translator en six langues.",
  },
  de: {
    heroLink: "Untertitel in deiner Sprache? So geht’s ↓",
    eyebrow: "Lieber in deiner Sprache?",
    titleBefore: "Lade das Video herunter. Und schau es auf ",
    titleHighlight: "Deutsch",
    titleAfter: ".",
    body: "Dieselbe App, die das Video herunterlädt, hört auch zu, schreibt die Untertitel und übersetzt sie in jede von 39 Sprachen – oder vertont das Video mit natürlicher Stimme. Probier es mit deinem eigenen Video aus, bevor du etwas bezahlst.",
    steps: [
      "Link einfügen, Video speichern. Immer kostenlos.",
      "Untertitel einschalten: Translator hört zu und schreibt jede Zeile mit.",
      "Auf Deutsch ansehen, mit Untertiteln exportieren oder vertonen.",
    ],
    caption:
      "Echte App-Screenshots: eine englische Szene, von Translator in sechs Sprachen untertitelt.",
  },
  pt: {
    heroLink: "Quer legendas no seu idioma? Veja como ↓",
    eyebrow: "Quer no seu idioma?",
    titleBefore: "Baixe o vídeo. E assista em ",
    titleHighlight: "português",
    titleAfter: ".",
    body: "O mesmo app que baixa o vídeo também escuta, escreve as legendas e traduz para qualquer um de 39 idiomas — ou faz a dublagem com uma voz natural. Teste no seu próprio vídeo antes de pagar qualquer coisa.",
    steps: [
      "Cole o link e salve o vídeo. Sempre grátis.",
      "Ative as legendas: o Translator escuta e escreve cada fala.",
      "Assista em português, exporte com legendas ou faça a dublagem.",
    ],
    caption:
      "Capturas reais do app: uma cena em inglês legendada pelo Translator em seis idiomas.",
  },
  vi: {
    heroLink: "Cần phụ đề tiếng Việt? Xem cách làm ↓",
    eyebrow: "Muốn xem bằng ngôn ngữ của bạn?",
    titleBefore: "Tải video về. Rồi xem bằng ",
    titleHighlight: "tiếng Việt",
    titleAfter: ".",
    body: "Chính ứng dụng tải video này còn nghe được nội dung, viết phụ đề và dịch sang bất kỳ ngôn ngữ nào trong 39 ngôn ngữ, hoặc lồng tiếng bằng giọng tự nhiên. Hãy thử với video của chính bạn trước khi trả bất cứ khoản nào.",
    steps: [
      "Dán link và lưu video. Luôn miễn phí.",
      "Bật phụ đề: Translator nghe và viết ra từng câu.",
      "Xem bằng tiếng Việt, xuất video có phụ đề hoặc lồng tiếng.",
    ],
    caption:
      "Ảnh chụp thật từ ứng dụng: một cảnh tiếng Anh được Translator làm phụ đề sáu ngôn ngữ.",
  },
};

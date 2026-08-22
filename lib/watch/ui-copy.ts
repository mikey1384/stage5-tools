import type { Locale } from "../locales";

export interface WatchUiCopy {
  home: string;
  watch: string;
  readMore: string;
  freeLabel: string;
  paidLabel: string;
  downloadLinkText: string;
  ctaNote: string;
  captionLanguageLabel: string;
  off: string;
  firstThirtySeconds: string;
  restInTranslator: string;
  playerDownloadNote: string;
  learnVideoDownloading: string;
  replay: string;
  dismiss: string;
}

export const WATCH_LANGUAGE_LABELS: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  es: "Español",
  ja: "日本語",
  zh: "中文",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  vi: "Tiếng Việt",
};

const watchSourceLanguageLabels: Record<
  Locale,
  Record<"English" | "Japanese" | "Korean" | "Spanish", string>
> = {
  en: {
    English: "English",
    Japanese: "Japanese",
    Korean: "Korean",
    Spanish: "Spanish",
  },
  ko: {
    English: "영어",
    Japanese: "일본어",
    Korean: "한국어",
    Spanish: "스페인어",
  },
  es: {
    English: "Inglés",
    Japanese: "Japonés",
    Korean: "Coreano",
    Spanish: "Español",
  },
  ja: {
    English: "英語",
    Japanese: "日本語",
    Korean: "韓国語",
    Spanish: "スペイン語",
  },
  zh: {
    English: "英语",
    Japanese: "日语",
    Korean: "韩语",
    Spanish: "西班牙语",
  },
  fr: {
    English: "Anglais",
    Japanese: "Japonais",
    Korean: "Coréen",
    Spanish: "Espagnol",
  },
  de: {
    English: "Englisch",
    Japanese: "Japanisch",
    Korean: "Koreanisch",
    Spanish: "Spanisch",
  },
  pt: {
    English: "Inglês",
    Japanese: "Japonês",
    Korean: "Coreano",
    Spanish: "Espanhol",
  },
  vi: {
    English: "Tiếng Anh",
    Japanese: "Tiếng Nhật",
    Korean: "Tiếng Hàn",
    Spanish: "Tiếng Tây Ban Nha",
  },
};

const watchTopicLabels: Record<
  Locale,
  Record<
    | "Entertainment"
    | "Film"
    | "Food & Craft"
    | "Games"
    | "Music"
    | "Politics"
    | "Sports",
    string
  >
> = {
  en: {
    Entertainment: "Entertainment",
    Film: "Film",
    "Food & Craft": "Food & Craft",
    Games: "Games",
    Music: "Music",
    Politics: "Politics",
    Sports: "Sports",
  },
  ko: {
    Entertainment: "엔터테인먼트",
    Film: "영화",
    "Food & Craft": "음식과 장인정신",
    Games: "게임",
    Music: "음악",
    Politics: "정치",
    Sports: "스포츠",
  },
  es: {
    Entertainment: "Entretenimiento",
    Film: "Cine",
    "Food & Craft": "Gastronomía y oficio",
    Games: "Videojuegos",
    Music: "Música",
    Politics: "Política",
    Sports: "Deportes",
  },
  ja: {
    Entertainment: "エンターテインメント",
    Film: "映画",
    "Food & Craft": "食と職人技",
    Games: "ゲーム",
    Music: "音楽",
    Politics: "政治",
    Sports: "スポーツ",
  },
  zh: {
    Entertainment: "娱乐",
    Film: "电影",
    "Food & Craft": "美食与匠艺",
    Games: "游戏",
    Music: "音乐",
    Politics: "政治",
    Sports: "体育",
  },
  fr: {
    Entertainment: "Divertissement",
    Film: "Cinéma",
    "Food & Craft": "Cuisine et savoir-faire",
    Games: "Jeux vidéo",
    Music: "Musique",
    Politics: "Politique",
    Sports: "Sport",
  },
  de: {
    Entertainment: "Unterhaltung",
    Film: "Film",
    "Food & Craft": "Kulinarik und Handwerk",
    Games: "Spiele",
    Music: "Musik",
    Politics: "Politik",
    Sports: "Sport",
  },
  pt: {
    Entertainment: "Entretenimento",
    Film: "Cinema",
    "Food & Craft": "Gastronomia e ofício",
    Games: "Jogos",
    Music: "Música",
    Politics: "Política",
    Sports: "Esportes",
  },
  vi: {
    Entertainment: "Giải trí",
    Film: "Điện ảnh",
    "Food & Craft": "Ẩm thực và tay nghề",
    Games: "Trò chơi",
    Music: "Âm nhạc",
    Politics: "Chính trị",
    Sports: "Thể thao",
  },
};

export function getWatchSourceLanguageLabel(
  locale: Locale,
  language: string,
): string {
  return watchSourceLanguageLabels[locale][
    language as keyof (typeof watchSourceLanguageLabels)[Locale]
  ] ?? language;
}

export function getWatchTopicLabel(locale: Locale, topic: string): string {
  return watchTopicLabels[locale][
    topic as keyof (typeof watchTopicLabels)[Locale]
  ] ?? topic;
}

const watchUiCopy: Record<Locale, WatchUiCopy> = {
  en: {
    home: "Home",
    watch: "Watch",
    readMore: "Read more →",
    freeLabel: "Free:",
    paidLabel: "Paid:",
    downloadLinkText: "Learn about video downloading →",
    ctaNote:
      "Download and subtitle editing are free. AI transcription and translation require Stage5 credits or your own API key.",
    captionLanguageLabel: "Caption language",
    off: "Off",
    firstThirtySeconds: "First 30 seconds",
    restInTranslator: "The rest of the translation happens in Translator.",
    playerDownloadNote: "Download the video and add translated subtitles",
    learnVideoDownloading: "Learn about video downloading →",
    replay: "Replay first 30s",
    dismiss: "Dismiss",
  },
  es: {
    home: "Inicio",
    watch: "Ver",
    readMore: "Leer más →",
    freeLabel: "Gratis:",
    paidLabel: "De pago:",
    downloadLinkText: "Más información sobre la descarga de videos →",
    ctaNote:
      "La descarga y la edición de subtítulos son gratis. La transcripción y traducción con IA requieren créditos Stage5 o tu propia clave API.",
    captionLanguageLabel: "Idioma de los subtítulos",
    off: "Sin subtítulos",
    firstThirtySeconds: "Primeros 30 segundos",
    restInTranslator: "El resto de la traducción se hace en Translator.",
    playerDownloadNote: "Descarga el video y añade subtítulos traducidos",
    learnVideoDownloading: "Más información sobre la descarga de videos →",
    replay: "Repetir los primeros 30 s",
    dismiss: "Cerrar",
  },
  ko: {
    home: "홈",
    watch: "보기",
    readMore: "더 읽기 →",
    freeLabel: "무료:",
    paidLabel: "유료:",
    downloadLinkText: "영상 다운로드 자세히 보기 →",
    ctaNote:
      "영상 다운로드와 자막 편집은 무료입니다. AI 전사와 번역에는 Stage5 크레딧 또는 자체 API 키가 필요합니다.",
    captionLanguageLabel: "자막 언어",
    off: "끄기",
    firstThirtySeconds: "처음 30초",
    restInTranslator: "나머지 번역은 Translator에서 진행됩니다.",
    playerDownloadNote: "영상을 다운로드하고 번역 자막을 추가하세요",
    learnVideoDownloading: "영상 다운로드 자세히 보기 →",
    replay: "처음 30초 다시 보기",
    dismiss: "닫기",
  },
  pt: {
    home: "Início",
    watch: "Assistir",
    readMore: "Leia mais →",
    freeLabel: "Grátis:",
    paidLabel: "Pago:",
    downloadLinkText: "Saiba mais sobre download de vídeos →",
    ctaNote:
      "O download e a edição de legendas são grátis. A transcrição e a tradução por IA exigem créditos Stage5 ou sua própria chave de API.",
    captionLanguageLabel: "Idioma das legendas",
    off: "Desativadas",
    firstThirtySeconds: "Primeiros 30 segundos",
    restInTranslator: "O restante da tradução acontece no Translator.",
    playerDownloadNote: "Baixe o vídeo e adicione legendas traduzidas",
    learnVideoDownloading: "Saiba mais sobre download de vídeos →",
    replay: "Repetir os primeiros 30 s",
    dismiss: "Fechar",
  },
  vi: {
    home: "Trang chủ",
    watch: "Xem",
    readMore: "Đọc thêm →",
    freeLabel: "Miễn phí:",
    paidLabel: "Trả phí:",
    downloadLinkText: "Tìm hiểu về tải video →",
    ctaNote:
      "Tải video và chỉnh sửa phụ đề là miễn phí. Phiên âm và dịch bằng AI cần tín dụng Stage5 hoặc khóa API riêng của bạn.",
    captionLanguageLabel: "Ngôn ngữ phụ đề",
    off: "Tắt",
    firstThirtySeconds: "30 giây đầu tiên",
    restInTranslator: "Phần dịch còn lại được thực hiện trong Translator.",
    playerDownloadNote: "Tải video và thêm phụ đề đã dịch",
    learnVideoDownloading: "Tìm hiểu về tải video →",
    replay: "Phát lại 30 giây đầu",
    dismiss: "Đóng",
  },
  ja: {
    home: "ホーム",
    watch: "視聴",
    readMore: "続きを読む →",
    freeLabel: "無料:",
    paidLabel: "有料:",
    downloadLinkText: "動画のダウンロードについて →",
    ctaNote:
      "動画のダウンロードと字幕編集は無料です。AI文字起こしと翻訳にはStage5クレジットまたはご自身のAPIキーが必要です。",
    captionLanguageLabel: "字幕言語",
    off: "オフ",
    firstThirtySeconds: "最初の30秒",
    restInTranslator: "続きの翻訳はTranslatorで行えます。",
    playerDownloadNote: "動画をダウンロードして翻訳字幕を追加",
    learnVideoDownloading: "動画のダウンロードについて →",
    replay: "最初の30秒を再生",
    dismiss: "閉じる",
  },
  zh: {
    home: "首页",
    watch: "观看",
    readMore: "阅读更多 →",
    freeLabel: "免费:",
    paidLabel: "付费:",
    downloadLinkText: "了解视频下载 →",
    ctaNote:
      "视频下载和字幕编辑免费。AI 转写和翻译需要 Stage5 点数或您自己的 API 密钥。",
    captionLanguageLabel: "字幕语言",
    off: "关闭",
    firstThirtySeconds: "前 30 秒",
    restInTranslator: "其余翻译可在 Translator 中完成。",
    playerDownloadNote: "下载视频并添加翻译字幕",
    learnVideoDownloading: "了解视频下载 →",
    replay: "重播前 30 秒",
    dismiss: "关闭",
  },
  fr: {
    home: "Accueil",
    watch: "Regarder",
    readMore: "Lire la suite →",
    freeLabel: "Gratuit :",
    paidLabel: "Payant :",
    downloadLinkText: "En savoir plus sur le téléchargement vidéo →",
    ctaNote:
      "Le téléchargement et l’édition des sous-titres sont gratuits. La transcription et la traduction par IA nécessitent des crédits Stage5 ou votre propre clé API.",
    captionLanguageLabel: "Langue des sous-titres",
    off: "Désactivés",
    firstThirtySeconds: "30 premières secondes",
    restInTranslator: "La suite de la traduction se fait dans Translator.",
    playerDownloadNote: "Téléchargez la vidéo et ajoutez des sous-titres traduits",
    learnVideoDownloading: "En savoir plus sur le téléchargement vidéo →",
    replay: "Revoir les 30 premières secondes",
    dismiss: "Fermer",
  },
  de: {
    home: "Startseite",
    watch: "Ansehen",
    readMore: "Weiterlesen →",
    freeLabel: "Kostenlos:",
    paidLabel: "Kostenpflichtig:",
    downloadLinkText: "Mehr über Video-Downloads erfahren →",
    ctaNote:
      "Video-Download und Untertitelbearbeitung sind kostenlos. KI-Transkription und -Übersetzung erfordern Stage5-Credits oder deinen eigenen API-Schlüssel.",
    captionLanguageLabel: "Untertitelsprache",
    off: "Aus",
    firstThirtySeconds: "Erste 30 Sekunden",
    restInTranslator: "Die restliche Übersetzung erfolgt in Translator.",
    playerDownloadNote: "Video herunterladen und übersetzte Untertitel hinzufügen",
    learnVideoDownloading: "Mehr über Video-Downloads erfahren →",
    replay: "Erste 30 Sekunden wiederholen",
    dismiss: "Schließen",
  },
};

export function getWatchUiCopy(locale: Locale): WatchUiCopy {
  return watchUiCopy[locale];
}

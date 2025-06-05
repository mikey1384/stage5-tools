export const strings = {
  en: {
    headline: "Translator",
    subheadline:
      "Add AI-translated subtitles to any video. Download videos from YouTube and other platforms, translate to over 30 languages, and edit/merge subtitles with precision.",
    download: "Download for Mac",
    free: "free",
    videoDownload: "Video Download",
    videoDownloadDesc:
      "Download videos from YouTube and other platforms simply by entering the URL. Get high-quality video files ready for subtitle processing.",
    subtitleEditing: "Subtitle Editing & Merging",
    subtitleEditingDesc:
      "Edit subtitle timing and text, then merge and embed them directly into your videos with precision or download as SRT files. Support for multiple subtitle formats and seamless integration.",
    aiTranslation: "AI Translation",
    aiTranslationDesc:
      "Translate subtitles to over 30 languages with AI-powered precision. Maintain context, tone, and cultural nuances in your translations.",
    footer:
      "Video downloading and subtitle editing/merging are free • Only pay for AI transcription/translation",
    copyright: "© 2025 Stage5 Tools. All rights reserved.",
    notFound: "Page not found",
    goHome: "Go Home",
  },
  ko: {
    headline: "Translator",
    subheadline:
      "국내 및 해외 동영상에 AI 번역 자막을 추가하세요. YouTube를 포함한 다양한 플랫폼에서 동영상을 다운로드하고, 30개 이상의 언어로 번역하며, 편집/병합하실 수 있습니다.",
    download: "Mac용 다운로드",
    free: "무료",
    videoDownload: "동영상 다운로드",
    videoDownloadDesc:
      "URL 입력만으로 YouTube 및 기타 플랫폼에서 동영상을 다운로드 하실 수 있습니다.",
    subtitleEditing: "자막 편집 및 병합",
    subtitleEditingDesc:
      "자막 타이밍과 텍스트를 편집한 다음 정밀하게 동영상에 직접 병합하거나 SRT 파일로 저장할 수 있습니다. 여러 자막 형식을 지원합니다.",
    aiTranslation: "AI 번역",
    aiTranslationDesc:
      "AI를 사용하여 자막을 30개 이상의 언어로 번역합니다. 맥락, 톤, 문화적 뉘앙스를 유지합니다.",
    footer:
      "동영상 다운로드 및 자막 편집/병합기능 무료 • AI 전사 및 번역만 결제",
    copyright: "© 2025 Stage5 Tools. All rights reserved.",
    notFound: "페이지를 찾을 수 없습니다",
    goHome: "홈으로",
  },
} as const;

export const t = (key: keyof typeof strings.en, locale: "en" | "ko") => {
  return strings[locale][key];
};

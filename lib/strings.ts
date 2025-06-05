export const strings = {
  en: {
    headline: "Translator",
    subheadline:
      "Add AI-translated subtitles to any video. Download videos from YouTube and other platforms, translate to any language, and merge subtitles with precision.",
    download: "Download for Mac",
    free: "free",
    videoDownload: "Video Download",
    videoDownloadDesc:
      "Download videos from YouTube and other platforms with yt-dlp integration. Get high-quality video files ready for subtitle processing.",
    subtitleEditing: "Subtitle Editing & Merging",
    subtitleEditingDesc:
      "Edit subtitle timing and text, then merge and embed them directly into your videos with precision or download as SRT files. Support for multiple subtitle formats and seamless integration.",
    aiTranslation: "AI Translation",
    aiTranslationDesc:
      "Translate subtitles to any language with AI-powered precision. Maintain context, tone, and cultural nuances in your translations.",
    footer:
      "Video downloading and subtitle merging included • Only pay for AI translation",
    copyright: "© 2025 Stage5 Tools. All rights reserved.",
  },
  ko: {
    headline: "번역기",
    subheadline:
      "모든 동영상에 AI 번역 자막을 추가하세요. YouTube와 다른 플랫폼에서 동영상을 다운로드하고, 모든 언어로 번역하며, 정밀하게 자막을 병합합니다.",
    download: "Mac용 다운로드",
    free: "무료",
    videoDownload: "동영상 다운로드",
    videoDownloadDesc:
      "yt-dlp 통합으로 YouTube 및 기타 플랫폼에서 동영상을 다운로드합니다. 자막 처리를 위한 고품질 동영상 파일을 얻으세요.",
    subtitleEditing: "자막 편집 및 병합",
    subtitleEditingDesc:
      "자막 타이밍과 텍스트를 편집한 다음 정밀하게 동영상에 직접 병합하거나 SRT 파일로 다운로드합니다. 여러 자막 형식 지원과 완벽한 통합.",
    aiTranslation: "AI 번역",
    aiTranslationDesc:
      "AI 기반 정밀도로 자막을 모든 언어로 번역합니다. 맥락, 톤, 문화적 뉘앙스를 유지합니다.",
    footer: "동영상 다운로드 및 자막 병합 포함 • AI 번역만 결제",
    copyright: "© 2025 Stage5 Tools. All rights reserved.",
  },
} as const;

export const t = (key: keyof typeof strings.en, locale: "en" | "ko") => {
  return strings[locale][key];
};

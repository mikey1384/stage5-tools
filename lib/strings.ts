import type { Locale } from "./locales";
import {
  REQUIRED_SHARED_STRING_KEYS,
  type RequiredSharedStringKey,
} from "./required-shared-string-keys";

export const strings = {
  en: {
    // Homepage
    download: "Download for Mac",
    downloadWindows: "Download for Windows",
    homeDownloadRecommended: "Recommended for your device",
    homeDownloadChoose: "Choose your download",
    homeDownloadAllVersions: "See all versions →",
    footer:
      "Video downloading and subtitle editing/merging are free • AI transcription, translation, summary, and dubbing use credits",
    copyright: "© 2026 Stage5 Tools. All rights reserved.",
    notFound: "Page not found",
    goHome: "Go Home",

    // Navigation
    navVideoDiscovery: "Video Discovery",
    navDubbing: "Dubbing",
    navVideoDownloader: "Video Downloader",
    navSubtitleEditor: "Subtitle Editor",
    navAiTranslation: "AI Translation",
    navPricing: "Pricing",
    navFaq: "FAQ",
    navAbout: "About",
    navContact: "Contact",
    navDownload: "Download",

    // Footer
    footerProduct: "Product",
    footerResources: "Resources",
    footerCompany: "Company",
    footerLegal: "Legal",
    footerSupportedLanguages: "Supported Languages",
    footerAboutStage5: "About Stage5 Tools",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerQuestions: "Questions? Email",

    // Breadcrumbs
    breadcrumbHome: "Home",

    // Pricing page
    pricingTitle: "Simple pricing for video translation",
    pricingSubtitle:
      "Translator is free to download. Video downloading, subtitle editing, and SRT export are currently free. AI transcription, translation, summary, and dubbing use pay-as-you-go credits.",
    pricingFreeLabel: "Free",
    pricingFreePrice: "$0",
    pricingFreeDesc: "Essential video tools for creators and teams.",
    pricingFreeItem1: "Download videos from URLs",
    pricingFreeItem2: "Edit and sync subtitles",
    pricingFreeItem3: "Merge subtitle tracks",
    pricingFreeItem4: "Export SRT files",
    pricingCreditsLabel: "AI Credits",
    pricingCreditsPrice: "Pay as you go",
    pricingCreditsDesc:
      "Buy credits inside the app and spend them only when you need AI.",
    pricingCreditsItem1: "AI transcription",
    pricingCreditsItem2: "Subtitle translation to 39 supported languages",
    pricingCreditsItem3: "Optional AI dubbing + transcript summaries",
    pricingCreditsItem4: "No subscription required",
    pricingExamplePacks: "Example credit packs",
    pricingPack1: "$1 ≈ 50 minutes of video",
    pricingPack2: "$5 ≈ 8 hours of video",
    pricingPack3: "$10 ≈ 18 hours of video",
    pricingPack4: "$50 ≈ 127 hours of video",
    pricingByoNote:
      "Unlock BYO API keys for a $10 one-time fee and pay provider API costs directly.",
    pricingFreeQuestion: "What's included for free?",
    pricingFreeAnswer:
      "All download and subtitle editing tools are free. You only pay when using AI transcription, translation, summary, or dubbing.",
    pricingExploreEditor: "Explore Subtitle Editor →",
    pricingCostQuestion: "Need help estimating cost?",
    pricingCostAnswer:
      "Translation credits scale with video length and language count. Contact us for large-team workflows.",
    pricingContactSales: "Contact sales →",

    // Translate page
    translateTitle: "AI video translation for subtitles",
    translateSubtitle:
      "Translate YouTube subtitles or local SRT files to 39 supported languages. Stage5 uses GPT-5.1 for the base pass, and Quality mode adds GPT-5.4 review.",
    translateFeature1Title: "GPT-5.1 translation + GPT-5.4 review",
    translateFeature1Desc:
      "Stage5 starts with GPT-5.1 and adds GPT-5.4 review in Quality mode for stronger wording.",
    translateFeature2Title: "39 languages supported",
    translateFeature2Desc:
      "Translate subtitles into Spanish, Korean, Japanese, Chinese, and more.",
    translateFeature3Title: "Built for subtitle workflows",
    translateFeature3Desc:
      "Keep timings intact and export ready-to-use SRT files or burn subtitles into video.",
    translateHowItWorks: "How AI subtitle translation works",
    translateStep1: "Import or generate subtitles.",
    translateStep2: "Choose your target language.",
    translateStep3: "Review the AI translation and export.",
    translateLanguagesTitle: "Translate into these languages",
    translateLanguagesDesc:
      "Target the biggest audiences with dedicated language pages.",
    translateNeedSubtitles: "Need subtitles first?",
    translateNeedSubtitlesDesc:
      "Use the subtitle editor to import, clean, and sync subtitles before translating.",
    translateGoToEditor: "Go to Subtitle Editor →",
    translateStartWithUrl: "Start with a video URL",
    translateStartWithUrlDesc:
      "Download YouTube videos and other sources so you can translate immediately.",
    translateGoToDownloader: "Go to Video Downloader →",
    translateCreditsNote: "AI translation uses credits. Free tools remain free.",

    // Subtitle Editor page
    subtitleEditorTitle: "Free subtitle editor for SRT",
    subtitleEditorSubtitle:
      "Clean up subtitles, sync timing, and merge tracks in one place. Translator is the subtitle editor built for modern video teams.",
    subtitleEditorFeature1Title: "Timeline precision",
    subtitleEditorFeature1Desc:
      "Adjust subtitle timing with millisecond timecode controls for precise sync.",
    subtitleEditorFeature2Title: "Merge and clean tracks",
    subtitleEditorFeature2Desc:
      "Combine multiple subtitle files into a single polished track.",
    subtitleEditorFeature3Title: "Edit popular formats",
    subtitleEditorFeature3Desc: "Import and export SRT with confidence.",
    subtitleEditorWorkflow: "Subtitle editing workflow",
    subtitleEditorStep1:
      "Import subtitles or auto-generate them with AI transcription.",
    subtitleEditorStep2:
      "Edit text, timing, and formatting while previewing the video.",
    subtitleEditorStep3:
      "Export clean subtitle files or burn subtitles into the video.",
    subtitleEditorNeedVideo: "Need a video first?",
    subtitleEditorNeedVideoDesc:
      "Download videos from YouTube and other platforms, then edit subtitles instantly.",
    subtitleEditorReadyTranslate: "Ready to translate?",
    subtitleEditorReadyTranslateDesc:
      "Translate subtitles to 39 supported languages with AI while keeping tone and context intact.",
    subtitleEditorExploreTranslation: "Explore AI Translation →",
    subtitleEditorFreeNote:
      "Subtitle editing is free. AI features are optional and credit-based.",

    // Video Downloader page
    videoDownloaderTitle: "Free video downloader for YouTube and more",
    videoDownloaderSubtitle:
      "Translator makes it easy to download videos from a URL, save them in high quality, and jump straight into subtitle editing or AI translation.",
    videoDownloaderFeature1Title: "Paste a URL, get a clean file",
    videoDownloaderFeature1Desc:
      "Grab a video from YouTube or other popular platforms with a single link.",
    videoDownloaderFeature2Title: "Choose the quality you need",
    videoDownloaderFeature2Desc:
      "Pick from available resolutions and audio options for faster subtitle work.",
    videoDownloaderFeature3Title: "Ready for subtitles immediately",
    videoDownloaderFeature3Desc:
      "Download MP4 files optimized for editing, translation, and export.",
    videoDownloaderHowItWorks: "How it works",
    videoDownloaderStep1: "Paste the video URL into Translator.",
    videoDownloaderStep2: "Select quality and download.",
    videoDownloaderStep3: "Edit or translate subtitles instantly.",
    videoDownloaderPlatforms: "Supported platforms",
    videoDownloaderPlatformsDesc:
      "Download from YouTube and other popular platforms that allow direct URL-based downloads.",
    videoDownloaderPlatform1: "YouTube",
    videoDownloaderPlatform2: "Other major platforms (availability varies)",
    videoDownloaderQuality: "Quality options",
    videoDownloaderQualityDesc:
      "Choose the resolution that best fits your workflow, from quick drafts to high-quality exports.",
    videoDownloaderQuality1: "Multiple resolutions when available",
    videoDownloaderQuality2: "Audio-only exports for transcription",
    videoDownloaderPairEditor: "Pair with the subtitle editor",
    videoDownloaderPairEditorDesc:
      "Sync and merge subtitles, edit timing, and export SRT files without leaving Translator.",
    videoDownloaderTranslateAi: "Translate subtitles with AI",
    videoDownloaderTranslateAiDesc:
      "Translate subtitles to 39 supported languages with GPT-5.1, then add GPT-5.4 review in Quality mode when you need it.",
    videoDownloaderFreeNote:
      "Download free. AI features (transcription, translation, summary, dubbing) use credits.",

    // FAQ page
    faqTitle: "Frequently asked questions",
    faqSubtitle:
      "Everything you need to know about Translator, from subtitle formats to AI translation credits.",
    faqQ1: "Is Translator free to use?",
    faqA1:
      "Yes. Video downloading and subtitle editing are free. AI transcription, translation, summary, and dubbing use paid credits.",
    faqQ2: "Which subtitle formats do you support?",
    faqA2: "Translator currently supports SRT import and export.",
    faqQ3: "Can I translate YouTube subtitles?",
    faqA3:
      "Yes. Download the video, import or generate subtitles, and translate them with AI.",
    faqQ4: "Which platforms are supported?",
    faqA4:
      "Translator is available for macOS (Apple Silicon + Intel) and Windows.",
    faqQ5: "What are the system requirements?",
    faqA5:
      "A modern macOS or Windows computer with enough storage for video files is recommended.",
    faqQ6: "Do I need an internet connection?",
    faqA6:
      "Internet is required for AI transcription, translation, summary, and dubbing. Free editing tools work offline.",
    faqQ7: "How accurate is AI translation?",
    faqA7:
      "Translator uses GPT-5.1 for the base translation pass, and Quality mode adds GPT-5.4 review for better nuance.",
    faqQ8: "Do you offer a subscription?",
    faqA8:
      "No subscription is required. AI features are billed via pay-as-you-go credits.",
    faqQ9: "Can I burn subtitles into the video?",
    faqA9:
      "Yes. You can export subtitle files or embed them directly into your video.",
    faqQ10: "Where can I get help?",
    faqA10:
      "Visit the contact page or email us if you need help with setup or pricing.",
    faqReadyTranslate: "Ready to translate?",
    faqReadyTranslateDesc:
      "Learn more about AI translation and supported languages.",
    faqNeedPricing: "Need a pricing overview?",
    faqNeedPricingDesc: "See what's free and how AI credits work.",
    faqViewPricing: "View Pricing →",

    // About page
    aboutTitle: "About Stage5 Tools",
    aboutSubtitle:
      "Stage5 builds Translator and Echo, two products designed to help people get past language barriers, recommendation loops, and mental autopilot.",
    aboutMission: "Our mission",
    aboutMissionDesc:
      "Build products that help people reach beyond the limits their language, feeds, and default habits would normally keep them inside.",
    aboutVision: "Our vision",
    aboutVisionDesc:
      "A world where language barriers, feed loops, and mental autopilot limit people less.",
    aboutBuiltFor: "Built to widen reach",
    aboutBuiltForDesc:
      "Translator helps people get past the language and recommendation limits around video. Echo helps people get past their own mental loops with one good question a day.",
    aboutContactUs: "Contact us",
    aboutContactUsDesc:
      "Questions about Translator, partnerships, or enterprise plans?",
    aboutGetInTouch: "Get in touch →",

    // Contact page
    contactTitle: "Contact Stage5 Tools",
    contactSubtitle:
      "Questions about Translator? We're here to help with setup, pricing, partnerships, and enterprise inquiries.",
    contactEmail: "Email us",
    contactEmailDesc:
      "For general inquiries, support, or partnership opportunities.",
    contactEnterprise: "Enterprise inquiries",
    contactEnterpriseDesc:
      "Need volume pricing or team workflows? Let us know your requirements.",

    // Language labels for translate page
    langSpanish: "Spanish",
    langKorean: "Korean",
    langJapanese: "Japanese",
    langChinese: "Chinese",
    langFrench: "French",
    langGerman: "German",
    langPortuguese: "Portuguese",

    // Homepage - Other languages
    langArabic: "Arabic",
    langBengali: "Bengali",
    langCzech: "Czech",
    langDanish: "Danish",
    langDutch: "Dutch",
    langEnglish: "English",
    langFinnish: "Finnish",
    langGreek: "Greek",
    langHebrew: "Hebrew",
    langHindi: "Hindi",
    langHungarian: "Hungarian",
    langIndonesian: "Indonesian",
    langItalian: "Italian",
    langMalay: "Malay",
    langNorwegian: "Norwegian",
    langPolish: "Polish",
    langRomanian: "Romanian",
    langRussian: "Russian",
    langSwedish: "Swedish",
    langTagalog: "Tagalog",
    langThai: "Thai",
    langTurkish: "Turkish",
    langUrdu: "Urdu",
    langUkrainian: "Ukrainian",
    langVietnamese: "Vietnamese",
  },
  ko: {
    // Homepage
    download: "Mac용 다운로드",
    downloadWindows: "Windows용 다운로드",
    homeDownloadRecommended: "현재 기기에 추천",
    homeDownloadChoose: "다운로드 버전 선택",
    homeDownloadAllVersions: "모든 버전 보기 →",
    footer:
      "동영상 다운로드와 자막 편집/병합은 무료 • AI 전사·번역·요약·더빙에만 크레딧이 소모됩니다",
    copyright: "© 2026 Stage5 Tools. All rights reserved.",
    notFound: "페이지를 찾을 수 없습니다",
    goHome: "홈으로",

    // Navigation
    navVideoDiscovery: "비디오 발견",
    navDubbing: "더빙",
    navVideoDownloader: "동영상 다운로드",
    navSubtitleEditor: "자막 편집기",
    navAiTranslation: "AI 번역",
    navPricing: "가격",
    navFaq: "FAQ",
    navAbout: "소개",
    navContact: "문의",
    navDownload: "다운로드",

    // Footer
    footerProduct: "제품",
    footerResources: "리소스",
    footerCompany: "회사",
    footerLegal: "법적 고지",
    footerSupportedLanguages: "지원 언어",
    footerAboutStage5: "Stage5 Tools 소개",
    footerPrivacy: "개인정보 처리방침",
    footerTerms: "서비스 이용약관",
    footerQuestions: "문의사항이 있으시면 이메일로 연락주세요",

    // Breadcrumbs
    breadcrumbHome: "홈",

    // Pricing page
    pricingTitle: "간단한 비디오 번역 가격",
    pricingSubtitle:
      "Translator는 무료로 다운로드할 수 있습니다. 동영상 다운로드, 자막 편집, SRT 내보내기는 무료입니다. AI 전사·번역·요약·더빙은 종량제 크레딧을 사용합니다.",
    pricingFreeLabel: "무료",
    pricingFreePrice: "$0",
    pricingFreeDesc: "영상 작업에 필요한 기본 도구.",
    pricingFreeItem1: "URL로 동영상 다운로드",
    pricingFreeItem2: "자막 편집 및 싱크",
    pricingFreeItem3: "자막 트랙 병합",
    pricingFreeItem4: "SRT 내보내기",
    pricingCreditsLabel: "AI 크레딧",
    pricingCreditsPrice: "사용한 만큼만 결제",
    pricingCreditsDesc:
      "앱 안에서 크레딧을 사고 AI가 필요할 때만 쓰면 됩니다.",
    pricingCreditsItem1: "AI 전사",
    pricingCreditsItem2: "39개 지원 언어로 자막 번역",
    pricingCreditsItem3: "AI 더빙 + 전사 요약 (선택사항)",
    pricingCreditsItem4: "구독 없음",
    pricingExamplePacks: "크레딧 팩 예시",
    pricingPack1: "$1 ≈ 동영상 50분",
    pricingPack2: "$5 ≈ 동영상 8시간",
    pricingPack3: "$10 ≈ 동영상 18시간",
    pricingPack4: "$50 ≈ 동영상 127시간",
    pricingByoNote:
      "$10 일회성 결제로 BYO API 키를 사용하고 직접 API 비용만 지불하세요.",
    pricingFreeQuestion: "무료로 포함된 기능은?",
    pricingFreeAnswer:
      "다운로드와 자막 편집 도구는 무료입니다. AI 전사·번역·더빙·요약 기능을 사용할 때만 크레딧이 소모됩니다.",
    pricingExploreEditor: "자막 편집기 살펴보기 →",
    pricingCostQuestion: "비용 견적이 필요하신가요?",
    pricingCostAnswer:
      "번역 크레딧은 영상 길이와 언어 수에 따라 달라집니다. 대량 사용이나 팀 워크플로우가 필요하면 문의해 주세요.",
    pricingContactSales: "영업팀 문의 →",

    // Translate page
    translateTitle: "자막을 위한 AI 비디오 번역",
    translateSubtitle:
      "YouTube 자막이나 로컬 SRT 파일을 39개 언어로 번역하세요. Stage5는 기본 번역에 GPT-5.1을 쓰고, 품질 모드에서는 GPT-5.4 검토가 더해집니다.",
    translateFeature1Title: "GPT-5.1 번역 + GPT-5.4 검토",
    translateFeature1Desc:
      "기본 번역은 GPT-5.1로 처리하고, 품질 모드에서는 GPT-5.4 검토를 더해 문장을 더 자연스럽게 다듬습니다.",
    translateFeature2Title: "39개 언어 지원",
    translateFeature2Desc:
      "스페인어, 한국어, 일본어, 중국어 등 다양한 언어로 자막을 번역할 수 있습니다.",
    translateFeature3Title: "자막 워크플로우에 최적화",
    translateFeature3Desc:
      "타이밍을 유지하고 바로 사용할 수 있는 SRT로 내보내거나 영상에 자막을 삽입합니다.",
    translateHowItWorks: "AI 자막 번역 작동 방식",
    translateStep1: "자막을 가져오거나 생성합니다.",
    translateStep2: "타겟 언어를 선택합니다.",
    translateStep3: "AI 번역을 검토하고 내보냅니다.",
    translateLanguagesTitle: "다음 언어로 번역하세요",
    translateLanguagesDesc: "전용 언어 페이지로 주요 시청자를 타겟팅하세요.",
    translateNeedSubtitles: "먼저 자막이 필요하신가요?",
    translateNeedSubtitlesDesc:
      "번역하기 전에 자막 편집기로 자막을 가져오고, 정리하고, 싱크를 맞출 수 있습니다.",
    translateGoToEditor: "자막 편집기로 이동 →",
    translateStartWithUrl: "비디오 URL로 시작하기",
    translateStartWithUrlDesc:
      "YouTube 영상과 기타 소스를 다운로드해 바로 번역으로 이어갈 수 있습니다.",
    translateGoToDownloader: "동영상 다운로더로 이동 →",
    translateCreditsNote:
      "AI 번역은 크레딧을 사용합니다. 무료 도구는 무료로 유지됩니다.",

    // Subtitle Editor page
    subtitleEditorTitle: "SRT 무료 자막 편집기",
    subtitleEditorSubtitle:
      "한 곳에서 자막을 정리하고, 타이밍을 맞추고, 트랙을 병합하세요. Translator는 영상 작업 흐름 안에 자연스럽게 들어가는 자막 편집기입니다.",
    subtitleEditorFeature1Title: "타임라인 정밀도",
    subtitleEditorFeature1Desc:
      "밀리초 단위 타임코드로 자막 타이밍을 정밀하게 조정할 수 있습니다.",
    subtitleEditorFeature2Title: "트랙 병합 및 정리",
    subtitleEditorFeature2Desc:
      "여러 자막 파일을 하나의 깔끔한 트랙으로 합칠 수 있습니다.",
    subtitleEditorFeature3Title: "SRT 편집과 내보내기",
    subtitleEditorFeature3Desc: "SRT를 안정적으로 가져오고 내보낼 수 있습니다.",
    subtitleEditorWorkflow: "자막 편집 워크플로우",
    subtitleEditorStep1: "자막을 가져오거나 AI 전사로 자동 생성합니다.",
    subtitleEditorStep2:
      "비디오를 미리보면서 텍스트, 타이밍, 서식을 편집합니다.",
    subtitleEditorStep3:
      "깔끔한 자막 파일을 내보내거나 비디오에 자막을 삽입합니다.",
    subtitleEditorNeedVideo: "먼저 비디오가 필요하신가요?",
    subtitleEditorNeedVideoDesc:
      "YouTube와 기타 플랫폼에서 영상을 다운로드하고 바로 자막 작업으로 들어갈 수 있습니다.",
    subtitleEditorReadyTranslate: "번역할 준비가 되셨나요?",
    subtitleEditorReadyTranslateDesc:
      "톤과 맥락을 유지하면서 AI로 39개 언어로 자막을 번역하세요.",
    subtitleEditorExploreTranslation: "AI 번역 살펴보기 →",
    subtitleEditorFreeNote:
      "자막 편집은 무료입니다. AI 기능은 선택 사항이며 크레딧이 소모됩니다.",

    // Video Downloader page
    videoDownloaderTitle: "YouTube 등 무료 동영상 다운로더",
    videoDownloaderSubtitle:
      "Translator로 URL에서 영상을 쉽게 다운로드하고, 원하는 품질로 저장하고, 바로 자막 편집이나 AI 번역으로 넘어가세요.",
    videoDownloaderFeature1Title: "URL을 붙여넣고 깔끔한 파일 받기",
    videoDownloaderFeature1Desc:
      "링크 하나로 YouTube와 기타 주요 플랫폼의 영상을 가져올 수 있습니다.",
    videoDownloaderFeature2Title: "필요한 화질 선택",
    videoDownloaderFeature2Desc:
      "자막 작업이나 내보내기에 맞게 해상도와 오디오 옵션을 고를 수 있습니다.",
    videoDownloaderFeature3Title: "바로 자막 작업 가능",
    videoDownloaderFeature3Desc:
      "편집, 번역, 내보내기에 바로 쓸 수 있는 MP4 파일을 다운로드합니다.",
    videoDownloaderHowItWorks: "작동 방식",
    videoDownloaderStep1: "Translator에 비디오 URL을 붙여넣습니다.",
    videoDownloaderStep2: "화질을 선택하고 다운로드합니다.",
    videoDownloaderStep3: "바로 자막을 편집하거나 번역합니다.",
    videoDownloaderPlatforms: "지원 플랫폼",
    videoDownloaderPlatformsDesc:
      "직접 URL 기반 다운로드를 허용하는 YouTube와 기타 인기 플랫폼에서 영상을 가져올 수 있습니다.",
    videoDownloaderPlatform1: "YouTube",
    videoDownloaderPlatform2: "기타 주요 플랫폼 (가용성은 다를 수 있음)",
    videoDownloaderQuality: "화질 옵션",
    videoDownloaderQualityDesc:
      "빠르게 작업할 때부터 고품질로 내보낼 때까지, 상황에 맞는 해상도를 고를 수 있습니다.",
    videoDownloaderQuality1: "가능한 경우 다양한 해상도",
    videoDownloaderQuality2: "전사를 위한 오디오 전용 내보내기",
    videoDownloaderPairEditor: "자막 편집기와 함께 사용",
    videoDownloaderPairEditorDesc:
      "Translator를 벗어나지 않고 자막을 맞추고 병합하고, 타이밍을 편집한 뒤 SRT로 내보낼 수 있습니다.",
    videoDownloaderTranslateAi: "AI로 자막 번역",
    videoDownloaderTranslateAiDesc:
      "GPT-5.1로 자막을 39개 언어로 번역하고, 필요하면 품질 모드에서 GPT-5.4 검토를 더할 수 있습니다.",
    videoDownloaderFreeNote:
      "다운로드는 무료입니다. AI 기능(전사·번역·요약·더빙)은 크레딧을 사용합니다.",

    // FAQ page
    faqTitle: "자주 묻는 질문",
    faqSubtitle:
      "지원 형식부터 AI 크레딧까지, Translator를 쓰기 전에 많이 묻는 내용을 모았습니다.",
    faqQ1: "Translator는 무료인가요?",
    faqA1:
      "네. 동영상 다운로드와 자막 편집은 무료입니다. AI 전사·번역·요약·더빙은 유료 크레딧을 사용합니다.",
    faqQ2: "어떤 자막 형식을 지원하나요?",
    faqA2: "Translator는 현재 SRT 가져오기 및 내보내기를 지원합니다.",
    faqQ3: "YouTube 자막을 번역할 수 있나요?",
    faqA3:
      "네. 영상을 다운로드하고, 자막을 가져오거나 생성한 다음, AI로 번역하면 됩니다.",
    faqQ4: "어떤 플랫폼을 지원하나요?",
    faqA4:
      "Translator는 macOS(Apple Silicon, Intel)와 Windows에서 사용할 수 있습니다.",
    faqQ5: "시스템 요구 사항은 무엇인가요?",
    faqA5:
      "영상 파일을 저장할 충분한 여유 공간이 있는 최신 macOS 또는 Windows 컴퓨터를 권장합니다.",
    faqQ6: "인터넷 연결이 필요한가요?",
    faqA6:
      "AI 전사·번역·요약·더빙에는 인터넷이 필요합니다. 무료 편집 도구는 오프라인에서 작동합니다.",
    faqQ7: "AI 번역은 얼마나 정확한가요?",
    faqA7:
      "Translator는 기본 번역에 GPT-5.1을 쓰고, 품질 모드에서는 GPT-5.4 검토를 더해 뉘앙스를 더 자연스럽게 다듬습니다.",
    faqQ8: "구독을 제공하나요?",
    faqA8:
      "구독은 필요 없습니다. AI 전사·번역·요약·더빙 기능은 종량제 크레딧으로 과금됩니다.",
    faqQ9: "비디오에 자막을 삽입할 수 있나요?",
    faqA9:
      "네. 자막 파일을 내보내거나 비디오에 직접 삽입할 수 있습니다.",
    faqQ10: "도움은 어디서 받을 수 있나요?",
    faqA10:
      "설정이나 가격 관련 도움이 필요하면 문의 페이지를 방문하거나 이메일을 보내주세요.",
    faqReadyTranslate: "번역할 준비가 되셨나요?",
    faqReadyTranslateDesc: "AI 번역 및 지원 언어에 대해 자세히 알아보세요.",
    faqNeedPricing: "가격 개요가 필요하신가요?",
    faqNeedPricingDesc: "무료 항목과 AI 크레딧 작동 방식을 확인하세요.",
    
    faqViewPricing: "가격 보기 →",

    // About page
    aboutTitle: "Stage5 Tools 소개",
    aboutSubtitle:
      "Stage5는 언어 장벽, 추천 루프, 생각의 자동반응을 넘어가게 돕는 Translator와 Echo를 만듭니다.",
    aboutMission: "미션",
    aboutMissionDesc:
      "언어, 피드, 익숙한 습관이 사람을 가두는 범위를 넘어서게 돕는 제품을 만드는 것.",
    aboutVision: "비전",
    aboutVisionDesc:
      "언어 장벽, 피드 루프, 생각의 자동반응이 사람을 덜 가두는 세상.",
    aboutBuiltFor: "더 넓게 닿기 위해 만든 제품",
    aboutBuiltForDesc:
      "Translator는 영상 앞의 언어와 추천 한계를 넘게 돕고, Echo는 하루에 하나의 좋은 질문으로 자기 안의 생각 루프를 벗어나게 돕습니다.",
    aboutContactUs: "문의하기",
    aboutContactUsDesc:
      "Translator, 파트너십, 대량 사용이나 팀 플랜에 대해 궁금한 점이 있나요?",
    aboutGetInTouch: "연락하기 →",

    // Contact page
    contactTitle: "Stage5 Tools 문의",
    contactSubtitle:
      "Translator에 대해 궁금한 점이 있나요? 설정, 가격, 파트너십, 대량 사용 문의를 도와드립니다.",
    contactEmail: "이메일 문의",
    contactEmailDesc: "일반 문의, 지원 또는 파트너십 기회는 이메일로 연락주세요.",
    
    contactEnterprise: "기업 문의",
    contactEnterpriseDesc:
      "대량 요금제나 팀 워크플로우가 필요하다면 요구 사항을 알려주세요.",

    // Language labels for translate page
    langSpanish: "스페인어",
    langKorean: "한국어",
    langJapanese: "일본어",
    langChinese: "중국어",
    langFrench: "프랑스어",
    langGerman: "독일어",
    langPortuguese: "포르투갈어",

    // Homepage - Other languages
    langArabic: "아랍어",
    langBengali: "벵골어",
    langCzech: "체코어",
    langDanish: "덴마크어",
    langDutch: "네덜란드어",
    langEnglish: "영어",
    langFinnish: "핀란드어",
    langGreek: "그리스어",
    langHebrew: "히브리어",
    langHindi: "힌디어",
    langHungarian: "헝가리어",
    langIndonesian: "인도네시아어",
    langItalian: "이탈리아어",
    langMalay: "말레이어",
    langNorwegian: "노르웨이어",
    langPolish: "폴란드어",
    langRomanian: "루마니아어",
    langRussian: "러시아어",
    langSwedish: "스웨덴어",
    langTagalog: "타갈로그어",
    langThai: "태국어",
    langTurkish: "터키어",
    langUrdu: "우르두어",
    langUkrainian: "우크라이나어",
    langVietnamese: "베트남어",
  },
} as const;

type SharedLocaleBundle = Record<RequiredSharedStringKey, string>;

export const extraStrings: Record<
  Exclude<Locale, "en" | "ko">,
  SharedLocaleBundle & Partial<Record<StringKey, string>>
> = {
  es: {
    download: "Descargar para Mac",
    downloadWindows: "Descargar para Windows",
    homeDownloadRecommended: "Recomendado para tu dispositivo",
    homeDownloadChoose: "Elige tu descarga",
    homeDownloadAllVersions: "Ver todas las versiones →",
    footer:
      "La descarga de videos y la edición/unión de subtítulos son gratis • La transcripción, traducción, resumen y doblaje con IA usan créditos",
    copyright: "© 2026 Stage5 Tools. Todos los derechos reservados.",
    notFound: "Página no encontrada",
    goHome: "Volver al inicio",
    navVideoDiscovery: "Descubrimiento de videos",
    navDubbing: "Doblaje",
    navVideoDownloader: "Descargador de videos",
    navSubtitleEditor: "Editor de subtítulos",
    navAiTranslation: "Traducción con IA",
    navPricing: "Precios",
    navFaq: "Preguntas frecuentes",
    navAbout: "Acerca de",
    navContact: "Contacto",
    navDownload: "Descargar",
    footerProduct: "Producto",
    footerResources: "Recursos",
    footerCompany: "Empresa",
    footerLegal: "Legal",
    footerSupportedLanguages: "Idiomas compatibles",
    footerAboutStage5: "Acerca de Stage5 Tools",
    footerPrivacy: "Política de privacidad",
    footerTerms: "Términos del servicio",
    footerQuestions: "¿Preguntas? Escribe a",
    breadcrumbHome: "Inicio",
    langSpanish: "Español",
    langKorean: "Coreano",
    langJapanese: "Japonés",
    langChinese: "Chino",
    langFrench: "Francés",
    langGerman: "Alemán",
    langPortuguese: "Portugués",
    langArabic: "Árabe",
    langBengali: "Bengalí",
    langCzech: "Checo",
    langDanish: "Danés",
    langDutch: "Neerlandés",
    langEnglish: "Inglés",
    langFinnish: "Finés",
    langGreek: "Griego",
    langHebrew: "Hebreo",
    langHindi: "Hindi",
    langHungarian: "Húngaro",
    langIndonesian: "Indonesio",
    langItalian: "Italiano",
    langMalay: "Malayo",
    langNorwegian: "Noruego",
    langPolish: "Polaco",
    langRomanian: "Rumano",
    langRussian: "Ruso",
    langSwedish: "Sueco",
    langTagalog: "Tagalo",
    langThai: "Tailandés",
    langTurkish: "Turco",
    langUrdu: "Urdu",
    langUkrainian: "Ucraniano",
    langVietnamese: "Vietnamita",
    pricingTitle: "Precios simples para la traducción de video",
    pricingSubtitle:
      "Translator es gratis para descargar. La descarga de videos, la edición de subtítulos y la exportación SRT son gratis por ahora. La transcripción, traducción y el doblaje con IA usan créditos de pago por uso.",
    pricingFreeLabel: "Gratis",
    pricingFreePrice: "$0",
    pricingFreeDesc: "Herramientas esenciales de video para creadores y equipos.",
    pricingFreeItem1: "Descarga videos desde URLs",
    pricingFreeItem2: "Edita y sincroniza subtítulos",
    pricingFreeItem3: "Fusiona pistas de subtítulos",
    pricingFreeItem4: "Exporta archivos SRT",
    pricingCreditsLabel: "Créditos IA",
    pricingCreditsPrice: "Pago por uso",
    pricingCreditsDesc:
      "Compra créditos dentro de la app y úsalos solo cuando necesites IA.",
    pricingCreditsItem1: "Transcripción con IA usando Whisper",
    pricingCreditsItem2: "Traducción de subtítulos a 39 idiomas compatibles",
    pricingCreditsItem3: "Doblaje con IA y resúmenes de transcripción opcionales",
    pricingCreditsItem4: "Sin suscripción",
    pricingExamplePacks: "Ejemplos de paquetes de créditos",
    pricingPack1: "$1 ≈ 50 minutos de video",
    pricingPack2: "$5 ≈ 8 horas de video",
    pricingPack3: "$10 ≈ 18 horas de video",
    pricingPack4: "$50 ≈ 127 horas de video",
    pricingByoNote:
      "Activa claves API BYO con un pago único de $10 y paga directamente los costos del proveedor.",
    pricingFreeQuestion: "¿Qué incluye la parte gratuita?",
    pricingFreeAnswer:
      "Todas las herramientas de descarga y edición de subtítulos son gratis. Solo pagas cuando usas transcripción, traducción, resumen o doblaje con IA.",
    pricingExploreEditor: "Explorar el editor de subtítulos →",
    pricingCostQuestion: "¿Necesitas ayuda para estimar el costo?",
    pricingCostAnswer:
      "Los créditos de traducción escalan según la duración del video y la cantidad de idiomas. Contáctanos para flujos de trabajo de equipos grandes.",
    pricingContactSales: "Contactar ventas →",
    translateTitle: "Traducción de video con IA para subtítulos",
    translateSubtitle:
      "Traduce subtítulos de YouTube o archivos SRT locales a 39 idiomas compatibles. GPT hace la traducción base y el modo Calidad puede añadir una revisión opcional con Claude.",
    translateFeature1Title: "Traducción con GPT + revisión opcional con Claude",
    translateFeature1Desc:
      "Usa GPT por defecto, con revisión opcional de Claude en el modo Calidad para lograr un texto más fiel.",
    translateFeature2Title: "39 idiomas compatibles",
    translateFeature2Desc:
      "Traduce subtítulos a español, coreano, japonés, chino y muchos más.",
    translateFeature3Title: "Hecho para flujos de trabajo con subtítulos",
    translateFeature3Desc:
      "Mantén los tiempos intactos y exporta archivos SRT listos para usar o incrusta subtítulos en el video.",
    translateHowItWorks: "Cómo funciona la traducción de subtítulos con IA",
    translateStep1: "Importa o genera subtítulos.",
    translateStep2: "Elige tu idioma de destino.",
    translateStep3: "Revisa la traducción con IA y exporta.",
    translateLanguagesTitle: "Traduce a estos idiomas",
    translateLanguagesDesc:
      "Llega a las audiencias más grandes con páginas dedicadas por idioma.",
    translateNeedSubtitles: "¿Necesitas subtítulos primero?",
    translateNeedSubtitlesDesc:
      "Usa el editor de subtítulos para importar, limpiar y sincronizar subtítulos antes de traducir.",
    translateGoToEditor: "Ir al editor de subtítulos →",
    translateStartWithUrl: "Empieza con una URL de video",
    translateStartWithUrlDesc:
      "Descarga videos de YouTube y otras fuentes para traducir de inmediato.",
    translateGoToDownloader: "Ir al descargador de videos →",
    translateCreditsNote:
      "La traducción con IA usa créditos. Las herramientas gratuitas siguen siendo gratis.",
    subtitleEditorTitle: "Editor gratuito de subtítulos para SRT",
    subtitleEditorSubtitle:
      "Limpia subtítulos, sincroniza tiempos y fusiona pistas en un solo lugar. Translator es el editor de subtítulos pensado para equipos de video modernos.",
    subtitleEditorFeature1Title: "Precisión en la línea de tiempo",
    subtitleEditorFeature1Desc:
      "Ajusta el tiempo de los subtítulos con controles en milisegundos para una sincronización precisa.",
    subtitleEditorFeature2Title: "Fusiona y limpia pistas",
    subtitleEditorFeature2Desc:
      "Combina varios archivos de subtítulos en una sola pista pulida.",
    subtitleEditorFeature3Title: "Edita formatos populares",
    subtitleEditorFeature3Desc: "Importa y exporta SRT con confianza.",
    subtitleEditorWorkflow: "Flujo de edición de subtítulos",
    subtitleEditorStep1:
      "Importa subtítulos o genéralos automáticamente con transcripción IA.",
    subtitleEditorStep2:
      "Edita texto, tiempos y formato mientras previsualizas el video.",
    subtitleEditorStep3:
      "Exporta archivos limpios de subtítulos o incrústalos en el video.",
    subtitleEditorNeedVideo: "¿Necesitas un video primero?",
    subtitleEditorNeedVideoDesc:
      "Descarga videos de YouTube y otras plataformas y luego edita subtítulos al instante.",
    subtitleEditorReadyTranslate: "¿Listo para traducir?",
    subtitleEditorReadyTranslateDesc:
      "Traduce subtítulos a 39 idiomas compatibles con IA manteniendo tono y contexto.",
    subtitleEditorExploreTranslation: "Explorar traducción con IA →",
    subtitleEditorFreeNote:
      "La edición de subtítulos es gratis. Las funciones IA son opcionales y usan créditos.",
    videoDownloaderTitle: "Descargador gratuito de videos para YouTube y más",
    videoDownloaderSubtitle:
      "Translator facilita descargar videos desde una URL, guardarlos en alta calidad y pasar directo a la edición de subtítulos o a la traducción con IA.",
    videoDownloaderFeature1Title: "Pega una URL y obtén un archivo limpio",
    videoDownloaderFeature1Desc:
      "Obtén un video de YouTube u otras plataformas populares con un solo enlace.",
    videoDownloaderFeature2Title: "Elige la calidad que necesitas",
    videoDownloaderFeature2Desc:
      "Selecciona entre resoluciones y opciones de audio disponibles para trabajar más rápido con subtítulos.",
    videoDownloaderFeature3Title: "Listo para subtítulos al instante",
    videoDownloaderFeature3Desc:
      "Descarga archivos MP4 optimizados para edición, traducción y exportación.",
    videoDownloaderHowItWorks: "Cómo funciona",
    videoDownloaderStep1: "Pega la URL del video en Translator.",
    videoDownloaderStep2: "Elige la calidad y descarga.",
    videoDownloaderStep3: "Edita o traduce subtítulos al instante.",
    videoDownloaderPlatforms: "Plataformas compatibles",
    videoDownloaderPlatformsDesc:
      "Descarga desde YouTube y otras plataformas populares que permiten descargas directas por URL.",
    videoDownloaderPlatform1: "YouTube",
    videoDownloaderPlatform2: "Otras plataformas principales (la disponibilidad varía)",
    videoDownloaderQuality: "Opciones de calidad",
    videoDownloaderQualityDesc:
      "Elige la resolución que mejor encaje con tu flujo, desde borradores rápidos hasta exportaciones de alta calidad.",
    videoDownloaderQuality1: "Múltiples resoluciones cuando están disponibles",
    videoDownloaderQuality2: "Exportaciones de solo audio para transcripción",
    videoDownloaderPairEditor: "Combínalo con el editor de subtítulos",
    videoDownloaderPairEditorDesc:
      "Sin salir de Translator, sincroniza y fusiona subtítulos, edita tiempos y exporta archivos SRT.",
    videoDownloaderTranslateAi: "Traduce subtítulos con IA",
    videoDownloaderTranslateAiDesc:
      "Traduce subtítulos a 39 idiomas compatibles con GPT y añade revisión opcional con Claude en el modo Calidad.",
    videoDownloaderFreeNote:
      "La descarga es gratis. Las funciones IA (transcripción, traducción, resumen y doblaje) usan créditos.",
    faqTitle: "Preguntas frecuentes",
    faqSubtitle:
      "Todo lo que necesitas saber sobre Translator, desde formatos de subtítulos hasta créditos de traducción con IA.",
    faqQ1: "¿Translator es gratis?",
    faqA1:
      "Sí. La descarga de videos y la edición de subtítulos son gratis. La transcripción, traducción, resumen y el doblaje con IA usan créditos de pago.",
    faqQ2: "¿Qué formatos de subtítulos admiten?",
    faqA2: "Translator admite actualmente importación y exportación de SRT.",
    faqQ3: "¿Puedo traducir subtítulos de YouTube?",
    faqA3:
      "Sí. Descarga el video, importa o genera subtítulos y tradúcelos con IA.",
    faqQ4: "¿Qué plataformas son compatibles?",
    faqA4:
      "Translator está disponible para macOS (Apple Silicon + Intel) y Windows.",
    faqQ5: "¿Cuáles son los requisitos del sistema?",
    faqA5:
      "Se recomienda un equipo moderno con macOS o Windows y suficiente espacio para archivos de video.",
    faqQ6: "¿Necesito conexión a internet?",
    faqA6:
      "Se requiere internet para la transcripción, traducción, resumen y doblaje con IA. Las herramientas gratuitas de edición funcionan sin conexión.",
    faqQ7: "¿Qué tan precisa es la traducción con IA?",
    faqA7:
      "Translator usa GPT para la traducción base y el modo Calidad puede añadir una revisión opcional con Claude para mejorar matices.",
    faqQ8: "¿Ofrecen suscripción?",
    faqA8:
      "No. No se requiere suscripción. Las funciones IA se cobran mediante créditos de pago por uso.",
    faqQ9: "¿Puedo incrustar subtítulos en el video?",
    faqA9:
      "Sí. Puedes exportar archivos de subtítulos o incrustarlos directamente en el video.",
    faqQ10: "¿Dónde obtengo ayuda?",
    faqA10:
      "Visita la página de contacto o escríbenos por correo si necesitas ayuda con la configuración o los precios.",
    faqReadyTranslate: "¿Listo para traducir?",
    faqReadyTranslateDesc:
      "Conoce más sobre la traducción con IA y los idiomas compatibles.",
    faqNeedPricing: "¿Necesitas ver los precios?",
    faqNeedPricingDesc: "Mira qué es gratis y cómo funcionan los créditos IA.",
    faqViewPricing: "Ver precios →",
    aboutTitle: "Acerca de Stage5 Tools",
    aboutSubtitle:
      "Stage5 crea Translator y Echo, dos productos pensados para ayudar a la gente a salir de barreras de idioma, bucles de recomendación y piloto automático mental.",
    aboutMission: "Nuestra misión",
    aboutMissionDesc:
      "Crear productos que ayuden a la gente a ir más allá de los límites en los que suelen quedarse por idioma, feeds y hábitos automáticos.",
    aboutVision: "Nuestra visión",
    aboutVisionDesc:
      "Un mundo en el que las barreras de idioma, los bucles del feed y el piloto automático mental limiten menos a la gente.",
    aboutBuiltFor: "Hecho para ampliar el alcance",
    aboutBuiltForDesc:
      "Translator ayuda a superar los límites de idioma y recomendación alrededor del video. Echo ayuda a salir de los propios bucles mentales con una buena pregunta al día.",
    aboutContactUs: "Contáctanos",
    aboutContactUsDesc:
      "¿Preguntas sobre Translator, alianzas o planes empresariales?",
    aboutGetInTouch: "Ponte en contacto →",
    contactTitle: "Contacta a Stage5 Tools",
    contactSubtitle:
      "¿Tienes preguntas sobre Translator? Podemos ayudarte con configuración, precios, alianzas y consultas empresariales.",
    contactEmail: "Envíanos un correo",
    contactEmailDesc:
      "Para consultas generales, soporte u oportunidades de colaboración.",
    contactEnterprise: "Consultas empresariales",
    contactEnterpriseDesc:
      "¿Necesitas precios por volumen o flujos de trabajo para equipos? Cuéntanos tus requisitos.",
  },
  ja: {
    download: "Mac 版をダウンロード",
    downloadWindows: "Windows 版をダウンロード",
    homeDownloadRecommended: "この端末におすすめ",
    homeDownloadChoose: "ダウンロードを選ぶ",
    homeDownloadAllVersions: "すべてのバージョンを見る →",
    footer:
      "動画のダウンロードと字幕編集・結合は無料 • AI 文字起こし、翻訳、要約、吹き替えはクレジットを使用します",
    copyright: "© 2026 Stage5 Tools. All rights reserved.",
    notFound: "ページが見つかりません",
    goHome: "ホームへ戻る",
    navVideoDiscovery: "動画発見",
    navDubbing: "吹き替え",
    navVideoDownloader: "動画ダウンローダー",
    navSubtitleEditor: "字幕エディター",
    navAiTranslation: "AI 翻訳",
    navPricing: "料金",
    navFaq: "FAQ",
    navAbout: "概要",
    navContact: "お問い合わせ",
    navDownload: "ダウンロード",
    footerProduct: "製品",
    footerResources: "リソース",
    footerCompany: "会社",
    footerLegal: "法務",
    footerSupportedLanguages: "対応言語",
    footerAboutStage5: "Stage5 Tools について",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約",
    footerQuestions: "質問はメールで",
    breadcrumbHome: "ホーム",
    langSpanish: "スペイン語",
    langKorean: "韓国語",
    langJapanese: "日本語",
    langChinese: "中国語",
    langFrench: "フランス語",
    langGerman: "ドイツ語",
    langPortuguese: "ポルトガル語",
    langArabic: "アラビア語",
    langBengali: "ベンガル語",
    langCzech: "チェコ語",
    langDanish: "デンマーク語",
    langDutch: "オランダ語",
    langEnglish: "英語",
    langFinnish: "フィンランド語",
    langGreek: "ギリシャ語",
    langHebrew: "ヘブライ語",
    langHindi: "ヒンディー語",
    langHungarian: "ハンガリー語",
    langIndonesian: "インドネシア語",
    langItalian: "イタリア語",
    langMalay: "マレー語",
    langNorwegian: "ノルウェー語",
    langPolish: "ポーランド語",
    langRomanian: "ルーマニア語",
    langRussian: "ロシア語",
    langSwedish: "スウェーデン語",
    langTagalog: "タガログ語",
    langThai: "タイ語",
    langTurkish: "トルコ語",
    langUrdu: "ウルドゥー語",
    langUkrainian: "ウクライナ語",
    langVietnamese: "ベトナム語",
    pricingTitle: "動画翻訳のシンプルな料金",
    pricingSubtitle:
      "Translator は無料でダウンロードできます。動画ダウンロード、字幕編集、SRT 書き出しは現在無料です。AI 文字起こし、翻訳、吹き替えは従量課金のクレジットを使います。",
    pricingFreeLabel: "無料",
    pricingFreePrice: "$0",
    pricingFreeDesc: "クリエイターやチーム向けの基本動画ツール。",
    pricingFreeItem1: "URL から動画をダウンロード",
    pricingFreeItem2: "字幕の編集と同期",
    pricingFreeItem3: "字幕トラックの結合",
    pricingFreeItem4: "SRT ファイルを書き出し",
    pricingCreditsLabel: "AI クレジット",
    pricingCreditsPrice: "使った分だけ",
    pricingCreditsDesc:
      "アプリ内でクレジットを購入し、AI が必要なときだけ使えます。",
    pricingCreditsItem1: "Whisper による AI 文字起こし",
    pricingCreditsItem2: "39 の対応言語への字幕翻訳",
    pricingCreditsItem3: "AI 吹き替えと文字起こし要約（任意）",
    pricingCreditsItem4: "サブスクリプション不要",
    pricingExamplePacks: "クレジットパックの例",
    pricingPack1: "$1 ≈ 50 分の動画",
    pricingPack2: "$5 ≈ 8 時間の動画",
    pricingPack3: "$10 ≈ 18 時間の動画",
    pricingPack4: "$50 ≈ 127 時間の動画",
    pricingByoNote:
      "$10 の一度きりの支払いで BYO API キーを有効にし、プロバイダの API コストを直接支払えます。",
    pricingFreeQuestion: "無料で使える範囲は？",
    pricingFreeAnswer:
      "ダウンロードと字幕編集ツールはすべて無料です。AI の文字起こし、翻訳、要約、吹き替えを使うときだけ料金がかかります。",
    pricingExploreEditor: "字幕エディターを見る →",
    pricingCostQuestion: "費用見積もりが必要ですか？",
    pricingCostAnswer:
      "翻訳クレジットは動画の長さと言語数に応じて変わります。大規模チームのワークフローはお問い合わせください。",
    pricingContactSales: "営業に問い合わせる →",
    translateTitle: "字幕向け AI 動画翻訳",
    translateSubtitle:
      "YouTube 字幕やローカル SRT ファイルを 39 の対応言語に翻訳します。基本翻訳は GPT、品質モードでは任意で Claude レビューを追加できます。",
    translateFeature1Title: "GPT 翻訳 + 任意の Claude レビュー",
    translateFeature1Desc:
      "通常は GPT を使い、品質モードではより自然な表現のために Claude レビューを追加できます。",
    translateFeature2Title: "39 言語に対応",
    translateFeature2Desc:
      "字幕をスペイン語、韓国語、日本語、中国語などへ翻訳できます。",
    translateFeature3Title: "字幕ワークフロー向けに設計",
    translateFeature3Desc:
      "タイミングを保ったまま、すぐ使える SRT を書き出したり動画に焼き込んだりできます。",
    translateHowItWorks: "AI 字幕翻訳の流れ",
    translateStep1: "字幕を読み込むか生成します。",
    translateStep2: "翻訳先の言語を選びます。",
    translateStep3: "AI 翻訳を確認して書き出します。",
    translateLanguagesTitle: "これらの言語に翻訳",
    translateLanguagesDesc:
      "主要な視聴者に向けて専用言語ページでアプローチできます。",
    translateNeedSubtitles: "先に字幕が必要ですか？",
    translateNeedSubtitlesDesc:
      "翻訳前に字幕エディターで字幕を読み込み、整え、同期できます。",
    translateGoToEditor: "字幕エディターへ →",
    translateStartWithUrl: "動画 URL から始める",
    translateStartWithUrlDesc:
      "YouTube や他のソースから動画をダウンロードして、すぐ翻訳を始められます。",
    translateGoToDownloader: "動画ダウンローダーへ →",
    translateCreditsNote:
      "AI 翻訳はクレジットを使います。無料ツールは無料のままです。",
    subtitleEditorTitle: "SRT 用の無料字幕エディター",
    subtitleEditorSubtitle:
      "字幕を整え、タイミングを同期し、トラックを一か所で結合できます。Translator は現代の動画チーム向けに作られた字幕エディターです。",
    subtitleEditorFeature1Title: "タイムライン精度",
    subtitleEditorFeature1Desc:
      "ミリ秒単位のタイムコード操作で字幕タイミングを正確に調整できます。",
    subtitleEditorFeature2Title: "トラックを結合して整える",
    subtitleEditorFeature2Desc:
      "複数の字幕ファイルを、仕上がった一つのトラックにまとめます。",
    subtitleEditorFeature3Title: "主要フォーマットを編集",
    subtitleEditorFeature3Desc: "SRT を安心して読み込み・書き出しできます。",
    subtitleEditorWorkflow: "字幕編集の流れ",
    subtitleEditorStep1: "字幕を読み込むか、AI 文字起こしで自動生成します。",
    subtitleEditorStep2: "動画を見ながらテキスト、タイミング、書式を編集します。",
    subtitleEditorStep3: "きれいな字幕ファイルを書き出すか、動画に焼き込みます。",
    subtitleEditorNeedVideo: "先に動画が必要ですか？",
    subtitleEditorNeedVideoDesc:
      "YouTube などから動画をダウンロードして、すぐに字幕編集を始められます。",
    subtitleEditorReadyTranslate: "翻訳する準備はできましたか？",
    subtitleEditorReadyTranslateDesc:
      "トーンや文脈を保ちながら、AI で字幕を 39 の対応言語に翻訳できます。",
    subtitleEditorExploreTranslation: "AI 翻訳を見る →",
    subtitleEditorFreeNote:
      "字幕編集は無料です。AI 機能は任意で、クレジット制です。",
    videoDownloaderTitle: "YouTube など向けの無料動画ダウンローダー",
    videoDownloaderSubtitle:
      "Translator なら URL から動画を簡単にダウンロードし、高画質で保存して、すぐに字幕編集や AI 翻訳へ進めます。",
    videoDownloaderFeature1Title: "URL を貼るだけでクリーンなファイルを取得",
    videoDownloaderFeature1Desc:
      "1 本のリンクで YouTube や人気プラットフォームの動画を取得できます。",
    videoDownloaderFeature2Title: "必要な画質を選ぶ",
    videoDownloaderFeature2Desc:
      "字幕作業を速くするために、利用可能な解像度や音声オプションから選べます。",
    videoDownloaderFeature3Title: "すぐ字幕作業に入れる",
    videoDownloaderFeature3Desc:
      "編集、翻訳、書き出し向けに最適化された MP4 をダウンロードできます。",
    videoDownloaderHowItWorks: "使い方",
    videoDownloaderStep1: "Translator に動画 URL を貼り付けます。",
    videoDownloaderStep2: "画質を選んでダウンロードします。",
    videoDownloaderStep3: "すぐ字幕を編集または翻訳します。",
    videoDownloaderPlatforms: "対応プラットフォーム",
    videoDownloaderPlatformsDesc:
      "URL ベースの直接ダウンロードを許可する YouTube などの主要プラットフォームから取得できます。",
    videoDownloaderPlatform1: "YouTube",
    videoDownloaderPlatform2: "その他の主要プラットフォーム（利用可否は変動）",
    videoDownloaderQuality: "画質オプション",
    videoDownloaderQualityDesc:
      "素早いドラフトから高品質書き出しまで、ワークフローに合う解像度を選べます。",
    videoDownloaderQuality1: "可能な場合は複数解像度に対応",
    videoDownloaderQuality2: "文字起こし用の音声のみ書き出し",
    videoDownloaderPairEditor: "字幕エディターと組み合わせる",
    videoDownloaderPairEditorDesc:
      "Translator から離れずに字幕を同期・結合し、タイミングを編集して SRT を書き出せます。",
    videoDownloaderTranslateAi: "AI で字幕を翻訳",
    videoDownloaderTranslateAiDesc:
      "GPT で 39 の対応言語へ字幕翻訳し、品質モードでは Claude レビューを追加できます。",
    videoDownloaderFreeNote:
      "ダウンロードは無料です。AI 機能（文字起こし、翻訳、要約、吹き替え）はクレジットを使います。",
    faqTitle: "よくある質問",
    faqSubtitle:
      "字幕形式から AI 翻訳クレジットまで、Translator について知っておきたいことをまとめました。",
    faqQ1: "Translator は無料ですか？",
    faqA1:
      "はい。動画ダウンロードと字幕編集は無料です。AI の文字起こし、翻訳、要約、吹き替えは有料クレジットを使います。",
    faqQ2: "どの字幕形式に対応していますか？",
    faqA2: "Translator は現在 SRT の読み込みと書き出しに対応しています。",
    faqQ3: "YouTube 字幕を翻訳できますか？",
    faqA3:
      "はい。動画をダウンロードし、字幕を読み込むか生成して、AI で翻訳できます。",
    faqQ4: "どのプラットフォームに対応していますか？",
    faqA4:
      "Translator は macOS（Apple Silicon / Intel）と Windows に対応しています。",
    faqQ5: "動作環境は？",
    faqA5:
      "動画ファイルを保存できる十分な容量を持つ最新の macOS または Windows マシンを推奨します。",
    faqQ6: "インターネット接続は必要ですか？",
    faqA6:
      "AI の文字起こし、翻訳、要約、吹き替えにはインターネットが必要です。無料の編集ツールはオフラインでも使えます。",
    faqQ7: "AI 翻訳の精度はどのくらいですか？",
    faqA7:
      "Translator は基本翻訳に GPT を使い、品質モードで任意の Claude レビューを追加してニュアンスを改善できます。",
    faqQ8: "サブスクリプションはありますか？",
    faqA8:
      "ありません。サブスクリプション不要で、AI 機能は従量課金クレジットです。",
    faqQ9: "動画に字幕を焼き込めますか？",
    faqA9:
      "はい。字幕ファイルを書き出すことも、動画に直接埋め込むこともできます。",
    faqQ10: "サポートはどこで受けられますか？",
    faqA10:
      "設定や料金で困ったら、問い合わせページを見るかメールでご連絡ください。",
    faqReadyTranslate: "翻訳する準備はできましたか？",
    faqReadyTranslateDesc:
      "AI 翻訳や対応言語について詳しく見てみましょう。",
    faqNeedPricing: "料金の概要が必要ですか？",
    faqNeedPricingDesc: "無料でできることと AI クレジットの仕組みを確認できます。",
    faqViewPricing: "料金を見る →",
    aboutTitle: "Stage5 Tools について",
    aboutSubtitle:
      "Stage5 は、言語の壁、推薦ループ、思考の惰性を越えやすくするために Translator と Echo を作っています。",
    aboutMission: "私たちのミッション",
    aboutMissionDesc:
      "言語、フィード、いつもの思考パターンが作る限界を越えやすくする製品を作ることです。",
    aboutVision: "私たちのビジョン",
    aboutVisionDesc:
      "言語の壁、フィードのループ、思考のオートパイロットが人を縛りにくい世界。",
    aboutBuiltFor: "届く範囲を広げるために",
    aboutBuiltForDesc:
      "Translator は動画の言語と推薦の限界を越えるのを助け、Echo は1日1つの良い問いで自分の思考ループを抜けるのを助けます。",
    aboutContactUs: "お問い合わせ",
    aboutContactUsDesc:
      "Translator、提携、または企業向けプランについて質問がありますか？",
    aboutGetInTouch: "連絡する →",
    contactTitle: "Stage5 Tools へのお問い合わせ",
    contactSubtitle:
      "Translator について質問がありますか？ 導入、料金、提携、法人向けのご相談をサポートします。",
    contactEmail: "メールで問い合わせる",
    contactEmailDesc:
      "一般的なお問い合わせ、サポート、または提携のご相談はこちら。",
    contactEnterprise: "法人向けのお問い合わせ",
    contactEnterpriseDesc:
      "ボリューム料金やチーム向けワークフローが必要ですか？ 要件をお知らせください。",
  },
  zh: {
    download: "下载 Mac 版",
    downloadWindows: "下载 Windows 版",
    homeDownloadRecommended: "推荐用于你的设备",
    homeDownloadChoose: "选择下载版本",
    homeDownloadAllVersions: "查看所有版本 →",
    footer:
      "视频下载和字幕编辑/合并免费 • AI 转录、翻译、摘要和配音按使用消耗积分",
    copyright: "© 2026 Stage5 Tools. 保留所有权利。",
    notFound: "页面未找到",
    goHome: "返回首页",
    navVideoDiscovery: "视频发现",
    navDubbing: "配音",
    navVideoDownloader: "视频下载器",
    navSubtitleEditor: "字幕编辑器",
    navAiTranslation: "AI 翻译",
    navPricing: "价格",
    navFaq: "常见问题",
    navAbout: "关于我们",
    navContact: "联系",
    navDownload: "下载",
    footerProduct: "产品",
    footerResources: "资源",
    footerCompany: "公司",
    footerLegal: "法律",
    footerSupportedLanguages: "支持的语言",
    footerAboutStage5: "关于 Stage5 Tools",
    footerPrivacy: "隐私政策",
    footerTerms: "服务条款",
    footerQuestions: "有问题？请发邮件到",
    breadcrumbHome: "首页",
    langSpanish: "西班牙语",
    langKorean: "韩语",
    langJapanese: "日语",
    langChinese: "中文",
    langFrench: "法语",
    langGerman: "德语",
    langPortuguese: "葡萄牙语",
    langArabic: "阿拉伯语",
    langBengali: "孟加拉语",
    langCzech: "捷克语",
    langDanish: "丹麦语",
    langDutch: "荷兰语",
    langEnglish: "英语",
    langFinnish: "芬兰语",
    langGreek: "希腊语",
    langHebrew: "希伯来语",
    langHindi: "印地语",
    langHungarian: "匈牙利语",
    langIndonesian: "印度尼西亚语",
    langItalian: "意大利语",
    langMalay: "马来语",
    langNorwegian: "挪威语",
    langPolish: "波兰语",
    langRomanian: "罗马尼亚语",
    langRussian: "俄语",
    langSwedish: "瑞典语",
    langTagalog: "他加禄语",
    langThai: "泰语",
    langTurkish: "土耳其语",
    langUrdu: "乌尔都语",
    langUkrainian: "乌克兰语",
    langVietnamese: "越南语",
    pricingTitle: "视频翻译的简单定价",
    pricingSubtitle:
      "Translator 可免费下载。视频下载、字幕编辑和 SRT 导出目前免费。AI 转录、翻译和配音按使用消耗积分。",
    pricingFreeLabel: "免费",
    pricingFreePrice: "$0",
    pricingFreeDesc: "面向创作者和团队的基础视频工具。",
    pricingFreeItem1: "从 URL 下载视频",
    pricingFreeItem2: "编辑并同步字幕",
    pricingFreeItem3: "合并字幕轨道",
    pricingFreeItem4: "导出 SRT 文件",
    pricingCreditsLabel: "AI 积分",
    pricingCreditsPrice: "按使用付费",
    pricingCreditsDesc:
      "在应用内购买积分，只在需要 AI 时使用。",
    pricingCreditsItem1: "使用 Whisper 进行 AI 转录",
    pricingCreditsItem2: "将字幕翻译为 39 种支持语言",
    pricingCreditsItem3: "可选 AI 配音和转录摘要",
    pricingCreditsItem4: "无需订阅",
    pricingExamplePacks: "积分包示例",
    pricingPack1: "$1 ≈ 50 分钟视频",
    pricingPack2: "$5 ≈ 8 小时视频",
    pricingPack3: "$10 ≈ 18 小时视频",
    pricingPack4: "$50 ≈ 127 小时视频",
    pricingByoNote:
      "一次性支付 $10 解锁 BYO API 密钥，并直接承担服务商 API 成本。",
    pricingFreeQuestion: "免费包含哪些内容？",
    pricingFreeAnswer:
      "所有下载和字幕编辑工具都免费。只有在使用 AI 转录、翻译、摘要或配音时才需要付费。",
    pricingExploreEditor: "查看字幕编辑器 →",
    pricingCostQuestion: "需要帮助估算成本？",
    pricingCostAnswer:
      "翻译积分会随着视频时长和语言数量变化。大型团队工作流欢迎联系我们。",
    pricingContactSales: "联系销售 →",
    translateTitle: "面向字幕的 AI 视频翻译",
    translateSubtitle:
      "将 YouTube 字幕或本地 SRT 文件翻译成 39 种支持语言。GPT 负责基础翻译，质量模式可选增加 Claude 复审。",
    translateFeature1Title: "GPT 翻译 + 可选 Claude 复审",
    translateFeature1Desc:
      "默认使用 GPT，在质量模式下可选添加 Claude 复审以获得更高保真表达。",
    translateFeature2Title: "支持 39 种语言",
    translateFeature2Desc:
      "把字幕翻译成西班牙语、韩语、日语、中文等更多语言。",
    translateFeature3Title: "专为字幕工作流打造",
    translateFeature3Desc:
      "保持时间轴不变，导出可直接使用的 SRT 文件，或把字幕烧录进视频。",
    translateHowItWorks: "AI 字幕翻译如何工作",
    translateStep1: "导入或生成字幕。",
    translateStep2: "选择目标语言。",
    translateStep3: "检查 AI 翻译并导出。",
    translateLanguagesTitle: "翻译到这些语言",
    translateLanguagesDesc:
      "通过专门的语言页面触达最大受众。",
    translateNeedSubtitles: "需要先有字幕？",
    translateNeedSubtitlesDesc:
      "在翻译前，使用字幕编辑器导入、清理并同步字幕。",
    translateGoToEditor: "前往字幕编辑器 →",
    translateStartWithUrl: "从视频 URL 开始",
    translateStartWithUrlDesc:
      "下载 YouTube 视频和其他来源，立刻开始翻译。",
    translateGoToDownloader: "前往视频下载器 →",
    translateCreditsNote:
      "AI 翻译会消耗积分。免费工具仍然免费。",
    subtitleEditorTitle: "免费的 SRT 字幕编辑器",
    subtitleEditorSubtitle:
      "在一个地方清理字幕、同步时间并合并轨道。Translator 是为现代视频团队打造的字幕编辑器。",
    subtitleEditorFeature1Title: "时间轴精度",
    subtitleEditorFeature1Desc:
      "通过毫秒级时间码控制精确调整字幕时序。",
    subtitleEditorFeature2Title: "合并并清理轨道",
    subtitleEditorFeature2Desc:
      "把多个字幕文件合并成一条干净的成品轨道。",
    subtitleEditorFeature3Title: "编辑常用格式",
    subtitleEditorFeature3Desc: "放心导入和导出 SRT。",
    subtitleEditorWorkflow: "字幕编辑流程",
    subtitleEditorStep1: "导入字幕或通过 AI 转录自动生成。",
    subtitleEditorStep2: "在预览视频时编辑文本、时间和格式。",
    subtitleEditorStep3: "导出干净的字幕文件或将字幕烧录到视频中。",
    subtitleEditorNeedVideo: "需要先有视频？",
    subtitleEditorNeedVideoDesc:
      "从 YouTube 和其他平台下载视频，然后立即开始编辑字幕。",
    subtitleEditorReadyTranslate: "准备开始翻译？",
    subtitleEditorReadyTranslateDesc:
      "在保留语气和上下文的同时，用 AI 将字幕翻译成 39 种支持语言。",
    subtitleEditorExploreTranslation: "查看 AI 翻译 →",
    subtitleEditorFreeNote:
      "字幕编辑免费。AI 功能可选并按积分计费。",
    videoDownloaderTitle: "适用于 YouTube 等平台的免费视频下载器",
    videoDownloaderSubtitle:
      "Translator 让你可以轻松通过 URL 下载视频，以高质量保存，并立即进入字幕编辑或 AI 翻译。",
    videoDownloaderFeature1Title: "粘贴 URL，得到干净文件",
    videoDownloaderFeature1Desc:
      "通过一个链接即可抓取 YouTube 或其他主流平台的视频。",
    videoDownloaderFeature2Title: "选择你需要的质量",
    videoDownloaderFeature2Desc:
      "从可用分辨率和音频选项中选择，更快进入字幕工作。",
    videoDownloaderFeature3Title: "立即进入字幕流程",
    videoDownloaderFeature3Desc:
      "下载适合编辑、翻译和导出的 MP4 文件。",
    videoDownloaderHowItWorks: "使用方式",
    videoDownloaderStep1: "把视频 URL 粘贴到 Translator 中。",
    videoDownloaderStep2: "选择质量并下载。",
    videoDownloaderStep3: "立即编辑或翻译字幕。",
    videoDownloaderPlatforms: "支持的平台",
    videoDownloaderPlatformsDesc:
      "可从支持基于 URL 直接下载的 YouTube 和其他热门平台下载。",
    videoDownloaderPlatform1: "YouTube",
    videoDownloaderPlatform2: "其他主流平台（可用性会变化）",
    videoDownloaderQuality: "画质选项",
    videoDownloaderQualityDesc:
      "根据你的工作流选择合适分辨率，从快速草稿到高质量导出都能覆盖。",
    videoDownloaderQuality1: "有条件时支持多种分辨率",
    videoDownloaderQuality2: "用于转录的纯音频导出",
    videoDownloaderPairEditor: "搭配字幕编辑器使用",
    videoDownloaderPairEditorDesc:
      "无需离开 Translator，即可同步和合并字幕、编辑时间并导出 SRT 文件。",
    videoDownloaderTranslateAi: "用 AI 翻译字幕",
    videoDownloaderTranslateAiDesc:
      "用 GPT 将字幕翻译成 39 种支持语言，并在质量模式下可选增加 Claude 复审。",
    videoDownloaderFreeNote:
      "下载免费。AI 功能（转录、翻译、摘要、配音）会消耗积分。",
    faqTitle: "常见问题",
    faqSubtitle:
      "关于 Translator 的一切，从字幕格式到 AI 翻译积分，这里都有答案。",
    faqQ1: "Translator 可以免费使用吗？",
    faqA1:
      "可以。视频下载和字幕编辑免费。AI 转录、翻译、摘要和配音使用付费积分。",
    faqQ2: "支持哪些字幕格式？",
    faqA2: "Translator 目前支持 SRT 的导入和导出。",
    faqQ3: "可以翻译 YouTube 字幕吗？",
    faqA3:
      "可以。下载视频，导入或生成字幕，然后用 AI 翻译。",
    faqQ4: "支持哪些平台？",
    faqA4:
      "Translator 支持 macOS（Apple Silicon + Intel）和 Windows。",
    faqQ5: "系统要求是什么？",
    faqA5:
      "建议使用较新的 macOS 或 Windows 电脑，并具备足够的视频存储空间。",
    faqQ6: "需要联网吗？",
    faqA6:
      "AI 转录、翻译、摘要和配音需要联网。免费编辑工具可离线使用。",
    faqQ7: "AI 翻译有多准确？",
    faqA7:
      "Translator 使用 GPT 进行基础翻译，质量模式下可选增加 Claude 复审以改善细节和语气。",
    faqQ8: "有订阅制吗？",
    faqA8:
      "没有。无需订阅。AI 功能通过按使用计费的积分收费。",
    faqQ9: "可以把字幕烧录进视频吗？",
    faqA9:
      "可以。你可以导出字幕文件，也可以直接嵌入到视频中。",
    faqQ10: "在哪里获取帮助？",
    faqA10:
      "如果你需要配置或价格方面的帮助，请访问联系页面或给我们发邮件。",
    faqReadyTranslate: "准备开始翻译？",
    faqReadyTranslateDesc:
      "进一步了解 AI 翻译和支持的语言。",
    faqNeedPricing: "想先看看价格？",
    faqNeedPricingDesc: "了解哪些功能免费，以及 AI 积分如何工作。",
    faqViewPricing: "查看价格 →",
    aboutTitle: "关于 Stage5 Tools",
    aboutSubtitle:
      "Stage5 打造 Translator 和 Echo，两款产品都在帮助人们突破语言、推荐循环和思维惯性带来的限制。",
    aboutMission: "我们的使命",
    aboutMissionDesc:
      "打造能帮人走出语言、信息流和默认习惯限制的产品。",
    aboutVision: "我们的愿景",
    aboutVisionDesc:
      "一个语言障碍、信息流循环和思维惯性不再那么容易困住人的世界。",
    aboutBuiltFor: "为了让触达范围变大",
    aboutBuiltForDesc:
      "Translator 帮人突破视频里的语言和推荐限制，Echo 用每天一个好问题帮人跳出自己的思维循环。",
    aboutContactUs: "联系我们",
    aboutContactUsDesc:
      "有关于 Translator、合作或企业方案的问题吗？",
    aboutGetInTouch: "开始联系 →",
    contactTitle: "联系 Stage5 Tools",
    contactSubtitle:
      "对 Translator 有问题吗？我们可以帮助你完成配置、价格、合作和企业咨询。",
    contactEmail: "给我们发邮件",
    contactEmailDesc:
      "适用于一般咨询、支持或合作机会。",
    contactEnterprise: "企业咨询",
    contactEnterpriseDesc:
      "需要批量定价或团队工作流？请告诉我们你的需求。",
  },
  fr: {
    download: "Télécharger pour Mac",
    downloadWindows: "Télécharger pour Windows",
    homeDownloadRecommended: "Recommandé pour votre appareil",
    homeDownloadChoose: "Choisir votre téléchargement",
    homeDownloadAllVersions: "Voir toutes les versions →",
    footer:
      "Le téléchargement de vidéos et l’édition/fusion des sous-titres sont gratuits • La transcription, la traduction, le résumé et le doublage IA utilisent des crédits",
    copyright: "© 2026 Stage5 Tools. Tous droits réservés.",
    notFound: "Page introuvable",
    goHome: "Retour à l’accueil",
    navVideoDiscovery: "Découverte vidéo",
    navDubbing: "Doublage",
    navVideoDownloader: "Téléchargeur vidéo",
    navSubtitleEditor: "Éditeur de sous-titres",
    navAiTranslation: "Traduction IA",
    navPricing: "Tarifs",
    navFaq: "FAQ",
    navAbout: "À propos",
    navContact: "Contact",
    navDownload: "Télécharger",
    footerProduct: "Produit",
    footerResources: "Ressources",
    footerCompany: "Entreprise",
    footerLegal: "Mentions légales",
    footerSupportedLanguages: "Langues prises en charge",
    footerAboutStage5: "À propos de Stage5 Tools",
    footerPrivacy: "Politique de confidentialité",
    footerTerms: "Conditions d’utilisation",
    footerQuestions: "Des questions ? Écrivez à",
    breadcrumbHome: "Accueil",
    pricingTitle: "Une tarification simple pour la traduction vidéo",
    pricingSubtitle:
      "Translator est téléchargeable gratuitement. Le téléchargement vidéo, l’édition de sous-titres et l’export SRT sont actuellement gratuits. La transcription, la traduction et le doublage par IA utilisent des crédits à la demande.",
    pricingFreeLabel: "Gratuit",
    pricingFreePrice: "0 $",
    pricingFreeDesc: "Les outils vidéo essentiels pour les créateurs et les équipes.",
    pricingFreeItem1: "Télécharger des vidéos depuis des URL",
    pricingFreeItem2: "Modifier et synchroniser les sous-titres",
    pricingFreeItem3: "Fusionner des pistes de sous-titres",
    pricingFreeItem4: "Exporter des fichiers SRT",
    pricingCreditsLabel: "Crédits IA",
    pricingCreditsPrice: "Paiement à l’usage",
    pricingCreditsDesc:
      "Achetez des crédits dans l’application et dépensez-les uniquement lorsque vous avez besoin d’IA.",
    pricingCreditsItem1: "Transcription IA avec Whisper",
    pricingCreditsItem2: "Traduction des sous-titres vers 39 langues prises en charge",
    pricingCreditsItem3: "Doublage IA optionnel + résumés de transcription",
    pricingCreditsItem4: "Aucun abonnement requis",
    pricingExamplePacks: "Exemples de packs de crédits",
    pricingPack1: "1 $ ≈ 50 minutes de vidéo",
    pricingPack2: "5 $ ≈ 8 heures de vidéo",
    pricingPack3: "10 $ ≈ 18 heures de vidéo",
    pricingPack4: "50 $ ≈ 127 heures de vidéo",
    pricingByoNote:
      "Débloquez vos propres clés API pour un paiement unique de 10 $ et réglez directement les coûts API du fournisseur.",
    pricingFreeQuestion: "Qu’est-ce qui est inclus gratuitement ?",
    pricingFreeAnswer:
      "Tous les outils de téléchargement et d’édition de sous-titres sont gratuits. Vous ne payez que lorsque vous utilisez la transcription, la traduction, le résumé ou le doublage par IA.",
    pricingExploreEditor: "Découvrir l’éditeur de sous-titres →",
    pricingCostQuestion: "Besoin d’aide pour estimer le coût ?",
    pricingCostAnswer:
      "Les crédits de traduction évoluent selon la durée de la vidéo et le nombre de langues. Contactez-nous pour les workflows de grandes équipes.",
    pricingContactSales: "Contacter l’équipe →",
    translateTitle: "Traduction vidéo par IA pour les sous-titres",
    translateSubtitle:
      "Traduisez des sous-titres YouTube ou des fichiers SRT locaux vers 39 langues prises en charge. GPT gère la traduction de base, et le mode Qualité peut ajouter une relecture Claude en option.",
    translateFeature1Title: "Traduction GPT + relecture Claude en option",
    translateFeature1Desc:
      "Utilise GPT par défaut, avec une relecture Claude facultative en mode Qualité pour une formulation plus fidèle.",
    translateFeature2Title: "39 langues prises en charge",
    translateFeature2Desc:
      "Traduisez vos sous-titres en espagnol, coréen, japonais, chinois et bien plus encore.",
    translateFeature3Title: "Conçu pour les workflows de sous-titres",
    translateFeature3Desc:
      "Conservez le minutage intact et exportez des fichiers SRT prêts à l’emploi, ou incrustez les sous-titres dans la vidéo.",
    translateHowItWorks: "Comment fonctionne la traduction IA des sous-titres",
    translateStep1: "Importez ou générez des sous-titres.",
    translateStep2: "Choisissez votre langue cible.",
    translateStep3: "Relisez la traduction IA puis exportez.",
    translateLanguagesTitle: "Traduire vers ces langues",
    translateLanguagesDesc:
      "Ciblez les plus grandes audiences avec des pages dédiées à chaque langue.",
    translateNeedSubtitles: "Besoin de sous-titres d’abord ?",
    translateNeedSubtitlesDesc:
      "Utilisez l’éditeur de sous-titres pour importer, nettoyer et synchroniser vos sous-titres avant la traduction.",
    translateGoToEditor: "Aller à l’éditeur de sous-titres →",
    translateStartWithUrl: "Commencer avec une URL vidéo",
    translateStartWithUrlDesc:
      "Téléchargez des vidéos YouTube et d’autres sources pour commencer à traduire immédiatement.",
    translateGoToDownloader: "Aller au téléchargeur vidéo →",
    translateCreditsNote:
      "La traduction IA utilise des crédits. Les outils gratuits restent gratuits.",
    subtitleEditorTitle: "Éditeur de sous-titres SRT gratuit",
    subtitleEditorSubtitle:
      "Nettoyez les sous-titres, synchronisez le timing et fusionnez les pistes au même endroit. Translator est l’éditeur de sous-titres conçu pour les équipes vidéo modernes.",
    subtitleEditorFeature1Title: "Précision sur la timeline",
    subtitleEditorFeature1Desc:
      "Ajustez le timing des sous-titres avec des contrôles de timecode à la milliseconde près.",
    subtitleEditorFeature2Title: "Fusionner et nettoyer les pistes",
    subtitleEditorFeature2Desc:
      "Combinez plusieurs fichiers de sous-titres en une seule piste propre et finalisée.",
    subtitleEditorFeature3Title: "Modifier les formats courants",
    subtitleEditorFeature3Desc:
      "Importez et exportez des fichiers SRT en toute confiance.",
    subtitleEditorWorkflow: "Workflow d’édition des sous-titres",
    subtitleEditorStep1:
      "Importez des sous-titres ou générez-les automatiquement avec la transcription IA.",
    subtitleEditorStep2:
      "Modifiez le texte, le timing et le format tout en prévisualisant la vidéo.",
    subtitleEditorStep3:
      "Exportez des fichiers de sous-titres propres ou incrustez les sous-titres dans la vidéo.",
    subtitleEditorNeedVideo: "Besoin d’une vidéo d’abord ?",
    subtitleEditorNeedVideoDesc:
      "Téléchargez des vidéos depuis YouTube et d’autres plateformes, puis modifiez les sous-titres immédiatement.",
    subtitleEditorReadyTranslate: "Prêt à traduire ?",
    subtitleEditorReadyTranslateDesc:
      "Traduisez les sous-titres vers 39 langues prises en charge avec l’IA tout en préservant le ton et le contexte.",
    subtitleEditorExploreTranslation: "Découvrir la traduction IA →",
    subtitleEditorFreeNote:
      "L’édition des sous-titres est gratuite. Les fonctions IA sont optionnelles et basées sur des crédits.",
    videoDownloaderTitle: "Téléchargeur vidéo gratuit pour YouTube et plus encore",
    videoDownloaderSubtitle:
      "Translator vous permet de télécharger facilement des vidéos depuis une URL, de les enregistrer en haute qualité, puis de passer directement à l’édition de sous-titres ou à la traduction IA.",
    videoDownloaderFeature1Title: "Collez une URL, obtenez un fichier propre",
    videoDownloaderFeature1Desc:
      "Récupérez une vidéo depuis YouTube ou d’autres plateformes populaires à partir d’un simple lien.",
    videoDownloaderFeature2Title: "Choisissez la qualité qu’il vous faut",
    videoDownloaderFeature2Desc:
      "Sélectionnez la résolution et les options audio disponibles pour accélérer le travail sur les sous-titres.",
    videoDownloaderFeature3Title: "Prêt immédiatement pour les sous-titres",
    videoDownloaderFeature3Desc:
      "Téléchargez des fichiers MP4 optimisés pour l’édition, la traduction et l’export.",
    videoDownloaderHowItWorks: "Comment ça marche",
    videoDownloaderStep1: "Collez l’URL de la vidéo dans Translator.",
    videoDownloaderStep2: "Sélectionnez la qualité et téléchargez.",
    videoDownloaderStep3: "Modifiez ou traduisez les sous-titres immédiatement.",
    videoDownloaderPlatforms: "Plateformes prises en charge",
    videoDownloaderPlatformsDesc:
      "Téléchargez depuis YouTube et d’autres plateformes populaires qui autorisent le téléchargement direct via URL.",
    videoDownloaderPlatform1: "YouTube",
    videoDownloaderPlatform2: "Autres grandes plateformes (selon disponibilité)",
    videoDownloaderQuality: "Options de qualité",
    videoDownloaderQualityDesc:
      "Choisissez la résolution la mieux adaptée à votre workflow, des brouillons rapides aux exports haute qualité.",
    videoDownloaderQuality1: "Plusieurs résolutions lorsque disponibles",
    videoDownloaderQuality2: "Exports audio seuls pour la transcription",
    videoDownloaderPairEditor: "Associez-le à l’éditeur de sous-titres",
    videoDownloaderPairEditorDesc:
      "Synchronisez et fusionnez les sous-titres, modifiez le timing et exportez des fichiers SRT sans quitter Translator.",
    videoDownloaderTranslateAi: "Traduire les sous-titres avec l’IA",
    videoDownloaderTranslateAiDesc:
      "Traduisez les sous-titres vers 39 langues prises en charge avec GPT, puis ajoutez si besoin une relecture Claude en mode Qualité.",
    videoDownloaderFreeNote:
      "Le téléchargement est gratuit. Les fonctions IA (transcription, traduction, résumé, doublage) utilisent des crédits.",
    faqTitle: "Questions fréquentes",
    faqSubtitle:
      "Tout ce qu’il faut savoir sur Translator, des formats de sous-titres aux crédits de traduction IA.",
    faqQ1: "Translator est-il gratuit ?",
    faqA1:
      "Oui. Le téléchargement vidéo et l’édition de sous-titres sont gratuits. La transcription, la traduction, le résumé et le doublage par IA utilisent des crédits payants.",
    faqQ2: "Quels formats de sous-titres prenez-vous en charge ?",
    faqA2: "Translator prend actuellement en charge l’import et l’export SRT.",
    faqQ3: "Puis-je traduire des sous-titres YouTube ?",
    faqA3:
      "Oui. Téléchargez la vidéo, importez ou générez les sous-titres, puis traduisez-les avec l’IA.",
    faqQ4: "Quelles plateformes sont prises en charge ?",
    faqA4:
      "Translator est disponible sur macOS (Apple Silicon + Intel) et Windows.",
    faqQ5: "Quelles sont les configurations requises ?",
    faqA5:
      "Un ordinateur macOS ou Windows récent avec suffisamment d’espace de stockage pour les fichiers vidéo est recommandé.",
    faqQ6: "Ai-je besoin d’une connexion Internet ?",
    faqA6:
      "Internet est nécessaire pour la transcription, la traduction, le résumé et le doublage par IA. Les outils d’édition gratuits fonctionnent hors ligne.",
    faqQ7: "Quelle est la précision de la traduction IA ?",
    faqA7:
      "Translator utilise GPT pour la traduction de base, et le mode Qualité peut ajouter une relecture Claude en option pour améliorer les nuances.",
    faqQ8: "Proposez-vous un abonnement ?",
    faqA8:
      "Aucun abonnement n’est nécessaire. Les fonctions IA sont facturées via des crédits à l’usage.",
    faqQ9: "Puis-je incruster les sous-titres dans la vidéo ?",
    faqA9:
      "Oui. Vous pouvez exporter des fichiers de sous-titres ou les intégrer directement dans votre vidéo.",
    faqQ10: "Où puis-je obtenir de l’aide ?",
    faqA10:
      "Consultez la page de contact ou écrivez-nous si vous avez besoin d’aide pour l’installation ou la tarification.",
    faqReadyTranslate: "Prêt à traduire ?",
    faqReadyTranslateDesc:
      "En savoir plus sur la traduction IA et les langues prises en charge.",
    faqNeedPricing: "Besoin d’un aperçu des tarifs ?",
    faqNeedPricingDesc:
      "Découvrez ce qui est gratuit et comment fonctionnent les crédits IA.",
    faqViewPricing: "Voir les tarifs →",
    aboutTitle: "À propos de Stage5 Tools",
    aboutSubtitle:
      "Stage5 crée Translator et Echo, deux produits pensés pour aider les gens à dépasser les barrières de langue, les boucles de recommandation et le pilote automatique mental.",
    aboutMission: "Notre mission",
    aboutMissionDesc:
      "Créer des produits qui aident les gens à dépasser les limites dans lesquelles leur langue, leurs flux et leurs habitudes automatiques les enferment.",
    aboutVision: "Notre vision",
    aboutVisionDesc:
      "Un monde où les barrières de langue, les boucles du feed et le pilote automatique mental limitent moins les gens.",
    aboutBuiltFor: "Conçu pour élargir ce qu’on peut atteindre",
    aboutBuiltForDesc:
      "Translator aide à dépasser les limites de langue et de recommandation autour de la vidéo. Echo aide à sortir de ses propres boucles mentales avec une bonne question par jour.",
    aboutContactUs: "Nous contacter",
    aboutContactUsDesc:
      "Des questions sur Translator, les partenariats ou les offres entreprise ?",
    aboutGetInTouch: "Prendre contact →",
    contactTitle: "Contacter Stage5 Tools",
    contactSubtitle:
      "Des questions sur Translator ? Nous pouvons vous aider pour la mise en place, la tarification, les partenariats et les demandes entreprise.",
    contactEmail: "Écrivez-nous",
    contactEmailDesc:
      "Pour les demandes générales, l’assistance ou les opportunités de partenariat.",
    contactEnterprise: "Demandes entreprise",
    contactEnterpriseDesc:
      "Vous avez besoin d’une tarification au volume ou de workflows d’équipe ? Dites-nous ce qu’il vous faut.",
    langSpanish: "Espagnol",
    langKorean: "Coréen",
    langJapanese: "Japonais",
    langChinese: "Chinois",
    langFrench: "Français",
    langGerman: "Allemand",
    langPortuguese: "Portugais",
    langArabic: "Arabe",
    langBengali: "Bengali",
    langCzech: "Tchèque",
    langDanish: "Danois",
    langDutch: "Néerlandais",
    langEnglish: "Anglais",
    langFinnish: "Finnois",
    langGreek: "Grec",
    langHebrew: "Hébreu",
    langHindi: "Hindi",
    langHungarian: "Hongrois",
    langIndonesian: "Indonésien",
    langItalian: "Italien",
    langMalay: "Malais",
    langNorwegian: "Norvégien",
    langPolish: "Polonais",
    langRomanian: "Roumain",
    langRussian: "Russe",
    langSwedish: "Suédois",
    langTagalog: "Tagalog",
    langThai: "Thaï",
    langTurkish: "Turc",
    langUrdu: "Ourdou",
    langUkrainian: "Ukrainien",
    langVietnamese: "Vietnamien",
  },
  de: {
    download: "Für Mac herunterladen",
    downloadWindows: "Für Windows herunterladen",
    homeDownloadRecommended: "Für dein Gerät empfohlen",
    homeDownloadChoose: "Download auswählen",
    homeDownloadAllVersions: "Alle Versionen ansehen →",
    footer:
      "Video-Download und Untertitelbearbeitung/-zusammenführung sind kostenlos • KI-Transkription, Übersetzung, Zusammenfassung und Dubbing nutzen Credits",
    copyright: "© 2026 Stage5 Tools. Alle Rechte vorbehalten.",
    notFound: "Seite nicht gefunden",
    goHome: "Zur Startseite",
    navVideoDiscovery: "Video-Entdeckung",
    navDubbing: "Dubbing",
    navVideoDownloader: "Video-Downloader",
    navSubtitleEditor: "Untertitel-Editor",
    navAiTranslation: "KI-Übersetzung",
    navPricing: "Preise",
    navFaq: "FAQ",
    navAbout: "Über uns",
    navContact: "Kontakt",
    navDownload: "Download",
    footerProduct: "Produkt",
    footerResources: "Ressourcen",
    footerCompany: "Unternehmen",
    footerLegal: "Rechtliches",
    footerSupportedLanguages: "Unterstützte Sprachen",
    footerAboutStage5: "Über Stage5 Tools",
    footerPrivacy: "Datenschutz",
    footerTerms: "Nutzungsbedingungen",
    footerQuestions: "Fragen? Schreib an",
    breadcrumbHome: "Startseite",
    pricingTitle: "Einfache Preise für Videoübersetzung",
    pricingSubtitle:
      "Translator kann kostenlos heruntergeladen werden. Video-Downloads, Untertitelbearbeitung und SRT-Export sind derzeit kostenlos. KI-Transkription, Übersetzung und Dubbing nutzen Credits nach Verbrauch.",
    pricingFreeLabel: "Kostenlos",
    pricingFreePrice: "0 $",
    pricingFreeDesc: "Die wichtigsten Videotools für Creator und Teams.",
    pricingFreeItem1: "Videos per URL herunterladen",
    pricingFreeItem2: "Untertitel bearbeiten und synchronisieren",
    pricingFreeItem3: "Untertitelspuren zusammenführen",
    pricingFreeItem4: "SRT-Dateien exportieren",
    pricingCreditsLabel: "KI-Credits",
    pricingCreditsPrice: "Nutzungsbasiert",
    pricingCreditsDesc:
      "Kaufe Credits in der App und nutze sie nur dann, wenn du KI wirklich brauchst.",
    pricingCreditsItem1: "KI-Transkription mit Whisper",
    pricingCreditsItem2: "Untertitelübersetzung in 39 unterstützte Sprachen",
    pricingCreditsItem3: "Optionales KI-Dubbing + Transkriptzusammenfassungen",
    pricingCreditsItem4: "Kein Abo erforderlich",
    pricingExamplePacks: "Beispielpakete",
    pricingPack1: "1 $ ≈ 50 Minuten Video",
    pricingPack2: "5 $ ≈ 8 Stunden Video",
    pricingPack3: "10 $ ≈ 18 Stunden Video",
    pricingPack4: "50 $ ≈ 127 Stunden Video",
    pricingByoNote:
      "Schalte eigene API-Schlüssel für eine einmalige Gebühr von 10 $ frei und zahle die API-Kosten des Anbieters direkt.",
    pricingFreeQuestion: "Was ist kostenlos enthalten?",
    pricingFreeAnswer:
      "Alle Download- und Untertitelbearbeitungstools sind kostenlos. Du zahlst nur bei KI-Transkription, Übersetzung, Zusammenfassung oder Dubbing.",
    pricingExploreEditor: "Untertitel-Editor entdecken →",
    pricingCostQuestion: "Brauchst du Hilfe bei der Kostenschätzung?",
    pricingCostAnswer:
      "Übersetzungs-Credits hängen von Videolänge und Anzahl der Sprachen ab. Kontaktiere uns für Workflows großer Teams.",
    pricingContactSales: "Kontakt aufnehmen →",
    translateTitle: "KI-Videoübersetzung für Untertitel",
    translateSubtitle:
      "Übersetze YouTube-Untertitel oder lokale SRT-Dateien in 39 unterstützte Sprachen. GPT übernimmt die Basisübersetzung, und im Qualitätsmodus kann optional eine Claude-Prüfung ergänzt werden.",
    translateFeature1Title: "GPT-Übersetzung + optionale Claude-Prüfung",
    translateFeature1Desc:
      "Verwendet standardmäßig GPT, mit optionaler Claude-Prüfung im Qualitätsmodus für präzisere Formulierungen.",
    translateFeature2Title: "39 Sprachen unterstützt",
    translateFeature2Desc:
      "Übersetze Untertitel ins Spanische, Koreanische, Japanische, Chinesische und viele weitere Sprachen.",
    translateFeature3Title: "Für Untertitel-Workflows gebaut",
    translateFeature3Desc:
      "Behalte das Timing bei und exportiere sofort nutzbare SRT-Dateien oder brenne Untertitel direkt ins Video ein.",
    translateHowItWorks: "So funktioniert KI-Untertitelübersetzung",
    translateStep1: "Importiere oder generiere Untertitel.",
    translateStep2: "Wähle deine Zielsprache.",
    translateStep3: "Prüfe die KI-Übersetzung und exportiere.",
    translateLanguagesTitle: "In diese Sprachen übersetzen",
    translateLanguagesDesc:
      "Erreiche die größten Zielgruppen mit dedizierten Sprachseiten.",
    translateNeedSubtitles: "Brauchst du zuerst Untertitel?",
    translateNeedSubtitlesDesc:
      "Nutze den Untertitel-Editor, um Untertitel vor der Übersetzung zu importieren, zu bereinigen und zu synchronisieren.",
    translateGoToEditor: "Zum Untertitel-Editor →",
    translateStartWithUrl: "Mit einer Video-URL starten",
    translateStartWithUrlDesc:
      "Lade YouTube-Videos und andere Quellen herunter, damit du sofort mit der Übersetzung beginnen kannst.",
    translateGoToDownloader: "Zum Video-Downloader →",
    translateCreditsNote:
      "KI-Übersetzung nutzt Credits. Kostenlose Tools bleiben kostenlos.",
    subtitleEditorTitle: "Kostenloser SRT-Untertitel-Editor",
    subtitleEditorSubtitle:
      "Bereinige Untertitel, synchronisiere Timing und führe Spuren an einem Ort zusammen. Translator ist der Untertitel-Editor für moderne Videoteams.",
    subtitleEditorFeature1Title: "Präzision auf der Timeline",
    subtitleEditorFeature1Desc:
      "Passe Untertitel mit Timecode-Steuerung auf Millisekundenebene präzise an.",
    subtitleEditorFeature2Title: "Spuren zusammenführen und bereinigen",
    subtitleEditorFeature2Desc:
      "Kombiniere mehrere Untertiteldateien zu einer sauberen finalen Spur.",
    subtitleEditorFeature3Title: "Gängige Formate bearbeiten",
    subtitleEditorFeature3Desc:
      "Importiere und exportiere SRT-Dateien zuverlässig.",
    subtitleEditorWorkflow: "Workflow für Untertitelbearbeitung",
    subtitleEditorStep1:
      "Importiere Untertitel oder generiere sie automatisch per KI-Transkription.",
    subtitleEditorStep2:
      "Bearbeite Text, Timing und Format, während du das Video in der Vorschau siehst.",
    subtitleEditorStep3:
      "Exportiere saubere Untertiteldateien oder brenne die Untertitel ins Video ein.",
    subtitleEditorNeedVideo: "Brauchst du zuerst ein Video?",
    subtitleEditorNeedVideoDesc:
      "Lade Videos von YouTube und anderen Plattformen herunter und bearbeite Untertitel sofort.",
    subtitleEditorReadyTranslate: "Bereit zum Übersetzen?",
    subtitleEditorReadyTranslateDesc:
      "Übersetze Untertitel mit KI in 39 unterstützte Sprachen und bewahre dabei Ton und Kontext.",
    subtitleEditorExploreTranslation: "KI-Übersetzung entdecken →",
    subtitleEditorFreeNote:
      "Untertitelbearbeitung ist kostenlos. KI-Funktionen sind optional und creditbasiert.",
    videoDownloaderTitle: "Kostenloser Video-Downloader für YouTube und mehr",
    videoDownloaderSubtitle:
      "Mit Translator kannst du Videos per URL einfach herunterladen, in hoher Qualität speichern und direkt in die Untertitelbearbeitung oder KI-Übersetzung wechseln.",
    videoDownloaderFeature1Title: "URL einfügen, saubere Datei erhalten",
    videoDownloaderFeature1Desc:
      "Hole dir mit einem einzigen Link ein Video von YouTube oder anderen beliebten Plattformen.",
    videoDownloaderFeature2Title: "Wähle die Qualität, die du brauchst",
    videoDownloaderFeature2Desc:
      "Wähle aus verfügbaren Auflösungen und Audiooptionen für schnellere Untertitel-Workflows.",
    videoDownloaderFeature3Title: "Sofort bereit für Untertitel",
    videoDownloaderFeature3Desc:
      "Lade MP4-Dateien herunter, die für Bearbeitung, Übersetzung und Export optimiert sind.",
    videoDownloaderHowItWorks: "So funktioniert es",
    videoDownloaderStep1: "Füge die Video-URL in Translator ein.",
    videoDownloaderStep2: "Qualität wählen und herunterladen.",
    videoDownloaderStep3: "Untertitel sofort bearbeiten oder übersetzen.",
    videoDownloaderPlatforms: "Unterstützte Plattformen",
    videoDownloaderPlatformsDesc:
      "Lade von YouTube und anderen beliebten Plattformen herunter, die direkte URL-basierte Downloads erlauben.",
    videoDownloaderPlatform1: "YouTube",
    videoDownloaderPlatform2: "Weitere große Plattformen (Verfügbarkeit variiert)",
    videoDownloaderQuality: "Qualitätsoptionen",
    videoDownloaderQualityDesc:
      "Wähle die Auflösung, die am besten zu deinem Workflow passt, von schnellen Entwürfen bis zu hochwertigen Exporten.",
    videoDownloaderQuality1: "Mehrere Auflösungen, wenn verfügbar",
    videoDownloaderQuality2: "Nur-Audio-Exporte für Transkription",
    videoDownloaderPairEditor: "Mit dem Untertitel-Editor kombinieren",
    videoDownloaderPairEditorDesc:
      "Synchronisiere und füge Untertitel zusammen, bearbeite das Timing und exportiere SRT-Dateien, ohne Translator zu verlassen.",
    videoDownloaderTranslateAi: "Untertitel mit KI übersetzen",
    videoDownloaderTranslateAiDesc:
      "Übersetze Untertitel mit GPT in 39 unterstützte Sprachen und ergänze im Qualitätsmodus optional eine Claude-Prüfung.",
    videoDownloaderFreeNote:
      "Download kostenlos. KI-Funktionen (Transkription, Übersetzung, Zusammenfassung, Dubbing) nutzen Credits.",
    faqTitle: "Häufig gestellte Fragen",
    faqSubtitle:
      "Alles, was du über Translator wissen musst, von Untertitelformaten bis zu KI-Übersetzungs-Credits.",
    faqQ1: "Ist Translator kostenlos nutzbar?",
    faqA1:
      "Ja. Video-Download und Untertitelbearbeitung sind kostenlos. KI-Transkription, Übersetzung, Zusammenfassung und Dubbing nutzen kostenpflichtige Credits.",
    faqQ2: "Welche Untertitelformate werden unterstützt?",
    faqA2: "Translator unterstützt derzeit SRT-Import und -Export.",
    faqQ3: "Kann ich YouTube-Untertitel übersetzen?",
    faqA3:
      "Ja. Lade das Video herunter, importiere oder generiere Untertitel und übersetze sie dann mit KI.",
    faqQ4: "Welche Plattformen werden unterstützt?",
    faqA4:
      "Translator ist für macOS (Apple Silicon + Intel) und Windows verfügbar.",
    faqQ5: "Welche Systemanforderungen gibt es?",
    faqA5:
      "Empfohlen wird ein aktueller macOS- oder Windows-Computer mit ausreichend Speicherplatz für Videodateien.",
    faqQ6: "Brauche ich eine Internetverbindung?",
    faqA6:
      "Für KI-Transkription, Übersetzung, Zusammenfassung und Dubbing ist Internet erforderlich. Die kostenlosen Bearbeitungstools funktionieren offline.",
    faqQ7: "Wie genau ist die KI-Übersetzung?",
    faqA7:
      "Translator nutzt GPT für die Basisübersetzung, und im Qualitätsmodus kann optional eine Claude-Prüfung ergänzt werden, um Nuancen zu verbessern.",
    faqQ8: "Gibt es ein Abonnement?",
    faqA8:
      "Nein. Es ist kein Abo nötig. KI-Funktionen werden über nutzungsbasierte Credits abgerechnet.",
    faqQ9: "Kann ich Untertitel ins Video einbrennen?",
    faqA9:
      "Ja. Du kannst Untertiteldateien exportieren oder sie direkt in dein Video einbetten.",
    faqQ10: "Wo bekomme ich Hilfe?",
    faqA10:
      "Besuche die Kontaktseite oder schreibe uns eine E-Mail, wenn du Hilfe bei Einrichtung oder Preisen brauchst.",
    faqReadyTranslate: "Bereit zum Übersetzen?",
    faqReadyTranslateDesc:
      "Mehr über KI-Übersetzung und unterstützte Sprachen erfahren.",
    faqNeedPricing: "Brauchst du einen Preisüberblick?",
    faqNeedPricingDesc:
      "Sieh nach, was kostenlos ist und wie KI-Credits funktionieren.",
    faqViewPricing: "Preise ansehen →",
    aboutTitle: "Über Stage5 Tools",
    aboutSubtitle:
      "Stage5 baut Translator und Echo, zwei Produkte, die Menschen helfen sollen, Sprachbarrieren, Empfehlungs-Schleifen und den eigenen Denk-Autopiloten zu durchbrechen.",
    aboutMission: "Unsere Mission",
    aboutMissionDesc:
      "Produkte zu bauen, die Menschen helfen, über die Grenzen hinauszukommen, in denen Sprache, Feeds und automatische Gewohnheiten sie normalerweise festhalten.",
    aboutVision: "Unsere Vision",
    aboutVisionDesc:
      "Eine Welt, in der Sprachbarrieren, Feed-Schleifen und mentaler Autopilot Menschen weniger begrenzen.",
    aboutBuiltFor: "Gebaut, um Reichweite zu erweitern",
    aboutBuiltForDesc:
      "Translator hilft dabei, die Sprach- und Empfehlungsgrenzen rund um Video zu durchbrechen. Echo hilft mit einer guten Frage pro Tag dabei, aus den eigenen Gedankenschleifen auszubrechen.",
    aboutContactUs: "Kontaktiere uns",
    aboutContactUsDesc:
      "Fragen zu Translator, Partnerschaften oder Enterprise-Angeboten?",
    aboutGetInTouch: "Kontakt aufnehmen →",
    contactTitle: "Stage5 Tools kontaktieren",
    contactSubtitle:
      "Fragen zu Translator? Wir helfen bei Einrichtung, Preisen, Partnerschaften und Enterprise-Anfragen.",
    contactEmail: "Schreib uns",
    contactEmailDesc:
      "Für allgemeine Anfragen, Support oder Partnerschaftsmöglichkeiten.",
    contactEnterprise: "Enterprise-Anfragen",
    contactEnterpriseDesc:
      "Du brauchst Mengenpreise oder Team-Workflows? Sag uns, was du benötigst.",
    langSpanish: "Spanisch",
    langKorean: "Koreanisch",
    langJapanese: "Japanisch",
    langChinese: "Chinesisch",
    langFrench: "Französisch",
    langGerman: "Deutsch",
    langPortuguese: "Portugiesisch",
    langArabic: "Arabisch",
    langBengali: "Bengalisch",
    langCzech: "Tschechisch",
    langDanish: "Dänisch",
    langDutch: "Niederländisch",
    langEnglish: "Englisch",
    langFinnish: "Finnisch",
    langGreek: "Griechisch",
    langHebrew: "Hebräisch",
    langHindi: "Hindi",
    langHungarian: "Ungarisch",
    langIndonesian: "Indonesisch",
    langItalian: "Italienisch",
    langMalay: "Malaiisch",
    langNorwegian: "Norwegisch",
    langPolish: "Polnisch",
    langRomanian: "Rumänisch",
    langRussian: "Russisch",
    langSwedish: "Schwedisch",
    langTagalog: "Tagalog",
    langThai: "Thailändisch",
    langTurkish: "Türkisch",
    langUrdu: "Urdu",
    langUkrainian: "Ukrainisch",
    langVietnamese: "Vietnamesisch",
  },
  pt: {
    download: "Baixar para Mac",
    downloadWindows: "Baixar para Windows",
    homeDownloadRecommended: "Recomendado para o seu dispositivo",
    homeDownloadChoose: "Escolha seu download",
    homeDownloadAllVersions: "Ver todas as versões →",
    footer:
      "Download de vídeos e edição/mesclagem de legendas são gratuitos • Transcrição, tradução, resumo e dublagem com IA usam créditos",
    copyright: "© 2026 Stage5 Tools. Todos os direitos reservados.",
    notFound: "Página não encontrada",
    goHome: "Voltar para a página inicial",
    navVideoDiscovery: "Descoberta de vídeos",
    navDubbing: "Dublagem",
    navVideoDownloader: "Baixador de vídeos",
    navSubtitleEditor: "Editor de legendas",
    navAiTranslation: "Tradução com IA",
    navPricing: "Preços",
    navFaq: "FAQ",
    navAbout: "Sobre",
    navContact: "Contato",
    navDownload: "Baixar",
    footerProduct: "Produto",
    footerResources: "Recursos",
    footerCompany: "Empresa",
    footerLegal: "Jurídico",
    footerSupportedLanguages: "Idiomas compatíveis",
    footerAboutStage5: "Sobre a Stage5 Tools",
    footerPrivacy: "Política de privacidade",
    footerTerms: "Termos de serviço",
    footerQuestions: "Dúvidas? Envie um e-mail para",
    breadcrumbHome: "Início",
    pricingTitle: "Preços simples para tradução de vídeo",
    pricingSubtitle:
      "O download do Translator é gratuito. Download de vídeos, edição de legendas e exportação em SRT são gratuitos no momento. Transcrição, tradução e dublagem com IA usam créditos conforme o uso.",
    pricingFreeLabel: "Grátis",
    pricingFreePrice: "US$ 0",
    pricingFreeDesc: "Ferramentas essenciais de vídeo para criadores e equipes.",
    pricingFreeItem1: "Baixar vídeos por URL",
    pricingFreeItem2: "Editar e sincronizar legendas",
    pricingFreeItem3: "Mesclar faixas de legenda",
    pricingFreeItem4: "Exportar arquivos SRT",
    pricingCreditsLabel: "Créditos de IA",
    pricingCreditsPrice: "Pague conforme usar",
    pricingCreditsDesc:
      "Compre créditos no app e use apenas quando realmente precisar de IA.",
    pricingCreditsItem1: "Transcrição com IA usando Whisper",
    pricingCreditsItem2: "Tradução de legendas para 39 idiomas compatíveis",
    pricingCreditsItem3: "Dublagem com IA opcional + resumos de transcrição",
    pricingCreditsItem4: "Sem assinatura",
    pricingExamplePacks: "Exemplos de pacotes de créditos",
    pricingPack1: "US$ 1 ≈ 50 minutos de vídeo",
    pricingPack2: "US$ 5 ≈ 8 horas de vídeo",
    pricingPack3: "US$ 10 ≈ 18 horas de vídeo",
    pricingPack4: "US$ 50 ≈ 127 horas de vídeo",
    pricingByoNote:
      "Desbloqueie suas próprias chaves de API por uma taxa única de US$ 10 e pague diretamente os custos de API do provedor.",
    pricingFreeQuestion: "O que está incluído de graça?",
    pricingFreeAnswer:
      "Todas as ferramentas de download e edição de legendas são gratuitas. Você só paga ao usar transcrição, tradução, resumo ou dublagem com IA.",
    pricingExploreEditor: "Explorar o editor de legendas →",
    pricingCostQuestion: "Precisa de ajuda para estimar o custo?",
    pricingCostAnswer:
      "Os créditos de tradução variam conforme a duração do vídeo e a quantidade de idiomas. Fale conosco para fluxos de trabalho de equipes maiores.",
    pricingContactSales: "Falar com a equipe →",
    translateTitle: "Tradução de vídeo com IA para legendas",
    translateSubtitle:
      "Traduza legendas do YouTube ou arquivos SRT locais para 39 idiomas compatíveis. O GPT faz a tradução-base, e o modo Qualidade pode adicionar uma revisão opcional com Claude.",
    translateFeature1Title: "Tradução com GPT + revisão opcional com Claude",
    translateFeature1Desc:
      "Usa GPT por padrão, com revisão opcional do Claude no modo Qualidade para uma redação mais fiel.",
    translateFeature2Title: "39 idiomas compatíveis",
    translateFeature2Desc:
      "Traduza legendas para espanhol, coreano, japonês, chinês e muitos outros idiomas.",
    translateFeature3Title: "Feito para fluxos de trabalho com legendas",
    translateFeature3Desc:
      "Mantenha a sincronização intacta e exporte arquivos SRT prontos para uso, ou queime as legendas no vídeo.",
    translateHowItWorks: "Como funciona a tradução de legendas com IA",
    translateStep1: "Importe ou gere as legendas.",
    translateStep2: "Escolha o idioma de destino.",
    translateStep3: "Revise a tradução com IA e exporte.",
    translateLanguagesTitle: "Traduzir para estes idiomas",
    translateLanguagesDesc:
      "Alcance os maiores públicos com páginas dedicadas por idioma.",
    translateNeedSubtitles: "Precisa das legendas primeiro?",
    translateNeedSubtitlesDesc:
      "Use o editor de legendas para importar, limpar e sincronizar as legendas antes da tradução.",
    translateGoToEditor: "Ir para o editor de legendas →",
    translateStartWithUrl: "Comece com uma URL de vídeo",
    translateStartWithUrlDesc:
      "Baixe vídeos do YouTube e de outras fontes para começar a traduzir imediatamente.",
    translateGoToDownloader: "Ir para o baixador de vídeos →",
    translateCreditsNote:
      "A tradução com IA usa créditos. As ferramentas gratuitas continuam gratuitas.",
    subtitleEditorTitle: "Editor gratuito de legendas SRT",
    subtitleEditorSubtitle:
      "Limpe legendas, sincronize o tempo e mescle faixas em um só lugar. O Translator é o editor de legendas feito para equipes de vídeo modernas.",
    subtitleEditorFeature1Title: "Precisão na linha do tempo",
    subtitleEditorFeature1Desc:
      "Ajuste o timing das legendas com controles de timecode em milissegundos.",
    subtitleEditorFeature2Title: "Mesclar e limpar faixas",
    subtitleEditorFeature2Desc:
      "Combine vários arquivos de legenda em uma única faixa final bem acabada.",
    subtitleEditorFeature3Title: "Edite formatos populares",
    subtitleEditorFeature3Desc:
      "Importe e exporte arquivos SRT com confiança.",
    subtitleEditorWorkflow: "Fluxo de edição de legendas",
    subtitleEditorStep1:
      "Importe legendas ou gere-as automaticamente com transcrição por IA.",
    subtitleEditorStep2:
      "Edite texto, timing e formatação enquanto visualiza o vídeo.",
    subtitleEditorStep3:
      "Exporte arquivos de legenda limpos ou queime as legendas no vídeo.",
    subtitleEditorNeedVideo: "Precisa do vídeo primeiro?",
    subtitleEditorNeedVideoDesc:
      "Baixe vídeos do YouTube e de outras plataformas e edite as legendas imediatamente.",
    subtitleEditorReadyTranslate: "Pronto para traduzir?",
    subtitleEditorReadyTranslateDesc:
      "Traduza legendas para 39 idiomas compatíveis com IA mantendo tom e contexto.",
    subtitleEditorExploreTranslation: "Explorar tradução com IA →",
    subtitleEditorFreeNote:
      "A edição de legendas é gratuita. Os recursos de IA são opcionais e cobrados por créditos.",
    videoDownloaderTitle: "Baixador de vídeos gratuito para YouTube e mais",
    videoDownloaderSubtitle:
      "O Translator facilita baixar vídeos por URL, salvá-los em alta qualidade e seguir direto para a edição de legendas ou para a tradução com IA.",
    videoDownloaderFeature1Title: "Cole uma URL e obtenha um arquivo limpo",
    videoDownloaderFeature1Desc:
      "Capture um vídeo do YouTube ou de outras plataformas populares com um único link.",
    videoDownloaderFeature2Title: "Escolha a qualidade que você precisa",
    videoDownloaderFeature2Desc:
      "Selecione entre as resoluções e opções de áudio disponíveis para acelerar o trabalho com legendas.",
    videoDownloaderFeature3Title: "Pronto para legendas imediatamente",
    videoDownloaderFeature3Desc:
      "Baixe arquivos MP4 otimizados para edição, tradução e exportação.",
    videoDownloaderHowItWorks: "Como funciona",
    videoDownloaderStep1: "Cole a URL do vídeo no Translator.",
    videoDownloaderStep2: "Escolha a qualidade e baixe.",
    videoDownloaderStep3: "Edite ou traduza as legendas na hora.",
    videoDownloaderPlatforms: "Plataformas compatíveis",
    videoDownloaderPlatformsDesc:
      "Baixe do YouTube e de outras plataformas populares que permitem downloads diretos por URL.",
    videoDownloaderPlatform1: "YouTube",
    videoDownloaderPlatform2: "Outras grandes plataformas (a disponibilidade varia)",
    videoDownloaderQuality: "Opções de qualidade",
    videoDownloaderQualityDesc:
      "Escolha a resolução que melhor se adapta ao seu fluxo de trabalho, de rascunhos rápidos a exportações em alta qualidade.",
    videoDownloaderQuality1: "Várias resoluções quando disponíveis",
    videoDownloaderQuality2: "Exportações somente de áudio para transcrição",
    videoDownloaderPairEditor: "Combine com o editor de legendas",
    videoDownloaderPairEditorDesc:
      "Sincronize e mescle legendas, edite o timing e exporte arquivos SRT sem sair do Translator.",
    videoDownloaderTranslateAi: "Traduza legendas com IA",
    videoDownloaderTranslateAiDesc:
      "Traduza legendas para 39 idiomas compatíveis com GPT e adicione, se quiser, uma revisão do Claude no modo Qualidade.",
    videoDownloaderFreeNote:
      "Download grátis. Recursos de IA (transcrição, tradução, resumo e dublagem) usam créditos.",
    faqTitle: "Perguntas frequentes",
    faqSubtitle:
      "Tudo o que você precisa saber sobre o Translator, dos formatos de legenda aos créditos de tradução com IA.",
    faqQ1: "O Translator é gratuito?",
    faqA1:
      "Sim. O download de vídeos e a edição de legendas são gratuitos. Transcrição, tradução, resumo e dublagem com IA usam créditos pagos.",
    faqQ2: "Quais formatos de legenda vocês aceitam?",
    faqA2: "No momento, o Translator aceita importação e exportação de SRT.",
    faqQ3: "Posso traduzir legendas do YouTube?",
    faqA3:
      "Sim. Baixe o vídeo, importe ou gere as legendas e depois traduza com IA.",
    faqQ4: "Quais plataformas são compatíveis?",
    faqA4:
      "O Translator está disponível para macOS (Apple Silicon + Intel) e Windows.",
    faqQ5: "Quais são os requisitos do sistema?",
    faqA5:
      "Recomendamos um computador macOS ou Windows moderno com espaço suficiente para armazenar arquivos de vídeo.",
    faqQ6: "Preciso de conexão com a internet?",
    faqA6:
      "Internet é necessária para transcrição, tradução, resumo e dublagem com IA. As ferramentas gratuitas de edição funcionam offline.",
    faqQ7: "Qual é a precisão da tradução com IA?",
    faqA7:
      "O Translator usa GPT para a tradução-base, e o modo Qualidade pode adicionar uma revisão opcional com Claude para melhorar nuances.",
    faqQ8: "Vocês oferecem assinatura?",
    faqA8:
      "Não. Não é necessária assinatura. Os recursos de IA são cobrados por créditos conforme o uso.",
    faqQ9: "Posso queimar as legendas no vídeo?",
    faqA9:
      "Sim. Você pode exportar arquivos de legenda ou incorporá-los diretamente ao vídeo.",
    faqQ10: "Onde posso obter ajuda?",
    faqA10:
      "Visite a página de contato ou envie um e-mail se precisar de ajuda com configuração ou preços.",
    faqReadyTranslate: "Pronto para traduzir?",
    faqReadyTranslateDesc:
      "Saiba mais sobre tradução com IA e os idiomas compatíveis.",
    faqNeedPricing: "Precisa ver os preços?",
    faqNeedPricingDesc:
      "Veja o que é gratuito e como funcionam os créditos de IA.",
    faqViewPricing: "Ver preços →",
    aboutTitle: "Sobre a Stage5 Tools",
    aboutSubtitle:
      "A Stage5 cria o Translator e o Echo, dois produtos feitos para ajudar as pessoas a passar das barreiras de idioma, dos ciclos de recomendação e do piloto automático mental.",
    aboutMission: "Nossa missão",
    aboutMissionDesc:
      "Criar produtos que ajudem as pessoas a ir além dos limites em que idioma, feeds e hábitos automáticos normalmente as mantêm.",
    aboutVision: "Nossa visão",
    aboutVisionDesc:
      "Um mundo em que barreiras de idioma, ciclos de feed e piloto automático mental limitem menos as pessoas.",
    aboutBuiltFor: "Feito para ampliar alcance",
    aboutBuiltForDesc:
      "O Translator ajuda a superar os limites de idioma e recomendação em torno do vídeo. O Echo ajuda a sair dos próprios ciclos mentais com uma boa pergunta por dia.",
    aboutContactUs: "Entre em contato",
    aboutContactUsDesc:
      "Tem dúvidas sobre o Translator, parcerias ou planos empresariais?",
    aboutGetInTouch: "Falar conosco →",
    contactTitle: "Fale com a Stage5 Tools",
    contactSubtitle:
      "Dúvidas sobre o Translator? Estamos aqui para ajudar com configuração, preços, parcerias e solicitações empresariais.",
    contactEmail: "Envie um e-mail",
    contactEmailDesc:
      "Para dúvidas gerais, suporte ou oportunidades de parceria.",
    contactEnterprise: "Solicitações empresariais",
    contactEnterpriseDesc:
      "Precisa de preços por volume ou fluxos de trabalho para equipes? Conte para nós o que você precisa.",
    langSpanish: "Espanhol",
    langKorean: "Coreano",
    langJapanese: "Japonês",
    langChinese: "Chinês",
    langFrench: "Francês",
    langGerman: "Alemão",
    langPortuguese: "Português",
    langArabic: "Árabe",
    langBengali: "Bengali",
    langCzech: "Tcheco",
    langDanish: "Dinamarquês",
    langDutch: "Holandês",
    langEnglish: "Inglês",
    langFinnish: "Finlandês",
    langGreek: "Grego",
    langHebrew: "Hebraico",
    langHindi: "Hindi",
    langHungarian: "Húngaro",
    langIndonesian: "Indonésio",
    langItalian: "Italiano",
    langMalay: "Malaio",
    langNorwegian: "Norueguês",
    langPolish: "Polonês",
    langRomanian: "Romeno",
    langRussian: "Russo",
    langSwedish: "Sueco",
    langTagalog: "Tagalo",
    langThai: "Tailandês",
    langTurkish: "Turco",
    langUrdu: "Urdu",
    langUkrainian: "Ucraniano",
    langVietnamese: "Vietnamita",
  },
};

export type StringKey = keyof (typeof strings)["en"];
export type { Locale } from "./locales";
export const requiredSharedStringKeys =
  REQUIRED_SHARED_STRING_KEYS satisfies readonly StringKey[];

export function getLocaleStringTable(
  locale: Locale
): Partial<Record<StringKey, string>> {
  return locale === "en" || locale === "ko" ? strings[locale] : extraStrings[locale];
}

export const t = (key: StringKey, locale: Locale): string => {
  return getLocaleStringTable(locale)[key] ?? strings.en[key];
};

import type { Locale } from "./locales";
import {
  TRANSLATED_LANGUAGE_SLUGS,
  type TranslatedLanguageSlug,
} from "./translate-language-slugs";

type LanguageFacts = {
  names: Record<Locale, string>;
  audiences: Record<Locale, string>;
};

type LanguagePageLocaleCopy = {
  title: (name: string) => string;
  description: (name: string, audience: string) => string;
  intro: (name: string, audience: string) => string;
  creatorUseCase: (audience: string) => string;
  businessUseCase: (audience: string) => string;
  educationUseCase: (name: string) => string;
  heading: (name: string) => string;
  useCasesHeading: string;
  workflowTitle: string;
  workflowDescription: string;
  workflowBackLabel: string;
  cleanupTitle: string;
  cleanupDescription: string;
  finalNote: (name: string) => string;
  keywords: (name: string) => string[];
};

const languageFacts: Record<TranslatedLanguageSlug, LanguageFacts> = {
  spanish: {
    names: {
      en: "Spanish",
      ko: "스페인어",
      es: "español",
      ja: "スペイン語",
      zh: "西班牙语",
      fr: "espagnol",
      de: "Spanisch",
      pt: "espanhol",
    },
    audiences: {
      en: "Spanish-speaking audiences",
      ko: "스페인어권 시청자",
      es: "audiencias hispanohablantes",
      ja: "スペイン語圏の視聴者",
      zh: "西班牙语受众",
      fr: "les publics hispanophones",
      de: "spanischsprachige Zielgruppen",
      pt: "públicos que falam espanhol",
    },
  },
  korean: {
    names: {
      en: "Korean",
      ko: "한국어",
      es: "coreano",
      ja: "韓国語",
      zh: "韩语",
      fr: "coréen",
      de: "Koreanisch",
      pt: "coreano",
    },
    audiences: {
      en: "Korean-speaking audiences",
      ko: "한국어권 시청자",
      es: "audiencias de habla coreana",
      ja: "韓国語圏の視聴者",
      zh: "韩语受众",
      fr: "les publics coréens",
      de: "koreanischsprachige Zielgruppen",
      pt: "públicos que falam coreano",
    },
  },
  japanese: {
    names: {
      en: "Japanese",
      ko: "일본어",
      es: "japonés",
      ja: "日本語",
      zh: "日语",
      fr: "japonais",
      de: "Japanisch",
      pt: "japonês",
    },
    audiences: {
      en: "Japanese-speaking audiences",
      ko: "일본어권 시청자",
      es: "audiencias de habla japonesa",
      ja: "日本語圏の視聴者",
      zh: "日语受众",
      fr: "les publics japonais",
      de: "japanischsprachige Zielgruppen",
      pt: "públicos que falam japonês",
    },
  },
  chinese: {
    names: {
      en: "Chinese",
      ko: "중국어",
      es: "chino",
      ja: "中国語",
      zh: "中文",
      fr: "chinois",
      de: "Chinesisch",
      pt: "chinês",
    },
    audiences: {
      en: "Chinese-speaking audiences",
      ko: "중국어권 시청자",
      es: "audiencias de habla china",
      ja: "中国語圏の視聴者",
      zh: "中文受众",
      fr: "les publics chinois",
      de: "chinesischsprachige Zielgruppen",
      pt: "públicos que falam chinês",
    },
  },
  french: {
    names: {
      en: "French",
      ko: "프랑스어",
      es: "francés",
      ja: "フランス語",
      zh: "法语",
      fr: "français",
      de: "Französisch",
      pt: "francês",
    },
    audiences: {
      en: "French-speaking audiences",
      ko: "프랑스어권 시청자",
      es: "audiencias francófonas",
      ja: "フランス語圏の視聴者",
      zh: "法语受众",
      fr: "les publics francophones",
      de: "französischsprachige Zielgruppen",
      pt: "públicos que falam francês",
    },
  },
  german: {
    names: {
      en: "German",
      ko: "독일어",
      es: "alemán",
      ja: "ドイツ語",
      zh: "德语",
      fr: "allemand",
      de: "Deutsch",
      pt: "alemão",
    },
    audiences: {
      en: "German-speaking audiences",
      ko: "독일어권 시청자",
      es: "audiencias de habla alemana",
      ja: "ドイツ語圏の視聴者",
      zh: "德语受众",
      fr: "les publics germanophones",
      de: "deutschsprachige Zielgruppen",
      pt: "públicos que falam alemão",
    },
  },
  portuguese: {
    names: {
      en: "Portuguese",
      ko: "포르투갈어",
      es: "portugués",
      ja: "ポルトガル語",
      zh: "葡萄牙语",
      fr: "portugais",
      de: "Portugiesisch",
      pt: "português",
    },
    audiences: {
      en: "Portuguese-speaking audiences",
      ko: "포르투갈어권 시청자",
      es: "audiencias de habla portuguesa",
      ja: "ポルトガル語圏の視聴者",
      zh: "葡萄牙语受众",
      fr: "les publics lusophones",
      de: "portugiesischsprachige Zielgruppen",
      pt: "públicos que falam português",
    },
  },
};

const localeCopy: Record<Locale, LanguagePageLocaleCopy> = {
  en: {
    title: (name) => `Translate Videos to ${name} | Translator`,
    description: (name, audience) =>
      `Translate video subtitles to ${name} for ${audience} with AI-assisted subtitle workflows.`,
    intro: (name, audience) =>
      `Reach ${audience} with ${name} subtitles that are easy to review, refine, and export.`,
    creatorUseCase: (audience) =>
      `Creators localizing videos for ${audience}.`,
    businessUseCase: (audience) =>
      `Businesses adapting product, training, and support videos for ${audience}.`,
    educationUseCase: (name) =>
      `Educators and publishers adding ${name} subtitles for multilingual viewers.`,
    heading: (name) => `Translate videos to ${name}`,
    useCasesHeading: "Common use cases",
    workflowTitle: "AI subtitle translation workflow",
    workflowDescription:
      "Import subtitles, translate with AI, review the result, and export clean SRT files ready to publish.",
    workflowBackLabel: "Back to AI Translation →",
    cleanupTitle: "Edit and sync before you translate",
    cleanupDescription:
      "Use the subtitle editor to clean up timing and wording before localization.",
    finalNote: (name) =>
      `Translate subtitles to ${name} with AI-assisted workflows built for real video teams.`,
    keywords: (name) => [
      `translate video to ${name}`,
      `${name} subtitle translator`,
      `AI video translation ${name}`,
      `${name} subtitles`,
    ],
  },
  ko: {
    title: (name) => `영상을 ${name}로 번역 | Translator`,
    description: (name, audience) =>
      `${audience}를 위해 AI 자막 워크플로우로 비디오 자막을 ${name}로 번역하세요.`,
    intro: (name, audience) =>
      `${audience}에게 도달할 수 있도록 검토, 수정, 내보내기가 쉬운 ${name} 자막을 만드세요.`,
    creatorUseCase: (audience) =>
      `${audience}를 대상으로 영상을 현지화하는 크리에이터.`,
    businessUseCase: (audience) =>
      `${audience}를 위해 제품, 교육, 지원 영상을 번역하는 기업.`,
    educationUseCase: (name) =>
      `다국어 시청자를 위해 ${name} 자막을 제공하는 교육자와 퍼블리셔.`,
    heading: (name) => `영상을 ${name}로 번역`,
    useCasesHeading: "주요 활용 사례",
    workflowTitle: "AI 자막 번역 워크플로우",
    workflowDescription:
      "자막을 불러오고 AI로 번역한 뒤, 결과를 검토하고 게시 가능한 SRT 파일로 내보내세요.",
    workflowBackLabel: "AI 번역으로 돌아가기 →",
    cleanupTitle: "번역 전에 자막을 먼저 정리하세요",
    cleanupDescription:
      "현지화 전에 자막 편집기로 타이밍과 문장을 정리하면 품질이 좋아집니다.",
    finalNote: (name) =>
      `실제 영상 팀의 워크플로우에 맞춰 ${name} 자막을 AI로 번역하세요.`,
    keywords: (name) => [
      `${name} 비디오 번역`,
      `${name} 자막 번역`,
      `AI ${name} 자막`,
      `${name} 자막`,
    ],
  },
  es: {
    title: (name) => `Traducir videos al ${name} | Translator`,
    description: (name, audience) =>
      `Traduce subtítulos de video al ${name} para ${audience} con flujos de subtitulado asistidos por IA.`,
    intro: (name, audience) =>
      `Llega a ${audience} con subtítulos en ${name} fáciles de revisar, ajustar y exportar.`,
    creatorUseCase: (audience) =>
      `Creadores que localizan videos para ${audience}.`,
    businessUseCase: (audience) =>
      `Empresas que adaptan videos de producto, formación y soporte para ${audience}.`,
    educationUseCase: (name) =>
      `Educadores y publishers que añaden subtítulos en ${name} para audiencias multilingües.`,
    heading: (name) => `Traducir videos al ${name}`,
    useCasesHeading: "Casos de uso comunes",
    workflowTitle: "Flujo de traducción de subtítulos con IA",
    workflowDescription:
      "Importa subtítulos, tradúcelos con IA, revisa el resultado y exporta archivos SRT limpios listos para publicar.",
    workflowBackLabel: "Volver a Traducción con IA →",
    cleanupTitle: "Edita y sincroniza antes de traducir",
    cleanupDescription:
      "Usa el editor de subtítulos para limpiar el tiempo y la redacción antes de la localización.",
    finalNote: (name) =>
      `Traduce subtítulos al ${name} con flujos asistidos por IA pensados para equipos de video reales.`,
    keywords: (name) => [
      `traducir video al ${name}`,
      `traductor de subtítulos ${name}`,
      `traducción de video con IA ${name}`,
      `subtítulos en ${name}`,
    ],
  },
  ja: {
    title: (name) => `${name}に動画を翻訳 | Translator`,
    description: (name, audience) =>
      `${audience}向けに、AI 支援の字幕ワークフローで動画字幕を${name}へ翻訳します。`,
    intro: (name, audience) =>
      `${audience}に向けて、確認、調整、書き出しがしやすい${name}字幕を作成できます。`,
    creatorUseCase: (audience) =>
      `${audience}向けに動画をローカライズするクリエイター。`,
    businessUseCase: (audience) =>
      `${audience}向けに製品、研修、サポート動画を展開する企業。`,
    educationUseCase: (name) =>
      `多言語の視聴者向けに${name}字幕を追加する教育機関や出版チーム。`,
    heading: (name) => `${name}に動画を翻訳`,
    useCasesHeading: "主な利用シーン",
    workflowTitle: "AI 字幕翻訳ワークフロー",
    workflowDescription:
      "字幕を読み込み、AI で翻訳し、結果を確認して、そのまま公開できる SRT ファイルとして書き出せます。",
    workflowBackLabel: "AI 翻訳に戻る →",
    cleanupTitle: "翻訳前に字幕を整える",
    cleanupDescription:
      "ローカライズ前に字幕エディタでタイミングや表現を整えると品質が上がります。",
    finalNote: (name) =>
      `実際の動画チーム向けワークフローで、${name}字幕を AI で翻訳できます。`,
    keywords: (name) => [
      `${name} 動画翻訳`,
      `${name} 字幕翻訳`,
      `AI ${name} 字幕`,
      `${name} 字幕`,
    ],
  },
  zh: {
    title: (name) => `将视频翻译成${name} | Translator`,
    description: (name, audience) =>
      `借助 AI 字幕工作流，将视频字幕翻译成${name}，面向${audience}。`,
    intro: (name, audience) =>
      `用便于审核、润色和导出的${name}字幕触达${audience}。`,
    creatorUseCase: (audience) =>
      `面向${audience}进行视频本地化的创作者。`,
    businessUseCase: (audience) =>
      `为${audience}调整产品、培训和支持视频的企业团队。`,
    educationUseCase: (name) =>
      `为多语言观众添加${name}字幕的教育机构和内容出版团队。`,
    heading: (name) => `将视频翻译成${name}`,
    useCasesHeading: "常见使用场景",
    workflowTitle: "AI 字幕翻译流程",
    workflowDescription:
      "导入字幕，用 AI 完成翻译，检查结果，然后导出干净、可发布的 SRT 文件。",
    workflowBackLabel: "返回 AI 翻译 →",
    cleanupTitle: "翻译前先编辑并校准",
    cleanupDescription:
      "在本地化之前，先用字幕编辑器整理时间轴和表述会得到更好的结果。",
    finalNote: (name) =>
      `用面向真实视频团队的 AI 工作流，把字幕翻译成${name}。`,
    keywords: (name) => [
      `${name} 视频翻译`,
      `${name} 字幕翻译`,
      `AI ${name} 字幕`,
      `${name} 字幕`,
    ],
  },
  fr: {
    title: (name) => `Traduire des vidéos en ${name} | Translator`,
    description: (name, audience) =>
      `Traduisez des sous-titres vidéo en ${name} pour ${audience} grâce à un workflow de sous-titrage assisté par IA.`,
    intro: (name, audience) =>
      `Touchez ${audience} avec des sous-titres en ${name} faciles à relire, ajuster et exporter.`,
    creatorUseCase: (audience) =>
      `Créateurs qui localisent leurs vidéos pour ${audience}.`,
    businessUseCase: (audience) =>
      `Entreprises qui adaptent des vidéos produit, de formation et de support pour ${audience}.`,
    educationUseCase: (name) =>
      `Équipes éducatives et éditoriales qui ajoutent des sous-titres en ${name} pour des publics multilingues.`,
    heading: (name) => `Traduire des vidéos en ${name}`,
    useCasesHeading: "Cas d’usage fréquents",
    workflowTitle: "Workflow de traduction de sous-titres par IA",
    workflowDescription:
      "Importez des sous-titres, traduisez-les avec l’IA, vérifiez le résultat puis exportez des fichiers SRT propres prêts à publier.",
    workflowBackLabel: "Retour à la traduction IA →",
    cleanupTitle: "Éditez et synchronisez avant de traduire",
    cleanupDescription:
      "Utilisez l’éditeur de sous-titres pour nettoyer le timing et la formulation avant la localisation.",
    finalNote: (name) =>
      `Traduisez des sous-titres en ${name} avec des workflows IA pensés pour de vraies équipes vidéo.`,
    keywords: (name) => [
      `traduire une vidéo en ${name}`,
      `traducteur de sous-titres ${name}`,
      `traduction vidéo IA ${name}`,
      `sous-titres ${name}`,
    ],
  },
  de: {
    title: (name) => `Videos auf ${name} übersetzen | Translator`,
    description: (name, audience) =>
      `Übersetze Videountertitel für ${audience} mit KI-gestützten Untertitel-Workflows auf ${name}.`,
    intro: (name, audience) =>
      `Erreiche ${audience} mit ${name}-Untertiteln, die sich einfach prüfen, verfeinern und exportieren lassen.`,
    creatorUseCase: (audience) =>
      `Creator, die Videos für ${audience} lokalisieren.`,
    businessUseCase: (audience) =>
      `Unternehmen, die Produkt-, Schulungs- und Supportvideos für ${audience} anpassen.`,
    educationUseCase: (name) =>
      `Bildungs- und Redaktionsteams, die ${name}-Untertitel für mehrsprachige Zielgruppen hinzufügen.`,
    heading: (name) => `Videos auf ${name} übersetzen`,
    useCasesHeading: "Typische Anwendungsfälle",
    workflowTitle: "KI-Workflow für Untertitelübersetzung",
    workflowDescription:
      "Importiere Untertitel, übersetze sie mit KI, prüfe das Ergebnis und exportiere saubere SRT-Dateien, die sofort veröffentlicht werden können.",
    workflowBackLabel: "Zurück zur KI-Übersetzung →",
    cleanupTitle: "Vor der Übersetzung bearbeiten und synchronisieren",
    cleanupDescription:
      "Nutze den Untertitel-Editor, um Timing und Formulierungen vor der Lokalisierung zu bereinigen.",
    finalNote: (name) =>
      `Übersetze Untertitel auf ${name} mit KI-Workflows, die für echte Videoteams gebaut sind.`,
    keywords: (name) => [
      `Video auf ${name} übersetzen`,
      `${name} Untertitelübersetzer`,
      `KI-Videoübersetzung ${name}`,
      `${name} Untertitel`,
    ],
  },
  pt: {
    title: (name) => `Traduzir vídeos para ${name} | Translator`,
    description: (name, audience) =>
      `Traduza legendas de vídeo para ${name} para ${audience} com fluxos de legendagem assistidos por IA.`,
    intro: (name, audience) =>
      `Alcance ${audience} com legendas em ${name} fáceis de revisar, refinar e exportar.`,
    creatorUseCase: (audience) =>
      `Criadores que localizam vídeos para ${audience}.`,
    businessUseCase: (audience) =>
      `Empresas que adaptam vídeos de produto, treinamento e suporte para ${audience}.`,
    educationUseCase: (name) =>
      `Educadores e editoras que adicionam legendas em ${name} para públicos multilíngues.`,
    heading: (name) => `Traduzir vídeos para ${name}`,
    useCasesHeading: "Casos de uso comuns",
    workflowTitle: "Fluxo de tradução de legendas com IA",
    workflowDescription:
      "Importe legendas, traduza com IA, revise o resultado e exporte arquivos SRT limpos prontos para publicar.",
    workflowBackLabel: "Voltar para Tradução com IA →",
    cleanupTitle: "Edite e sincronize antes de traduzir",
    cleanupDescription:
      "Use o editor de legendas para ajustar tempo e redação antes da localização.",
    finalNote: (name) =>
      `Traduza legendas para ${name} com fluxos de IA feitos para equipes de vídeo de verdade.`,
    keywords: (name) => [
      `traduzir vídeo para ${name}`,
      `tradutor de legendas ${name}`,
      `tradução de vídeo com IA ${name}`,
      `legendas em ${name}`,
    ],
  },
};

export const translatedLanguageSlugs = [...TRANSLATED_LANGUAGE_SLUGS];

export function getLanguagePageContent(
  locale: Locale,
  slug: TranslatedLanguageSlug
) {
  const facts = languageFacts[slug];
  const copy = localeCopy[locale];
  const name = facts.names[locale];
  const audience = facts.audiences[locale];

  return {
    name,
    title: copy.title(name),
    description: copy.description(name, audience),
    intro: copy.intro(name, audience),
    useCases: [
      copy.creatorUseCase(audience),
      copy.businessUseCase(audience),
      copy.educationUseCase(name),
    ],
    keywords: copy.keywords(name),
    heading: copy.heading(name),
    useCasesHeading: copy.useCasesHeading,
    workflowTitle: copy.workflowTitle,
    workflowDescription: copy.workflowDescription,
    workflowBackLabel: copy.workflowBackLabel,
    cleanupTitle: copy.cleanupTitle,
    cleanupDescription: copy.cleanupDescription,
    finalNote: copy.finalNote(name),
  };
}

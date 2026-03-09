import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FeatureDownloadCta } from "../../components/FeatureDownloadCta";
import { HeroDownloadActions } from "../../components/HeroDownloadActions";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import {
  homeHrefForLocale,
  localizePathForLocale,
} from "../../lib/locale-routing";
import type { Locale } from "../../lib/locales";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

type SubtitleEditorPageCopy = {
  heroEyebrow: string;
  heroPoints: string[];
  screenshotCaption: string;
  screenshotAlt: string;
  outcomesEyebrow: string;
  outcomesTitle: string;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSteps: Array<{ step: string; title: string; body: string }>;
  bridgeTitle: string;
  bridgeBody: string;
  bridgePrimary: string;
  bridgeSecondary: string;
  ctaTitle: string;
  ctaBody: string;
};

const subtitleEditorScreenshot = {
  src: "/screenshots/subtitle-editor-workflow.webp",
  width: 3022,
  height: 1780,
};

const pageCopy: Record<Locale, SubtitleEditorPageCopy> = {
  en: {
    heroEyebrow: "Fix the subtitles without fighting the tool",
    heroPoints: [
      "Adjust timing while staying close to the video",
      "Merge, clean, and polish tracks in one workflow",
      "Keep editing connected to translation and final exports",
    ],
    screenshotCaption:
      "Subtitle work is easier when the video, the lines, and the next steps stay in the same place instead of getting split across separate tools.",
    screenshotAlt: "Editing and reviewing subtitles in Translator",
    outcomesEyebrow: "What you get",
    outcomesTitle:
      "The subtitle editor is built for getting to a cleaner final result, not just moving text around.",
    workflowEyebrow: "How it works",
    workflowTitle:
      "Clean, sync, and finish the subtitles without breaking the flow.",
    workflowSteps: [
      {
        step: "01",
        title: "Bring in the subtitles or generate them",
        body: "Start with an existing subtitle file or create one from the video so you have something concrete to work from.",
      },
      {
        step: "02",
        title: "Fix timing and clean the lines",
        body: "Adjust sync, merge awkward fragments, and shape the text into something more readable while previewing against the video.",
      },
      {
        step: "03",
        title: "Export or move into the next step",
        body: "Leave with cleaner subtitles, burn them into video, or pass them straight into translation without rebuilding the workflow.",
      },
    ],
    bridgeTitle: "Need the video first or want to keep going after editing?",
    bridgeBody:
      "Pull the source in from a URL, or use the cleaned subtitles as the foundation for translation and later outputs.",
    bridgePrimary: "See Video Downloader",
    bridgeSecondary: "See AI Translation",
    ctaTitle:
      "Download Translator and clean subtitles in the same place you watch, translate, and export.",
    ctaBody:
      "Fix the lines, fix the timing, and keep moving without turning subtitle work into a second toolchain.",
  },
  ko: {
    heroEyebrow: "자막 때문에 툴과 싸우지 마세요",
    heroPoints: [
      "영상 보면서 바로 타이밍을 맞출 수 있습니다",
      "트랙 병합, 정리, 다듬기를 한 흐름에서 끝낼 수 있습니다",
      "편집 뒤에도 번역과 최종 결과물까지 자연스럽게 이어집니다",
    ],
    screenshotCaption:
      "영상, 자막 줄, 다음 단계가 한곳에 모여 있으면 자막 작업이 훨씬 쉬워집니다. 여러 도구를 오갈 필요가 없기 때문입니다.",
    screenshotAlt: "Translator에서 자막을 편집하고 검토하는 화면",
    outcomesEyebrow: "얻게 되는 것",
    outcomesTitle:
      "이 자막 편집기는 텍스트 몇 줄 옮기는 도구가 아니라 결과물을 더 깔끔하게 만드는 도구입니다.",
    workflowEyebrow: "작동 방식",
    workflowTitle:
      "흐름을 끊지 않고 자막을 정리하고 싱크를 맞추고 마무리합니다.",
    workflowSteps: [
      {
        step: "01",
        title: "자막을 가져오거나 생성합니다",
        body: "기존 자막 파일로 시작하거나 영상에서 자막을 생성해 바로 작업을 시작합니다.",
      },
      {
        step: "02",
        title: "타이밍을 맞추고 줄을 정리합니다",
        body: "영상과 함께 미리보기를 보면서 싱크를 맞추고, 어색하게 쪼개진 줄을 합치고, 읽기 쉬운 형태로 다듬습니다.",
      },
      {
        step: "03",
        title: "내보내거나 다음 단계로 넘깁니다",
        body: "더 깨끗한 자막 파일을 남기거나 영상에 입히거나, 다시 시작하지 않고 바로 번역으로 넘길 수 있습니다.",
      },
    ],
    bridgeTitle: "먼저 영상이 필요하거나, 편집 뒤에도 계속 가고 싶다면",
    bridgeBody:
      "URL에서 원본 영상을 가져오거나, 정리된 자막을 번역과 다음 결과물의 기반으로 바로 쓸 수 있습니다.",
    bridgePrimary: "동영상 다운로드 보기",
    bridgeSecondary: "AI 번역 보기",
    ctaTitle:
      "Translator를 다운로드하고 자막 편집을 시청, 번역, 내보내기와 같은 곳에서 끝내세요.",
    ctaBody:
      "줄을 다듬고 타이밍을 맞추고, 자막 작업 때문에 또 다른 툴 체인을 만들지 말고 그대로 이어가세요.",
  },
  es: {
    heroEyebrow: "Arregla los subtítulos sin pelearte con la herramienta",
    heroPoints: [
      "Ajusta el tiempo sin perder de vista el video",
      "Une, limpia y pule pistas en un solo flujo",
      "Mantén la edición conectada con la traducción y la exportación final",
    ],
    screenshotCaption:
      "Trabajar subtítulos es más fácil cuando el video, las líneas y el siguiente paso siguen en el mismo lugar en vez de quedar repartidos entre varias herramientas.",
    screenshotAlt: "Editar y revisar subtítulos en Translator",
    outcomesEyebrow: "Lo que obtienes",
    outcomesTitle:
      "El editor de subtítulos está hecho para llegar a un resultado final más limpio, no solo para mover texto.",
    workflowEyebrow: "Cómo funciona",
    workflowTitle:
      "Limpia, sincroniza y termina los subtítulos sin romper el flujo.",
    workflowSteps: [
      {
        step: "01",
        title: "Importa los subtítulos o créalos",
        body: "Empieza con un archivo existente o genera uno desde el video para tener una base real sobre la que trabajar.",
      },
      {
        step: "02",
        title: "Corrige el tiempo y limpia las líneas",
        body: "Ajusta la sincronía, une fragmentos incómodos y deja el texto más legible mientras lo comparas con el video.",
      },
      {
        step: "03",
        title: "Exporta o sigue con el siguiente paso",
        body: "Sal con subtítulos más limpios, quémalos en el video o pásalos directo a traducción sin reconstruir el flujo.",
      },
    ],
    bridgeTitle: "Necesitas el video primero o quieres seguir después de editar?",
    bridgeBody:
      "Trae la fuente desde una URL o usa los subtítulos ya limpios como base para traducir y generar las siguientes salidas.",
    bridgePrimary: "Ver Descargador de Video",
    bridgeSecondary: "Ver Traducción con IA",
    ctaTitle:
      "Descarga Translator y limpia subtítulos en el mismo lugar donde ves, traduces y exportas.",
    ctaBody:
      "Arregla las líneas, corrige el tiempo y sigue adelante sin convertir el trabajo de subtítulos en otra cadena de herramientas.",
  },
  ja: {
    heroEyebrow: "字幕のためにツールと格闘しない",
    heroPoints: [
      "動画を見ながらタイミングを調整できます",
      "結合、整理、仕上げをひとつの流れで進められます",
      "編集のあとも翻訳と最終書き出しまで自然につながります",
    ],
    screenshotCaption:
      "動画、字幕の行、次の作業が同じ場所にあると、字幕作業はずっと楽になります。別々のツールを行き来しなくて済むからです。",
    screenshotAlt: "Translator で字幕を編集して確認する画面",
    outcomesEyebrow: "得られるもの",
    outcomesTitle:
      "この字幕エディタは、文字を動かすためではなく、よりきれいな仕上がりに持っていくために作られています。",
    workflowEyebrow: "使い方",
    workflowTitle:
      "流れを止めずに字幕を整え、同期し、仕上げます。",
    workflowSteps: [
      {
        step: "01",
        title: "字幕を読み込むか生成する",
        body: "既存の字幕ファイルから始めるか、動画から生成して、作業できる状態をすぐ作ります。",
      },
      {
        step: "02",
        title: "タイミングを直して行を整える",
        body: "動画を見ながら同期を調整し、不自然に分かれた行をまとめ、読みやすい形に整えます。",
      },
      {
        step: "03",
        title: "書き出すか次の工程へ進む",
        body: "きれいになった字幕を書き出す、動画に焼き込む、または流れを作り直さずそのまま翻訳へ進めます。",
      },
    ],
    bridgeTitle: "先に動画が必要ですか。それとも編集後も続けたいですか。",
    bridgeBody:
      "URL から元動画を取り込むか、整えた字幕を翻訳や次の出力の土台としてそのまま使えます。",
    bridgePrimary: "動画ダウンローダーを見る",
    bridgeSecondary: "AI 翻訳を見る",
    ctaTitle:
      "Translator をダウンロードして、視聴、翻訳、書き出しと同じ場所で字幕を整えてください。",
    ctaBody:
      "行を直し、タイミングを合わせ、字幕作業のために別のツール群を増やさずそのまま進めます。",
  },
  zh: {
    heroEyebrow: "别为了字幕和工具较劲",
    heroPoints: [
      "看着视频就能调整时间轴",
      "合并、清理、润色轨道都能在一个流程里完成",
      "编辑后还能自然接到翻译和最终导出",
    ],
    screenshotCaption:
      "当视频、字幕行和下一步操作都留在同一个地方时，做字幕会轻松得多，不用在几个工具之间来回切换。",
    screenshotAlt: "在 Translator 中编辑和检查字幕",
    outcomesEyebrow: "你得到什么",
    outcomesTitle:
      "这个字幕编辑器的目标不是单纯挪文字，而是把最终结果做得更干净。",
    workflowEyebrow: "怎么用",
    workflowTitle:
      "不中断流程，就能清理、同步并完成字幕。",
    workflowSteps: [
      {
        step: "01",
        title: "导入字幕或直接生成",
        body: "可以从现有字幕文件开始，也可以从视频生成一份，先把可操作的基础准备好。",
      },
      {
        step: "02",
        title: "修时间并整理字幕行",
        body: "一边对着视频预览，一边调整同步、合并别扭的碎片，并把文字整理得更好读。",
      },
      {
        step: "03",
        title: "导出或进入下一步",
        body: "你可以带着更干净的字幕离开，把字幕烧进视频，或者直接接到翻译流程，不必重搭一遍工作流。",
      },
    ],
    bridgeTitle: "先需要把视频拿进来，还是想在编辑后继续往下走？",
    bridgeBody:
      "你可以从 URL 拉取源视频，也可以把整理好的字幕直接作为翻译和后续输出的基础。",
    bridgePrimary: "查看视频下载器",
    bridgeSecondary: "查看 AI 翻译",
    ctaTitle:
      "下载 Translator，在观看、翻译和导出的同一个地方把字幕整理好。",
    ctaBody:
      "修好字幕行，校准时间，不要为了做字幕再搭一套额外工具链。",
  },
  fr: {
    heroEyebrow: "Corrigez les sous-titres sans vous battre avec l'outil",
    heroPoints: [
      "Ajustez le timing en restant près de la video",
      "Fusionnez, nettoyez et peaufinez les pistes dans un seul flux",
      "Gardez l'edition reliee a la traduction et aux exports finaux",
    ],
    screenshotCaption:
      "Le travail sur les sous-titres est plus simple quand la video, les lignes et la suite restent au meme endroit au lieu d'etre eparpilles entre plusieurs outils.",
    screenshotAlt: "Modification et revision des sous-titres dans Translator",
    outcomesEyebrow: "Ce que vous obtenez",
    outcomesTitle:
      "L'editeur de sous-titres est pense pour produire un resultat final plus propre, pas seulement pour deplacer du texte.",
    workflowEyebrow: "Comment ca marche",
    workflowTitle:
      "Nettoyez, synchronisez et terminez les sous-titres sans casser le rythme.",
    workflowSteps: [
      {
        step: "01",
        title: "Importez les sous-titres ou generez-les",
        body: "Partez d'un fichier existant ou creez-en un depuis la video pour avoir une base concrete sur laquelle travailler.",
      },
      {
        step: "02",
        title: "Corrigez le timing et nettoyez les lignes",
        body: "Ajustez la synchro, fusionnez les fragments maladroits et rendez le texte plus lisible tout en le comparant a la video.",
      },
      {
        step: "03",
        title: "Exportez ou passez a la suite",
        body: "Repartez avec des sous-titres plus propres, incrustez-les dans la video ou envoyez-les directement en traduction sans reconstruire le flux.",
      },
    ],
    bridgeTitle: "Besoin de recuperer la video d'abord ou envie de continuer apres l'edition ?",
    bridgeBody:
      "Recuperez la source depuis une URL ou utilisez les sous-titres nettoyes comme base pour la traduction et les sorties suivantes.",
    bridgePrimary: "Voir le telechargeur video",
    bridgeSecondary: "Voir la traduction IA",
    ctaTitle:
      "Telechargez Translator et nettoyez les sous-titres au meme endroit ou vous regardez, traduisez et exportez.",
    ctaBody:
      "Corrigez les lignes, corrigez le timing et avancez sans transformer le sous-titrage en seconde chaine d'outils.",
  },
  de: {
    heroEyebrow: "Untertitel korrigieren, ohne mit dem Tool zu kaempfen",
    heroPoints: [
      "Timing anpassen und dabei nah am Video bleiben",
      "Spuren in einem Ablauf zusammenfuehren, bereinigen und polieren",
      "Die Bearbeitung direkt mit Uebersetzung und Export verbunden halten",
    ],
    screenshotCaption:
      "Untertitelarbeit ist einfacher, wenn Video, Zeilen und naechste Schritte am selben Ort bleiben statt ueber mehrere Tools verteilt zu sein.",
    screenshotAlt: "Untertitel in Translator bearbeiten und pruefen",
    outcomesEyebrow: "Was du bekommst",
    outcomesTitle:
      "Der Untertitel-Editor ist dafuer gebaut, ein saubereres Endergebnis zu liefern und nicht nur Text zu verschieben.",
    workflowEyebrow: "So funktioniert es",
    workflowTitle:
      "Untertitel bereinigen, synchronisieren und fertigstellen, ohne den Fluss zu unterbrechen.",
    workflowSteps: [
      {
        step: "01",
        title: "Untertitel importieren oder erzeugen",
        body: "Starte mit einer vorhandenen Datei oder erstelle eine aus dem Video, damit du sofort mit einer konkreten Grundlage arbeiten kannst.",
      },
      {
        step: "02",
        title: "Timing korrigieren und Zeilen aufraeumen",
        body: "Passe die Synchronisierung an, fuehre unpassende Fragmente zusammen und forme den Text waehrend der Vorschau mit dem Video lesbarer.",
      },
      {
        step: "03",
        title: "Exportieren oder direkt weitermachen",
        body: "Nimm sauberere Untertitel mit, brenne sie ins Video ein oder gehe ohne Neuaufbau direkt in die Uebersetzung weiter.",
      },
    ],
    bridgeTitle: "Brauchst du zuerst das Video oder willst du nach der Bearbeitung direkt weitermachen?",
    bridgeBody:
      "Hol die Quelle per URL herein oder nutze die bereinigten Untertitel direkt als Grundlage fuer Uebersetzung und weitere Ausgaben.",
    bridgePrimary: "Video-Downloader ansehen",
    bridgeSecondary: "KI-Uebersetzung ansehen",
    ctaTitle:
      "Lade Translator herunter und bereinige Untertitel dort, wo du auch ansiehst, uebersetzt und exportierst.",
    ctaBody:
      "Korrigiere die Zeilen, korrigiere das Timing und arbeite weiter, ohne fuer Untertitel eine zweite Toolchain aufzubauen.",
  },
  pt: {
    heroEyebrow: "Arrume as legendas sem brigar com a ferramenta",
    heroPoints: [
      "Ajuste o tempo sem sair de perto do video",
      "Junte, limpe e refine as faixas em um so fluxo",
      "Mantenha a edicao ligada a traducao e aos exports finais",
    ],
    screenshotCaption:
      "Trabalhar nas legendas fica mais facil quando o video, as linhas e o proximo passo continuam no mesmo lugar em vez de ficarem espalhados entre ferramentas separadas.",
    screenshotAlt: "Edicao e revisao de legendas no Translator",
    outcomesEyebrow: "O que voce recebe",
    outcomesTitle:
      "O editor de legendas foi feito para chegar a um resultado final mais limpo, nao so para mover texto.",
    workflowEyebrow: "Como funciona",
    workflowTitle:
      "Limpe, sincronize e finalize as legendas sem quebrar o fluxo.",
    workflowSteps: [
      {
        step: "01",
        title: "Importe as legendas ou gere uma base",
        body: "Comece com um arquivo existente ou crie um a partir do video para ter algo concreto em maos.",
      },
      {
        step: "02",
        title: "Corrija o tempo e limpe as linhas",
        body: "Ajuste a sincronia, junte fragmentos estranhos e deixe o texto mais legivel enquanto compara com o video.",
      },
      {
        step: "03",
        title: "Exporte ou siga para a proxima etapa",
        body: "Saia com legendas mais limpas, grave-as no video ou mande direto para traducao sem montar o fluxo de novo.",
      },
    ],
    bridgeTitle: "Precisa do video primeiro ou quer continuar depois da edicao?",
    bridgeBody:
      "Traga a fonte por uma URL ou use as legendas limpas como base para traducao e para as proximas saidas.",
    bridgePrimary: "Ver downloader de video",
    bridgeSecondary: "Ver traducao com IA",
    ctaTitle:
      "Baixe o Translator e limpe as legendas no mesmo lugar em que voce assiste, traduz e exporta.",
    ctaBody:
      "Acerte as linhas, acerte o tempo e siga em frente sem transformar o trabalho de legendas em outra cadeia de ferramentas.",
  },
};

const metadataKeywords: Record<Locale, string[]> = {
  en: [
    "subtitle editor",
    "SRT editor",
    "sync subtitles",
    "merge subtitles",
    "subtitle timing",
    "free subtitle editor",
  ],
  ko: [
    "자막 편집기",
    "SRT 편집기",
    "자막 싱크",
    "자막 병합",
    "자막 타이밍",
    "무료 자막 편집기",
  ],
  es: [
    "editor de subtitulos",
    "editor SRT",
    "sincronizar subtitulos",
    "unir subtitulos",
    "tiempos de subtitulos",
    "editor de subtitulos gratis",
  ],
  ja: [
    "字幕エディタ",
    "SRT エディタ",
    "字幕同期",
    "字幕結合",
    "字幕タイミング",
    "無料字幕エディタ",
  ],
  zh: [
    "字幕编辑器",
    "SRT 编辑器",
    "字幕同步",
    "合并字幕",
    "字幕时间轴",
    "免费字幕编辑器",
  ],
  fr: [
    "editeur de sous-titres",
    "editeur SRT",
    "synchroniser sous-titres",
    "fusionner sous-titres",
    "timing sous-titres",
    "editeur de sous-titres gratuit",
  ],
  de: [
    "untertitel-editor",
    "SRT-editor",
    "untertitel synchronisieren",
    "untertitel zusammenfuehren",
    "untertitel timing",
    "kostenloser untertitel-editor",
  ],
  pt: [
    "editor de legendas",
    "editor SRT",
    "sincronizar legendas",
    "juntar legendas",
    "tempo das legendas",
    "editor de legendas gratis",
  ],
};

function getPageCopy(locale: Locale): SubtitleEditorPageCopy {
  return pageCopy[locale];
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: `${t("subtitleEditorTitle", locale)} | Translator`,
    description: t("subtitleEditorSubtitle", locale),
    path: "/subtitle-editor",
    keywords: metadataKeywords[locale],
    locale,
  });
}

export default async function SubtitleEditorPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = getPageCopy(locale);
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  const features = [
    {
      title: t("subtitleEditorFeature1Title", locale),
      body: t("subtitleEditorFeature1Desc", locale),
    },
    {
      title: t("subtitleEditorFeature2Title", locale),
      body: t("subtitleEditorFeature2Desc", locale),
    },
    {
      title: t("subtitleEditorFeature3Title", locale),
      body: t("subtitleEditorFeature3Desc", locale),
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navSubtitleEditor", locale) },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {t("subtitleEditorTitle", locale)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {t("subtitleEditorSubtitle", locale)}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-violet-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400">
                {t("subtitleEditorFreeNote", locale)}
              </p>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <Image
                  src={subtitleEditorScreenshot.src}
                  alt={copy.screenshotAlt}
                  width={subtitleEditorScreenshot.width}
                  height={subtitleEditorScreenshot.height}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="text-sm leading-6 text-gray-400">
                {copy.screenshotCaption}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.outcomesEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.outcomesTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.workflowEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.workflowTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.workflowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6"
              >
                <div className="text-sm font-semibold text-violet-300">
                  {item.step}
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {copy.bridgeTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
                  {copy.bridgeBody}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href={localizeHref("/video-downloader")}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  {copy.bridgePrimary}
                </Link>
                <Link
                  href={localizeHref("/translate")}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  {copy.bridgeSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="all-downloads" className="pb-20 pt-8 text-center">
          <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {copy.ctaTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300">
            {copy.ctaBody}
          </p>
          <FeatureDownloadCta locale={locale} note={t("subtitleEditorFreeNote", locale)} align="center" className="mt-8" />
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

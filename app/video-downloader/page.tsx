import Image from "next/image";
import Link from "next/link";
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

type VideoDownloaderPageCopy = {
  heroEyebrow: string;
  heroPoints: string[];
  intakeTitle: string;
  intakeCaption: string;
  intakeUrl: string;
  intakeQuality: string;
  intakeReady: string;
  outcomesEyebrow: string;
  outcomesTitle: string;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSteps: Array<{ step: string; title: string; body: string }>;
  utilityEyebrow: string;
  bridgeTitle: string;
  bridgeBody: string;
  bridgePrimary: string;
  bridgeSecondary: string;
  ctaTitle: string;
  ctaBody: string;
};

const pageCopy: Partial<Record<Locale, VideoDownloaderPageCopy>> = {
  en: {
    heroEyebrow: "Get the video into the workflow fast",
    heroPoints: [
      "Paste a URL and move straight into watching, subtitles, or translation",
      "Choose the quality that fits your workflow instead of taking whatever you get",
      "Treat downloading as the first step, not a separate detour",
    ],
    intakeTitle: "Paste URL -> choose quality -> keep moving",
    intakeCaption:
      "The downloader matters because it gets the source into the same workflow where you will watch it, subtitle it, translate it, or dub it.",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / audio only",
    intakeReady: "Ready for subtitles, translation, or export",
    outcomesEyebrow: "What you get",
    outcomesTitle:
      "The downloader is here to get you to the next step faster, not to trap you in a standalone utility.",
    workflowEyebrow: "How it works",
    workflowTitle:
      "Bring the video in, choose the version you need, and keep going.",
    workflowSteps: [
      {
        step: "01",
        title: "Paste the video URL",
        body: "Start from the link instead of doing extra prep outside the app.",
      },
      {
        step: "02",
        title: "Choose the right quality",
        body: "Pick the resolution or audio-only option that makes the most sense for transcription, subtitle work, or export.",
      },
      {
        step: "03",
        title: "Move directly into the next task",
        body: "Open the file in the same workflow and continue with subtitles, translation, dubbing, or finished exports.",
      },
    ],
    utilityEyebrow: "Useful details",
    bridgeTitle: "Want to do more once the file is inside the app?",
    bridgeBody:
      "The downloader is strongest when it hands off directly into subtitle editing or translation instead of ending the workflow.",
    bridgePrimary: "See Subtitle Editor",
    bridgeSecondary: "See AI Translation",
    ctaTitle:
      "Download Translator and turn video intake into the first step of the real workflow.",
    ctaBody:
      "Pull the video in from a URL, then keep going without switching to another app for subtitles, translation, or export.",
  },
  ko: {
    heroEyebrow: "영상을 빨리 가져오기",
    heroPoints: [
      "URL을 붙여넣고 바로 시청, 자막, 번역 단계로 넘어갑니다",
      "주어지는 파일을 그냥 받는 대신 필요한 품질을 고를 수 있습니다",
      "다운로드를 별도 유틸리티가 아니라 첫 단계로 다룹니다",
    ],
    intakeTitle: "URL 붙여넣기 -> 품질 선택 -> 바로 다음 단계",
    intakeCaption:
      "이 다운로더가 중요한 이유는 원본 영상을 시청, 자막, 번역, 더빙까지 이어지는 같은 흐름 안으로 바로 가져오기 때문입니다.",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / 오디오만",
    intakeReady: "자막, 번역, 내보내기 준비 완료",
    outcomesEyebrow: "얻게 되는 것",
    outcomesTitle:
      "이 다운로더는 여기서 끝나는 유틸리티가 아니라 다음 단계로 빨리 가기 위한 도구입니다.",
    workflowEyebrow: "작동 방식",
    workflowTitle:
      "영상을 가져오고 필요한 버전을 고른 뒤 바로 다음 단계로 이어갑니다.",
    workflowSteps: [
      {
        step: "01",
        title: "영상 URL을 붙여넣습니다",
        body: "앱 밖에서 따로 준비하지 않고 링크에서 바로 시작합니다.",
      },
      {
        step: "02",
        title: "맞는 품질을 고릅니다",
        body: "전사, 자막 작업, 내보내기에 맞는 해상도나 오디오 전용 옵션을 선택합니다.",
      },
      {
        step: "03",
        title: "같은 흐름에서 바로 다음 작업으로 갑니다",
        body: "파일을 열고 자막, 번역, 더빙, 완성본 내보내기까지 같은 흐름 안에서 이어갑니다.",
      },
    ],
    utilityEyebrow: "실용적인 디테일",
    bridgeTitle: "파일이 앱 안에 들어온 뒤에도 계속 가고 싶다면",
    bridgeBody:
      "이 다운로더는 여기서 끝나는 것보다 자막 편집이나 번역으로 바로 이어질 때 가장 강합니다.",
    bridgePrimary: "자막 편집기 보기",
    bridgeSecondary: "AI 번역 보기",
    ctaTitle:
      "Translator를 다운로드하고 영상 다운로드를 진짜 첫 단계로 바꾸세요.",
    ctaBody:
      "URL에서 영상을 가져오고, 다른 앱으로 옮기지 않고 자막, 번역, 내보내기까지 이어가세요.",
  },
  es: {
    heroEyebrow: "Mete el video en el flujo rapido",
    heroPoints: [
      "Pega una URL y pasa directo a ver, subtitular o traducir",
      "Elige la calidad que encaja con tu flujo en vez de conformarte con cualquier archivo",
      "Trata la descarga como el primer paso, no como un desvio aparte",
    ],
    intakeTitle: "Pega URL -> elige calidad -> sigue",
    intakeCaption:
      "El descargador importa porque mete la fuente en el mismo flujo donde luego la vas a ver, subtitular, traducir o doblar.",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / solo audio",
    intakeReady: "Listo para subtitulos, traduccion o exportacion",
    outcomesEyebrow: "Lo que obtienes",
    outcomesTitle:
      "El descargador existe para llevarte mas rapido al siguiente paso, no para encerrarte en una utilidad aislada.",
    workflowEyebrow: "Como funciona",
    workflowTitle:
      "Trae el video, elige la version que necesitas y sigue adelante.",
    workflowSteps: [
      {
        step: "01",
        title: "Pega la URL del video",
        body: "Empieza desde el enlace en vez de hacer preparacion extra fuera de la app.",
      },
      {
        step: "02",
        title: "Elige la calidad adecuada",
        body: "Selecciona la resolucion o la opcion solo audio que mejor encaje con transcripcion, subtitulos o exportacion.",
      },
      {
        step: "03",
        title: "Pasa directo a la siguiente tarea",
        body: "Abre el archivo en el mismo flujo y sigue con subtitulos, traduccion, doblaje o exportaciones finales.",
      },
    ],
    utilityEyebrow: "Detalles utiles",
    bridgeTitle: "Quieres hacer mas cuando el archivo ya esta dentro de la app?",
    bridgeBody:
      "El descargador funciona mejor cuando pasa directo a la edicion de subtitulos o a la traduccion en vez de cortar el flujo.",
    bridgePrimary: "Ver Editor de Subtitulos",
    bridgeSecondary: "Ver Traduccion con IA",
    ctaTitle:
      "Descarga Translator y convierte la entrada del video en el primer paso del flujo real.",
    ctaBody:
      "Trae el video desde una URL y sigue sin cambiar a otra app para subtitulos, traduccion o exportacion.",
  },
  ja: {
    heroEyebrow: "動画をすばやくワークフローに入れる",
    heroPoints: [
      "URL を貼るだけで視聴、字幕、翻訳へすぐ進めます",
      "手に入ったものをそのまま使うのではなく、必要な品質を選べます",
      "ダウンロードを別の寄り道ではなく最初の工程として扱えます",
    ],
    intakeTitle: "URL を貼る -> 品質を選ぶ -> そのまま進む",
    intakeCaption:
      "このダウンローダーが重要なのは、元動画を視聴、字幕、翻訳、吹き替えまで続く同じ流れにそのまま入れられるからです。",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / 音声のみ",
    intakeReady: "字幕、翻訳、書き出しの準備完了",
    outcomesEyebrow: "得られるもの",
    outcomesTitle:
      "このダウンローダーは単体のユーティリティに閉じ込めるためではなく、次の工程へ早く進むためにあります。",
    workflowEyebrow: "使い方",
    workflowTitle:
      "動画を取り込み、必要な版を選び、そのまま次へ進みます。",
    workflowSteps: [
      {
        step: "01",
        title: "動画 URL を貼り付ける",
        body: "アプリの外で余計な準備をせず、リンクからそのまま始めます。",
      },
      {
        step: "02",
        title: "合う品質を選ぶ",
        body: "文字起こし、字幕作業、書き出しに合う解像度や音声のみの選択肢を選びます。",
      },
      {
        step: "03",
        title: "同じ流れで次の作業へ進む",
        body: "同じワークフローでファイルを開き、字幕、翻訳、吹き替え、完成書き出しまで続けられます。",
      },
    ],
    utilityEyebrow: "実用的なポイント",
    bridgeTitle: "ファイルをアプリに入れたあとも続けたいですか。",
    bridgeBody:
      "このダウンローダーは、そこで終わるより、字幕編集や翻訳へそのまま渡すときに最も力を発揮します。",
    bridgePrimary: "字幕エディタを見る",
    bridgeSecondary: "AI 翻訳を見る",
    ctaTitle:
      "Translator をダウンロードして、動画の取り込みを本当のワークフローの最初の一歩にしてください。",
    ctaBody:
      "URL から動画を取り込み、字幕、翻訳、書き出しのために別のアプリへ切り替えずに進めます。",
  },
  zh: {
    heroEyebrow: "把视频快速拉进流程",
    heroPoints: [
      "粘贴 URL 后，直接进入观看、字幕或翻译",
      "按你的流程选择合适画质，而不是只能接受拿到什么算什么",
      "把下载当成第一步，而不是额外绕路",
    ],
    intakeTitle: "粘贴 URL -> 选择画质 -> 继续往下",
    intakeCaption:
      "这个下载器的价值在于，它能把源视频直接带进同一个流程，后面你会在这里观看、做字幕、翻译或配音。",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / 仅音频",
    intakeReady: "可用于字幕、翻译或导出",
    outcomesEyebrow: "你得到什么",
    outcomesTitle:
      "这个下载器的存在，是为了让你更快到下一步，而不是把你困在一个独立小工具里。",
    workflowEyebrow: "怎么用",
    workflowTitle:
      "拉进视频，选好需要的版本，然后继续做事。",
    workflowSteps: [
      {
        step: "01",
        title: "粘贴视频 URL",
        body: "直接从链接开始，不用先在应用外做额外准备。",
      },
      {
        step: "02",
        title: "选择合适的质量",
        body: "根据转录、字幕处理或导出需要，选择分辨率或仅音频版本。",
      },
      {
        step: "03",
        title: "直接进入下一项任务",
        body: "在同一个流程里打开文件，继续做字幕、翻译、配音或最终导出。",
      },
    ],
    utilityEyebrow: "实用细节",
    bridgeTitle: "文件进了应用之后，还想继续往下做？",
    bridgeBody:
      "这个下载器最强的地方，是把文件直接交给字幕编辑或翻译，而不是在下载这一步就结束。",
    bridgePrimary: "查看字幕编辑器",
    bridgeSecondary: "查看 AI 翻译",
    ctaTitle:
      "下载 Translator，把视频导入变成真正流程的第一步。",
    ctaBody:
      "从 URL 拉入视频后，不用切去别的应用，就能继续做字幕、翻译和导出。",
  },
  fr: {
    heroEyebrow: "Faites entrer la video vite dans le flux",
    heroPoints: [
      "Collez une URL et passez directement au visionnage, aux sous-titres ou a la traduction",
      "Choisissez la qualite adaptee a votre flux au lieu de subir le fichier obtenu",
      "Traitez le telechargement comme la premiere etape, pas comme un detour separe",
    ],
    intakeTitle: "Collez l'URL -> choisissez la qualite -> continuez",
    intakeCaption:
      "Le telechargeur compte parce qu'il fait entrer la source dans le meme flux ou vous allez ensuite la regarder, la sous-titrer, la traduire ou la doubler.",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / audio seul",
    intakeReady: "Pret pour les sous-titres, la traduction ou l'export",
    outcomesEyebrow: "Ce que vous obtenez",
    outcomesTitle:
      "Le telechargeur est la pour vous faire arriver plus vite a la suite, pas pour vous coincer dans un utilitaire isole.",
    workflowEyebrow: "Comment ca marche",
    workflowTitle:
      "Importez la video, choisissez la version qu'il vous faut et continuez.",
    workflowSteps: [
      {
        step: "01",
        title: "Collez l'URL de la video",
        body: "Partez du lien au lieu de faire une preparation supplementaire hors de l'app.",
      },
      {
        step: "02",
        title: "Choisissez la bonne qualite",
        body: "Prenez la resolution ou l'option audio seul la plus adaptee a la transcription, au sous-titrage ou a l'export.",
      },
      {
        step: "03",
        title: "Passez directement a la suite",
        body: "Ouvrez le fichier dans le meme flux et continuez avec les sous-titres, la traduction, le doublage ou l'export final.",
      },
    ],
    utilityEyebrow: "Details utiles",
    bridgeTitle: "Envie d'aller plus loin une fois le fichier dans l'app ?",
    bridgeBody:
      "Le telechargeur est le plus utile quand il passe directement a l'edition de sous-titres ou a la traduction au lieu de couper le flux.",
    bridgePrimary: "Voir l'editeur de sous-titres",
    bridgeSecondary: "Voir la traduction IA",
    ctaTitle:
      "Telechargez Translator et faites de l'import video la premiere vraie etape du flux.",
    ctaBody:
      "Importez la video depuis une URL puis continuez sans changer d'app pour les sous-titres, la traduction ou l'export.",
  },
  de: {
    heroEyebrow: "Das Video schnell in den Ablauf bringen",
    heroPoints: [
      "URL einfuegen und direkt mit Anschauen, Untertiteln oder Uebersetzen weitermachen",
      "Die Qualitaet waehlen, die zu deinem Ablauf passt, statt einfach zu nehmen, was ankommt",
      "Den Download als ersten Schritt behandeln und nicht als separaten Umweg",
    ],
    intakeTitle: "URL einfuegen -> Qualitaet waehlen -> weiterarbeiten",
    intakeCaption:
      "Der Downloader ist wichtig, weil er die Quelle direkt in denselben Ablauf bringt, in dem du sie ansiehst, untertitelst, uebersetzt oder vertonst.",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / nur Audio",
    intakeReady: "Bereit fuer Untertitel, Uebersetzung oder Export",
    outcomesEyebrow: "Was du bekommst",
    outcomesTitle:
      "Der Downloader ist dafuer da, dich schneller zum naechsten Schritt zu bringen und dich nicht in einem Einzelwerkzeug festzuhalten.",
    workflowEyebrow: "So funktioniert es",
    workflowTitle:
      "Video holen, passende Version waehlen und direkt weitermachen.",
    workflowSteps: [
      {
        step: "01",
        title: "Video-URL einfuegen",
        body: "Starte mit dem Link, statt ausserhalb der App zusaetzlich etwas vorzubereiten.",
      },
      {
        step: "02",
        title: "Die richtige Qualitaet waehlen",
        body: "Waehle die Aufloesung oder Nur-Audio-Option, die fuer Transkription, Untertitel oder Export am besten passt.",
      },
      {
        step: "03",
        title: "Direkt zur naechsten Aufgabe gehen",
        body: "Oeffne die Datei im selben Ablauf und mach mit Untertiteln, Uebersetzung, Dubbing oder finalen Exporten weiter.",
      },
    ],
    utilityEyebrow: "Nuetzliche Details",
    bridgeTitle: "Willst du mehr machen, sobald die Datei in der App ist?",
    bridgeBody:
      "Der Downloader ist am staerksten, wenn er direkt an Untertitelbearbeitung oder Uebersetzung uebergibt statt den Ablauf zu beenden.",
    bridgePrimary: "Untertitel-Editor ansehen",
    bridgeSecondary: "KI-Uebersetzung ansehen",
    ctaTitle:
      "Lade Translator herunter und mach den Video-Import zum ersten Schritt des echten Workflows.",
    ctaBody:
      "Hol das Video per URL herein und arbeite ohne App-Wechsel mit Untertiteln, Uebersetzung oder Export weiter.",
  },
  pt: {
    heroEyebrow: "Coloque o video no fluxo rapido",
    heroPoints: [
      "Cole uma URL e va direto para assistir, legendar ou traduzir",
      "Escolha a qualidade que faz sentido para o seu fluxo em vez de aceitar qualquer arquivo",
      "Trate o download como o primeiro passo, nao como um desvio separado",
    ],
    intakeTitle: "Cole a URL -> escolha a qualidade -> siga",
    intakeCaption:
      "O downloader importa porque coloca a fonte no mesmo fluxo em que voce vai assistir, legendar, traduzir ou dublar.",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / so audio",
    intakeReady: "Pronto para legendas, traducao ou export",
    outcomesEyebrow: "O que voce recebe",
    outcomesTitle:
      "O downloader esta aqui para levar voce mais rapido para a proxima etapa, nao para prender voce em uma ferramenta isolada.",
    workflowEyebrow: "Como funciona",
    workflowTitle:
      "Traga o video, escolha a versao certa e siga em frente.",
    workflowSteps: [
      {
        step: "01",
        title: "Cole a URL do video",
        body: "Comece pelo link em vez de fazer preparacao extra fora do app.",
      },
      {
        step: "02",
        title: "Escolha a qualidade certa",
        body: "Selecione a resolucao ou a opcao so audio que faz mais sentido para transcricao, legendas ou exportacao.",
      },
      {
        step: "03",
        title: "Va direto para a proxima tarefa",
        body: "Abra o arquivo no mesmo fluxo e continue com legendas, traducao, dublagem ou exports finais.",
      },
    ],
    utilityEyebrow: "Detalhes uteis",
    bridgeTitle: "Quer fazer mais quando o arquivo ja estiver dentro do app?",
    bridgeBody:
      "O downloader fica mais forte quando entrega direto para a edicao de legendas ou para a traducao em vez de encerrar o fluxo.",
    bridgePrimary: "Ver editor de legendas",
    bridgeSecondary: "Ver traducao com IA",
    ctaTitle:
      "Baixe o Translator e transforme a entrada do video no primeiro passo do fluxo real.",
    ctaBody:
      "Traga o video por URL e siga sem trocar de app para legendas, traducao ou exportacao.",
  },
  vi: {
    heroEyebrow: "Đưa video vào quy trình thật nhanh",
    heroPoints: [
      "Dán URL rồi đi thẳng sang xem, làm phụ đề hoặc dịch",
      "Chọn chất lượng phù hợp với quy trình của bạn thay vì chấp nhận bất cứ thứ gì có sẵn",
      "Coi tải xuống là bước đầu tiên chứ không phải một đường vòng riêng",
    ],
    intakeTitle: "Dán URL -> chọn chất lượng -> tiếp tục",
    intakeCaption:
      "Trình tải xuống quan trọng vì nó đưa nguồn video vào cùng một quy trình nơi bạn sẽ xem, làm phụ đề, dịch hoặc lồng tiếng.",
    intakeUrl: "https://www.youtube.com/watch?v=...",
    intakeQuality: "1080p / 720p / chỉ âm thanh",
    intakeReady: "Sẵn sàng cho phụ đề, dịch hoặc xuất file",
    outcomesEyebrow: "Bạn nhận được gì",
    outcomesTitle:
      "Trình tải xuống ở đây để đưa bạn sang bước tiếp theo nhanh hơn, không phải để nhốt bạn trong một tiện ích đứng riêng.",
    workflowEyebrow: "Cách hoạt động",
    workflowTitle:
      "Đưa video vào, chọn đúng phiên bản cần dùng và tiếp tục đi tiếp.",
    workflowSteps: [
      {
        step: "01",
        title: "Dán URL của video",
        body: "Bắt đầu từ đường link thay vì phải chuẩn bị thêm ở ngoài ứng dụng.",
      },
      {
        step: "02",
        title: "Chọn đúng chất lượng",
        body: "Chọn độ phân giải hoặc tùy chọn chỉ âm thanh phù hợp nhất cho chép lời, làm phụ đề hoặc xuất file.",
      },
      {
        step: "03",
        title: "Đi thẳng sang công việc tiếp theo",
        body: "Mở tệp trong cùng quy trình và tiếp tục với phụ đề, dịch, lồng tiếng hoặc xuất file hoàn chỉnh.",
      },
    ],
    utilityEyebrow: "Chi tiết hữu ích",
    bridgeTitle: "Muốn làm thêm sau khi tệp đã nằm trong ứng dụng?",
    bridgeBody:
      "Trình tải xuống mạnh nhất khi nó bàn giao thẳng sang chỉnh sửa phụ đề hoặc dịch thay vì kết thúc quy trình ở đó.",
    bridgePrimary: "Xem Trình chỉnh sửa phụ đề",
    bridgeSecondary: "Xem Dịch bằng AI",
    ctaTitle:
      "Tải Translator và biến việc nạp video thành bước đầu tiên của quy trình thực sự.",
    ctaBody:
      "Kéo video vào từ URL rồi tiếp tục mà không cần đổi sang ứng dụng khác để làm phụ đề, dịch hoặc xuất file.",
  },
};

const downloaderScreenshot = {
  src: "/screenshots/video-downloader-workflow.webp",
  width: 3024,
  height: 1962,
};

const metadataKeywords: Partial<Record<Locale, string[]>> = {
  en: [
    "YouTube video downloader",
    "download video from URL",
    "free video downloader",
    "video downloader for subtitles",
    "AI video translator",
  ],
  ko: [
    "YouTube 동영상 다운로더",
    "URL 동영상 다운로드",
    "무료 동영상 다운로더",
    "자막용 동영상 다운로드",
    "AI 비디오 번역",
  ],
  es: [
    "descargador de videos de YouTube",
    "descargar video desde URL",
    "descargador de video gratis",
    "descargador de video para subtitulos",
    "traductor de video con IA",
  ],
  ja: [
    "YouTube 動画ダウンローダー",
    "URL から動画をダウンロード",
    "無料動画ダウンローダー",
    "字幕用動画ダウンローダー",
    "AI 動画翻訳",
  ],
  zh: [
    "YouTube 视频下载器",
    "从 URL 下载视频",
    "免费视频下载器",
    "字幕用视频下载",
    "AI 视频翻译",
  ],
  fr: [
    "telechargeur video YouTube",
    "telecharger une video depuis une URL",
    "telechargeur video gratuit",
    "telechargeur video pour sous-titres",
    "traduction video IA",
  ],
  de: [
    "YouTube Video Downloader",
    "Video per URL herunterladen",
    "kostenloser Video Downloader",
    "Video Downloader fuer Untertitel",
    "KI Video Uebersetzer",
  ],
  pt: [
    "downloader de video do YouTube",
    "baixar video por URL",
    "downloader de video gratis",
    "downloader de video para legendas",
    "tradutor de video com IA",
  ],
  vi: [
    "trình tải video YouTube",
    "tải video từ URL",
    "trình tải video miễn phí",
    "tải video để làm phụ đề",
    "trình dịch video AI",
  ],
};

function getPageCopy(locale: Locale): VideoDownloaderPageCopy {
  return pageCopy[locale] ?? pageCopy.en!;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return buildMetadata({
    title: `${t("videoDownloaderTitle", locale)} | Translator`,
    description: t("videoDownloaderSubtitle", locale),
    path: "/video-downloader",
    keywords: metadataKeywords[locale] ?? metadataKeywords.en!,
    locale,
  });
}

export default async function VideoDownloaderPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = getPageCopy(locale);
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  const highlights = [
    {
      title: t("videoDownloaderFeature1Title", locale),
      body: t("videoDownloaderFeature1Desc", locale),
    },
    {
      title: t("videoDownloaderFeature2Title", locale),
      body: t("videoDownloaderFeature2Desc", locale),
    },
    {
      title: t("videoDownloaderFeature3Title", locale),
      body: t("videoDownloaderFeature3Desc", locale),
    },
  ];

  const utilityCards = [
    {
      title: t("videoDownloaderPlatforms", locale),
      body: t("videoDownloaderPlatformsDesc", locale),
      bullets: [
        t("videoDownloaderPlatform1", locale),
        t("videoDownloaderPlatform2", locale),
      ],
    },
    {
      title: t("videoDownloaderQuality", locale),
      body: t("videoDownloaderQualityDesc", locale),
      bullets: [
        t("videoDownloaderQuality1", locale),
        t("videoDownloaderQuality2", locale),
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navVideoDownloader", locale) },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {t("videoDownloaderTitle", locale)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {t("videoDownloaderSubtitle", locale)}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400">
                {t("videoDownloaderFreeNote", locale)}
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                {copy.intakeTitle}
              </div>
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <Image
                  src={downloaderScreenshot.src}
                  alt={t("videoDownloaderTitle", locale)}
                  width={downloaderScreenshot.width}
                  height={downloaderScreenshot.height}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="text-sm leading-6 text-gray-400">
                {copy.intakeCaption}
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
            {highlights.map((item) => (
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
                <div className="text-sm font-semibold text-emerald-300">
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
          <div className="max-w-5xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.utilityEyebrow}
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {utilityCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {item.body}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
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
                  href={localizeHref("/subtitle-editor")}
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
          <FeatureDownloadCta locale={locale} note={t("videoDownloaderFreeNote", locale)} align="center" className="mt-8" />
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

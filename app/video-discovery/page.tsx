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

type DiscoveryPageCopy = {
  title: string;
  description: string;
  breadcrumb: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPoints: string[];
  screenshotAlt: string;
  screenshotCaption: string;
  outcomesEyebrow: string;
  outcomesTitle: string;
  outcomes: Array<{ title: string; body: string }>;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSteps: Array<{ step: string; title: string; body: string }>;
  reasonsEyebrow: string;
  reasonsTitle: string;
  reasons: Array<{ title: string; body: string }>;
  bridgeTitle: string;
  bridgeBody: string;
  bridgePrimary: string;
  bridgeSecondary: string;
  ctaTitle: string;
  ctaBody: string;
  ctaNote: string;
};

const discoveryScreenshot = {
  src: "/screenshots/ai-video-recommendation.webp",
  width: 1600,
  height: 1017,
};

const discoveryCopy: Partial<Record<Locale, DiscoveryPageCopy>> = {
  en: {
    title: "AI video discovery for finding videos beyond your language bubble",
    description:
      "Use Translator to find videos your YouTube algorithm would never surface, watch them in your own language, and move the best ones into the rest of your workflow.",
    breadcrumb: "Video Discovery",
    heroEyebrow: "Find before you translate",
    heroTitle: "Find videos your YouTube algorithm would never surface.",
    heroBody:
      "Most video tools begin after you already have the link. Translator helps you describe what you want in your own language, pull in videos from other language worlds, and keep going once you find something worth keeping.",
    heroPoints: [
      "Search in your own language and pull in foreign-language videos",
      "Keep exploring with follow-ups instead of starting from scratch",
      "Open, download, subtitle, dub, or export from the same workflow",
    ],
    screenshotAlt: "Translator AI video discovery results",
    screenshotCaption:
      "Describe the kind of video you want, then keep searching deeper until you find the channel or clip worth keeping.",
    outcomesEyebrow: "What this unlocks",
    outcomesTitle:
      "Discovery stops being a dead end and becomes the first step in the workflow.",
    outcomes: [
      {
        title: "Find across languages, not just across keywords",
        body: "Search in the language you think in and surface creators, channels, and formats that usually stay trapped inside another audience's feed.",
      },
      {
        title: "Judge the video before you commit to the work",
        body: "Open promising results, watch with translated subtitles, and decide what is actually worth saving, dubbing, clipping, or exporting.",
      },
      {
        title: "Keep the good finds moving",
        body: "Downloaded videos land inside the same app, so the handoff into subtitles, dubbing, highlights, or finished exports feels immediate instead of broken.",
      },
    ],
    workflowEyebrow: "How it works",
    workflowTitle: "A better discovery loop for foreign-language video.",
    workflowSteps: [
      {
        step: "01",
        title: "Describe what you want",
        body: "Start with a topic, creator type, audience, mood, or country in your own language instead of guessing exact titles or keywords.",
      },
      {
        step: "02",
        title: "Search deeper, not wider",
        body: "Use follow-ups and search-more results to keep pushing into adjacent channels and recommendations instead of restarting from zero.",
      },
      {
        step: "03",
        title: "Turn the right result into work",
        body: "Once you find the right video, download it, watch it in your own language, and move straight into subtitles, dubbing, or export.",
      },
    ],
    reasonsEyebrow: "Why it's useful",
    reasonsTitle:
      "Use it to find videos you would have missed, watch them in your own language, and keep the good ones moving when you want more than just viewing.",
    reasons: [
      {
        title: "Find videos you would not have found on your own",
        body: "Search in your own language and reach creators, channels, and topics that usually stay trapped inside another language ecosystem.",
      },
      {
        title: "Know quickly whether a video is worth keeping",
        body: "Open it, watch it with translated subtitles, and decide whether it is worth saving, dubbing, clipping, or exporting.",
      },
      {
        title: "Keep moving when you find something good",
        body: "Download the video and turn it into a subtitled or dubbed version without switching to a different toolchain.",
      },
    ],
    bridgeTitle: "Want to keep going once you find the right video?",
    bridgeBody:
      "Translator is strongest when discovery flows directly into translated viewing and finished outputs.",
    bridgePrimary: "See AI Translation",
    bridgeSecondary: "See Subtitle Editor",
    ctaTitle:
      "Download Translator and start finding videos outside your usual feed.",
    ctaBody:
      "Use discovery as the front door, then keep the best videos moving through the rest of the workflow.",
    ctaNote:
      "Downloading and subtitle editing are free. AI features use credits only when you run them.",
  },
  ko: {
    title: "언어 장벽 밖의 영상을 찾는 AI 비디오 발견 기능",
    description:
      "Translator로 유튜브 알고리즘이 잘 보여주지 않던 영상을 찾고, 내 언어로 보고, 좋은 영상은 바로 다음 단계로 이어가세요.",
    breadcrumb: "비디오 발견",
    heroEyebrow: "번역보다 먼저 필요한 것",
    heroTitle: "유튜브 알고리즘이 잘 안 보여주던 영상을 찾습니다.",
    heroBody:
      "대부분의 비디오 툴은 이미 링크가 손에 있다는 전제에서 시작합니다. Translator는 내가 원하는 영상을 내 언어로 설명하면 다른 언어권의 영상까지 끌어오고, 좋은 영상을 찾은 뒤에도 바로 다음 작업으로 이어지게 해줍니다.",
    heroPoints: [
      "내 언어로 검색해 다른 언어권 영상을 끌어옵니다",
      "처음부터 다시 시작하지 않고 후속 검색으로 더 깊게 파고듭니다",
      "열기, 다운로드, 자막, 더빙, 내보내기까지 한 흐름으로 이어집니다",
    ],
    screenshotAlt: "Translator AI 비디오 발견 결과 화면",
    screenshotCaption:
      "원하는 영상의 느낌을 설명하고, 마음에 드는 채널이나 영상을 찾을 때까지 계속 더 깊게 탐색할 수 있습니다.",
    outcomesEyebrow: "무엇이 달라지나",
    outcomesTitle:
      "발견이 막다른 길이 아니라 전체 흐름의 첫 단계가 됩니다.",
    outcomes: [
      {
        title: "키워드만이 아니라 언어 경계를 넘어 찾습니다",
        body: "내가 생각하는 언어로 검색하고, 다른 시청자 층 안에 갇혀 있던 크리에이터와 채널, 포맷까지 끌어올 수 있습니다.",
      },
      {
        title: "작업에 들어가기 전에 먼저 판단할 수 있습니다",
        body: "유망한 결과를 열어 번역 자막으로 먼저 보고, 어떤 영상이 저장, 더빙, 클립, 내보내기까지 갈 가치가 있는지 판단할 수 있습니다.",
      },
      {
        title: "좋은 영상을 바로 다음 단계로 넘깁니다",
        body: "다운로드한 영상이 같은 앱 안에 남기 때문에 자막, 더빙, 하이라이트, 완성본 내보내기로 넘어가는 흐름이 끊기지 않습니다.",
      },
    ],
    workflowEyebrow: "작동 방식",
    workflowTitle: "다른 언어권 영상을 더 잘 찾는 발견 루프.",
    workflowSteps: [
      {
        step: "01",
        title: "원하는 것을 설명합니다",
        body: "정확한 제목이나 키워드를 억지로 맞추기보다 주제, 크리에이터 유형, 분위기, 국가를 내 언어로 설명합니다.",
      },
      {
        step: "02",
        title: "넓게가 아니라 깊게 찾습니다",
        body: "처음부터 다시 시작하지 않고 후속 질문과 Search more로 인접 채널과 추천 흐름까지 계속 파고듭니다.",
      },
      {
        step: "03",
        title: "맞는 영상을 바로 작업으로 이어갑니다",
        body: "좋은 영상을 찾으면 다운로드하고, 내 언어로 보고, 바로 자막, 더빙, 내보내기로 넘길 수 있습니다.",
      },
    ],
    reasonsEyebrow: "왜 유용한가",
    reasonsTitle:
      "놓쳤을 영상을 찾고, 내 언어로 보고, 거기서 끝내지 않고 바로 다음 단계로 이어갈 수 있습니다.",
    reasons: [
      {
        title: "혼자서는 찾지 못했을 영상을 찾습니다",
        body: "내 언어로 검색하고, 다른 언어권 안에 갇혀 있던 크리에이터, 채널, 주제까지 닿을 수 있습니다.",
      },
      {
        title: "어떤 영상이 남길 가치가 있는지 빨리 판단합니다",
        body: "영상을 열어 번역 자막으로 먼저 보고, 저장할지, 더빙할지, 클립으로 만들지, 내보낼지 바로 판단할 수 있습니다.",
      },
      {
        title: "좋은 영상을 찾으면 바로 다음 단계로 넘깁니다",
        body: "영상을 다운로드하고, 다른 툴로 옮겨 다니지 않고 자막 영상이나 더빙 영상으로 바로 이어갈 수 있습니다.",
      },
    ],
    bridgeTitle: "좋은 영상을 찾은 뒤에도 계속 이어가고 싶다면",
    bridgeBody:
      "Translator는 발견이 번역 시청과 완성된 결과물로 바로 이어질 때 가장 강합니다.",
    bridgePrimary: "AI 번역 보기",
    bridgeSecondary: "자막 편집기 보기",
    ctaTitle:
      "Translator를 다운로드하고 평소 알고리즘 밖의 영상을 찾기 시작하세요.",
    ctaBody:
      "발견을 시작점으로 삼고, 좋은 영상은 나머지 워크플로우까지 계속 이어가세요.",
    ctaNote:
      "다운로드와 자막 편집은 무료입니다. AI 기능은 실행할 때만 크레딧을 사용합니다.",
  },
  es: {
    title: "Descubrimiento de video con IA para encontrar videos fuera de tu burbuja de idioma",
    description:
      "Usa Translator para encontrar videos que tu algoritmo de YouTube nunca te mostraría, verlos en tu idioma y llevar los mejores al resto de tu flujo.",
    breadcrumb: "Descubrimiento de Videos",
    heroEyebrow: "Encuentra antes de traducir",
    heroTitle: "Encuentra videos que tu algoritmo de YouTube nunca te mostraría.",
    heroBody:
      "La mayoría de las herramientas de video empiezan cuando ya tienes el enlace. Translator te deja describir lo que quieres en tu idioma, traer videos de otros mundos lingüísticos y seguir avanzando cuando encuentras algo que vale la pena guardar.",
    heroPoints: [
      "Busca en tu idioma y trae videos en otros idiomas",
      "Sigue explorando con búsquedas de seguimiento en lugar de empezar de cero",
      "Abre, descarga, subtitula, dobla o exporta dentro del mismo flujo",
    ],
    screenshotAlt: "Resultados de descubrimiento de video con IA en Translator",
    screenshotCaption:
      "Describe el tipo de video que buscas y sigue profundizando hasta encontrar el canal o clip que vale la pena conservar.",
    outcomesEyebrow: "Lo que desbloquea",
    outcomesTitle:
      "El descubrimiento deja de ser un callejón sin salida y pasa a ser el primer paso del flujo.",
    outcomes: [
      {
        title: "Encuentra entre idiomas, no solo entre palabras clave",
        body: "Busca en el idioma en que piensas y encuentra creadores, canales y formatos que normalmente quedan encerrados en el feed de otra audiencia.",
      },
      {
        title: "Evalúa el video antes de comprometerte al trabajo",
        body: "Abre resultados prometedores, míralos con subtítulos traducidos y decide qué realmente vale la pena guardar, doblar, recortar o exportar.",
      },
      {
        title: "Haz que los buenos hallazgos sigan avanzando",
        body: "Los videos descargados quedan dentro de la misma app, así que el paso a subtítulos, doblaje, clips o exportaciones finales se siente inmediato.",
      },
    ],
    workflowEyebrow: "Cómo funciona",
    workflowTitle:
      "Un mejor bucle de descubrimiento para video en otros idiomas.",
    workflowSteps: [
      {
        step: "01",
        title: "Describe lo que quieres",
        body: "Empieza con un tema, tipo de creador, audiencia, tono o país en tu idioma en vez de adivinar títulos o palabras clave exactas.",
      },
      {
        step: "02",
        title: "Busca más a fondo, no más ancho",
        body: "Usa seguimientos y resultados de buscar más para seguir entrando en canales cercanos y recomendaciones en vez de reiniciar desde cero.",
      },
      {
        step: "03",
        title: "Convierte el resultado correcto en trabajo",
        body: "Cuando encuentres el video correcto, descárgalo, míralo en tu idioma y pasa directo a subtítulos, doblaje o exportación.",
      },
    ],
    reasonsEyebrow: "Por qué sirve",
    reasonsTitle:
      "Úsalo para encontrar videos que habrías pasado por alto, verlos en tu idioma y hacer que los buenos sigan avanzando cuando quieres más que solo mirar.",
    reasons: [
      {
        title: "Encuentra videos que no habrías encontrado por tu cuenta",
        body: "Busca en tu idioma y llega a creadores, canales y temas que normalmente se quedan atrapados dentro de otro ecosistema lingüístico.",
      },
      {
        title: "Sabe rápido si un video vale la pena",
        body: "Ábrelo, míralo con subtítulos traducidos y decide si vale la pena guardarlo, doblarlo, recortarlo o exportarlo.",
      },
      {
        title: "Sigue avanzando cuando encuentras algo bueno",
        body: "Descarga el video y conviértelo en una versión subtitulada o doblada sin cambiar de cadena de herramientas.",
      },
    ],
    bridgeTitle: "¿Quieres seguir después de encontrar el video correcto?",
    bridgeBody:
      "Translator es más fuerte cuando el descubrimiento pasa directo a la visualización traducida y a resultados terminados.",
    bridgePrimary: "Ver Traducción con IA",
    bridgeSecondary: "Ver Editor de Subtítulos",
    ctaTitle:
      "Descarga Translator y empieza a encontrar videos fuera de tu feed habitual.",
    ctaBody:
      "Usa el descubrimiento como puerta de entrada y luego mantén los mejores videos avanzando por el resto del flujo.",
    ctaNote:
      "La descarga y la edición de subtítulos son gratis. Las funciones de IA usan créditos solo cuando las ejecutas.",
  },
  ja: {
    title: "言語のバブルの外にある動画を見つけるための AI 動画発見",
    description:
      "Translator を使えば、YouTube のアルゴリズムでは出てこない動画を見つけ、自分の言語で見て、良いものをそのまま次の作業に回せます。",
    breadcrumb: "動画発見",
    heroEyebrow: "翻訳の前に見つける",
    heroTitle: "YouTube のアルゴリズムでは出てこない動画を見つける。",
    heroBody:
      "多くの動画ツールは、すでにリンクを持っている前提で始まります。Translator は、欲しい動画を自分の言語で説明し、別の言語圏から動画を引っぱってきて、残す価値のあるものが見つかったらそのまま次へ進めます。",
    heroPoints: [
      "自分の言語で検索し、外国語の動画を引き込める",
      "最初からやり直さず、追い検索で掘り下げられる",
      "開く、ダウンロード、字幕、吹き替え、書き出しまで同じ流れで進められる",
    ],
    screenshotAlt: "Translator の AI 動画発見結果",
    screenshotCaption:
      "欲しい動画の雰囲気を説明し、残す価値のあるチャンネルやクリップが見つかるまでさらに深く探せます。",
    outcomesEyebrow: "できるようになること",
    outcomesTitle:
      "発見は行き止まりではなく、ワークフローの最初の一歩になります。",
    outcomes: [
      {
        title: "キーワードだけでなく言語をまたいで見つける",
        body: "自分が考える言語で検索し、別の視聴者のフィードに閉じ込められていたクリエイター、チャンネル、形式を見つけられます。",
      },
      {
        title: "作業に入る前に動画を見極める",
        body: "有望な結果を開き、翻訳字幕で見て、保存、吹き替え、切り出し、書き出しまで進める価値があるか判断できます。",
      },
      {
        title: "良い発見をそのまま次へ回せる",
        body: "ダウンロードした動画は同じアプリ内に残るので、字幕、吹き替え、ハイライト、完成書き出しへの受け渡しが途切れません。",
      },
    ],
    workflowEyebrow: "仕組み",
    workflowTitle: "外国語動画のための、より良い発見ループ。",
    workflowSteps: [
      {
        step: "01",
        title: "欲しいものを説明する",
        body: "正確なタイトルやキーワードを当てにいくのではなく、テーマ、クリエイターの種類、視聴者、雰囲気、国を自分の言語で説明します。",
      },
      {
        step: "02",
        title: "広くではなく深く探す",
        body: "フォローアップや Search more を使って、隣接するチャンネルやおすすめへさらに潜り、ゼロからやり直しません。",
      },
      {
        step: "03",
        title: "正しい結果を作業につなげる",
        body: "良い動画が見つかったら、ダウンロードして自分の言語で見て、そのまま字幕、吹き替え、書き出しへ進めます。",
      },
    ],
    reasonsEyebrow: "役に立つ理由",
    reasonsTitle:
      "見逃していた動画を見つけ、自分の言語で見て、視聴だけで終わらせずに良いものを次へ進められます。",
    reasons: [
      {
        title: "自力では見つけられなかった動画を見つける",
        body: "自分の言語で検索し、別の言語圏に閉じていたクリエイター、チャンネル、話題に届けます。",
      },
      {
        title: "残す価値があるかをすぐ判断できる",
        body: "開いて翻訳字幕で見て、保存、吹き替え、切り出し、書き出しをする価値があるか判断できます。",
      },
      {
        title: "良いものが見つかったら止まらない",
        body: "動画をダウンロードし、別のツール群に切り替えず、字幕版や吹き替え版に進められます。",
      },
    ],
    bridgeTitle: "良い動画を見つけたあとも続けたいなら",
    bridgeBody:
      "Translator は、発見が翻訳視聴と完成した出力にそのままつながるときに最も強く機能します。",
    bridgePrimary: "AI 翻訳を見る",
    bridgeSecondary: "字幕エディタを見る",
    ctaTitle:
      "Translator をダウンロードして、いつものフィードの外にある動画を探し始めましょう。",
    ctaBody:
      "発見を入口にして、良い動画をそのままワークフロー全体へ流してください。",
    ctaNote:
      "ダウンロードと字幕編集は無料です。AI 機能は実行したときだけクレジットを使います。",
  },
  zh: {
    title: "用于发现语言圈外视频的 AI 视频发现",
    description:
      "用 Translator 找到 YouTube 算法本来不会推给你的视频，用你的语言观看，再把最值得留下的内容继续推进到后续流程。",
    breadcrumb: "视频发现",
    heroEyebrow: "先找到，再翻译",
    heroTitle: "找到 YouTube 算法本来不会推给你的视频。",
    heroBody:
      "大多数视频工具都默认你已经有链接了。Translator 让你先用自己的语言描述想找的内容，把其他语言世界里的视频拉进来，找到值得留下的内容后还能继续往下做。",
    heroPoints: [
      "用你的语言搜索，同时拉进外语视频",
      "通过追问继续探索，不用每次都从头开始",
      "在同一条流程里完成打开、下载、字幕、配音和导出",
    ],
    screenshotAlt: "Translator 的 AI 视频发现结果",
    screenshotCaption:
      "描述你想找的视频类型，然后继续往深处找，直到找到值得留下的频道或片段。",
    outcomesEyebrow: "它带来的变化",
    outcomesTitle: "发现不再是死胡同，而是整个流程的第一步。",
    outcomes: [
      {
        title: "跨语言发现，而不只是跨关键词搜索",
        body: "用你思考的语言去搜，把原本困在另一群观众信息流里的创作者、频道和形式找出来。",
      },
      {
        title: "先判断视频值不值得做，再投入工作",
        body: "打开有希望的结果，用翻译字幕先看一遍，再决定它到底值不值得保存、配音、剪片或导出。",
      },
      {
        title: "让好的发现继续往前走",
        body: "下载下来的视频会留在同一个应用里，所以接到字幕、配音、精彩片段或最终导出时不会断掉。",
      },
    ],
    workflowEyebrow: "工作方式",
    workflowTitle: "更适合外语视频的发现循环。",
    workflowSteps: [
      {
        step: "01",
        title: "先描述你想要什么",
        body: "不要硬猜准确标题或关键词，直接用你的语言描述主题、创作者类型、受众、氛围或国家。",
      },
      {
        step: "02",
        title: "不是搜得更广，而是挖得更深",
        body: "用追问和 Search more 继续深入相邻频道和推荐链路，而不是每次都从零开始。",
      },
      {
        step: "03",
        title: "把对的结果直接变成后续工作",
        body: "找到合适的视频后，下载它，用你的语言观看，然后直接进入字幕、配音或导出。",
      },
    ],
    reasonsEyebrow: "为什么有用",
    reasonsTitle:
      "它帮你找到本来会错过的视频，用你的语言看完，而且在你不只想看一眼时还能继续往后推进。",
    reasons: [
      {
        title: "找到你自己本来找不到的视频",
        body: "用你的语言搜索，触达那些原本被困在另一种语言生态里的创作者、频道和话题。",
      },
      {
        title: "快速判断视频值不值得留下",
        body: "打开它，用翻译字幕先看一遍，再决定是否值得保存、配音、剪片或导出。",
      },
      {
        title: "一旦找到好内容，就继续往下走",
        body: "下载视频后，不用切换到另一套工具链，就能继续做成字幕版或配音版。",
      },
    ],
    bridgeTitle: "找到合适的视频后还想继续做下去？",
    bridgeBody:
      "当发现可以直接接上翻译观看和最终成品时，Translator 的价值最明显。",
    bridgePrimary: "查看 AI 翻译",
    bridgeSecondary: "查看字幕编辑器",
    ctaTitle: "下载 Translator，开始找到日常信息流之外的视频。",
    ctaBody:
      "把发现当作入口，再把最好的视频继续推进到后面的整条流程里。",
    ctaNote:
      "下载和字幕编辑免费。只有在你实际运行 AI 功能时才会消耗积分。",
  },
  fr: {
    title: "Découverte vidéo par IA pour trouver des vidéos au-delà de votre bulle linguistique",
    description:
      "Utilisez Translator pour trouver des vidéos que votre algorithme YouTube ne vous montrerait jamais, les regarder dans votre langue et faire avancer les meilleures dans le reste du flux.",
    breadcrumb: "Découverte Vidéo",
    heroEyebrow: "Trouver avant de traduire",
    heroTitle:
      "Trouvez des vidéos que votre algorithme YouTube ne vous montrerait jamais.",
    heroBody:
      "La plupart des outils vidéo commencent une fois que vous avez déjà le lien. Translator vous aide à décrire ce que vous cherchez dans votre langue, à faire remonter des vidéos d'autres univers linguistiques, puis à continuer quand vous trouvez quelque chose qui mérite d'être gardé.",
    heroPoints: [
      "Cherchez dans votre langue et faites remonter des vidéos en langue étrangère",
      "Continuez à explorer avec des relances au lieu de repartir de zéro",
      "Ouvrez, téléchargez, sous-titrez, doublez ou exportez dans le même flux",
    ],
    screenshotAlt: "Résultats de découverte vidéo IA dans Translator",
    screenshotCaption:
      "Décrivez le type de vidéo que vous cherchez, puis continuez à creuser jusqu'à trouver la chaîne ou l'extrait à garder.",
    outcomesEyebrow: "Ce que cela débloque",
    outcomesTitle:
      "La découverte cesse d'être une impasse et devient la première étape du flux.",
    outcomes: [
      {
        title: "Chercher d'une langue à l'autre, pas seulement par mots-clés",
        body: "Cherchez dans la langue dans laquelle vous pensez et faites remonter des créateurs, chaînes et formats habituellement enfermés dans le fil d'une autre audience.",
      },
      {
        title: "Évaluer la vidéo avant de vous engager dans le travail",
        body: "Ouvrez les résultats prometteurs, regardez-les avec des sous-titres traduits et décidez ce qui mérite vraiment d'être gardé, doublé, découpé ou exporté.",
      },
      {
        title: "Faire avancer les bonnes trouvailles",
        body: "Les vidéos téléchargées restent dans la même app, donc le passage vers les sous-titres, le doublage, les extraits ou les exports finis est immédiat.",
      },
    ],
    workflowEyebrow: "Comment ça marche",
    workflowTitle:
      "Une meilleure boucle de découverte pour la vidéo en langue étrangère.",
    workflowSteps: [
      {
        step: "01",
        title: "Décrivez ce que vous voulez",
        body: "Commencez par un sujet, un type de créateur, un public, une ambiance ou un pays dans votre langue au lieu de deviner des titres ou mots-clés exacts.",
      },
      {
        step: "02",
        title: "Cherchez plus profond, pas plus large",
        body: "Utilisez les relances et les résultats de recherche supplémentaire pour pousser vers des chaînes voisines et des recommandations au lieu de redémarrer de zéro.",
      },
      {
        step: "03",
        title: "Transformez le bon résultat en travail",
        body: "Quand vous trouvez la bonne vidéo, téléchargez-la, regardez-la dans votre langue et passez directement aux sous-titres, au doublage ou à l'export.",
      },
    ],
    reasonsEyebrow: "Pourquoi c'est utile",
    reasonsTitle:
      "Servez-vous-en pour trouver des vidéos que vous auriez ratées, les regarder dans votre langue et faire avancer les bonnes quand vous voulez plus qu'un simple visionnage.",
    reasons: [
      {
        title: "Trouver des vidéos que vous n'auriez pas trouvées seul",
        body: "Cherchez dans votre langue et atteignez des créateurs, chaînes et sujets qui restent d'habitude enfermés dans un autre écosystème linguistique.",
      },
      {
        title: "Savoir vite si une vidéo mérite d'être gardée",
        body: "Ouvrez-la, regardez-la avec des sous-titres traduits et décidez si elle mérite d'être gardée, doublée, découpée ou exportée.",
      },
      {
        title: "Continuer dès que vous trouvez quelque chose de bon",
        body: "Téléchargez la vidéo et transformez-la en version sous-titrée ou doublée sans passer à une autre chaîne d'outils.",
      },
    ],
    bridgeTitle: "Vous voulez continuer une fois la bonne vidéo trouvée ?",
    bridgeBody:
      "Translator est le plus fort quand la découverte mène directement au visionnage traduit et aux sorties finales.",
    bridgePrimary: "Voir la traduction IA",
    bridgeSecondary: "Voir l'éditeur de sous-titres",
    ctaTitle:
      "Téléchargez Translator et commencez à trouver des vidéos hors de votre fil habituel.",
    ctaBody:
      "Utilisez la découverte comme porte d'entrée, puis faites avancer les meilleures vidéos dans le reste du flux.",
    ctaNote:
      "Le téléchargement et l'édition des sous-titres sont gratuits. Les fonctions IA utilisent des crédits uniquement quand vous les lancez.",
  },
  de: {
    title: "KI-Video Discovery, um Videos außerhalb deiner Sprachblase zu finden",
    description:
      "Mit Translator findest du Videos, die dein YouTube-Algorithmus nie zeigen würde, schaust sie in deiner Sprache an und überführst die besten direkt in den restlichen Workflow.",
    breadcrumb: "Video Discovery",
    heroEyebrow: "Finden vor dem Übersetzen",
    heroTitle: "Finde Videos, die dein YouTube-Algorithmus nie zeigen würde.",
    heroBody:
      "Die meisten Video-Tools beginnen erst, wenn du den Link schon hast. Translator lässt dich in deiner Sprache beschreiben, was du suchst, holt Videos aus anderen Sprachwelten herüber und bringt dich weiter, sobald du etwas findest, das sich zu behalten lohnt.",
    heroPoints: [
      "Suche in deiner Sprache und ziehe fremdsprachige Videos herein",
      "Erkunde mit Folgeanfragen weiter, statt wieder bei null zu starten",
      "Öffnen, herunterladen, untertiteln, synchronisieren oder exportieren im selben Ablauf",
    ],
    screenshotAlt: "Translator KI-Video-Discovery-Ergebnisse",
    screenshotCaption:
      "Beschreibe die Art von Video, die du suchst, und suche immer tiefer, bis du den Kanal oder Clip findest, den du behalten willst.",
    outcomesEyebrow: "Was das ermöglicht",
    outcomesTitle:
      "Discovery ist keine Sackgasse mehr, sondern der erste Schritt im Workflow.",
    outcomes: [
      {
        title: "Sprachübergreifend finden, nicht nur über Keywords",
        body: "Suche in der Sprache, in der du denkst, und entdecke Creator, Kanäle und Formate, die sonst im Feed eines anderen Publikums eingeschlossen bleiben.",
      },
      {
        title: "Das Video bewerten, bevor du Arbeit hineinsteckst",
        body: "Öffne vielversprechende Treffer, schaue sie mit übersetzten Untertiteln an und entscheide, was sich wirklich zum Speichern, Synchronisieren, Clippen oder Exportieren lohnt.",
      },
      {
        title: "Gute Funde weiterbewegen",
        body: "Heruntergeladene Videos landen in derselben App, sodass der Übergang zu Untertiteln, Dubbing, Highlights oder fertigen Exporten direkt bleibt.",
      },
    ],
    workflowEyebrow: "So funktioniert's",
    workflowTitle: "Ein besserer Discovery-Loop für fremdsprachige Videos.",
    workflowSteps: [
      {
        step: "01",
        title: "Beschreibe, was du willst",
        body: "Starte mit Thema, Creator-Typ, Zielgruppe, Stimmung oder Land in deiner Sprache, statt exakte Titel oder Keywords erraten zu müssen.",
      },
      {
        step: "02",
        title: "Suche tiefer, nicht breiter",
        body: "Nutze Folgeanfragen und Search-more-Ergebnisse, um in benachbarte Kanäle und Empfehlungen weiter vorzudringen, statt wieder ganz vorne anzufangen.",
      },
      {
        step: "03",
        title: "Mach aus dem richtigen Treffer direkt Arbeit",
        body: "Wenn du das richtige Video findest, lade es herunter, schaue es in deiner Sprache an und gehe direkt zu Untertiteln, Dubbing oder Export.",
      },
    ],
    reasonsEyebrow: "Warum das nützlich ist",
    reasonsTitle:
      "Nutze es, um Videos zu finden, die du sonst verpasst hättest, sie in deiner Sprache anzuschauen und gute Treffer weiterzubringen, wenn dir reines Anschauen nicht reicht.",
    reasons: [
      {
        title: "Finde Videos, die du allein nicht gefunden hättest",
        body: "Suche in deiner Sprache und erreiche Creator, Kanäle und Themen, die sonst in einem anderen Sprachökosystem eingeschlossen bleiben.",
      },
      {
        title: "Schnell erkennen, ob sich ein Video lohnt",
        body: "Öffne es, schaue es mit übersetzten Untertiteln an und entscheide, ob es sich zum Speichern, Synchronisieren, Clippen oder Exportieren lohnt.",
      },
      {
        title: "Weitergehen, wenn du etwas Gutes findest",
        body: "Lade das Video herunter und verwandle es in eine untertitelte oder synchronisierte Version, ohne in eine andere Toolchain zu wechseln.",
      },
    ],
    bridgeTitle: "Willst du nach dem richtigen Video direkt weitermachen?",
    bridgeBody:
      "Translator ist am stärksten, wenn Discovery direkt in übersetztes Anschauen und fertige Outputs übergeht.",
    bridgePrimary: "KI-Übersetzung ansehen",
    bridgeSecondary: "Untertitel-Editor ansehen",
    ctaTitle:
      "Lade Translator herunter und finde Videos außerhalb deines üblichen Feeds.",
    ctaBody:
      "Nutze Discovery als Einstieg und bewege die besten Videos dann durch den restlichen Workflow.",
    ctaNote:
      "Download und Untertitelbearbeitung sind kostenlos. KI-Funktionen verbrauchen nur dann Credits, wenn du sie ausführst.",
  },
  pt: {
    title: "Descoberta de vídeo com IA para encontrar vídeos fora da sua bolha de idioma",
    description:
      "Use o Translator para encontrar vídeos que o algoritmo do YouTube nunca mostraria para você, assistir no seu idioma e levar os melhores para o resto do fluxo.",
    breadcrumb: "Descoberta de Vídeos",
    heroEyebrow: "Encontre antes de traduzir",
    heroTitle:
      "Encontre vídeos que o algoritmo do YouTube nunca mostraria para você.",
    heroBody:
      'A maioria das ferramentas de vídeo começa quando você já tem o link. O Translator ajuda você a descrever o que quer no seu idioma, puxar vídeos de outros mundos de idioma e continuar depois que encontrar algo que vale a pena guardar.',
    heroPoints: [
      "Pesquise no seu idioma e puxe vídeos em outros idiomas",
      "Continue explorando com buscas de acompanhamento em vez de recomeçar do zero",
      "Abra, baixe, legende, duble ou exporte no mesmo fluxo",
    ],
    screenshotAlt: "Resultados de descoberta de vídeo com IA no Translator",
    screenshotCaption:
      "Descreva o tipo de vídeo que você quer e continue aprofundando a busca até encontrar o canal ou trecho que vale a pena guardar.",
    outcomesEyebrow: "O que isso destrava",
    outcomesTitle:
      "A descoberta deixa de ser um beco sem saída e vira a primeira etapa do fluxo.",
    outcomes: [
      {
        title: "Encontre entre idiomas, não só entre palavras-chave",
        body: "Pesquise no idioma em que você pensa e revele criadores, canais e formatos que normalmente ficam presos no feed de outro público.",
      },
      {
        title: "Avalie o vídeo antes de entrar no trabalho",
        body: "Abra resultados promissores, assista com legendas traduzidas e decida o que realmente vale a pena salvar, dublar, cortar ou exportar.",
      },
      {
        title: "Faça as boas descobertas seguirem adiante",
        body: "Os vídeos baixados ficam dentro do mesmo app, então a passagem para legendas, dublagem, destaques ou exportações finais acontece sem quebra.",
      },
    ],
    workflowEyebrow: "Como funciona",
    workflowTitle:
      "Um loop de descoberta melhor para vídeo em outro idioma.",
    workflowSteps: [
      {
        step: "01",
        title: "Descreva o que você quer",
        body: "Comece com um tema, tipo de criador, público, clima ou país no seu idioma em vez de tentar adivinhar títulos ou palavras-chave exatos.",
      },
      {
        step: "02",
        title: "Busque mais fundo, não mais amplo",
        body: "Use acompanhamentos e resultados de buscar mais para continuar avançando por canais vizinhos e recomendações, em vez de reiniciar do zero.",
      },
      {
        step: "03",
        title: "Transforme o resultado certo em trabalho",
        body: "Quando encontrar o vídeo certo, baixe, assista no seu idioma e siga direto para legendas, dublagem ou exportação.",
      },
    ],
    reasonsEyebrow: "Por que isso ajuda",
    reasonsTitle:
      "Use para encontrar vídeos que você teria perdido, assisti-los no seu idioma e fazer os bons seguirem adiante quando você quer mais do que só assistir.",
    reasons: [
      {
        title: "Encontre vídeos que você não acharia sozinho",
        body: "Pesquise no seu idioma e alcance criadores, canais e temas que normalmente ficam presos dentro de outro ecossistema de idioma.",
      },
      {
        title: "Saiba rápido se um vídeo vale a pena",
        body: "Abra, assista com legendas traduzidas e decida se vale a pena salvar, dublar, cortar ou exportar.",
      },
      {
        title: "Continue em frente quando encontrar algo bom",
        body: "Baixe o vídeo e transforme-o em uma versão legendada ou dublada sem trocar para outra cadeia de ferramentas.",
      },
    ],
    bridgeTitle: "Quer continuar depois de encontrar o vídeo certo?",
    bridgeBody:
      "O Translator fica mais forte quando a descoberta leva direto para a visualização traduzida e para os resultados finais.",
    bridgePrimary: "Ver Tradução por IA",
    bridgeSecondary: "Ver Editor de Legendas",
    ctaTitle:
      "Baixe o Translator e comece a encontrar vídeos fora do seu feed habitual.",
    ctaBody:
      "Use a descoberta como porta de entrada e depois mantenha os melhores vídeos avançando pelo restante do fluxo.",
    ctaNote:
      "Download e edição de legendas são grátis. Os recursos de IA só usam créditos quando você os executa.",
  },
  vi: {
    title:
      "Khám phá video bằng AI để tìm những video nằm ngoài bong bóng ngôn ngữ của bạn",
    description:
      "Dùng Translator để tìm những video mà thuật toán YouTube của bạn sẽ không bao giờ gợi ra, xem chúng bằng ngôn ngữ của mình và đưa những video tốt nhất vào phần còn lại của quy trình.",
    breadcrumb: "Khám phá video",
    heroEyebrow: "Tìm trước khi dịch",
    heroTitle:
      "Tìm những video mà thuật toán YouTube của bạn sẽ không bao giờ gợi ra.",
    heroBody:
      "Hầu hết công cụ video bắt đầu sau khi bạn đã có link. Translator cho phép bạn mô tả thứ mình muốn bằng ngôn ngữ của mình, kéo video từ những thế giới ngôn ngữ khác vào, rồi tiếp tục đi tiếp khi đã tìm được thứ đáng giữ lại.",
    heroPoints: [
      "Tìm bằng ngôn ngữ của bạn và kéo vào những video ngoại ngữ",
      "Tiếp tục đào sâu bằng các lượt theo sau thay vì bắt đầu lại từ đầu",
      "Mở, tải xuống, làm phụ đề, lồng tiếng hoặc xuất file trong cùng một luồng",
    ],
    screenshotAlt: "Kết quả khám phá video AI trong Translator",
    screenshotCaption:
      "Mô tả kiểu video bạn muốn, rồi tiếp tục tìm sâu hơn cho đến khi thấy kênh hoặc đoạn clip đáng giữ lại.",
    outcomesEyebrow: "Điều này mở ra gì",
    outcomesTitle:
      "Khám phá không còn là ngõ cụt mà trở thành bước đầu của cả quy trình.",
    outcomes: [
      {
        title: "Tìm xuyên ngôn ngữ, không chỉ xuyên từ khóa",
        body: "Tìm bằng ngôn ngữ bạn nghĩ và lôi ra những creator, kênh và định dạng vốn thường bị nhốt trong feed của một nhóm khán giả khác.",
      },
      {
        title: "Đánh giá video trước khi lao vào làm",
        body: "Mở các kết quả hứa hẹn, xem với phụ đề đã dịch và quyết định thứ gì thực sự đáng để lưu, lồng tiếng, cắt clip hoặc xuất file.",
      },
      {
        title: "Để những phát hiện tốt tiếp tục đi tiếp",
        body: "Video đã tải xuống nằm ngay trong cùng ứng dụng, nên việc chuyển sang phụ đề, lồng tiếng, highlight hoặc xuất file hoàn chỉnh diễn ra liền mạch thay vì bị đứt đoạn.",
      },
    ],
    workflowEyebrow: "Cách hoạt động",
    workflowTitle:
      "Một vòng khám phá tốt hơn cho video bằng tiếng nước ngoài.",
    workflowSteps: [
      {
        step: "01",
        title: "Mô tả điều bạn muốn",
        body: "Bắt đầu bằng chủ đề, kiểu creator, khán giả, không khí hoặc quốc gia bằng ngôn ngữ của mình thay vì cố đoán chính xác tiêu đề hay từ khóa.",
      },
      {
        step: "02",
        title: "Tìm sâu hơn, không phải rộng hơn",
        body: "Dùng các lượt theo sau và kết quả tìm thêm để tiếp tục đào vào những kênh lân cận và đề xuất liên quan thay vì khởi động lại từ số không.",
      },
      {
        step: "03",
        title: "Biến kết quả đúng thành công việc",
        body: "Khi tìm được video đúng, hãy tải xuống, xem bằng ngôn ngữ của bạn và chuyển thẳng sang phụ đề, lồng tiếng hoặc xuất file.",
      },
    ],
    reasonsEyebrow: "Vì sao hữu ích",
    reasonsTitle:
      "Dùng nó để tìm những video bạn đã bỏ lỡ, xem chúng bằng ngôn ngữ của mình và tiếp tục đẩy những video tốt đi tiếp khi bạn muốn nhiều hơn chỉ là xem.",
    reasons: [
      {
        title: "Tìm những video bạn sẽ không tự tìm ra",
        body: "Tìm bằng ngôn ngữ của mình và chạm tới những creator, kênh và chủ đề vốn thường bị nhốt trong một hệ sinh thái ngôn ngữ khác.",
      },
      {
        title: "Biết nhanh một video có đáng giữ không",
        body: "Mở nó, xem với phụ đề đã dịch và quyết định xem nó có đáng để lưu, lồng tiếng, cắt clip hay xuất file hay không.",
      },
      {
        title: "Tiếp tục đi khi bạn tìm được thứ tốt",
        body: "Tải video xuống và biến nó thành bản có phụ đề hoặc lồng tiếng mà không phải chuyển sang một chuỗi công cụ khác.",
      },
    ],
    bridgeTitle: "Muốn tiếp tục sau khi đã tìm được video phù hợp?",
    bridgeBody:
      "Translator mạnh nhất khi phần khám phá chảy thẳng vào việc xem bản dịch và các đầu ra hoàn chỉnh.",
    bridgePrimary: "Xem Dịch bằng AI",
    bridgeSecondary: "Xem Trình chỉnh sửa phụ đề",
    ctaTitle:
      "Tải Translator và bắt đầu tìm những video nằm ngoài luồng nội dung quen thuộc của bạn.",
    ctaBody:
      "Dùng khám phá như cánh cửa đầu vào, rồi để những video tốt nhất tiếp tục đi qua phần còn lại của quy trình.",
    ctaNote:
      "Tải xuống và chỉnh sửa phụ đề đều miễn phí. Tính năng AI chỉ dùng credit khi bạn thực sự chạy chúng.",
  },
};

const discoveryKeywords: Partial<Record<Locale, string[]>> = {
  en: [
    "AI video discovery",
    "cross-language video discovery",
    "find foreign language videos",
    "videos your YouTube algorithm missed",
    "video recommender app",
  ],
  ko: [
    "AI 비디오 발견",
    "다른 언어권 영상 찾기",
    "유튜브 추천 밖의 영상",
    "외국어 영상 찾기",
    "비디오 추천 앱",
  ],
  es: [
    "descubrimiento de video con IA",
    "descubrimiento de videos entre idiomas",
    "encontrar videos en otros idiomas",
    "videos fuera del algoritmo de YouTube",
    "app para descubrir videos",
  ],
  ja: [
    "AI 動画発見",
    "言語をまたぐ動画発見",
    "外国語動画を探す",
    "YouTube アルゴリズム外の動画",
    "動画発見アプリ",
  ],
  zh: [
    "AI 视频发现",
    "跨语言视频发现",
    "寻找外语视频",
    "YouTube 算法之外的视频",
    "视频发现应用",
  ],
  fr: [
    "découverte vidéo IA",
    "découverte vidéo multilingue",
    "trouver des vidéos en langue étrangère",
    "vidéos hors de l'algorithme YouTube",
    "application de découverte vidéo",
  ],
  de: [
    "KI Video Discovery",
    "sprachübergreifende Video Discovery",
    "fremdsprachige Videos finden",
    "Videos außerhalb des YouTube-Algorithmus",
    "Video-Discovery-App",
  ],
  pt: [
    "descoberta de vídeo com IA",
    "descoberta de vídeos entre idiomas",
    "encontrar vídeos em outro idioma",
    "vídeos fora do algoritmo do YouTube",
    "app de descoberta de vídeos",
  ],
  vi: [
    "khám phá video bằng AI",
    "khám phá video xuyên ngôn ngữ",
    "tìm video ngoại ngữ",
    "video nằm ngoài thuật toán YouTube",
    "ứng dụng khám phá video",
  ],
};

function getDiscoveryCopy(locale: Locale): DiscoveryPageCopy {
  return discoveryCopy[locale] ?? discoveryCopy.en!;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getDiscoveryCopy(locale);

  return buildMetadata({
    title: `${copy.title} | Translator`,
    description: copy.description,
    path: "/video-discovery",
    keywords: discoveryKeywords[locale] ?? discoveryKeywords.en!,
    locale,
  });
}

export default async function VideoDiscoveryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = getDiscoveryCopy(locale);
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: copy.breadcrumb },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(89,116,255,0.22),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {copy.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {copy.heroBody}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-blue-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-6 text-gray-400">
                {copy.ctaNote}
              </p>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/50 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src={discoveryScreenshot.src}
                  alt={copy.screenshotAlt}
                  width={discoveryScreenshot.width}
                  height={discoveryScreenshot.height}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="max-w-xl text-sm leading-6 text-gray-400">
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
            {copy.outcomes.map((item) => (
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
                <div className="text-sm font-semibold text-blue-300">
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                {copy.reasonsEyebrow}
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {copy.reasonsTitle}
              </h2>
            </div>
            <div className="space-y-5">
              {copy.reasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.body}
                  </p>
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
                  href={localizeHref("/translate")}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  {copy.bridgePrimary}
                </Link>
                <Link
                  href={localizeHref("/subtitle-editor")}
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
          <FeatureDownloadCta
            locale={locale}
            note={copy.ctaNote}
            align="center"
            className="mt-8"
          />
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}

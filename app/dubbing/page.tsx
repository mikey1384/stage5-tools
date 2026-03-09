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

type DubbingPageCopy = {
  title: string;
  description: string;
  breadcrumb: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPoints: string[];
  studioTitle: string;
  studioOriginalLabel: string;
  studioDubbedLabel: string;
  studioOriginal: string;
  studioDubbed: string;
  studioCaption: string;
  outcomesEyebrow: string;
  outcomesTitle: string;
  outcomes: Array<{ title: string; body: string }>;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowSteps: Array<{ step: string; title: string; body: string }>;
  useCasesEyebrow: string;
  useCasesTitle: string;
  useCases: Array<{ title: string; body: string }>;
  bridgeTitle: string;
  bridgeBody: string;
  bridgePrimary: string;
  bridgeSecondary: string;
  ctaTitle: string;
  ctaBody: string;
  ctaNote: string;
};

const dubbingScreenshot = {
  src: "/screenshots/dubbing-workflow.webp",
  width: 3018,
  height: 1962,
};

const dubbingCopy = {
  en: {
    title:
      "AI video dubbing for turning foreign videos into watchable localized versions",
    description:
      "Use Translator to dub videos into your own language, keep the workflow inside one app, and export finished localized versions instead of loose audio fragments.",
    breadcrumb: "Dubbing",
    heroEyebrow: "Turn understanding into a new version",
    heroTitle:
      "Dub the video when you do not want to read subtitles the whole time.",
    heroBody:
      "Sometimes translated subtitles are enough. Sometimes you want a version that plays naturally in your own language, whether you are sitting down to watch or just listening while you walk. Translator helps you keep the original video, generate dubbed speech, and export a finished localized result from the same workflow.",
    heroPoints: [
      "Move from translated viewing to dubbed output without changing tools",
      "Keep the original video context while generating a new voice track",
      "Export a finished dubbed video, not just audio by itself",
    ],
    studioTitle: "From original video to dubbed output",
    studioOriginalLabel: "Original",
    studioDubbedLabel: "Dubbed",
    studioOriginal:
      "Original video stays visible while you prepare the dubbed version.",
    studioDubbed:
      "Dubbed output becomes something you can watch, save, and share.",
    studioCaption:
      "The point is not just to generate another audio file. The point is to leave with a finished video you can use.",
    outcomesEyebrow: "What you get",
    outcomesTitle:
      "Dubbing makes the video easier to follow because you can hear it, not just read it.",
    outcomes: [
      {
        title: "Let people follow the video without reading subtitles the whole time",
        body: "Subtitles are great for review and discovery. Dubbing helps when you want something that feels easier to watch or listen to in another language.",
      },
      {
        title: "Keep the workflow attached to the source video",
        body: "Download, translate, dub, and export from one app instead of stitching together separate subtitle, TTS, and export tools.",
      },
      {
        title: "End with a usable deliverable",
        body: "The goal is a dubbed video you can keep, send, review, or publish, not a pile of intermediate assets.",
      },
    ],
    workflowEyebrow: "How it works",
    workflowTitle: "A straightforward path from source video to dubbed video.",
    workflowSteps: [
      {
        step: "01",
        title: "Start with the right video",
        body: "Open a local file or download something you found through discovery so the video is already inside the same workflow.",
      },
      {
        step: "02",
        title: "Translate before you dub",
        body: "Review the translated subtitles and make sure the content is saying what you want before you turn it into speech.",
      },
      {
        step: "03",
        title: "Generate and export the dubbed version",
        body: "Create the dubbed output and leave with a finished video that is ready to watch, save, or hand off.",
      },
    ],
    useCasesEyebrow: "When it helps most",
    useCasesTitle:
      "Sometimes subtitles are enough. Sometimes you want a version that actually sounds natural.",
    useCases: [
      {
        title: "Listen more naturally",
        body: "Use dubbing when you want to follow the video in your own language without staying locked to subtitles, including when you are walking or doing something else.",
      },
      {
        title: "Prepare a shareable localized version",
        body: "When a video is worth passing around, dubbing gives you a stronger artifact than a translated transcript alone.",
      },
      {
        title: "Keep moving after discovery",
        body: "Find the right video, judge it with subtitles first, then keep the best ones moving into dubbed outputs without starting over elsewhere.",
      },
    ],
    bridgeTitle: "Need to find or translate the video first?",
    bridgeBody:
      "Find the video, watch it with subtitles first, then dub it without starting over in another tool.",
    bridgePrimary: "See Video Discovery",
    bridgeSecondary: "See AI Translation",
    ctaTitle:
      "Download Translator and turn the right videos into dubbed versions you can actually use.",
    ctaBody:
      "Watch with subtitles when that is enough. Dub the video when you want a version that feels easier to watch, share, or keep.",
    ctaNote:
      "Downloading and subtitle editing are free. AI features use credits only when you run them.",
  },
  ko: {
    title: "외국어 영상을 실제로 볼 수 있는 현지화 버전으로 바꾸는 AI 더빙",
    description:
      "Translator로 영상을 내 언어로 더빙하고, 같은 앱에서 계속 이어가고, 흩어진 오디오 파일이 아니라 완성된 현지화 영상을 내보내세요.",
    breadcrumb: "더빙",
    heroEyebrow: "자막 다음 단계",
    heroTitle: "계속 자막을 읽고 싶지 않을 때 더빙이 필요합니다.",
    heroBody:
      "번역 자막만으로 충분할 때도 많습니다. 하지만 내 언어로 더 자연스럽게 들리는 버전이 필요할 때도 있습니다. 앉아서 볼 때뿐 아니라 걸으면서 듣고 싶을 때도 그렇습니다. Translator는 원본 영상을 유지한 채 더빙 음성을 만들고, 같은 흐름 안에서 완성된 현지화 결과물까지 내보낼 수 있게 해줍니다.",
    heroPoints: [
      "번역 시청에서 더빙 결과물까지 도구를 바꾸지 않고 이어갑니다",
      "원본 영상 맥락을 유지한 채 새 음성 트랙을 만듭니다",
      "오디오 조각이 아니라 완성된 더빙 영상을 내보냅니다",
    ],
    studioTitle: "원본 영상에서 더빙 결과물까지",
    studioOriginalLabel: "원본",
    studioDubbedLabel: "더빙",
    studioOriginal:
      "더빙을 준비하는 동안에도 원본 영상의 맥락이 그대로 보입니다.",
    studioDubbed:
      "더빙 결과물은 실제로 시청하고 저장하고 공유할 수 있는 버전이 됩니다.",
    studioCaption:
      "목표는 또 다른 오디오 파일 하나를 만드는 것이 아닙니다. 실제로 쓸 수 있는 완성된 영상을 가져가는 것입니다.",
    outcomesEyebrow: "얻게 되는 것",
    outcomesTitle:
      "더빙은 읽기만 하는 대신 들을 수 있게 해주기 때문에 영상을 더 쉽게 따라가게 해줍니다.",
    outcomes: [
      {
        title: "계속 자막을 읽지 않아도 따라갈 수 있습니다",
        body: "자막은 검토와 발견에 좋습니다. 더빙은 다른 언어로 더 편하게 보고 들을 수 있는 버전이 필요할 때 강해집니다.",
      },
      {
        title: "워크플로우가 원본 영상에 붙어 있습니다",
        body: "별도 자막 툴, TTS 툴, 내보내기 툴을 이어 붙이지 않고 한 앱에서 다운로드, 번역, 더빙, 내보내기까지 갑니다.",
      },
      {
        title: "손에 남는 결과물이 생깁니다",
        body: "목표는 중간 산출물이 아니라 저장하고 보내고 검토하고 게시할 수 있는 더빙 영상입니다.",
      },
    ],
    workflowEyebrow: "작동 방식",
    workflowTitle: "원본 영상에서 더빙 영상까지 가는 단순한 흐름.",
    workflowSteps: [
      {
        step: "01",
        title: "맞는 영상부터 시작합니다",
        body: "로컬 파일을 열거나 발견 기능으로 찾은 영상을 다운로드해, 같은 흐름 안에 있는 상태에서 시작합니다.",
      },
      {
        step: "02",
        title: "더빙 전에 먼저 번역을 다듬습니다",
        body: "번역 자막을 검토하고, 실제로 전달하고 싶은 내용이 맞는지 확인한 다음 음성으로 넘깁니다.",
      },
      {
        step: "03",
        title: "더빙 버전을 만들고 내보냅니다",
        body: "더빙 결과물을 만들고, 바로 보거나 저장하거나 다른 사람에게 넘길 수 있는 완성된 영상을 남깁니다.",
      },
    ],
    useCasesEyebrow: "특히 도움이 되는 순간",
    useCasesTitle:
      "자막만으로 충분할 때도 있고, 실제로 자연스럽게 들리는 버전이 필요할 때도 있습니다.",
    useCases: [
      {
        title: "더 자연스럽게 듣고 봅니다",
        body: "계속 자막에 시선을 묶어두지 않고 내 언어로 따라가고 싶을 때, 특히 걸으면서 듣거나 다른 일을 함께 할 때 더빙이 유용합니다.",
      },
      {
        title: "공유할 수 있는 현지화 버전을 만듭니다",
        body: "다른 사람에게 보여줄 가치가 있는 영상이라면 더빙은 번역 대본보다 훨씬 강한 결과물이 됩니다.",
      },
      {
        title: "발견 이후의 흐름을 끊지 않습니다",
        body: "좋은 영상을 찾고, 자막으로 먼저 판단한 뒤, 가장 좋은 영상은 다른 곳으로 옮기지 않고 바로 더빙 결과물까지 이어갑니다.",
      },
    ],
    bridgeTitle: "먼저 영상 발견이나 번역이 필요하다면",
    bridgeBody:
      "영상을 찾고, 자막으로 먼저 보고, 다른 툴로 다시 시작하지 않고 바로 더빙으로 이어갈 수 있습니다.",
    bridgePrimary: "비디오 발견 보기",
    bridgeSecondary: "AI 번역 보기",
    ctaTitle:
      "Translator를 다운로드하고 좋은 영상을 실제로 쓸 수 있는 더빙 버전으로 바꾸세요.",
    ctaBody:
      "자막만으로 충분하면 그대로 보고, 더 자연스럽게 볼 수 있는 버전이 필요하면 더빙으로 이어가세요.",
    ctaNote:
      "다운로드와 자막 편집은 무료입니다. AI 기능은 실행할 때만 크레딧을 사용합니다.",
  },
  es: {
    title:
      "Doblaje de video con IA para convertir videos extranjeros en versiones localizadas que realmente se pueden ver",
    description:
      "Usa Translator para doblar videos a tu idioma, mantener todo el flujo dentro de una sola app y exportar versiones localizadas terminadas en lugar de fragmentos de audio sueltos.",
    breadcrumb: "Doblaje",
    heroEyebrow: "Convierte la comprensión en una nueva versión",
    heroTitle:
      "Dobla el video cuando no quieras pasar todo el tiempo leyendo subtítulos.",
    heroBody:
      "A veces los subtítulos traducidos alcanzan. A veces quieres una versión que suene natural en tu propio idioma, ya sea para sentarte a verla o simplemente escuchar mientras caminas. Translator te ayuda a mantener el video original, generar la voz doblada y exportar un resultado localizado terminado dentro del mismo flujo.",
    heroPoints: [
      "Pasa de ver con traducción a un resultado doblado sin cambiar de herramienta",
      "Mantén el contexto del video original mientras generas una nueva pista de voz",
      "Exporta un video doblado terminado, no solo audio suelto",
    ],
    studioTitle: "Del video original al resultado doblado",
    studioOriginalLabel: "Original",
    studioDubbedLabel: "Doblado",
    studioOriginal:
      "El video original sigue visible mientras preparas la versión doblada.",
    studioDubbed:
      "El resultado doblado se convierte en algo que puedes ver, guardar y compartir.",
    studioCaption:
      "La meta no es solo generar otro archivo de audio. La meta es salir con un video terminado que realmente puedas usar.",
    outcomesEyebrow: "Lo que obtienes",
    outcomesTitle:
      "El doblaje hace que el video sea más fácil de seguir porque puedes oírlo, no solo leerlo.",
    outcomes: [
      {
        title: "Deja que la gente siga el video sin leer subtítulos todo el tiempo",
        body: "Los subtítulos son excelentes para revisar y descubrir. El doblaje ayuda cuando quieres algo que se sienta más fácil de ver o escuchar en otro idioma.",
      },
      {
        title: "Mantén el flujo pegado al video fuente",
        body: "Descarga, traduce, dobla y exporta desde una sola app en lugar de unir herramientas separadas de subtítulos, TTS y exportación.",
      },
      {
        title: "Termina con un entregable útil",
        body: "La meta es un video doblado que puedas guardar, enviar, revisar o publicar, no una pila de recursos intermedios.",
      },
    ],
    workflowEyebrow: "Cómo funciona",
    workflowTitle:
      "Un camino directo del video fuente al video doblado.",
    workflowSteps: [
      {
        step: "01",
        title: "Empieza con el video correcto",
        body: "Abre un archivo local o descarga algo que encontraste por descubrimiento para que el video ya esté dentro del mismo flujo.",
      },
      {
        step: "02",
        title: "Traduce antes de doblar",
        body: "Revisa los subtítulos traducidos y asegúrate de que el contenido dice lo que quieres antes de convertirlo en voz.",
      },
      {
        step: "03",
        title: "Genera y exporta la versión doblada",
        body: "Crea el resultado doblado y termina con un video listo para ver, guardar o entregar.",
      },
    ],
    useCasesEyebrow: "Cuándo más ayuda",
    useCasesTitle:
      "A veces los subtítulos bastan. A veces quieres una versión que realmente suene natural.",
    useCases: [
      {
        title: "Escucha con más naturalidad",
        body: "Usa doblaje cuando quieras seguir el video en tu idioma sin quedarte atado a los subtítulos, incluso mientras caminas o haces otra cosa.",
      },
      {
        title: "Prepara una versión localizada para compartir",
        body: "Cuando un video vale la pena circular, el doblaje te deja un resultado más fuerte que una simple transcripción traducida.",
      },
      {
        title: "Sigue avanzando después del descubrimiento",
        body: "Encuentra el video correcto, evalúalo primero con subtítulos y luego lleva los mejores hacia resultados doblados sin empezar de nuevo en otro lugar.",
      },
    ],
    bridgeTitle: "¿Necesitas encontrar o traducir primero el video?",
    bridgeBody:
      "Encuentra el video, míralo primero con subtítulos y luego dóblalo sin empezar de nuevo en otra herramienta.",
    bridgePrimary: "Ver Descubrimiento de Videos",
    bridgeSecondary: "Ver Traducción con IA",
    ctaTitle:
      "Descarga Translator y convierte los videos correctos en versiones dobladas que realmente puedas usar.",
    ctaBody:
      "Mira con subtítulos cuando eso sea suficiente. Dobla el video cuando quieras una versión más fácil de ver, compartir o guardar.",
    ctaNote:
      "La descarga y la edición de subtítulos son gratis. Las funciones de IA usan créditos solo cuando las ejecutas.",
  },
  ja: {
    title:
      "外国語動画を実際に見られるローカライズ版へ変える AI 吹き替え",
    description:
      "Translator を使えば、動画を自分の言語で吹き替え、作業を 1 つのアプリ内で続け、ばらばらの音声ではなく完成したローカライズ動画を書き出せます。",
    breadcrumb: "吹き替え",
    heroEyebrow: "理解を新しい版に変える",
    heroTitle:
      "ずっと字幕を読み続けたくないときは、動画を吹き替える。",
    heroBody:
      "翻訳字幕だけで足りることもあります。けれど、自分の言語で自然に流れる版が欲しいこともあります。座って見るときだけでなく、歩きながら聞きたいときもそうです。Translator は元の動画を保ったまま吹き替え音声を作り、同じ流れの中で完成したローカライズ結果まで書き出せます。",
    heroPoints: [
      "翻訳して見る段階から吹き替え結果までツールを変えずに進める",
      "元動画の文脈を保ちながら新しい音声トラックを作れる",
      "音声だけでなく、完成した吹き替え動画を書き出せる",
    ],
    studioTitle: "元動画から吹き替え結果まで",
    studioOriginalLabel: "原版",
    studioDubbedLabel: "吹き替え版",
    studioOriginal:
      "吹き替え版を準備している間も、元動画の文脈は見えたままです。",
    studioDubbed:
      "吹き替え結果は、そのまま見て、保存して、共有できる版になります。",
    studioCaption:
      "目的は別の音声ファイルを 1 つ増やすことではありません。実際に使える完成動画を持ち帰ることです。",
    outcomesEyebrow: "得られること",
    outcomesTitle:
      "吹き替えがあると、読むだけでなく聞けるので動画を追いやすくなります。",
    outcomes: [
      {
        title: "ずっと字幕を読まなくても動画を追える",
        body: "字幕は確認や発見に向いています。吹き替えは、別の言語でもっと見やすく、聞きやすい版が欲しいときに効きます。",
      },
      {
        title: "ワークフローを元動画につなげたままにする",
        body: "別々の字幕ツール、TTS ツール、書き出しツールをつなぎ合わせず、1 つのアプリでダウンロード、翻訳、吹き替え、書き出しまで進められます。",
      },
      {
        title: "使える成果物で終われる",
        body: "目標は中間素材の山ではなく、保存、送信、確認、公開に使える吹き替え動画です。",
      },
    ],
    workflowEyebrow: "仕組み",
    workflowTitle:
      "元動画から吹き替え動画までの、まっすぐな流れ。",
    workflowSteps: [
      {
        step: "01",
        title: "まずは正しい動画から始める",
        body: "ローカルファイルを開くか、発見で見つけた動画をダウンロードして、同じ流れの中にある状態から始めます。",
      },
      {
        step: "02",
        title: "吹き替えの前に翻訳を整える",
        body: "翻訳字幕を確認し、伝えたい内容になっているか確かめてから音声に変えます。",
      },
      {
        step: "03",
        title: "吹き替え版を生成して書き出す",
        body: "吹き替え結果を作り、見たり、保存したり、引き渡したりできる完成動画を残します。",
      },
    ],
    useCasesEyebrow: "特に役立つ場面",
    useCasesTitle:
      "字幕で足りるときもあります。けれど、本当に自然に聞こえる版が欲しいときもあります。",
    useCases: [
      {
        title: "もっと自然に聞ける",
        body: "字幕に視線を縛られず自分の言語で追いたいとき、特に歩きながら聞いたり別のことをしたりするときに吹き替えが役立ちます。",
      },
      {
        title: "共有しやすいローカライズ版を作る",
        body: "人に回す価値のある動画なら、吹き替えは翻訳テキストだけより強い成果物になります。",
      },
      {
        title: "発見のあとも流れを止めない",
        body: "正しい動画を見つけ、まず字幕で見極め、そのまま良いものを吹き替え結果まで進められます。",
      },
    ],
    bridgeTitle: "先に動画を見つけたり翻訳したりしたいですか？",
    bridgeBody:
      "まず動画を見つけ、字幕で見てから、別のツールでやり直さずに吹き替えへ進めます。",
    bridgePrimary: "動画発見を見る",
    bridgeSecondary: "AI 翻訳を見る",
    ctaTitle:
      "Translator をダウンロードして、良い動画を実際に使える吹き替え版に変えましょう。",
    ctaBody:
      "字幕で十分ならそのまま見て、もっと見やすく共有しやすい版が欲しいなら吹き替えへ進んでください。",
    ctaNote:
      "ダウンロードと字幕編集は無料です。AI 機能は実行したときだけクレジットを使います。",
  },
  zh: {
    title: "把外语视频变成真正可看的本地化版本的 AI 配音",
    description:
      "用 Translator 把视频配成你的语言，在同一个应用里继续整条流程，并导出完成的本地化视频，而不是零散的音频片段。",
    breadcrumb: "配音",
    heroEyebrow: "把理解变成新的版本",
    heroTitle: "当你不想一直盯着字幕读时，就去给视频配音。",
    heroBody:
      "有时候翻译字幕已经够了，有时候你会想要一个用自己语言自然播放的版本，不管你是坐下来认真看，还是边走边听。Translator 帮你保留原视频、生成配音语音，并在同一条流程里导出完成的本地化结果。",
    heroPoints: [
      "从翻译观看直接走到配音结果，不用换工具",
      "生成新语音轨时仍保留原视频语境",
      "导出的是完整配音视频，而不只是单独音频",
    ],
    studioTitle: "从原视频到配音结果",
    studioOriginalLabel: "原版",
    studioDubbedLabel: "配音版",
    studioOriginal: "准备配音版本时，原视频内容会一直保持可见。",
    studioDubbed: "配音结果会变成你可以观看、保存和分享的版本。",
    studioCaption:
      "重点不只是再生成一个音频文件。重点是最后拿到一个真正能用的完整视频。",
    outcomesEyebrow: "你得到什么",
    outcomesTitle:
      "配音让视频更容易跟上，因为你可以直接听，而不只是一直读字幕。",
    outcomes: [
      {
        title: "让人不用一直读字幕也能跟上视频",
        body: "字幕很适合复核和发现。配音则适合你想要一个用另一种语言听起来更轻松、更好看的版本时。",
      },
      {
        title: "让流程始终贴着源视频走",
        body: "在一个应用里完成下载、翻译、配音和导出，而不是把字幕、TTS 和导出工具拼在一起。",
      },
      {
        title: "最后拿到真正可用的成品",
        body: "目标是一条你可以保存、发送、审核或发布的配音视频，而不是一堆中间素材。",
      },
    ],
    workflowEyebrow: "工作方式",
    workflowTitle: "从源视频到配音视频的一条直接路径。",
    workflowSteps: [
      {
        step: "01",
        title: "先从对的视频开始",
        body: "打开本地文件，或者下载你在发现流程里找到的视频，这样视频一开始就在同一条流程中。",
      },
      {
        step: "02",
        title: "先翻译，再配音",
        body: "先检查翻译字幕，确认内容表达的就是你想说的，再把它变成语音。",
      },
      {
        step: "03",
        title: "生成并导出配音版本",
        body: "生成配音结果，最后得到一个可以直接观看、保存或交付的完整视频。",
      },
    ],
    useCasesEyebrow: "最适合的场景",
    useCasesTitle:
      "有时候字幕就够了。有时候你需要一个听起来真的更自然的版本。",
    useCases: [
      {
        title: "听起来更自然",
        body: "当你想用自己的语言跟上视频，而不想一直被字幕绑住时，尤其是边走边听或同时做别的事时，配音很有帮助。",
      },
      {
        title: "准备一个可以分享的本地化版本",
        body: "当一个视频值得传播时，配音能给你一个比单独翻译稿更有力量的成品。",
      },
      {
        title: "在发现之后继续往下走",
        body: "先找到合适的视频，用字幕判断，再把最好的内容继续推进成配音成品，不用去别处重来。",
      },
    ],
    bridgeTitle: "需要先找到视频或先做翻译吗？",
    bridgeBody:
      "先找到视频，用字幕看一遍，再直接进入配音，不用在另一个工具里重头开始。",
    bridgePrimary: "查看视频发现",
    bridgeSecondary: "查看 AI 翻译",
    ctaTitle: "下载 Translator，把合适的视频变成真正可用的配音版本。",
    ctaBody:
      "字幕够用时就直接看。想要更容易观看、分享或保存的版本时，就继续做配音。",
    ctaNote:
      "下载和字幕编辑免费。只有在你实际运行 AI 功能时才会消耗积分。",
  },
  fr: {
    title:
      "Doublage vidéo IA pour transformer des vidéos étrangères en versions localisées vraiment regardables",
    description:
      "Utilisez Translator pour doubler des vidéos dans votre langue, garder tout le flux dans une seule app et exporter des versions localisées finies plutôt que des fragments audio dispersés.",
    breadcrumb: "Doublage",
    heroEyebrow: "Transformer la compréhension en nouvelle version",
    heroTitle:
      "Doublez la vidéo quand vous ne voulez pas passer tout le temps à lire les sous-titres.",
    heroBody:
      "Parfois, les sous-titres traduits suffisent. Parfois, vous voulez une version qui se regarde naturellement dans votre langue, que vous soyez assis devant l'écran ou simplement en train d'écouter en marchant. Translator vous aide à garder la vidéo d'origine, générer la voix doublée et exporter un résultat localisé fini dans le même flux.",
    heroPoints: [
      "Passez du visionnage traduit à la sortie doublée sans changer d'outil",
      "Gardez le contexte de la vidéo d'origine pendant la génération d'une nouvelle piste voix",
      "Exportez une vidéo doublée finie, pas seulement de l'audio isolé",
    ],
    studioTitle: "De la vidéo d'origine à la sortie doublée",
    studioOriginalLabel: "Original",
    studioDubbedLabel: "Doublé",
    studioOriginal:
      "La vidéo d'origine reste visible pendant que vous préparez la version doublée.",
    studioDubbed:
      "La sortie doublée devient quelque chose que vous pouvez regarder, garder et partager.",
    studioCaption:
      "Le but n'est pas seulement de générer un fichier audio de plus. Le but est de repartir avec une vidéo finie que vous pouvez vraiment utiliser.",
    outcomesEyebrow: "Ce que vous obtenez",
    outcomesTitle:
      "Le doublage rend la vidéo plus facile à suivre parce qu'on peut l'entendre, pas seulement la lire.",
    outcomes: [
      {
        title: "Laisser les gens suivre la vidéo sans lire les sous-titres en continu",
        body: "Les sous-titres sont excellents pour la relecture et la découverte. Le doublage aide quand vous voulez quelque chose de plus simple à regarder ou écouter dans une autre langue.",
      },
      {
        title: "Garder le flux attaché à la vidéo source",
        body: "Téléchargez, traduisez, doublez et exportez depuis une seule app au lieu d'assembler plusieurs outils de sous-titres, TTS et export.",
      },
      {
        title: "Finir avec un livrable utile",
        body: "L'objectif est une vidéo doublée que vous pouvez garder, envoyer, relire ou publier, pas une pile de ressources intermédiaires.",
      },
    ],
    workflowEyebrow: "Comment ça marche",
    workflowTitle:
      "Un chemin direct de la vidéo source à la vidéo doublée.",
    workflowSteps: [
      {
        step: "01",
        title: "Commencez avec la bonne vidéo",
        body: "Ouvrez un fichier local ou téléchargez quelque chose trouvé via la découverte pour que la vidéo soit déjà dans le même flux.",
      },
      {
        step: "02",
        title: "Traduisez avant de doubler",
        body: "Relisez les sous-titres traduits et assurez-vous que le contenu dit bien ce que vous voulez avant de le transformer en voix.",
      },
      {
        step: "03",
        title: "Générez et exportez la version doublée",
        body: "Créez la sortie doublée et repartez avec une vidéo finie prête à être regardée, gardée ou transmise.",
      },
    ],
    useCasesEyebrow: "Quand cela aide le plus",
    useCasesTitle:
      "Parfois les sous-titres suffisent. Parfois vous voulez une version qui sonne vraiment naturelle.",
    useCases: [
      {
        title: "Écouter plus naturellement",
        body: "Utilisez le doublage quand vous voulez suivre la vidéo dans votre langue sans rester collé aux sous-titres, y compris en marchant ou en faisant autre chose.",
      },
      {
        title: "Préparer une version localisée partageable",
        body: "Quand une vidéo mérite d'être diffusée, le doublage vous donne un résultat plus solide qu'une simple transcription traduite.",
      },
      {
        title: "Continuer après la découverte",
        body: "Trouvez la bonne vidéo, jugez-la d'abord avec les sous-titres, puis faites avancer les meilleures vers des sorties doublées sans recommencer ailleurs.",
      },
    ],
    bridgeTitle: "Vous devez d'abord trouver ou traduire la vidéo ?",
    bridgeBody:
      "Trouvez la vidéo, regardez-la d'abord avec des sous-titres, puis doublez-la sans repartir dans un autre outil.",
    bridgePrimary: "Voir la découverte vidéo",
    bridgeSecondary: "Voir la traduction IA",
    ctaTitle:
      "Téléchargez Translator et transformez les bonnes vidéos en versions doublées que vous pouvez vraiment utiliser.",
    ctaBody:
      "Regardez avec des sous-titres quand cela suffit. Doublez la vidéo quand vous voulez une version plus simple à regarder, partager ou garder.",
    ctaNote:
      "Le téléchargement et l'édition des sous-titres sont gratuits. Les fonctions IA utilisent des crédits uniquement quand vous les lancez.",
  },
  de: {
    title:
      "KI-Dubbing für Videos, um fremdsprachige Videos in wirklich nutzbare lokalisierte Versionen zu verwandeln",
    description:
      "Nutze Translator, um Videos in deine Sprache zu synchronisieren, den gesamten Ablauf in einer App zu halten und fertige lokalisierte Versionen statt loser Audiofragmente zu exportieren.",
    breadcrumb: "Dubbing",
    heroEyebrow: "Aus Verstehen eine neue Version machen",
    heroTitle:
      "Synchronisiere das Video, wenn du nicht die ganze Zeit Untertitel lesen willst.",
    heroBody:
      "Manchmal reichen übersetzte Untertitel. Manchmal willst du eine Version, die in deiner Sprache natürlich läuft, egal ob du dich hinsetzt und schaust oder nur beim Gehen zuhörst. Translator hilft dir, das Originalvideo zu behalten, synchronisierte Sprache zu erzeugen und im selben Workflow ein fertiges lokalisiertes Ergebnis zu exportieren.",
    heroPoints: [
      "Vom übersetzten Anschauen zum synchronisierten Output ohne Toolwechsel",
      "Den Kontext des Originalvideos behalten, während eine neue Sprachspur entsteht",
      "Ein fertiges synchronisiertes Video exportieren, nicht nur einzelne Audiodateien",
    ],
    studioTitle: "Vom Originalvideo zum synchronisierten Ergebnis",
    studioOriginalLabel: "Original",
    studioDubbedLabel: "Synchronisiert",
    studioOriginal:
      "Das Originalvideo bleibt sichtbar, während du die synchronisierte Version vorbereitest.",
    studioDubbed:
      "Aus dem synchronisierten Ergebnis wird etwas, das du ansehen, speichern und teilen kannst.",
    studioCaption:
      "Es geht nicht nur darum, noch eine Audiodatei zu erzeugen. Es geht darum, mit einem fertigen Video herauszugehen, das du wirklich nutzen kannst.",
    outcomesEyebrow: "Was du bekommst",
    outcomesTitle:
      "Dubbing macht das Video leichter verfolgbar, weil du es hören kannst und nicht nur lesen musst.",
    outcomes: [
      {
        title: "Menschen können dem Video folgen, ohne die ganze Zeit Untertitel zu lesen",
        body: "Untertitel sind stark für Review und Discovery. Dubbing hilft, wenn du etwas willst, das sich in einer anderen Sprache leichter ansehen oder anhören lässt.",
      },
      {
        title: "Den Workflow am Quellvideo halten",
        body: "Herunterladen, übersetzen, dubbing und exportieren in einer App statt separate Subtitle-, TTS- und Export-Tools zusammenzubauen.",
      },
      {
        title: "Mit einem nutzbaren Ergebnis enden",
        body: "Das Ziel ist ein synchronisiertes Video, das du behalten, verschicken, prüfen oder veröffentlichen kannst, nicht ein Haufen Zwischenmaterial.",
      },
    ],
    workflowEyebrow: "So funktioniert's",
    workflowTitle:
      "Ein geradliniger Weg vom Quellvideo zum synchronisierten Video.",
    workflowSteps: [
      {
        step: "01",
        title: "Mit dem richtigen Video anfangen",
        body: "Öffne eine lokale Datei oder lade etwas herunter, das du über Discovery gefunden hast, damit das Video schon im selben Ablauf ist.",
      },
      {
        step: "02",
        title: "Vor dem Dubbing übersetzen",
        body: "Prüfe die übersetzten Untertitel und stelle sicher, dass der Inhalt wirklich sagt, was du willst, bevor du ihn in Sprache verwandelst.",
      },
      {
        step: "03",
        title: "Die synchronisierte Version erzeugen und exportieren",
        body: "Erstelle den Dubbing-Output und gehe mit einem fertigen Video raus, das direkt zum Anschauen, Speichern oder Weitergeben bereit ist.",
      },
    ],
    useCasesEyebrow: "Wann es am meisten hilft",
    useCasesTitle:
      "Manchmal reichen Untertitel. Manchmal willst du eine Version, die wirklich natürlich klingt.",
    useCases: [
      {
        title: "Natürlicher zuhören",
        body: "Nutze Dubbing, wenn du dem Video in deiner Sprache folgen willst, ohne an Untertitel gebunden zu sein, auch beim Gehen oder wenn du nebenbei etwas anderes machst.",
      },
      {
        title: "Eine teilbare lokalisierte Version vorbereiten",
        body: "Wenn sich ein Video weitergeben lohnt, liefert Dubbing ein stärkeres Ergebnis als nur ein übersetztes Transkript.",
      },
      {
        title: "Nach Discovery weitergehen",
        body: "Finde das richtige Video, bewerte es zuerst mit Untertiteln und bringe die besten dann in synchronisierte Outputs, ohne woanders neu anzufangen.",
      },
    ],
    bridgeTitle: "Musst du das Video erst finden oder übersetzen?",
    bridgeBody:
      "Finde das Video, schau es zuerst mit Untertiteln an und synchronisiere es dann, ohne in einem anderen Tool neu zu starten.",
    bridgePrimary: "Video Discovery ansehen",
    bridgeSecondary: "KI-Übersetzung ansehen",
    ctaTitle:
      "Lade Translator herunter und verwandle die richtigen Videos in synchronisierte Versionen, die du wirklich nutzen kannst.",
    ctaBody:
      "Schau mit Untertiteln, wenn das reicht. Nutze Dubbing, wenn du eine Version willst, die leichter anzusehen, zu teilen oder zu behalten ist.",
    ctaNote:
      "Download und Untertitelbearbeitung sind kostenlos. KI-Funktionen verbrauchen nur dann Credits, wenn du sie ausführst.",
  },
  pt: {
    title:
      "Dublagem de vídeo com IA para transformar vídeos estrangeiros em versões localizadas que realmente dá para assistir",
    description:
      "Use o Translator para dublar vídeos no seu idioma, manter todo o fluxo dentro de um só app e exportar versões localizadas prontas, em vez de fragmentos soltos de áudio.",
    breadcrumb: "Dublagem",
    heroEyebrow: "Transforme entendimento em uma nova versão",
    heroTitle:
      "Dubla o vídeo quando você não quer passar o tempo todo lendo legendas.",
    heroBody:
      "Às vezes as legendas traduzidas bastam. Às vezes você quer uma versão que soe natural no seu idioma, seja para sentar e assistir ou só ouvir enquanto caminha. O Translator ajuda você a manter o vídeo original, gerar a voz dublada e exportar um resultado localizado pronto dentro do mesmo fluxo.",
    heroPoints: [
      "Saia da visualização traduzida para um resultado dublado sem trocar de ferramenta",
      "Mantenha o contexto do vídeo original enquanto gera uma nova faixa de voz",
      "Exporte um vídeo dublado finalizado, não apenas áudio solto",
    ],
    studioTitle: "Do vídeo original ao resultado dublado",
    studioOriginalLabel: "Original",
    studioDubbedLabel: "Dublado",
    studioOriginal:
      "O vídeo original continua visível enquanto você prepara a versão dublada.",
    studioDubbed:
      "O resultado dublado vira algo que você pode assistir, salvar e compartilhar.",
    studioCaption:
      "A ideia não é só gerar mais um arquivo de áudio. A ideia é sair com um vídeo finalizado que você realmente pode usar.",
    outcomesEyebrow: "O que você recebe",
    outcomesTitle:
      "A dublagem deixa o vídeo mais fácil de acompanhar porque você pode ouvi-lo, não só lê-lo.",
    outcomes: [
      {
        title: "Deixe as pessoas acompanharem o vídeo sem ler legenda o tempo todo",
        body: "Legendas são ótimas para revisão e descoberta. A dublagem ajuda quando você quer algo mais fácil de assistir ou ouvir em outro idioma.",
      },
      {
        title: "Mantenha o fluxo preso ao vídeo de origem",
        body: "Baixe, traduza, duble e exporte em um só app, em vez de costurar ferramentas separadas de legenda, TTS e exportação.",
      },
      {
        title: "Termine com um entregável útil",
        body: "O objetivo é um vídeo dublado que você possa guardar, enviar, revisar ou publicar, não uma pilha de materiais intermediários.",
      },
    ],
    workflowEyebrow: "Como funciona",
    workflowTitle:
      "Um caminho direto do vídeo de origem ao vídeo dublado.",
    workflowSteps: [
      {
        step: "01",
        title: "Comece com o vídeo certo",
        body: "Abra um arquivo local ou baixe algo que você encontrou pela descoberta para que o vídeo já esteja dentro do mesmo fluxo.",
      },
      {
        step: "02",
        title: "Traduza antes de dublar",
        body: "Revise as legendas traduzidas e confirme que o conteúdo está dizendo o que você quer antes de transformá-lo em fala.",
      },
      {
        step: "03",
        title: "Gere e exporte a versão dublada",
        body: "Crie o resultado dublado e termine com um vídeo pronto para assistir, salvar ou repassar.",
      },
    ],
    useCasesEyebrow: "Quando mais ajuda",
    useCasesTitle:
      "Às vezes a legenda basta. Às vezes você quer uma versão que realmente soe natural.",
    useCases: [
      {
        title: "Ouça com mais naturalidade",
        body: "Use a dublagem quando quiser acompanhar o vídeo no seu idioma sem ficar preso às legendas, inclusive andando ou fazendo outra coisa ao mesmo tempo.",
      },
      {
        title: "Prepare uma versão localizada para compartilhar",
        body: "Quando um vídeo vale a pena circular, a dublagem entrega um resultado mais forte do que só uma transcrição traduzida.",
      },
      {
        title: "Continue depois da descoberta",
        body: "Encontre o vídeo certo, avalie primeiro com legendas e depois leve os melhores para resultados dublados sem recomeçar em outro lugar.",
      },
    ],
    bridgeTitle: "Precisa encontrar ou traduzir o vídeo primeiro?",
    bridgeBody:
      "Encontre o vídeo, assista primeiro com legendas e depois duble sem recomeçar em outra ferramenta.",
    bridgePrimary: "Ver Descoberta de Vídeos",
    bridgeSecondary: "Ver Tradução por IA",
    ctaTitle:
      "Baixe o Translator e transforme os vídeos certos em versões dubladas que você realmente pode usar.",
    ctaBody:
      "Assista com legendas quando isso bastar. Duble o vídeo quando quiser uma versão mais fácil de assistir, compartilhar ou guardar.",
    ctaNote:
      "Download e edição de legendas são grátis. Os recursos de IA só usam créditos quando você os executa.",
  },
} satisfies Record<Locale, DubbingPageCopy>;

const dubbingKeywords: Record<Locale, string[]> = {
  en: [
    "AI dubbing",
    "video dubbing",
    "dub foreign language videos",
    "create dubbed videos",
    "localized video output",
  ],
  ko: [
    "AI 더빙",
    "비디오 더빙",
    "외국어 영상 더빙",
    "더빙 영상 만들기",
    "현지화 영상",
  ],
  es: [
    "doblaje con IA",
    "doblaje de video",
    "doblar videos en otros idiomas",
    "crear videos doblados",
    "video localizado",
  ],
  ja: [
    "AI 吹き替え",
    "動画吹き替え",
    "外国語動画を吹き替える",
    "吹き替え動画を作る",
    "ローカライズ動画",
  ],
  zh: [
    "AI 配音",
    "视频配音",
    "外语视频配音",
    "制作配音视频",
    "本地化视频输出",
  ],
  fr: [
    "doublage IA",
    "doublage vidéo",
    "doubler des vidéos en langue étrangère",
    "créer des vidéos doublées",
    "sortie vidéo localisée",
  ],
  de: [
    "KI Dubbing",
    "Video Dubbing",
    "fremdsprachige Videos synchronisieren",
    "synchronisierte Videos erstellen",
    "lokalisierter Video-Output",
  ],
  pt: [
    "dublagem com IA",
    "dublagem de vídeo",
    "dublar vídeos em outro idioma",
    "criar vídeos dublados",
    "saída de vídeo localizada",
  ],
};

function getDubbingCopy(locale: Locale): DubbingPageCopy {
  return dubbingCopy[locale];
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getDubbingCopy(locale);

  return buildMetadata({
    title: `${copy.title} | Translator`,
    description: copy.description,
    path: "/dubbing",
    keywords: dubbingKeywords[locale],
    locale,
  });
}

export default async function DubbingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = getDubbingCopy(locale);
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

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.16),_transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {copy.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {copy.heroBody}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-rose-300" />
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
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/40 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <Image
                  src={dubbingScreenshot.src}
                  alt={copy.studioTitle}
                  width={dubbingScreenshot.width}
                  height={dubbingScreenshot.height}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                    {copy.studioOriginalLabel}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {copy.studioOriginal}
                  </p>
                </div>
                <div className="rounded-[24px] border border-rose-300/20 bg-gradient-to-br from-rose-500/12 via-white/[0.04] to-orange-400/10 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200">
                    {copy.studioDubbedLabel}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-100">
                    {copy.studioDubbed}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-6 text-gray-400">
                {copy.studioCaption}
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
                <div className="text-sm font-semibold text-rose-300">
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
                {copy.useCasesEyebrow}
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {copy.useCasesTitle}
              </h2>
            </div>
            <div className="space-y-5">
              {copy.useCases.map((item) => (
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
                  href={localizeHref("/video-discovery")}
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

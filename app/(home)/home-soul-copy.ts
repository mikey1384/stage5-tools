import type { Locale } from "../../lib/strings";

// Copy for the 2026-10 "soul" home layout. Existing SEO copy (title, meta,
// eyebrow, languages, social proof, agents) stays in home-copy.ts and
// home-experience-copy.ts.

type Moment = { title: string; body: string };
type Feature = { title: string; body: string; cta: string };
type PriceCard = { value: string; body: string };

export type HomeSoulCopy = {
  heroTitleBefore: string;
  heroTitleHighlight: string;
  heroTitleAfter: string;
  heroSubtitle: string;
  heroNote: string;
  momentsTitle: string;
  moments: readonly [Moment, Moment, Moment];
  featuresTitle: string;
  featuresSubtitle: string;
  // Order: downloader, translate, editor, dubbing, clips, discovery, tabs, agents.
  features: readonly [Feature, Feature, Feature, Feature, Feature, Feature, Feature, Feature];
  pricingTitle: string;
  pricing: readonly [PriceCard, PriceCard, PriceCard];
  closingTitle: string;
  closingNote: string;
};

export const homeSoulCopy: Record<Locale, HomeSoulCopy> = {
  en: {
    heroTitleBefore: "Every video can speak ",
    heroTitleHighlight: "your language",
    heroTitleAfter: ".",
    heroSubtitle:
      "Paste a link or drop in a video in any language. Translator listens, writes the subtitles, and makes it speak yours — then lets you dub it, clip it, or export it.",
    heroNote:
      "Free to install · 5 free minutes of AI every month · downloading, editing and export always free",
    momentsTitle: "Three moments. That’s the whole idea.",
    moments: [
      { title: "Bring any video", body: "Paste a link from YouTube, TikTok, Instagram or X, drop in a file, or ask Translator to find something worth watching." },
      { title: "Watch it listen", body: "Every spoken word becomes a timed subtitle, then a second pass checks the translation against context — names, tone and timing stay intact." },
      { title: "Hear it in your language", body: "Play it with subtitles, export a subtitled video or SRT, dub it with natural voices, or cut the best moments into vertical clips." },
    ],
    featuresTitle: "Everything after the translation, too.",
    featuresSubtitle: "One desktop app for Mac and Windows",
    features: [
      { title: "Video downloader", body: "Bring in videos from supported sites by link, in the quality you want, straight into the workspace.", cta: "See the downloader" },
      { title: "AI translation with review", body: "A first translation plus a second quality pass that reads each line in context.", cta: "See AI translation" },
      { title: "Subtitle editor", body: "Turn on editing to fix wording and timing against the video, or open an existing SRT.", cta: "See the editor" },
      { title: "Dubbing", body: "Give the video a voice in the new language with natural-sounding speech.", cta: "See dubbing" },
      { title: "Highlight clips", body: "Surface the moments worth keeping and render vertical clips with smart reframing.", cta: "See clips" },
      { title: "Find videos for you", body: "Describe what you want to watch and get ranked YouTube picks to subtitle.", cta: "See video discovery" },
      { title: "Tabs for every video", body: "Each video runs in its own tab; jobs keep going in the background and tell you when they finish.", cta: "See the multitab workflow" },
      { title: "Works with Claude & Codex", body: "Connect your own Claude or Codex and translate subtitles with your subscription — no Translator charge.", cta: "See agent mode" },
    ],
    pricingTitle: "Free until AI runs. Then you choose.",
    pricing: [
      { value: "$0", body: "Install, download videos, edit subtitles, burn them in and export. Always free." },
      { value: "5 min / month", body: "Free AI transcription and translation every month — enough for a short video. Plus a welcome bonus when you first open the app." },
      { value: "From $1", body: "Pay as you go for longer videos — no subscription. Or use your own API keys, or translate free with your own Claude or Codex." },
    ],
    closingTitle: "Now go watch the video you couldn’t understand.",
    closingNote: "macOS 12+ · Windows 10+ · On a phone? We’ll send you the link.",
  },
  ko: {
    heroTitleBefore: "어떤 영상이든 ",
    heroTitleHighlight: "한국어",
    heroTitleAfter: "로.",
    heroSubtitle:
      "외국어 영상도 링크를 붙여넣거나 파일을 끌어다 놓기만 하세요. Translator가 듣고 자막을 만들어 한국어로 보여 줘요. 더빙, 클립 만들기, 내보내기까지 한곳에서 할 수 있어요.",
    heroNote: "무료 설치 · 매달 AI 5분 무료 · 다운로드, 편집, 내보내기는 언제나 무료",
    momentsTitle: "이렇게 간단해요.",
    moments: [
      { title: "영상 가져오기", body: "YouTube, TikTok, Instagram, X 링크를 붙여넣거나 파일을 끌어다 놓으세요. 볼 만한 영상을 찾아 달라고 해도 돼요." },
      { title: "자막이 생기는 걸 지켜보기", body: "말소리가 바로 타이밍에 맞는 자막이 되고, 문맥을 보며 한 번 더 검토해 이름과 말투까지 자연스럽게 다듬어요." },
      { title: "한국어로 즐기기", body: "자막을 띄워 보거나, 자막을 입힌 영상이나 SRT 파일로 내보내세요. 자연스러운 목소리로 더빙하거나 좋은 장면을 세로 클립으로 만들 수도 있어요." },
    ],
    featuresTitle: "번역 그다음까지, 전부.",
    featuresSubtitle: "Mac과 Windows용 데스크톱 앱 하나로",
    features: [
      { title: "영상 다운로더", body: "지원되는 사이트의 영상을 링크 하나로, 원하는 화질로 바로 가져와요.", cta: "다운로더 보기" },
      { title: "검토까지 하는 AI 번역", body: "먼저 번역한 뒤, 한 번 더 문맥을 읽으며 줄마다 다듬어요.", cta: "AI 번역 보기" },
      { title: "자막 편집기", body: "편집 모드를 켜고 영상을 보면서 문장과 타이밍을 고치거나, 갖고 있는 SRT를 열어 보세요.", cta: "편집기 보기" },
      { title: "더빙", body: "새 언어로, 자연스러운 목소리를 영상에 입혀요.", cta: "더빙 보기" },
      { title: "하이라이트 클립", body: "남길 만한 장면을 찾아 세로 클립으로 만들고, 화면 구도도 알아서 맞춰요.", cta: "클립 보기" },
      { title: "볼 영상 추천", body: "보고 싶은 영상을 말로 설명하면, 자막 달기 좋은 YouTube 영상을 골라 줘요.", cta: "영상 탐색 보기" },
      { title: "영상마다 탭 하나", body: "영상마다 탭이 따로 열려요. 다른 탭을 보는 동안에도 작업은 계속되고, 끝나면 알려 줘요.", cta: "멀티탭 작업 보기" },
      { title: "Claude·Codex와 함께", body: "쓰고 있는 Claude나 Codex를 연결하면 그 구독으로 자막을 번역할 수 있어요. Translator 요금은 따로 없어요.", cta: "에이전트 모드 보기" },
    ],
    pricingTitle: "AI를 쓰기 전까진 무료. 그다음은 원하는 방식으로.",
    pricing: [
      { value: "$0", body: "설치, 영상 다운로드, 자막 편집, 자막 입히기, 내보내기는 언제나 무료예요." },
      { value: "매달 5분", body: "매달 5분 분량의 AI 받아쓰기와 번역이 무료예요. 짧은 영상 하나는 거뜬하고, 처음 앱을 열면 환영 보너스도 드려요." },
      { value: "$1부터", body: "긴 영상은 쓴 만큼만 결제하세요. 구독은 없어요. 내 API 키를 쓰거나, 쓰고 있는 Claude나 Codex로 무료 번역할 수도 있어요." },
    ],
    closingTitle: "보고 싶던 그 영상, 이제 한국어로 보세요.",
    closingNote: "macOS 12 이상 · Windows 10 이상 · 휴대폰으로 보고 계신가요? 링크를 보내 드릴게요.",
  },
  es: {
    heroTitleBefore: "Cualquier video, en ",
    heroTitleHighlight: "español",
    heroTitleAfter: ".",
    heroSubtitle:
      "Pega un enlace o arrastra un video en cualquier idioma. Translator lo escucha, escribe los subtítulos y lo traduce al español. Después puedes doblarlo, sacar clips o exportarlo.",
    heroNote: "Instalación gratuita · 5 minutos de IA gratis al mes · descargar, editar y exportar, siempre gratis",
    momentsTitle: "Tres pasos. Así de simple.",
    moments: [
      { title: "Elige un video", body: "Pega un enlace de YouTube, TikTok, Instagram o X, arrastra un archivo o pídele a Translator que te busque algo que valga la pena ver." },
      { title: "Mira cómo nacen los subtítulos", body: "Cada palabra se convierte en un subtítulo sincronizado. Luego, una segunda pasada revisa la traducción en contexto y cuida nombres, tono y ritmo." },
      { title: "Ahora, en español", body: "Míralo con subtítulos, exporta el video subtitulado o un SRT, dóblalo con voces naturales o convierte lo mejor en clips verticales." },
    ],
    featuresTitle: "Y todo lo que viene después.",
    featuresSubtitle: "Una sola app de escritorio, para Mac y Windows",
    features: [
      { title: "Descargador de videos", body: "Trae videos de los sitios compatibles con solo un enlace, en la calidad que quieras, directo a tu espacio de trabajo.", cta: "Ver el descargador" },
      { title: "Traducción con IA, revisada", body: "Una primera traducción y una segunda pasada que lee cada línea en su contexto.", cta: "Ver la traducción" },
      { title: "Editor de subtítulos", body: "Activa la edición para ajustar texto y tiempos con el video delante, o abre un SRT que ya tengas.", cta: "Ver el editor" },
      { title: "Doblaje", body: "Dale voz al video en otro idioma, con voces que suenan naturales.", cta: "Ver el doblaje" },
      { title: "Clips destacados", body: "Detecta los momentos que vale la pena guardar y crea clips verticales con reencuadre inteligente.", cta: "Ver los clips" },
      { title: "Videos para ti", body: "Describe lo que quieres ver y recibe una selección de YouTube, ordenada y lista para subtitular.", cta: "Ver la búsqueda" },
      { title: "Una pestaña por video", body: "Cada video tiene su propia pestaña. Los procesos siguen en segundo plano y te avisan cuando terminan.", cta: "Ver las pestañas" },
      { title: "Funciona con Claude y Codex", body: "Conecta tu Claude o Codex y traduce los subtítulos con tu propia suscripción. Translator no te cobra nada.", cta: "Ver el modo agente" },
    ],
    pricingTitle: "Gratis hasta que uses la IA. Luego, tú eliges.",
    pricing: [
      { value: "$0", body: "Instala, descarga videos, edita subtítulos, incrústalos y exporta. Siempre gratis." },
      { value: "5 min / mes", body: "Transcripción y traducción con IA, gratis cada mes: suficiente para un video corto. Y un regalo de bienvenida la primera vez que abres la app." },
      { value: "Desde $1", body: "Para videos más largos, pagas solo lo que usas. Sin suscripción. También puedes usar tus propias claves de API o traducir gratis con tu Claude o Codex." },
    ],
    closingTitle: "Ese video que no entendías ahora habla español.",
    closingNote: "macOS 12+ · Windows 10+ · ¿Lo estás viendo en el teléfono? Te mandamos el enlace.",
  },
  ja: {
    heroTitleBefore: "どんな動画も、",
    heroTitleHighlight: "日本語",
    heroTitleAfter: "で。",
    heroSubtitle:
      "どんな言語の動画でも、リンクを貼るかドロップするだけ。Translator が聞き取って字幕にし、日本語に訳します。吹き替えも、クリップ作りも、書き出しも、ここで。",
    heroNote: "インストール無料 · AI は毎月 5 分まで無料 · ダウンロード・編集・書き出しはずっと無料",
    momentsTitle: "使い方はかんたん。",
    moments: [
      { title: "動画を取り込む", body: "YouTube、TikTok、Instagram、X のリンクを貼る。ファイルをドロップする。見たい動画を探してもらうこともできます。" },
      { title: "字幕ができていく様子を見る", body: "話した言葉が、タイミングの合った字幕に。もう一度文脈を読み直して、名前も口調もそのまま伝えます。" },
      { title: "日本語で楽しむ", body: "字幕で観る。字幕入り動画や SRT で書き出す。自然な声で吹き替える。いいシーンを縦型クリップにする。" },
    ],
    featuresTitle: "翻訳のその先まで、すべて。",
    featuresSubtitle: "Mac と Windows のデスクトップアプリひとつで",
    features: [
      { title: "動画ダウンローダー", body: "対応サイトの動画を、リンクから好きな画質で。そのまま編集に入れます。", cta: "ダウンローダーについて" },
      { title: "見直し付きの AI 翻訳", body: "訳したあと、もう一度。一行ずつ文脈を読んで仕上げます。", cta: "AI 翻訳について" },
      { title: "字幕エディター", body: "動画を見ながら、言葉もタイミングも直せます。手持ちの SRT も開けます。", cta: "エディターについて" },
      { title: "吹き替え", body: "自然な声で、別の言語の動画に。", cta: "吹き替えについて" },
      { title: "ハイライトクリップ", body: "残したい瞬間を見つけて、縦型クリップに。構図も自動で合わせます。", cta: "クリップについて" },
      { title: "動画さがし", body: "見たいものを言葉で伝えるだけ。字幕を付けたくなる YouTube 動画を選んで並べます。", cta: "動画さがしについて" },
      { title: "動画ごとにタブ", body: "動画ごとにタブを分けて作業。ほかを見ている間も処理は進み、終わったらお知らせします。", cta: "マルチタブについて" },
      { title: "Claude・Codex と連携", body: "お使いの Claude や Codex をつなげば、そのサブスクリプションで字幕を翻訳。Translator の料金はかかりません。", cta: "エージェントモードについて" },
    ],
    pricingTitle: "AI を使うまでは無料。その先は、お好みで。",
    pricing: [
      { value: "$0", body: "インストール、動画のダウンロード、字幕の編集、焼き込み、書き出し。すべてずっと無料です。" },
      { value: "毎月 5 分", body: "AI の文字起こしと翻訳が毎月無料。短い動画なら一本まるごと。初回はウェルカムボーナスも。" },
      { value: "$1 から", body: "長い動画は、使った分だけ。サブスクリプションはありません。自分の API キーも使えますし、お使いの Claude や Codex なら無料で翻訳できます。" },
    ],
    closingTitle: "見たかったあの動画を、日本語で。",
    closingNote: "macOS 12 以降 · Windows 10 以降 · スマートフォンでご覧ですか？リンクをお送りします。",
  },
  zh: {
    heroTitleBefore: "任何视频，都能用",
    heroTitleHighlight: "中文",
    heroTitleAfter: "看懂。",
    heroSubtitle:
      "粘贴链接，或直接拖入视频，什么语言都行。Translator 替你听，替你写字幕，再译成中文。配音、剪片段、导出，也都在这里。",
    heroNote: "免费安装 · 每月 5 分钟 AI 免费用 · 下载、编辑、导出始终免费",
    momentsTitle: "就这么简单。",
    moments: [
      { title: "导入任意视频", body: "粘贴 YouTube、TikTok、Instagram 或 X 的链接，或拖入本地文件。不知道看什么，就让 Translator 帮你找。" },
      { title: "看着字幕一句句出现", body: "每句话都会变成对好时间的字幕。之后再过一遍，结合上下文校对译文，人名、语气、节奏都不走样。" },
      { title: "用中文观看", body: "直接带字幕播放，或导出成带字幕的视频、SRT 文件。也可以用自然的人声配音，或把精彩片段剪成竖屏短视频。" },
    ],
    featuresTitle: "翻译之后的事，也交给它。",
    featuresSubtitle: "一个桌面应用，Mac 和 Windows 都能用",
    features: [
      { title: "视频下载", body: "粘贴链接，就能从支持的网站下载视频。画质自己选，下完直接进工作区。", cta: "了解下载功能" },
      { title: "AI 翻译，还会自查", body: "先译一遍，再结合上下文逐句复核一遍。", cta: "了解 AI 翻译" },
      { title: "字幕编辑器", body: "打开编辑模式，边看视频边改字词和时间轴。已有的 SRT 也能直接打开。", cta: "了解字幕编辑" },
      { title: "AI 配音", body: "用自然的人声，给视频配上另一种语言。", cta: "了解配音" },
      { title: "精彩片段", body: "自动挑出值得留下的片段，智能调整构图，剪成竖屏短视频。", cta: "了解片段剪辑" },
      { title: "帮你找视频", body: "说说你想看什么，它会从 YouTube 挑出合适的视频，排好序等你加字幕。", cta: "了解视频推荐" },
      { title: "一个视频，一个标签页", body: "每个视频各开一个标签页。任务在后台照常进行，做完会告诉你。", cta: "了解多标签页" },
      { title: "支持 Claude 和 Codex", body: "连上你自己的 Claude 或 Codex，用你的订阅翻译字幕，Translator 不额外收费。", cta: "了解智能体模式" },
    ],
    pricingTitle: "用 AI 之前，分文不收。之后怎么用，你来定。",
    pricing: [
      { value: "$0", body: "安装、下载视频、编辑字幕、压制字幕、导出，始终免费。" },
      { value: "每月 5 分钟", body: "每月免费的 AI 转写和翻译，够处理一个短视频。首次打开应用，还会额外赠送一些额度。" },
      { value: "$1 起", body: "长视频按用量付费，不用订阅。也可以用自己的 API 密钥，或者用你的 Claude、Codex 免费翻译。" },
    ],
    closingTitle: "想看的那个视频，现在就能看懂。",
    closingNote: "macOS 12+ · Windows 10+ · 在用手机？我们把下载链接发给你。",
  },
  fr: {
    heroTitleBefore: "Toutes les vidéos, en ",
    heroTitleHighlight: "français",
    heroTitleAfter: ".",
    heroSubtitle:
      "Collez un lien ou déposez une vidéo, quelle que soit sa langue. Translator l’écoute, écrit les sous-titres et vous la rend en français. Ensuite, doublez-la, tirez-en des clips ou exportez-la.",
    heroNote: "Installation gratuite · 5 minutes d’IA offertes chaque mois · téléchargement, édition et export toujours gratuits",
    momentsTitle: "Trois temps. C’est tout.",
    moments: [
      { title: "Choisissez une vidéo", body: "Collez un lien YouTube, TikTok, Instagram ou X, glissez un fichier, ou laissez Translator vous trouver quelque chose à voir." },
      { title: "Les sous-titres s’écrivent", body: "Chaque mot devient un sous-titre calé sur l’image. Une seconde lecture vérifie la traduction en contexte : noms, ton et rythme restent justes." },
      { title: "Écoutez-la en français", body: "Regardez-la sous-titrée, exportez la vidéo ou le SRT, doublez-la avec des voix naturelles, ou gardez les meilleurs moments en clips verticaux." },
    ],
    featuresTitle: "Et après la traduction, tout le reste.",
    featuresSubtitle: "Une seule application, sur Mac et Windows",
    features: [
      { title: "Téléchargement de vidéos", body: "Un lien suffit : la vidéo arrive dans votre espace de travail, dans la qualité de votre choix, depuis les sites compatibles.", cta: "Voir le téléchargement" },
      { title: "Traduction IA relue", body: "Une première traduction, puis une relecture qui reprend chaque ligne dans son contexte.", cta: "Voir la traduction IA" },
      { title: "Éditeur de sous-titres", body: "Passez en mode édition pour retoucher le texte et le minutage en suivant la vidéo, ou ouvrez un SRT existant.", cta: "Voir l’éditeur" },
      { title: "Doublage", body: "Donnez à la vidéo une voix naturelle dans sa nouvelle langue.", cta: "Voir le doublage" },
      { title: "Temps forts en clips", body: "Translator repère les moments à garder et en tire des clips verticaux, recadrés intelligemment.", cta: "Voir les clips" },
      { title: "Des vidéos pour vous", body: "Dites ce que vous avez envie de voir : Translator vous propose une sélection YouTube à sous-titrer.", cta: "Voir la recherche de vidéos" },
      { title: "Un onglet par vidéo", body: "Chaque vidéo a son onglet. Le travail continue en arrière-plan, et on vous prévient quand c’est prêt.", cta: "Voir le travail en onglets" },
      { title: "Avec Claude et Codex", body: "Connectez votre Claude ou votre Codex et traduisez les sous-titres avec votre abonnement. Rien à payer côté Translator.", cta: "Voir le mode agent" },
    ],
    pricingTitle: "Gratuit tant que l’IA ne tourne pas. Ensuite, vous choisissez.",
    pricing: [
      { value: "0 $", body: "Installer, télécharger, retoucher les sous-titres, les incruster, exporter : tout cela reste gratuit." },
      { value: "5 min / mois", body: "Chaque mois, transcription et traduction IA offertes : de quoi traiter une courte vidéo. Et un bonus de bienvenue à la première ouverture." },
      { value: "Dès 1 $", body: "Pour les vidéos plus longues, vous payez à l’usage, sans abonnement. Ou utilisez vos propres clés API, ou traduisez gratuitement avec votre Claude ou Codex." },
    ],
    closingTitle: "Cette vidéo qui vous échappait ? Regardez-la en français.",
    closingNote: "macOS 12+ · Windows 10+ · Sur votre téléphone ? On vous envoie le lien.",
  },
  de: {
    heroTitleBefore: "Jedes Video auf ",
    heroTitleHighlight: "Deutsch",
    heroTitleAfter: ".",
    heroSubtitle:
      "Link einfügen oder Video hineinziehen – egal, in welcher Sprache. Translator hört zu, schreibt die Untertitel und übersetzt sie ins Deutsche. Danach kannst du es vertonen, Clips schneiden oder exportieren.",
    heroNote: "Kostenlos installieren · jeden Monat 5 KI-Minuten gratis · Download, Bearbeiten und Export bleiben kostenlos",
    momentsTitle: "Drei Schritte. Mehr braucht es nicht.",
    moments: [
      { title: "Video holen", body: "Link von YouTube, TikTok, Instagram oder X einfügen, Datei hineinziehen – oder Translator etwas Sehenswertes suchen lassen." },
      { title: "Untertitel entstehen sehen", body: "Jedes gesprochene Wort wird zum zeitgenauen Untertitel. Ein zweiter Durchgang prüft die Übersetzung im Zusammenhang, damit Namen, Ton und Timing stimmen." },
      { title: "Auf Deutsch ansehen", body: "Schau es mit Untertiteln, exportiere es als Video oder SRT, vertone es mit natürlichen Stimmen oder schneide die besten Stellen zu Hochformat-Clips." },
    ],
    featuresTitle: "Und alles, was danach kommt.",
    featuresSubtitle: "Alles in einer App für Mac und Windows",
    features: [
      { title: "Video-Downloader", body: "Hol Videos von unterstützten Seiten per Link – in der Qualität, die du willst, direkt in die App.", cta: "Downloader ansehen" },
      { title: "KI-Übersetzung mit zweitem Blick", body: "Erst die Übersetzung, dann ein zweiter Durchgang, der jede Zeile im Zusammenhang liest und glättet.", cta: "KI-Übersetzung ansehen" },
      { title: "Untertitel-Editor", body: "Schalte die Bearbeitung ein und korrigiere Text und Timing direkt am Video – oder öffne eine vorhandene SRT.", cta: "Editor ansehen" },
      { title: "Vertonung", body: "Gib dem Video eine natürliche Stimme in der neuen Sprache.", cta: "Vertonung ansehen" },
      { title: "Highlight-Clips", body: "Findet die Stellen, die sich lohnen, und macht daraus Hochformat-Clips. Der Bildausschnitt folgt automatisch.", cta: "Clips ansehen" },
      { title: "Videos für dich", body: "Beschreib, worauf du Lust hast, und bekomm passende YouTube-Videos zum Untertiteln vorgeschlagen.", cta: "Videosuche ansehen" },
      { title: "Ein Tab pro Video", body: "Jedes Video bekommt seinen eigenen Tab. Aufgaben laufen im Hintergrund weiter und melden sich, wenn sie fertig sind.", cta: "Tabs ansehen" },
      { title: "Mit Claude & Codex", body: "Verbinde dein Claude oder Codex und übersetze Untertitel über dein Abo. Translator berechnet dafür nichts.", cta: "Agentenmodus ansehen" },
    ],
    pricingTitle: "Kostenlos, bis die KI loslegt. Dann entscheidest du.",
    pricing: [
      { value: "0 $", body: "Installieren, Videos laden, Untertitel bearbeiten, einbrennen und exportieren. Bleibt immer kostenlos." },
      { value: "5 Min. / Monat", body: "Jeden Monat KI-Transkription und -Übersetzung gratis – genug für ein kurzes Video. Beim ersten Start gibt’s noch einen Willkommensbonus dazu." },
      { value: "Ab 1 $", body: "Längere Videos zahlst du nach Verbrauch, ganz ohne Abo. Oder du nutzt eigene API-Schlüssel – oder übersetzt kostenlos mit deinem Claude oder Codex." },
    ],
    closingTitle: "Das Video, das du nicht verstanden hast? Jetzt auf Deutsch.",
    closingNote: "macOS 12+ · Windows 10+ · Am Handy? Wir schicken dir den Link.",
  },
  pt: {
    heroTitleBefore: "Qualquer vídeo, em ",
    heroTitleHighlight: "português",
    heroTitleAfter: ".",
    heroSubtitle:
      "Cole um link ou solte um vídeo em qualquer idioma. O Translator escuta, escreve as legendas e traz tudo para o português. Depois, se quiser, duble, corte clipes ou exporte.",
    heroNote: "Instalação grátis · 5 minutos de IA grátis por mês · baixar, editar e exportar é sempre grátis",
    momentsTitle: "É simples assim.",
    moments: [
      { title: "Traga um vídeo", body: "Cole um link do YouTube, TikTok, Instagram ou X, solte um arquivo ou peça ao Translator para achar algo que valha a pena ver." },
      { title: "Veja as legendas surgirem", body: "Cada fala vira uma legenda no tempo certo. Depois, uma segunda leitura revisa a tradução no contexto — nomes, tom e ritmo no lugar." },
      { title: "Assista em português", body: "Veja com legendas, exporte o vídeo legendado ou um SRT, duble com vozes naturais ou transforme os melhores momentos em clipes verticais." },
    ],
    featuresTitle: "E tudo o que vem depois da tradução.",
    featuresSubtitle: "Um só app para Mac e Windows",
    features: [
      { title: "Download de vídeos", body: "Traga vídeos de sites compatíveis com um link, na qualidade que preferir, direto para o seu espaço de trabalho.", cta: "Ver o download" },
      { title: "Tradução com IA e revisão", body: "Primeiro, a tradução. Depois, uma segunda leitura que revisa cada linha no contexto.", cta: "Ver a tradução com IA" },
      { title: "Editor de legendas", body: "Ative a edição e ajuste texto e tempo enquanto vê o vídeo. Ou abra um SRT que você já tem.", cta: "Ver o editor" },
      { title: "Dublagem", body: "Dê ao vídeo uma voz natural no novo idioma.", cta: "Ver a dublagem" },
      { title: "Clipes de destaque", body: "Encontre os momentos que merecem ficar e gere clipes verticais com enquadramento automático.", cta: "Ver os clipes" },
      { title: "Vídeos para você", body: "Diga o que quer assistir e receba sugestões do YouTube, em ordem e prontas para legendar.", cta: "Ver as sugestões" },
      { title: "Uma aba para cada vídeo", body: "Cada vídeo na sua própria aba. As tarefas seguem em segundo plano e avisam quando terminam.", cta: "Ver as abas" },
      { title: "Com Claude e Codex", body: "Conecte o seu Claude ou Codex e traduza legendas com a sua assinatura. O Translator não cobra nada.", cta: "Ver o modo agente" },
    ],
    pricingTitle: "Grátis até você usar a IA. Depois, do seu jeito.",
    pricing: [
      { value: "US$0", body: "Instale, baixe vídeos, edite legendas, grave-as no vídeo e exporte. Sempre grátis." },
      { value: "5 min / mês", body: "Transcrição e tradução com IA grátis todo mês — dá para um vídeo curto. E um bônus de boas-vindas na primeira vez que você abre o app." },
      { value: "A partir de US$1", body: "Para vídeos mais longos, pague só o que usar, sem assinatura. Ou use suas próprias chaves de API, ou traduza grátis com o seu Claude ou Codex." },
    ],
    closingTitle: "Aquele vídeo que você não entendia? Agora em português.",
    closingNote: "macOS 12+ · Windows 10+ · Abriu pelo celular? A gente manda o link.",
  },
  vi: {
    heroTitleBefore: "Xem mọi video bằng ",
    heroTitleHighlight: "tiếng Việt",
    heroTitleAfter: ".",
    heroSubtitle:
      "Dán một đường link hoặc thả video vào, tiếng gì cũng được. Translator nghe, làm phụ đề và chuyển sang tiếng Việt. Sau đó, lồng tiếng, cắt clip hay xuất video đều làm được ngay tại đây.",
    heroNote: "Cài đặt miễn phí · Mỗi tháng 5 phút AI miễn phí · Tải video, chỉnh sửa, xuất file luôn miễn phí",
    momentsTitle: "Chỉ ba bước. Vậy thôi.",
    moments: [
      { title: "Đưa video vào", body: "Dán link YouTube, TikTok, Instagram hay X, hoặc kéo thả một tệp. Chưa biết xem gì thì nhờ Translator tìm giúp." },
      { title: "Phụ đề hiện dần", body: "Từng câu nói được chuyển thành phụ đề khớp thời gian. Sau đó bản dịch được soát lại theo ngữ cảnh, giữ đúng tên riêng, giọng điệu và nhịp thoại." },
      { title: "Thưởng thức bằng tiếng Việt", body: "Xem kèm phụ đề, xuất video có phụ đề hoặc tệp SRT. Lồng tiếng bằng giọng đọc tự nhiên, hoặc cắt những đoạn hay nhất thành clip dọc." },
    ],
    featuresTitle: "Không chỉ dừng ở bản dịch.",
    featuresSubtitle: "Gói gọn trong một ứng dụng cho Mac và Windows",
    features: [
      { title: "Tải video", body: "Chỉ cần một đường link, video từ các trang được hỗ trợ về thẳng không gian làm việc, đúng chất lượng mong muốn.", cta: "Xem cách tải video" },
      { title: "Dịch AI, soát lại kỹ", body: "Dịch một lượt, rồi đọc lại từng dòng theo ngữ cảnh để câu chữ tự nhiên hơn.", cta: "Xem dịch AI" },
      { title: "Chỉnh phụ đề", body: "Bật chế độ chỉnh sửa để sửa câu chữ và thời gian ngay trên video, hoặc mở tệp SRT có sẵn.", cta: "Xem trình chỉnh sửa" },
      { title: "Lồng tiếng", body: "Cho video cất lời bằng ngôn ngữ mới, với giọng đọc tự nhiên.", cta: "Xem lồng tiếng" },
      { title: "Clip nổi bật", body: "Tìm ra những khoảnh khắc đáng giữ và dựng thành clip dọc, khung hình tự căn gọn gàng.", cta: "Xem clip" },
      { title: "Gợi ý video để xem", body: "Chỉ cần nói muốn xem gì, Translator sẽ chọn ra những video YouTube hợp nhất để làm phụ đề.", cta: "Xem tính năng gợi ý" },
      { title: "Mỗi video một tab", body: "Mỗi video mở trong một tab riêng. Tác vụ vẫn chạy ngầm khi chuyển sang tab khác, xong sẽ có thông báo.", cta: "Xem cách làm nhiều tab" },
      { title: "Dùng cùng Claude & Codex", body: "Kết nối Claude hoặc Codex đang dùng để dịch phụ đề bằng chính gói đó. Translator không thu thêm phí.", cta: "Xem chế độ Agent" },
    ],
    pricingTitle: "Chưa dùng AI thì chưa mất phí. Sau đó, tùy bạn chọn.",
    pricing: [
      { value: "$0", body: "Cài đặt, tải video, chỉnh phụ đề, gắn phụ đề vào video và xuất file. Luôn miễn phí." },
      { value: "5 phút / tháng", body: "Mỗi tháng có sẵn 5 phút chép lời và dịch bằng AI, đủ cho một video ngắn. Lần đầu mở ứng dụng còn có quà chào mừng." },
      { value: "Từ $1", body: "Video dài hơn thì dùng bao nhiêu trả bấy nhiêu, không cần đăng ký gói. Cũng có thể dùng khóa API riêng, hoặc dịch miễn phí bằng Claude hay Codex sẵn có." },
    ],
    closingTitle: "Video từng xem không hiểu, giờ xem lại bằng tiếng Việt.",
    closingNote: "macOS 12+ · Windows 10+ · Đang xem trên điện thoại? Chúng tôi sẽ gửi link cho bạn.",
  },
};

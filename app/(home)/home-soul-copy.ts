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
    closingTitle: "Your next video is waiting to be understood.",
    closingNote: "macOS 12+ · Windows 10+ · On a phone? We’ll send you the link.",
  },
  ko: {
    heroTitleBefore: "모든 영상이 ",
    heroTitleHighlight: "당신의 언어",
    heroTitleAfter: "로 말하게.",
    heroSubtitle:
      "어떤 언어의 영상이든 링크를 붙여넣거나 파일을 끌어다 놓으세요. Translator가 듣고, 자막을 쓰고, 당신의 언어로 말하게 합니다. 더빙, 클립, 내보내기까지 이어서 할 수 있어요.",
    heroNote: "무료 설치 · 매달 AI 5분 무료 · 다운로드, 편집, 내보내기는 언제나 무료",
    momentsTitle: "세 순간이면 충분합니다.",
    moments: [
      { title: "어떤 영상이든 가져오기", body: "YouTube, TikTok, Instagram, X 링크를 붙여넣거나, 파일을 끌어다 놓거나, 볼 만한 영상을 Translator에게 찾아 달라고 하세요." },
      { title: "듣는 모습을 지켜보기", body: "말 한마디 한마디가 시간이 맞춰진 자막이 되고, 두 번째 검토가 맥락에 맞게 번역을 다듬어 이름, 말투, 타이밍을 지킵니다." },
      { title: "내 언어로 듣기", body: "자막과 함께 재생하고, 자막 입힌 영상이나 SRT로 내보내고, 자연스러운 목소리로 더빙하거나, 좋은 장면을 세로 클립으로 만드세요." },
    ],
    featuresTitle: "번역 다음 단계까지 모두.",
    featuresSubtitle: "Mac과 Windows용 데스크톱 앱 하나로",
    features: [
      { title: "영상 다운로더", body: "지원되는 사이트의 영상을 링크로, 원하는 화질로, 작업 공간에 바로 가져옵니다.", cta: "다운로더 보기" },
      { title: "검토까지 하는 AI 번역", body: "1차 번역 후, 두 번째 품질 검토가 각 줄을 맥락 속에서 다시 읽습니다.", cta: "AI 번역 보기" },
      { title: "자막 편집기", body: "편집을 켜고 영상을 보며 문장과 타이밍을 고치거나, 기존 SRT를 열어 보세요.", cta: "편집기 보기" },
      { title: "더빙", body: "새 언어의 자연스러운 목소리로 영상에 목소리를 입힙니다.", cta: "더빙 보기" },
      { title: "하이라이트 클립", body: "남길 만한 순간을 찾아 스마트 리프레이밍으로 세로 클립을 만듭니다.", cta: "클립 보기" },
      { title: "볼 영상 찾아주기", body: "보고 싶은 영상을 설명하면 자막 달기 좋은 YouTube 영상을 순서대로 추천합니다.", cta: "영상 탐색 보기" },
      { title: "영상마다 탭 하나", body: "영상마다 자기 탭에서 돌아가고, 작업은 백그라운드에서 계속되며 끝나면 알려 줍니다.", cta: "멀티탭 작업 보기" },
      { title: "Claude·Codex와 함께", body: "내 Claude나 Codex를 연결해 구독으로 자막을 번역하세요. Translator 요금은 없습니다.", cta: "에이전트 모드 보기" },
    ],
    pricingTitle: "AI를 쓰기 전까지는 무료. 그다음은 당신의 선택.",
    pricing: [
      { value: "$0", body: "설치, 영상 다운로드, 자막 편집, 자막 입히기, 내보내기는 언제나 무료입니다." },
      { value: "매달 5분", body: "매달 무료 AI 전사와 번역이 제공됩니다. 짧은 영상 하나에 충분하고, 처음 앱을 열면 환영 보너스도 있어요." },
      { value: "$1부터", body: "긴 영상은 쓴 만큼만 결제하세요. 구독은 없습니다. 내 API 키를 쓰거나, 내 Claude나 Codex로 무료 번역할 수도 있어요." },
    ],
    closingTitle: "다음 영상이 이해되기를 기다리고 있어요.",
    closingNote: "macOS 12 이상 · Windows 10 이상 · 휴대폰인가요? 링크를 보내 드릴게요.",
  },
  es: {
    heroTitleBefore: "Cada video puede hablar ",
    heroTitleHighlight: "tu idioma",
    heroTitleAfter: ".",
    heroSubtitle:
      "Pega un enlace o suelta un video en cualquier idioma. Translator lo escucha, escribe los subtítulos y lo hace hablar el tuyo; después puedes doblarlo, recortarlo o exportarlo.",
    heroNote: "Instalación gratis · 5 minutos de IA gratis cada mes · descargar, editar y exportar siempre gratis",
    momentsTitle: "Tres momentos. Esa es toda la idea.",
    moments: [
      { title: "Trae cualquier video", body: "Pega un enlace de YouTube, TikTok, Instagram o X, suelta un archivo o pide a Translator que encuentre algo que valga la pena ver." },
      { title: "Míralo escuchar", body: "Cada palabra se convierte en un subtítulo sincronizado y una segunda revisión comprueba la traducción en contexto: nombres, tono y tiempos intactos." },
      { title: "Escúchalo en tu idioma", body: "Reprodúcelo con subtítulos, exporta un video subtitulado o un SRT, dóblalo con voces naturales o convierte los mejores momentos en clips verticales." },
    ],
    featuresTitle: "Todo lo que viene después de la traducción.",
    featuresSubtitle: "Una sola app de escritorio para Mac y Windows",
    features: [
      { title: "Descargador de videos", body: "Trae videos de sitios compatibles con un enlace, en la calidad que quieras, directo al espacio de trabajo.", cta: "Ver el descargador" },
      { title: "Traducción con IA y revisión", body: "Una primera traducción y una segunda pasada de calidad que lee cada línea en contexto.", cta: "Ver la traducción con IA" },
      { title: "Editor de subtítulos", body: "Activa la edición para corregir texto y tiempos frente al video, o abre un SRT existente.", cta: "Ver el editor" },
      { title: "Doblaje", body: "Dale voz al video en el nuevo idioma con un habla natural.", cta: "Ver el doblaje" },
      { title: "Clips destacados", body: "Encuentra los momentos que valen la pena y crea clips verticales con reencuadre inteligente.", cta: "Ver los clips" },
      { title: "Encuentra videos por ti", body: "Describe lo que quieres ver y recibe recomendaciones de YouTube ordenadas para subtitular.", cta: "Ver el descubrimiento" },
      { title: "Una pestaña por video", body: "Cada video va en su propia pestaña; los trabajos siguen en segundo plano y te avisan al terminar.", cta: "Ver el flujo multipestaña" },
      { title: "Funciona con Claude y Codex", body: "Conecta tu propio Claude o Codex y traduce subtítulos con tu suscripción, sin cargo de Translator.", cta: "Ver el modo agente" },
    ],
    pricingTitle: "Gratis hasta que usas IA. Luego tú decides.",
    pricing: [
      { value: "$0", body: "Instalar, descargar videos, editar subtítulos, incrustarlos y exportar. Siempre gratis." },
      { value: "5 min / mes", body: "Transcripción y traducción con IA gratis cada mes, suficiente para un video corto. Y un bono de bienvenida al abrir la app por primera vez." },
      { value: "Desde $1", body: "Paga según uses para videos más largos, sin suscripción. O usa tus propias claves de API, o traduce gratis con tu Claude o Codex." },
    ],
    closingTitle: "Tu próximo video está esperando ser entendido.",
    closingNote: "macOS 12+ · Windows 10+ · ¿Estás en el móvil? Te enviamos el enlace.",
  },
  ja: {
    heroTitleBefore: "どんな動画も、",
    heroTitleHighlight: "あなたの言葉",
    heroTitleAfter: "で。",
    heroSubtitle:
      "どの言語の動画でも、リンクを貼るかファイルをドロップするだけ。Translator が聞き取り、字幕を書き、あなたの言葉で話させます。吹き替え、クリップ、書き出しもそのまま続けられます。",
    heroNote: "インストール無料 · 毎月 AI 5 分無料 · ダウンロード、編集、書き出しはいつでも無料",
    momentsTitle: "3つの瞬間。それがすべてです。",
    moments: [
      { title: "どんな動画でも", body: "YouTube、TikTok、Instagram、X のリンクを貼るか、ファイルをドロップするか、見たい動画を Translator に探してもらいましょう。" },
      { title: "聞き取る様子を見る", body: "話した言葉がタイミングの合った字幕になり、2回目のチェックが文脈に合わせて翻訳を確かめます。名前、口調、タイミングはそのまま。" },
      { title: "あなたの言葉で聞く", body: "字幕付きで再生し、字幕入り動画や SRT を書き出し、自然な声で吹き替え、名場面を縦型クリップにできます。" },
    ],
    featuresTitle: "翻訳のその先まで、すべて。",
    featuresSubtitle: "Mac と Windows のデスクトップアプリひとつで",
    features: [
      { title: "動画ダウンローダー", body: "対応サイトの動画をリンクから、好きな画質で、そのまま作業スペースへ。", cta: "ダウンローダーを見る" },
      { title: "チェック付き AI 翻訳", body: "最初の翻訳に加えて、2回目の品質チェックが各行を文脈の中で読み直します。", cta: "AI 翻訳を見る" },
      { title: "字幕エディター", body: "編集をオンにして動画を見ながら文言とタイミングを直すか、既存の SRT を開きます。", cta: "エディターを見る" },
      { title: "吹き替え", body: "新しい言語の自然な声で、動画に声を与えます。", cta: "吹き替えを見る" },
      { title: "ハイライトクリップ", body: "残したい瞬間を見つけ、スマートリフレーミングで縦型クリップを作ります。", cta: "クリップを見る" },
      { title: "見たい動画を探す", body: "見たいものを伝えると、字幕を付けたい YouTube 動画を順位付きで提案します。", cta: "動画探索を見る" },
      { title: "動画ごとにタブ", body: "動画ごとに専用のタブで動き、処理はバックグラウンドで続き、終わると知らせます。", cta: "マルチタブを見る" },
      { title: "Claude・Codex と連携", body: "自分の Claude や Codex をつなげば、サブスクリプションで字幕を翻訳できます。Translator の料金はかかりません。", cta: "エージェントモードを見る" },
    ],
    pricingTitle: "AI を使うまでは無料。その先は自由に。",
    pricing: [
      { value: "$0", body: "インストール、動画のダウンロード、字幕の編集、焼き込み、書き出しはいつでも無料。" },
      { value: "毎月 5 分", body: "毎月、AI 文字起こしと翻訳が無料。短い動画ひとつ分です。初めてアプリを開くとウェルカムボーナスもあります。" },
      { value: "$1 から", body: "長い動画は使った分だけ。サブスクリプションはありません。自分の API キーを使うことも、自分の Claude や Codex で無料翻訳することもできます。" },
    ],
    closingTitle: "次の動画が、理解されるのを待っています。",
    closingNote: "macOS 12 以降 · Windows 10 以降 · スマートフォンですか？リンクをお送りします。",
  },
  zh: {
    heroTitleBefore: "让每个视频都说",
    heroTitleHighlight: "你的语言",
    heroTitleAfter: "。",
    heroSubtitle:
      "粘贴链接或拖入任何语言的视频。Translator 会聆听、写出字幕，让它说你的语言，之后还能配音、剪辑或导出。",
    heroNote: "免费安装 · 每月 5 分钟免费 AI · 下载、编辑和导出永远免费",
    momentsTitle: "三个瞬间，就是全部。",
    moments: [
      { title: "带来任何视频", body: "粘贴 YouTube、TikTok、Instagram 或 X 的链接，拖入文件，或者让 Translator 帮你找值得看的视频。" },
      { title: "看着它聆听", body: "每一句话都会变成对准时间的字幕，再由第二轮检查按上下文核对译文，名字、语气和时间轴都保持准确。" },
      { title: "用你的语言来听", body: "带字幕播放，导出带字幕的视频或 SRT，用自然的声音配音，或把精彩片段剪成竖屏短片。" },
    ],
    featuresTitle: "翻译之后的一切，也都在这里。",
    featuresSubtitle: "一个适用于 Mac 和 Windows 的桌面应用",
    features: [
      { title: "视频下载器", body: "通过链接从支持的网站获取视频，选择想要的画质，直接放进工作区。", cta: "查看下载器" },
      { title: "带审校的 AI 翻译", body: "先完成初译，再由第二轮质量检查在上下文中逐行审读。", cta: "查看 AI 翻译" },
      { title: "字幕编辑器", body: "打开编辑，对照视频修改文字和时间轴，或者打开已有的 SRT。", cta: "查看编辑器" },
      { title: "配音", body: "用新语言的自然语音为视频配音。", cta: "查看配音" },
      { title: "精彩片段", body: "找出值得保留的时刻，用智能重新构图生成竖屏短片。", cta: "查看片段" },
      { title: "帮你找视频", body: "描述你想看的内容，获得适合加字幕的 YouTube 推荐排序。", cta: "查看视频发现" },
      { title: "每个视频一个标签页", body: "每个视频都在自己的标签页里运行，任务在后台继续，完成后会提醒你。", cta: "查看多标签工作流" },
      { title: "支持 Claude 和 Codex", body: "连接你自己的 Claude 或 Codex，用你的订阅翻译字幕，Translator 不收费。", cta: "查看智能体模式" },
    ],
    pricingTitle: "用 AI 之前全部免费，之后由你决定。",
    pricing: [
      { value: "$0", body: "安装、下载视频、编辑字幕、压制字幕和导出，永远免费。" },
      { value: "每月 5 分钟", body: "每月免费的 AI 转写和翻译，够一个短视频使用。第一次打开应用还有欢迎奖励。" },
      { value: "$1 起", body: "较长的视频按需付费，无需订阅。也可以使用你自己的 API 密钥，或用自己的 Claude 或 Codex 免费翻译。" },
    ],
    closingTitle: "你的下一个视频，正等着被理解。",
    closingNote: "macOS 12+ · Windows 10+ · 在用手机？我们把链接发给你。",
  },
  fr: {
    heroTitleBefore: "Chaque vidéo peut parler ",
    heroTitleHighlight: "votre langue",
    heroTitleAfter: ".",
    heroSubtitle:
      "Collez un lien ou déposez une vidéo dans n’importe quelle langue. Translator l’écoute, écrit les sous-titres et la fait parler la vôtre — puis vous pouvez la doubler, la découper ou l’exporter.",
    heroNote: "Installation gratuite · 5 minutes d’IA offertes chaque mois · téléchargement, édition et export toujours gratuits",
    momentsTitle: "Trois moments. Voilà toute l’idée.",
    moments: [
      { title: "Apportez n’importe quelle vidéo", body: "Collez un lien YouTube, TikTok, Instagram ou X, déposez un fichier, ou demandez à Translator de trouver quelque chose qui vaut le coup." },
      { title: "Regardez-la écouter", body: "Chaque mot prononcé devient un sous-titre synchronisé, puis une seconde passe vérifie la traduction dans son contexte : noms, ton et timing restent justes." },
      { title: "Entendez-la dans votre langue", body: "Lisez-la avec sous-titres, exportez une vidéo sous-titrée ou un SRT, doublez-la avec des voix naturelles ou faites des meilleurs moments des clips verticaux." },
    ],
    featuresTitle: "Et tout ce qui vient après la traduction.",
    featuresSubtitle: "Une seule application de bureau pour Mac et Windows",
    features: [
      { title: "Téléchargeur de vidéos", body: "Importez des vidéos des sites pris en charge par simple lien, dans la qualité voulue, directement dans l’espace de travail.", cta: "Voir le téléchargeur" },
      { title: "Traduction IA avec relecture", body: "Une première traduction, puis une seconde passe qualité qui relit chaque ligne dans son contexte.", cta: "Voir la traduction IA" },
      { title: "Éditeur de sous-titres", body: "Activez l’édition pour corriger le texte et le timing face à la vidéo, ou ouvrez un SRT existant.", cta: "Voir l’éditeur" },
      { title: "Doublage", body: "Donnez une voix à la vidéo dans la nouvelle langue, avec une diction naturelle.", cta: "Voir le doublage" },
      { title: "Clips des temps forts", body: "Repérez les moments à garder et créez des clips verticaux avec recadrage intelligent.", cta: "Voir les clips" },
      { title: "Des vidéos trouvées pour vous", body: "Décrivez ce que vous voulez regarder et recevez une sélection YouTube classée à sous-titrer.", cta: "Voir la découverte" },
      { title: "Un onglet par vidéo", body: "Chaque vidéo a son onglet ; les tâches continuent en arrière-plan et vous préviennent quand elles finissent.", cta: "Voir le flux multi-onglets" },
      { title: "Compatible Claude et Codex", body: "Connectez votre propre Claude ou Codex et traduisez les sous-titres avec votre abonnement, sans frais Translator.", cta: "Voir le mode agent" },
    ],
    pricingTitle: "Gratuit tant que l’IA ne tourne pas. Ensuite, à vous de choisir.",
    pricing: [
      { value: "0 $", body: "Installer, télécharger des vidéos, éditer les sous-titres, les incruster et exporter. Toujours gratuit." },
      { value: "5 min / mois", body: "Transcription et traduction IA offertes chaque mois, assez pour une courte vidéo. Plus un bonus de bienvenue à la première ouverture." },
      { value: "Dès 1 $", body: "Payez à l’usage pour les vidéos plus longues, sans abonnement. Ou utilisez vos propres clés API, ou traduisez gratuitement avec votre Claude ou Codex." },
    ],
    closingTitle: "Votre prochaine vidéo n’attend qu’à être comprise.",
    closingNote: "macOS 12+ · Windows 10+ · Sur un téléphone ? On vous envoie le lien.",
  },
  de: {
    heroTitleBefore: "Jedes Video kann ",
    heroTitleHighlight: "deine Sprache",
    heroTitleAfter: " sprechen.",
    heroSubtitle:
      "Füge einen Link ein oder zieh ein Video in beliebiger Sprache hinein. Translator hört zu, schreibt die Untertitel und lässt es deine Sprache sprechen – danach kannst du es vertonen, schneiden oder exportieren.",
    heroNote: "Kostenlos installieren · jeden Monat 5 Minuten KI gratis · Download, Bearbeiten und Export immer kostenlos",
    momentsTitle: "Drei Momente. Das ist die ganze Idee.",
    moments: [
      { title: "Bring ein beliebiges Video mit", body: "Füge einen Link von YouTube, TikTok, Instagram oder X ein, zieh eine Datei hinein oder lass Translator etwas Sehenswertes finden." },
      { title: "Sieh zu, wie es zuhört", body: "Jedes gesprochene Wort wird zu einem getimten Untertitel, dann prüft ein zweiter Durchgang die Übersetzung im Kontext – Namen, Ton und Timing bleiben stimmig." },
      { title: "Hör es in deiner Sprache", body: "Spiel es mit Untertiteln ab, exportiere ein untertiteltes Video oder SRT, vertone es mit natürlichen Stimmen oder schneide die besten Momente zu Hochformat-Clips." },
    ],
    featuresTitle: "Alles, was nach der Übersetzung kommt.",
    featuresSubtitle: "Eine Desktop-App für Mac und Windows",
    features: [
      { title: "Video-Downloader", body: "Hol Videos von unterstützten Seiten per Link, in der gewünschten Qualität, direkt in den Arbeitsbereich.", cta: "Zum Downloader" },
      { title: "KI-Übersetzung mit Prüfung", body: "Eine erste Übersetzung plus ein zweiter Qualitätsdurchgang, der jede Zeile im Kontext liest.", cta: "Zur KI-Übersetzung" },
      { title: "Untertitel-Editor", body: "Schalte die Bearbeitung ein, um Text und Timing am Video zu korrigieren, oder öffne eine vorhandene SRT.", cta: "Zum Editor" },
      { title: "Vertonung", body: "Gib dem Video in der neuen Sprache eine natürlich klingende Stimme.", cta: "Zur Vertonung" },
      { title: "Highlight-Clips", body: "Finde die Momente, die sich lohnen, und erstelle Hochformat-Clips mit smartem Reframing.", cta: "Zu den Clips" },
      { title: "Videos für dich finden", body: "Beschreib, was du sehen willst, und erhalte sortierte YouTube-Vorschläge zum Untertiteln.", cta: "Zur Video-Entdeckung" },
      { title: "Ein Tab pro Video", body: "Jedes Video läuft in seinem eigenen Tab; Aufgaben laufen im Hintergrund weiter und melden sich, wenn sie fertig sind.", cta: "Zum Multitab-Workflow" },
      { title: "Funktioniert mit Claude & Codex", body: "Verbinde dein eigenes Claude oder Codex und übersetze Untertitel mit deinem Abo – ohne Kosten bei Translator.", cta: "Zum Agentenmodus" },
    ],
    pricingTitle: "Kostenlos, bis KI läuft. Dann entscheidest du.",
    pricing: [
      { value: "0 $", body: "Installieren, Videos herunterladen, Untertitel bearbeiten, einbrennen und exportieren. Immer kostenlos." },
      { value: "5 Min. / Monat", body: "Jeden Monat kostenlose KI-Transkription und -Übersetzung, genug für ein kurzes Video. Dazu ein Willkommensbonus beim ersten Öffnen." },
      { value: "Ab 1 $", body: "Für längere Videos zahlst du nur, was du nutzt – ohne Abo. Oder nutze eigene API-Schlüssel oder übersetze kostenlos mit deinem Claude oder Codex." },
    ],
    closingTitle: "Dein nächstes Video wartet darauf, verstanden zu werden.",
    closingNote: "macOS 12+ · Windows 10+ · Am Handy? Wir schicken dir den Link.",
  },
  pt: {
    heroTitleBefore: "Todo vídeo pode falar ",
    heroTitleHighlight: "o seu idioma",
    heroTitleAfter: ".",
    heroSubtitle:
      "Cole um link ou solte um vídeo em qualquer idioma. O Translator escuta, escreve as legendas e faz o vídeo falar o seu — depois você pode dublar, cortar ou exportar.",
    heroNote: "Instalação grátis · 5 minutos de IA grátis todo mês · baixar, editar e exportar sempre grátis",
    momentsTitle: "Três momentos. Essa é a ideia toda.",
    moments: [
      { title: "Traga qualquer vídeo", body: "Cole um link do YouTube, TikTok, Instagram ou X, solte um arquivo ou peça ao Translator para encontrar algo que valha a pena assistir." },
      { title: "Veja ele escutar", body: "Cada palavra falada vira uma legenda sincronizada e uma segunda revisão confere a tradução no contexto — nomes, tom e tempo continuam certos." },
      { title: "Ouça no seu idioma", body: "Assista com legendas, exporte um vídeo legendado ou SRT, duble com vozes naturais ou transforme os melhores momentos em clipes verticais." },
    ],
    featuresTitle: "Tudo o que vem depois da tradução também.",
    featuresSubtitle: "Um único app para Mac e Windows",
    features: [
      { title: "Baixador de vídeos", body: "Traga vídeos de sites compatíveis por link, na qualidade que quiser, direto para o espaço de trabalho.", cta: "Ver o baixador" },
      { title: "Tradução com IA e revisão", body: "Uma primeira tradução e uma segunda passada de qualidade que lê cada linha no contexto.", cta: "Ver a tradução com IA" },
      { title: "Editor de legendas", body: "Ative a edição para corrigir texto e tempo vendo o vídeo, ou abra um SRT existente.", cta: "Ver o editor" },
      { title: "Dublagem", body: "Dê voz ao vídeo no novo idioma com uma fala natural.", cta: "Ver a dublagem" },
      { title: "Clipes de destaque", body: "Encontre os momentos que valem a pena e gere clipes verticais com reenquadramento inteligente.", cta: "Ver os clipes" },
      { title: "Encontre vídeos para você", body: "Descreva o que quer assistir e receba sugestões do YouTube ordenadas para legendar.", cta: "Ver a descoberta" },
      { title: "Uma aba por vídeo", body: "Cada vídeo roda na própria aba; as tarefas seguem em segundo plano e avisam quando terminam.", cta: "Ver o fluxo com abas" },
      { title: "Funciona com Claude e Codex", body: "Conecte seu próprio Claude ou Codex e traduza legendas com sua assinatura, sem cobrança do Translator.", cta: "Ver o modo agente" },
    ],
    pricingTitle: "Grátis até a IA entrar em ação. Depois, você escolhe.",
    pricing: [
      { value: "US$0", body: "Instalar, baixar vídeos, editar legendas, gravá-las no vídeo e exportar. Sempre grátis." },
      { value: "5 min / mês", body: "Transcrição e tradução com IA grátis todo mês, o bastante para um vídeo curto. E um bônus de boas-vindas ao abrir o app pela primeira vez." },
      { value: "A partir de US$1", body: "Pague pelo uso em vídeos mais longos, sem assinatura. Ou use suas próprias chaves de API, ou traduza grátis com seu Claude ou Codex." },
    ],
    closingTitle: "Seu próximo vídeo está esperando para ser entendido.",
    closingNote: "macOS 12+ · Windows 10+ · No celular? A gente envia o link.",
  },
  vi: {
    heroTitleBefore: "Mọi video đều có thể nói ",
    heroTitleHighlight: "ngôn ngữ của bạn",
    heroTitleAfter: ".",
    heroSubtitle:
      "Dán liên kết hoặc thả vào một video bằng bất kỳ ngôn ngữ nào. Translator lắng nghe, viết phụ đề và khiến video nói ngôn ngữ của bạn — rồi bạn có thể lồng tiếng, cắt clip hoặc xuất ra.",
    heroNote: "Cài đặt miễn phí · 5 phút AI miễn phí mỗi tháng · tải xuống, chỉnh sửa và xuất luôn miễn phí",
    momentsTitle: "Ba khoảnh khắc. Đó là toàn bộ ý tưởng.",
    moments: [
      { title: "Mang đến bất kỳ video nào", body: "Dán liên kết YouTube, TikTok, Instagram hoặc X, thả vào một tệp, hoặc nhờ Translator tìm video đáng xem." },
      { title: "Xem nó lắng nghe", body: "Mỗi lời nói trở thành phụ đề khớp thời gian, rồi lượt kiểm tra thứ hai đối chiếu bản dịch với ngữ cảnh — tên riêng, giọng điệu và thời gian đều chuẩn." },
      { title: "Nghe bằng ngôn ngữ của bạn", body: "Phát kèm phụ đề, xuất video có phụ đề hoặc SRT, lồng tiếng bằng giọng tự nhiên, hoặc cắt những khoảnh khắc hay nhất thành clip dọc." },
    ],
    featuresTitle: "Cả mọi thứ sau bản dịch nữa.",
    featuresSubtitle: "Một ứng dụng máy tính cho Mac và Windows",
    features: [
      { title: "Trình tải video", body: "Đưa video từ các trang được hỗ trợ vào không gian làm việc chỉ bằng liên kết, với chất lượng bạn muốn.", cta: "Xem trình tải" },
      { title: "Dịch AI có kiểm duyệt", body: "Một bản dịch đầu tiên cùng lượt kiểm tra chất lượng thứ hai đọc từng dòng trong ngữ cảnh.", cta: "Xem dịch AI" },
      { title: "Trình chỉnh sửa phụ đề", body: "Bật chỉnh sửa để sửa câu chữ và thời gian theo video, hoặc mở một tệp SRT có sẵn.", cta: "Xem trình chỉnh sửa" },
      { title: "Lồng tiếng", body: "Cho video một giọng nói tự nhiên bằng ngôn ngữ mới.", cta: "Xem lồng tiếng" },
      { title: "Clip nổi bật", body: "Tìm những khoảnh khắc đáng giữ và tạo clip dọc với tính năng tự căn khung thông minh.", cta: "Xem clip" },
      { title: "Tìm video giúp bạn", body: "Mô tả điều bạn muốn xem và nhận gợi ý YouTube được xếp hạng để làm phụ đề.", cta: "Xem khám phá video" },
      { title: "Mỗi video một thẻ", body: "Mỗi video chạy trong thẻ riêng; tác vụ tiếp tục chạy nền và báo cho bạn khi xong.", cta: "Xem quy trình nhiều thẻ" },
      { title: "Dùng được với Claude & Codex", body: "Kết nối Claude hoặc Codex của bạn và dịch phụ đề bằng gói đăng ký của bạn — Translator không tính phí.", cta: "Xem chế độ tác tử" },
    ],
    pricingTitle: "Miễn phí cho đến khi dùng AI. Sau đó bạn chọn.",
    pricing: [
      { value: "$0", body: "Cài đặt, tải video, chỉnh sửa phụ đề, gắn phụ đề vào video và xuất. Luôn miễn phí." },
      { value: "5 phút / tháng", body: "Chép lời và dịch bằng AI miễn phí mỗi tháng, đủ cho một video ngắn. Thêm phần thưởng chào mừng khi bạn mở ứng dụng lần đầu." },
      { value: "Từ $1", body: "Trả theo mức dùng cho video dài hơn, không cần đăng ký gói. Hoặc dùng khóa API của riêng bạn, hay dịch miễn phí bằng Claude hoặc Codex của bạn." },
    ],
    closingTitle: "Video tiếp theo của bạn đang chờ được hiểu.",
    closingNote: "macOS 12+ · Windows 10+ · Đang dùng điện thoại? Chúng tôi sẽ gửi liên kết cho bạn.",
  },
};

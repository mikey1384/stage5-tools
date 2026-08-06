import type { Locale } from "../../lib/locales";

type ExperienceCopy = {
  heroAlt: string;
  heroCaption: string;
  displayEyebrow: string;
  displayTitle: string;
  displayDescription: string;
  displayModes: readonly { label: string; body: string }[];
  stylesEyebrow: string;
  stylesTitle: string;
  stylesDescription: string;
  classicCaption: string;
  dualCaption: string;
  libraryEyebrow: string;
  libraryTitle: string;
  libraryDescription: string;
  libraryCaption: string;
  agentEyebrow: string;
  agentTitle: string;
  agentDescription: string;
  agentPoints: readonly string[];
  agentCta: string;
};

export const homeExperienceCopy: Record<Locale, ExperienceCopy> = {
  en: {
    heroAlt: "Translator showing one Korean translated subtitle over a video",
    heroCaption:
      "Show only the translation when you want a clean viewing experience. Original-only and dual-subtitle views are one click away.",
    displayEyebrow: "You choose what appears",
    displayTitle: "Original, translation, or both.",
    displayDescription:
      "Translator does not force two subtitle tracks onto the screen. Switch the current video between the source transcript, the translation, or both together.",
    displayModes: [
      {
        label: "Original only",
        body: "Follow the source transcript by itself.",
      },
      {
        label: "Translation only",
        body: "Watch with one clean translated subtitle.",
      },
      {
        label: "Both",
        body: "Compare the original and translation line by line.",
      },
    ],
    stylesEyebrow: "Subtitles that fit the video",
    stylesTitle: "Pick the view and the style.",
    stylesDescription:
      "Choose Default, Classic, Boxed, or LineBox, adjust the text size, and use the result while watching or in the video you export.",
    classicCaption: "Original-only view with the Classic subtitle style.",
    dualCaption: "Original and translation together with the LineBox style.",
    libraryEyebrow: "Your video library",
    libraryTitle: "Downloads stay useful after the first watch.",
    libraryDescription:
      "Downloaded videos remain in the app as a visual history. Rewatch a favorite, reopen it for subtitle work, or continue where you left off.",
    libraryCaption:
      "A real Downloads view with saved videos, source details, dates, and local-file status.",
    agentEyebrow: "Developer preview",
    agentTitle: "Your LLM agent can control Translator.",
    agentDescription:
      "Connect the local MCP interface in the open-source developer build. Through named tools, an agent can search and download videos, reopen the Downloads library, load video and SRT files, switch subtitle views and styles, translate, review, and export SRT files, manage masked Settings, and navigate the app for you.",
    agentPoints: [
      "The finished app downloads normally; MCP control is currently a source-build developer preview",
      "Video search may use Stage5 credits or a BYO provider; downloads, library access, and status checks do not call the recommendation model",
      "An agent can open checkout, but only the user enters and submits payment; stored provider-key values are never returned",
    ],
    agentCta: "See the full agent guide",
  },
  ko: {
    heroAlt: "영상 위에 한국어 번역 자막 한 줄만 표시한 Translator",
    heroCaption:
      "영상에 집중하고 싶을 때는 번역 자막만 깔끔하게 볼 수 있습니다. 원문만 보기와 원문·번역 함께 보기도 한 번에 바꿀 수 있습니다.",
    displayEyebrow: "화면에 보일 자막을 직접 선택",
    displayTitle: "원문만, 번역만, 또는 둘 다.",
    displayDescription:
      "Translator는 두 줄 자막을 억지로 띄우지 않습니다. 영상마다 원문 자막만, 번역 자막만, 또는 두 자막을 함께 표시할 수 있습니다.",
    displayModes: [
      { label: "원문만", body: "원문 대사만 보며 내용을 확인합니다." },
      { label: "번역만", body: "번역 자막 한 줄로 영상에 집중합니다." },
      { label: "둘 다", body: "원문과 번역을 줄마다 비교합니다." },
    ],
    stylesEyebrow: "영상에 어울리는 자막",
    stylesTitle: "표시 방식과 스타일을 골라 쓰세요.",
    stylesDescription:
      "Default, Classic, Boxed, LineBox 스타일과 글자 크기를 선택한 뒤, 그대로 감상하거나 영상에 입혀 저장할 수 있습니다.",
    classicCaption: "원문 자막만 Classic 스타일로 표시한 화면입니다.",
    dualCaption: "원문과 번역 자막을 LineBox 스타일로 함께 표시한 화면입니다.",
    libraryEyebrow: "나만의 영상 보관함",
    libraryTitle: "다운로드한 영상은 한 번 보고 사라지지 않습니다.",
    libraryDescription:
      "다운로드한 영상은 앱 안의 보관함에 남습니다. 마음에 든 영상을 다시 보고, 자막 작업을 다시 열거나, 하던 작업을 이어갈 수 있습니다.",
    libraryCaption:
      "저장한 영상, 출처, 다운로드 날짜, 로컬 파일 상태를 한눈에 보여 주는 실제 보관함 화면입니다.",
    agentEyebrow: "개발자 프리뷰",
    agentTitle: "LLM 에이전트가 Translator를 직접 조작할 수 있습니다.",
    agentDescription:
      "오픈소스 개발 버전의 로컬 MCP를 연결하면 에이전트가 영상을 검색·다운로드하고 보관함에서 다시 열 수 있습니다. 영상과 SRT를 불러오고, 자막 표시 방식과 스타일을 바꾸며, SRT 번역·검수·내보내기, 안전하게 가려진 설정 관리, 앱 화면 이동까지 이름이 정해진 도구로 수행합니다.",
    agentPoints: [
      "완성된 앱은 그대로 다운로드할 수 있으며, MCP 제어는 현재 소스 빌드용 개발자 프리뷰입니다",
      "영상 검색에는 Stage5 크레딧 또는 BYO 제공업체가 쓰일 수 있지만 다운로드·보관함·상태 확인 자체에는 추천 모델 비용이 들지 않습니다",
      "에이전트는 결제 페이지만 열 수 있습니다. 카드 입력과 결제 확정은 사용자가 직접 하며 저장된 API 키 값은 노출되지 않습니다",
    ],
    agentCta: "에이전트 기능 전체 보기",
  },
  es: {
    heroAlt:
      "Translator mostrando solo un subtítulo traducido al coreano sobre un vídeo",
    heroCaption:
      "Muestra solo la traducción cuando quieras ver el vídeo sin distracciones. También puedes cambiar al original o a ambos subtítulos con un clic.",
    displayEyebrow: "Tú decides qué se ve",
    displayTitle: "Original, traducción o ambos.",
    displayDescription:
      "Translator no te obliga a mostrar dos pistas. En cada vídeo puedes ver solo el texto original, solo la traducción o comparar ambos.",
    displayModes: [
      {
        label: "Solo original",
        body: "Sigue únicamente la transcripción original.",
      },
      {
        label: "Solo traducción",
        body: "Mira el vídeo con una sola línea traducida.",
      },
      {
        label: "Ambos",
        body: "Compara el original y la traducción línea por línea.",
      },
    ],
    stylesEyebrow: "Subtítulos que encajan",
    stylesTitle: "Elige la vista y el estilo.",
    stylesDescription:
      "Escoge Default, Classic, Boxed o LineBox, ajusta el tamaño y usa el resultado al mirar o exportar el vídeo.",
    classicCaption: "Vista solo del original con el estilo Classic.",
    dualCaption: "Original y traducción juntos con el estilo LineBox.",
    libraryEyebrow: "Tu videoteca",
    libraryTitle: "Tus descargas siguen siendo útiles después de verlas.",
    libraryDescription:
      "Los vídeos descargados quedan en un historial visual. Vuelve a verlos, ábrelos para trabajar los subtítulos o continúa donde lo dejaste.",
    libraryCaption:
      "La vista real de Descargas con vídeos, fuentes, fechas y estado del archivo local.",
    agentEyebrow: "Vista previa para desarrolladores",
    agentTitle: "Tu agente LLM puede controlar Translator.",
    agentDescription:
      "Conecta la interfaz MCP local de la versión de desarrollo. Mediante herramientas con nombres claros, un agente puede buscar y descargar vídeos, reabrir la biblioteca de Descargas, cargar vídeos y archivos SRT, cambiar la vista y el estilo de los subtítulos, traducir, revisar y exportar SRT, gestionar ajustes ocultando los secretos y navegar por la aplicación.",
    agentPoints: [
      "La aplicación terminada se descarga de forma normal; el control MCP es por ahora una vista previa para compilaciones desde el código fuente",
      "La búsqueda puede usar créditos Stage5 o un proveedor propio; descargar, consultar la biblioteca y ver el estado no llama al modelo de recomendaciones",
      "El agente puede abrir el pago, pero solo el usuario introduce y confirma la tarjeta; las claves guardadas nunca se muestran",
    ],
    agentCta: "Ver la guía completa para agentes",
  },
  ja: {
    heroAlt: "動画に韓国語の翻訳字幕だけを表示したTranslator",
    heroCaption:
      "映像に集中したいときは、翻訳字幕だけをすっきり表示できます。原文のみ、原文と翻訳の同時表示にもすぐ切り替えられます。",
    displayEyebrow: "表示する字幕を選べる",
    displayTitle: "原文だけ、翻訳だけ、または両方。",
    displayDescription:
      "Translatorは二段字幕を強制しません。動画ごとに原文、翻訳、または両方を表示できます。",
    displayModes: [
      { label: "原文のみ", body: "元の発話だけを字幕で確認します。" },
      { label: "翻訳のみ", body: "翻訳字幕一段で映像に集中できます。" },
      { label: "両方", body: "原文と翻訳を一行ずつ比べられます。" },
    ],
    stylesEyebrow: "映像に合う字幕",
    stylesTitle: "表示方法もスタイルも選べます。",
    stylesDescription:
      "Default、Classic、Boxed、LineBoxから選び、文字サイズを調整して、視聴時にも書き出す動画にも使えます。",
    classicCaption: "原文字幕だけをClassicスタイルで表示した画面。",
    dualCaption: "原文と翻訳をLineBoxスタイルで同時表示した画面。",
    libraryEyebrow: "自分の動画ライブラリ",
    libraryTitle: "ダウンロードした動画は、見終わった後も残ります。",
    libraryDescription:
      "ダウンロードした動画は履歴としてアプリに残ります。お気に入りをもう一度見たり、字幕作業を再開したりできます。",
    libraryCaption:
      "保存した動画、配信元、日付、ローカルファイルの状態が分かる実際のダウンロード画面。",
    agentEyebrow: "開発者プレビュー",
    agentTitle: "LLMエージェントからTranslatorを操作できます。",
    agentDescription:
      "オープンソースの開発版でローカルMCPを接続すると、エージェントが動画の検索・ダウンロード、ダウンロード履歴からの再表示、動画とSRTの読み込み、字幕表示とスタイルの切り替え、SRTの翻訳・校正・書き出し、機密情報を隠した設定管理、画面移動まで名前付きツールで実行できます。",
    agentPoints: [
      "完成版アプリは通常どおりダウンロードできます。MCP操作は現在、ソースビルド向けの開発者プレビューです",
      "動画検索にはStage5クレジットまたはBYOプロバイダーを使う場合がありますが、ダウンロード・履歴・状態確認だけでは推薦モデルを呼びません",
      "エージェントは決済画面を開けますが、カード入力と確定はユーザーだけが行います。保存済みキーの値は返しません",
    ],
    agentCta: "エージェント向けガイドをすべて見る",
  },
  zh: {
    heroAlt: "Translator 在视频上只显示一行韩语翻译字幕",
    heroCaption:
      "想专心看视频时，可以只显示翻译字幕；也可以一键切换到只看原文或原文与译文同时显示。",
    displayEyebrow: "由你决定显示什么",
    displayTitle: "只看原文、只看译文，或两者都看。",
    displayDescription:
      "Translator 不会强制显示双语字幕。每个视频都可以在原文、译文和双语对照之间切换。",
    displayModes: [
      { label: "只看原文", body: "单独查看原始转录字幕。" },
      { label: "只看译文", body: "用一行翻译字幕专心观看。" },
      { label: "双语对照", body: "逐行比较原文和译文。" },
    ],
    stylesEyebrow: "适合视频的字幕",
    stylesTitle: "显示方式和样式都可以选择。",
    stylesDescription:
      "可选 Default、Classic、Boxed 或 LineBox，调整字号，并将效果用于观看或导出的视频。",
    classicCaption: "只显示原文，并使用 Classic 样式。",
    dualCaption: "用 LineBox 样式同时显示原文和译文。",
    libraryEyebrow: "你的视频库",
    libraryTitle: "下载的视频看完后仍然有用。",
    libraryDescription:
      "下载内容会以可视化历史保留在应用中。可以重看喜欢的视频、重新打开字幕项目，或接着上次的进度继续。",
    libraryCaption: "真实的下载页，显示已保存视频、来源、日期和本地文件状态。",
    agentEyebrow: "开发者预览",
    agentTitle: "LLM 智能体可以直接控制 Translator。",
    agentDescription:
      "在开源开发版中连接本地 MCP 后，智能体可通过名称明确的工具搜索和下载视频、重新打开下载库中的内容、载入视频与 SRT、切换字幕显示和样式、翻译、校对并导出 SRT、安全管理已隐藏敏感信息的设置，以及在应用内导航。",
    agentPoints: [
      "正式版应用仍可直接下载；MCP 控制目前是面向源码构建的开发者预览",
      "视频搜索可能使用 Stage5 点数或自带供应商；下载、查看资料库和状态检查本身不会调用推荐模型",
      "智能体只能打开结账页，银行卡输入和付款确认必须由用户完成；已保存的密钥内容绝不会返回",
    ],
    agentCta: "查看完整智能体指南",
  },
  fr: {
    heroAlt:
      "Translator affichant uniquement un sous-titre traduit en coréen sur une vidéo",
    heroCaption:
      "Affichez seulement la traduction pour regarder sans distraction. Le texte original et la vue bilingue restent accessibles en un clic.",
    displayEyebrow: "Vous choisissez l’affichage",
    displayTitle: "Original, traduction ou les deux.",
    displayDescription:
      "Translator n’impose pas deux pistes à l’écran. Pour chaque vidéo, affichez le texte original, la traduction ou les deux ensemble.",
    displayModes: [
      {
        label: "Original seulement",
        body: "Suivez uniquement la transcription source.",
      },
      {
        label: "Traduction seulement",
        body: "Regardez avec une seule ligne traduite.",
      },
      {
        label: "Les deux",
        body: "Comparez l’original et la traduction ligne par ligne.",
      },
    ],
    stylesEyebrow: "Des sous-titres adaptés à la vidéo",
    stylesTitle: "Choisissez l’affichage et le style.",
    stylesDescription:
      "Sélectionnez Default, Classic, Boxed ou LineBox, réglez la taille et gardez ce rendu pour le visionnage ou l’export.",
    classicCaption: "L’original seul avec le style Classic.",
    dualCaption: "L’original et la traduction avec le style LineBox.",
    libraryEyebrow: "Votre vidéothèque",
    libraryTitle:
      "Vos téléchargements restent utiles après le premier visionnage.",
    libraryDescription:
      "Les vidéos téléchargées restent dans un historique visuel. Regardez-les de nouveau, rouvrez un projet de sous-titres ou reprenez là où vous en étiez.",
    libraryCaption:
      "La véritable vue Téléchargements avec vidéos, sources, dates et état du fichier local.",
    agentEyebrow: "Aperçu développeur",
    agentTitle: "Votre agent LLM peut piloter Translator.",
    agentDescription:
      "Connectez l’interface MCP locale de la version de développement. Avec des outils clairement nommés, un agent peut rechercher et télécharger des vidéos, rouvrir la bibliothèque Téléchargements, charger des vidéos et des fichiers SRT, changer l’affichage et le style des sous-titres, traduire, relire et exporter des SRT, gérer les réglages sans révéler les secrets et naviguer dans l’application.",
    agentPoints: [
      "L’application terminée reste téléchargeable normalement ; le contrôle MCP est pour l’instant un aperçu réservé aux builds depuis le code source",
      "La recherche peut utiliser des crédits Stage5 ou un fournisseur BYO ; le téléchargement, la bibliothèque et l’état n’appellent pas le modèle de recommandation",
      "L’agent peut ouvrir le paiement, mais seul l’utilisateur saisit et confirme sa carte ; les clés enregistrées ne sont jamais renvoyées",
    ],
    agentCta: "Voir le guide complet pour les agents",
  },
  de: {
    heroAlt:
      "Translator zeigt nur eine koreanische Übersetzungszeile über einem Video",
    heroCaption:
      "Zeige nur die Übersetzung, wenn du das Video ungestört ansehen möchtest. Original und zweisprachige Ansicht sind nur einen Klick entfernt.",
    displayEyebrow: "Du bestimmst die Anzeige",
    displayTitle: "Original, Übersetzung oder beides.",
    displayDescription:
      "Translator zwingt dir keine zwei Untertitelspuren auf. Pro Video kannst du das Original, die Übersetzung oder beide zusammen anzeigen.",
    displayModes: [
      {
        label: "Nur Original",
        body: "Lies ausschließlich das ursprüngliche Transkript.",
      },
      {
        label: "Nur Übersetzung",
        body: "Sieh das Video mit einer klaren übersetzten Zeile.",
      },
      {
        label: "Beides",
        body: "Vergleiche Original und Übersetzung Zeile für Zeile.",
      },
    ],
    stylesEyebrow: "Untertitel passend zum Video",
    stylesTitle: "Wähle Ansicht und Stil.",
    stylesDescription:
      "Nutze Default, Classic, Boxed oder LineBox, passe die Textgröße an und übernimm das Ergebnis beim Ansehen oder Exportieren.",
    classicCaption: "Nur das Original im Classic-Stil.",
    dualCaption: "Original und Übersetzung zusammen im LineBox-Stil.",
    libraryEyebrow: "Deine Videobibliothek",
    libraryTitle: "Downloads bleiben auch nach dem ersten Ansehen nützlich.",
    libraryDescription:
      "Heruntergeladene Videos bleiben als visuelle Historie in der App. Sieh Favoriten erneut an, öffne sie für Untertitelarbeit oder mache dort weiter, wo du aufgehört hast.",
    libraryCaption:
      "Die echte Download-Ansicht mit Videos, Quellen, Datum und lokalem Dateistatus.",
    agentEyebrow: "Entwicklervorschau",
    agentTitle: "Dein LLM-Agent kann Translator steuern.",
    agentDescription:
      "Verbinde die lokale MCP-Schnittstelle des Entwickler-Builds. Über klar benannte Werkzeuge kann ein Agent Videos suchen und herunterladen, Einträge aus der Download-Bibliothek erneut öffnen, Videos und SRT-Dateien laden, Untertitelansicht und -stil wechseln, SRTs übersetzen, prüfen und exportieren, maskierte Einstellungen verwalten und durch die App navigieren.",
    agentPoints: [
      "Die fertige App lässt sich normal herunterladen; die MCP-Steuerung ist derzeit eine Entwicklervorschau für Source-Builds",
      "Die Suche kann Stage5-Credits oder einen eigenen Anbieter nutzen; Downloads, Bibliothek und Status rufen das Empfehlungsmodell nicht auf",
      "Der Agent kann die Bezahlseite öffnen, aber nur der Nutzer gibt Kartendaten ein und bestätigt; gespeicherte Schlüsselwerte werden nie ausgegeben",
    ],
    agentCta: "Vollständigen Agentenleitfaden öffnen",
  },
  pt: {
    heroAlt:
      "Translator mostrando apenas uma legenda traduzida para coreano sobre um vídeo",
    heroCaption:
      "Mostre somente a tradução quando quiser assistir sem distrações. A legenda original e a visualização bilíngue ficam a um clique.",
    displayEyebrow: "Você escolhe o que aparece",
    displayTitle: "Original, tradução ou os dois.",
    displayDescription:
      "O Translator não obriga você a usar duas faixas na tela. Em cada vídeo, mostre o texto original, a tradução ou ambos juntos.",
    displayModes: [
      {
        label: "Só o original",
        body: "Acompanhe apenas a transcrição original.",
      },
      {
        label: "Só a tradução",
        body: "Assista com uma única linha traduzida.",
      },
      {
        label: "Os dois",
        body: "Compare original e tradução linha por linha.",
      },
    ],
    stylesEyebrow: "Legendas que combinam com o vídeo",
    stylesTitle: "Escolha a visualização e o estilo.",
    stylesDescription:
      "Use Default, Classic, Boxed ou LineBox, ajuste o tamanho do texto e mantenha o resultado ao assistir ou exportar.",
    classicCaption: "Apenas o original com o estilo Classic.",
    dualCaption: "Original e tradução juntos com o estilo LineBox.",
    libraryEyebrow: "Sua videoteca",
    libraryTitle: "Os downloads continuam úteis depois da primeira vez.",
    libraryDescription:
      "Os vídeos baixados ficam em um histórico visual no app. Reveja favoritos, reabra um trabalho de legendas ou continue de onde parou.",
    libraryCaption:
      "A tela real de Downloads com vídeos, fontes, datas e estado do arquivo local.",
    agentEyebrow: "Prévia para desenvolvedores",
    agentTitle: "Seu agente LLM pode controlar o Translator.",
    agentDescription:
      "Conecte a interface MCP local da versão de desenvolvimento. Com ferramentas de nomes claros, um agente pode pesquisar e baixar vídeos, reabrir itens da biblioteca de Downloads, carregar vídeos e SRTs, trocar a exibição e o estilo das legendas, traduzir, revisar e exportar SRTs, gerenciar configurações com segredos ocultos e navegar pelo app.",
    agentPoints: [
      "O app pronto continua disponível para download normal; o controle MCP ainda é uma prévia para builds feitos a partir do código-fonte",
      "A pesquisa pode usar créditos Stage5 ou um provedor próprio; downloads, biblioteca e estado não chamam o modelo de recomendação",
      "O agente pode abrir o checkout, mas só o usuário informa e confirma o cartão; os valores das chaves salvas nunca são retornados",
    ],
    agentCta: "Ver o guia completo para agentes",
  },
  vi: {
    heroAlt:
      "Translator chỉ hiển thị một dòng phụ đề tiếng Hàn đã dịch trên video",
    heroCaption:
      "Chỉ hiện bản dịch khi bạn muốn tập trung xem video. Bạn cũng có thể chuyển sang nguyên văn hoặc song ngữ chỉ với một lần bấm.",
    displayEyebrow: "Bạn quyết định nội dung hiển thị",
    displayTitle: "Nguyên văn, bản dịch hoặc cả hai.",
    displayDescription:
      "Translator không bắt buộc phải hiện hai dòng phụ đề. Với mỗi video, bạn có thể chọn nguyên văn, bản dịch hoặc hiển thị cả hai.",
    displayModes: [
      { label: "Chỉ nguyên văn", body: "Theo dõi riêng phần lời gốc." },
      { label: "Chỉ bản dịch", body: "Xem video với một dòng phụ đề đã dịch." },
      {
        label: "Cả hai",
        body: "So sánh nguyên văn và bản dịch theo từng dòng.",
      },
    ],
    stylesEyebrow: "Phụ đề phù hợp với video",
    stylesTitle: "Chọn cách hiển thị và kiểu chữ.",
    stylesDescription:
      "Chọn Default, Classic, Boxed hoặc LineBox, chỉnh cỡ chữ và dùng kết quả khi xem hoặc xuất video.",
    classicCaption: "Chỉ hiện nguyên văn với kiểu Classic.",
    dualCaption: "Hiện nguyên văn và bản dịch cùng nhau với kiểu LineBox.",
    libraryEyebrow: "Thư viện video của bạn",
    libraryTitle: "Video đã tải vẫn hữu ích sau lần xem đầu tiên.",
    libraryDescription:
      "Video đã tải được giữ lại trong lịch sử trực quan của ứng dụng. Bạn có thể xem lại, mở lại để làm phụ đề hoặc tiếp tục công việc đang dở.",
    libraryCaption:
      "Màn hình Tải xuống thực tế với video, nguồn, ngày tải và trạng thái tệp trên máy.",
    agentEyebrow: "Bản xem trước cho nhà phát triển",
    agentTitle: "Tác nhân LLM của bạn có thể điều khiển Translator.",
    agentDescription:
      "Kết nối giao diện MCP cục bộ trong bản phát triển mã nguồn mở. Qua các công cụ có tên rõ ràng, tác nhân có thể tìm và tải video, mở lại nội dung trong thư viện Tải xuống, nạp video và SRT, đổi cách hiển thị và kiểu phụ đề, dịch, rà soát và xuất SRT, quản lý Cài đặt đã che thông tin nhạy cảm, rồi điều hướng trong ứng dụng.",
    agentPoints: [
      "Bản ứng dụng hoàn chỉnh vẫn được tải xuống bình thường; điều khiển MCP hiện là bản xem trước dành cho bản dựng từ mã nguồn",
      "Tìm kiếm có thể dùng tín dụng Stage5 hoặc nhà cung cấp BYO; tải xuống, thư viện và kiểm tra trạng thái không gọi mô hình đề xuất",
      "Tác nhân có thể mở trang thanh toán, nhưng chỉ người dùng nhập và xác nhận thẻ; giá trị khóa đã lưu không bao giờ được trả về",
    ],
    agentCta: "Xem toàn bộ hướng dẫn cho tác nhân",
  },
};

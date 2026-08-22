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
      "Choose exactly which subtitles you want to see for each video.",
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
    agentEyebrow: "Agent Control",
    agentTitle: "Your LLM agent can control the installed app.",
    agentDescription:
      "Installed Translator 1.16.16+ includes packaged MCP tools once you enable Settings → Agent Control → Allow agent control and allowlist write folders. An agent can download videos, transcribe, translate, export SRT or burned-in video, navigate the app, snapshot settings, and control the desktop workflow through the same app you already use.",
    agentPoints: [
      "Agent Control is off by default (user toggle in Settings). The socket appears at launch if enabled, or after toggling and relaunch",
      "Billing is the same as the UI (Stage5 credits or your configured BYO API keys). The agent never reads stored API keys. It can open checkout; you pay",
      "The source-build path (clone + npm run agent:mcp) remains available for developers who want to run it from the repo",
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
      "영상마다 보고 싶은 자막만 바로 골라 볼 수 있습니다.",
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
    agentEyebrow: "에이전트 제어",
    agentTitle: "LLM 에이전트가 설치된 앱을 직접 조작합니다.",
    agentDescription:
      "Translator 1.16.16+ 이상을 설치하면 설정 → 에이전트 제어 → 에이전트 제어 허용을 활성화하고 쓰기 폴더를 허용 목록에 추가한 뒤 패키지된 MCP 도구를 쓸 수 있습니다. 에이전트가 영상 다운로드, 전사, 번역, SRT 또는 자막 굽기 영상 내보내기, 앱 탐색, 설정 스냅샷, 이미 쓰는 같은 데스크톱 앱의 작업 흐름 제어를 할 수 있습니다.",
    agentPoints: [
      "에이전트 제어는 기본 꺼짐입니다(설정에서 사용자가 켜기). 이미 켰다면 실행 시 소켓이 나타나고, 켜고 재실행하면 소켓이 나타납니다",
      "결제는 UI와 같습니다(Stage5 크레딧이나 설정된 BYO API 키). 에이전트는 저장된 API 키를 읽지 않으며 결제 페이지는 열 수 있고 사용자가 결제합니다",
      "소스 빌드 방식(클론 + npm run agent:mcp)은 리포지토리에서 실행하려는 개발자를 위해 남아 있습니다",
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
      "Elige qué subtítulos quieres ver en cada vídeo.",
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
    agentEyebrow: "Control por agente",
    agentTitle: "Tu agente LLM puede controlar la aplicación instalada.",
    agentDescription:
      "Translator 1.16.16+ instalado incluye herramientas MCP empaquetadas una vez que activas Configuración → Control del agente → Permitir control del agente y defines las carpetas de escritura permitidas. Un agente puede descargar vídeos, transcribir, traducir, exportar SRT o vídeo con subtítulos incrustados, navegar por la aplicación, hacer snapshots de configuración y controlar el flujo de trabajo de escritorio mediante la misma aplicación que ya usas.",
    agentPoints: [
      "El Control del agente está desactivado por defecto (el usuario lo activa en Configuración). El socket aparece al iniciar si ya está activado, o tras activarlo y reiniciar",
      "La facturación es la misma que en la interfaz (créditos Stage5 o tus claves API BYO configuradas). El agente nunca lee las claves API guardadas. Puede abrir el pago; tú pagas",
      "El método de compilar desde el código (clonar + npm run agent:mcp) sigue disponible para desarrolladores que quieren ejecutarlo desde el repositorio",
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
      "動画ごとに、見たい字幕をすぐ切り替えられます。",
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
    agentEyebrow: "エージェント制御",
    agentTitle: "LLMエージェントがインストール済みアプリを操作できます。",
    agentDescription:
      "Translator 1.16.16以降をインストールすると、設定 → エージェント制御 → エージェント制御を許可 を有効化し、書き込みフォルダを許可リストに追加すれば、パッケージ済みMCPツールを使えます。エージェントは動画のダウンロード、文字起こし、翻訳、SRTまたは字幕焼き込み動画の書き出し、アプリ内移動、設定スナップショット、すでに使っている同じデスクトップアプリでのワークフロー制御ができます。",
    agentPoints: [
      "エージェント制御はデフォルトでオフです(設定でユーザーが切り替え)。既に有効なら起動時にソケットが現れ、切り替えて再起動すると現れます",
      "課金はUIと同じです(Stage5クレジットまたは設定済みBYO APIキー)。エージェントは保存済みAPIキーを読みません。決済画面を開けますが、支払いはユーザーが行います",
      "ソースビルド方式(クローン + npm run agent:mcp)は、リポジトリから実行したい開発者向けに残されています",
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
      "每个视频都可以随时切换字幕显示方式。",
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
    agentEyebrow: "智能体控制",
    agentTitle: "LLM 智能体可以控制已安装的应用。",
    agentDescription:
      "安装 Translator 1.16.16+ 后，启用 设置 → 智能体控制 → 允许智能体控制 并将写入文件夹加入白名单，就能使用打包好的 MCP 工具。智能体可以下载视频、转写、翻译、导出 SRT 或烧录字幕的视频、在应用内导航、快照设置，并通过你已在使用的同一款桌面应用控制工作流。",
    agentPoints: [
      "智能体控制默认关闭(用户在设置中切换)。如果已启用则启动时出现套接字，或切换后重新启动时出现",
      "计费与界面相同(Stage5 点数或你已配置的 BYO API 密钥)。智能体不会读取已保存的 API 密钥。它可以打开结账页；你付款",
      "源码构建路径(克隆 + npm run agent:mcp)仍可用于希望从仓库运行的开发者",
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
      "Choisissez les sous-titres à afficher pour chaque vidéo.",
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
    agentEyebrow: "Contrôle par agent",
    agentTitle: "Votre agent LLM peut piloter l'application installée.",
    agentDescription:
      "Translator 1.16.16+ installé inclut des outils MCP empaquetés une fois que vous activez Réglages → Contrôle par agent → Autoriser le contrôle par agent et ajoutez les dossiers d'écriture à la liste blanche. Un agent peut télécharger des vidéos, transcrire, traduire, exporter des SRT ou des vidéos avec sous-titres incrustés, naviguer dans l'application, faire des snapshots de configuration et contrôler le workflow de bureau via la même application que vous utilisez déjà.",
    agentPoints: [
      "Le contrôle par agent est désactivé par défaut (l'utilisateur bascule dans Réglages). Le socket apparaît au lancement si déjà activé, ou après activation et redémarrage",
      "La facturation est la même que dans l'interface (crédits Stage5 ou vos clés API BYO configurées). L'agent ne lit jamais les clés API enregistrées. Il peut ouvrir le paiement ; vous payez",
      "Le chemin de build depuis le code (clone + npm run agent:mcp) reste disponible pour les développeurs qui souhaitent l'exécuter depuis le dépôt",
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
      "Wähle für jedes Video genau die Untertitel, die du sehen möchtest.",
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
    agentEyebrow: "Agent-Steuerung",
    agentTitle: "Dein LLM-Agent kann die installierte App steuern.",
    agentDescription:
      "Translator 1.16.16+ enthält paketierte MCP-Tools, sobald du Einstellungen → Agent-Steuerung → Agent-Steuerung erlauben aktivierst und Schreibordner zur Whitelist hinzufügst. Ein Agent kann Videos herunterladen, transkribieren, übersetzen, SRT oder Videos mit eingebrannten Untertiteln exportieren, in der App navigieren, Einstellungen als Snapshot speichern und den Desktop-Workflow über dieselbe App steuern, die du bereits verwendest.",
    agentPoints: [
      "Agent-Steuerung ist standardmäßig aus (Nutzer schaltet in Einstellungen um). Der Socket erscheint beim Start, wenn bereits aktiviert, oder nach Umschalten und Neustart",
      "Abrechnung ist wie in der UI (Stage5-Credits oder deine konfigurierten BYO-API-Schlüssel). Der Agent liest nie gespeicherte API-Schlüssel. Er kann die Bezahlseite öffnen; du zahlst",
      "Der Source-Build-Pfad (Klonen + npm run agent:mcp) bleibt für Entwickler verfügbar, die ihn aus dem Repository ausführen möchten",
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
      "Escolha quais legendas quer ver em cada vídeo.",
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
    agentEyebrow: "Controle por agente",
    agentTitle: "Seu agente LLM pode controlar o aplicativo instalado.",
    agentDescription:
      "Translator 1.16.16+ instalado inclui ferramentas MCP empacotadas quando você ativa Configurações → Controle por agente → Permitir controle por agente e adiciona as pastas de escrita à lista permitida. Um agente pode baixar vídeos, transcrever, traduzir, exportar SRT ou vídeo com legendas queimadas, navegar no app, fazer snapshots de configuração e controlar o fluxo de trabalho do desktop pelo mesmo app que você já usa.",
    agentPoints: [
      "O controle por agente está desativado por padrão (usuário ativa nas Configurações). O socket aparece na inicialização se já ativado, ou após ativar e reiniciar",
      "A cobrança é igual à da interface (créditos Stage5 ou suas chaves API BYO configuradas). O agente nunca lê chaves API salvas. Ele pode abrir o checkout; você paga",
      "O caminho de build do código (clonar + npm run agent:mcp) continua disponível para desenvolvedores que querem rodar a partir do repositório",
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
      "Chọn kiểu phụ đề bạn muốn xem cho từng video.",
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
    agentEyebrow: "Điều khiển bằng tác nhân",
    agentTitle: "Tác nhân LLM của bạn có thể điều khiển ứng dụng đã cài đặt.",
    agentDescription:
      "Translator 1.16.16+ đã cài đặt bao gồm các công cụ MCP đóng gói khi bạn bật Cài đặt → Điều khiển bằng tác nhân → Cho phép điều khiển bằng tác nhân và thêm các thư mục ghi vào danh sách cho phép. Tác nhân có thể tải video, phiên âm, dịch, xuất SRT hoặc video đã burn phụ đề, điều hướng ứng dụng, chụp snapshot cài đặt và điều khiển luồng làm việc desktop qua cùng một ứng dụng bạn đang dùng.",
    agentPoints: [
      "Điều khiển bằng tác nhân mặc định tắt (người dùng bật trong Cài đặt). Socket xuất hiện khi khởi động nếu đã bật, hoặc sau khi bật và khởi động lại",
      "Thanh toán giống như giao diện (tín dụng Stage5 hoặc khóa API BYO đã cấu hình). Tác nhân không bao giờ đọc khóa API đã lưu. Nó có thể mở trang thanh toán; bạn thanh toán",
      "Đường dẫn build từ mã nguồn (clone + npm run agent:mcp) vẫn còn cho các nhà phát triển muốn chạy từ kho",
    ],
    agentCta: "Xem toàn bộ hướng dẫn cho tác nhân",
  },
};

import type { Locale } from "./locales";

type ConsentCopy = {
  title: string; body: string; allow: string; reject: string; settings: string;
  close: string; policy: string; saved: string; temporary: string; details: string;
};

export const analyticsConsentCopy: Record<Locale, ConsentCopy> = {
  en: {
    title: "Help us improve this site?",
    body: "With your permission, Google Analytics uses cookies to measure page visits and download clicks. You can use every feature without allowing analytics. This choice does not allow advertising cookies.",
    allow: "Allow analytics", reject: "Reject analytics", settings: "Analytics choices",
    close: "Close", policy: "Privacy policy", saved: "Your choice is saved.",
    temporary: "Your browser could not save this choice. It applies only to this page.",
    details: "Stage5 Tools LLC uses Google Analytics only after you allow it. Google receives page addresses, device and browser information, and interactions such as download clicks. Your browser connects to Google, which receives your IP address. Your choice is stored on this website for 180 days, separately on stage5.tools and translator.tools. You can change or withdraw it at any time using Analytics choices. Withdrawal stops future analytics and removes this site's Google measurement cookies; it does not erase previously collected data. Privacy pages and the private Reflect editor do not load Google analytics. Advertising consent is separate.",
  },
  ko: {
    title: "사이트 개선에 도움을 주시겠어요?",
    body: "동의하시면 Google 애널리틱스가 쿠키를 사용해 페이지 방문과 다운로드 클릭을 측정합니다. 동의하지 않아도 모든 기능을 이용할 수 있습니다. 이 선택은 광고 쿠키에 대한 동의가 아닙니다.",
    allow: "분석 허용", reject: "분석 거부", settings: "분석 설정",
    close: "닫기", policy: "개인정보 처리방침", saved: "선택을 저장했습니다.",
    temporary: "브라우저에 선택을 저장하지 못했습니다. 현재 페이지에만 적용됩니다.",
    details: "Stage5 Tools LLC는 동의한 경우에만 Google 애널리틱스를 사용합니다. Google은 페이지 주소, 기기 및 브라우저 정보, 다운로드 클릭 등의 활동 정보를 받습니다. 브라우저가 Google에 연결되므로 Google은 IP 주소도 받습니다. 선택은 이 웹사이트에 180일간 저장되며 stage5.tools와 translator.tools에서 각각 관리됩니다. 분석 설정에서 언제든 변경하거나 철회할 수 있습니다. 철회하면 이후 분석이 중단되고 이 사이트의 Google 측정 쿠키가 삭제됩니다. 이미 수집된 정보는 삭제되지 않습니다. 개인정보 처리방침 페이지와 비공개 Reflect 편집기는 Google 애널리틱스를 불러오지 않습니다. 광고 동의는 별도입니다.",
  },
  es: {
    title: "¿Nos ayudas a mejorar este sitio?",
    body: "Con tu permiso, Google Analytics usa cookies para medir visitas y clics de descarga. Puedes usar todas las funciones sin aceptar las analíticas. Esta elección no autoriza cookies publicitarias.",
    allow: "Aceptar analíticas", reject: "Rechazar analíticas", settings: "Opciones de analíticas",
    close: "Cerrar", policy: "Política de privacidad", saved: "Tu elección se ha guardado.",
    temporary: "El navegador no pudo guardar tu elección. Solo se aplica a esta página.",
    details: "Stage5 Tools LLC usa Google Analytics solo con tu permiso. Google recibe las direcciones de las páginas, información del dispositivo y navegador e interacciones como clics de descarga. Tu navegador se conecta a Google, que recibe tu dirección IP. La elección se guarda durante 180 días en este sitio, por separado en stage5.tools y translator.tools. Puedes cambiarla o retirarla en Opciones de analíticas. Al retirarla se detienen las analíticas futuras y se eliminan las cookies de medición de Google de este sitio; no se borran los datos ya recopilados. Las páginas de privacidad y el editor privado Reflect no cargan Google Analytics. El consentimiento publicitario es independiente.",
  },
  ja: {
    title: "サイトの改善にご協力いただけますか？",
    body: "同意いただいた場合、Google アナリティクスが Cookie を使ってページの閲覧やダウンロードのクリックを測定します。同意しなくてもすべての機能を利用できます。この選択は広告 Cookie への同意ではありません。",
    allow: "アクセス解析を許可", reject: "アクセス解析を拒否", settings: "アクセス解析の設定",
    close: "閉じる", policy: "プライバシーポリシー", saved: "選択を保存しました。",
    temporary: "ブラウザに選択を保存できませんでした。このページにのみ適用されます。",
    details: "Stage5 Tools LLC は同意を得た場合にのみ Google アナリティクスを使用します。Google はページのアドレス、端末とブラウザの情報、ダウンロードのクリックなどの操作情報を受け取ります。ブラウザが Google に接続するため、Google は IP アドレスも受け取ります。選択はこのサイトに180日間保存され、stage5.tools と translator.tools で個別に管理されます。アクセス解析の設定でいつでも変更・撤回できます。撤回すると今後の解析が停止し、このサイトの Google 測定 Cookie が削除されます。収集済みのデータは削除されません。プライバシーページと非公開の Reflect エディターでは Google アナリティクスを読み込みません。広告への同意は別に管理されます。",
  },
  zh: {
    title: "愿意帮助我们改进网站吗？",
    body: "获得您的同意后，Google Analytics 会使用 Cookie 统计页面访问和下载点击。不允许分析也能使用所有功能。此选择不代表同意广告 Cookie。",
    allow: "允许分析", reject: "拒绝分析", settings: "分析设置",
    close: "关闭", policy: "隐私政策", saved: "已保存您的选择。",
    temporary: "浏览器无法保存此选择。它仅适用于当前页面。",
    details: "Stage5 Tools LLC 仅在您同意后使用 Google Analytics。Google 会收到页面地址、设备和浏览器信息以及下载点击等互动数据。您的浏览器会连接到 Google，因此 Google 也会收到您的 IP 地址。选择将在此网站保存180天，stage5.tools 和 translator.tools 分别保存各自的选择。您可以随时通过分析设置更改或撤回同意。撤回后将停止后续分析并删除此网站的 Google 测量 Cookie，但不会删除已收集的数据。隐私页面和私密的 Reflect 编辑器不会加载 Google Analytics。广告同意单独管理。",
  },
  fr: {
    title: "Nous aider à améliorer ce site ?",
    body: "Avec votre accord, Google Analytics utilise des cookies pour mesurer les visites et les clics de téléchargement. Toutes les fonctions restent accessibles sans accepter l’analyse. Ce choix n’autorise pas les cookies publicitaires.",
    allow: "Autoriser l’analyse", reject: "Refuser l’analyse", settings: "Choix d’analyse",
    close: "Fermer", policy: "Politique de confidentialité", saved: "Votre choix est enregistré.",
    temporary: "Le navigateur n’a pas pu enregistrer ce choix. Il s’applique uniquement à cette page.",
    details: "Stage5 Tools LLC utilise Google Analytics uniquement avec votre accord. Google reçoit les adresses des pages, des informations sur l’appareil et le navigateur, ainsi que les interactions comme les clics de téléchargement. Votre navigateur se connecte à Google, qui reçoit votre adresse IP. Le choix est enregistré pendant 180 jours sur ce site, séparément sur stage5.tools et translator.tools. Vous pouvez le modifier ou le retirer dans Choix d’analyse. Le retrait arrête les analyses futures et supprime les cookies de mesure Google de ce site, sans effacer les données déjà collectées. Les pages de confidentialité et l’éditeur privé Reflect ne chargent pas Google Analytics. Le consentement publicitaire est distinct.",
  },
  de: {
    title: "Möchten Sie uns helfen, die Website zu verbessern?",
    body: "Mit Ihrer Einwilligung verwendet Google Analytics Cookies, um Seitenaufrufe und Download-Klicks zu messen. Alle Funktionen sind auch ohne Analyse verfügbar. Diese Auswahl erlaubt keine Werbe-Cookies.",
    allow: "Analyse erlauben", reject: "Analyse ablehnen", settings: "Analyse-Einstellungen",
    close: "Schließen", policy: "Datenschutzerklärung", saved: "Ihre Auswahl wurde gespeichert.",
    temporary: "Der Browser konnte Ihre Auswahl nicht speichern. Sie gilt nur für diese Seite.",
    details: "Stage5 Tools LLC verwendet Google Analytics nur mit Ihrer Einwilligung. Google erhält Seitenadressen, Geräte- und Browserinformationen sowie Interaktionen wie Download-Klicks. Ihr Browser verbindet sich mit Google, das dabei Ihre IP-Adresse erhält. Die Auswahl wird auf dieser Website 180 Tage gespeichert, getrennt für stage5.tools und translator.tools. Sie können sie jederzeit unter Analyse-Einstellungen ändern oder widerrufen. Ein Widerruf stoppt künftige Analysen und entfernt die Google-Messcookies dieser Website; bereits erfasste Daten werden nicht gelöscht. Datenschutzseiten und der private Reflect-Editor laden Google Analytics nicht. Die Werbeeinwilligung wird separat verwaltet.",
  },
  pt: {
    title: "Quer ajudar a melhorar este site?",
    body: "Com sua permissão, o Google Analytics usa cookies para medir visitas e cliques de download. Todas as funções continuam disponíveis sem aceitar a análise. Esta escolha não autoriza cookies de publicidade.",
    allow: "Permitir análise", reject: "Recusar análise", settings: "Opções de análise",
    close: "Fechar", policy: "Política de privacidade", saved: "Sua escolha foi salva.",
    temporary: "O navegador não conseguiu salvar sua escolha. Ela vale apenas para esta página.",
    details: "A Stage5 Tools LLC usa o Google Analytics somente com sua permissão. O Google recebe endereços de páginas, informações do dispositivo e navegador e interações como cliques de download. Seu navegador se conecta ao Google, que recebe seu endereço IP. A escolha fica salva neste site por 180 dias, separadamente em stage5.tools e translator.tools. Você pode alterá-la ou retirá-la em Opções de análise. A retirada interrompe análises futuras e remove os cookies de medição do Google deste site; não apaga os dados já coletados. As páginas de privacidade e o editor privado Reflect não carregam o Google Analytics. O consentimento para publicidade é separado.",
  },
  vi: {
    title: "Bạn có muốn giúp cải thiện trang web?",
    body: "Nếu bạn đồng ý, Google Analytics sẽ dùng cookie để đo lượt xem trang và lượt nhấp tải xuống. Bạn vẫn dùng được mọi tính năng khi từ chối phân tích. Lựa chọn này không cho phép cookie quảng cáo.",
    allow: "Cho phép phân tích", reject: "Từ chối phân tích", settings: "Tùy chọn phân tích",
    close: "Đóng", policy: "Chính sách quyền riêng tư", saved: "Đã lưu lựa chọn của bạn.",
    temporary: "Trình duyệt không lưu được lựa chọn này. Lựa chọn chỉ áp dụng cho trang hiện tại.",
    details: "Stage5 Tools LLC chỉ sử dụng Google Analytics sau khi bạn đồng ý. Google nhận địa chỉ trang, thông tin thiết bị và trình duyệt, cùng các tương tác như lượt nhấp tải xuống. Trình duyệt kết nối với Google nên Google cũng nhận địa chỉ IP của bạn. Lựa chọn được lưu trên trang web này trong 180 ngày, riêng biệt trên stage5.tools và translator.tools. Bạn có thể thay đổi hoặc rút lại sự đồng ý bất cứ lúc nào trong Tùy chọn phân tích. Việc rút lại sẽ dừng phân tích trong tương lai và xóa cookie đo lường của Google trên trang web này, nhưng không xóa dữ liệu đã thu thập. Các trang quyền riêng tư và trình soạn thảo Reflect riêng tư không tải Google Analytics. Sự đồng ý cho quảng cáo được quản lý riêng.",
  },
};

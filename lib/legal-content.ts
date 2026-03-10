import type { Locale } from "./locales";

type LegalSection = {
  title: string;
  body: string;
};

type LegalPageContent = {
  breadcrumb: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  sections: LegalSection[];
};

export const termsContent: Partial<Record<Locale, LegalPageContent>> = {
  en: {
    breadcrumb: "Terms of Service",
    title: "Terms of Service",
    metaTitle: "Terms of Service | Translator",
    metaDescription:
      "Terms of Service for Translator by Stage5 Tools. Review usage rules, payments, and limitations.",
    keywords: ["Translator terms", "Stage5 Tools terms", "terms of service"],
    intro:
      "These terms govern your use of Translator and related services from Stage5 Tools.",
    sections: [
      {
        title: "Use of service",
        body: "You agree to use Translator in compliance with applicable laws and platform terms for any videos you download or translate.",
      },
      {
        title: "Accounts",
        body: "You are responsible for maintaining the security of your account, devices, and credentials.",
      },
      {
        title: "Payments",
        body: "AI features use paid credits. All prices, taxes, and refund policies are shown at checkout.",
      },
      {
        title: "Intellectual property",
        body: "Translator and its content are owned by Stage5 Tools. You retain rights to your own videos and subtitle files.",
      },
      {
        title: "Service availability",
        body: "We may update or discontinue features at any time. We do our best to keep services running reliably.",
      },
      {
        title: "Limitation of liability",
        body: 'Translator is provided "as is" without warranties. To the fullest extent permitted, Stage5 Tools is not liable for indirect damages or losses.',
      },
      {
        title: "Contact",
        body: "Questions about these terms? Email mikey@stage5.tools.",
      },
    ],
  },
  ko: {
    breadcrumb: "서비스 이용약관",
    title: "서비스 이용약관",
    metaTitle: "서비스 이용약관 | Translator",
    metaDescription:
      "Stage5 Tools의 Translator 서비스 이용약관입니다. 이용 규칙, 결제, 책임 제한을 확인하세요.",
    keywords: ["Translator 이용약관", "Stage5 Tools 약관", "서비스 이용약관"],
    intro:
      "본 약관은 Stage5 Tools의 Translator 및 관련 서비스 이용에 적용됩니다.",
    sections: [
      {
        title: "서비스 이용",
        body: "사용자는 다운로드하거나 번역하는 콘텐츠에 대해 관련 법률 및 플랫폼 정책을 준수해야 합니다.",
      },
      {
        title: "계정 및 보안",
        body: "계정, 기기, 인증 정보의 보안 유지 책임은 사용자에게 있습니다.",
      },
      {
        title: "결제",
        body: "AI 기능은 유료 크레딧을 사용합니다. 가격, 세금, 환불 정책은 결제 단계에서 안내됩니다.",
      },
      {
        title: "지식재산권",
        body: "Translator 및 관련 콘텐츠의 권리는 Stage5 Tools에 있습니다. 사용자가 업로드한 비디오와 자막 파일의 권리는 사용자에게 있습니다.",
      },
      {
        title: "서비스 가용성",
        body: "서비스 품질 향상을 위해 기능이 변경되거나 중단될 수 있으며, 안정적 운영을 위해 최선을 다합니다.",
      },
      {
        title: "책임의 제한",
        body: "Translator는 현행 상태로 제공되며, 법이 허용하는 범위에서 Stage5 Tools는 간접 손해에 대해 책임을 지지 않습니다.",
      },
      {
        title: "문의",
        body: "약관 관련 문의는 mikey@stage5.tools 로 연락해 주세요.",
      },
    ],
  },
  es: {
    breadcrumb: "Términos del servicio",
    title: "Términos del servicio",
    metaTitle: "Términos del servicio | Translator",
    metaDescription:
      "Términos del servicio de Translator de Stage5 Tools. Revisa las reglas de uso, pagos y limitaciones.",
    keywords: [
      "términos de Translator",
      "términos de Stage5 Tools",
      "términos del servicio",
    ],
    intro:
      "Estos términos regulan tu uso de Translator y de los servicios relacionados de Stage5 Tools.",
    sections: [
      {
        title: "Uso del servicio",
        body: "Aceptas usar Translator de conformidad con las leyes aplicables y con las condiciones de las plataformas para cualquier video que descargues o traduzcas.",
      },
      {
        title: "Cuentas",
        body: "Eres responsable de mantener la seguridad de tu cuenta, tus dispositivos y tus credenciales.",
      },
      {
        title: "Pagos",
        body: "Las funciones de IA usan créditos de pago. Todos los precios, impuestos y políticas de reembolso se muestran durante el pago.",
      },
      {
        title: "Propiedad intelectual",
        body: "Translator y su contenido pertenecen a Stage5 Tools. Conservas los derechos sobre tus propios videos y archivos de subtítulos.",
      },
      {
        title: "Disponibilidad del servicio",
        body: "Podemos actualizar o retirar funciones en cualquier momento. Hacemos todo lo posible por mantener el servicio funcionando de forma fiable.",
      },
      {
        title: "Limitación de responsabilidad",
        body: 'Translator se proporciona "tal cual", sin garantías. En la máxima medida permitida por la ley, Stage5 Tools no será responsable de daños o pérdidas indirectas.',
      },
      {
        title: "Contacto",
        body: "¿Tienes preguntas sobre estos términos? Escribe a mikey@stage5.tools.",
      },
    ],
  },
  ja: {
    breadcrumb: "利用規約",
    title: "利用規約",
    metaTitle: "利用規約 | Translator",
    metaDescription:
      "Stage5 Tools の Translator に関する利用規約です。利用条件、支払い、責任制限をご確認ください。",
    keywords: ["Translator 利用規約", "Stage5 Tools 規約", "サービス利用規約"],
    intro:
      "本規約は、Stage5 Tools が提供する Translator および関連サービスの利用に適用されます。",
    sections: [
      {
        title: "サービスの利用",
        body: "ダウンロードまたは翻訳する動画について、適用される法令および各プラットフォームの利用条件を遵守して Translator を利用することに同意するものとします。",
      },
      {
        title: "アカウント",
        body: "アカウント、端末、認証情報の安全管理は利用者の責任です。",
      },
      {
        title: "支払い",
        body: "AI 機能は有料クレジットを使用します。価格、税金、返金ポリシーは決済時に表示されます。",
      },
      {
        title: "知的財産",
        body: "Translator およびその関連コンテンツの権利は Stage5 Tools に帰属します。利用者自身の動画および字幕ファイルの権利は利用者に留保されます。",
      },
      {
        title: "サービス提供",
        body: "当社は機能を更新または終了することがあります。サービスの安定運用に努めます。",
      },
      {
        title: "責任の制限",
        body: "Translator は現状有姿で提供され、いかなる保証も行いません。法令で認められる最大限の範囲で、Stage5 Tools は間接損害または損失について責任を負いません。",
      },
      {
        title: "お問い合わせ",
        body: "本規約についてのご質問は mikey@stage5.tools までご連絡ください。",
      },
    ],
  },
  zh: {
    breadcrumb: "服务条款",
    title: "服务条款",
    metaTitle: "服务条款 | Translator",
    metaDescription:
      "Stage5 Tools 旗下 Translator 的服务条款。请查看使用规则、付款条款和责任限制。",
    keywords: ["Translator 服务条款", "Stage5 Tools 条款", "服务条款"],
    intro:
      "本条款适用于你对 Stage5 Tools 的 Translator 及相关服务的使用。",
    sections: [
      {
        title: "服务使用",
        body: "对于你下载或翻译的任何视频，你同意按照适用法律以及相关平台条款使用 Translator。",
      },
      {
        title: "账户",
        body: "你有责任维护自己的账户、设备和凭证的安全。",
      },
      {
        title: "付款",
        body: "AI 功能使用付费积分。所有价格、税费和退款政策都会在结账时显示。",
      },
      {
        title: "知识产权",
        body: "Translator 及其相关内容归 Stage5 Tools 所有。你仍保留自己视频和字幕文件的权利。",
      },
      {
        title: "服务可用性",
        body: "我们可能随时更新或停止某些功能，并会尽力保持服务稳定运行。",
      },
      {
        title: "责任限制",
        body: 'Translator 按“现状”提供，不附带任何保证。在法律允许的最大范围内，Stage5 Tools 不对任何间接损害或损失承担责任。',
      },
      {
        title: "联系我们",
        body: "如果你对本条款有疑问，请发送邮件至 mikey@stage5.tools。",
      },
    ],
  },
  fr: {
    breadcrumb: "Conditions d’utilisation",
    title: "Conditions d’utilisation",
    metaTitle: "Conditions d’utilisation | Translator",
    metaDescription:
      "Conditions d’utilisation de Translator par Stage5 Tools. Consultez les règles d’usage, les paiements et les limitations.",
    keywords: [
      "conditions Translator",
      "conditions Stage5 Tools",
      "conditions d’utilisation",
    ],
    intro:
      "Ces conditions régissent votre utilisation de Translator et des services associés proposés par Stage5 Tools.",
    sections: [
      {
        title: "Utilisation du service",
        body: "Vous acceptez d’utiliser Translator conformément aux lois applicables et aux conditions des plateformes pour toute vidéo que vous téléchargez ou traduisez.",
      },
      {
        title: "Comptes",
        body: "Vous êtes responsable de la sécurité de votre compte, de vos appareils et de vos identifiants.",
      },
      {
        title: "Paiements",
        body: "Les fonctions IA utilisent des crédits payants. Tous les prix, taxes et politiques de remboursement sont affichés au moment du paiement.",
      },
      {
        title: "Propriété intellectuelle",
        body: "Translator et son contenu appartiennent à Stage5 Tools. Vous conservez les droits sur vos propres vidéos et fichiers de sous-titres.",
      },
      {
        title: "Disponibilité du service",
        body: "Nous pouvons mettre à jour ou interrompre certaines fonctionnalités à tout moment. Nous faisons de notre mieux pour maintenir un service fiable.",
      },
      {
        title: "Limitation de responsabilité",
        body: 'Translator est fourni "tel quel", sans garantie. Dans toute la mesure permise par la loi, Stage5 Tools n’est pas responsable des dommages ou pertes indirects.',
      },
      {
        title: "Contact",
        body: "Une question sur ces conditions ? Écrivez à mikey@stage5.tools.",
      },
    ],
  },
  de: {
    breadcrumb: "Nutzungsbedingungen",
    title: "Nutzungsbedingungen",
    metaTitle: "Nutzungsbedingungen | Translator",
    metaDescription:
      "Nutzungsbedingungen für Translator von Stage5 Tools. Prüfe Nutzungsregeln, Zahlungen und Haftungsbeschränkungen.",
    keywords: ["Translator Nutzungsbedingungen", "Stage5 Tools Bedingungen", "Nutzungsbedingungen"],
    intro:
      "Diese Bedingungen regeln deine Nutzung von Translator und den zugehörigen Diensten von Stage5 Tools.",
    sections: [
      {
        title: "Nutzung des Dienstes",
        body: "Du verpflichtest dich, Translator im Einklang mit geltendem Recht und den Plattformbedingungen für alle von dir heruntergeladenen oder übersetzten Videos zu nutzen.",
      },
      {
        title: "Konten",
        body: "Du bist für die Sicherheit deines Kontos, deiner Geräte und deiner Zugangsdaten verantwortlich.",
      },
      {
        title: "Zahlungen",
        body: "KI-Funktionen nutzen kostenpflichtige Credits. Alle Preise, Steuern und Erstattungsregeln werden beim Checkout angezeigt.",
      },
      {
        title: "Geistiges Eigentum",
        body: "Translator und seine Inhalte gehören Stage5 Tools. Die Rechte an deinen eigenen Videos und Untertiteldateien verbleiben bei dir.",
      },
      {
        title: "Verfügbarkeit des Dienstes",
        body: "Wir können Funktionen jederzeit aktualisieren oder einstellen. Wir bemühen uns, den Dienst zuverlässig bereitzustellen.",
      },
      {
        title: "Haftungsbeschränkung",
        body: 'Translator wird "wie besehen" ohne Gewährleistung bereitgestellt. Soweit gesetzlich zulässig, haftet Stage5 Tools nicht für indirekte Schäden oder Verluste.',
      },
      {
        title: "Kontakt",
        body: "Fragen zu diesen Bedingungen? Schreib an mikey@stage5.tools.",
      },
    ],
  },
  pt: {
    breadcrumb: "Termos de serviço",
    title: "Termos de serviço",
    metaTitle: "Termos de serviço | Translator",
    metaDescription:
      "Termos de serviço do Translator da Stage5 Tools. Veja regras de uso, pagamentos e limitações.",
    keywords: [
      "termos do Translator",
      "termos da Stage5 Tools",
      "termos de serviço",
    ],
    intro:
      "Estes termos regem o uso do Translator e dos serviços relacionados da Stage5 Tools.",
    sections: [
      {
        title: "Uso do serviço",
        body: "Ao usar o Translator, você concorda em cumprir as leis aplicáveis e os termos das plataformas para qualquer vídeo que baixar ou traduzir.",
      },
      {
        title: "Contas",
        body: "Você é responsável por manter a segurança da sua conta, dos seus dispositivos e das suas credenciais.",
      },
      {
        title: "Pagamentos",
        body: "Os recursos de IA usam créditos pagos. Todos os preços, impostos e políticas de reembolso são mostrados no checkout.",
      },
      {
        title: "Propriedade intelectual",
        body: "O Translator e seu conteúdo pertencem à Stage5 Tools. Você mantém os direitos sobre seus próprios vídeos e arquivos de legenda.",
      },
      {
        title: "Disponibilidade do serviço",
        body: "Podemos atualizar ou descontinuar recursos a qualquer momento. Fazemos o possível para manter o serviço funcionando com confiabilidade.",
      },
      {
        title: "Limitação de responsabilidade",
        body: 'O Translator é fornecido "no estado em que se encontra", sem garantias. Na máxima medida permitida por lei, a Stage5 Tools não se responsabiliza por danos ou perdas indiretas.',
      },
      {
        title: "Contato",
        body: "Dúvidas sobre estes termos? Envie um e-mail para mikey@stage5.tools.",
      },
    ],
  },
  vi: {
    breadcrumb: "Điều khoản dịch vụ",
    title: "Điều khoản dịch vụ",
    metaTitle: "Điều khoản dịch vụ | Translator",
    metaDescription:
      "Điều khoản dịch vụ của Translator từ Stage5 Tools. Xem quy tắc sử dụng, thanh toán và các giới hạn.",
    keywords: [
      "điều khoản Translator",
      "điều khoản Stage5 Tools",
      "điều khoản dịch vụ",
    ],
    intro:
      "Các điều khoản này chi phối việc bạn sử dụng Translator và các dịch vụ liên quan từ Stage5 Tools.",
    sections: [
      {
        title: "Việc sử dụng dịch vụ",
        body: "Bạn đồng ý sử dụng Translator phù hợp với luật hiện hành và điều khoản của nền tảng đối với mọi video bạn tải xuống hoặc dịch.",
      },
      {
        title: "Tài khoản",
        body: "Bạn chịu trách nhiệm duy trì bảo mật cho tài khoản, thiết bị và thông tin xác thực của mình.",
      },
      {
        title: "Thanh toán",
        body: "Các tính năng AI dùng credit trả phí. Mọi mức giá, thuế và chính sách hoàn tiền đều được hiển thị khi thanh toán.",
      },
      {
        title: "Sở hữu trí tuệ",
        body: "Translator và nội dung liên quan thuộc sở hữu của Stage5 Tools. Bạn vẫn giữ quyền đối với video và tệp phụ đề của riêng mình.",
      },
      {
        title: "Tính sẵn sàng của dịch vụ",
        body: "Chúng tôi có thể cập nhật hoặc ngừng một số tính năng bất kỳ lúc nào. Chúng tôi nỗ lực duy trì dịch vụ hoạt động ổn định.",
      },
      {
        title: "Giới hạn trách nhiệm",
        body: 'Translator được cung cấp "nguyên trạng" mà không có bảo đảm nào. Trong phạm vi tối đa pháp luật cho phép, Stage5 Tools không chịu trách nhiệm với các thiệt hại hoặc tổn thất gián tiếp.',
      },
      {
        title: "Liên hệ",
        body: "Có câu hỏi về các điều khoản này? Hãy email tới mikey@stage5.tools.",
      },
    ],
  },
};

export const privacyContent: Partial<Record<Locale, LegalPageContent>> = {
  en: {
    breadcrumb: "Privacy Policy",
    title: "Privacy Policy",
    metaTitle: "Privacy Policy | Translator",
    metaDescription:
      "Privacy policy for Translator by Stage5 Tools. Learn how we collect, use, and protect your data.",
    keywords: ["Translator privacy policy", "Stage5 Tools privacy", "data policy"],
    intro:
      "This Privacy Policy explains how Stage5 Tools collects, uses, and protects information when you use Translator.",
    sections: [
      {
        title: "Information we collect",
        body: "We collect information you provide directly (such as contact details), usage data to improve Translator, and technical data needed to deliver downloads and AI features.",
      },
      {
        title: "How we use information",
        body: "We use data to operate the app, provide customer support, process payments, improve features, and keep the service secure.",
      },
      {
        title: "Sharing and third parties",
        body: "We only share data with trusted providers needed to deliver services (such as hosting, analytics, and payment processing).",
      },
      {
        title: "Data retention",
        body: "We retain data only as long as needed to provide the service and comply with legal obligations.",
      },
      {
        title: "Your rights",
        body: "You can request access, correction, or deletion of your data.",
      },
      {
        title: "Changes to this policy",
        body: "We may update this policy from time to time. Updates will be posted on this page with a new effective date.",
      },
      {
        title: "Contact us",
        body: "If you have questions about this policy, email mikey@stage5.tools.",
      },
    ],
  },
  ko: {
    breadcrumb: "개인정보 처리방침",
    title: "개인정보 처리방침",
    metaTitle: "개인정보 처리방침 | Translator",
    metaDescription:
      "Stage5 Tools의 Translator 개인정보 처리방침입니다. 수집 정보와 활용 방식, 보호 정책을 확인하세요.",
    keywords: ["Translator 개인정보 처리방침", "Stage5 Tools 개인정보", "데이터 보호 정책"],
    intro:
      "본 개인정보 처리방침은 Stage5 Tools가 Translator 서비스 이용 과정에서 정보를 수집, 이용, 보호하는 방법을 설명합니다.",
    sections: [
      {
        title: "수집하는 정보",
        body: "연락처 등 사용자가 직접 제공한 정보, 서비스 개선을 위한 사용 데이터, 다운로드와 AI 기능 제공에 필요한 기술 정보를 수집할 수 있습니다.",
      },
      {
        title: "정보의 이용 목적",
        body: "서비스 운영, 고객 지원, 결제 처리, 기능 개선, 보안 유지를 위해 정보를 사용합니다.",
      },
      {
        title: "제3자 제공",
        body: "호스팅, 분석, 결제 처리 등 서비스 제공에 필요한 범위에서 신뢰할 수 있는 파트너에게만 정보를 공유합니다.",
      },
      {
        title: "보관 기간",
        body: "서비스 제공과 법적 의무 이행에 필요한 기간 동안만 데이터를 보관합니다.",
      },
      {
        title: "이용자 권리",
        body: "사용자는 정보 열람, 정정, 삭제를 요청할 수 있습니다.",
      },
      {
        title: "정책 변경",
        body: "본 방침은 필요 시 업데이트될 수 있으며, 변경 시 본 페이지에 최신 버전을 게시합니다.",
      },
      {
        title: "문의",
        body: "개인정보 관련 문의는 mikey@stage5.tools 로 연락해 주세요.",
      },
    ],
  },
  es: {
    breadcrumb: "Política de privacidad",
    title: "Política de privacidad",
    metaTitle: "Política de privacidad | Translator",
    metaDescription:
      "Política de privacidad de Translator de Stage5 Tools. Aprende cómo recopilamos, usamos y protegemos tus datos.",
    keywords: [
      "política de privacidad de Translator",
      "privacidad Stage5 Tools",
      "política de datos",
    ],
    intro:
      "Esta Política de privacidad explica cómo Stage5 Tools recopila, usa y protege la información cuando utilizas Translator.",
    sections: [
      {
        title: "Información que recopilamos",
        body: "Recopilamos la información que proporcionas directamente, datos de uso para mejorar Translator y datos técnicos necesarios para ofrecer descargas y funciones de IA.",
      },
      {
        title: "Cómo usamos la información",
        body: "Usamos los datos para operar la aplicación, ofrecer soporte, procesar pagos, mejorar funciones y mantener el servicio seguro.",
      },
      {
        title: "Compartición y terceros",
        body: "Solo compartimos datos con proveedores de confianza necesarios para prestar el servicio, como alojamiento, analítica y procesamiento de pagos.",
      },
      {
        title: "Conservación de datos",
        body: "Conservamos los datos solo durante el tiempo necesario para prestar el servicio y cumplir con obligaciones legales.",
      },
      {
        title: "Tus derechos",
        body: "Puedes solicitar acceso, corrección o eliminación de tus datos.",
      },
      {
        title: "Cambios en esta política",
        body: "Podemos actualizar esta política ocasionalmente. Las actualizaciones se publicarán en esta página con una nueva fecha de entrada en vigor.",
      },
      {
        title: "Contacto",
        body: "Si tienes preguntas sobre esta política, escribe a mikey@stage5.tools.",
      },
    ],
  },
  ja: {
    breadcrumb: "プライバシーポリシー",
    title: "プライバシーポリシー",
    metaTitle: "プライバシーポリシー | Translator",
    metaDescription:
      "Stage5 Tools の Translator に関するプライバシーポリシーです。データの収集、利用、保護方法をご確認ください。",
    keywords: ["Translator プライバシーポリシー", "Stage5 Tools プライバシー", "データポリシー"],
    intro:
      "本プライバシーポリシーは、Translator の利用時に Stage5 Tools が情報をどのように収集、利用、保護するかを説明するものです。",
    sections: [
      {
        title: "収集する情報",
        body: "当社は、利用者が直接提供する情報、Translator 改善のための利用データ、およびダウンロードや AI 機能の提供に必要な技術データを収集します。",
      },
      {
        title: "情報の利用方法",
        body: "当社は、アプリの運営、サポート対応、決済処理、機能改善、およびサービスの安全確保のために情報を利用します。",
      },
      {
        title: "第三者提供",
        body: "当社は、ホスティング、分析、決済処理など、サービス提供に必要な信頼できる事業者とのみデータを共有します。",
      },
      {
        title: "データの保持",
        body: "当社は、サービス提供および法的義務の履行に必要な期間に限りデータを保持します。",
      },
      {
        title: "利用者の権利",
        body: "利用者は、自身のデータへのアクセス、訂正、削除を求めることができます。",
      },
      {
        title: "本ポリシーの変更",
        body: "本ポリシーは随時更新されることがあります。更新がある場合は、本ページに新しい発効日とともに掲載します。",
      },
      {
        title: "お問い合わせ",
        body: "本ポリシーについてのご質問は mikey@stage5.tools までご連絡ください。",
      },
    ],
  },
  zh: {
    breadcrumb: "隐私政策",
    title: "隐私政策",
    metaTitle: "隐私政策 | Translator",
    metaDescription:
      "Stage5 Tools 旗下 Translator 的隐私政策。了解我们如何收集、使用和保护你的数据。",
    keywords: ["Translator 隐私政策", "Stage5 Tools 隐私", "数据政策"],
    intro:
      "本隐私政策说明了当你使用 Translator 时，Stage5 Tools 如何收集、使用和保护相关信息。",
    sections: [
      {
        title: "我们收集的信息",
        body: "我们会收集你直接提供的信息、用于改进 Translator 的使用数据，以及提供下载和 AI 功能所需的技术数据。",
      },
      {
        title: "我们如何使用信息",
        body: "我们使用这些数据来运营应用、提供客户支持、处理付款、改进功能并保障服务安全。",
      },
      {
        title: "共享与第三方",
        body: "我们只会与提供服务所必需的可信合作方共享数据，例如托管、分析和支付处理服务商。",
      },
      {
        title: "数据保留",
        body: "我们仅在提供服务和履行法律义务所需的期限内保留数据。",
      },
      {
        title: "你的权利",
        body: "你可以请求访问、更正或删除自己的数据。",
      },
      {
        title: "本政策的变更",
        body: "我们可能会不时更新本政策。更新后会在本页面发布，并附上新的生效日期。",
      },
      {
        title: "联系我们",
        body: "如果你对本政策有疑问，请发送邮件至 mikey@stage5.tools。",
      },
    ],
  },
  fr: {
    breadcrumb: "Politique de confidentialité",
    title: "Politique de confidentialité",
    metaTitle: "Politique de confidentialité | Translator",
    metaDescription:
      "Politique de confidentialité de Translator par Stage5 Tools. Découvrez comment nous collectons, utilisons et protégeons vos données.",
    keywords: [
      "politique de confidentialité Translator",
      "confidentialité Stage5 Tools",
      "politique de données",
    ],
    intro:
      "Cette politique de confidentialité explique comment Stage5 Tools collecte, utilise et protège les informations lorsque vous utilisez Translator.",
    sections: [
      {
        title: "Informations collectées",
        body: "Nous collectons les informations que vous fournissez directement, des données d’usage pour améliorer Translator, ainsi que les données techniques nécessaires aux téléchargements et aux fonctions IA.",
      },
      {
        title: "Utilisation des informations",
        body: "Nous utilisons ces données pour faire fonctionner l’application, fournir l’assistance, traiter les paiements, améliorer les fonctionnalités et assurer la sécurité du service.",
      },
      {
        title: "Partage et tiers",
        body: "Nous ne partageons les données qu’avec des prestataires de confiance nécessaires à la fourniture du service, notamment pour l’hébergement, l’analytique et le paiement.",
      },
      {
        title: "Conservation des données",
        body: "Nous conservons les données uniquement pendant la durée nécessaire à la fourniture du service et au respect de nos obligations légales.",
      },
      {
        title: "Vos droits",
        body: "Vous pouvez demander l’accès, la correction ou la suppression de vos données.",
      },
      {
        title: "Modifications de cette politique",
        body: "Nous pouvons mettre à jour cette politique de temps à autre. Les mises à jour seront publiées sur cette page avec une nouvelle date d’entrée en vigueur.",
      },
      {
        title: "Contact",
        body: "Si vous avez des questions sur cette politique, écrivez à mikey@stage5.tools.",
      },
    ],
  },
  de: {
    breadcrumb: "Datenschutzerklärung",
    title: "Datenschutzerklärung",
    metaTitle: "Datenschutzerklärung | Translator",
    metaDescription:
      "Datenschutzerklärung für Translator von Stage5 Tools. Erfahre, wie wir deine Daten erfassen, nutzen und schützen.",
    keywords: ["Translator Datenschutz", "Stage5 Tools Datenschutz", "Datenrichtlinie"],
    intro:
      "Diese Datenschutzerklärung erläutert, wie Stage5 Tools Informationen erfasst, nutzt und schützt, wenn du Translator verwendest.",
    sections: [
      {
        title: "Welche Informationen wir erfassen",
        body: "Wir erfassen Informationen, die du direkt bereitstellst, Nutzungsdaten zur Verbesserung von Translator sowie technische Daten, die für Downloads und KI-Funktionen erforderlich sind.",
      },
      {
        title: "Wie wir Informationen verwenden",
        body: "Wir verwenden Daten, um die App zu betreiben, Support zu leisten, Zahlungen abzuwickeln, Funktionen zu verbessern und den Dienst sicher zu halten.",
      },
      {
        title: "Weitergabe und Drittanbieter",
        body: "Wir geben Daten nur an vertrauenswürdige Anbieter weiter, die für die Bereitstellung des Dienstes erforderlich sind, etwa für Hosting, Analytik und Zahlungsabwicklung.",
      },
      {
        title: "Speicherdauer",
        body: "Wir speichern Daten nur so lange, wie es für die Bereitstellung des Dienstes und die Erfüllung gesetzlicher Pflichten notwendig ist.",
      },
      {
        title: "Deine Rechte",
        body: "Du kannst Auskunft, Berichtigung oder Löschung deiner Daten verlangen.",
      },
      {
        title: "Änderungen an dieser Richtlinie",
        body: "Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Änderungen werden mit einem neuen Gültigkeitsdatum auf dieser Seite veröffentlicht.",
      },
      {
        title: "Kontakt",
        body: "Wenn du Fragen zu dieser Richtlinie hast, schreibe an mikey@stage5.tools.",
      },
    ],
  },
  pt: {
    breadcrumb: "Política de privacidade",
    title: "Política de privacidade",
    metaTitle: "Política de privacidade | Translator",
    metaDescription:
      "Política de privacidade do Translator da Stage5 Tools. Saiba como coletamos, usamos e protegemos seus dados.",
    keywords: [
      "política de privacidade do Translator",
      "privacidade Stage5 Tools",
      "política de dados",
    ],
    intro:
      "Esta Política de privacidade explica como a Stage5 Tools coleta, usa e protege informações quando você utiliza o Translator.",
    sections: [
      {
        title: "Informações que coletamos",
        body: "Coletamos informações fornecidas diretamente por você, dados de uso para melhorar o Translator e dados técnicos necessários para oferecer downloads e recursos de IA.",
      },
      {
        title: "Como usamos as informações",
        body: "Usamos os dados para operar o aplicativo, oferecer suporte, processar pagamentos, melhorar recursos e manter o serviço seguro.",
      },
      {
        title: "Compartilhamento e terceiros",
        body: "Compartilhamos dados apenas com provedores confiáveis necessários para prestar o serviço, como hospedagem, análise e processamento de pagamentos.",
      },
      {
        title: "Retenção de dados",
        body: "Mantemos os dados apenas pelo tempo necessário para prestar o serviço e cumprir obrigações legais.",
      },
      {
        title: "Seus direitos",
        body: "Você pode solicitar acesso, correção ou exclusão dos seus dados.",
      },
      {
        title: "Alterações nesta política",
        body: "Podemos atualizar esta política periodicamente. As mudanças serão publicadas nesta página com uma nova data de vigência.",
      },
      {
        title: "Contato",
        body: "Se você tiver dúvidas sobre esta política, envie um e-mail para mikey@stage5.tools.",
      },
    ],
  },
  vi: {
    breadcrumb: "Chính sách quyền riêng tư",
    title: "Chính sách quyền riêng tư",
    metaTitle: "Chính sách quyền riêng tư | Translator",
    metaDescription:
      "Chính sách quyền riêng tư của Translator từ Stage5 Tools. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.",
    keywords: [
      "chính sách quyền riêng tư Translator",
      "quyền riêng tư Stage5 Tools",
      "chính sách dữ liệu",
    ],
    intro:
      "Chính sách quyền riêng tư này giải thích cách Stage5 Tools thu thập, sử dụng và bảo vệ thông tin khi bạn dùng Translator.",
    sections: [
      {
        title: "Thông tin chúng tôi thu thập",
        body: "Chúng tôi thu thập thông tin bạn cung cấp trực tiếp, dữ liệu sử dụng để cải thiện Translator và dữ liệu kỹ thuật cần thiết để cung cấp tính năng tải xuống và AI.",
      },
      {
        title: "Cách chúng tôi sử dụng thông tin",
        body: "Chúng tôi dùng dữ liệu để vận hành ứng dụng, hỗ trợ khách hàng, xử lý thanh toán, cải thiện tính năng và giữ cho dịch vụ an toàn.",
      },
      {
        title: "Chia sẻ và bên thứ ba",
        body: "Chúng tôi chỉ chia sẻ dữ liệu với các nhà cung cấp đáng tin cậy cần thiết để cung cấp dịch vụ, chẳng hạn như lưu trữ, phân tích và xử lý thanh toán.",
      },
      {
        title: "Lưu trữ dữ liệu",
        body: "Chúng tôi chỉ lưu giữ dữ liệu trong thời gian cần thiết để cung cấp dịch vụ và tuân thủ các nghĩa vụ pháp lý.",
      },
      {
        title: "Quyền của bạn",
        body: "Bạn có thể yêu cầu truy cập, chỉnh sửa hoặc xóa dữ liệu của mình.",
      },
      {
        title: "Thay đổi đối với chính sách này",
        body: "Chúng tôi có thể cập nhật chính sách này theo thời gian. Mọi cập nhật sẽ được đăng trên trang này cùng ngày có hiệu lực mới.",
      },
      {
        title: "Liên hệ",
        body: "Nếu bạn có câu hỏi về chính sách này, hãy email tới mikey@stage5.tools.",
      },
    ],
  },
};

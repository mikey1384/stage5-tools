import type { Locale } from "./locales";

type LegalSection = {
  title: string;
  body: string;
  links?: Array<{ label: string; href: string }>;
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
  "en": {
    "breadcrumb": "Privacy Policy",
    "title": "Privacy Policy",
    "metaTitle": "Privacy Policy | Translator",
    "metaDescription": "Privacy policy for Translator by Stage5 Tools. Learn how we collect, use, and protect your data.",
    "keywords": [
      "Translator privacy policy",
      "Stage5 Tools privacy",
      "data policy"
    ],
    "intro": "This Privacy Policy explains how Stage5 Tools collects, uses, and protects information when you use the Translator app, translator.tools, or stage5.tools, including Watch. Policy revision: 27 September 2026.",
    "sections": [
      {
        "title": "Who operates Translator",
        "body": "Stage5 Tools LLC, a Wyoming company in the United States, operates Translator, translator.tools and stage5.tools. This policy covers the desktop app and these services, including Watch and Reflect. Echo has a separate policy linked from its product page. Questions and privacy requests: mikey@stage5.tools."
      },
      {
        "title": "Local files and network connections",
        "body": "Opening, playing, editing or exporting local media and subtitles does not by itself upload all your files. Translator stores settings, projects, outputs and temporary files on your computer. Network features connect to Stage5, download/update hosts or the source website you request. Those connections expose technical information such as IP address, app/device details, request time and requested resource. Service identifiers support authentication, credits and abuse prevention."
      },
      {
        "title": "Media and content sent for AI features",
        "body": "Cloud transcription sends audio, usually extracted from your video. Translation, review and summaries send subtitle text, prompts and relevant context. Dubbing sends text and voice settings and returns generated audio. Video discovery or web-assisted work can send search queries, source URLs, titles and other relevant metadata. These transfers perform the feature you request. Credit-based features use Stage5 services hosted through Cloudflare and our Fly.io relay, which route requests to OpenAI, Anthropic/Claude or ElevenLabs as appropriate. Direct bring-your-own-key requests send content and authentication to the selected provider. Using your own key does not mean processing stays on-device. Provider retention and any use for model improvement depend on the provider, product and account terms; API access and an agent subscription may follow different rules.",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "Connected Claude and Codex agents",
        "body": "When you connect Claude Code, Claude Desktop, Codex or another compatible agent, its authorized tools can receive project context, subtitles, prompts, source URLs, file paths and files you make accessible, including audio, video or images. The agent client may send that material to its model provider. A local tool connection or an existing subscription is not a promise of local-only AI. The agent's permissions, account settings, retention and applicable provider terms also govern that workflow."
      },
      {
        "title": "Provider credentials and protection",
        "body": "Saved OpenAI, Anthropic and ElevenLabs API keys are encrypted in local app settings using app-level AES-256-GCM encryption. This is not OS keychain storage and does not protect against an attacker with access to your app files and machine. Translator decrypts keys when needed and sends them to the respective provider for key checks or direct API requests over HTTPS. External agents manage their own account credentials. You can remove saved keys in Settings; removing a local copy does not revoke the key at its provider."
      },
      {
        "title": "Payments, credits and support",
        "body": "Stripe processes checkout and the payment details you enter there. Stage5 processes transaction references and status, purchases, credit balances and usage, device/account identifiers, entitlements and credit-transfer records to deliver purchases, move eligible credits, issue refunds, prevent fraud and keep required records. Contact information supplied at checkout or to support may also be processed. These necessary service and payment records continue when optional analytics is off and are separate from analytics purchase events.",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "Optional app analytics",
        "body": "Translator 1.21.0 offers optional analytics in Settings → Privacy, off by default. When enabled, Stage5 can send bounded usage, reliability and purchase events to Google Analytics, including app version, platform, language, feature names, outcomes and purchase totals. Events use a pseudonymous installation identifier; they are not anonymous. The analytics payload excludes media, subtitle/prompt contents, API keys and local file paths. Turning the setting off stops new optional reports and clears pending reports; the app shows if it cannot confirm the server preference. This does not erase events already delivered or required billing records."
      },
      {
        "title": "Retention and deletion",
        "body": "Local files and saved credentials remain until you remove them or use the relevant app/system cleanup controls. Cloud processing can create temporary audio, text, generated results and job/retry records. Their lifetime depends on job completion, recovery and cleanup; we do not promise zero retention or a universal deletion deadline. Unsent optional app analytics expire after 72 hours. Stage5 schedules detailed delivered analytics for redaction after 90 days, retaining minimal delivery receipts; cleanup is batched, and a closed app clears expired local reports when it next runs. Payment, credit, security and support records are retained for their operational purpose and applicable legal obligations. Providers and connected agents apply their own retention/deletion terms and account settings. Contact us about access or deletion of Stage5-held records."
      },
      {
        "title": "Websites, embedded videos and advertising",
        "body": "Website analytics choices are separate from the app setting; the disclosure and Analytics choices control on this page explain Google collection and withdrawal. Embedded YouTube players can connect to Google/YouTube when loaded, exposing IP/device information and allowing provider cookies or advertising under its terms. Website analytics permission does not control all embedded-player processing. Reflect writing stays in the browser; saving a draft stores it there until removed. The desktop app does not show third-party advertising. Stage5 website ads are currently disabled; this does not disable advertising on third-party video platforms.",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "Your controls",
        "body": "Use local editing without requesting cloud AI, choose the supported provider and workflow in Settings, remove or revoke provider keys, limit directories and files accessible to connected agents, or disconnect those agents. You can cancel supported ongoing operations, but cancellation cannot recall data already received elsewhere. Change optional app analytics in Settings → Privacy and website analytics through Analytics choices. Delete local files and drafts using their storage controls. Contact mikey@stage5.tools for help with Stage5 records; requests concerning a directly used provider or agent account may also require that provider's controls."
      },
      {
        "title": "International processing, rights and updates",
        "body": "Stage5 is based in the United States, and providers may process information in other countries. The provider and account terms depend on the workflow you select; this policy does not promise a particular storage region or zero-data-retention arrangement. Depending on applicable law, you may request access, correction, deletion, restriction or portability, withdraw consent, object to processing or contact a data-protection authority. We may verify your request and retain records required by law. Contact mikey@stage5.tools. We will date substantive policy updates when published."
      }
    ]
  },
  "ko": {
    "breadcrumb": "개인정보 처리방침",
    "title": "개인정보 처리방침",
    "metaTitle": "개인정보 처리방침 | Translator",
    "metaDescription": "Stage5 Tools의 Translator 개인정보 처리방침입니다. 수집 정보와 활용 방식, 보호 정책을 확인하세요.",
    "keywords": [
      "Translator 개인정보 처리방침",
      "Stage5 Tools 개인정보",
      "데이터 보호 정책"
    ],
    "intro": "본 개인정보 처리방침은 Stage5 Tools가 Translator 앱, translator.tools, stage5.tools 및 Watch 이용 과정에서 정보를 수집, 이용, 보호하는 방법을 설명합니다. 정책 개정일: 2026년 9월 27일.",
    "sections": [
      {
        "title": "Translator 운영자",
        "body": "미국 와이오밍주 법인 Stage5 Tools LLC가 Translator, translator.tools 및 stage5.tools를 운영합니다. 이 정책은 데스크톱 앱과 Watch, Reflect를 포함한 관련 서비스에 적용됩니다. Echo에는 제품 페이지에 연결된 별도 정책이 있습니다. 문의 및 개인정보 관련 요청: mikey@stage5.tools."
      },
      {
        "title": "로컬 파일과 네트워크 연결",
        "body": "로컬 미디어와 자막을 열고 재생·편집·내보내는 것만으로 모든 파일이 업로드되지는 않습니다. Translator는 설정, 프로젝트, 결과물과 임시 파일을 컴퓨터에 저장합니다. 네트워크 기능은 Stage5, 다운로드·업데이트 호스트 또는 요청한 원본 웹사이트에 연결됩니다. 연결 시 IP 주소, 앱·기기 정보, 요청 시각과 요청 리소스 등의 기술 정보가 전달됩니다. 서비스 식별자는 인증, 크레딧 관리와 악용 방지에 사용됩니다."
      },
      {
        "title": "AI 기능으로 전송되는 미디어와 콘텐츠",
        "body": "클라우드 전사는 보통 영상에서 추출한 오디오를 전송합니다. 번역·검토·요약은 자막 텍스트, 프롬프트와 관련 맥락을 전송합니다. 더빙은 텍스트와 음성 설정을 전송하고 생성된 오디오를 받습니다. 영상 탐색이나 웹 기반 작업은 검색어, 원본 URL, 제목과 관련 메타데이터를 전송할 수 있습니다. 이는 요청한 기능을 수행하기 위한 처리입니다. 크레딧 기반 기능은 Cloudflare의 Stage5 서비스와 Fly.io 릴레이를 거쳐 필요에 따라 OpenAI, Anthropic/Claude 또는 ElevenLabs로 요청을 전달합니다. 개인 API 키를 사용하는 직접 요청은 선택한 제공업체에 콘텐츠와 인증 정보를 보냅니다. 개인 키 사용이 기기 내 처리를 뜻하지는 않습니다. 제공업체의 보관과 모델 개선 목적 사용 여부는 제공업체·제품·계정 약관에 따라 달라집니다. API 이용과 에이전트 구독에는 서로 다른 규칙이 적용될 수 있습니다.",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "연결된 Claude 및 Codex 에이전트",
        "body": "Claude Code, Claude Desktop, Codex 또는 호환 에이전트를 연결하면 허용된 도구가 프로젝트 맥락, 자막, 프롬프트, 원본 URL, 파일 경로와 접근을 허용한 오디오·영상·이미지 등의 파일을 받을 수 있습니다. 에이전트 클라이언트는 이를 모델 제공업체에 전송할 수 있습니다. 로컬 도구 연결이나 기존 구독이 로컬 전용 AI를 보장하지 않습니다. 해당 작업에는 에이전트 권한, 계정 설정, 보관 방식과 제공업체 약관도 적용됩니다."
      },
      {
        "title": "제공업체 인증 정보와 보호",
        "body": "저장된 OpenAI, Anthropic 및 ElevenLabs API 키는 앱 수준의 AES-256-GCM 암호화를 사용해 로컬 앱 설정에 보관됩니다. 운영체제 키체인 저장 방식이 아니며, 앱 파일과 기기에 접근할 수 있는 공격자로부터 보호를 보장하지 않습니다. Translator는 필요할 때 키를 복호화하고 HTTPS를 통해 해당 제공업체에 키 확인 또는 직접 API 요청을 보냅니다. 외부 에이전트는 자체 계정 인증 정보를 관리합니다. 설정에서 저장된 키를 삭제할 수 있지만, 로컬 사본 삭제가 제공업체의 키를 폐기하지는 않습니다."
      },
      {
        "title": "결제, 크레딧과 지원",
        "body": "Stripe가 결제 절차와 그 과정에서 입력하는 결제 정보를 처리합니다. Stage5는 구매 이행, 이전 가능한 크레딧 이동, 환불, 사기 방지와 필수 기록 관리를 위해 거래 참조·상태, 구매 내역, 크레딧 잔액·사용량, 기기·계정 식별자, 이용 권한과 크레딧 이전 기록을 처리합니다. 결제나 고객지원에 제공한 연락처도 처리할 수 있습니다. 필수 서비스·결제 기록은 선택적 분석을 꺼도 계속 처리되며, 분석용 구매 이벤트와 별개입니다.",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "선택적 앱 분석",
        "body": "Translator 1.21.0의 설정 → 개인정보 보호에서 선택적 분석을 제공하며 기본값은 꺼짐입니다. 활성화하면 Stage5는 앱 버전, 플랫폼, 언어, 기능명, 결과와 구매 총액 등을 포함하는 제한된 사용·안정성·구매 이벤트를 Google Analytics에 보낼 수 있습니다. 이벤트는 가명 처리된 설치 식별자를 사용하며 익명 정보는 아닙니다. 분석 데이터에는 미디어, 자막·프롬프트 내용, API 키와 로컬 파일 경로가 포함되지 않습니다. 끄면 새 선택적 보고가 중단되고 대기 중인 보고가 삭제됩니다. 서버의 설정 확인이 되지 않으면 앱이 표시합니다. 이미 전달된 이벤트나 필수 결제 기록은 삭제되지 않습니다."
      },
      {
        "title": "보관과 삭제",
        "body": "로컬 파일과 저장된 인증 정보는 직접 삭제하거나 관련 앱·시스템 정리 기능을 사용할 때까지 남습니다. 클라우드 처리는 임시 오디오·텍스트, 생성 결과와 작업·재시도 기록을 만들 수 있습니다. 보관 기간은 작업 완료, 복구와 정리 절차에 따라 달라지며, 무보관이나 모든 데이터에 동일한 삭제 기한을 보장하지 않습니다. 전송되지 않은 선택적 앱 분석은 72시간 후 만료됩니다. Stage5는 전달된 분석의 상세 정보를 90일 후 삭제·비식별화하는 정리를 예약하며 최소한의 전달 확인 기록은 유지합니다. 정리는 일괄 처리되고 종료된 앱의 만료된 로컬 보고는 다음 실행 시 정리됩니다. 결제·크레딧·보안·지원 기록은 운영 목적과 관련 법적 의무에 필요한 동안 보관됩니다. 제공업체와 연결 에이전트에는 자체 보관·삭제 약관과 계정 설정이 적용됩니다. Stage5 보유 기록의 열람·삭제는 문의해 주세요."
      },
      {
        "title": "웹사이트, 삽입 영상과 광고",
        "body": "웹사이트 분석 선택은 앱 설정과 별개이며, 이 페이지의 안내와 분석 선택 기능에서 Google의 수집 및 동의 철회를 설명합니다. 삽입된 YouTube 플레이어가 로드되면 Google/YouTube에 연결되어 IP·기기 정보를 전달하고 해당 약관에 따라 쿠키나 광고를 사용할 수 있습니다. 웹사이트 분석 허용이 삽입 플레이어의 모든 처리를 제어하지는 않습니다. Reflect 글은 브라우저에 남으며, 초안을 저장하면 삭제할 때까지 해당 브라우저에 보관됩니다. 데스크톱 앱은 제3자 광고를 표시하지 않습니다. 현재 Stage5 웹사이트 광고는 꺼져 있지만, 제3자 영상 플랫폼의 광고까지 꺼지는 것은 아닙니다.",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "사용자가 할 수 있는 설정",
        "body": "클라우드 AI를 요청하지 않고 로컬 편집을 사용하거나, 설정에서 지원되는 제공업체와 작업 방식을 선택하고, 제공업체 키를 삭제·폐기하거나, 연결된 에이전트가 접근할 폴더와 파일을 제한하거나 연결을 해제할 수 있습니다. 지원되는 진행 중 작업을 취소할 수 있지만 이미 외부에 전달된 데이터는 회수되지 않습니다. 앱 분석은 설정 → 개인정보 보호에서, 웹사이트 분석은 분석 선택에서 변경하세요. 로컬 파일과 초안은 해당 저장소의 기능으로 삭제하세요. Stage5 기록 관련 도움은 mikey@stage5.tools로 요청할 수 있습니다. 직접 사용하는 제공업체나 에이전트 계정의 데이터는 해당 제공업체의 기능도 사용해야 할 수 있습니다."
      },
      {
        "title": "국외 처리, 권리와 업데이트",
        "body": "Stage5는 미국에 있으며 제공업체는 다른 국가에서 정보를 처리할 수 있습니다. 제공업체와 계정 약관은 선택한 작업 방식에 따라 달라지며, 이 정책은 특정 저장 지역이나 무보관 약정을 보장하지 않습니다. 적용 법률에 따라 열람, 정정, 삭제, 처리 제한, 이동권, 동의 철회, 처리에 대한 이의 제기 또는 개인정보 보호 기관에 문의할 권리가 있을 수 있습니다. 요청을 확인하기 위한 절차를 거칠 수 있으며 법률상 필요한 기록은 보관할 수 있습니다. 문의: mikey@stage5.tools. 정책에 중요한 변경이 있을 때 게시 날짜를 표시합니다."
      }
    ]
  },
  "es": {
    "breadcrumb": "Política de privacidad",
    "title": "Política de privacidad",
    "metaTitle": "Política de privacidad | Translator",
    "metaDescription": "Política de privacidad de Translator de Stage5 Tools. Aprende cómo recopilamos, usamos y protegemos tus datos.",
    "keywords": [
      "política de privacidad de Translator",
      "privacidad Stage5 Tools",
      "política de datos"
    ],
    "intro": "Esta Política de privacidad explica cómo Stage5 Tools recopila, usa y protege la información cuando utilizas la aplicación Translator, translator.tools o stage5.tools, incluido Watch. Revisión de la política: 27 de septiembre de 2026.",
    "sections": [
      {
        "title": "Quién opera Translator",
        "body": "Stage5 Tools LLC, una empresa de Wyoming, Estados Unidos, opera Translator, translator.tools y stage5.tools. Esta política cubre la aplicación de escritorio y estos servicios, incluidos Watch y Reflect. Echo tiene su propia política enlazada desde su página de producto. Consultas y solicitudes de privacidad: mikey@stage5.tools."
      },
      {
        "title": "Archivos locales y conexiones de red",
        "body": "Abrir, reproducir, editar o exportar archivos locales y subtítulos no sube automáticamente todos tus archivos. Translator guarda ajustes, proyectos, resultados y archivos temporales en tu equipo. Las funciones de red se conectan a Stage5, a servidores de descarga y actualización o al sitio de origen que solicites. Esas conexiones revelan datos técnicos como IP, detalles de la aplicación y el dispositivo, hora y recurso solicitado. Los identificadores del servicio permiten la autenticación, los créditos y la prevención de abusos."
      },
      {
        "title": "Contenido enviado a las funciones de IA",
        "body": "La transcripción en la nube envía audio, normalmente extraído de tu vídeo. La traducción, revisión y los resúmenes envían subtítulos, instrucciones y contexto relevante. El doblaje envía texto y ajustes de voz y recibe audio generado. La búsqueda de vídeos y el trabajo asistido por la web pueden enviar consultas, URL de origen, títulos y otros metadatos. Estas transferencias ejecutan la función solicitada. Las funciones con créditos usan los servicios de Stage5 alojados en Cloudflare y nuestro intermediario en Fly.io, que remiten las solicitudes a OpenAI, Anthropic/Claude o ElevenLabs según corresponda. Las solicitudes directas con tu propia clave envían contenido y autenticación al proveedor elegido. Usar tu clave no significa que todo se procese en tu dispositivo. La conservación del proveedor y cualquier uso para mejorar modelos dependen del proveedor, producto y condiciones de la cuenta; el acceso API y una suscripción de agente pueden tener reglas distintas.",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "Agentes Claude y Codex conectados",
        "body": "Al conectar Claude Code, Claude Desktop, Codex u otro agente compatible, sus herramientas autorizadas pueden recibir contexto del proyecto, subtítulos, instrucciones, URL, rutas y archivos a los que permitas acceder, incluidos audio, vídeo e imágenes. El cliente del agente puede enviarlos a su proveedor de modelos. Una conexión local o una suscripción existente no garantizan IA exclusivamente local. También se aplican los permisos, ajustes de cuenta, conservación y condiciones del agente y su proveedor."
      },
      {
        "title": "Credenciales de proveedores y protección",
        "body": "Las claves API guardadas de OpenAI, Anthropic y ElevenLabs se cifran en los ajustes locales mediante AES-256-GCM a nivel de aplicación. No se guardan en el llavero del sistema operativo y esto no protege frente a un atacante con acceso al equipo y los archivos de la aplicación. Translator las descifra cuando se necesitan y las envía por HTTPS al proveedor correspondiente para comprobarlas o hacer solicitudes directas. Los agentes externos gestionan sus propias credenciales. Puedes borrar las claves guardadas en Ajustes; borrar una copia local no revoca la clave en el proveedor."
      },
      {
        "title": "Pagos, créditos y asistencia",
        "body": "Stripe procesa el pago y los datos de pago que introduces allí. Stage5 procesa referencias y estados de transacciones, compras, saldos y uso de créditos, identificadores de dispositivo o cuenta, derechos de uso y registros de transferencias para entregar compras, mover créditos elegibles, efectuar reembolsos, prevenir fraude y conservar registros necesarios. También puede procesar datos de contacto facilitados al pagar o pedir ayuda. Estos registros necesarios continúan aunque desactives los análisis opcionales y son distintos de los eventos analíticos de compra.",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "Análisis opcionales de la aplicación",
        "body": "Translator 1.21.0 ofrece análisis opcionales en Ajustes → Privacidad, desactivados por defecto. Si los activas, Stage5 puede enviar a Google Analytics eventos de uso, fiabilidad y compras con campos limitados: versión, plataforma, idioma, funciones, resultados e importes de compra. Utilizan un identificador seudónimo de instalación; no son anónimos. No incluyen archivos multimedia, contenido de subtítulos o instrucciones, claves API ni rutas locales. Desactivarlos detiene nuevos informes opcionales y borra los pendientes; la aplicación indica si no puede confirmar la preferencia del servidor. No elimina eventos ya entregados ni registros de pago obligatorios."
      },
      {
        "title": "Conservación y eliminación",
        "body": "Los archivos y credenciales locales permanecen hasta que los elimines o uses las funciones de limpieza correspondientes. La nube puede crear audio, texto, resultados y registros temporales de tareas y reintentos. Su duración depende de la finalización, recuperación y limpieza; no prometemos retención cero ni un plazo universal de borrado. Los análisis opcionales sin enviar caducan a las 72 horas. Stage5 programa la supresión de detalles analíticos entregados después de 90 días, conservando recibos mínimos de entrega. La limpieza se hace por lotes; si la aplicación está cerrada, limpia los informes locales caducados al volver a ejecutarse. Los registros de pagos, créditos, seguridad y asistencia se conservan por su finalidad operativa y las obligaciones legales aplicables. Proveedores y agentes aplican sus propias condiciones y ajustes de conservación y eliminación. Contáctanos para acceder a registros de Stage5 o solicitar su borrado."
      },
      {
        "title": "Sitios web, vídeos insertados y publicidad",
        "body": "Las preferencias analíticas de la web son independientes de la aplicación; el aviso y el control de opciones analíticas de esta página explican la recogida de Google y cómo retirar el permiso. Los reproductores de YouTube pueden conectarse a Google/YouTube al cargarse, revelando IP y datos del dispositivo, y usar cookies o publicidad según sus condiciones. Permitir análisis web no controla todo el procesamiento del reproductor. El texto de Reflect permanece en el navegador; guardar un borrador lo conserva allí hasta borrarlo. La aplicación de escritorio no muestra publicidad de terceros. Actualmente los anuncios de los sitios de Stage5 están desactivados; esto no desactiva los de plataformas externas de vídeo.",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "Tus controles",
        "body": "Puedes editar localmente sin pedir IA en la nube, elegir proveedor y flujo compatibles en Ajustes, borrar o revocar claves, limitar carpetas y archivos accesibles a agentes o desconectarlos. Puedes cancelar operaciones compatibles en curso, pero no recuperar datos ya recibidos por terceros. Cambia los análisis de la aplicación en Ajustes → Privacidad y los de la web en sus opciones analíticas. Borra archivos y borradores mediante sus controles de almacenamiento. Para registros de Stage5, escribe a mikey@stage5.tools; los datos de una cuenta de proveedor o agente usada directamente también pueden requerir sus propios controles."
      },
      {
        "title": "Tratamiento internacional, derechos y cambios",
        "body": "Stage5 está en Estados Unidos y sus proveedores pueden tratar información en otros países. Las condiciones del proveedor y de la cuenta dependen del flujo elegido; esta política no garantiza una región de almacenamiento ni un acuerdo de retención cero. Según la ley aplicable, puedes solicitar acceso, rectificación, eliminación, limitación o portabilidad, retirar consentimiento, oponerte o acudir a una autoridad de protección de datos. Podemos verificar tu solicitud y conservar registros exigidos por ley. Contacto: mikey@stage5.tools. Las modificaciones sustanciales de la política llevarán fecha al publicarse."
      }
    ]
  },
  "ja": {
    "breadcrumb": "プライバシーポリシー",
    "title": "プライバシーポリシー",
    "metaTitle": "プライバシーポリシー | Translator",
    "metaDescription": "Stage5 Tools の Translator に関するプライバシーポリシーです。データの収集、利用、保護方法をご確認ください。",
    "keywords": [
      "Translator プライバシーポリシー",
      "Stage5 Tools プライバシー",
      "データポリシー"
    ],
    "intro": "本プライバシーポリシーは、Translator アプリ、translator.tools、stage5.tools（Watch を含む）の利用時に Stage5 Tools が情報をどのように収集、利用、保護するかを説明するものです。 方針改定日：2026年9月27日。",
    "sections": [
      {
        "title": "Translatorの運営者",
        "body": "米国ワイオミング州の会社Stage5 Tools LLCがTranslator、translator.tools、stage5.toolsを運営しています。本方針はデスクトップアプリと、Watch・Reflectを含む関連サービスに適用されます。Echoには製品ページからリンクされた別の方針があります。お問い合わせ・個人情報に関するご請求：mikey@stage5.tools。"
      },
      {
        "title": "ローカルファイルとネットワーク接続",
        "body": "ローカルのメディアや字幕を開く、再生する、編集する、書き出すだけで、すべてのファイルがアップロードされることはありません。設定、プロジェクト、出力、作業用ファイルはコンピューターに保存されます。ネットワーク機能はStage5、ダウンロード・更新用ホスト、または指定した元のウェブサイトに接続します。その際、IPアドレス、アプリ・端末情報、リクエスト時刻や対象リソースなどの技術情報が伝わります。サービス識別子は認証、クレジット管理、不正利用防止に使われます。"
      },
      {
        "title": "AI機能で送信されるメディアと内容",
        "body": "クラウド文字起こしは通常、動画から抽出した音声を送信します。翻訳・レビュー・要約は字幕テキスト、プロンプト、関連する文脈を送信します。吹き替えはテキストと音声設定を送り、生成音声を受け取ります。動画検索やウェブを利用した作業では検索語、元のURL、タイトルなどのメタデータを送信することがあります。目的は依頼した機能の実行です。クレジット利用機能はCloudflare上のStage5サービスとFly.ioの中継を利用し、適宜OpenAI、Anthropic/Claude、ElevenLabsへ送信します。自分のAPIキーによる直接リクエストでは、選択した提供者へ内容と認証情報を送ります。自分のキーの利用は端末内処理を意味しません。 提供者の保存やモデル改善への利用は提供者・製品・アカウントの条件によって異なり、APIとエージェントのサブスクリプションには別の規則が適用される場合があります。",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "接続したClaude・Codexエージェント",
        "body": "Claude Code、Claude Desktop、Codexなどの対応エージェントを接続すると、許可されたツールはプロジェクトの文脈、字幕、プロンプト、元のURL、ファイルパスと、アクセスを許可した音声・動画・画像などのファイルを受け取れます。エージェントのクライアントがこれらをモデル提供者へ送信することがあります。ローカルのツール接続や既存のサブスクリプションは、AIがローカルだけで動くことを保証しません。エージェントの権限、アカウント設定、保存方針、提供者の規約も適用されます。"
      },
      {
        "title": "提供者の認証情報と保護",
        "body": "保存するOpenAI、Anthropic、ElevenLabsのAPIキーは、アプリ単位のAES-256-GCM暗号化を用いてローカル設定に保存されます。OSのキーチェーンではなく、アプリのファイルと端末にアクセスできる攻撃者からの保護は保証しません。必要な際に復号し、HTTPSでキー確認や直接APIリクエストのために各提供者へ送信します。外部エージェントは独自に認証情報を管理します。設定から保存済みキーを削除できますが、ローカルのコピーを消しても提供者側でキーが失効するわけではありません。"
      },
      {
        "title": "支払い、クレジット、サポート",
        "body": "Stripeが決済手続きとそこで入力する支払い情報を処理します。Stage5は購入の提供、移行可能なクレジットの移動、返金、不正防止、必要な記録管理のため、取引の参照番号・状態、購入、クレジット残高・使用量、端末・アカウント識別子、利用権、移行記録を処理します。決済やサポートに提供した連絡先情報も処理する場合があります。これらの必要なサービス・支払い記録は任意の分析をオフにしても処理され、分析用の購入イベントとは別です。",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "任意のアプリ分析",
        "body": "Translator 1.21.0では設定のプライバシー項目に任意の分析機能があり、初期状態はオフです。有効にすると、Stage5はアプリ版、プラットフォーム、言語、機能名、結果、購入総額など、項目を限定した利用・信頼性・購入イベントをGoogle Analyticsへ送信できます。仮名化したインストール識別子を使うため、匿名データではありません。分析データにはメディア、字幕・プロンプトの内容、APIキー、ローカルのパスは含まれません。オフにすると新たな任意レポートを停止し、未送信分を消去します。サーバー側の設定を確認できない場合はアプリに表示されます。送信済みイベントや必要な決済記録は消えません。"
      },
      {
        "title": "保存と削除",
        "body": "ローカルファイルや保存した認証情報は、ご自身で削除するか該当するアプリ・システムの整理機能を使うまで残ります。クラウド処理では一時的な音声・テキスト、生成結果、ジョブ・再試行記録が作られる場合があります。期間は処理完了、復旧、整理により異なり、ゼロ保持や一律の削除期限は保証しません。未送信の任意アプリ分析は72時間後に失効します。Stage5は送信済みの分析詳細を90日後に削除・編集する処理を予定し、最小限の送信確認記録は保持します。処理は一括実行され、終了中のアプリ内で期限が切れたレポートは次回起動時に整理されます。支払い・クレジット・セキュリティ・サポート記録は運営上の目的と法的義務のため保存します。提供者と接続エージェントには各自の保存・削除条件や設定が適用されます。Stage5の記録の開示・削除はお問い合わせください。"
      },
      {
        "title": "ウェブサイト、埋め込み動画、広告",
        "body": "ウェブの分析設定はアプリと別です。このページの説明と分析の選択機能でGoogleによる収集や同意撤回を説明しています。YouTubeの埋め込みプレーヤーは読み込み時にGoogle/YouTubeへ接続し、IP・端末情報が伝わり、その規約に基づきCookieや広告が利用される場合があります。ウェブ分析の許可だけでプレーヤーの処理すべてを制御することはできません。Reflectの文章はブラウザー内にあり、下書きを保存すると削除するまでそこに残ります。デスクトップアプリに第三者広告はありません。Stage5のウェブ広告は現在無効ですが、外部の動画プラットフォームの広告まで無効にはなりません。",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "利用者が選べること",
        "body": "クラウドAIを使わずローカル編集を行う、設定で対応する提供者と処理方法を選ぶ、APIキーを削除・失効させる、エージェントがアクセスできるフォルダーやファイルを制限する、接続を解除することができます。対応する進行中の処理はキャンセルできますが、送信済みデータは取り戻せません。アプリ分析は設定のプライバシー項目、ウェブ分析は分析の選択機能で変更してください。ローカルファイルや下書きは保存先の機能で削除できます。Stage5の記録はmikey@stage5.toolsへお問い合わせください。直接利用する提供者やエージェントのアカウントについては、その提供者側の操作が必要な場合もあります。"
      },
      {
        "title": "国外処理、権利、変更",
        "body": "Stage5は米国を拠点とし、提供者が他国で情報を処理する場合があります。適用条件は選択した処理方法とアカウントによって異なり、特定の保存地域やゼロ保持の契約を保証するものではありません。適用法により、開示、訂正、削除、制限、移行、同意撤回、異議申立て、監督機関への相談が認められる場合があります。請求内容を確認し、法令上必要な記録を保持する場合があります。連絡先：mikey@stage5.tools。重要な変更は公開時に日付を記載します。"
      }
    ]
  },
  "zh": {
    "breadcrumb": "隐私政策",
    "title": "隐私政策",
    "metaTitle": "隐私政策 | Translator",
    "metaDescription": "Stage5 Tools 旗下 Translator 的隐私政策。了解我们如何收集、使用和保护你的数据。",
    "keywords": [
      "Translator 隐私政策",
      "Stage5 Tools 隐私",
      "数据政策"
    ],
    "intro": "本隐私政策说明了当你使用 Translator 应用、translator.tools 或 stage5.tools（包括 Watch）时，Stage5 Tools 如何收集、使用和保护相关信息。 政策修订日期：2026年9月27日。",
    "sections": [
      {
        "title": "Translator 的运营方",
        "body": "Stage5 Tools LLC 是一家位于美国怀俄明州的公司，运营 Translator、translator.tools 和 stage5.tools。本政策适用于桌面应用及这些服务，包括 Watch 和 Reflect。Echo 使用其产品页面链接的独立政策。问题和隐私请求请联系 mikey@stage5.tools。"
      },
      {
        "title": "本地文件与网络连接",
        "body": "打开、播放、编辑或导出本地媒体和字幕，并不会自动上传你的全部文件。Translator 在你的电脑上保存设置、项目、输出和临时文件。网络功能会连接 Stage5、下载或更新服务器，或你请求的来源网站。这些连接会传递 IP 地址、应用及设备信息、请求时间和资源等技术信息。服务标识符用于身份验证、额度管理和防止滥用。"
      },
      {
        "title": "AI 功能会发送哪些内容",
        "body": "云端转写会发送音频，通常从视频中提取。翻译、审校和摘要会发送字幕文本、提示词和相关上下文。配音会发送文本与语音设置，并接收生成的音频。视频搜索或联网辅助任务可能发送搜索词、来源 URL、标题及其他相关元数据。这些传输用于完成你请求的功能。使用额度的功能通过 Cloudflare 上的 Stage5 服务及 Fly.io 中继，按功能向 OpenAI、Anthropic/Claude 或 ElevenLabs 发送请求。使用自带 API 密钥的直接请求会向所选提供商发送内容和身份验证信息。使用自己的密钥不代表处理仅在本机进行。 提供商的保留方式及是否用于模型改进取决于提供商、产品和账户条款；API 与智能体订阅可能适用不同规则。",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "连接的 Claude 和 Codex 智能体",
        "body": "连接 Claude Code、Claude Desktop、Codex 或其他兼容智能体后，其获授权的工具可以接收项目上下文、字幕、提示词、来源 URL、文件路径，以及你允许访问的音频、视频、图像等文件。智能体客户端可能将这些材料发送给模型提供商。本地工具连接或现有订阅不保证 AI 仅在本机运行。此类流程也受智能体权限、账户设置、保留规则及提供商条款约束。"
      },
      {
        "title": "提供商凭据与保护",
        "body": "保存的 OpenAI、Anthropic 和 ElevenLabs API 密钥使用应用级 AES-256-GCM 加密，存放在本地应用设置中。这不是操作系统钥匙串存储，无法防御已能访问应用文件和设备的攻击者。Translator 在需要时解密密钥，并通过 HTTPS 将其发送给对应提供商进行密钥检查或直接 API 请求。外部智能体自行管理其账户凭据。你可以在设置中移除保存的密钥，但删除本地副本不会撤销提供商端的密钥。"
      },
      {
        "title": "支付、额度与支持",
        "body": "Stripe 处理结账及你在其中输入的支付信息。Stage5 处理交易编号及状态、购买记录、额度余额及用量、设备或账户标识符、使用权限及额度转移记录，用于交付购买、转移符合条件的额度、退款、防止欺诈和保留必要记录。结账或联系支持时提供的联系方式也可能被处理。这些必要的服务和支付记录在关闭可选分析后仍会处理，与分析中的购买事件分开。",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "可选应用分析",
        "body": "Translator 1.21.0 在“设置 → 隐私”中提供默认关闭的可选分析。启用后，Stage5 可向 Google Analytics 发送字段受限的使用、可靠性和购买事件，包括应用版本、平台、语言、功能名称、结果及购买总额。事件使用假名化安装标识符，并非匿名数据。分析载荷不包含媒体、字幕或提示词内容、API 密钥和本地路径。关闭后会停止新的可选报告并清除待发送报告；若无法确认服务器偏好，应用会提示。这不会删除已送达的事件或必要的支付记录。"
      },
      {
        "title": "保留与删除",
        "body": "本地文件和保存的凭据会保留，直到你删除或使用相应应用、系统清理功能。云端处理可能产生临时音频、文本、生成结果以及任务和重试记录。其存续时间取决于任务完成、恢复和清理过程；我们不承诺零保留或统一删除期限。未发送的可选应用分析在 72 小时后过期。Stage5 安排在已送达分析满 90 天后清除详细字段，保留最少的送达回执。清理为批量执行；应用关闭期间过期的本地报告会在下次运行时清理。支付、额度、安全和支持记录按运营目的及适用法律义务保留。提供商和连接的智能体遵循各自的保留、删除条款及账户设置。若需访问或删除 Stage5 持有的记录，请联系我们。"
      },
      {
        "title": "网站、嵌入视频与广告",
        "body": "网站分析选择与应用设置相互独立；本页的说明和分析选择控件介绍 Google 的收集与撤回方式。嵌入的 YouTube 播放器加载时可能连接 Google/YouTube，传递 IP 和设备信息，并按其条款使用 Cookie 或展示广告。网站分析许可不会控制播放器的所有处理行为。Reflect 文字留在浏览器中；保存的草稿会在那里保留至删除。桌面应用不展示第三方广告。Stage5 网站广告目前关闭，但这不会关闭第三方视频平台上的广告。",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "你的控制选项",
        "body": "你可以只进行本地编辑而不请求云端 AI，在设置中选择支持的提供商和流程，删除或撤销提供商密钥，限制智能体可访问的目录和文件，或断开智能体连接。可取消支持取消的进行中操作，但无法召回已被其他方接收的数据。应用分析可在“设置 → 隐私”修改，网站分析可通过分析选择修改。使用相应存储控件删除本地文件和草稿。Stage5 记录相关帮助请联系 mikey@stage5.tools；直接使用的提供商或智能体账户的数据，也可能需要使用对方的控件。"
      },
      {
        "title": "跨境处理、权利与更新",
        "body": "Stage5 位于美国，提供商可能在其他国家处理信息。提供商和账户条款取决于你选择的流程；本政策不保证特定存储地区或零数据保留安排。根据适用法律，你可能有权请求访问、更正、删除、限制或可携带性，撤回同意、反对处理或联系数据保护机构。我们可能核实请求，并保留法律要求的记录。联系方式：mikey@stage5.tools。重大政策更新会在发布时注明日期。"
      }
    ]
  },
  "fr": {
    "breadcrumb": "Politique de confidentialité",
    "title": "Politique de confidentialité",
    "metaTitle": "Politique de confidentialité | Translator",
    "metaDescription": "Politique de confidentialité de Translator par Stage5 Tools. Découvrez comment nous collectons, utilisons et protégeons vos données.",
    "keywords": [
      "politique de confidentialité Translator",
      "confidentialité Stage5 Tools",
      "politique de données"
    ],
    "intro": "Cette politique de confidentialité explique comment Stage5 Tools collecte, utilise et protège les informations lorsque vous utilisez l’application Translator, translator.tools ou stage5.tools, y compris Watch. Révision de la politique : 27 septembre 2026.",
    "sections": [
      {
        "title": "Qui exploite Translator",
        "body": "Stage5 Tools LLC, société du Wyoming aux États-Unis, exploite Translator, translator.tools et stage5.tools. Cette politique couvre l’application de bureau et ces services, dont Watch et Reflect. Echo dispose d’une politique distincte accessible depuis sa page produit. Questions et demandes relatives aux données : mikey@stage5.tools."
      },
      {
        "title": "Fichiers locaux et connexions réseau",
        "body": "Ouvrir, lire, modifier ou exporter des médias et sous-titres locaux ne téléverse pas automatiquement tous vos fichiers. Translator conserve paramètres, projets, résultats et fichiers temporaires sur votre ordinateur. Les fonctions réseau contactent Stage5, les serveurs de téléchargement et de mise à jour ou le site source demandé. Ces connexions transmettent notamment l’adresse IP, des informations sur l’application et l’appareil, l’heure et la ressource demandée. Les identifiants de service permettent l’authentification, la gestion des crédits et la prévention des abus."
      },
      {
        "title": "Médias et contenus transmis aux fonctions d’IA",
        "body": "La transcription dans le cloud transmet de l’audio, généralement extrait de votre vidéo. Traduction, révision et résumés transmettent sous-titres, instructions et contexte utile. Le doublage envoie texte et paramètres vocaux et reçoit l’audio généré. La recherche de vidéos et les tâches assistées par le web peuvent transmettre requêtes, URL sources, titres et métadonnées pertinentes. Ces transferts réalisent la fonction demandée. Les fonctions à crédits utilisent les services Stage5 sur Cloudflare et notre relais Fly.io, qui acheminent les demandes vers OpenAI, Anthropic/Claude ou ElevenLabs selon le cas. Les demandes directes avec votre propre clé transmettent contenu et authentification au fournisseur choisi. Votre propre clé ne signifie pas un traitement limité à l’appareil. La conservation et l’éventuelle utilisation pour améliorer les modèles dépendent du fournisseur, du produit et des conditions du compte ; API et abonnement à un agent peuvent suivre des règles différentes.",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "Agents Claude et Codex connectés",
        "body": "Si vous connectez Claude Code, Claude Desktop, Codex ou un agent compatible, ses outils autorisés peuvent recevoir contexte de projet, sous-titres, instructions, URL sources, chemins et fichiers rendus accessibles, dont audio, vidéos ou images. Le client de l’agent peut les transmettre à son fournisseur de modèles. Une connexion locale ou un abonnement existant ne garantit pas une IA exclusivement locale. Les permissions, paramètres du compte, règles de conservation et conditions du fournisseur s’appliquent aussi."
      },
      {
        "title": "Clés des fournisseurs et protection",
        "body": "Les clés API OpenAI, Anthropic et ElevenLabs enregistrées sont chiffrées dans les paramètres locaux avec AES-256-GCM au niveau de l’application. Il ne s’agit pas du trousseau du système et cela ne protège pas contre un attaquant ayant accès aux fichiers de l’application et à la machine. Translator déchiffre les clés au besoin et les envoie par HTTPS au fournisseur concerné pour vérification ou requêtes directes. Les agents externes gèrent leurs propres identifiants. Vous pouvez supprimer les clés dans les paramètres ; supprimer la copie locale ne révoque pas la clé chez le fournisseur."
      },
      {
        "title": "Paiements, crédits et assistance",
        "body": "Stripe traite le paiement et les données de paiement que vous y saisissez. Stage5 traite références et états des transactions, achats, soldes et utilisation des crédits, identifiants d’appareil ou de compte, droits d’accès et transferts pour livrer les achats, déplacer les crédits admissibles, rembourser, prévenir la fraude et tenir les registres nécessaires. Les coordonnées données au paiement ou au support peuvent également être traitées. Ces traitements nécessaires continuent lorsque l’analyse facultative est désactivée et sont distincts des événements analytiques d’achat.",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "Analyse facultative de l’application",
        "body": "Translator 1.21.0 propose une analyse facultative dans Paramètres → Confidentialité, désactivée par défaut. Si elle est activée, Stage5 peut envoyer à Google Analytics des événements limités d’utilisation, de fiabilité et d’achat : version, plateforme, langue, fonctions, résultats et montants. Ils utilisent un identifiant pseudonyme d’installation et ne sont pas anonymes. Le contenu analytique exclut médias, textes des sous-titres et instructions, clés API et chemins locaux. La désactivation arrête les nouveaux rapports facultatifs et efface ceux en attente ; l’application indique si la préférence du serveur ne peut pas être confirmée. Cela n’efface ni les événements déjà transmis ni les registres de paiement nécessaires."
      },
      {
        "title": "Conservation et suppression",
        "body": "Les fichiers et identifiants locaux restent jusqu’à leur suppression ou l’utilisation des fonctions de nettoyage appropriées. Le cloud peut créer audio, texte, résultats générés et traces temporaires de tâches et de nouvelles tentatives. Leur durée dépend de l’achèvement, de la récupération et du nettoyage ; aucune conservation nulle ni échéance universelle n’est garantie. Les événements analytiques facultatifs non envoyés expirent après 72 heures. Stage5 prévoit l’effacement des détails analytiques transmis après 90 jours et conserve des accusés de livraison minimaux. Le nettoyage se fait par lots ; une application fermée nettoie les rapports locaux expirés à sa prochaine exécution. Les registres de paiement, crédits, sécurité et assistance sont conservés pour leurs finalités opérationnelles et obligations légales. Fournisseurs et agents appliquent leurs propres conditions et réglages de conservation et de suppression. Contactez-nous pour consulter ou supprimer les données détenues par Stage5."
      },
      {
        "title": "Sites, vidéos intégrées et publicité",
        "body": "Les choix analytiques du site sont distincts de ceux de l’application ; l’avis et le contrôle de choix analytiques de cette page expliquent la collecte Google et le retrait du consentement. Un lecteur YouTube peut contacter Google/YouTube lors de son chargement, transmettre IP et informations sur l’appareil et utiliser cookies ou publicité selon ses conditions. Le consentement à l’analyse du site ne contrôle pas tous les traitements du lecteur. Les écrits Reflect restent dans le navigateur ; un brouillon enregistré y reste jusqu’à sa suppression. L’application de bureau n’affiche pas de publicité tierce. Les annonces des sites Stage5 sont actuellement désactivées ; cela ne désactive pas celles des plateformes vidéo tierces.",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "Vos moyens de contrôle",
        "body": "Vous pouvez modifier localement sans demander d’IA cloud, choisir les fournisseurs et méthodes compatibles dans les paramètres, supprimer ou révoquer les clés, limiter les dossiers et fichiers accessibles aux agents ou les déconnecter. Vous pouvez annuler les opérations en cours compatibles, sans rappeler les données déjà reçues ailleurs. Modifiez l’analyse de l’application dans Paramètres → Confidentialité et celle du site via les choix analytiques. Supprimez fichiers et brouillons avec leurs outils de stockage. Pour les données Stage5, contactez mikey@stage5.tools ; une demande portant sur un compte fournisseur ou agent utilisé directement peut aussi nécessiter ses propres contrôles."
      },
      {
        "title": "Traitements internationaux, droits et modifications",
        "body": "Stage5 est établi aux États-Unis et les fournisseurs peuvent traiter des données dans d’autres pays. Leurs conditions et celles de votre compte dépendent du fonctionnement choisi ; cette politique ne garantit ni région de stockage ni accord de conservation nulle. Selon la loi applicable, vous pouvez demander accès, rectification, suppression, limitation ou portabilité, retirer votre consentement, vous opposer au traitement ou saisir une autorité de protection des données. Nous pouvons vérifier la demande et conserver les registres imposés par la loi. Contact : mikey@stage5.tools. Les modifications importantes de cette politique seront datées lors de leur publication."
      }
    ]
  },
  "de": {
    "breadcrumb": "Datenschutzerklärung",
    "title": "Datenschutzerklärung",
    "metaTitle": "Datenschutzerklärung | Translator",
    "metaDescription": "Datenschutzerklärung für Translator von Stage5 Tools. Erfahre, wie wir deine Daten erfassen, nutzen und schützen.",
    "keywords": [
      "Translator Datenschutz",
      "Stage5 Tools Datenschutz",
      "Datenrichtlinie"
    ],
    "intro": "Diese Datenschutzerklärung erläutert, wie Stage5 Tools Informationen erfasst, nutzt und schützt, wenn du die Translator-App, translator.tools oder stage5.tools einschließlich Watch verwendest. Fassung der Richtlinie: 27. September 2026.",
    "sections": [
      {
        "title": "Wer Translator betreibt",
        "body": "Stage5 Tools LLC, ein Unternehmen aus Wyoming in den USA, betreibt Translator, translator.tools und stage5.tools. Diese Erklärung gilt für die Desktop-App und diese Dienste einschließlich Watch und Reflect. Echo hat eine eigene, auf der Produktseite verlinkte Erklärung. Fragen und Datenschutzanliegen: mikey@stage5.tools."
      },
      {
        "title": "Lokale Dateien und Netzwerkverbindungen",
        "body": "Das Öffnen, Abspielen, Bearbeiten oder Exportieren lokaler Medien und Untertitel lädt nicht automatisch alle Dateien hoch. Translator speichert Einstellungen, Projekte, Ergebnisse und temporäre Dateien auf deinem Computer. Netzwerkfunktionen verbinden sich mit Stage5, Download- und Update-Servern oder der angeforderten Quellwebsite. Dabei werden technische Daten wie IP-Adresse, App- und Geräteinformationen, Anfragezeit und angeforderte Ressource übermittelt. Dienstkennungen dienen der Anmeldung, Guthabenverwaltung und Missbrauchsabwehr."
      },
      {
        "title": "Medien und Inhalte für KI-Funktionen",
        "body": "Cloud-Transkription übermittelt Audio, meist aus deinem Video extrahiert. Übersetzung, Prüfung und Zusammenfassungen übermitteln Untertiteltexte, Anweisungen und relevanten Kontext. Synchronisation sendet Text und Stimmeinstellungen und erhält erzeugtes Audio. Videosuche oder webgestützte Aufgaben können Suchanfragen, Quell-URLs, Titel und weitere Metadaten senden. Dies dient der angeforderten Funktion. Guthabenbasierte Funktionen nutzen Stage5-Dienste bei Cloudflare und unseren Relay-Dienst bei Fly.io, die Anfragen je nach Funktion an OpenAI, Anthropic/Claude oder ElevenLabs weiterleiten. Direkte Anfragen mit eigenem API-Schlüssel senden Inhalte und Authentifizierung an den gewählten Anbieter. Ein eigener Schlüssel bedeutet keine ausschließlich lokale Verarbeitung. Aufbewahrung und eine mögliche Nutzung zur Modellverbesserung richten sich nach Anbieter, Produkt und Kontobedingungen; für API-Zugriff und Agent-Abonnements können unterschiedliche Regeln gelten.",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "Verbundene Claude- und Codex-Agenten",
        "body": "Wenn du Claude Code, Claude Desktop, Codex oder einen kompatiblen Agenten verbindest, können dessen erlaubte Werkzeuge Projektkontext, Untertitel, Anweisungen, Quell-URLs, Dateipfade und freigegebene Dateien einschließlich Audio, Video oder Bildern erhalten. Der Agent-Client kann diese an seinen Modellanbieter senden. Eine lokale Werkzeugverbindung oder ein vorhandenes Abonnement garantiert keine rein lokale KI. Auch Berechtigungen, Kontoeinstellungen, Aufbewahrung und Bedingungen des Agenten und seines Anbieters gelten."
      },
      {
        "title": "Anbieterschlüssel und Schutz",
        "body": "Gespeicherte API-Schlüssel von OpenAI, Anthropic und ElevenLabs werden in lokalen App-Einstellungen mit AES-256-GCM auf Anwendungsebene verschlüsselt. Dies ist kein Betriebssystem-Schlüsselbund und schützt nicht vor Angreifern mit Zugriff auf App-Dateien und Rechner. Translator entschlüsselt die Schlüssel bei Bedarf und sendet sie per HTTPS für Prüfungen oder direkte API-Anfragen an den jeweiligen Anbieter. Externe Agenten verwalten ihre eigenen Zugangsdaten. Du kannst gespeicherte Schlüssel in den Einstellungen entfernen; das Löschen der lokalen Kopie widerruft den Schlüssel beim Anbieter nicht."
      },
      {
        "title": "Zahlungen, Guthaben und Support",
        "body": "Stripe verarbeitet den Bezahlvorgang und die dort eingegebenen Zahlungsdaten. Stage5 verarbeitet Transaktionsreferenzen und Status, Käufe, Guthabenstände und Verbrauch, Geräte- und Kontokennungen, Berechtigungen und Übertragungsnachweise, um Käufe bereitzustellen, übertragbares Guthaben zu verschieben, Erstattungen auszuführen, Betrug vorzubeugen und notwendige Unterlagen zu führen. Beim Bezahlen oder beim Support angegebene Kontaktdaten können ebenfalls verarbeitet werden. Diese erforderlichen Dienst- und Zahlungsdaten werden auch bei ausgeschalteter optionaler Analyse verarbeitet und sind von analytischen Kaufereignissen getrennt.",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "Optionale App-Analyse",
        "body": "Translator 1.21.0 bietet unter Einstellungen → Datenschutz eine standardmäßig ausgeschaltete optionale Analyse. Wenn aktiviert, kann Stage5 begrenzte Nutzungs-, Zuverlässigkeits- und Kaufereignisse an Google Analytics senden, etwa App-Version, Plattform, Sprache, Funktionsnamen, Ergebnisse und Kaufbeträge. Sie verwenden eine pseudonyme Installationskennung und sind nicht anonym. Die Analyse übermittelt keine Medien, Untertitel- oder Anweisungstexte, API-Schlüssel oder lokalen Dateipfade. Ausschalten beendet neue optionale Berichte und löscht ausstehende Berichte; die App zeigt an, wenn die Servereinstellung nicht bestätigt werden kann. Bereits zugestellte Ereignisse oder notwendige Zahlungsunterlagen werden dadurch nicht gelöscht."
      },
      {
        "title": "Aufbewahrung und Löschung",
        "body": "Lokale Dateien und Zugangsdaten bleiben, bis du sie löschst oder entsprechende Bereinigungsfunktionen nutzt. Cloud-Verarbeitung kann temporäres Audio, Text, Ergebnisse sowie Auftrags- und Wiederholungsdaten erzeugen. Ihre Dauer hängt von Abschluss, Wiederherstellung und Bereinigung ab; wir garantieren weder Nullspeicherung noch eine einheitliche Löschfrist. Nicht gesendete optionale App-Analysedaten verfallen nach 72 Stunden. Stage5 plant die Entfernung übermittelter Analysedetails nach 90 Tagen und behält minimale Zustellnachweise. Die Bereinigung erfolgt stapelweise; eine geschlossene App entfernt abgelaufene lokale Berichte beim nächsten Start. Zahlungs-, Guthaben-, Sicherheits- und Supportunterlagen werden für ihren betrieblichen Zweck und geltende rechtliche Pflichten aufbewahrt. Anbieter und Agenten nutzen eigene Aufbewahrungs- und Löschbedingungen sowie Kontoeinstellungen. Kontaktiere uns für Auskunft oder Löschung von Stage5-Daten."
      },
      {
        "title": "Websites, eingebettete Videos und Werbung",
        "body": "Die Analysewahl auf Websites ist von der App-Einstellung unabhängig; der Hinweis und die Analyseauswahl auf dieser Seite erklären Googles Erfassung und den Widerruf. Eingebettete YouTube-Player können beim Laden Google/YouTube kontaktieren, IP- und Geräteinformationen übermitteln und gemäß deren Bedingungen Cookies oder Werbung verwenden. Die Erlaubnis zur Website-Analyse kontrolliert nicht alle Vorgänge im Player. Reflect-Texte bleiben im Browser; gespeicherte Entwürfe bleiben dort bis zur Löschung. Die Desktop-App zeigt keine Drittanbieterwerbung. Werbung auf Stage5-Websites ist derzeit deaktiviert; dies deaktiviert keine Werbung auf fremden Videoplattformen.",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "Deine Steuerungsmöglichkeiten",
        "body": "Du kannst lokal bearbeiten, ohne Cloud-KI anzufordern, unterstützte Anbieter und Abläufe in den Einstellungen wählen, Schlüssel löschen oder widerrufen, Agenten auf bestimmte Ordner und Dateien beschränken oder sie trennen. Unterstützte laufende Vorgänge lassen sich abbrechen, aber bereits anderswo empfangene Daten nicht zurückholen. Ändere die App-Analyse unter Einstellungen → Datenschutz und Website-Analyse über die Analyseauswahl. Lösche lokale Dateien und Entwürfe über ihre Speicherfunktionen. Für Stage5-Unterlagen hilft mikey@stage5.tools; bei direkt verwendeten Anbieter- oder Agentenkonten können zusätzliche Schritte beim jeweiligen Anbieter nötig sein."
      },
      {
        "title": "Internationale Verarbeitung, Rechte und Änderungen",
        "body": "Stage5 sitzt in den USA, und Anbieter können Informationen in anderen Ländern verarbeiten. Anbieter- und Kontobedingungen hängen vom gewählten Ablauf ab; diese Erklärung garantiert weder eine bestimmte Speicherregion noch eine Nullspeicherungsvereinbarung. Je nach geltendem Recht kannst du Auskunft, Berichtigung, Löschung, Einschränkung oder Übertragbarkeit verlangen, Einwilligungen widerrufen, widersprechen oder eine Datenschutzbehörde kontaktieren. Wir können Anfragen prüfen und gesetzlich erforderliche Unterlagen aufbewahren. Kontakt: mikey@stage5.tools. Wesentliche Änderungen werden bei Veröffentlichung datiert."
      }
    ]
  },
  "pt": {
    "breadcrumb": "Política de privacidade",
    "title": "Política de privacidade",
    "metaTitle": "Política de privacidade | Translator",
    "metaDescription": "Política de privacidade do Translator da Stage5 Tools. Saiba como coletamos, usamos e protegemos seus dados.",
    "keywords": [
      "política de privacidade do Translator",
      "privacidade Stage5 Tools",
      "política de dados"
    ],
    "intro": "Esta Política de privacidade explica como a Stage5 Tools coleta, usa e protege informações quando você utiliza o aplicativo Translator, translator.tools ou stage5.tools, incluindo o Watch. Revisão da política: 27 de setembro de 2026.",
    "sections": [
      {
        "title": "Quem opera o Translator",
        "body": "A Stage5 Tools LLC, empresa de Wyoming, Estados Unidos, opera o Translator, translator.tools e stage5.tools. Esta política cobre o aplicativo de computador e esses serviços, incluindo Watch e Reflect. O Echo tem uma política separada vinculada à página do produto. Dúvidas e solicitações de privacidade: mikey@stage5.tools."
      },
      {
        "title": "Arquivos locais e conexões de rede",
        "body": "Abrir, reproduzir, editar ou exportar mídias e legendas locais não envia automaticamente todos os seus arquivos. O Translator guarda configurações, projetos, resultados e arquivos temporários no computador. Recursos de rede conectam-se à Stage5, a servidores de download e atualização ou ao site de origem solicitado. Essas conexões expõem dados técnicos, como IP, informações do aplicativo e dispositivo, horário e recurso solicitado. Identificadores de serviço permitem autenticação, gestão de créditos e prevenção de abuso."
      },
      {
        "title": "Mídia e conteúdo enviados à IA",
        "body": "A transcrição na nuvem envia áudio, normalmente extraído do vídeo. Tradução, revisão e resumos enviam legendas, instruções e contexto relevante. A dublagem envia texto e configurações de voz e recebe áudio gerado. A descoberta de vídeos e tarefas assistidas pela web podem enviar buscas, URLs de origem, títulos e outros metadados. Essas transferências executam o recurso solicitado. Os recursos com créditos usam serviços Stage5 na Cloudflare e nosso intermediário na Fly.io, que encaminham solicitações à OpenAI, Anthropic/Claude ou ElevenLabs conforme necessário. Solicitações diretas com sua própria chave enviam conteúdo e autenticação ao provedor escolhido. Usar sua chave não significa processamento apenas no dispositivo. A retenção e qualquer uso para melhorar modelos dependem do provedor, produto e termos da conta; acesso API e assinatura de agente podem seguir regras diferentes.",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "Agentes Claude e Codex conectados",
        "body": "Ao conectar Claude Code, Claude Desktop, Codex ou outro agente compatível, suas ferramentas autorizadas podem receber contexto do projeto, legendas, instruções, URLs, caminhos e arquivos disponibilizados, incluindo áudio, vídeo e imagens. O cliente do agente pode enviá-los ao provedor do modelo. Uma conexão local ou assinatura existente não garante IA exclusivamente local. Também se aplicam as permissões, configurações da conta, retenção e termos do agente e do provedor."
      },
      {
        "title": "Credenciais e proteção",
        "body": "As chaves API salvas da OpenAI, Anthropic e ElevenLabs são criptografadas nas configurações locais com AES-256-GCM no nível do aplicativo. Não é o armazenamento de chaves do sistema operacional e não protege contra um invasor com acesso aos arquivos do aplicativo e ao computador. O Translator descriptografa as chaves quando necessário e as envia por HTTPS ao respectivo provedor para verificação ou solicitações diretas. Agentes externos administram suas próprias credenciais. Você pode remover chaves salvas nas Configurações; apagar a cópia local não revoga a chave no provedor."
      },
      {
        "title": "Pagamentos, créditos e suporte",
        "body": "A Stripe processa o pagamento e os dados de pagamento inseridos nela. A Stage5 processa referências e estados de transações, compras, saldos e uso de créditos, identificadores de dispositivo ou conta, direitos de uso e transferências para entregar compras, mover créditos elegíveis, reembolsar, prevenir fraude e manter registros necessários. Contatos fornecidos no pagamento ou ao suporte também podem ser processados. Esses registros necessários continuam sendo tratados com a análise opcional desativada e são separados dos eventos analíticos de compra.",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "Análise opcional do aplicativo",
        "body": "O Translator 1.21.0 oferece análise opcional em Configurações → Privacidade, desativada por padrão. Se ativada, a Stage5 pode enviar ao Google Analytics eventos limitados de uso, confiabilidade e compra, incluindo versão, plataforma, idioma, funções, resultados e valores de compra. Os eventos usam um identificador pseudônimo de instalação; não são anônimos. Não incluem mídias, conteúdo de legendas ou instruções, chaves API nem caminhos locais. Desativar interrompe novos relatórios opcionais e limpa os pendentes; o aplicativo informa se não puder confirmar a preferência do servidor. Isso não apaga eventos já entregues nem registros de pagamento necessários."
      },
      {
        "title": "Retenção e exclusão",
        "body": "Arquivos e credenciais locais permanecem até serem removidos ou até você usar os controles de limpeza correspondentes. O processamento na nuvem pode criar áudio, texto, resultados e registros temporários de tarefas e tentativas. A duração depende da conclusão, recuperação e limpeza; não prometemos retenção zero nem prazo universal de exclusão. Eventos analíticos opcionais não enviados expiram após 72 horas. A Stage5 programa a remoção de detalhes analíticos entregues após 90 dias, mantendo recibos mínimos de entrega. A limpeza é feita em lotes; o aplicativo fechado limpa relatórios locais expirados na próxima execução. Registros de pagamentos, créditos, segurança e suporte são retidos para sua finalidade operacional e obrigações legais aplicáveis. Provedores e agentes seguem seus próprios termos de retenção, exclusão e configurações de conta. Entre em contato para acessar ou excluir registros mantidos pela Stage5."
      },
      {
        "title": "Sites, vídeos incorporados e publicidade",
        "body": "As escolhas analíticas do site são separadas das do aplicativo; o aviso e o controle de escolhas analíticas desta página explicam a coleta do Google e a retirada da permissão. Reprodutores incorporados do YouTube podem conectar-se ao Google/YouTube ao carregar, expondo IP e dados do dispositivo e usando cookies ou publicidade conforme seus termos. Permitir análise do site não controla todo o processamento do reprodutor. A escrita do Reflect fica no navegador; rascunhos salvos permanecem ali até serem apagados. O aplicativo de computador não mostra anúncios de terceiros. Os anúncios dos sites Stage5 estão atualmente desativados; isso não desativa anúncios de plataformas externas de vídeo.",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "Seus controles",
        "body": "Você pode editar localmente sem solicitar IA na nuvem, escolher provedores e fluxos compatíveis nas Configurações, remover ou revogar chaves, limitar pastas e arquivos acessíveis aos agentes ou desconectá-los. É possível cancelar operações em andamento compatíveis, mas não recuperar dados já recebidos por terceiros. Altere a análise do aplicativo em Configurações → Privacidade e a do site nas escolhas analíticas. Exclua arquivos e rascunhos usando os respectivos controles de armazenamento. Para registros Stage5, contate mikey@stage5.tools; dados de contas de provedores ou agentes usados diretamente também podem exigir seus próprios controles."
      },
      {
        "title": "Processamento internacional, direitos e mudanças",
        "body": "A Stage5 está nos Estados Unidos e provedores podem processar dados em outros países. Os termos do provedor e da conta dependem do fluxo escolhido; esta política não garante uma região de armazenamento nem acordo de retenção zero. Conforme a lei aplicável, você pode solicitar acesso, correção, exclusão, restrição ou portabilidade, retirar consentimento, opor-se ao tratamento ou contatar uma autoridade de proteção de dados. Podemos verificar a solicitação e reter registros exigidos por lei. Contato: mikey@stage5.tools. Mudanças substanciais desta política serão datadas quando publicadas."
      }
    ]
  },
  "vi": {
    "breadcrumb": "Chính sách quyền riêng tư",
    "title": "Chính sách quyền riêng tư",
    "metaTitle": "Chính sách quyền riêng tư | Translator",
    "metaDescription": "Chính sách quyền riêng tư của Translator từ Stage5 Tools. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.",
    "keywords": [
      "chính sách quyền riêng tư Translator",
      "quyền riêng tư Stage5 Tools",
      "chính sách dữ liệu"
    ],
    "intro": "Chính sách quyền riêng tư này giải thích cách Stage5 Tools thu thập, sử dụng và bảo vệ thông tin khi bạn dùng ứng dụng Translator, translator.tools hoặc stage5.tools, bao gồm Watch. Ngày sửa đổi chính sách: 27 tháng 9 năm 2026.",
    "sections": [
      {
        "title": "Đơn vị vận hành Translator",
        "body": "Stage5 Tools LLC, công ty tại Wyoming, Hoa Kỳ, vận hành Translator, translator.tools và stage5.tools. Chính sách này áp dụng cho ứng dụng máy tính và các dịch vụ này, gồm Watch và Reflect. Echo có chính sách riêng được liên kết từ trang sản phẩm. Câu hỏi và yêu cầu về quyền riêng tư: mikey@stage5.tools."
      },
      {
        "title": "Tệp cục bộ và kết nối mạng",
        "body": "Việc mở, phát, chỉnh sửa hoặc xuất nội dung đa phương tiện và phụ đề cục bộ không tự động tải lên toàn bộ tệp của bạn. Translator lưu cài đặt, dự án, kết quả và tệp tạm trên máy tính. Các tính năng mạng kết nối với Stage5, máy chủ tải xuống/cập nhật hoặc trang nguồn bạn yêu cầu. Kết nối này cung cấp thông tin kỹ thuật như địa chỉ IP, thông tin ứng dụng/thiết bị, thời gian và tài nguyên được yêu cầu. Mã định danh dịch vụ phục vụ xác thực, quản lý tín dụng và ngăn chặn lạm dụng."
      },
      {
        "title": "Nội dung gửi tới các tính năng AI",
        "body": "Chép lời trên đám mây gửi âm thanh, thường được trích từ video. Dịch, rà soát và tóm tắt gửi văn bản phụ đề, câu lệnh và ngữ cảnh liên quan. Lồng tiếng gửi văn bản và thiết lập giọng nói rồi nhận âm thanh được tạo. Tìm video hoặc tác vụ có hỗ trợ web có thể gửi truy vấn, URL nguồn, tiêu đề và siêu dữ liệu liên quan. Việc truyền dữ liệu nhằm thực hiện tính năng bạn yêu cầu. Tính năng dùng tín dụng đi qua dịch vụ Stage5 trên Cloudflare và máy chủ trung chuyển Fly.io, rồi chuyển yêu cầu tới OpenAI, Anthropic/Claude hoặc ElevenLabs tùy tính năng. Yêu cầu trực tiếp dùng khóa riêng gửi nội dung và thông tin xác thực tới nhà cung cấp đã chọn. Dùng khóa riêng không có nghĩa là chỉ xử lý trên thiết bị. Việc lưu giữ và sử dụng để cải thiện mô hình phụ thuộc nhà cung cấp, sản phẩm và điều khoản tài khoản; API và gói đăng ký tác nhân có thể có quy tắc khác nhau.",
        "links": [
          {
            "label": "OpenAI",
            "href": "https://openai.com/policies/privacy-policy/"
          },
          {
            "label": "Anthropic / Claude",
            "href": "https://www.anthropic.com/legal/privacy"
          },
          {
            "label": "ElevenLabs",
            "href": "https://elevenlabs.io/privacy-policy"
          },
          {
            "label": "Cloudflare",
            "href": "https://www.cloudflare.com/privacypolicy/"
          },
          {
            "label": "Fly.io",
            "href": "https://fly.io/legal/privacy-policy/"
          }
        ]
      },
      {
        "title": "Tác nhân Claude và Codex được kết nối",
        "body": "Khi kết nối Claude Code, Claude Desktop, Codex hoặc tác nhân tương thích, công cụ được cấp quyền có thể nhận ngữ cảnh dự án, phụ đề, câu lệnh, URL nguồn, đường dẫn và tệp bạn cho phép truy cập, gồm âm thanh, video hoặc hình ảnh. Ứng dụng tác nhân có thể gửi chúng tới nhà cung cấp mô hình. Kết nối công cụ cục bộ hoặc gói đăng ký sẵn có không bảo đảm AI chỉ chạy cục bộ. Quyền truy cập, cài đặt tài khoản, quy tắc lưu giữ và điều khoản của tác nhân/nhà cung cấp cũng áp dụng."
      },
      {
        "title": "Thông tin xác thực và bảo vệ",
        "body": "Khóa API OpenAI, Anthropic và ElevenLabs đã lưu được mã hóa trong cài đặt cục bộ bằng AES-256-GCM ở cấp ứng dụng. Đây không phải kho khóa của hệ điều hành và không bảo vệ trước kẻ đã truy cập được tệp ứng dụng và máy tính. Translator giải mã khi cần và gửi khóa qua HTTPS tới nhà cung cấp tương ứng để kiểm tra hoặc gọi API trực tiếp. Tác nhân bên ngoài tự quản lý thông tin xác thực. Bạn có thể xóa khóa trong Cài đặt; xóa bản sao cục bộ không thu hồi khóa tại nhà cung cấp."
      },
      {
        "title": "Thanh toán, tín dụng và hỗ trợ",
        "body": "Stripe xử lý thanh toán và thông tin thanh toán bạn nhập tại đó. Stage5 xử lý mã tham chiếu và trạng thái giao dịch, lượt mua, số dư và mức sử dụng tín dụng, mã thiết bị/tài khoản, quyền sử dụng và lịch sử chuyển tín dụng để cung cấp giao dịch mua, chuyển tín dụng đủ điều kiện, hoàn tiền, ngăn gian lận và giữ hồ sơ cần thiết. Thông tin liên hệ cung cấp khi thanh toán hoặc yêu cầu hỗ trợ cũng có thể được xử lý. Các hồ sơ dịch vụ và thanh toán cần thiết vẫn được xử lý khi tắt phân tích tùy chọn, tách biệt với sự kiện mua hàng dùng cho phân tích.",
        "links": [
          {
            "label": "Stripe",
            "href": "https://stripe.com/privacy"
          }
        ]
      },
      {
        "title": "Phân tích ứng dụng tùy chọn",
        "body": "Translator 1.21.0 có phân tích tùy chọn tại Cài đặt → Quyền riêng tư, mặc định tắt. Khi bật, Stage5 có thể gửi tới Google Analytics các sự kiện sử dụng, độ tin cậy và mua hàng với trường dữ liệu giới hạn: phiên bản, nền tảng, ngôn ngữ, tên tính năng, kết quả và tổng tiền mua. Sự kiện dùng mã định danh cài đặt được giả danh hóa, không phải dữ liệu ẩn danh. Nội dung phân tích không gồm tệp đa phương tiện, văn bản phụ đề/câu lệnh, khóa API hay đường dẫn cục bộ. Tắt sẽ dừng báo cáo tùy chọn mới và xóa báo cáo đang chờ; ứng dụng sẽ báo nếu không xác nhận được tùy chọn phía máy chủ. Điều này không xóa sự kiện đã gửi hay hồ sơ thanh toán bắt buộc."
      },
      {
        "title": "Lưu giữ và xóa",
        "body": "Tệp và thông tin xác thực cục bộ còn lưu cho tới khi bạn xóa hoặc dùng chức năng dọn dẹp phù hợp. Xử lý đám mây có thể tạo âm thanh, văn bản, kết quả và hồ sơ tạm về tác vụ/lần thử lại. Thời gian lưu tùy thuộc việc hoàn tất, phục hồi và dọn dẹp; chúng tôi không cam kết không lưu dữ liệu hoặc một hạn xóa chung. Phân tích tùy chọn chưa gửi hết hạn sau 72 giờ. Stage5 lên lịch xóa chi tiết phân tích đã gửi sau 90 ngày, giữ biên nhận gửi tối thiểu. Việc dọn dẹp theo lô; ứng dụng đang đóng sẽ dọn báo cáo cục bộ hết hạn khi chạy lại. Hồ sơ thanh toán, tín dụng, bảo mật và hỗ trợ được giữ cho mục đích vận hành và nghĩa vụ pháp lý áp dụng. Nhà cung cấp và tác nhân có điều khoản lưu giữ/xóa và cài đặt tài khoản riêng. Hãy liên hệ để truy cập hoặc xóa hồ sơ do Stage5 giữ."
      },
      {
        "title": "Website, video nhúng và quảng cáo",
        "body": "Lựa chọn phân tích website tách biệt với cài đặt ứng dụng; phần công bố và công cụ lựa chọn phân tích trên trang này giải thích việc Google thu thập và cách rút lại quyền. Trình phát YouTube nhúng có thể kết nối Google/YouTube khi tải, gửi IP và thông tin thiết bị, dùng cookie hoặc quảng cáo theo điều khoản của họ. Cho phép phân tích website không kiểm soát mọi xử lý của trình phát. Nội dung viết trong Reflect nằm trong trình duyệt; bản nháp đã lưu ở đó cho tới khi bị xóa. Ứng dụng máy tính không hiển thị quảng cáo bên thứ ba. Quảng cáo trên website Stage5 hiện đang tắt, nhưng không tắt quảng cáo của nền tảng video bên ngoài.",
        "links": [
          {
            "label": "Google / YouTube",
            "href": "https://policies.google.com/privacy"
          }
        ]
      },
      {
        "title": "Các lựa chọn của bạn",
        "body": "Bạn có thể chỉnh sửa cục bộ mà không yêu cầu AI đám mây, chọn nhà cung cấp và quy trình hỗ trợ trong Cài đặt, xóa hoặc thu hồi khóa, giới hạn thư mục/tệp cho tác nhân hoặc ngắt kết nối. Bạn có thể hủy tác vụ đang chạy có hỗ trợ hủy, nhưng không thể thu hồi dữ liệu đã được bên khác nhận. Đổi phân tích ứng dụng tại Cài đặt → Quyền riêng tư và phân tích website qua lựa chọn phân tích. Xóa tệp và bản nháp bằng công cụ lưu trữ tương ứng. Liên hệ mikey@stage5.tools về hồ sơ Stage5; tài khoản nhà cung cấp hay tác nhân dùng trực tiếp có thể cần thêm thao tác bằng công cụ của họ."
      },
      {
        "title": "Xử lý quốc tế, quyền và thay đổi",
        "body": "Stage5 đặt tại Hoa Kỳ; nhà cung cấp có thể xử lý thông tin ở quốc gia khác. Điều khoản nhà cung cấp và tài khoản phụ thuộc quy trình bạn chọn; chính sách này không bảo đảm vùng lưu trữ cụ thể hay thỏa thuận không lưu dữ liệu. Theo luật áp dụng, bạn có thể yêu cầu truy cập, sửa, xóa, hạn chế hoặc chuyển dữ liệu, rút lại đồng ý, phản đối xử lý hoặc liên hệ cơ quan bảo vệ dữ liệu. Chúng tôi có thể xác minh yêu cầu và giữ hồ sơ pháp luật yêu cầu. Liên hệ: mikey@stage5.tools. Thay đổi đáng kể của chính sách sẽ được ghi ngày khi công bố."
      }
    ]
  }
};

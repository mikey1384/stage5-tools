import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import {
  EchoAppStoreButton,
  ECHO_APP_STORE_URL,
} from "../../components/EchoAppStoreButton";
import { getLocale } from "../../lib/get-locale";
import {
  localizedLocalesForPath,
  localizePathForLocale,
  openGraphLocaleByLocale,
  type Locale,
} from "../../lib/locales";

const BASE_URL = "https://translator.tools";
const ECHO_PATH = "/echo";

type EchoStep = {
  title: string;
  description: string;
};

type EchoFeature = {
  title: string;
  description: string;
};

type EchoFaqItem = {
  question: string;
  answer: string;
};

type EchoCopy = {
  pageTitle: string;
  metadataDescription: string;
  navGetApp: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  freeNote: string;
  appStoreTopLine: string;
  appStoreBottomLine: string;
  mockQuestionLabel: string;
  mockQuestion: string;
  mockDraft: string;
  mockForwardOnly: string;
  mockStreak: string;
  howEyebrow: string;
  howTitle: string;
  steps: readonly EchoStep[];
  featuresEyebrow: string;
  featuresTitle: string;
  whyBuiltLink: string;
  features: readonly EchoFeature[];
  faqEyebrow: string;
  faqTitle: string;
  faqItems: readonly EchoFaqItem[];
  bottomEyebrow: string;
  bottomTitle: string;
  bottomDescription: string;
  footerMadeBy: string;
  footerTranslator: string;
  footerSupport: string;
  footerPrivacy: string;
  footerTerms: string;
};

const echoCopy = {
  en: {
    pageTitle: "Echo - Stream Your Mind | Daily AI Reflection App for iPhone",
    metadataDescription:
      "Echo gives you one AI-generated question a day. Write forward-only without editing, then let AI show you what you actually meant. Build a daily reflection habit with streaks, feedback, and an optional public feed. Free on the App Store.",
    navGetApp: "Get the app",
    eyebrow: "Daily reflection, AI used backwards",
    title: "One question a day. Write before you overthink it.",
    subtitle:
      "Most apps open AI to get answers. Echo uses it backwards: you get one daily question, write forward-only without editing, and let AI show you what you actually meant once the messy draft is out.",
    freeNote: "Free on iPhone. Echo Pro is optional.",
    appStoreTopLine: "Download on the",
    appStoreBottomLine: "App Store",
    mockQuestionLabel: "Today's question",
    mockQuestion: "What did you avoid saying out loud this week — and to whom?",
    mockDraft:
      "honestly the first thing that comes to mind is the meeting on tuesday where I just nodded instead of",
    mockForwardOnly: "Forward-only · no deleting",
    mockStreak: "Day 12 streak",
    howEyebrow: "How it works",
    howTitle: "Reflection that takes five honest minutes, not an empty page.",
    steps: [
      {
        title: "Get one question a day",
        description:
          "Echo's AI writes you a single question worth sitting with — not a generic prompt list you scroll past.",
      },
      {
        title: "Write forward-only",
        description:
          "No deleting, no rewriting, no perfectionism. You keep moving so your real thinking comes out before your inner editor wakes up.",
      },
      {
        title: "See what you actually meant",
        description:
          "When the draft is done, Echo's AI gives you feedback and helps you find the signal in the stream — the thought you were circling the whole time.",
      },
    ],
    featuresEyebrow: "What you get",
    featuresTitle: "A thinking habit, not another notes app.",
    whyBuiltLink: "Why we built it",
    features: [
      {
        title: "One daily question",
        description:
          "AI-generated, different every day, and designed to break your mental autopilot rather than collect a diary entry.",
      },
      {
        title: "Forward-only writing",
        description:
          "The editor only moves forward. It is the fastest way to get past the blank page and into what you actually think.",
      },
      {
        title: "AI feedback on every answer",
        description:
          "Echo grades your response and tells you where you went deep and where you stayed on the surface.",
      },
      {
        title: "Streaks that build the habit",
        description:
          "Daily reminders and streak tracking turn reflection into something you do, not something you mean to do.",
      },
      {
        title: "An optional public feed",
        description:
          "Share a polished version of a reflection when you want to. Everything stays private unless you choose otherwise.",
      },
      {
        title: "Private by default",
        description:
          "Your raw drafts are yours. Sign in with Apple or Google, and decide for yourself what ever leaves the app.",
      },
    ],
    faqEyebrow: "Questions",
    faqTitle: "Frequently asked questions",
    faqItems: [
      {
        question: "What is Echo?",
        answer:
          "Echo is a daily reflection app for iPhone. Every day it gives you one AI-generated question worth answering. You write your response forward-only, without going back to edit, and then Echo's AI helps you see what you actually meant once the messy draft is out.",
      },
      {
        question: "What does forward-only writing mean?",
        answer:
          "In Echo you write without deleting or rewriting as you go. That keeps you from polishing sentences instead of thinking. Once your draft is done, the AI gives you feedback and can help polish what you wrote, so the editing happens after the thinking, not during it.",
      },
      {
        question: "Is Echo free?",
        answer:
          "Echo is free to download and use. Echo Pro is an optional subscription, managed through your Apple ID, that unlocks more. You can cancel any time from your iPhone's subscription settings.",
      },
      {
        question: "Is my writing private?",
        answer:
          "Yes. Your reflections are private by default. Echo has an optional public feed where you can choose to share a polished version of a reflection, but nothing is shared unless you decide to share it.",
      },
    ],
    bottomEyebrow: "Start today",
    bottomTitle: "Your first question is waiting.",
    bottomDescription:
      "Download Echo, answer one question, and see what five minutes of forward-only writing shakes loose.",
    footerMadeBy: "Echo is made by Stage5, the team behind Translator.",
    footerTranslator: "Translator",
    footerSupport: "Support",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",
  },
  ko: {
    pageTitle: "Echo - 하루 한 질문, AI 리플렉션 앱 | iPhone 무료",
    metadataDescription:
      "매일 AI가 만든 질문 하나를 받고, 지우지 않고 앞으로만 쓴 다음, 내가 정말 하려던 말을 AI와 함께 확인하세요. 스트릭과 피드백, 선택형 공개 피드로 매일 생각하는 습관을 만듭니다. App Store에서 무료.",
    navGetApp: "앱 받기",
    eyebrow: "AI를 거꾸로 쓰는 데일리 리플렉션",
    title: "하루 한 질문. 생각이 많아지기 전에 쓰세요.",
    subtitle:
      "대부분의 앱은 답을 얻으려고 AI를 엽니다. Echo는 반대로 씁니다. 매일 질문 하나를 받고, 지우지 않고 앞으로만 쓴 다음, 어수선한 초고가 나온 뒤에야 AI가 내가 정말 하려던 말을 보여줍니다.",
    freeNote: "iPhone에서 무료. Echo Pro는 선택입니다.",
    appStoreTopLine: "App Store에서",
    appStoreBottomLine: "다운로드",
    mockQuestionLabel: "오늘의 질문",
    mockQuestion: "이번 주에 입 밖에 내지 않고 피한 말은 무엇이었나요? 누구에게였나요?",
    mockDraft:
      "솔직히 제일 먼저 떠오르는 건 화요일 회의에서 그냥 고개만 끄덕이고 말았던",
    mockForwardOnly: "앞으로만 쓰기 · 지우기 없음",
    mockStreak: "12일 연속",
    howEyebrow: "이렇게 작동해요",
    howTitle: "빈 페이지가 아니라, 솔직한 5분이면 되는 리플렉션.",
    steps: [
      {
        title: "하루 한 질문을 받으세요",
        description:
          "Echo의 AI가 곱씹을 가치가 있는 질문 하나를 써줍니다. 스크롤하다 지나치는 흔한 프롬프트 목록이 아니에요.",
      },
      {
        title: "앞으로만 쓰세요",
        description:
          "지우기도, 고쳐 쓰기도, 완벽주의도 없습니다. 계속 나아가다 보면 내 안의 편집자가 깨어나기 전에 진짜 생각이 먼저 나옵니다.",
      },
      {
        title: "정말 하려던 말을 확인하세요",
        description:
          "초고가 끝나면 Echo의 AI가 피드백을 주고, 흐름 속에서 신호를 찾도록 도와줍니다. 내내 맴돌던 그 생각을요.",
      },
    ],
    featuresEyebrow: "무엇을 얻나요",
    featuresTitle: "또 하나의 메모 앱이 아니라, 생각하는 습관.",
    whyBuiltLink: "왜 만들었나",
    features: [
      {
        title: "하루 하나의 질문",
        description:
          "AI가 매일 다르게 만들어내며, 일기 한 편을 모으는 게 아니라 머릿속 자동반응을 깨도록 설계되었습니다.",
      },
      {
        title: "앞으로만 쓰는 에디터",
        description:
          "에디터는 앞으로만 움직입니다. 빈 페이지를 넘어 진짜 생각으로 들어가는 가장 빠른 방법입니다.",
      },
      {
        title: "모든 답변에 AI 피드백",
        description:
          "Echo가 답변을 평가하고, 어디에서 깊이 들어갔고 어디에서 겉돌았는지 알려줍니다.",
      },
      {
        title: "습관을 만드는 스트릭",
        description:
          "매일 알림과 연속 기록이 리플렉션을 '하려고 했던 일'이 아니라 '하는 일'로 만들어줍니다.",
      },
      {
        title: "선택형 공개 피드",
        description:
          "원할 때만 다듬은 버전을 공유하세요. 직접 선택하지 않는 한 모든 것은 비공개로 남습니다.",
      },
      {
        title: "기본은 비공개",
        description:
          "날것의 초고는 온전히 당신의 것입니다. Apple 또는 Google로 로그인하고, 무엇을 앱 밖으로 내보낼지는 직접 정하세요.",
      },
    ],
    faqEyebrow: "궁금한 점",
    faqTitle: "자주 묻는 질문",
    faqItems: [
      {
        question: "Echo는 어떤 앱인가요?",
        answer:
          "Echo는 iPhone용 데일리 리플렉션 앱입니다. 매일 AI가 만든, 답할 가치가 있는 질문 하나를 보내줍니다. 지우지 않고 앞으로만 답을 쓰고 나면, 어수선한 초고가 나온 뒤에 Echo의 AI가 내가 정말 하려던 말을 찾도록 도와줍니다.",
      },
      {
        question: "'앞으로만 쓰기'가 무슨 뜻인가요?",
        answer:
          "Echo에서는 쓰는 도중에 지우거나 고쳐 쓰지 않습니다. 그래야 생각하는 대신 문장을 다듬는 데 빠지지 않거든요. 초고가 끝나면 AI가 피드백을 주고 다듬는 것도 도와줍니다. 편집은 생각 중이 아니라 생각이 끝난 뒤에 하는 거죠.",
      },
      {
        question: "Echo는 무료인가요?",
        answer:
          "네, 무료로 다운로드해서 쓸 수 있습니다. Echo Pro는 더 많은 기능을 여는 선택형 구독으로, Apple ID를 통해 관리됩니다. iPhone의 구독 설정에서 언제든 해지할 수 있습니다.",
      },
      {
        question: "제가 쓴 글은 비공개인가요?",
        answer:
          "네. 리플렉션은 기본적으로 비공개입니다. Echo에는 다듬은 버전을 골라서 공유할 수 있는 선택형 공개 피드가 있지만, 직접 공유하기로 선택하지 않는 한 아무것도 공유되지 않습니다.",
      },
    ],
    bottomEyebrow: "오늘 시작하세요",
    bottomTitle: "첫 번째 질문이 기다리고 있어요.",
    bottomDescription:
      "Echo를 다운로드해서 질문 하나에 답해 보세요. 앞으로만 쓰는 5분이 무엇을 끄집어내는지 직접 확인해 보세요.",
    footerMadeBy: "Echo는 Translator를 만든 Stage5가 만듭니다.",
    footerTranslator: "Translator",
    footerSupport: "지원",
    footerPrivacy: "개인정보 처리방침",
    footerTerms: "이용약관",
  },
  es: {
    pageTitle:
      "Echo - Stream Your Mind | App de reflexión diaria con IA para iPhone",
    metadataDescription:
      "Echo te da una pregunta generada por IA cada día. Escribe solo hacia adelante sin editar y deja que la IA te muestre lo que realmente querías decir. Crea un hábito de reflexión diaria con rachas, feedback y un feed público opcional. Gratis en el App Store.",
    navGetApp: "Descargar la app",
    eyebrow: "Reflexión diaria, IA usada al revés",
    title: "Una pregunta al día. Escribe antes de pensarlo de más.",
    subtitle:
      "La mayoría de las apps abren la IA para obtener respuestas. Echo la usa al revés: recibes una pregunta al día, escribes solo hacia adelante sin editar, y dejas que la IA te muestre lo que realmente querías decir cuando el borrador ya está fuera.",
    freeNote: "Gratis en iPhone. Echo Pro es opcional.",
    appStoreTopLine: "Descárgalo en el",
    appStoreBottomLine: "App Store",
    mockQuestionLabel: "Pregunta de hoy",
    mockQuestion: "¿Qué evitaste decir en voz alta esta semana, y a quién?",
    mockDraft:
      "la verdad, lo primero que me viene a la mente es la reunión del martes en la que solo asentí en vez de",
    mockForwardOnly: "Solo hacia adelante · sin borrar",
    mockStreak: "Racha de 12 días",
    howEyebrow: "Cómo funciona",
    howTitle:
      "Una reflexión que toma cinco minutos honestos, no una página en blanco.",
    steps: [
      {
        title: "Recibe una pregunta al día",
        description:
          "La IA de Echo te escribe una sola pregunta que vale la pena, no una lista genérica de prompts que pasas de largo.",
      },
      {
        title: "Escribe solo hacia adelante",
        description:
          "Sin borrar, sin reescribir, sin perfeccionismo. Sigues avanzando para que tu pensamiento real salga antes de que despierte tu editor interno.",
      },
      {
        title: "Descubre lo que realmente querías decir",
        description:
          "Cuando el borrador está listo, la IA de Echo te da feedback y te ayuda a encontrar la señal en la corriente: ese pensamiento al que dabas vueltas todo el tiempo.",
      },
    ],
    featuresEyebrow: "Lo que obtienes",
    featuresTitle: "Un hábito de pensamiento, no otra app de notas.",
    whyBuiltLink: "Por qué lo creamos",
    features: [
      {
        title: "Una pregunta diaria",
        description:
          "Generada por IA, distinta cada día y diseñada para romper tu piloto automático mental, no para coleccionar entradas de diario.",
      },
      {
        title: "Escritura solo hacia adelante",
        description:
          "El editor solo avanza. Es la forma más rápida de superar la página en blanco y llegar a lo que realmente piensas.",
      },
      {
        title: "Feedback de IA en cada respuesta",
        description:
          "Echo califica tu respuesta y te dice dónde profundizaste y dónde te quedaste en la superficie.",
      },
      {
        title: "Rachas que crean el hábito",
        description:
          "Los recordatorios diarios y el seguimiento de rachas convierten la reflexión en algo que haces, no en algo que piensas hacer.",
      },
      {
        title: "Un feed público opcional",
        description:
          "Comparte una versión pulida de una reflexión cuando quieras. Todo permanece privado a menos que decidas lo contrario.",
      },
      {
        title: "Privado por defecto",
        description:
          "Tus borradores en bruto son tuyos. Inicia sesión con Apple o Google y decide tú mismo qué sale de la app.",
      },
    ],
    faqEyebrow: "Preguntas",
    faqTitle: "Preguntas frecuentes",
    faqItems: [
      {
        question: "¿Qué es Echo?",
        answer:
          "Echo es una app de reflexión diaria para iPhone. Cada día te da una pregunta generada por IA que vale la pena responder. Escribes tu respuesta solo hacia adelante, sin volver a editar, y luego la IA de Echo te ayuda a ver lo que realmente querías decir una vez que el borrador está fuera.",
      },
      {
        question: "¿Qué significa escribir solo hacia adelante?",
        answer:
          "En Echo escribes sin borrar ni reescribir sobre la marcha. Eso evita que pulas frases en lugar de pensar. Cuando el borrador está listo, la IA te da feedback y puede ayudarte a pulir lo que escribiste: la edición llega después del pensamiento, no durante.",
      },
      {
        question: "¿Echo es gratis?",
        answer:
          "Sí, Echo es gratis para descargar y usar. Echo Pro es una suscripción opcional, gestionada a través de tu Apple ID, que desbloquea más. Puedes cancelarla en cualquier momento desde los ajustes de suscripción de tu iPhone.",
      },
      {
        question: "¿Mi escritura es privada?",
        answer:
          "Sí. Tus reflexiones son privadas por defecto. Echo tiene un feed público opcional donde puedes elegir compartir una versión pulida de una reflexión, pero nada se comparte a menos que tú lo decidas.",
      },
    ],
    bottomEyebrow: "Empieza hoy",
    bottomTitle: "Tu primera pregunta te está esperando.",
    bottomDescription:
      "Descarga Echo, responde una pregunta y descubre lo que cinco minutos de escritura sin retroceder pueden sacar a la luz.",
    footerMadeBy: "Echo está hecho por Stage5, el equipo detrás de Translator.",
    footerTranslator: "Translator",
    footerSupport: "Soporte",
    footerPrivacy: "Privacidad",
    footerTerms: "Términos",
  },
  ja: {
    pageTitle: "Echo - 1日1問のAIリフレクションアプリ | iPhone無料",
    metadataDescription:
      "Echoは毎日AIが生成した質問を1つ届けます。消さずに前へ書き、本当に言いたかったことをAIと一緒に見つけましょう。ストリーク、フィードバック、任意の公開フィードで毎日のリフレクション習慣を。App Storeで無料。",
    navGetApp: "アプリを入手",
    eyebrow: "AIを逆向きに使う毎日のリフレクション",
    title: "1日1問。考えすぎる前に書く。",
    subtitle:
      "ほとんどのアプリは答えを得るためにAIを開きます。Echoは逆です。毎日1つの質問を受け取り、消さずに前へ前へと書き、散らかった下書きが出きったあとで、AIが本当に言いたかったことを見せてくれます。",
    freeNote: "iPhoneで無料。Echo Proは任意です。",
    appStoreTopLine: "App Storeで",
    appStoreBottomLine: "ダウンロード",
    mockQuestionLabel: "今日の質問",
    mockQuestion: "今週、口に出すのを避けたことは何ですか？それは誰に対してでしたか？",
    mockDraft: "正直、まず思い浮かぶのは火曜日の会議で、ただうなずくだけで",
    mockForwardOnly: "前にだけ書く · 削除なし",
    mockStreak: "12日連続",
    howEyebrow: "使い方",
    howTitle: "空白のページではなく、正直な5分でできるリフレクション。",
    steps: [
      {
        title: "1日1問を受け取る",
        description:
          "EchoのAIが、じっくり向き合う価値のある質問を1つ書いてくれます。スクロールして流してしまう定型プロンプト集ではありません。",
      },
      {
        title: "前にだけ書く",
        description:
          "削除も書き直しも完璧主義もなし。手を止めずに書き続けることで、内なる編集者が目を覚ます前に本当の考えが出てきます。",
      },
      {
        title: "本当に言いたかったことを見る",
        description:
          "下書きが終わると、EchoのAIがフィードバックをくれて、流れの中からシグナルを見つける手助けをしてくれます。ずっと巡っていたあの考えを。",
      },
    ],
    featuresEyebrow: "得られるもの",
    featuresTitle: "もう一つのメモアプリではなく、考える習慣。",
    whyBuiltLink: "なぜ作ったのか",
    features: [
      {
        title: "1日1つの質問",
        description:
          "AIが毎日違う質問を生成。日記を集めるためではなく、頭の中のオートパイロットを破るために設計されています。",
      },
      {
        title: "前にだけ進むエディタ",
        description:
          "エディタは前にしか進みません。白紙のページを越えて、本当に考えていることへたどり着く一番速い方法です。",
      },
      {
        title: "すべての回答にAIフィードバック",
        description:
          "Echoが回答を採点し、どこで深く掘れて、どこで表面にとどまったかを教えてくれます。",
      },
      {
        title: "習慣をつくるストリーク",
        description:
          "毎日のリマインダーと連続記録が、リフレクションを「やろうと思っていること」から「やっていること」に変えます。",
      },
      {
        title: "任意の公開フィード",
        description:
          "共有したいときだけ、磨いたバージョンをシェア。自分で選ばない限り、すべて非公開のままです。",
      },
      {
        title: "デフォルトで非公開",
        description:
          "生の下書きはあなたのもの。AppleまたはGoogleでサインインし、アプリの外に出すものは自分で決められます。",
      },
    ],
    faqEyebrow: "Q&A",
    faqTitle: "よくある質問",
    faqItems: [
      {
        question: "Echoとは何ですか？",
        answer:
          "EchoはiPhone向けのデイリーリフレクションアプリです。毎日、AIが生成した答える価値のある質問を1つ届けます。消さずに前へ前へと回答を書くと、散らかった下書きが出たあとで、EchoのAIが本当に言いたかったことを見つける手助けをしてくれます。",
      },
      {
        question: "「前にだけ書く」とはどういう意味ですか？",
        answer:
          "Echoでは書いている途中に削除や書き直しをしません。文章を磨くことに気を取られて考えが止まるのを防ぐためです。下書きが終わったら、AIがフィードバックをくれて推敲も手伝ってくれます。編集は考えている最中ではなく、考え終わったあとに行います。",
      },
      {
        question: "Echoは無料ですか？",
        answer:
          "はい、無料でダウンロードして使えます。Echo Proはより多くの機能を解放する任意のサブスクリプションで、Apple IDを通じて管理されます。iPhoneのサブスクリプション設定からいつでも解約できます。",
      },
      {
        question: "書いた内容は非公開ですか？",
        answer:
          "はい。リフレクションはデフォルトで非公開です。Echoには磨いたバージョンを選んで共有できる任意の公開フィードがありますが、自分で共有を選ばない限り、何も共有されません。",
      },
    ],
    bottomEyebrow: "今日から始める",
    bottomTitle: "最初の質問が待っています。",
    bottomDescription:
      "Echoをダウンロードして、1つの質問に答えてみてください。前にだけ書く5分間が何を引き出すか、確かめてみましょう。",
    footerMadeBy: "EchoはTranslatorを作ったStage5が開発しています。",
    footerTranslator: "Translator",
    footerSupport: "サポート",
    footerPrivacy: "プライバシー",
    footerTerms: "利用規約",
  },
  zh: {
    pageTitle: "Echo - 每天一问的 AI 反思应用 | iPhone 免费",
    metadataDescription:
      "Echo 每天给你一个 AI 生成的问题。不删改地一路写下去，让 AI 告诉你你真正想说的是什么。用连续记录、反馈和可选的公开动态养成每日反思习惯。App Store 免费下载。",
    navGetApp: "获取应用",
    eyebrow: "把 AI 反过来用的每日反思",
    title: "每天一个问题。在想太多之前写下来。",
    subtitle:
      "大多数应用打开 AI 是为了要答案。Echo 反过来用：每天收到一个问题，不删改地一路写下去，等杂乱的初稿写完，再让 AI 告诉你你真正想说的是什么。",
    freeNote: "iPhone 上免费。Echo Pro 可选。",
    appStoreTopLine: "在 App Store",
    appStoreBottomLine: "下载",
    mockQuestionLabel: "今日问题",
    mockQuestion: "这一周，你有什么话没说出口？是对谁？",
    mockDraft: "说实话，最先想到的是周二的会议，我只是点了点头，没有",
    mockForwardOnly: "只向前写 · 不可删除",
    mockStreak: "连续 12 天",
    howEyebrow: "如何运作",
    howTitle: "反思不需要面对空白页，只需要诚实的五分钟。",
    steps: [
      {
        title: "每天收到一个问题",
        description:
          "Echo 的 AI 为你写一个值得细想的问题，而不是一份你随手划过的通用提示清单。",
      },
      {
        title: "只向前写",
        description:
          "不删除、不重写、不追求完美。一直往前写，让真实的想法在内心的编辑醒来之前先冒出来。",
      },
      {
        title: "看清你真正想说的",
        description:
          "初稿写完后，Echo 的 AI 会给你反馈，帮你在文字流里找到信号——那个你一直在绕着转的想法。",
      },
    ],
    featuresEyebrow: "你会得到什么",
    featuresTitle: "不是又一个笔记应用，而是一个思考习惯。",
    whyBuiltLink: "为什么做这个",
    features: [
      {
        title: "每天一个问题",
        description:
          "由 AI 生成，每天都不同，目的是打破你的思维自动驾驶，而不是收集日记。",
      },
      {
        title: "只向前的编辑器",
        description:
          "编辑器只能向前。这是越过空白页、进入真实想法的最快方式。",
      },
      {
        title: "每个回答都有 AI 反馈",
        description:
          "Echo 会为你的回答打分，告诉你哪里挖得深、哪里还停留在表面。",
      },
      {
        title: "用连续记录养成习惯",
        description:
          "每日提醒和连续打卡记录，让反思从“想做的事”变成“在做的事”。",
      },
      {
        title: "可选的公开动态",
        description:
          "想分享时再分享润色后的版本。除非你主动选择，一切都保持私密。",
      },
      {
        title: "默认私密",
        description:
          "原始草稿只属于你。用 Apple 或 Google 登录，由你决定什么内容离开这个应用。",
      },
    ],
    faqEyebrow: "答疑",
    faqTitle: "常见问题",
    faqItems: [
      {
        question: "Echo 是什么？",
        answer:
          "Echo 是一款 iPhone 上的每日反思应用。它每天给你一个由 AI 生成、值得回答的问题。你不删改地一路写下回答，写完杂乱的初稿后，Echo 的 AI 会帮你看清你真正想说的是什么。",
      },
      {
        question: "「只向前写」是什么意思？",
        answer:
          "在 Echo 里，写的过程中不能删除或重写。这样你就不会一边写一边打磨句子而停止思考。初稿完成后，AI 会给你反馈，并帮你润色。编辑发生在思考之后，而不是思考之中。",
      },
      {
        question: "Echo 免费吗？",
        answer:
          "是的，Echo 可以免费下载使用。Echo Pro 是可选订阅，解锁更多功能，通过你的 Apple ID 管理，随时可以在 iPhone 的订阅设置中取消。",
      },
      {
        question: "我写的内容是私密的吗？",
        answer:
          "是的。你的反思默认私密。Echo 有一个可选的公开动态，你可以选择分享某条反思的润色版本，但除非你主动分享，否则任何内容都不会被公开。",
      },
    ],
    bottomEyebrow: "今天开始",
    bottomTitle: "你的第一个问题在等你。",
    bottomDescription:
      "下载 Echo，回答一个问题，看看五分钟只向前写的文字能带出什么。",
    footerMadeBy: "Echo 由打造 Translator 的 Stage5 团队开发。",
    footerTranslator: "Translator",
    footerSupport: "支持",
    footerPrivacy: "隐私",
    footerTerms: "条款",
  },
  fr: {
    pageTitle:
      "Echo - Une question par jour | App de réflexion IA pour iPhone",
    metadataDescription:
      "Echo vous donne une question générée par IA chaque jour. Écrivez sans retour en arrière, puis laissez l'IA vous montrer ce que vous vouliez vraiment dire. Construisez une habitude de réflexion quotidienne avec séries, retours et fil public facultatif. Gratuit sur l'App Store.",
    navGetApp: "Obtenir l'app",
    eyebrow: "Réflexion quotidienne, l'IA à l'envers",
    title: "Une question par jour. Écrivez avant de trop réfléchir.",
    subtitle:
      "La plupart des apps ouvrent l'IA pour obtenir des réponses. Echo fait l'inverse : vous recevez une question par jour, vous écrivez sans revenir en arrière, puis l'IA vous montre ce que vous vouliez vraiment dire une fois le brouillon sorti.",
    freeNote: "Gratuit sur iPhone. Echo Pro est facultatif.",
    appStoreTopLine: "Télécharger dans l'",
    appStoreBottomLine: "App Store",
    mockQuestionLabel: "Question du jour",
    mockQuestion:
      "Qu'avez-vous évité de dire à voix haute cette semaine — et à qui ?",
    mockDraft:
      "honnêtement, la première chose qui me vient, c'est la réunion de mardi où j'ai juste hoché la tête au lieu de",
    mockForwardOnly: "Vers l'avant seulement · sans effacer",
    mockStreak: "Série de 12 jours",
    howEyebrow: "Comment ça marche",
    howTitle:
      "Une réflexion qui prend cinq minutes honnêtes, pas une page blanche.",
    steps: [
      {
        title: "Recevez une question par jour",
        description:
          "L'IA d'Echo vous écrit une seule question qui mérite réflexion — pas une liste générique de prompts que vous faites défiler.",
      },
      {
        title: "Écrivez sans retour en arrière",
        description:
          "Pas de suppression, pas de réécriture, pas de perfectionnisme. Vous continuez d'avancer pour que votre vraie pensée sorte avant que votre éditeur intérieur ne se réveille.",
      },
      {
        title: "Voyez ce que vous vouliez vraiment dire",
        description:
          "Une fois le brouillon terminé, l'IA d'Echo vous donne un retour et vous aide à trouver le signal dans le flux — cette pensée autour de laquelle vous tourniez depuis le début.",
      },
    ],
    featuresEyebrow: "Ce que vous obtenez",
    featuresTitle: "Une habitude de pensée, pas une énième app de notes.",
    whyBuiltLink: "Pourquoi on l'a créé",
    features: [
      {
        title: "Une question quotidienne",
        description:
          "Générée par IA, différente chaque jour, conçue pour casser votre pilote automatique mental plutôt que pour collectionner des pages de journal.",
      },
      {
        title: "Écriture vers l'avant uniquement",
        description:
          "L'éditeur ne va que vers l'avant. C'est le moyen le plus rapide de dépasser la page blanche et d'atteindre ce que vous pensez vraiment.",
      },
      {
        title: "Un retour IA sur chaque réponse",
        description:
          "Echo note votre réponse et vous dit où vous êtes allé en profondeur et où vous êtes resté en surface.",
      },
      {
        title: "Des séries qui créent l'habitude",
        description:
          "Les rappels quotidiens et le suivi des séries transforment la réflexion en quelque chose que vous faites, pas que vous comptez faire.",
      },
      {
        title: "Un fil public facultatif",
        description:
          "Partagez une version peaufinée d'une réflexion quand vous le souhaitez. Tout reste privé sauf si vous en décidez autrement.",
      },
      {
        title: "Privé par défaut",
        description:
          "Vos brouillons bruts vous appartiennent. Connectez-vous avec Apple ou Google et décidez vous-même de ce qui sort de l'app.",
      },
    ],
    faqEyebrow: "Questions",
    faqTitle: "Questions fréquentes",
    faqItems: [
      {
        question: "Qu'est-ce qu'Echo ?",
        answer:
          "Echo est une app de réflexion quotidienne pour iPhone. Chaque jour, elle vous donne une question générée par IA qui mérite une réponse. Vous écrivez sans revenir en arrière, puis l'IA d'Echo vous aide à voir ce que vous vouliez vraiment dire une fois le brouillon sorti.",
      },
      {
        question: "Que signifie écrire sans retour en arrière ?",
        answer:
          "Dans Echo, vous écrivez sans effacer ni réécrire en cours de route. Cela vous évite de polir des phrases au lieu de penser. Une fois le brouillon terminé, l'IA vous donne un retour et peut vous aider à le peaufiner : l'édition vient après la réflexion, pas pendant.",
      },
      {
        question: "Echo est-il gratuit ?",
        answer:
          "Oui, Echo est gratuit à télécharger et à utiliser. Echo Pro est un abonnement facultatif, géré via votre identifiant Apple, qui débloque davantage. Vous pouvez l'annuler à tout moment depuis les réglages d'abonnement de votre iPhone.",
      },
      {
        question: "Mes écrits sont-ils privés ?",
        answer:
          "Oui. Vos réflexions sont privées par défaut. Echo propose un fil public facultatif où vous pouvez choisir de partager une version peaufinée d'une réflexion, mais rien n'est partagé sans votre décision.",
      },
    ],
    bottomEyebrow: "Commencez aujourd'hui",
    bottomTitle: "Votre première question vous attend.",
    bottomDescription:
      "Téléchargez Echo, répondez à une question et voyez ce que cinq minutes d'écriture sans retour en arrière font remonter.",
    footerMadeBy: "Echo est créé par Stage5, l'équipe derrière Translator.",
    footerTranslator: "Translator",
    footerSupport: "Assistance",
    footerPrivacy: "Confidentialité",
    footerTerms: "Conditions",
  },
  de: {
    pageTitle: "Echo - Eine Frage pro Tag | KI-Reflexions-App für iPhone",
    metadataDescription:
      "Echo gibt dir jeden Tag eine KI-generierte Frage. Schreib nur vorwärts, ohne zu editieren, und lass dir von der KI zeigen, was du wirklich gemeint hast. Baue eine tägliche Reflexionsgewohnheit auf – mit Streaks, Feedback und optionalem öffentlichem Feed. Kostenlos im App Store.",
    navGetApp: "App laden",
    eyebrow: "Tägliche Reflexion, KI rückwärts gedacht",
    title: "Eine Frage pro Tag. Schreib, bevor du zu viel nachdenkst.",
    subtitle:
      "Die meisten Apps öffnen KI, um Antworten zu bekommen. Echo nutzt sie rückwärts: Du bekommst eine Frage pro Tag, schreibst nur vorwärts ohne zu editieren, und lässt dir von der KI zeigen, was du eigentlich gemeint hast, sobald der unfertige Entwurf draußen ist.",
    freeNote: "Kostenlos auf dem iPhone. Echo Pro ist optional.",
    appStoreTopLine: "Laden im",
    appStoreBottomLine: "App Store",
    mockQuestionLabel: "Frage des Tages",
    mockQuestion:
      "Was hast du diese Woche vermieden auszusprechen – und wem gegenüber?",
    mockDraft:
      "ehrlich gesagt fällt mir als erstes das Meeting am Dienstag ein, in dem ich nur genickt habe statt",
    mockForwardOnly: "Nur vorwärts · kein Löschen",
    mockStreak: "12 Tage in Folge",
    howEyebrow: "So funktioniert es",
    howTitle: "Reflexion, die fünf ehrliche Minuten dauert – keine leere Seite.",
    steps: [
      {
        title: "Erhalte eine Frage pro Tag",
        description:
          "Echos KI schreibt dir eine einzige Frage, bei der es sich lohnt zu verweilen – keine generische Prompt-Liste zum Durchscrollen.",
      },
      {
        title: "Schreib nur vorwärts",
        description:
          "Kein Löschen, kein Umschreiben, kein Perfektionismus. Du bleibst in Bewegung, damit dein echtes Denken herauskommt, bevor dein innerer Lektor aufwacht.",
      },
      {
        title: "Sieh, was du wirklich gemeint hast",
        description:
          "Wenn der Entwurf fertig ist, gibt dir Echos KI Feedback und hilft dir, das Signal im Strom zu finden – den Gedanken, den du die ganze Zeit umkreist hast.",
      },
    ],
    featuresEyebrow: "Was du bekommst",
    featuresTitle: "Eine Denkgewohnheit, keine weitere Notiz-App.",
    whyBuiltLink: "Warum wir es gebaut haben",
    features: [
      {
        title: "Eine tägliche Frage",
        description:
          "KI-generiert, jeden Tag anders und darauf ausgelegt, deinen mentalen Autopiloten zu durchbrechen statt Tagebucheinträge zu sammeln.",
      },
      {
        title: "Nur-vorwärts-Schreiben",
        description:
          "Der Editor bewegt sich nur vorwärts. Das ist der schnellste Weg, an der leeren Seite vorbei zu dem zu kommen, was du wirklich denkst.",
      },
      {
        title: "KI-Feedback zu jeder Antwort",
        description:
          "Echo bewertet deine Antwort und zeigt dir, wo du in die Tiefe gegangen bist und wo du an der Oberfläche geblieben bist.",
      },
      {
        title: "Streaks, die zur Gewohnheit machen",
        description:
          "Tägliche Erinnerungen und Streak-Tracking machen Reflexion zu etwas, das du tust – nicht zu etwas, das du dir vornimmst.",
      },
      {
        title: "Ein optionaler öffentlicher Feed",
        description:
          "Teile eine polierte Version einer Reflexion, wenn du willst. Alles bleibt privat, solange du nichts anderes entscheidest.",
      },
      {
        title: "Standardmäßig privat",
        description:
          "Deine rohen Entwürfe gehören dir. Melde dich mit Apple oder Google an und entscheide selbst, was die App jemals verlässt.",
      },
    ],
    faqEyebrow: "Fragen",
    faqTitle: "Häufige Fragen",
    faqItems: [
      {
        question: "Was ist Echo?",
        answer:
          "Echo ist eine tägliche Reflexions-App für das iPhone. Jeden Tag bekommst du eine KI-generierte Frage, die eine Antwort wert ist. Du schreibst deine Antwort nur vorwärts, ohne zu editieren, und danach hilft dir Echos KI zu sehen, was du eigentlich gemeint hast.",
      },
      {
        question: "Was bedeutet Nur-vorwärts-Schreiben?",
        answer:
          "In Echo schreibst du, ohne unterwegs zu löschen oder umzuschreiben. So polierst du keine Sätze, statt zu denken. Wenn dein Entwurf fertig ist, gibt dir die KI Feedback und hilft beim Feinschliff – das Editieren passiert nach dem Denken, nicht währenddessen.",
      },
      {
        question: "Ist Echo kostenlos?",
        answer:
          "Ja, Echo ist kostenlos zum Herunterladen und Nutzen. Echo Pro ist ein optionales Abo, das über deine Apple-ID verwaltet wird und mehr freischaltet. Du kannst es jederzeit in den Abo-Einstellungen deines iPhones kündigen.",
      },
      {
        question: "Bleiben meine Texte privat?",
        answer:
          "Ja. Deine Reflexionen sind standardmäßig privat. Echo hat einen optionalen öffentlichen Feed, in dem du eine polierte Version einer Reflexion teilen kannst – aber nichts wird geteilt, solange du es nicht selbst entscheidest.",
      },
    ],
    bottomEyebrow: "Starte heute",
    bottomTitle: "Deine erste Frage wartet schon.",
    bottomDescription:
      "Lade Echo herunter, beantworte eine Frage und sieh, was fünf Minuten Vorwärts-Schreiben lostreten.",
    footerMadeBy: "Echo kommt von Stage5, dem Team hinter Translator.",
    footerTranslator: "Translator",
    footerSupport: "Support",
    footerPrivacy: "Datenschutz",
    footerTerms: "Nutzungsbedingungen",
  },
  pt: {
    pageTitle:
      "Echo - Uma pergunta por dia | App de reflexão com IA para iPhone",
    metadataDescription:
      "O Echo traz uma pergunta gerada por IA todos os dias. Escreva só para a frente, sem editar, e deixe a IA mostrar o que você realmente queria dizer. Crie um hábito de reflexão diária com sequências, feedback e um feed público opcional. Grátis na App Store.",
    navGetApp: "Baixar o app",
    eyebrow: "Reflexão diária, IA usada ao contrário",
    title: "Uma pergunta por dia. Escreva antes de pensar demais.",
    subtitle:
      "A maioria dos apps abre a IA para conseguir respostas. O Echo usa ao contrário: você recebe uma pergunta por dia, escreve só para a frente sem editar e deixa a IA mostrar o que você realmente queria dizer depois que o rascunho bagunçado saiu.",
    freeNote: "Grátis no iPhone. O Echo Pro é opcional.",
    appStoreTopLine: "Baixar na",
    appStoreBottomLine: "App Store",
    mockQuestionLabel: "Pergunta de hoje",
    mockQuestion:
      "O que você evitou dizer em voz alta esta semana — e para quem?",
    mockDraft:
      "sinceramente, a primeira coisa que me vem à cabeça é a reunião de terça em que eu só assenti em vez de",
    mockForwardOnly: "Só para a frente · sem apagar",
    mockStreak: "Sequência de 12 dias",
    howEyebrow: "Como funciona",
    howTitle:
      "Uma reflexão que leva cinco minutos honestos, não uma página em branco.",
    steps: [
      {
        title: "Receba uma pergunta por dia",
        description:
          "A IA do Echo escreve uma única pergunta que vale a pena, não uma lista genérica de prompts que você passa direto.",
      },
      {
        title: "Escreva só para a frente",
        description:
          "Sem apagar, sem reescrever, sem perfeccionismo. Você segue em frente para que seu pensamento real saia antes do seu editor interno acordar.",
      },
      {
        title: "Veja o que você realmente quis dizer",
        description:
          "Quando o rascunho termina, a IA do Echo dá feedback e ajuda você a achar o sinal na corrente — aquele pensamento que você rodeava o tempo todo.",
      },
    ],
    featuresEyebrow: "O que você ganha",
    featuresTitle: "Um hábito de pensar, não mais um app de notas.",
    whyBuiltLink: "Por que criamos",
    features: [
      {
        title: "Uma pergunta diária",
        description:
          "Gerada por IA, diferente a cada dia e feita para quebrar seu piloto automático mental, não para colecionar entradas de diário.",
      },
      {
        title: "Escrita só para a frente",
        description:
          "O editor só anda para a frente. É o jeito mais rápido de passar da página em branco para o que você realmente pensa.",
      },
      {
        title: "Feedback de IA em cada resposta",
        description:
          "O Echo avalia sua resposta e mostra onde você foi fundo e onde ficou na superfície.",
      },
      {
        title: "Sequências que criam o hábito",
        description:
          "Lembretes diários e o controle de sequências transformam a reflexão em algo que você faz, não em algo que você pretende fazer.",
      },
      {
        title: "Um feed público opcional",
        description:
          "Compartilhe uma versão polida de uma reflexão quando quiser. Tudo fica privado, a menos que você escolha o contrário.",
      },
      {
        title: "Privado por padrão",
        description:
          "Seus rascunhos brutos são seus. Entre com Apple ou Google e decida você mesmo o que sai do app.",
      },
    ],
    faqEyebrow: "Perguntas",
    faqTitle: "Perguntas frequentes",
    faqItems: [
      {
        question: "O que é o Echo?",
        answer:
          "O Echo é um app de reflexão diária para iPhone. Todo dia ele traz uma pergunta gerada por IA que vale a pena responder. Você escreve sua resposta só para a frente, sem editar, e depois a IA do Echo ajuda a ver o que você realmente queria dizer quando o rascunho bagunçado já saiu.",
      },
      {
        question: "O que significa escrever só para a frente?",
        answer:
          "No Echo você escreve sem apagar nem reescrever no meio do caminho. Isso evita que você fique polindo frases em vez de pensar. Quando o rascunho termina, a IA dá feedback e pode ajudar a polir o que você escreveu — a edição vem depois do pensamento, não durante.",
      },
      {
        question: "O Echo é grátis?",
        answer:
          "Sim, o Echo é grátis para baixar e usar. O Echo Pro é uma assinatura opcional, gerenciada pelo seu Apple ID, que desbloqueia mais recursos. Você pode cancelar a qualquer momento nas configurações de assinatura do iPhone.",
      },
      {
        question: "O que eu escrevo é privado?",
        answer:
          "Sim. Suas reflexões são privadas por padrão. O Echo tem um feed público opcional onde você pode escolher compartilhar uma versão polida de uma reflexão, mas nada é compartilhado a menos que você decida.",
      },
    ],
    bottomEyebrow: "Comece hoje",
    bottomTitle: "Sua primeira pergunta está esperando.",
    bottomDescription:
      "Baixe o Echo, responda uma pergunta e veja o que cinco minutos de escrita só para a frente fazem aparecer.",
    footerMadeBy: "O Echo é feito pela Stage5, o time por trás do Translator.",
    footerTranslator: "Translator",
    footerSupport: "Suporte",
    footerPrivacy: "Privacidade",
    footerTerms: "Termos",
  },
  vi: {
    pageTitle:
      "Echo - Mỗi ngày một câu hỏi | Ứng dụng suy ngẫm AI cho iPhone",
    metadataDescription:
      "Echo đưa cho bạn một câu hỏi do AI tạo mỗi ngày. Viết một mạch không xóa sửa, rồi để AI cho bạn thấy điều bạn thực sự muốn nói. Xây thói quen suy ngẫm hằng ngày với chuỗi ngày, phản hồi và bảng tin công khai tùy chọn. Miễn phí trên App Store.",
    navGetApp: "Tải ứng dụng",
    eyebrow: "Suy ngẫm mỗi ngày, dùng AI theo chiều ngược lại",
    title: "Mỗi ngày một câu hỏi. Viết trước khi kịp nghĩ quá nhiều.",
    subtitle:
      "Hầu hết các ứng dụng mở AI để xin câu trả lời. Echo dùng AI theo chiều ngược lại: mỗi ngày bạn nhận một câu hỏi, viết một mạch không xóa sửa, rồi để AI cho bạn thấy điều bạn thực sự muốn nói khi bản nháp lộn xộn đã ra hết.",
    freeNote: "Miễn phí trên iPhone. Echo Pro là tùy chọn.",
    appStoreTopLine: "Tải về trên",
    appStoreBottomLine: "App Store",
    mockQuestionLabel: "Câu hỏi hôm nay",
    mockQuestion: "Tuần này bạn đã tránh nói ra điều gì — và với ai?",
    mockDraft:
      "thật ra điều đầu tiên mình nghĩ đến là cuộc họp hôm thứ ba, lúc mình chỉ gật đầu thay vì",
    mockForwardOnly: "Chỉ viết tiếp · không xóa",
    mockStreak: "Chuỗi 12 ngày",
    howEyebrow: "Cách hoạt động",
    howTitle:
      "Suy ngẫm chỉ cần năm phút thành thật, không phải một trang giấy trắng.",
    steps: [
      {
        title: "Nhận một câu hỏi mỗi ngày",
        description:
          "AI của Echo viết cho bạn một câu hỏi đáng để ngẫm — không phải danh sách gợi ý chung chung mà bạn lướt qua.",
      },
      {
        title: "Viết một mạch, không quay lại",
        description:
          "Không xóa, không viết lại, không cầu toàn. Bạn cứ viết tiếp để suy nghĩ thật của mình kịp tuôn ra trước khi 'biên tập viên' trong đầu thức dậy.",
      },
      {
        title: "Thấy điều bạn thực sự muốn nói",
        description:
          "Khi bản nháp hoàn thành, AI của Echo đưa phản hồi và giúp bạn tìm ra tín hiệu trong dòng chữ — cái suy nghĩ mà bạn cứ loanh quanh mãi.",
      },
    ],
    featuresEyebrow: "Bạn nhận được gì",
    featuresTitle: "Một thói quen tư duy, không phải thêm một ứng dụng ghi chú.",
    whyBuiltLink: "Vì sao chúng tôi tạo ra nó",
    features: [
      {
        title: "Mỗi ngày một câu hỏi",
        description:
          "Do AI tạo, mỗi ngày một khác, được thiết kế để phá chế độ lái tự động trong đầu bạn chứ không phải để gom nhật ký.",
      },
      {
        title: "Viết không quay lại",
        description:
          "Trình soạn thảo chỉ tiến về phía trước. Đó là cách nhanh nhất để vượt qua trang giấy trắng và chạm vào điều bạn thực sự nghĩ.",
      },
      {
        title: "Phản hồi AI cho mỗi câu trả lời",
        description:
          "Echo chấm câu trả lời của bạn và chỉ ra chỗ nào bạn đào sâu, chỗ nào còn hời hợt.",
      },
      {
        title: "Chuỗi ngày giúp xây thói quen",
        description:
          "Nhắc nhở hằng ngày và theo dõi chuỗi biến việc suy ngẫm thành điều bạn làm, không phải điều bạn định làm.",
      },
      {
        title: "Bảng tin công khai tùy chọn",
        description:
          "Chia sẻ phiên bản đã trau chuốt khi bạn muốn. Mọi thứ vẫn riêng tư trừ khi bạn chọn khác.",
      },
      {
        title: "Riêng tư theo mặc định",
        description:
          "Bản nháp thô là của riêng bạn. Đăng nhập bằng Apple hoặc Google và tự quyết định điều gì được rời khỏi ứng dụng.",
      },
    ],
    faqEyebrow: "Hỏi đáp",
    faqTitle: "Câu hỏi thường gặp",
    faqItems: [
      {
        question: "Echo là gì?",
        answer:
          "Echo là ứng dụng suy ngẫm hằng ngày cho iPhone. Mỗi ngày ứng dụng đưa cho bạn một câu hỏi do AI tạo, đáng để trả lời. Bạn viết câu trả lời một mạch không xóa sửa, rồi AI của Echo giúp bạn nhìn ra điều mình thực sự muốn nói khi bản nháp đã ra hết.",
      },
      {
        question: "Viết không xóa sửa nghĩa là gì?",
        answer:
          "Trong Echo, bạn viết mà không xóa hay viết lại giữa chừng. Điều đó giúp bạn không sa vào trau chuốt câu chữ thay vì suy nghĩ. Khi bản nháp xong, AI sẽ đưa phản hồi và có thể giúp trau chuốt — việc chỉnh sửa diễn ra sau khi suy nghĩ, không phải trong lúc suy nghĩ.",
      },
      {
        question: "Echo có miễn phí không?",
        answer:
          "Có, Echo miễn phí để tải và sử dụng. Echo Pro là gói đăng ký tùy chọn, quản lý qua Apple ID, mở khóa thêm tính năng. Bạn có thể hủy bất cứ lúc nào trong cài đặt đăng ký trên iPhone.",
      },
      {
        question: "Bài viết của tôi có riêng tư không?",
        answer:
          "Có. Các bài suy ngẫm của bạn riêng tư theo mặc định. Echo có bảng tin công khai tùy chọn, nơi bạn có thể chọn chia sẻ phiên bản đã trau chuốt, nhưng không gì được chia sẻ trừ khi bạn quyết định.",
      },
    ],
    bottomEyebrow: "Bắt đầu hôm nay",
    bottomTitle: "Câu hỏi đầu tiên đang chờ bạn.",
    bottomDescription:
      "Tải Echo, trả lời một câu hỏi và xem năm phút viết không xóa sửa sẽ làm lộ ra điều gì.",
    footerMadeBy: "Echo do Stage5 — đội ngũ đứng sau Translator — phát triển.",
    footerTranslator: "Translator",
    footerSupport: "Hỗ trợ",
    footerPrivacy: "Quyền riêng tư",
    footerTerms: "Điều khoản",
  },
} satisfies Record<Locale, EchoCopy>;

function getEchoSeoContext(locale: Locale) {
  const copy = echoCopy[locale];
  const availableLocales = localizedLocalesForPath(ECHO_PATH);
  const languageUrls = Object.fromEntries(
    availableLocales.map((supportedLocale) => [
      supportedLocale,
      new URL(
        localizePathForLocale(supportedLocale, ECHO_PATH),
        BASE_URL
      ).toString(),
    ])
  ) as Record<string, string>;
  const canonicalUrl = languageUrls[locale];
  const ogLocale = openGraphLocaleByLocale[locale];
  const alternateOgLocale = availableLocales
    .filter((supportedLocale) => supportedLocale !== locale)
    .map((supportedLocale) => openGraphLocaleByLocale[supportedLocale]);

  return { copy, canonicalUrl, ogLocale, alternateOgLocale, languageUrls };
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { copy, canonicalUrl, ogLocale, alternateOgLocale, languageUrls } =
    getEchoSeoContext(locale);

  return {
    title: copy.pageTitle,
    description: copy.metadataDescription,
    keywords: [
      "daily reflection app",
      "AI journaling app",
      "journaling prompts",
      "daily question app",
      "guided journal iPhone",
      "freewriting app",
      "self reflection app",
      "AI journal feedback",
      "mindfulness writing app",
      "Echo Stream Your Mind",
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": languageUrls.en,
        ...languageUrls,
      },
    },
    openGraph: {
      title: copy.pageTitle,
      description: copy.metadataDescription,
      url: canonicalUrl,
      siteName: "Echo by Stage5",
      type: "website",
      locale: ogLocale,
      alternateLocale: alternateOgLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: copy.pageTitle,
      description: copy.metadataDescription,
    },
  };
}

function getEchoStructuredData(locale: Locale) {
  const { copy, canonicalUrl } = getEchoSeoContext(locale);

  const app = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Echo: Stream Your Mind",
    url: canonicalUrl,
    installUrl: ECHO_APP_STORE_URL,
    inLanguage: locale,
    description: copy.metadataDescription,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free download with an optional Echo Pro subscription.",
    },
    publisher: {
      "@type": "Organization",
      name: "Stage5 Tools",
      url: BASE_URL,
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return { app, faq };
}

export default async function EchoLandingPage() {
  const locale = await getLocale();
  const copy = echoCopy[locale];
  const localizedHref = (href: string) => localizePathForLocale(locale, href);
  const structuredData = getEchoStructuredData(locale);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Script
        id="echo-structured-data-app"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.app),
        }}
      />
      <Script
        id="echo-structured-data-faq"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.faq),
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[-8rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/16 blur-3xl" />
        <div className="absolute right-[-10rem] top-[14rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-400/10 blur-3xl" />
        <div className="absolute bottom-[6rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        <header className="flex items-center justify-between pt-10 pb-8">
          <div className="flex items-baseline gap-3">
            <span className="font-montserrat text-xl font-semibold tracking-tight text-white">
              Echo
            </span>
            <Link
              href={localizedHref("/")}
              className="text-sm text-gray-500 transition hover:text-white"
            >
              by Stage5
            </Link>
          </div>
          <a
            href={ECHO_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            {copy.navGetApp}
          </a>
        </header>

        <section className="py-10 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-300">
                {copy.eyebrow}
              </span>
              <h1 className="mt-6 font-montserrat text-5xl font-bold tracking-tight text-white md:text-7xl">
                {copy.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
                {copy.subtitle}
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <EchoAppStoreButton
                  trackingLabel="Echo Hero CTA"
                  topLine={copy.appStoreTopLine}
                  bottomLine={copy.appStoreBottomLine}
                />
                <span className="text-sm text-gray-400">{copy.freeNote}</span>
              </div>
            </div>

            <PhoneMock copy={copy} />
          </div>
        </section>

        <section className="py-20">
          <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-300">
            {copy.howEyebrow}
          </span>
          <h2 className="mt-6 max-w-3xl text-4xl font-light text-white md:text-5xl">
            {copy.howTitle}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {copy.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-7 backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/40 bg-violet-400/15 text-lg font-semibold text-violet-200">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-300">
                {copy.featuresEyebrow}
              </span>
              <h2 className="mt-6 max-w-3xl text-4xl font-light text-white md:text-5xl">
                {copy.featuresTitle}
              </h2>
            </div>
            <Link
              href={localizedHref("/about")}
              className="text-sm font-semibold text-gray-300 transition hover:text-white"
            >
              {copy.whyBuiltLink}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {copy.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/8"
              >
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-300">
            {copy.faqEyebrow}
          </span>
          <h2 className="mt-6 max-w-3xl text-4xl font-light text-white md:text-5xl">
            {copy.faqTitle}
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {copy.faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gray-300">
              {copy.bottomEyebrow}
            </span>
            <h2 className="mt-6 text-4xl font-light text-white md:text-5xl">
              {copy.bottomTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {copy.bottomDescription}
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <EchoAppStoreButton
              trackingLabel="Echo Bottom CTA"
              topLine={copy.appStoreTopLine}
              bottomLine={copy.appStoreBottomLine}
            />
          </div>
        </section>

        <footer className="border-t border-gray-800 py-12">
          <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <span>{copy.footerMadeBy}</span>
            <nav className="flex flex-wrap gap-6">
              <Link
                href={localizedHref("/")}
                className="transition hover:text-white"
              >
                {copy.footerTranslator}
              </Link>
              <Link href="/echo/support" className="transition hover:text-white">
                {copy.footerSupport}
              </Link>
              <Link href="/echo/privacy" className="transition hover:text-white">
                {copy.footerPrivacy}
              </Link>
              <Link href="/echo/terms" className="transition hover:text-white">
                {copy.footerTerms}
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}

function PhoneMock({ copy }: { copy: EchoCopy }) {
  return (
    <div className="relative mx-auto w-full max-w-[22rem]">
      <div className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.18),transparent_60%)]" />
      <div className="relative rounded-[44px] border border-white/12 bg-[#0a0812]/90 p-3 shadow-[0_28px_100px_rgba(0,0,0,0.5)]">
        <div className="rounded-[36px] border border-white/8 bg-[linear-gradient(180deg,#120f1d,#07060c_70%)] px-6 pb-8 pt-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300/80">
            {copy.mockQuestionLabel}
          </div>
          <p className="mt-4 font-montserrat text-xl font-semibold leading-snug text-white">
            {copy.mockQuestion}
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm leading-6 text-gray-300">
              {copy.mockDraft}
              <span className="ml-0.5 inline-block h-4 w-[2px] translate-y-[3px] animate-pulse bg-violet-300" />
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
            <span>{copy.mockForwardOnly}</span>
            <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-2.5 py-1 text-violet-200">
              {copy.mockStreak}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

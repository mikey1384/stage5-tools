import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FeatureDownloadCta } from "../../components/FeatureDownloadCta";
import { HeroDownloadActions } from "../../components/HeroDownloadActions";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { getLocale } from "../../lib/get-locale";
import { homeHrefForLocale, localizePathForLocale } from "../../lib/locale-routing";
import type { Locale } from "../../lib/locales";
import { buildMetadata } from "../../lib/seo";
import { t } from "../../lib/strings";

type AboutPageCopy = {
  metadataDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroPoints: string[];
  sectionEyebrow: string;
  sectionTitle: string;
  productCards: Array<{
    eyebrow: string;
    title: string;
    body: string;
    ctaLabel: string;
    href: string;
    external?: boolean;
  }>;
  ctaTitle: string;
  ctaBody: string;
  ctaNote: string;
};

const pageCopy: Partial<Record<Locale, AboutPageCopy>> = {
  en: {
    metadataDescription:
      "Stage5 builds Translator and Echo, two apps that use AI to make language and thinking friction smaller instead of adding more app friction.",
    heroEyebrow: "What Stage5 is doing",
    heroTitle: "We build products that help people get past the limits they get handed.",
    heroDescription:
      "Translator helps you get past the language and recommendation limits of your usual feeds. Echo helps you get past your own mental autopilot by giving you one useful question a day and getting you to write before you overthink it.",
    heroPoints: [
      "Translator helps you find videos your usual apps would never surface and watch them in your own language",
      "Echo uses AI to break your internal autopilot with one daily question worth answering",
      "Both products try to expand what you can reach instead of trapping you inside a narrower loop",
    ],
    sectionEyebrow: "Products",
    sectionTitle:
      "Right now that means two products: Translator helps you get through foreign-language video, and Echo helps you think more clearly from one good question a day.",
    productCards: [
      {
        eyebrow: "Video",
        title: "Translator",
        body: "Translator helps you find videos outside your usual algorithm, watch them in your own language, and turn the good ones into subtitled or dubbed videos you can keep.",
        ctaLabel: "See Translator",
        href: "/translate",
      },
      {
        eyebrow: "Writing",
        title: "Echo: Stream your mind",
        body: "Echo started from using AI backwards. Instead of opening AI for answers, you get one daily question, write forward-only, and let the app help you see what you actually meant after the messy draft is out.",
        ctaLabel: "See Echo on the App Store",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle: "Download Translator and see the product instead of reading around it.",
    ctaBody:
      "The fastest way to understand what Stage5 is building is to open the app, try the free tools, and move through the workflow yourself.",
    ctaNote:
      "Downloading and subtitle editing are free. AI only costs money when you actually run AI features.",
  },
  ko: {
    metadataDescription:
      "Stage5는 AI가 복잡함을 더하는 대신 마찰을 줄여야 한다는 생각으로 Translator와 Echo를 만듭니다.",
    heroEyebrow: "Stage5가 하는 일",
    heroTitle: "우리는 사람들이 주어진 한계를 넘어가게 돕는 제품을 만듭니다.",
    heroDescription:
      "Translator는 평소 피드가 가두는 언어와 추천의 한계를 넘게 돕고, Echo는 하루에 하나씩 받는 질문으로 자기 안의 자동반응에서 벗어나게 돕습니다.",
    heroPoints: [
      "Translator는 평소 앱이 잘 보여주지 않는 영상을 찾고 내 언어로 보게 돕습니다",
      "Echo는 하루에 하나의 질문으로 내 안의 자동반응을 깨고 생각을 끌어냅니다",
      "두 제품 모두 사람을 더 좁은 루프에 가두기보다 닿을 수 있는 범위를 넓히는 데 집중합니다",
    ],
    sectionEyebrow: "제품",
    sectionTitle:
      "지금은 그 생각이 두 제품으로 나와 있습니다. Translator는 외국어 영상의 장벽을 넘게 돕고, Echo는 하루에 하나씩 받는 질문으로 더 또렷하게 생각하게 돕습니다.",
    productCards: [
      {
        eyebrow: "비디오",
        title: "Translator",
        body: "Translator는 평소 알고리즘 밖의 영상을 찾고, 내 언어로 보고, 좋은 영상은 간직할 수 있는 자막 영상이나 더빙 영상으로 바꾸게 도와줍니다.",
        ctaLabel: "Translator 보기",
        href: "/translate",
      },
      {
        eyebrow: "쓰기",
        title: "Echo: Stream your mind",
        body: "Echo는 AI를 거꾸로 써보자는 생각에서 시작했습니다. 답을 받으려고 여는 대신, 하루에 한 번 질문을 받고, 고치지 않고 계속 쓰고, 마지막에야 AI가 내가 실제로 하려던 말을 정리해줍니다.",
        ctaLabel: "App Store에서 Echo 보기",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle: "글만 읽기보다 Translator를 직접 열어보세요.",
    ctaBody:
      "Stage5가 무엇을 만들고 있는지 가장 빨리 이해하는 방법은 앱을 열고, 무료 도구를 써보고, 흐름을 직접 따라가 보는 것입니다.",
    ctaNote:
      "다운로드와 자막 편집은 무료입니다. AI 비용은 AI 기능을 실제로 실행할 때만 생깁니다.",
  },
  es: {
    metadataDescription:
      "Stage5 crea Translator y Echo, dos apps diseñadas para ayudar a la gente a salir de los límites de idioma, recomendación y pensamiento en piloto automático.",
    heroEyebrow: "Lo que construye Stage5",
    heroTitle: "Creamos productos que ayudan a la gente a ir más allá de los límites que le tocaron.",
    heroDescription:
      "Translator te ayuda a salir de los límites de idioma y recomendación de tus feeds habituales. Echo te ayuda a salir de tu propio piloto automático mental con una buena pregunta al día y a escribir antes de pensarlo de más.",
    heroPoints: [
      "Translator te ayuda a encontrar videos que tus apps habituales nunca te mostrarían y a verlos en tu idioma",
      "Echo usa IA para romper tu piloto automático interno con una pregunta diaria que vale la pena responder",
      "Ambos productos intentan ampliar lo que puedes alcanzar en lugar de dejarte atrapado en un bucle más estrecho",
    ],
    sectionEyebrow: "Productos",
    sectionTitle:
      "Ahora mismo eso significa dos productos: Translator te ayuda a atravesar videos en otros idiomas, y Echo te ayuda a pensar con más claridad a partir de una buena pregunta al día.",
    productCards: [
      {
        eyebrow: "Video",
        title: "Translator",
        body: "Translator te ayuda a encontrar videos fuera de tu algoritmo habitual, verlos en tu idioma y convertir los buenos en videos subtitulados o doblados que vale la pena guardar.",
        ctaLabel: "Ver Translator",
        href: "/translate",
      },
      {
        eyebrow: "Escritura",
        title: "Echo: Stream your mind",
        body: "Echo nació de usar la IA al revés. En lugar de abrirla para pedir respuestas, recibes una pregunta al día, escribes sin volver atrás y dejas que la app te ayude a ver lo que realmente querías decir cuando el borrador desordenado ya salió.",
        ctaLabel: "Ver Echo en el App Store",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle: "Descarga Translator y entiende el producto usándolo, no leyéndolo.",
    ctaBody:
      "La forma más rápida de entender lo que construye Stage5 es abrir la app, probar las herramientas gratuitas y recorrer el flujo por ti mismo.",
    ctaNote:
      "Descargar y editar subtítulos es gratis. La IA solo cuesta cuando realmente ejecutas funciones de IA.",
  },
  ja: {
    metadataDescription:
      "Stage5 は、言語の壁、推薦ループ、思考の惰性を抜けやすくするために Translator と Echo を作っています。",
    heroEyebrow: "Stage5 が作っているもの",
    heroTitle: "私たちは、人が与えられた限界を越えていけるプロダクトを作っています。",
    heroDescription:
      "Translator は、いつものフィードにある言語と推薦の限界を越えるのを助けます。Echo は、1日1つの良い問いを投げて、考えすぎる前に書かせることで、自分の思考のオートパイロットを抜けるのを助けます。",
    heroPoints: [
      "Translator は、いつものアプリでは出会えない動画を見つけて、自分の言語で見られるようにします",
      "Echo は、答える価値のある1日の問いで内側のオートパイロットを崩します",
      "どちらの製品も、人をより狭いループに閉じ込めるのではなく、届く範囲を広げることを目指しています",
    ],
    sectionEyebrow: "製品",
    sectionTitle:
      "今の Stage5 は2つの製品です。Translator は外国語動画を突破するのを助け、Echo は1日1つの良い問いでよりクリアに考えるのを助けます。",
    productCards: [
      {
        eyebrow: "動画",
        title: "Translator",
        body: "Translator は、いつものアルゴリズムの外にある動画を見つけ、自分の言語で見て、良いものを手元に残せる字幕付き動画や吹き替え動画に変えるのを助けます。",
        ctaLabel: "Translator を見る",
        href: "/translate",
      },
      {
        eyebrow: "書くこと",
        title: "Echo: Stream your mind",
        body: "Echo は、AI を逆向きに使ってみようという発想から始まりました。答えを求めて開くのではなく、毎日1つの問いを受け取り、戻らずに書き、最後にアプリが乱れた下書きの奥にあった本音を見せてくれます。",
        ctaLabel: "App Store で Echo を見る",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle: "説明を読むより、Translator を開いて体験してください。",
    ctaBody:
      "Stage5 が何を作っているかをいちばん早く理解する方法は、アプリを開き、無料ツールを試し、その流れを自分でたどることです。",
    ctaNote:
      "ダウンロードと字幕編集は無料です。AI の費用は AI 機能を実際に使ったときだけ発生します。",
  },
  zh: {
    metadataDescription:
      "Stage5 打造 Translator 和 Echo，两款产品都在帮助人们突破语言、推荐循环和思维惯性带来的限制。",
    heroEyebrow: "Stage5 在做什么",
    heroTitle: "我们做的产品，是为了帮人越过那些被动接受的限制。",
    heroDescription:
      "Translator 帮你越过日常信息流里的语言和推荐限制。Echo 用每天一个值得回答的问题，帮你跳出自己的思维惯性，在过度思考之前先写出来。",
    heroPoints: [
      "Translator 帮你找到平时应用根本不会推给你的视频，并用你的语言观看",
      "Echo 用每天一个值得回答的问题，打破你内在的自动驾驶模式",
      "这两个产品都在扩大你能触达的范围，而不是把你困在更窄的循环里",
    ],
    sectionEyebrow: "产品",
    sectionTitle:
      "现在这件事对应两款产品：Translator 帮你穿过外语视频的障碍，Echo 用每天一个好问题帮你想得更清楚。",
    productCards: [
      {
        eyebrow: "视频",
        title: "Translator",
        body: "Translator 帮你找到平时算法之外的视频，用你的语言观看，再把真正值得留下的内容做成可保存的字幕视频或配音视频。",
        ctaLabel: "查看 Translator",
        href: "/translate",
      },
      {
        eyebrow: "写作",
        title: "Echo: Stream your mind",
        body: "Echo 来自一种把 AI 反着用的想法。你不是打开 AI 去要答案，而是每天收到一个问题，只往前写，不回改，等草稿流出来之后再让应用帮你看清自己真正想说什么。",
        ctaLabel: "在 App Store 查看 Echo",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle: "下载 Translator，亲自用一遍，比继续看介绍更快。",
    ctaBody:
      "想最快理解 Stage5 在做什么，最直接的方式就是打开应用，先试试免费工具，再亲自走完这套流程。",
    ctaNote:
      "下载和字幕编辑免费。只有真正运行 AI 功能时才会产生 AI 费用。",
  },
  fr: {
    metadataDescription:
      "Stage5 crée Translator et Echo, deux produits pensés pour aider les gens à dépasser les limites de langue, de recommandation et de pilote automatique mental.",
    heroEyebrow: "Ce que Stage5 construit",
    heroTitle: "Nous créons des produits qui aident les gens à dépasser les limites qu’on leur impose.",
    heroDescription:
      "Translator vous aide à dépasser les limites de langue et de recommandation de vos flux habituels. Echo vous aide à sortir de votre propre pilote automatique mental avec une bonne question par jour, puis à écrire avant de trop réfléchir.",
    heroPoints: [
      "Translator vous aide à trouver des vidéos que vos applis habituelles ne vous montreraient jamais et à les regarder dans votre langue",
      "Echo utilise l’IA pour casser votre pilote automatique intérieur avec une question quotidienne qui mérite une vraie réponse",
      "Les deux produits cherchent à élargir ce que vous pouvez atteindre au lieu de vous enfermer dans une boucle plus étroite",
    ],
    sectionEyebrow: "Produits",
    sectionTitle:
      "Pour l’instant, cela prend deux formes : Translator vous aide à traverser la vidéo en langue étrangère, et Echo vous aide à penser plus clairement à partir d’une bonne question par jour.",
    productCards: [
      {
        eyebrow: "Vidéo",
        title: "Translator",
        body: "Translator vous aide à trouver des vidéos hors de votre algorithme habituel, à les regarder dans votre langue, puis à transformer les bonnes en vidéos sous-titrées ou doublées à garder.",
        ctaLabel: "Voir Translator",
        href: "/translate",
      },
      {
        eyebrow: "Écriture",
        title: "Echo: Stream your mind",
        body: "Echo est né d’une idée simple : utiliser l’IA à l’envers. Au lieu de l’ouvrir pour obtenir des réponses, vous recevez une question par jour, vous écrivez sans revenir en arrière, puis l’app vous aide à voir ce que vous vouliez vraiment dire une fois le brouillon sorti.",
        ctaLabel: "Voir Echo sur l’App Store",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle: "Téléchargez Translator et comprenez le produit en l’utilisant.",
    ctaBody:
      "Le moyen le plus rapide de comprendre ce que construit Stage5 est d’ouvrir l’app, d’essayer les outils gratuits et de parcourir vous-même le flux.",
    ctaNote:
      "Le téléchargement et l’édition des sous-titres sont gratuits. L’IA ne coûte quelque chose que lorsque vous lancez réellement une fonction IA.",
  },
  de: {
    metadataDescription:
      "Stage5 baut Translator und Echo, zwei Produkte, die Menschen helfen sollen, Sprachbarrieren, Empfehlungs-Schleifen und den eigenen Denk-Autopiloten zu durchbrechen.",
    heroEyebrow: "Was Stage5 baut",
    heroTitle: "Wir bauen Produkte, die Menschen helfen, über die Grenzen hinauszukommen, die ihnen mitgegeben werden.",
    heroDescription:
      "Translator hilft dir, die Sprach- und Empfehlungsgrenzen deiner üblichen Feeds zu durchbrechen. Echo hilft dir, deinen eigenen Denk-Autopiloten zu verlassen, mit einer guten Frage pro Tag und dem Impuls zu schreiben, bevor du alles zerdenkst.",
    heroPoints: [
      "Translator hilft dir, Videos zu finden, die deine üblichen Apps dir nie zeigen würden, und sie in deiner Sprache zu sehen",
      "Echo nutzt KI, um deinen inneren Autopiloten mit einer täglichen Frage zu durchbrechen, die eine Antwort wert ist",
      "Beide Produkte wollen erweitern, was du erreichen kannst, statt dich in einer engeren Schleife festzuhalten",
    ],
    sectionEyebrow: "Produkte",
    sectionTitle:
      "Im Moment bedeutet das zwei Produkte: Translator hilft dir durch fremdsprachige Videos, und Echo hilft dir mit einer guten Frage pro Tag klarer zu denken.",
    productCards: [
      {
        eyebrow: "Video",
        title: "Translator",
        body: "Translator hilft dir, Videos außerhalb deines üblichen Algorithmus zu finden, sie in deiner Sprache zu sehen und die guten in untertitelte oder synchronisierte Videos zu verwandeln, die du behalten willst.",
        ctaLabel: "Translator ansehen",
        href: "/translate",
      },
      {
        eyebrow: "Schreiben",
        title: "Echo: Stream your mind",
        body: "Echo entstand aus der Idee, KI einmal andersherum zu nutzen. Statt sie für Antworten zu öffnen, bekommst du jeden Tag eine Frage, schreibst ohne zurückzugehen weiter und lässt dir danach von der App zeigen, was du mit dem rohen Entwurf eigentlich sagen wolltest.",
        ctaLabel: "Echo im App Store ansehen",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle: "Lade Translator herunter und verstehe das Produkt, indem du es benutzt.",
    ctaBody:
      "Am schnellsten verstehst du, was Stage5 baut, wenn du die App öffnest, die kostenlosen Tools ausprobierst und selbst durch den Ablauf gehst.",
    ctaNote:
      "Download und Untertitelbearbeitung sind kostenlos. KI kostet nur dann etwas, wenn du KI-Funktionen tatsächlich ausführst.",
  },
  pt: {
    metadataDescription:
      "A Stage5 cria o Translator e o Echo, dois produtos feitos para ajudar as pessoas a passar dos limites de idioma, recomendação e piloto automático mental.",
    heroEyebrow: "O que a Stage5 está construindo",
    heroTitle: "Criamos produtos que ajudam as pessoas a passar dos limites que recebem.",
    heroDescription:
      "O Translator ajuda você a sair dos limites de idioma e recomendação dos seus feeds habituais. O Echo ajuda você a sair do próprio piloto automático mental com uma boa pergunta por dia e a escrever antes de pensar demais.",
    heroPoints: [
      "O Translator ajuda você a encontrar vídeos que seus apps de sempre nunca mostrariam e a assisti-los no seu idioma",
      "O Echo usa IA para quebrar seu piloto automático interno com uma pergunta diária que vale a pena responder",
      "Os dois produtos tentam ampliar o que você consegue alcançar em vez de prender você em um ciclo mais estreito",
    ],
    sectionEyebrow: "Produtos",
    sectionTitle:
      "Hoje isso significa dois produtos: o Translator ajuda você a atravessar vídeos em outros idiomas, e o Echo ajuda você a pensar com mais clareza a partir de uma boa pergunta por dia.",
    productCards: [
      {
        eyebrow: "Vídeo",
        title: "Translator",
        body: "O Translator ajuda você a encontrar vídeos fora do seu algoritmo habitual, assisti-los no seu idioma e transformar os bons em vídeos legendados ou dublados que valem a pena guardar.",
        ctaLabel: "Ver Translator",
        href: "/translate",
      },
      {
        eyebrow: "Escrita",
        title: "Echo: Stream your mind",
        body: "O Echo nasceu da ideia de usar a IA ao contrário. Em vez de abrir a IA para pedir respostas, você recebe uma pergunta por dia, escreve só para frente e deixa o app ajudar você a enxergar o que realmente queria dizer depois que o rascunho bagunçado já saiu.",
        ctaLabel: "Ver Echo na App Store",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle: "Baixe o Translator e entenda o produto usando-o, não só lendo sobre ele.",
    ctaBody:
      "A forma mais rápida de entender o que a Stage5 está construindo é abrir o app, testar as ferramentas gratuitas e percorrer o fluxo por conta própria.",
    ctaNote:
      "Baixar e editar legendas é grátis. A IA só custa quando você realmente usa recursos de IA.",
  },
  vi: {
    metadataDescription:
      "Stage5 xây dựng Translator và Echo, hai sản phẩm giúp giảm ma sát về ngôn ngữ, gợi ý và quán tính suy nghĩ thay vì tạo thêm ma sát từ ứng dụng.",
    heroEyebrow: "Stage5 đang làm gì",
    heroTitle:
      "Chúng tôi xây dựng sản phẩm giúp mọi người vượt qua những giới hạn họ được giao sẵn.",
    heroDescription:
      "Translator giúp bạn vượt qua giới hạn về ngôn ngữ và gợi ý trong những luồng nội dung quen thuộc. Echo giúp bạn thoát khỏi chế độ tự động trong đầu bằng một câu hỏi hữu ích mỗi ngày và buộc bạn viết ra trước khi nghĩ quá nhiều.",
    heroPoints: [
      "Translator giúp bạn tìm những video mà ứng dụng thường dùng sẽ không bao giờ gợi ra và xem chúng bằng ngôn ngữ của mình",
      "Echo dùng AI để phá vỡ chế độ tự động bên trong bạn bằng một câu hỏi mỗi ngày đáng để trả lời",
      "Cả hai sản phẩm đều cố mở rộng những gì bạn có thể chạm tới thay vì nhốt bạn trong một vòng lặp hẹp hơn",
    ],
    sectionEyebrow: "Sản phẩm",
    sectionTitle:
      "Hiện tại điều đó có nghĩa là hai sản phẩm: Translator giúp bạn vượt qua video bằng tiếng nước ngoài, còn Echo giúp bạn suy nghĩ rõ hơn từ một câu hỏi hay mỗi ngày.",
    productCards: [
      {
        eyebrow: "Video",
        title: "Translator",
        body: "Translator giúp bạn tìm video nằm ngoài thuật toán quen thuộc, xem chúng bằng ngôn ngữ của mình, rồi biến những video đáng giữ lại thành video có phụ đề hoặc lồng tiếng.",
        ctaLabel: "Xem Translator",
        href: "/translate",
      },
      {
        eyebrow: "Viết",
        title: "Echo: Stream your mind",
        body: "Echo bắt đầu từ ý tưởng dùng AI theo chiều ngược lại. Thay vì mở AI để xin câu trả lời, bạn nhận một câu hỏi mỗi ngày, viết một mạch không quay lại sửa, rồi để ứng dụng giúp bạn nhìn ra điều mình thực sự muốn nói sau khi bản nháp lộn xộn đã tuôn ra.",
        ctaLabel: "Xem Echo trên App Store",
        href: "https://apps.apple.com/us/app/echo-stream-your-mind/id6757453505",
        external: true,
      },
    ],
    ctaTitle:
      "Tải Translator và hiểu sản phẩm bằng cách dùng nó thay vì chỉ đọc quanh nó.",
    ctaBody:
      "Cách nhanh nhất để hiểu Stage5 đang xây dựng gì là mở ứng dụng, thử các công cụ miễn phí và tự đi qua toàn bộ luồng làm việc.",
    ctaNote:
      "Tải xuống và chỉnh sửa phụ đề đều miễn phí. AI chỉ tốn tiền khi bạn thực sự chạy các tính năng AI.",
  },
};

function getPageCopy(locale: Locale): AboutPageCopy {
  return pageCopy[locale] ?? pageCopy.en!;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = getPageCopy(locale);

  return buildMetadata({
    title: `${t("aboutTitle", locale)} | Translator`,
    description: copy.metadataDescription,
    path: "/about",
    keywords:
      locale === "ko"
        ? [
            "Stage5 Tools 소개",
            "Translator 앱 소개",
            "AI 비디오 번역 도구",
            "자막 편집 앱",
          ]
        : locale === "vi"
          ? [
              "giới thiệu Stage5 Tools",
              "giới thiệu ứng dụng Translator",
              "công ty dịch video AI",
              "ứng dụng chỉnh sửa phụ đề",
            ]
        : [
            "Stage5 Tools",
            "Translator app",
            "about Translator",
            "AI video translation company",
          ],
    locale,
  });
}

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);
  const copy = getPageCopy(locale);
  const homeHref = homeHrefForLocale(locale);
  const localizeHref = (href: string) => localizePathForLocale(locale, href);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: t("breadcrumbHome", locale), href: homeHref },
            { label: t("navAbout", locale) },
          ]}
        />

        <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.12),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/80">
                {copy.heroEyebrow}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {copy.heroTitle}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
                {copy.heroDescription}
              </p>
              <ul className="mt-8 space-y-3 text-sm text-gray-200 md:text-base">
                {copy.heroPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <HeroDownloadActions locale={locale} className="items-start" />
              </div>
            </div>

            <div className="grid gap-4">
              {copy.productCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-white/10 bg-black/30 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                    {card.eyebrow}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-gray-300">
                    {card.body}
                  </p>
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
                    >
                      {card.ctaLabel}
                    </a>
                  ) : (
                    <Link
                      href={localizeHref(card.href)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
                    >
                      {card.ctaLabel}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
              {copy.sectionEyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {copy.sectionTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-semibold text-white">
                {t("aboutMission", locale)}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                {t("aboutMissionDesc", locale)}
              </p>
              <Link
                href={localizeHref("/translate")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {copy.productCards[0]?.ctaLabel}
              </Link>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-semibold text-white">
                {t("aboutVision", locale)}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                {t("aboutVisionDesc", locale)}
              </p>
              <Link
                href={localizeHref("/contact")}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition hover:text-white"
              >
                {t("aboutGetInTouch", locale)}
              </Link>
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

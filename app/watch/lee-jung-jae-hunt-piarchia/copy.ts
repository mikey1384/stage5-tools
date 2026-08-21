interface WatchPageCopy {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  section1Title: string;
  section1Body: string[];
  howToTitle: string;
  howToBody: string;
  howToSteps: Array<{ title: string; body: string }>;
  pricingTitle: string;
  pricingFree: string;
  pricingPaid: string;
  section2Title: string;
  section2Body: string[];
  downloadTitle: string;
  downloadBody: string;
  aboutTitle: string;
  aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt";

export const leeJungJaeHuntPiarchiaCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
    title: "Watch Lee Jung-jae on Lee Dong-jin's Piarchia with English Subtitles | Translator",
    description:
      "Director Lee Jung-jae discusses Hunt, his directorial debut, with film critic Lee Dong-jin. A Korean-language interview about filmmaking, directing actors, and making a spy thriller. Learn how to watch it with English subtitles using Translator.",
    keywords: [
      "Lee Jung-jae interview English subtitles",
      "Hunt interview",
      "Lee Dong-jin Piarchia",
      "watch Korean interview English",
      "translate Korean video to English",
      "Korean film interview English",
      "헌트 interview",
    ],
    h1: "Watch Lee Jung-jae Talk About Making Hunt",
    intro:
      "Actor-turned-director Lee Jung-jae sits down with critic Lee Dong-jin to discuss his directorial debut Hunt, a spy thriller set during South Korea's turbulent 1980s. A conversation about directing for the first time that most English speakers miss because it's in Korean.",
    section1Title: "An actor directs",
    section1Body: [
      "Lee Jung-jae built a decades-long career as one of Korea's most respected actors before Squid Game made him internationally recognizable. Hunt (2022) was his first film as director—a politically charged espionage thriller about competing intelligence agencies hunting for a North Korean mole inside the South Korean presidential security service.",
      "Lee Dong-jin is one of Korea's most respected film critics. His YouTube show Piarchia (파이아키아) gives filmmakers space to talk about their process without the usual press junket constraints. This interview happened shortly before Hunt's theatrical release in August 2022, after the film premiered at Cannes.",
      "The conversation covers Lee's transition from acting to directing, the technical challenges of shooting action sequences, working with actors from the director's chair, and the political context that shapes Hunt's story. It's not promotional fluff. It's two people who understand film craft talking about what it takes to step behind the camera for the first time.",
      "The interview is in Korean. English speakers who care about Korean cinema, directorial debuts, or Lee Jung-jae's work don't get to hear this conversation unless they speak the language or find subtitles.",
    ],
    howToTitle: "How to watch the full interview with English subtitles",
    howToBody:
      "Translator is a desktop app that lets you download videos, add translated subtitles, and watch them in your language. Here's the workflow:",
    howToSteps: [
      {
        title: "Paste the YouTube URL",
        body: "Copy the video link and paste it into Translator's download field.",
      },
      {
        title: "Download the video",
        body: "Translator pulls down the video and any available captions. This is free and happens on your machine.",
      },
      {
        title: "Transcribe or translate",
        body: "If the video doesn't have Korean captions, you can transcribe it using AI. If it does, you can translate those captions to English. You can use Stage5 credits (pay per minute) or bring your own API key from OpenAI or Anthropic.",
      },
      {
        title: "Watch with subtitles you control",
        body: "The app plays the video with your translated subtitles. You can edit the timing, fix translations, choose subtitle styles, and export the final SRT file.",
      },
    ],
    pricingTitle: "What's free, what's paid",
    pricingFree:
      "Downloading videos, managing your library, editing subtitles manually, and exporting SRT files.",
    pricingPaid:
      "AI transcription and translation. You can use Stage5 credits (example: $1 for ~50 minutes, $10 for ~18 hours) or unlock BYO once for $10 and bring your own API key from OpenAI or Anthropic to pay them directly.",
    section2Title: "Korean film content in English",
    section2Body: [
      "Korean cinema has produced some of the most interesting film content on YouTube—director interviews, critic roundtables, behind-the-scenes breakdowns. Most of it doesn't have English subtitles. YouTube's auto-generated translations are often incomplete or missing for Korean videos, especially older content.",
      "Translator gives you control: choose your translation model, edit the subtitles line by line, adjust timing if the captions drift, and export the final file. If you've been clicking through Korean film content, Japanese anime interviews, or Brazilian music documentaries and wishing you could follow along without guessing, this is what the app does.",
      "This isn't about replacing your browser's auto-translate feature. This is for videos you actually want to sit down and watch—where the accuracy of the subtitles and your ability to control them matters.",
    ],
    downloadTitle: "Download Translator",
    downloadBody:
      "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels. The download and subtitle editor are free to use.",
    aboutTitle: "About this post",
    aboutBody: [
      "The YouTube video is embedded directly from the official source. The first 30 seconds of captions shown in the player can be displayed in English, Spanish (Español), or Portuguese (Português). All three caption tracks were transcribed and translated in Translator. They are not YouTube automatic captions. The rest of the episode is not published here—this post explains the workflow so you can translate the full video yourself.",
      "Source: Lee Dong-jin's Piarchia (B tv 이동진의 파이아키아), hosted by critic Lee Dong-jin, featuring director Lee Jung-jae. Video is in Korean. Title: [헌트]의 이정재 감독님을 모셨습니다!!! | 심층 인터뷰 (We have invited Hunt's director Lee Jung-jae!!! | In-depth Interview). Duration: 42:16.",
    ],
  },
  es: {
    title: "Ve a Lee Jung-jae en Piarchia con Subtítulos | Translator",
    description:
      "El director Lee Jung-jae discute Hunt, su debut como director, con el crítico de cine Lee Dong-jin. Una entrevista en coreano sobre cine, dirigir actores y hacer un thriller de espías.",
    keywords: [
      "Lee Jung-jae entrevista",
      "Hunt entrevista",
      "Lee Dong-jin Piarchia",
      "ver entrevista coreana español",
    ],
    h1: "Lee Jung-jae Habla Sobre la Realización de Hunt",
    intro:
      "El actor convertido en director Lee Jung-jae se sienta con el crítico Lee Dong-jin para discutir su debut como director Hunt, un thriller de espías ambientado en los turbulentos años 80 de Corea del Sur.",
    section1Title: "Un actor dirige",
    section1Body: [
      "Lee Jung-jae construyó una carrera de décadas como uno de los actores más respetados de Corea antes de que Squid Game lo hiciera reconocido internacionalmente. Hunt (2022) fue su primera película como director: un thriller de espionaje políticamente cargado sobre agencias de inteligencia que compiten para encontrar un topo norcoreano dentro del servicio de seguridad presidencial de Corea del Sur.",
      "Lee Dong-jin es uno de los críticos de cine más respetados de Corea. Su programa de YouTube Piarchia da a los cineastas espacio para hablar sobre su proceso sin las restricciones habituales de las ruedas de prensa. Esta entrevista ocurrió poco antes del estreno teatral de Hunt en agosto de 2022, después de que la película se estrenara en Cannes.",
      "La conversación cubre la transición de Lee de actuar a dirigir, los desafíos técnicos de filmar secuencias de acción, trabajar con actores desde la silla del director y el contexto político que da forma a la historia de Hunt.",
      "La entrevista está en coreano. Los hablantes de español que se preocupan por el cine coreano, los debuts como director o el trabajo de Lee Jung-jae no pueden escuchar esta conversación a menos que hablen el idioma o encuentren subtítulos.",
    ],
    howToTitle: "Cómo ver la entrevista completa con subtítulos",
    howToBody:
      "Translator es una app de escritorio que te permite descargar videos, añadir subtítulos traducidos y verlos en tu idioma. Así funciona:",
    howToSteps: [
      {
        title: "Pega la URL de YouTube",
        body: "Copia el enlace del video y pégalo en el campo de descarga de Translator.",
      },
      {
        title: "Descarga el video",
        body: "Translator baja el video y cualquier subtítulo disponible. Esto es gratis y ocurre en tu máquina.",
      },
      {
        title: "Transcribe o traduce",
        body: "Si el video no tiene subtítulos en coreano, puedes transcribirlo con IA. Si los tiene, puedes traducir esos subtítulos. Usa créditos Stage5 o tu propia clave API.",
      },
      {
        title: "Ve con subtítulos que controlas",
        body: "La app reproduce el video con tus subtítulos traducidos. Puedes editar el tiempo, corregir traducciones y exportar el archivo SRT final.",
      },
    ],
    pricingTitle: "Qué es gratis, qué es de pago",
    pricingFree:
      "Descargar videos, gestionar tu biblioteca, editar subtítulos manualmente y exportar archivos SRT.",
    pricingPaid:
      "Transcripción y traducción con IA. Puedes usar créditos Stage5 o desbloquear BYO una vez por $10 y traer tu propia clave API de OpenAI o Anthropic.",
    section2Title: "Contenido de cine coreano en español",
    section2Body: [
      "El cine coreano ha producido algunos de los contenidos de cine más interesantes en YouTube: entrevistas a directores, mesas redondas de críticos, desglose detrás de escena. La mayoría no tiene subtítulos en español.",
      "Translator te da control: elige tu modelo de traducción, edita los subtítulos línea por línea, ajusta el tiempo si los subtítulos se desvían y exporta el archivo final.",
      "Esto no reemplaza la función de traducción automática de tu navegador. Es para videos que realmente quieres ver con cuidado.",
    ],
    downloadTitle: "Descarga Translator",
    downloadBody:
      "Translator funciona en macOS y Windows. Descárgalo, pega la URL de este video y prueba el flujo.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "El video de YouTube está incrustado directamente desde la fuente oficial. Los primeros 30 segundos de subtítulos que se muestran en el reproductor pueden aparecer en inglés, español o portugués. Las tres pistas fueron transcritas y traducidas en Translator.",
      "Fuente: Piarchia de Lee Dong-jin, presentado por el crítico Lee Dong-jin, con el director Lee Jung-jae. El video está en coreano. Duración: 42:16.",
    ],
  },
  ko: {
    title: "이정재 감독의 이동진의 파이아키아 인터뷰 보기 | Translator",
    description:
      "배우에서 감독이 된 이정재가 영화평론가 이동진과 함께 그의 감독 데뷔작 헌트에 대해 이야기합니다. 영화 제작, 배우 연출, 스파이 스릴러 만들기에 대한 한국어 인터뷰입니다.",
    keywords: [
      "이정재 인터뷰",
      "헌트 인터뷰",
      "이동진 파이아키아",
      "한국 영화 인터뷰",
    ],
    h1: "이정재 감독의 헌트 제작 이야기",
    intro:
      "배우에서 감독이 된 이정재가 평론가 이동진과 함께 그의 감독 데뷔작 헌트에 대해 이야기합니다. 1980년대 한국의 격동기를 배경으로 한 스파이 스릴러에 대한 대화입니다.",
    section1Title: "배우가 감독이 되다",
    section1Body: [
      "이정재는 오징어 게임으로 국제적으로 알려지기 전에 한국에서 가장 존경받는 배우 중 한 명으로 수십 년의 경력을 쌓았습니다. 헌트(2022)는 그의 첫 감독 작품으로, 대한민국 대통령 경호실 내부의 북한 스파이를 찾기 위해 경쟁하는 정보기관들에 대한 정치적 스파이 스릴러입니다.",
      "이동진은 한국에서 가장 존경받는 영화 평론가 중 한 명입니다. 그의 유튜브 쇼 파이아키아는 영화 제작자들에게 일반적인 기자 회견의 제약 없이 그들의 과정에 대해 이야기할 공간을 제공합니다. 이 인터뷰는 영화가 칸에서 초연된 후 2022년 8월 헌트의 극장 개봉 직전에 이루어졌습니다.",
      "대화는 이정재의 연기에서 연출로의 전환, 액션 시퀀스 촬영의 기술적 도전, 감독의 자리에서 배우들과 작업하는 것, 그리고 헌트의 이야기를 형성하는 정치적 맥락을 다룹니다.",
      "인터뷰는 한국어로 진행됩니다. 한국 영화, 감독 데뷔 또는 이정재의 작품에 관심이 있는 외국어 사용자는 언어를 구사하거나 자막을 찾지 않는 한 이 대화를 들을 수 없습니다.",
    ],
    howToTitle: "전체 인터뷰를 자막과 함께 보는 방법",
    howToBody:
      "Translator는 영상을 다운로드하고, 번역된 자막을 추가하고, 원하는 언어로 볼 수 있는 데스크톱 앱입니다. 작동 방식:",
    howToSteps: [
      {
        title: "YouTube URL 붙여넣기",
        body: "영상 링크를 복사하여 Translator의 다운로드 필드에 붙여넣습니다.",
      },
      {
        title: "영상 다운로드",
        body: "Translator가 영상과 사용 가능한 자막을 가져옵니다. 이것은 무료이며 컴퓨터에서 실행됩니다.",
      },
      {
        title: "전사 또는 번역",
        body: "영상에 한국어 자막이 없으면 AI로 전사할 수 있습니다. 있으면 자막을 번역할 수 있습니다. Stage5 크레딧 또는 자체 API 키를 사용하세요.",
      },
      {
        title: "제어 가능한 자막으로 시청",
        body: "앱이 번역된 자막과 함께 영상을 재생합니다. 타이밍을 편집하고, 번역을 수정하고, 최종 SRT 파일을 내보낼 수 있습니다.",
      },
    ],
    pricingTitle: "무료 기능과 유료 기능",
    pricingFree:
      "영상 다운로드, 라이브러리 관리, 수동 자막 편집, SRT 파일 내보내기.",
    pricingPaid:
      "AI 전사 및 번역. Stage5 크레딧 사용 또는 BYO를 $10에 잠금 해제하고 자체 API 키 사용.",
    section2Title: "한국 영화 콘텐츠",
    section2Body: [
      "한국 영화는 YouTube에서 가장 흥미로운 영화 콘텐츠를 제작했습니다: 감독 인터뷰, 평론가 라운드테이블, 비하인드 신 분석. 대부분은 외국어 자막이 없습니다.",
      "Translator는 제어권을 제공합니다: 번역 모델을 선택하고, 자막을 한 줄씩 편집하고, 타이밍을 조정하고, 최종 파일을 내보냅니다.",
      "이것은 브라우저의 자동 번역 기능을 대체하는 것이 아닙니다. 정확도가 중요한 영상을 위한 것입니다.",
    ],
    downloadTitle: "Translator 다운로드",
    downloadBody:
      "Translator는 macOS와 Windows에서 작동합니다. 다운로드하고, 이 영상의 URL을 붙여넣고, 워크플로우를 확인하세요.",
    aboutTitle: "이 게시물에 대하여",
    aboutBody: [
      "YouTube 영상은 공식 출처에서 직접 임베드됩니다. 플레이어에 표시되는 처음 30초의 자막은 영어, 스페인어 또는 포르투갈어로 표시될 수 있습니다. 세 가지 자막 트랙은 모두 Translator에서 전사 및 번역되었습니다.",
      "출처: 이동진의 파이아키아, 평론가 이동진이 진행하고 이정재 감독이 출연. 영상은 한국어입니다. 제목: [헌트]의 이정재 감독님을 모셨습니다!!! | 심층 인터뷰. 길이: 42:16.",
    ],
  },
  pt: {
    title: "Assista Lee Jung-jae no Piarchia com Legendas | Translator",
    description:
      "O diretor Lee Jung-jae discute Hunt, sua estreia na direção, com o crítico de cinema Lee Dong-jin. Uma entrevista em coreano sobre cinema, dirigir atores e fazer um thriller de espionagem.",
    keywords: [
      "Lee Jung-jae entrevista",
      "Hunt entrevista",
      "Lee Dong-jin Piarchia",
      "assistir entrevista coreana português",
    ],
    h1: "Lee Jung-jae Fala Sobre a Realização de Hunt",
    intro:
      "O ator que virou diretor Lee Jung-jae se senta com o crítico Lee Dong-jin para discutir sua estreia na direção Hunt, um thriller de espionagem ambientado nos turbulentos anos 1980 da Coreia do Sul.",
    section1Title: "Um ator dirige",
    section1Body: [
      "Lee Jung-jae construiu uma carreira de décadas como um dos atores mais respeitados da Coreia antes que Squid Game o tornasse reconhecido internacionalmente. Hunt (2022) foi seu primeiro filme como diretor: um thriller de espionagem politicamente carregado sobre agências de inteligência que competem para encontrar um espião norte-coreano dentro do serviço de segurança presidencial da Coreia do Sul.",
      "Lee Dong-jin é um dos críticos de cinema mais respeitados da Coreia. Seu programa no YouTube Piarchia dá aos cineastas espaço para falar sobre seu processo sem as restrições habituais das coletivas de imprensa. Esta entrevista aconteceu pouco antes da estreia teatral de Hunt em agosto de 2022, após o filme estrear em Cannes.",
      "A conversa cobre a transição de Lee da atuação para a direção, os desafios técnicos de filmar sequências de ação, trabalhar com atores da cadeira do diretor e o contexto político que molda a história de Hunt.",
      "A entrevista está em coreano. Falantes de português que se preocupam com o cinema coreano, estreias como diretor ou o trabalho de Lee Jung-jae não conseguem ouvir esta conversa a menos que falem o idioma ou encontrem legendas.",
    ],
    howToTitle: "Como assistir a entrevista completa com legendas",
    howToBody:
      "Translator é um aplicativo de desktop que permite baixar vídeos, adicionar legendas traduzidas e assisti-los no seu idioma. Veja como funciona:",
    howToSteps: [
      {
        title: "Cole a URL do YouTube",
        body: "Copie o link do vídeo e cole no campo de download do Translator.",
      },
      {
        title: "Baixe o vídeo",
        body: "O Translator baixa o vídeo e quaisquer legendas disponíveis. Isso é grátis e acontece no seu computador.",
      },
      {
        title: "Transcreva ou traduza",
        body: "Se o vídeo não tiver legendas em coreano, você pode transcrevê-lo usando IA. Se tiver, você pode traduzir essas legendas. Use créditos Stage5 ou sua própria chave API.",
      },
      {
        title: "Assista com legendas que você controla",
        body: "O aplicativo reproduz o vídeo com suas legendas traduzidas. Você pode editar o tempo, corrigir traduções e exportar o arquivo SRT final.",
      },
    ],
    pricingTitle: "O que é grátis, o que é pago",
    pricingFree:
      "Baixar vídeos, gerenciar sua biblioteca, editar legendas manualmente e exportar arquivos SRT.",
    pricingPaid:
      "Transcrição e tradução com IA. Você pode usar créditos Stage5 ou desbloquear BYO uma vez por $10 e trazer sua própria chave API do OpenAI ou Anthropic.",
    section2Title: "Conteúdo de cinema coreano em português",
    section2Body: [
      "O cinema coreano produziu alguns dos conteúdos de cinema mais interessantes no YouTube: entrevistas com diretores, mesas redondas de críticos, análises dos bastidores. A maioria não tem legendas em português.",
      "O Translator dá controle: escolha seu modelo de tradução, edite as legendas linha por linha, ajuste o tempo se as legendas desviarem e exporte o arquivo final.",
      "Isso não substitui o recurso de tradução automática do seu navegador. É para vídeos que você realmente quer assistir com atenção.",
    ],
    downloadTitle: "Baixe o Translator",
    downloadBody:
      "O Translator funciona no macOS e Windows. Baixe, cole a URL deste vídeo e veja como o fluxo funciona.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "O vídeo do YouTube está incorporado diretamente da fonte oficial. Os primeiros 30 segundos de legendas mostrados no player podem ser exibidos em inglês, espanhol ou português. Todas as três faixas foram transcritas e traduzidas no Translator.",
      "Fonte: Piarchia de Lee Dong-jin, apresentado pelo crítico Lee Dong-jin, com o diretor Lee Jung-jae. O vídeo está em coreano. Duração: 42:16.",
    ],
  },
};

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
  howToNote: string;
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

type SupportedLocale = "en" | "es" | "ko" | "pt" | "vi";

export const nolanColbertOppenheimerCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
    title: "Watch Christopher Nolan's Oppenheimer Interview on The Late Show with Stephen Colbert | Translator",
    description:
      "Director Christopher Nolan discusses Oppenheimer on The Late Show with Stephen Colbert during the 2024 awards season. Watch the English-language interview with multilingual subtitles.",
    keywords: [
      "Christopher Nolan interview",
      "Oppenheimer interview",
      "Late Show Colbert",
      "Christopher Nolan burner phone",
      "Oppenheimer behind the scenes",
    ],
    h1: "Christopher Nolan Talks Oppenheimer on Colbert",
    intro:
      "Director Christopher Nolan appeared on The Late Show with Stephen Colbert during the Oppenheimer awards-season run. The film received 13 Oscar nominations, including Best Picture, Best Director, and Best Adapted Screenplay. This is the English-language interview where Colbert and Nolan discuss the film's production.",
    section1Title: "Colbert's Oppenheimer Interview",
    section1Body: [
      "The Late Show with Stephen Colbert is a US late-night talk show that runs weeknights on CBS. During Hollywood awards season, Colbert typically brings on directors, actors, and writers whose films are in contention.",
      "In early 2024, Christopher Nolan came on to discuss Oppenheimer, which had just become the most-nominated film of the year with 13 Oscar nominations. The full YouTube episode runs longer than 30 seconds and includes Nolan discussing his process, the film's practical effects, and the burner-phone story that became the episode's YouTube title.",
      "This page shows the first 30 seconds—Colbert's show open, the house band sting, and the beginning of the Oppenheimer setup—then prompts you to download the full video and add your own translated subtitles using Translator.",
    ],
    howToTitle: "How to watch the full interview with translated subtitles",
    howToBody:
      "Translator is a desktop app that downloads videos from YouTube and lets you add translated subtitles in your language. Here's how it works:",
    howToSteps: [
      {
        title: "Paste the YouTube URL",
        body: "Copy the link to this Late Show episode and paste it into Translator's download field.",
      },
      {
        title: "Download the video",
        body: "Translator downloads the video file to your computer. This step is free and runs locally on your machine.",
      },
      {
        title: "Transcribe and translate",
        body: "The video already has English captions. You can translate those captions to Spanish, Korean, Portuguese, or another language. Choose your AI model (OpenAI, Anthropic, etc.) and translation preferences. You can pay per minute with Stage5 credits or bring your own API key.",
      },
      {
        title: "Watch and edit",
        body: "The app plays the video with your translated subtitles. You can edit the subtitle text, adjust timing, change styles, and export the final SRT file when you're done.",
      },
    ],
    howToNote: "The video stays on your computer. You're not streaming it through a web app or uploading it to someone else's server. Translator works locally.",
    pricingTitle: "What's free, what costs money",
    pricingFree:
      "Downloading videos, organizing your library, editing subtitles manually, and exporting SRT files.",
    pricingPaid:
      "AI transcription and translation. You can use Stage5 credits (approximately $1 for ~50 minutes of video, $10 for ~18 hours) or unlock BYO (bring your own) API key access once for $10 and pay OpenAI or Anthropic directly.",
    section2Title: "English-language interviews with multilingual subtitles",
    section2Body: [
      "Most US late-night shows—The Late Show, The Tonight Show, Jimmy Kimmel Live—are in English. YouTube's automatic captions work for English, but if you want accurate subtitles in another language, you usually have to make them yourself.",
      "Translator gives you that control. Download the video, choose your translation model and target language, and watch the interview with subtitles that match what was actually said. You can edit translations line by line, adjust timing if captions drift, and export the final subtitle file.",
      "This workflow works for any YouTube video: director interviews, film criticism, podcasts, documentaries. If you've been watching English-language content and wishing you had better subtitles in your language, or if you're watching foreign-language content and YouTube's auto-translate isn't cutting it, this is what Translator does.",
    ],
    downloadTitle: "Download Translator",
    downloadBody:
      "Translator runs on macOS and Windows. Download the app, paste this video's URL, and try the workflow. The video downloader and subtitle editor are free to use.",
    aboutTitle: "About this post",
    aboutBody: [
      "The YouTube video is embedded directly from the official Late Show source. The first 30 seconds of captions shown in the player can be displayed in English, Spanish (Español), Korean (한국어), or Portuguese (Português). All four caption tracks were transcribed and translated in Translator (first 30 seconds only). The rest of the interview is not published here—this post explains the workflow so you can translate the full video yourself.",
      "Source: The Late Show with Stephen Colbert, featuring Christopher Nolan. Video is in English. The episode title references Nolan's burner phone, which is discussed later in the full interview, not in the 30-second preview shown here.",
    ],
  },
  es: {
    title: "Ver la entrevista de Christopher Nolan sobre Oppenheimer en The Late Show con Stephen Colbert | Translator",
    description:
      "El director Christopher Nolan habla sobre Oppenheimer en The Late Show con Stephen Colbert durante la temporada de premios 2024.",
    keywords: ["Christopher Nolan", "Oppenheimer", "Late Show", "Colbert"],
    h1: "Christopher Nolan habla de Oppenheimer con Colbert",
    intro:
      "El director Christopher Nolan apareció en The Late Show con Stephen Colbert durante la temporada de premios de Oppenheimer. La película recibió 13 nominaciones al Óscar, incluyendo Mejor Película, Mejor Director y Mejor Guion Adaptado.",
    section1Title: "La entrevista de Oppenheimer en Colbert",
    section1Body: [
      "The Late Show with Stephen Colbert es un programa de entrevistas nocturno estadounidense que se transmite de lunes a viernes en CBS. Durante la temporada de premios de Hollywood, Colbert suele invitar a directores, actores y guionistas cuyas películas están en competencia.",
      "A principios de 2024, Christopher Nolan apareció para hablar sobre Oppenheimer, que acababa de convertirse en la película más nominada del año con 13 nominaciones al Óscar. El episodio completo en YouTube dura más de 30 segundos e incluye a Nolan hablando sobre su proceso, los efectos prácticos de la película y la historia del teléfono desechable que se convirtió en el título del episodio en YouTube.",
      "Esta página muestra los primeros 30 segundos—la apertura del programa de Colbert, la entrada de la banda de la casa y el comienzo de la presentación de Oppenheimer—y luego te invita a descargar el video completo y añadir tus propios subtítulos traducidos usando Translator.",
    ],
    howToTitle: "Cómo ver la entrevista completa con subtítulos traducidos",
    howToBody:
      "Translator es una aplicación de escritorio que descarga videos de YouTube y te permite añadir subtítulos traducidos en tu idioma. Así funciona:",
    howToSteps: [
      {
        title: "Pega la URL de YouTube",
        body: "Copia el enlace de este episodio del Late Show y pégalo en el campo de descarga de Translator.",
      },
      {
        title: "Descarga el video",
        body: "Translator descarga el archivo de video a tu computadora. Este paso es gratuito y se ejecuta localmente en tu máquina.",
      },
      {
        title: "Transcribe y traduce",
        body: "El video ya tiene subtítulos en inglés. Puedes traducir esos subtítulos al español, coreano, portugués u otro idioma. Elige tu modelo de IA y preferencias de traducción. Puedes pagar por minuto con créditos Stage5 o usar tu propia API key.",
      },
      {
        title: "Ve y edita",
        body: "La app reproduce el video con tus subtítulos traducidos. Puedes editar el texto, ajustar el tiempo, cambiar estilos y exportar el archivo SRT final.",
      },
    ],
    howToNote: "El video permanece en tu computadora. No lo estás transmitiendo a través de una aplicación web ni subiéndolo al servidor de otra persona. Translator funciona localmente.",
    pricingTitle: "Qué es gratis, qué cuesta dinero",
    pricingFree:
      "Descargar videos, organizar tu biblioteca, editar subtítulos manualmente y exportar archivos SRT.",
    pricingPaid:
      "Transcripción y traducción con IA. Puedes usar créditos Stage5 (aproximadamente $1 por ~50 minutos, $10 por ~18 horas) o desbloquear el acceso BYO (trae tu propia clave) una vez por $10 y pagar directamente a OpenAI o Anthropic.",
    section2Title: "Entrevistas en inglés con subtítulos multilingües",
    section2Body: [
      "La mayoría de los programas nocturnos estadounidenses—The Late Show, The Tonight Show, Jimmy Kimmel Live—están en inglés. Los subtítulos automáticos de YouTube funcionan para inglés, pero si quieres subtítulos precisos en otro idioma, generalmente tienes que crearlos tú mismo.",
      "Translator te da ese control. Descarga el video, elige tu modelo de traducción e idioma de destino, y ve la entrevista con subtítulos que coinciden con lo que realmente se dijo. Puedes editar las traducciones línea por línea, ajustar el tiempo si los subtítulos se desfasan y exportar el archivo final.",
      "Este flujo de trabajo funciona para cualquier video de YouTube: entrevistas a directores, crítica de cine, podcasts, documentales. Si has estado viendo contenido en inglés y deseando tener mejores subtítulos en tu idioma, esto es lo que hace Translator.",
    ],
    downloadTitle: "Descarga Translator",
    downloadBody:
      "Translator funciona en macOS y Windows. Descarga la app, pega la URL de este video y prueba el flujo de trabajo. El descargador de videos y el editor de subtítulos son gratuitos.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "El video de YouTube está incrustado directamente desde la fuente oficial del Late Show. Los primeros 30 segundos de subtítulos que se muestran en el reproductor se pueden mostrar en inglés, español, coreano o portugués. Las cuatro pistas de subtítulos fueron transcritas y traducidas en Translator (solo los primeros 30 segundos). El resto de la entrevista no está publicado aquí—este post explica el flujo de trabajo para que puedas traducir el video completo tú mismo.",
      "Fuente: The Late Show with Stephen Colbert, con Christopher Nolan. Video en inglés. El título del episodio menciona el teléfono desechable de Nolan, que se discute más adelante en la entrevista completa, no en la vista previa de 30 segundos que se muestra aquí.",
    ],
  },
  ko: {
    title: "크리스토퍼 놀란의 오펜하이머 인터뷰 보기 - Stephen Colbert의 The Late Show | Translator",
    description:
      "감독 크리스토퍼 놀란이 2024년 시상 시즌 동안 Stephen Colbert의 The Late Show에서 오펜하이머에 대해 이야기합니다.",
    keywords: ["크리스토퍼 놀란", "오펜하이머", "Late Show", "콜베어"],
    h1: "크리스토퍼 놀란이 콜베어와 오펜하이머를 이야기하다",
    intro:
      "감독 크리스토퍼 놀란이 오펜하이머 시상 시즌 동안 Stephen Colbert의 The Late Show에 출연했습니다. 이 영화는 작품상, 감독상, 각색상을 포함해 13개 부문 오스카 후보에 올랐습니다.",
    section1Title: "콜베어의 오펜하이머 인터뷰",
    section1Body: [
      "Stephen Colbert의 The Late Show는 CBS에서 평일 저녁에 방송되는 미국 심야 토크쇼입니다. 할리우드 시상 시즌 동안 콜베어는 보통 후보작의 감독, 배우, 작가들을 초대합니다.",
      "2024년 초, 크리스토퍼 놀란은 13개 오스카 후보로 올해 최다 노미네이트 영화가 된 오펜하이머에 대해 이야기하기 위해 출연했습니다. YouTube의 전체 에피소드는 30초보다 길며, 놀란이 자신의 작업 과정, 영화의 실제 효과, 그리고 에피소드의 YouTube 제목이 된 버너폰 이야기를 논의하는 내용이 포함되어 있습니다.",
      "이 페이지는 처음 30초—콜베어의 쇼 오프닝, 하우스 밴드 징글, 오펜하이머 소개의 시작—를 보여주고, 전체 비디오를 다운로드하여 Translator를 사용해 자신만의 번역 자막을 추가하도록 안내합니다.",
    ],
    howToTitle: "번역 자막으로 전체 인터뷰 보는 방법",
    howToBody:
      "Translator는 YouTube에서 비디오를 다운로드하고 원하는 언어로 번역된 자막을 추가할 수 있는 데스크톱 앱입니다. 작동 방식은 다음과 같습니다:",
    howToSteps: [
      {
        title: "YouTube URL 붙여넣기",
        body: "이 Late Show 에피소드의 링크를 복사하여 Translator의 다운로드 필드에 붙여넣습니다.",
      },
      {
        title: "비디오 다운로드",
        body: "Translator가 비디오 파일을 컴퓨터에 다운로드합니다. 이 단계는 무료이며 로컬에서 실행됩니다.",
      },
      {
        title: "전사 및 번역",
        body: "비디오에는 이미 영어 자막이 있습니다. 해당 자막을 스페인어, 한국어, 포르투갈어 또는 다른 언어로 번역할 수 있습니다. AI 모델과 번역 설정을 선택하세요. Stage5 크레딧으로 분당 결제하거나 자신의 API 키를 사용할 수 있습니다.",
      },
      {
        title: "시청 및 편집",
        body: "앱이 번역된 자막과 함께 비디오를 재생합니다. 자막 텍스트를 편집하고, 타이밍을 조정하고, 스타일을 변경하고, 완료되면 최종 SRT 파일을 내보낼 수 있습니다.",
      },
    ],
    howToNote: "비디오는 컴퓨터에 남아 있습니다. 웹 앱을 통해 스트리밍하거나 다른 사람의 서버에 업로드하는 것이 아닙니다. Translator는 로컬에서 작동합니다.",
    pricingTitle: "무료 항목, 유료 항목",
    pricingFree:
      "비디오 다운로드, 라이브러리 정리, 수동 자막 편집, SRT 파일 내보내기.",
    pricingPaid:
      "AI 전사 및 번역. Stage5 크레딧을 사용할 수 있습니다(약 $1에 ~50분, $10에 ~18시간) 또는 BYO(자신의 API 키 가져오기) 액세스를 한 번 $10에 잠금 해제하고 OpenAI나 Anthropic에 직접 결제할 수 있습니다.",
    section2Title: "다국어 자막이 있는 영어 인터뷰",
    section2Body: [
      "대부분의 미국 심야 쇼—The Late Show, The Tonight Show, Jimmy Kimmel Live—는 영어로 진행됩니다. YouTube의 자동 자막은 영어에서는 작동하지만, 다른 언어로 정확한 자막을 원한다면 보통 직접 만들어야 합니다.",
      "Translator는 그 제어권을 제공합니다. 비디오를 다운로드하고, 번역 모델과 대상 언어를 선택하고, 실제로 말한 내용과 일치하는 자막으로 인터뷰를 시청하세요. 번역을 한 줄씩 편집하고, 자막이 어긋나면 타이밍을 조정하고, 최종 자막 파일을 내보낼 수 있습니다.",
      "이 워크플로는 모든 YouTube 비디오에 적용됩니다: 감독 인터뷰, 영화 비평, 팟캐스트, 다큐멘터리. 영어 콘텐츠를 보면서 내 언어로 더 나은 자막을 원하거나, 외국어 콘텐츠를 보면서 YouTube의 자동 번역이 충분하지 않다면, 이것이 Translator가 하는 일입니다.",
    ],
    downloadTitle: "Translator 다운로드",
    downloadBody:
      "Translator는 macOS와 Windows에서 실행됩니다. 앱을 다운로드하고, 이 비디오의 URL을 붙여넣고, 워크플로를 시도해 보세요. 비디오 다운로더와 자막 편집기는 무료로 사용할 수 있습니다.",
    aboutTitle: "이 게시물에 대하여",
    aboutBody: [
      "YouTube 비디오는 공식 Late Show 소스에서 직접 임베드되었습니다. 플레이어에 표시되는 처음 30초의 자막은 영어, 스페인어, 한국어 또는 포르투갈어로 표시할 수 있습니다. 네 개의 자막 트랙은 모두 Translator에서 전사 및 번역되었습니다(처음 30초만). 인터뷰의 나머지 부분은 여기에 게시되지 않았습니다—이 게시물은 전체 비디오를 직접 번역할 수 있도록 워크플로를 설명합니다.",
      "출처: Stephen Colbert의 The Late Show, 크리스토퍼 놀란 출연. 비디오는 영어입니다. 에피소드 제목은 놀란의 버너폰을 언급하는데, 이는 여기에 표시된 30초 미리보기가 아닌 전체 인터뷰의 후반부에서 논의됩니다.",
    ],
  },
  pt: {
    title: "Assistir a entrevista de Christopher Nolan sobre Oppenheimer no The Late Show com Stephen Colbert | Translator",
    description:
      "O diretor Christopher Nolan fala sobre Oppenheimer no The Late Show com Stephen Colbert durante a temporada de premiações de 2024.",
    keywords: ["Christopher Nolan", "Oppenheimer", "Late Show", "Colbert"],
    h1: "Christopher Nolan fala sobre Oppenheimer com Colbert",
    intro:
      "O diretor Christopher Nolan apareceu no The Late Show com Stephen Colbert durante a temporada de premiações de Oppenheimer. O filme recebeu 13 indicações ao Oscar, incluindo Melhor Filme, Melhor Diretor e Melhor Roteiro Adaptado.",
    section1Title: "A entrevista de Oppenheimer com Colbert",
    section1Body: [
      "O The Late Show com Stephen Colbert é um programa de entrevistas noturno dos EUA que vai ao ar todas as noites na CBS. Durante a temporada de premiações de Hollywood, Colbert normalmente convida diretores, atores e roteiristas cujos filmes estão em disputa.",
      "No início de 2024, Christopher Nolan veio falar sobre Oppenheimer, que havia se tornado o filme mais indicado do ano com 13 indicações ao Oscar. O episódio completo no YouTube dura mais de 30 segundos e inclui Nolan discutindo seu processo, os efeitos práticos do filme e a história do celular descartável que se tornou o título do episódio no YouTube.",
      "Esta página mostra os primeiros 30 segundos—a abertura do programa de Colbert, a vinheta da banda da casa e o início da apresentação de Oppenheimer—e então convida você a baixar o vídeo completo e adicionar suas próprias legendas traduzidas usando o Translator.",
    ],
    howToTitle: "Como assistir a entrevista completa com legendas traduzidas",
    howToBody:
      "Translator é um aplicativo de desktop que baixa vídeos do YouTube e permite adicionar legendas traduzidas no seu idioma. Veja como funciona:",
    howToSteps: [
      {
        title: "Cole a URL do YouTube",
        body: "Copie o link deste episódio do Late Show e cole no campo de download do Translator.",
      },
      {
        title: "Baixe o vídeo",
        body: "O Translator baixa o arquivo de vídeo para o seu computador. Este passo é gratuito e roda localmente na sua máquina.",
      },
      {
        title: "Transcreva e traduza",
        body: "O vídeo já tem legendas em inglês. Você pode traduzir essas legendas para espanhol, coreano, português ou outro idioma. Escolha seu modelo de IA e preferências de tradução. Você pode pagar por minuto com créditos Stage5 ou usar sua própria chave de API.",
      },
      {
        title: "Assista e edite",
        body: "O aplicativo reproduz o vídeo com suas legendas traduzidas. Você pode editar o texto, ajustar o tempo, mudar estilos e exportar o arquivo SRT final.",
      },
    ],
    howToNote: "O vídeo fica no seu computador. Você não está transmitindo através de um aplicativo web nem enviando para o servidor de outra pessoa. O Translator funciona localmente.",
    pricingTitle: "O que é grátis, o que custa dinheiro",
    pricingFree:
      "Baixar vídeos, organizar sua biblioteca, editar legendas manualmente e exportar arquivos SRT.",
    pricingPaid:
      "Transcrição e tradução com IA. Você pode usar créditos Stage5 (aproximadamente $1 para ~50 minutos, $10 para ~18 horas) ou desbloquear o acesso BYO (traga sua própria chave) uma vez por $10 e pagar diretamente à OpenAI ou Anthropic.",
    section2Title: "Entrevistas em inglês com legendas multilíngues",
    section2Body: [
      "A maioria dos programas noturnos dos EUA—The Late Show, The Tonight Show, Jimmy Kimmel Live—são em inglês. As legendas automáticas do YouTube funcionam para inglês, mas se você quer legendas precisas em outro idioma, geralmente precisa criá-las você mesmo.",
      "O Translator te dá esse controle. Baixe o vídeo, escolha seu modelo de tradução e idioma de destino, e assista a entrevista com legendas que correspondem ao que foi realmente dito. Você pode editar as traduções linha por linha, ajustar o tempo se as legendas desalinharem e exportar o arquivo final.",
      "Este fluxo de trabalho funciona para qualquer vídeo do YouTube: entrevistas com diretores, crítica de cinema, podcasts, documentários. Se você tem assistido conteúdo em inglês e desejando ter legendas melhores no seu idioma, isto é o que o Translator faz.",
    ],
    downloadTitle: "Baixe o Translator",
    downloadBody:
      "O Translator funciona no macOS e Windows. Baixe o aplicativo, cole a URL deste vídeo e experimente o fluxo de trabalho. O downloader de vídeo e o editor de legendas são gratuitos.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "O vídeo do YouTube está incorporado diretamente da fonte oficial do Late Show. Os primeiros 30 segundos de legendas mostrados no player podem ser exibidos em inglês, espanhol, coreano ou português. Todas as quatro faixas de legendas foram transcritas e traduzidas no Translator (apenas os primeiros 30 segundos). O resto da entrevista não está publicado aqui—este post explica o fluxo de trabalho para que você possa traduzir o vídeo completo você mesmo.",
      "Fonte: The Late Show com Stephen Colbert, apresentando Christopher Nolan. Vídeo em inglês. O título do episódio menciona o celular descartável de Nolan, que é discutido mais tarde na entrevista completa, não na prévia de 30 segundos mostrada aqui.",
    ],
  },
  vi: {
    title: "Xem Christopher Nolan nói về Oppenheimer trên The Late Show với Stephen Colbert | Translator",
    description:
      "Đạo diễn Christopher Nolan nói về Oppenheimer trên The Late Show with Stephen Colbert trong mùa giải thưởng 2024. Xem buổi phỏng vấn tiếng Anh với phụ đề nhiều ngôn ngữ, gồm tiếng Việt.",
    keywords: [
      "phỏng vấn Christopher Nolan",
      "phỏng vấn Oppenheimer",
      "Late Show Colbert",
      "điện thoại burner của Christopher Nolan",
      "hậu trường Oppenheimer",
    ],
    h1: "Christopher Nolan nói về Oppenheimer với Colbert",
    intro:
      "Đạo diễn Christopher Nolan lên The Late Show with Stephen Colbert trong mùa Oppenheimer tranh giải. Phim nhận 13 đề cử Oscar, gồm Phim hay nhất, Đạo diễn xuất sắc nhất và Kịch bản chuyển thể xuất sắc nhất. Đây là buổi phỏng vấn tiếng Anh; trang này chiếu 30 giây đầu với phụ đề tiếng Việt.",
    section1Title: "Buổi phỏng vấn Oppenheimer trên Colbert",
    section1Body: [
      "The Late Show with Stephen Colbert là talk show đêm khuya của Mỹ, phát mỗi ngày trong tuần trên CBS. Mùa giải thưởng Hollywood, Colbert thường mời đạo diễn, diễn viên và biên kịch có phim đang tranh giải.",
      "Đầu năm 2024, Christopher Nolan lên sóng nói về Oppenheimer — lúc đó là phim được đề cử nhiều nhất trong năm với 13 đề cử Oscar. Tập đầy đủ trên YouTube dài hơn 30 giây: Nolan nói về cách làm phim, hiệu ứng thực, và câu chuyện điện thoại dùng một lần mà YouTube lấy làm tiêu đề tập.",
      "Trang này chỉ chiếu 30 giây đầu — phần mở show của Colbert, tiếng dạo của ban nhạc nhà, và câu dẫn vào Oppenheimer — rồi hướng bạn tải cả video về máy và tự thêm phụ đề bằng Translator.",
    ],
    howToTitle: "Cách xem hết buổi phỏng vấn với phụ đề dịch",
    howToBody:
      "Translator là ứng dụng máy tính tải video YouTube và cho bạn gắn phụ đề dịch sang ngôn ngữ của mình. Cách làm như sau:",
    howToSteps: [
      {
        title: "Dán URL YouTube",
        body: "Chép liên kết tập Late Show này và dán vào ô tải của Translator.",
      },
      {
        title: "Tải video",
        body: "Translator tải file video về máy. Bước này miễn phí và chạy tại chỗ.",
      },
      {
        title: "Chép lời và dịch",
        body: "Video đã có phụ đề tiếng Anh. Bạn có thể dịch sang tiếng Việt, Tây Ban Nha, Hàn, Bồ Đào Nha hoặc ngôn ngữ khác. Chọn mô hình AI và cách dịch. Trả theo phút bằng tín dụng Stage5 hoặc dùng API key của bạn.",
      },
      {
        title: "Xem và sửa",
        body: "Ứng dụng phát video kèm phụ đề đã dịch. Bạn sửa chữ, chỉnh nhịp, đổi kiểu, rồi xuất file SRT khi xong.",
      },
    ],
    howToNote: "Video nằm trên máy bạn. Bạn không xem qua web app hay tải lên máy chủ của người khác. Translator chạy tại chỗ.",
    pricingTitle: "Cái gì miễn phí, cái gì mất tiền",
    pricingFree:
      "Tải video, sắp xếp thư viện, sửa phụ đề bằng tay, và xuất file SRT.",
    pricingPaid:
      "Chép lời và dịch bằng AI. Dùng tín dụng Stage5 (khoảng $1 cho ~50 phút video, $10 cho ~18 giờ) hoặc mở khóa BYO một lần $10 rồi trả trực tiếp cho OpenAI hoặc Anthropic.",
    section2Title: "Phỏng vấn tiếng Anh với phụ đề nhiều ngôn ngữ",
    section2Body: [
      "Hầu hết talk show đêm khuya của Mỹ — The Late Show, The Tonight Show, Jimmy Kimmel Live — đều bằng tiếng Anh. Phụ đề tự động của YouTube dùng được với tiếng Anh, nhưng muốn phụ đề đúng sang ngôn ngữ khác thì thường phải tự làm.",
      "Translator để bạn quyết định. Tải video, chọn mô hình dịch và ngôn ngữ đích, rồi xem đúng những gì được nói. Sửa từng câu, chỉnh nhịp nếu lệch, rồi xuất file phụ đề.",
      "Cách này dùng được cho mọi video YouTube: phỏng vấn đạo diễn, bình luận phim, podcast, phim tài liệu. Nếu bạn xem nội dung tiếng Anh mà muốn phụ đề tiếng Việt tốt hơn, hoặc xem tiếng khác mà bản tự dịch của YouTube không ổn, đó là việc Translator làm.",
    ],
    downloadTitle: "Tải Translator",
    downloadBody:
      "Translator chạy trên macOS và Windows. Tải ứng dụng, dán URL video này, và thử quy trình. Trình tải video và trình sửa phụ đề dùng miễn phí.",
    aboutTitle: "Về bài này",
    aboutBody: [
      "Video YouTube được nhúng trực tiếp từ nguồn chính thức của Late Show. 30 giây phụ đề đầu trong trình phát có thể hiện tiếng Anh, tiếng Tây Ban Nha (Español), tiếng Hàn (한국어), tiếng Bồ Đào Nha (Português), hoặc tiếng Việt. Cả năm track đều được chép lời và dịch trong Translator (chỉ 30 giây đầu), không phải phụ đề tự động của YouTube. Phần còn lại của buổi phỏng vấn không đăng ở đây — bài này giải thích quy trình để bạn tự dịch cả video.",
      "Nguồn: The Late Show with Stephen Colbert, có Christopher Nolan. Video bằng tiếng Anh. Tiêu đề tập nhắc đến điện thoại dùng một lần của Nolan, chuyện đó nằm ở phần sau buổi phỏng vấn đầy đủ, không nằm trong 30 giây xem trước ở đây.",
    ],
  },
};

import type { WATCH_LOCALIZED_LOCALES } from "../locales";

export type WorkshopLocale = (typeof WATCH_LOCALIZED_LOCALES)[number];

export type WorkshopCopy = {
  title: string; description: string; h1: string; eyebrow: string;
  lead: string; jump: string; contextLabel: string; contextTitle: string;
  context: readonly [string, string]; sourceLink: string;
  exerciseLabel: string; exerciseTitle: string; originalLabel: string;
  disclosure: string; noScript: string;
  decisions: readonly { label: string; title: string; paragraphs: readonly string[] }[];
  filesTitle: string; filesBody: string; englishFile: string; koreanFile: string;
  workflowLabel: string; workflowTitle: string; workflow: readonly string[];
  download: string; downloadNote: string;
  exercise: {
    readFirst: string; question: string; choicesLabel: string;
    literalChoice: string; meaningChoice: string; meaningFeedback: string;
    literalFeedback: string; unanswered: string; previewLabel: string;
    previewTitle: string; modeLabel: string; literalMode: string; editedMode: string;
    cueLabel: string; cue: string; footnote: string;
  };
};

// The teaching example deliberately stays English → Korean in every UI language.
// It is original practice material, not a translation of the embedded interview.
export const workshopCopy = {
  en: {
    title: "Tom Hanks on SmartLess: a caption-editing exercise | Stage5",
    description: "Explore the SmartLess introduction, then practice meaning, speaker turns and subtitle timing with a clearly separate original caption exercise.",
    h1: "Tom Hanks on SmartLess", eyebrow: "ENGLISH · CONVERSATION · SMARTLESS",
    lead: "A fast conversation asks more of a subtitle than a correct dictionary definition. Practice preserving an idea, a speaker change and a moment of uncertainty.",
    jump: "Try the original caption exercise ↓", contextLabel: "THE INTERVIEW CONTEXT", contextTitle: "An introduction before the interview.",
    context: ["Tom Hanks is the guest on this SmartLess episode with Jason Bateman, Sean Hayes and Will Arnett. Our current 30-second sample covers the hosts joking over the introduction; Hanks’s interview comes later in the full episode.", "For fast exchanges, listen for the end of a thought before deciding where a caption should end. A pause can be a handover, a hesitation or part of a joke. Don’t assign a speaker’s name unless the recording supports it."],
    sourceLink: "Open the source episode on YouTube ↗", exerciseLabel: "YOUR TURN · ENGLISH → KOREAN", exerciseTitle: "Practice the meaning\nbehind a line.", originalLabel: "Original practice dialogue",
    disclosure: "This fictional dialogue and both comparison drafts were written for this exercise with AI assistance. They are not SmartLess quotes, an interview translation, or measured AI output. Timing is illustrative; there is no audio recording.",
    noScript: "The interactive controls need JavaScript. The complete source dialogue and editing decisions remain readable below.",
    decisions: [
      { label: "01 / Meaning", title: "Translate the decision.", paragraphs: ["The deliberately literal “나는 울타리 위에 있어.” describes a location. The reply about the trip shows that A is undecided. “아직 고민 중이야.” preserves that uncertainty in casual Korean.", "This is one possible edit, not the only valid translation. Formal speech would need a different ending."] },
      { label: "02 / Speaker turns", title: "Keep the question separate.", paragraphs: ["Give B’s “여행 말이야?” its own cue. Joining it to A’s sentence can make one person appear to ask and answer their own question. The A/B labels are deliberate training aids, not identified interview speakers."] },
      { label: "03 / Reading rhythm", title: "Break at the thought.", paragraphs: ["For the final reply, try “응, 가고는 싶은데 / 금요일에 쉴 수 있을지 모르겠어.” A line break after the contrast leaves the concern intact. In real footage, adjust cue timing to the voice and test readability during playback."] },
    ],
    filesTitle: "Make a different edit.", filesBody: "Download either practice file, change a line, and explain what your version preserves. Both files contain only this original exercise and illustrative timings.", englishFile: "English practice SRT ↓", koreanFile: "Korean edited SRT ↓",
    workflowLabel: "BRING THE HABIT INTO YOUR WORK", workflowTitle: "Review your subtitles in Translator.",
    workflow: ["Start with subtitles or a video you are entitled to use. Read the surrounding exchange before editing a line. Mark uncertain names and missing context rather than inventing an answer.", "Translator brings subtitle editing, timing and SRT export into a desktop workspace. Use a recording to check synchronization: the sample files here have practice timings and cannot establish audio accuracy.", "Before using an AI workflow, check the available setup, costs and processing choices in your installed version. This web exercise runs locally in your browser and does not call an AI service."],
    download: "Choose your Translator download ↗", downloadNote: "Opens the current download page. No installer starts automatically.",
    exercise: { readFirst: "READ THE WHOLE EXCHANGE FIRST", question: "What should the first Korean caption preserve?", choicesLabel: "Choose the meaning of the first caption", literalChoice: "A physical position on a fence", meaningChoice: "A decision that is still uncertain", meaningFeedback: "That fits the surrounding dialogue. A wants to go but has not decided. “아직 고민 중이야” keeps the uncertainty; the casual ending fits this invented exchange.", literalFeedback: "That is the literal image. Read the reply about the trip: A is weighing a decision. Without that context, you would need to check the recording before choosing.", unanswered: "Choose an interpretation to see the editorial reasoning.", previewLabel: "Silent caption layout preview", previewTitle: "Silent caption preview", modeLabel: "Caption version", literalMode: "Literal draft", editedMode: "Edited draft", cueLabel: "Explore the three caption cues", cue: "Cue", footnote: "The slider changes written cues. It does not play or translate the source video." },
  },
  ko: {
    title: "SmartLess의 톰 행크스: 자막 편집 연습 | Stage5",
    description: "SmartLess의 도입부를 살펴보고, 인터뷰와 별개로 만든 창작 대화로 의미 전달, 화자 전환, 자막 타이밍을 연습해 보세요.",
    h1: "SmartLess의 톰 행크스", eyebrow: "영어 · 대화 · SMARTLESS",
    lead: "빠른 대화의 자막에는 사전적 의미 이상의 것이 필요합니다. 생각의 흐름과 화자 전환, 망설임까지 살리는 편집을 연습해 보세요.",
    jump: "창작 자막 연습 시작하기 ↓", contextLabel: "인터뷰의 맥락", contextTitle: "본 인터뷰에 앞선 도입부입니다.",
    context: ["이 SmartLess 에피소드에는 제이슨 베이트먼, 숀 헤이스, 윌 아넷과 함께 톰 행크스가 출연합니다. 현재 30초 샘플은 진행자들이 도입부에서 농담을 주고받는 부분입니다. 행크스의 인터뷰는 전체 에피소드의 뒤쪽에서 시작합니다.", "빠르게 오가는 대화에서는 한 생각이 끝나는 지점을 듣고 자막을 나누세요. 잠깐의 멈춤은 차례를 넘기는 순간일 수도, 망설임이나 농담의 일부일 수도 있습니다. 녹음에서 확인되지 않는 화자의 이름을 임의로 붙이지 마세요."],
    sourceLink: "YouTube에서 원본 에피소드 보기 ↗", exerciseLabel: "직접 해 보기 · 영어 → 한국어", exerciseTitle: "문장 너머의 의미를\n살려 보세요.", originalLabel: "연습용 창작 대화",
    disclosure: "이 가상 대화와 두 비교 초안은 AI의 도움을 받아 이 연습을 위해 작성했습니다. SmartLess의 인용문이나 인터뷰 번역이 아니며, 실제 AI 성능을 측정한 결과도 아닙니다. 타이밍은 예시이며 녹음된 음성은 없습니다.",
    noScript: "상호작용 기능에는 JavaScript가 필요합니다. 대화 전문과 편집 근거는 아래에서 계속 읽을 수 있습니다.",
    decisions: [
      { label: "01 / 의미", title: "위치가 아닌 고민을 옮겨 보세요.", paragraphs: ["일부러 직역한 ‘나는 울타리 위에 있어.’는 위치를 설명합니다. 하지만 여행에 관한 다음 질문을 보면 A가 결정을 망설이고 있음을 알 수 있습니다. ‘아직 고민 중이야.’는 그 불확실함을 자연스러운 반말로 전달합니다.", "가능한 수정안 중 하나이며 정답이 하나뿐인 것은 아닙니다. 존댓말이 필요한 상황이라면 어미도 달라져야 합니다."] },
      { label: "02 / 화자 전환", title: "질문은 별도 자막으로 남기세요.", paragraphs: ["B의 ‘여행 말이야?’를 독립된 자막 구간으로 나누세요. A의 문장과 합치면 한 사람이 질문하고 답하는 것처럼 보일 수 있습니다. A/B 표기는 연습을 위한 구분이며 인터뷰 속 화자를 특정한 것이 아닙니다."] },
      { label: "03 / 읽는 흐름", title: "의미의 경계에서 줄을 나누세요.", paragraphs: ["마지막 답변은 ‘응, 가고는 싶은데 / 금요일에 쉴 수 있을지 모르겠어.’처럼 나눠 보세요. 대조를 나타내는 부분 뒤에서 줄을 바꾸면 고민의 내용이 이어집니다. 실제 영상에서는 음성에 맞춰 타이밍을 조절하고 재생하며 읽기 편한지 확인하세요."] },
    ],
    filesTitle: "나만의 수정안을 만들어 보세요.", filesBody: "연습 파일을 내려받아 한 문장을 고치고, 내 번역이 어떤 의미를 살리는지 설명해 보세요. 두 파일에는 이 창작 대화와 연습용 타이밍만 들어 있습니다.", englishFile: "영어 연습 SRT ↓", koreanFile: "한국어 수정본 SRT ↓",
    workflowLabel: "실제 작업에서도 이어 가세요", workflowTitle: "Translator에서 자막을 검토하세요.",
    workflow: ["이용 권한이 있는 자막이나 영상으로 시작하세요. 한 문장을 고치기 전에 앞뒤 대화를 읽고, 불확실한 이름이나 빠진 맥락은 지어내지 말고 표시해 두세요.", "Translator는 데스크톱에서 자막 편집, 타이밍 조절, SRT 내보내기를 제공합니다. 동기화는 녹음과 대조해 확인하세요. 여기 제공된 연습용 타이밍으로는 음성의 정확성을 판단할 수 없습니다.", "AI 작업을 사용하기 전에 설치된 버전에서 가능한 설정, 비용, 처리 방식을 확인하세요. 이 웹 연습은 브라우저 안에서 실행되며 AI 서비스를 호출하지 않습니다."],
    download: "Translator 다운로드 선택하기 ↗", downloadNote: "현재 다운로드 페이지가 열립니다. 설치 파일이 자동으로 내려받아지지는 않습니다.",
    exercise: { readFirst: "먼저 대화 전체를 읽어 보세요", question: "첫 한국어 자막에는 어떤 의미를 살려야 할까요?", choicesLabel: "첫 자막의 의미 선택", literalChoice: "울타리 위에 있다는 물리적 위치", meaningChoice: "아직 확실하지 않은 결정", meaningFeedback: "앞뒤 대화에 맞는 해석입니다. A는 가고 싶지만 결정하지 못했습니다. ‘아직 고민 중이야’는 망설임을 살리고, 반말 어미는 이 가상 대화에 어울립니다.", literalFeedback: "문자 그대로의 이미지입니다. 여행에 관한 답변을 다시 읽어 보세요. A는 결정을 고민하고 있습니다. 이런 맥락이 없다면 번역을 정하기 전에 녹음을 확인해야 합니다.", unanswered: "해석을 선택하면 편집 근거를 볼 수 있습니다.", previewLabel: "음성 없는 자막 배치 미리보기", previewTitle: "무음 자막 미리보기", modeLabel: "자막 버전", literalMode: "직역 초안", editedMode: "수정 초안", cueLabel: "세 자막 구간 살펴보기", cue: "자막 구간", footnote: "슬라이더는 글로 된 자막 구간을 바꿉니다. 원본 영상을 재생하거나 번역하지 않습니다." },
  },
  es: {
    title: "Tom Hanks en SmartLess: ejercicio de edición de subtítulos | Stage5",
    description: "Explora la introducción de SmartLess y practica el sentido, los turnos y los tiempos con un ejercicio original, separado de la entrevista.",
    h1: "Tom Hanks en SmartLess", eyebrow: "INGLÉS · CONVERSACIÓN · SMARTLESS",
    lead: "Una conversación rápida exige más que una definición de diccionario. Practica cómo conservar una idea, un cambio de hablante y una duda.",
    jump: "Prueba el ejercicio original de subtítulos ↓", contextLabel: "EL CONTEXTO DE LA ENTREVISTA", contextTitle: "Una introducción antes de la entrevista.",
    context: ["Tom Hanks es el invitado de este episodio de SmartLess con Jason Bateman, Sean Hayes y Will Arnett. Nuestra muestra de 30 segundos recoge las bromas de los presentadores durante la introducción; la entrevista con Hanks comienza más adelante en el episodio completo.", "En intercambios rápidos, escucha dónde acaba una idea antes de cortar el subtítulo. Una pausa puede marcar un turno, una duda o parte de un chiste. No atribuyas una frase a alguien si la grabación no lo confirma."],
    sourceLink: "Abrir el episodio original en YouTube ↗", exerciseLabel: "TU TURNO · INGLÉS → COREANO", exerciseTitle: "Practica el sentido\ndetrás de una frase.", originalLabel: "Diálogo original de práctica",
    disclosure: "Este diálogo ficticio y los dos borradores se escribieron para este ejercicio con ayuda de IA. No son citas de SmartLess, una traducción de la entrevista ni resultados medidos de un modelo. Los tiempos son ilustrativos; no hay grabación de audio.",
    noScript: "Los controles interactivos necesitan JavaScript. Puedes seguir leyendo el diálogo completo y las decisiones de edición abajo.",
    decisions: [
      { label: "01 / Sentido", title: "Traduce la indecisión.", paragraphs: ["La versión deliberadamente literal «나는 울타리 위에 있어.» describe una ubicación. La pregunta sobre el viaje indica que A está indeciso. «아직 고민 중이야.» conserva esa duda en coreano informal.", "Es una posible edición, no la única traducción válida. Un registro formal necesitaría otra terminación."] },
      { label: "02 / Turnos", title: "Separa la pregunta.", paragraphs: ["Dale a «여행 말이야?» de B su propio segmento. Unirlo a la frase de A puede hacer que una persona parezca preguntarse y responderse. Las etiquetas A/B son ayudas de práctica, no identidades de los entrevistados."] },
      { label: "03 / Ritmo de lectura", title: "Corta siguiendo la idea.", paragraphs: ["Para la última respuesta, prueba «응, 가고는 싶은데 / 금요일에 쉴 수 있을지 모르겠어.». El salto después del contraste mantiene unida la preocupación. Con una grabación real, ajusta los tiempos a la voz y comprueba la legibilidad al reproducirla."] },
    ],
    filesTitle: "Haz tu propia edición.", filesBody: "Descarga un archivo, cambia una frase y explica qué conserva tu versión. Ambos archivos contienen solo este ejercicio original y tiempos ilustrativos.", englishFile: "SRT de práctica en inglés ↓", koreanFile: "SRT editado en coreano ↓",
    workflowLabel: "LLEVA ESTE HÁBITO A TU TRABAJO", workflowTitle: "Revisa tus subtítulos en Translator.",
    workflow: ["Empieza con subtítulos o un video que tengas derecho a utilizar. Lee el intercambio completo antes de editar una frase. Señala los nombres dudosos y el contexto que falte en vez de inventar una respuesta.", "Translator reúne edición de subtítulos, ajuste de tiempos y exportación SRT en una aplicación de escritorio. Comprueba la sincronización con una grabación: estos archivos tienen tiempos de práctica y no demuestran precisión respecto al audio.", "Antes de usar un flujo con IA, revisa las opciones, los costos y el procesamiento de tu versión instalada. Este ejercicio web funciona en tu navegador sin llamar a un servicio de IA."],
    download: "Elige tu descarga de Translator ↗", downloadNote: "Abre la página de descargas actual. Ningún instalador se descarga automáticamente.",
    exercise: { readFirst: "LEE PRIMERO TODO EL INTERCAMBIO", question: "¿Qué debe conservar el primer subtítulo en coreano?", choicesLabel: "Elige el sentido del primer subtítulo", literalChoice: "Una posición física sobre una valla", meaningChoice: "Una decisión todavía incierta", meaningFeedback: "Encaja con el diálogo. A quiere ir, pero no ha decidido. «아직 고민 중이야» conserva la duda; la terminación informal funciona en este intercambio inventado.", literalFeedback: "Esa es la imagen literal. Lee la respuesta sobre el viaje: A está valorando una decisión. Sin ese contexto, tendrías que revisar la grabación antes de elegir.", unanswered: "Elige una interpretación para ver el razonamiento editorial.", previewLabel: "Vista de disposición de subtítulos sin audio", previewTitle: "Vista de subtítulos sin audio", modeLabel: "Versión del subtítulo", literalMode: "Borrador literal", editedMode: "Borrador editado", cueLabel: "Explora los tres segmentos", cue: "Segmento", footnote: "El control cambia segmentos escritos. No reproduce ni traduce el video original." },
  },
  pt: {
    title: "Tom Hanks no SmartLess: exercício de edição de legendas | Stage5",
    description: "Explore a introdução do SmartLess e pratique sentido, turnos de fala e tempos com um exercício original separado da entrevista.",
    h1: "Tom Hanks no SmartLess", eyebrow: "INGLÊS · CONVERSA · SMARTLESS",
    lead: "Uma conversa rápida exige mais de uma legenda do que uma definição correta. Pratique como preservar uma ideia, uma mudança de interlocutor e uma dúvida.",
    jump: "Experimente o exercício original de legendas ↓", contextLabel: "O CONTEXTO DA ENTREVISTA", contextTitle: "Uma introdução antes da entrevista.",
    context: ["Tom Hanks é o convidado deste episódio do SmartLess com Jason Bateman, Sean Hayes e Will Arnett. Nossa amostra de 30 segundos mostra as brincadeiras dos apresentadores na introdução; a entrevista com Hanks começa mais adiante no episódio completo.", "Em diálogos rápidos, ouça onde uma ideia termina antes de encerrar a legenda. Uma pausa pode ser uma troca de turno, uma hesitação ou parte de uma piada. Não atribua um nome ao falante sem apoio na gravação."],
    sourceLink: "Abrir o episódio original no YouTube ↗", exerciseLabel: "SUA VEZ · INGLÊS → COREANO", exerciseTitle: "Pratique o sentido\npor trás de uma frase.", originalLabel: "Diálogo original para praticar",
    disclosure: "Este diálogo fictício e os dois rascunhos foram escritos para o exercício com ajuda de IA. Não são citações do SmartLess, uma tradução da entrevista nem resultados medidos de um modelo. Os tempos são ilustrativos; não há gravação de áudio.",
    noScript: "Os controles interativos precisam de JavaScript. O diálogo completo e as decisões de edição continuam disponíveis abaixo.",
    decisions: [
      { label: "01 / Sentido", title: "Traduza a indecisão.", paragraphs: ["A tradução propositalmente literal “나는 울타리 위에 있어.” descreve uma localização. A pergunta sobre a viagem mostra que A está indeciso. “아직 고민 중이야.” mantém essa dúvida em coreano informal.", "Esta é uma edição possível, não a única tradução válida. A fala formal exigiria outra terminação."] },
      { label: "02 / Turnos de fala", title: "Mantenha a pergunta separada.", paragraphs: ["Dê à pergunta de B, “여행 말이야?”, seu próprio segmento. Juntá-la à frase de A pode fazer parecer que uma pessoa pergunta e responde sozinha. As letras A/B são recursos de prática, não identificações dos participantes da entrevista."] },
      { label: "03 / Ritmo de leitura", title: "Divida pela ideia.", paragraphs: ["Para a resposta final, experimente “응, 가고는 싶은데 / 금요일에 쉴 수 있을지 모르겠어.”. A quebra depois do contraste mantém a preocupação completa. Em uma gravação real, ajuste os tempos à voz e teste a leitura durante a reprodução."] },
    ],
    filesTitle: "Crie uma edição diferente.", filesBody: "Baixe um arquivo, altere uma frase e explique o que sua versão preserva. Os dois arquivos contêm apenas este exercício original e tempos ilustrativos.", englishFile: "SRT de prática em inglês ↓", koreanFile: "SRT editado em coreano ↓",
    workflowLabel: "LEVE ESSE HÁBITO PARA SEU TRABALHO", workflowTitle: "Revise suas legendas no Translator.",
    workflow: ["Comece com legendas ou um vídeo que você tenha direito de usar. Leia o diálogo ao redor antes de editar uma frase. Marque nomes incertos e a falta de contexto em vez de inventar uma resposta.", "O Translator reúne edição de legendas, ajuste de tempos e exportação SRT em um aplicativo para desktop. Confira a sincronização com uma gravação: os tempos destes arquivos são para prática e não comprovam precisão em relação ao áudio.", "Antes de usar um fluxo com IA, confira as configurações, os custos e as opções de processamento da versão instalada. Este exercício funciona no seu navegador sem chamar um serviço de IA."],
    download: "Escolha seu download do Translator ↗", downloadNote: "Abre a página atual de downloads. Nenhum instalador é baixado automaticamente.",
    exercise: { readFirst: "LEIA PRIMEIRO O DIÁLOGO INTEIRO", question: "O que a primeira legenda em coreano deve preservar?", choicesLabel: "Escolha o sentido da primeira legenda", literalChoice: "Uma posição física sobre uma cerca", meaningChoice: "Uma decisão que ainda é incerta", meaningFeedback: "Combina com o diálogo. A quer ir, mas ainda não decidiu. “아직 고민 중이야” preserva a dúvida; a terminação informal combina com esta conversa inventada.", literalFeedback: "Essa é a imagem literal. Leia a resposta sobre a viagem: A está pensando em uma decisão. Sem esse contexto, seria necessário conferir a gravação antes de escolher.", unanswered: "Escolha uma interpretação para ver a justificativa editorial.", previewLabel: "Prévia da disposição de legendas sem áudio", previewTitle: "Prévia de legendas sem áudio", modeLabel: "Versão da legenda", literalMode: "Rascunho literal", editedMode: "Rascunho editado", cueLabel: "Explore os três segmentos", cue: "Segmento", footnote: "O controle muda os segmentos escritos. Ele não reproduz nem traduz o vídeo original." },
  },
  vi: {
    title: "Tom Hanks trên SmartLess: bài tập biên tập phụ đề | Stage5",
    description: "Tìm hiểu phần mở đầu SmartLess rồi luyện cách giữ ý nghĩa, lượt lời và thời gian phụ đề bằng bài tập sáng tác riêng, tách biệt với cuộc phỏng vấn.",
    h1: "Tom Hanks trên SmartLess", eyebrow: "TIẾNG ANH · HỘI THOẠI · SMARTLESS",
    lead: "Hội thoại nhanh đòi hỏi phụ đề phải truyền tải nhiều hơn nghĩa từ điển. Hãy luyện cách giữ trọn ý, chuyển lượt lời và thể hiện sự phân vân.",
    jump: "Thử bài tập phụ đề sáng tác riêng ↓", contextLabel: "BỐI CẢNH CUỘC PHỎNG VẤN", contextTitle: "Phần mở đầu trước cuộc phỏng vấn.",
    context: ["Tom Hanks là khách mời trong tập SmartLess này cùng Jason Bateman, Sean Hayes và Will Arnett. Mẫu 30 giây hiện tại là phần các người dẫn chương trình đùa với nhau ở đầu tập; cuộc phỏng vấn Hanks bắt đầu sau đó trong tập đầy đủ.", "Với lời thoại nhanh, hãy nghe hết một ý trước khi quyết định kết thúc phụ đề. Khoảng dừng có thể là chuyển lượt, ngập ngừng hoặc một phần của câu đùa. Đừng gán tên người nói nếu bản ghi không xác nhận điều đó."],
    sourceLink: "Mở tập gốc trên YouTube ↗", exerciseLabel: "ĐẾN LƯỢT BẠN · TIẾNG ANH → TIẾNG HÀN", exerciseTitle: "Luyện cách giữ ý nghĩa\nđằng sau câu chữ.", originalLabel: "Hội thoại sáng tác để luyện tập",
    disclosure: "Hội thoại hư cấu và hai bản nháp được viết riêng cho bài tập này với sự hỗ trợ của AI. Đây không phải trích dẫn SmartLess, bản dịch cuộc phỏng vấn hay kết quả đo hiệu năng AI. Thời gian chỉ để minh họa; không có bản ghi âm.",
    noScript: "Các nút tương tác cần JavaScript. Bạn vẫn có thể đọc toàn bộ hội thoại và lý do biên tập bên dưới.",
    decisions: [
      { label: "01 / Ý nghĩa", title: "Dịch sự phân vân.", paragraphs: ["Bản dịch cố ý bám từng chữ “나는 울타리 위에 있어.” mô tả một vị trí. Câu hỏi về chuyến đi cho thấy A chưa quyết định. “아직 고민 중이야.” giữ được sự phân vân bằng tiếng Hàn thân mật.", "Đây là một cách chỉnh sửa, không phải bản dịch đúng duy nhất. Cách nói trang trọng sẽ cần đuôi câu khác."] },
      { label: "02 / Lượt lời", title: "Để câu hỏi thành mục riêng.", paragraphs: ["Tách “여행 말이야?” của B thành một mục phụ đề riêng. Nếu ghép vào câu của A, người xem có thể tưởng một người tự hỏi rồi tự trả lời. Nhãn A/B chỉ giúp luyện tập, không xác định người nói trong cuộc phỏng vấn."] },
      { label: "03 / Nhịp đọc", title: "Xuống dòng theo ý.", paragraphs: ["Với câu trả lời cuối, hãy thử “응, 가고는 싶은데 / 금요일에 쉴 수 있을지 모르겠어.”. Xuống dòng sau ý tương phản giúp giữ trọn điều đang băn khoăn. Với video thật, hãy căn thời gian theo giọng nói và kiểm tra độ dễ đọc khi phát lại."] },
    ],
    filesTitle: "Tạo cách biên tập của bạn.", filesBody: "Tải một tệp luyện tập, sửa một câu và giải thích phiên bản của bạn giữ được điều gì. Cả hai tệp chỉ chứa bài tập sáng tác này cùng thời gian minh họa.", englishFile: "SRT luyện tập tiếng Anh ↓", koreanFile: "SRT đã biên tập tiếng Hàn ↓",
    workflowLabel: "ÁP DỤNG THÓI QUEN VÀO CÔNG VIỆC", workflowTitle: "Rà soát phụ đề trong Translator.",
    workflow: ["Bắt đầu với phụ đề hoặc video bạn có quyền sử dụng. Đọc các lượt lời xung quanh trước khi sửa một câu. Đánh dấu tên chưa chắc chắn và chỗ thiếu ngữ cảnh thay vì tự đoán câu trả lời.", "Translator tập hợp việc sửa phụ đề, căn thời gian và xuất SRT trong ứng dụng máy tính. Dùng bản ghi để kiểm tra đồng bộ: các tệp ở đây có thời gian luyện tập nên không chứng minh độ chính xác so với âm thanh.", "Trước khi dùng quy trình AI, hãy kiểm tra thiết lập, chi phí và cách xử lý có trong phiên bản đã cài. Bài tập web này chạy trong trình duyệt và không gọi dịch vụ AI."],
    download: "Chọn bản tải Translator ↗", downloadNote: "Mở trang tải xuống hiện tại. Không tự động tải trình cài đặt.",
    exercise: { readFirst: "ĐỌC TOÀN BỘ HỘI THOẠI TRƯỚC", question: "Phụ đề tiếng Hàn đầu tiên cần giữ lại ý gì?", choicesLabel: "Chọn ý nghĩa của phụ đề đầu tiên", literalChoice: "Vị trí thực tế trên hàng rào", meaningChoice: "Một quyết định vẫn chưa chắc chắn", meaningFeedback: "Phù hợp với ngữ cảnh. A muốn đi nhưng chưa quyết định. “아직 고민 중이야” giữ được sự phân vân; đuôi câu thân mật phù hợp với hội thoại hư cấu này.", literalFeedback: "Đó là hình ảnh theo nghĩa đen. Đọc câu trả lời về chuyến đi: A đang cân nhắc quyết định. Nếu không có ngữ cảnh, bạn cần kiểm tra bản ghi trước khi chọn cách dịch.", unanswered: "Chọn một cách hiểu để xem lý do biên tập.", previewLabel: "Xem thử bố cục phụ đề không có âm thanh", previewTitle: "Xem thử phụ đề không âm thanh", modeLabel: "Phiên bản phụ đề", literalMode: "Bản dịch sát chữ", editedMode: "Bản đã biên tập", cueLabel: "Khám phá ba mục phụ đề", cue: "Mục phụ đề", footnote: "Thanh trượt thay đổi các mục phụ đề viết sẵn. Nó không phát hay dịch video gốc." },
  },
} satisfies Record<WorkshopLocale, WorkshopCopy>;

export const workshopCues = [
  { time: "00:00–00:02", source: "A: I’m on the fence.", literal: "A: 나는 울타리 위에 있어.", edited: "A: 아직 고민 중이야." },
  { time: "00:02.4–00:04.2", source: "B: About the trip?", literal: "B: 여행에 대해서?", edited: "B: 여행 말이야?" },
  { time: "00:04.5–00:10.5", source: "A: Yes. I want to go, but I’m not sure I can take Friday off.", literal: "A: 응. 나는 가기를 원하지만,\n금요일을 쉴 수 있는지 확실하지 않아.", edited: "A: 응, 가고는 싶은데\n금요일에 쉴 수 있을지 모르겠어." },
] as const;

export type WorkshopExerciseCopy = WorkshopCopy["exercise"];
export function isWorkshopLocale(locale: string): locale is WorkshopLocale {
  return Object.prototype.hasOwnProperty.call(workshopCopy, locale);
}

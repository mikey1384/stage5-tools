import type { Locale } from "../locales";

export const videoChoiceCopy = {
  en: {
    title: "Choose whether to load YouTube",
    body: "Loading this video connects to YouTube, which receives your IP address and browser information and may use cookies or similar storage. This choice is separate from website analytics and advertising. You can use the written exercise and download links with the video off.",
    load: "Load YouTube video", source: "Open the original on YouTube", privacy: "Google privacy policy",
    disconnect: "Turn video off and reload", withdrawal: "Reloading closes the YouTube connection and leaves the video off. It cannot undo information already sent to YouTube. This choice is not saved for future pages.",
  },
  ko: {
    title: "YouTube 동영상을 불러올지 선택하세요",
    body: "동영상을 불러오면 YouTube에 연결되어 IP 주소와 브라우저 정보가 전송되며, YouTube가 쿠키나 유사한 저장 기능을 사용할 수 있습니다. 이 선택은 웹사이트 분석 및 광고 동의와 별개입니다. 동영상을 끈 상태에서도 글로 된 연습과 다운로드 링크를 이용할 수 있습니다.",
    load: "YouTube 동영상 불러오기", source: "YouTube에서 원본 열기", privacy: "Google 개인정보처리방침",
    disconnect: "동영상 연결 끄고 새로고침", withdrawal: "새로고침하면 YouTube 연결이 닫히고 동영상은 꺼진 상태로 유지됩니다. 이미 YouTube에 전송된 정보는 되돌릴 수 없습니다. 이 선택은 다른 페이지에 저장되지 않습니다.",
  },
  es: {
    title: "Decide si quieres cargar YouTube",
    body: "Al cargar este video te conectas a YouTube, que recibe tu dirección IP e información del navegador y puede utilizar cookies o almacenamiento similar. Esta elección es independiente de la analítica del sitio y de la publicidad. Puedes usar el ejercicio escrito y los enlaces de descarga sin cargar el video.",
    load: "Cargar video de YouTube", source: "Abrir el original en YouTube", privacy: "Política de privacidad de Google",
    disconnect: "Desactivar el video y recargar", withdrawal: "Recargar cierra la conexión con YouTube y deja el video desactivado. No elimina la información ya enviada a YouTube. Esta elección no se guarda para otras páginas.",
  },
  pt: {
    title: "Escolha se deseja carregar o YouTube",
    body: "Carregar este vídeo conecta você ao YouTube, que recebe seu endereço IP e informações do navegador e pode usar cookies ou armazenamento semelhante. Esta escolha é separada da análise do site e da publicidade. Você pode usar o exercício escrito e os links de download sem carregar o vídeo.",
    load: "Carregar vídeo do YouTube", source: "Abrir o original no YouTube", privacy: "Política de Privacidade do Google",
    disconnect: "Desativar vídeo e recarregar", withdrawal: "Recarregar fecha a conexão com o YouTube e mantém o vídeo desativado. Não desfaz as informações já enviadas ao YouTube. Esta escolha não é salva para outras páginas.",
  },
  vi: {
    title: "Chọn có tải YouTube hay không",
    body: "Tải video này sẽ kết nối với YouTube. YouTube nhận địa chỉ IP và thông tin trình duyệt của bạn, đồng thời có thể dùng cookie hoặc bộ nhớ tương tự. Lựa chọn này độc lập với phân tích trang web và quảng cáo. Bạn vẫn có thể dùng bài tập bằng văn bản và các liên kết tải xuống khi video đang tắt.",
    load: "Tải video YouTube", source: "Mở video gốc trên YouTube", privacy: "Chính sách quyền riêng tư của Google",
    disconnect: "Tắt video và tải lại trang", withdrawal: "Tải lại trang sẽ đóng kết nối với YouTube và giữ video ở trạng thái tắt. Thao tác này không thu hồi thông tin đã gửi cho YouTube. Lựa chọn này không được lưu cho các trang khác.",
  },
};

export function getVideoChoiceCopy(locale: Locale) {
  return videoChoiceCopy[locale as keyof typeof videoChoiceCopy] ?? videoChoiceCopy.en;
}

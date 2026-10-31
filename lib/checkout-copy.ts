import type { Locale } from "./locales";

export const CHECKOUT_SUPPORT_EMAIL = "mikey@stage5.tools";

export type CheckoutCopy = {
  successTitle: string;
  successBody: string;
  successHelp: string;
  cancelledTitle: string;
  cancelledBody: string;
  cancelledHelp: string;
  returnButton: string;
  permissionNote: string;
  contactLabel: string;
};

export const checkoutCopy: Record<Locale, CheckoutCopy> = {
  en: {
    successTitle: "Payment complete!",
    successBody:
      "Return to Translator. Your credits should appear in the app within a minute.",
    successHelp:
      "If they have not appeared after a few minutes, reopen Translator and check your balance. If it is still missing, email us with the email on your Stripe receipt and we will sort it out.",
    cancelledTitle: "Payment cancelled",
    cancelledBody:
      "No charge was made. Return to Translator and choose a pack again whenever you are ready.",
    cancelledHelp:
      "To try again, open the credits screen in Translator and pick a pack. If something went wrong at checkout, email us.",
    returnButton: "Return to Translator",
    permissionNote:
      "If your browser asks for permission, allow it to open Translator.",
    contactLabel: "Contact",
  },
  ko: {
    successTitle: "결제가 완료되었습니다!",
    successBody:
      "Translator로 돌아가세요. 크레딧은 1분 안에 앱에 표시됩니다.",
    successHelp:
      "몇 분이 지나도 보이지 않으면 Translator를 다시 열어 잔액을 확인해 보세요. 그래도 없다면 Stripe 영수증에 적힌 이메일 주소와 함께 메일을 보내 주시면 해결해 드리겠습니다.",
    cancelledTitle: "결제가 취소되었습니다",
    cancelledBody:
      "요금은 청구되지 않았습니다. 준비되면 Translator로 돌아가 크레딧 팩을 다시 선택하세요.",
    cancelledHelp:
      "다시 시도하려면 Translator의 크레딧 화면에서 팩을 선택하세요. 결제 중 문제가 있었다면 메일로 알려 주세요.",
    returnButton: "Translator로 돌아가기",
    permissionNote:
      "브라우저에서 권한을 묻는 경우 Translator를 열 수 있도록 허용해 주세요.",
    contactLabel: "문의",
  },
  es: {
    successTitle: "¡Pago completado!",
    successBody:
      "Vuelve a Translator. Tus créditos deberían aparecer en la app en menos de un minuto.",
    successHelp:
      "Si no aparecen después de unos minutos, vuelve a abrir Translator y revisa tu saldo. Si sigue sin aparecer, escríbenos con el correo de tu recibo de Stripe y lo resolveremos.",
    cancelledTitle: "Pago cancelado",
    cancelledBody:
      "No se hizo ningún cargo. Vuelve a Translator y elige un paquete de nuevo cuando quieras.",
    cancelledHelp:
      "Para volver a intentarlo, abre la pantalla de créditos en Translator y elige un paquete. Si algo falló al pagar, escríbenos.",
    returnButton: "Volver a Translator",
    permissionNote:
      "Si el navegador pide permiso, permite que abra Translator.",
    contactLabel: "Contacto",
  },
  ja: {
    successTitle: "お支払いが完了しました。",
    successBody:
      "Translator に戻ってください。クレジットは1分以内にアプリへ反映されます。",
    successHelp:
      "数分たっても反映されない場合は、Translator を開き直して残高を確認してください。それでも反映されないときは、Stripe の領収書に記載されたメールアドレスを添えてご連絡ください。対応いたします。",
    cancelledTitle: "お支払いはキャンセルされました",
    cancelledBody:
      "請求は発生していません。準備ができたら Translator に戻り、もう一度パックを選んでください。",
    cancelledHelp:
      "もう一度試すには、Translator のクレジット画面でパックを選びます。決済中に問題があった場合はご連絡ください。",
    returnButton: "Translator に戻る",
    permissionNote:
      "ブラウザーが許可を求めた場合は、Translator を開くことを許可してください。",
    contactLabel: "お問い合わせ",
  },
  zh: {
    successTitle: "支付完成！",
    successBody: "请返回 Translator。积分会在一分钟内显示在应用中。",
    successHelp:
      "如果几分钟后仍未显示，请重新打开 Translator 查看余额。若仍然没有，请用 Stripe 收据上的邮箱给我们发邮件，我们会帮你处理。",
    cancelledTitle: "支付已取消",
    cancelledBody:
      "没有产生任何扣款。准备好后，请返回 Translator 重新选择积分包。",
    cancelledHelp:
      "要重试，请在 Translator 中打开积分页面并选择积分包。如果结账时出了问题，请给我们发邮件。",
    returnButton: "返回 Translator",
    permissionNote: "如果浏览器请求权限，请允许其打开 Translator。",
    contactLabel: "联系我们",
  },
  fr: {
    successTitle: "Paiement effectué !",
    successBody:
      "Retournez dans Translator. Vos crédits devraient apparaître dans l'app en moins d'une minute.",
    successHelp:
      "S'ils n'apparaissent pas au bout de quelques minutes, rouvrez Translator et vérifiez votre solde. S'ils manquent toujours, écrivez-nous avec l'e-mail de votre reçu Stripe et nous réglerons cela.",
    cancelledTitle: "Paiement annulé",
    cancelledBody:
      "Aucun montant n'a été débité. Retournez dans Translator et choisissez à nouveau un pack quand vous le souhaitez.",
    cancelledHelp:
      "Pour réessayer, ouvrez l'écran des crédits dans Translator et choisissez un pack. Si un problème est survenu au paiement, écrivez-nous.",
    returnButton: "Retourner dans Translator",
    permissionNote:
      "Si votre navigateur demande une autorisation, autorisez-le à ouvrir Translator.",
    contactLabel: "Contact",
  },
  de: {
    successTitle: "Zahlung abgeschlossen!",
    successBody:
      "Kehre zu Translator zurück. Deine Credits sollten innerhalb einer Minute in der App erscheinen.",
    successHelp:
      "Wenn sie nach einigen Minuten nicht erscheinen, öffne Translator erneut und prüfe dein Guthaben. Fehlen sie weiterhin, schreib uns mit der E-Mail-Adresse auf deinem Stripe-Beleg, dann klären wir das.",
    cancelledTitle: "Zahlung abgebrochen",
    cancelledBody:
      "Es wurde nichts abgebucht. Kehre zu Translator zurück und wähle ein Paket, wann immer du bereit bist.",
    cancelledHelp:
      "Um es erneut zu versuchen, öffne in Translator den Credits-Bildschirm und wähle ein Paket. Falls beim Bezahlen etwas schiefgelaufen ist, schreib uns.",
    returnButton: "Zurück zu Translator",
    permissionNote:
      "Wenn dein Browser um Erlaubnis fragt, erlaube das Öffnen von Translator.",
    contactLabel: "Kontakt",
  },
  pt: {
    successTitle: "Pagamento concluído!",
    successBody:
      "Volte ao Translator. Seus créditos devem aparecer no app em até um minuto.",
    successHelp:
      "Se não aparecerem após alguns minutos, reabra o Translator e confira seu saldo. Se ainda faltarem, escreva para nós com o e-mail do seu recibo da Stripe e resolveremos.",
    cancelledTitle: "Pagamento cancelado",
    cancelledBody:
      "Nenhuma cobrança foi feita. Volte ao Translator e escolha um pacote novamente quando quiser.",
    cancelledHelp:
      "Para tentar de novo, abra a tela de créditos no Translator e escolha um pacote. Se algo deu errado no pagamento, escreva para nós.",
    returnButton: "Voltar ao Translator",
    permissionNote:
      "Se o navegador pedir permissão, permita que ele abra o Translator.",
    contactLabel: "Contato",
  },
  vi: {
    successTitle: "Thanh toán hoàn tất!",
    successBody:
      "Hãy quay lại Translator. Credit sẽ hiện trong ứng dụng trong vòng một phút.",
    successHelp:
      "Nếu sau vài phút vẫn chưa thấy, hãy mở lại Translator và kiểm tra số dư. Nếu vẫn thiếu, hãy gửi email cho chúng tôi kèm địa chỉ email trên biên lai Stripe và chúng tôi sẽ xử lý.",
    cancelledTitle: "Thanh toán đã bị hủy",
    cancelledBody:
      "Bạn không bị tính phí. Hãy quay lại Translator và chọn lại gói khi bạn sẵn sàng.",
    cancelledHelp:
      "Để thử lại, hãy mở màn hình credit trong Translator và chọn một gói. Nếu có sự cố khi thanh toán, hãy gửi email cho chúng tôi.",
    returnButton: "Quay lại Translator",
    permissionNote:
      "Nếu trình duyệt hỏi quyền, hãy cho phép mở Translator.",
    contactLabel: "Liên hệ",
  },
};

export function resolveCheckoutLocale(
  explicit: string | null | undefined,
  browserLanguages: readonly string[] | undefined,
): Locale {
  const candidates = [explicit, ...(browserLanguages ?? [])];
  for (const raw of candidates) {
    const base = String(raw ?? "").toLowerCase().split(/[-_]/)[0];
    if (base && Object.prototype.hasOwnProperty.call(checkoutCopy, base)) {
      return base as Locale;
    }
  }
  return "en";
}

import Link from "next/link";
import { getLocale } from "@/lib/get-locale";
import { t } from "@/lib/strings";

export const runtime = "edge";

export default async function NotFound() {
  const locale = await getLocale();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-light mb-4">404</h1>
      <p className="text-lg text-gray-500 mb-8">{t("notFound", locale)}</p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition"
      >
        {t("goHome", locale)}
      </Link>
    </div>
  );
}

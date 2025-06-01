import Link from "next/link";

export default function Success() {
  return (
    <main className="flex flex-col items-center gap-4 py-20">
      <h1 className="text-3xl font-bold text-emerald-600">Payment received!</h1>
      <p>Your credits will appear in the app in a few seconds.</p>
      <Link href="/" className="underline text-blue-600 mt-8">
        Back to home
      </Link>
    </main>
  );
}

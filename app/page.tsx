import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 py-24">
      <h1 className="text-4xl font-bold">AI-Translator</h1>

      {/* Download button */}
      <Link
        href={process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#"}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
      >
        Download for Mac
      </Link>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        <PackCard title="1 Hour" price={5} packId="HOUR_1" />
        <PackCard title="5 Hours" price={10} packId="HOUR_5" />
      </div>
    </main>
  );
}

type PackProps = { title: string; price: number; packId: "HOUR_1" | "HOUR_5" };

function PackCard({ title, price, packId }: PackProps) {
  return (
    <form action={`/checkout?packId=${packId}`} method="POST">
      <div className="p-6 border rounded-xl flex flex-col items-center gap-4">
        <h2 className="text-xl">{title}</h2>
        <p className="text-3xl font-semibold">${price}</p>
        <button
          type="submit"
          className="mt-auto px-5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Buy now
        </button>
      </div>
    </form>
  );
}

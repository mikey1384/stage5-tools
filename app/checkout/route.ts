"use server";

export const runtime = "edge";

import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const data = await request.formData();
  const packId = data.get("packId") as "HOUR_1" | "HOUR_5" | null;
  if (!packId) return redirect("/?error=invalid_pack");

  const deviceId =
    (data.get("deviceId") as string) ||
    new URL(request.url).searchParams.get("deviceId") ||
    crypto.randomUUID();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/payments/create-session`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ packId, deviceId }),
    }
  );

  if (!res.ok) return redirect("/?error=api");
  const { url } = (await res.json()) as { url: string };

  redirect(url);
}

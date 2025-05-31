"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const data = await request.formData();
  const packId = data.get("packId") as "HOUR_1" | "HOUR_5" | null;
  if (!packId) return redirect("/?error=invalid_pack");

  // Grab a deviceId from form data or querystring (or generate anonymously); with no auth
  const deviceId =
    (data.get("deviceId") as string) ||
    new URL(request.url).searchParams.get("deviceId") ||
    crypto.randomUUID();

  // Call your payments API
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

  // Stripe Checkout URLs are complete pages; redirect the user
  redirect(url);
}

// Validate without rewriting: a literal encoded percent sign must stay encoded.
// Run before framework routing, including assets and middleware-excluded paths.
export function malformedPathResponse(request) {
  try {
    decodeURIComponent(new URL(request.url).pathname);
    return null;
  } catch {
    return new Response(request.method === "HEAD" ? null : "Invalid address.\n", {
      status: 400,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }
}

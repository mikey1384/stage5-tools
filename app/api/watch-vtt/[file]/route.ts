import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

/**
 * VTT proxy route: serves VTT files from R2 (if configured) or falls back to public/watch.
 * Edge-safe: uses fetch instead of fs.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;

  // Sanitize filename: must be alphanumeric + dots/hyphens/underscores, ending in .30s.vtt
  if (!/^[A-Za-z0-9._-]+\.30s\.vtt$/.test(file)) {
    return new NextResponse("Invalid VTT file format", { status: 400 });
  }

  // Try R2 first if configured
  const watchAssetsBase = process.env.WATCH_ASSETS_BASE;
  if (watchAssetsBase) {
    try {
      const vttUrl = `${watchAssetsBase}/vtt/${file}`;
      const response = await fetch(vttUrl, {
        next: { revalidate: 3600 },
      });

      if (response.ok) {
        const vttContent = await response.text();
        return new NextResponse(vttContent, {
          status: 200,
          headers: {
            "Content-Type": "text/vtt",
            "Cache-Control": "public, max-age=3600",
          },
        });
      }
    } catch (error) {
      console.warn(`Failed to fetch VTT from R2: ${file}`, error);
      // Fall through to public fallback
    }
  }

  // Fall back to same-origin public/watch files
  try {
    const publicUrl = new URL(`/watch/${file}`, request.url);
    const response = await fetch(publicUrl.toString());

    if (response.ok) {
      const vttContent = await response.text();
      return new NextResponse(vttContent, {
        status: 200,
        headers: {
          "Content-Type": "text/vtt",
          "Cache-Control": "public, max-age=3600",
        },
      });
    }
  } catch (error) {
    console.error(`VTT file not found: ${file}`, error);
  }

  return new NextResponse("VTT file not found", { status: 404 });
}

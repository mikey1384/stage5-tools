import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

/**
 * VTT proxy route: serves VTT files from R2 (if configured) or falls back to public/watch.
 * This keeps YouTubeDemo same-origin while allowing VTTs to live outside git.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ file: string }> }
) {
  const { file } = await params;

  // Validate file format: {vttSlug}.{lang}.30s.vtt
  if (!file.endsWith(".vtt") || !file.includes(".")) {
    return new NextResponse("Invalid VTT file format", { status: 400 });
  }

  // Try R2 first if configured
  const watchAssetsBase = process.env.WATCH_ASSETS_BASE;
  if (watchAssetsBase) {
    try {
      const vttUrl = `${watchAssetsBase}/vtt/${file}`;
      const response = await fetch(vttUrl, {
        next: { revalidate: 3600 }, // Cache for 1 hour
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
      // Fall through to local fallback
    }
  }

  // Fall back to public/watch files
  try {
    const publicPath = join(process.cwd(), "public", "watch", file);
    const vttContent = await readFile(publicPath, "utf-8");
    return new NextResponse(vttContent, {
      status: 200,
      headers: {
        "Content-Type": "text/vtt",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error(`VTT file not found: ${file}`, error);
    return new NextResponse("VTT file not found", { status: 404 });
  }
}

import Image from "next/image";
import Link from "next/link";
import "./stage5-portfolio.css";

export function Stage5Brand({ href = "/" }: { href?: string }) {
  return <Link href={href} aria-label="Stage5" className="s5-wordmark"><Image src="/brand/stage5-wordmark-web-v1.webp" width={2172} height={724} sizes="220px" alt="stage_5" priority /></Link>;
}

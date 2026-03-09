"use client";

import { useState } from "react";

interface HomepageScreenshotSlotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  fallback: React.ReactNode;
}

export function HomepageScreenshotSlot({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "",
  loading = "lazy",
  fetchPriority = "auto",
  fallback,
}: HomepageScreenshotSlotProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={imageClassName}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

interface IconProps {
  className?: string;
}

export function VideoDownloadIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  );
}

export function SubtitleMergeIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4z" />
      <path d="M6 10h2v2H6zm0 4h8v2H6zm10-4h2v2h-2z" />
    </svg>
  );
}

export function AITranslationIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65.47-6.12-1.11-1.06-2.8-1.09-3.91-.03-1.11 1.06-1.08 2.79.03 3.85 1.11 1.06 2.8 1.09 3.91.03l.03-.03 2.54 2.51c.8.8 2.04.8 2.84 0s.8-2.04 0-2.84zm-5.1-2.18c-.5-.48-.5-1.26 0-1.74.48-.48 1.26-.48 1.74 0 .48.48.48 1.26 0 1.74-.48.48-1.26.48-1.74 0z" />
      <path d="M16.5 17.5h-3v2h3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
      <path d="M20.5 15.5h-7v2h7c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
    </svg>
  );
}

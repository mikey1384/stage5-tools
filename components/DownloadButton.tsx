import Link from "next/link";

interface DownloadButtonProps {
  className?: string;
  label?: string;
  platform?: "mac" | "win";
  architecture?: "arm64" | "x64";
  variant?: "primary" | "secondary";
  size?: "normal" | "small";
}

export function DownloadButton({
  className = "",
  label = "Download for Mac",
  platform = "mac",
  architecture = "arm64",
  variant = "primary",
  size = "normal",
}: DownloadButtonProps) {
  const baseUrl = `https://downloads.stage5.tools/${platform}/latest`;
  
  let archFile: string;
  if (platform === "win") {
    archFile = architecture === "arm64" ? "Translator-arm64.exe" : "Translator-x64.exe";
  } else {
    archFile = architecture === "arm64" ? "Translator-arm64.dmg" : "Translator-x64.dmg";
  }
  
  const downloadUrl = `${baseUrl}/${archFile}`;

  const isPrimary = variant === "primary";
  const isSmall = size === "small";
  
  const buttonClasses = isPrimary
    ? "text-black bg-white hover:bg-gray-100"
    : "text-white bg-gray-800 hover:bg-gray-700 border border-gray-600";
    
  const sizeClasses = isSmall
    ? "px-6 py-3 text-base"
    : "px-8 py-4 text-lg";

  // Platform-specific icons
  const renderIcon = () => {
    if (platform === "mac") {
      // Apple logo
      return (
        <svg className={`${isSmall ? "w-4 h-4 mr-2" : "w-5 h-5 mr-3"}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
      );
    } else if (platform === "win") {
      // Windows logo
      return (
        <svg className={`${isSmall ? "w-4 h-4 mr-2" : "w-5 h-5 mr-3"}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm17 .25V22l-10-1.91V13.1l10 .15z"/>
        </svg>
      );
    } else {
      // Default download icon
      return (
        <svg className={`${isSmall ? "w-4 h-4 mr-2" : "w-5 h-5 mr-3"}`} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
  };

  return (
    <Link
      href={downloadUrl}
      className={`inline-flex items-center ${sizeClasses} font-medium ${buttonClasses} rounded-2xl transition-all duration-300 ${className}`}
    >
{renderIcon()}
      {label}
    </Link>
  );
}

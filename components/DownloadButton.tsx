import Link from "next/link";

interface DownloadButtonProps {
  className?: string;
  label?: string;
  platform?: "mac" | "windows";
  architecture?: "arm64" | "x64";
  variant?: "primary" | "secondary";
}

export function DownloadButton({
  className = "",
  label = "Download for Mac",
  platform = "mac",
  architecture = "arm64",
  variant = "primary",
}: DownloadButtonProps) {
  const baseUrl = `https://downloads.stage5.tools/${platform}/latest`;
  
  let archFile: string;
  if (platform === "windows") {
    archFile = architecture === "arm64" ? "Translator-arm64.exe" : "Translator-x64.exe";
  } else {
    archFile = architecture === "arm64" ? "Translator-arm64.dmg" : "Translator-x64.dmg";
  }
  
  const downloadUrl = `${baseUrl}/${archFile}`;

  const isPrimary = variant === "primary";
  const buttonClasses = isPrimary
    ? "text-black bg-white hover:bg-gray-100"
    : "text-white bg-gray-800 hover:bg-gray-700 border border-gray-600";

  return (
    <Link
      href={downloadUrl}
      className={`inline-flex items-center px-8 py-4 text-lg font-medium ${buttonClasses} rounded-2xl transition-all duration-300 ${className}`}
    >
      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </Link>
  );
}

import { Download, Captions, Languages } from "lucide-react";

interface IconProps {
  className?: string;
}

export const VideoDownloadIcon = ({ className }: IconProps) => (
  <Download className={className} />
);

export const SubtitleMergeIcon = ({ className }: IconProps) => (
  <Captions className={className} />
);

export const AITranslationIcon = ({ className }: IconProps) => (
  <Languages className={className} />
);

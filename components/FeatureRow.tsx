import { useInView } from "../hooks/useInView";

interface FeatureRowProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  direction?: "ltr" | "rtl";
}

export function FeatureRow({
  title,
  description,
  icon: Icon,
  direction = "ltr",
}: FeatureRowProps) {
  const [ref, active] = useInView();

  return (
    <div
      ref={ref}
      data-active={active}
      className={`relative flex flex-col md:flex-row ${
        direction === "rtl" ? "md:flex-row-reverse" : ""
      } items-center gap-12 py-24 transition-transform duration-500 translate-y-6 [data-active]:translate-y-0`}
    >
      {/* Icon */}
      <div className="shrink-0">
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
          <Icon className="w-10 h-10 text-black" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-xl text-center md:text-left">
        <h3 className="text-3xl font-light text-white mb-4">{title}</h3>
        <p className="text-lg text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Subtle glass overlay */}
      <div
        className="absolute inset-0 rounded-3xl backdrop-blur-md bg-white/5 border border-white/5 
                   opacity-0 transition-opacity duration-500 [data-active]:opacity-100 
                   shadow-glass pointer-events-none z-10"
      />
    </div>
  );
}

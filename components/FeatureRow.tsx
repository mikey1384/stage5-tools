import { useInView } from "../hooks/useInView";

interface FeatureRowProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  direction?: "ltr" | "rtl";
  label?: string;
}

export function FeatureRow({
  title,
  description,
  icon: Icon,
  direction = "ltr",
  label,
}: FeatureRowProps) {
  const [ref, active] = useInView();

  return (
    <div
      ref={ref}
      data-active={active}
      className={`relative group flex flex-col md:flex-row ${
        direction === "rtl" ? "md:flex-row-reverse" : ""
      } items-center gap-12 py-24 mb-16 transition-transform duration-500 translate-y-6 group-data-[active]:translate-y-0`}
    >
      {/* Content wrapper with higher z-index */}
      <div
        className={`relative z-10 flex flex-col md:flex-row ${
          direction === "rtl" ? "md:flex-row-reverse" : ""
        } items-center gap-12 w-full px-8 py-6`}
      >
        {/* Label at top middle */}
        {label && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full text-center z-20">
            <span className="inline-block text-xs font-medium text-white/80 bg-white/10 px-3 py-1 rounded-md uppercase tracking-widest border border-white/20">
              {label}
            </span>
          </div>
        )}
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
      </div>

      {/* Subtle glass overlay - now behind content */}
      <div
        className="absolute inset-0 rounded-3xl backdrop-blur-md bg-white/5 border border-white/5 
                   opacity-0 transition-opacity duration-500 group-data-[active]:opacity-100 
                   shadow-glass pointer-events-none z-0"
      />
    </div>
  );
}

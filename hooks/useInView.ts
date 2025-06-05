import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.4) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, active] as const; // usage: const [ref, active] = useInView()
}

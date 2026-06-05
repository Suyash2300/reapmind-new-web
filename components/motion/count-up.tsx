"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type CountUpProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
};

/** Stats band (10+, 1600+) — intersection observer + requestAnimationFrame */
export function CountUp({
  end,
  suffix = "",
  prefix = "",
  durationMs = 1400,
  className,
}: CountUpProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(reducedMotion ? end : 0);
  const started = useRef(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    if (reducedMotion) {
      setValue(end);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * end));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, durationMs, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

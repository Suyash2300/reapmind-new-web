'use client';

import { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ to, suffix = '', duration = 1600 }: CounterProps) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * to));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

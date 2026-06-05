"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/animation/gsap-register";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type GsapScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Pin section while inner content animates — use sparingly (hero / case study) */
  pin?: boolean;
  start?: string;
  delay?: number;
};

/** GSAP + ScrollTrigger — parallax, scrubbed timelines, pinned storytelling sections */
export function GsapScrollReveal({
  children,
  className,
  pin = false,
  start = "top 80%",
  delay = 0,
}: GsapScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;
      registerGsapPlugins();

      gsap.from(ref.current, {
        opacity: 0,
        y: 48,
        duration: 1,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none none",
          pin,
        },
      });
    },
    { scope: ref, dependencies: [reducedMotion, pin, start, delay] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

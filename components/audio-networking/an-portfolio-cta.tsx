"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { audioNetworkingConfig } from "@/lib/audio-networking-config";

export function AnPortfolioCta() {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.12);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.12);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="border-t border-white/10 bg-surface-dark py-8 md:py-10">
      <div className="container-app text-center">
        <BlurFadeIn>
          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ x: springX, y: springY }}
            className="inline-block"
          >
            <Link
              href="/contact-us#free-consultation"
              className="relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border border-violet-500/35 bg-violet-500/10 px-10 text-sm font-semibold text-white transition-colors hover:bg-violet-500/20"
            >
              {!reducedMotion && (
                <motion.span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
                />
              )}
              <span className="relative">{audioNetworkingConfig.portfolioCta}</span>
            </Link>
          </motion.div>
        </BlurFadeIn>
      </div>
    </div>
  );
}

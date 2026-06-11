"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { imageVideoSharingConfig } from "@/lib/image-video-sharing-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;
const ORBIT_RADIUS = 120;

export function IvsBenefits() {
  const { benefits } = imageVideoSharingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = benefits.items;

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 3500);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="ivs-benefits-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ivs-benefits-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>

        <div className="relative mx-auto mt-12 flex h-[320px] max-w-md items-center justify-center sm:h-[360px]">
          <motion.div
            className="absolute z-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-surface-elevated/90 text-center backdrop-blur-md sm:h-32 sm:w-32"
            key={items[active].id}
            initial={reducedMotion ? false : { scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: smoothEase }}
          >
            <span className="px-3 text-sm font-bold leading-snug text-white sm:text-base">{items[active].title}</span>
          </motion.div>

          {items.map((item, i) => {
            const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2 + (active * Math.PI) / 2;
            const x = Math.cos(angle) * ORBIT_RADIUS;
            const y = Math.sin(angle) * ORBIT_RADIUS;
            const isActive = i === active;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border text-lg sm:h-16 sm:w-16"
                animate={{
                  x,
                  y,
                  scale: isActive ? 1.15 : 1,
                  borderColor: isActive ? `${item.accent}88` : "rgba(255,255,255,0.12)",
                  backgroundColor: isActive ? `${item.accent}22` : "rgba(255,255,255,0.04)",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                whileHover={reducedMotion ? undefined : { scale: isActive ? 1.2 : 1.08 }}
              >
                <span aria-hidden>{item.icon}</span>
                <span className="sr-only">{item.title}</span>
              </motion.button>
            );
          })}

          {!reducedMotion && (
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>

        <BlurFadeIn delay={0.1} className="mt-6 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {benefits.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { audioNetworkingConfig } from "@/lib/audio-networking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AnServiceHighlights() {
  const { serviceHighlights } = audioNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = serviceHighlights.items;
  const item = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 4500);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="an-highlights-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="an-highlights-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {serviceHighlights.title}
        </BlurFadeIn>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {items.map((feat, i) => (
            <button
              key={feat.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className="rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm"
              style={{
                borderColor: i === active ? `${feat.accent}88` : "rgba(255,255,255,0.12)",
                backgroundColor: i === active ? `${feat.accent}18` : "transparent",
                color: i === active ? "#fff" : "rgba(255,255,255,0.55)",
              }}
            >
              {feat.title}
            </button>
          ))}
        </div>

        <div className="mt-10 flex justify-center" style={{ perspective: 1400 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, rotateY: -80, scale: 0.92 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, rotateY: 80, scale: 0.92 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="relative w-full max-w-lg"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-10 text-center backdrop-blur-md"
                style={{ boxShadow: `0 0 60px ${item.accent}22` }}
              >
                <motion.div
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${item.accent}22`, border: `1px solid ${item.accent}55` }}
                  animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl font-black" style={{ color: item.accent }}>
                    {String(active + 1).padStart(2, "0")}
                  </span>
                </motion.div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {serviceHighlights.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ecommerceBusinessConfig } from "@/lib/ecommerce-business-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function EbsOrbitAdvantages() {
  const { partner } = ecommerceBusinessConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = partner.items;
  const activeItem = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 4500);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20"
      aria-labelledby="ebs-partner-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(26,105,253,0.08),transparent_65%)]" aria-hidden />

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="ebs-partner-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {partner.title}
        </BlurFadeIn>

        {/* Desktop orbit */}
        <div className="relative mx-auto mt-14 hidden max-w-4xl md:block">
          <div className="relative mx-auto aspect-square max-w-lg">
            <div
              className="absolute inset-[18%] overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-primary/20 via-surface-elevated to-violet-500/10 backdrop-blur-sm"
              aria-hidden
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(26,105,253,0.18),transparent_65%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.12),transparent_50%)]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: smoothEase }}
                className="absolute left-1/2 top-1/2 z-20 w-[min(100%,16rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-black/80 p-5 text-center backdrop-blur-xl"
              >
                <span
                  className="inline-block h-1 w-8 rounded-full"
                  style={{ backgroundColor: activeItem.accent }}
                  aria-hidden
                />
                <h3 className="mt-3 text-lg font-bold text-white">{activeItem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{activeItem.description}</p>
              </motion.div>
            </AnimatePresence>

            {items.map((item, i) => {
              const angle = (i / items.length) * 360 - 90;
              const radius = 46;
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
              const isActive = i === active;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    borderColor: isActive ? item.accent : "rgba(255,255,255,0.15)",
                    backgroundColor: isActive ? `${item.accent}22` : "rgba(0,0,0,0.65)",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                    boxShadow: isActive ? `0 0 24px ${item.accent}44` : undefined,
                  }}
                  animate={
                    reducedMotion
                      ? undefined
                      : { y: isActive ? [0, -4, 0] : [0, -6, 0] }
                  }
                  transition={
                    reducedMotion
                      ? undefined
                      : { y: { duration: isActive ? 2 : 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" } }
                  }
                  aria-pressed={isActive}
                  aria-label={`${item.title}: ${item.description}`}
                >
                  {item.title}
                </motion.button>
              );
            })}

            {!reducedMotion && (
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-white/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
            )}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="mt-10 md:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: smoothEase }}
                className="w-[min(85vw,20rem)] shrink-0 snap-center rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-sm"
                style={{ borderTopColor: item.accent, borderTopWidth: 3 }}
              >
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

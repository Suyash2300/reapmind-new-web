"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { freelanceMarketplaceConfig } from "@/lib/freelance-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FmFeatures() {
  const { features } = freelanceMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = features.items;
  const activeItem = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 5500);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="fm-features-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="fm-features-heading" className="sr-only">
          Freelance marketplace platform features
        </BlurFadeIn>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:gap-8 lg:items-start">
          <nav
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
            aria-label="Freelance marketplace features"
          >
            {items.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors lg:w-full ${
                  i === active
                    ? "border-primary/50 bg-primary/10 text-white"
                    : "border-white/10 bg-black/40 text-white/55 hover:border-white/20 hover:text-white/80"
                }`}
              >
                <span className={`text-xs font-bold tabular-nums ${i === active ? "text-primary" : "text-white/35"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold whitespace-nowrap lg:whitespace-normal">{item.title}</span>
              </button>
            ))}
          </nav>

          <div className="relative min-h-[260px] sm:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeItem.id}
                initial={reducedMotion ? false : { opacity: 0, x: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={reducedMotion ? undefined : { opacity: 0, x: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: smoothEase }}
                className={`flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${activeItem.accent} p-6 sm:p-8`}
              >
                <span className="text-xs font-bold tabular-nums text-primary/80">
                  {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/70 sm:text-para">{activeItem.description}</p>
                <Link
                  href="/contact-us#free-consultation"
                  className="mt-6 inline-flex min-h-11 w-fit items-center text-sm font-semibold text-primary transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

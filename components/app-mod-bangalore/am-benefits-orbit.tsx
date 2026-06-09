"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

export function AmBenefitsOrbit() {
  const { benefits } = appModBangaloreConfig;
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const active = benefits.items[activeIndex];

  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="text-h3 font-bold text-white sm:text-h2">{benefits.title}</h2>
          <p className="mt-4 max-w-3xl text-para text-white/60">{benefits.subtitle}</p>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              className="absolute inset-0 rounded-full border border-dashed border-white/10"
              aria-hidden
            />
            {!reducedMotion ? (
              <motion.div
                className="absolute inset-[8%] rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
            ) : null}

            <div className="absolute left-1/2 top-1/2 z-10 w-[min(240px,70%)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary/30 bg-surface-elevated p-5 text-center shadow-[0_0_48px_-12px_rgba(26,105,253,0.45)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Benefit</p>
                  <h3 className="mt-2 text-h5 font-bold text-white">{active.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{active.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {benefits.items.map((item, i) => {
              const angle = (i / benefits.items.length) * Math.PI * 2 - Math.PI / 2;
              const radius = 44;
              const x = 50 + Math.cos(angle) * radius;
              const y = 50 + Math.sin(angle) * radius;
              const selected = i === activeIndex;
              return (
                <HydrationButton
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={selected}
                  className={`absolute max-w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-1.5 text-[10px] font-bold leading-tight transition-all sm:max-w-[140px] sm:text-xs ${
                    selected
                      ? "border-primary bg-primary text-white shadow-[0_0_20px_rgba(26,105,253,0.5)]"
                      : "border-white/15 bg-black/60 text-white/70 hover:border-primary/40"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {item.title.split(" ")[0]}
                </HydrationButton>
              );
            })}
          </div>

          <FadeIn delay={0.08}>
            <ul className="space-y-3">
              {benefits.items.map((item, i) => (
                <li key={item.title}>
                  <HydrationButton
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                      i === activeIndex
                        ? "border-primary/40 bg-primary/10"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <span className="text-sm font-semibold text-white">{item.title}</span>
                  </HydrationButton>
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us#free-consultation"
              className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-white hover:bg-primary-hover sm:w-auto sm:px-8"
            >
              {benefits.cta}
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

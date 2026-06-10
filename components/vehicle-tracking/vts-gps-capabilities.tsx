"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { vehicleTrackingConfig } from "@/lib/vehicle-tracking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function VtsGpsCapabilities() {
  const { capabilities } = vehicleTrackingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = capabilities.items;
  const activeItem = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="vts-capabilities-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="vts-capabilities-heading" className="sr-only">
          GPS tracking capabilities
        </BlurFadeIn>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#061018]">
              <Image
                src="/generative-ai/logistics-1.png"
                alt="Fleet vehicles on logistics route map"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-cyan-900/20" aria-hidden />

              <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
                <motion.div
                  className="h-[72%] w-[72%] rounded-full border border-cyan-400/25"
                  animate={reducedMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute h-[52%] w-[52%] rounded-full border border-cyan-400/35"
                  animate={reducedMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                <motion.div
                  className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(6,182,212,0.9)]"
                  animate={reducedMotion ? undefined : { rotate: 360 }}
                  style={{ transformOrigin: "140px center" }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">{activeItem.code} · Active</p>
                <p className="mt-1 text-sm font-semibold text-white">{activeItem.title}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item, i) => (
                <HydrationButton
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors sm:text-xs ${
                    i === active
                      ? "border-white/25 text-white"
                      : "border-white/10 bg-black/40 text-white/50 hover:border-white/20"
                  }`}
                  style={i === active ? { borderColor: `${item.accent}66`, backgroundColor: `${item.accent}18` } : undefined}
                >
                  {item.code}
                </HydrationButton>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2">
              {items.map((item, i) => {
                const isActive = i === active;
                return (
                  <HydrationButton
                    key={item.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3.5 text-left transition-colors sm:px-5 ${
                      isActive
                        ? "border-white/20 bg-black/60"
                        : "border-white/8 bg-black/30 hover:border-white/15"
                    }`}
                    style={isActive ? { borderLeftColor: item.accent, borderLeftWidth: 3 } : undefined}
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-bold"
                      style={{ backgroundColor: `${item.accent}22`, color: item.accent }}
                    >
                      {item.code}
                    </span>
                    <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-white/55"}`}>{item.title}</span>
                  </HydrationButton>
                );
              })}
            </div>

            <div className="relative mt-6 min-h-[160px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                >
                  <p className="text-sm leading-relaxed text-white/65 sm:text-para">{activeItem.description}</p>
                  <Link
                    href="/contact-us#free-consultation"
                    className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-primary transition-colors hover:text-white"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { employeeTransportationConfig } from "@/lib/employee-transportation-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const NODE_POSITIONS = [
  { x: 12, y: 50, left: "12%", top: "50%" },
  { x: 35, y: 22, left: "35%", top: "22%" },
  { x: 58, y: 55, left: "58%", top: "55%" },
  { x: 78, y: 28, left: "78%", top: "28%" },
  { x: 88, y: 72, left: "88%", top: "72%" },
] as const;

export function EtmsAdvantages() {
  const { advantages } = employeeTransportationConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = advantages.items;
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
    <section
      className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20"
      aria-labelledby="etms-advantages-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="etms-advantages-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {advantages.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative hidden aspect-square max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1628] sm:block">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              {items.slice(0, -1).map((_, i) => {
                const from = NODE_POSITIONS[i];
                const to = NODE_POSITIONS[i + 1];
                return (
                  <line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="rgba(26,105,253,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>

            {items.map((item, i) => {
              const pos = NODE_POSITIONS[i];
              const isActive = i === active;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: pos.left, top: pos.top }}
                  animate={reducedMotion ? undefined : isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                  transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold transition-colors sm:h-11 sm:w-11 ${
                      isActive ? "border-primary bg-primary/25 text-white" : "border-white/20 bg-black/60 text-white/50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div>
            <div className="flex flex-wrap gap-2 lg:hidden">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`min-h-10 rounded-full border px-4 py-2 text-xs font-semibold ${
                    i === active ? "border-primary/50 bg-primary/10 text-white" : "border-white/10 text-white/55"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="relative mt-4 min-h-[200px] lg:mt-0">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeItem.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 16, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reducedMotion ? undefined : { opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: smoothEase }}
                  className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${activeItem.accent} p-6 sm:p-8`}
                >
                  <span className="text-xs font-bold tabular-nums text-primary/80">
                    {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-para">{activeItem.description}</p>
                </motion.article>
              </AnimatePresence>
            </div>

            <BlurFadeIn delay={0.1} className="mt-8">
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {advantages.cta}
              </Link>
            </BlurFadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

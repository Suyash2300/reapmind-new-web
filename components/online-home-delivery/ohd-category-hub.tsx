"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineHomeDeliveryConfig } from "@/lib/online-home-delivery-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OhdCategoryHub() {
  const { categories } = onlineHomeDeliveryConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = categories.items;
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
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="ohd-categories-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ohd-categories-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {categories.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:items-stretch">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {items.map((item, i) => {
              const isActive = i === active;
              return (
                <HydrationButton
                  key={item.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="relative shrink-0 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors lg:w-full"
                  style={{
                    borderColor: isActive ? `${item.accent}88` : "rgba(255,255,255,0.1)",
                    backgroundColor: isActive ? `${item.accent}14` : "rgba(0,0,0,0.35)",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                    boxShadow: isActive ? `0 0 20px ${item.accent}22` : undefined,
                  }}
                >
                  <span
                    className="mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle"
                    style={{ backgroundColor: isActive ? item.accent : "rgba(255,255,255,0.25)" }}
                    aria-hidden
                  />
                  <span className="line-clamp-2">{item.title.replace(" Home Delivery Service", "").replace(" Home delivery Service", "")}</span>
                </HydrationButton>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={reducedMotion ? false : { opacity: 0, x: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, x: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/55 p-6 sm:p-8"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{ background: `radial-gradient(ellipse 70% 60% at 0% 0%, ${activeItem.accent}28, transparent 65%)` }}
                aria-hidden
              />
              <div className="relative">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: activeItem.accent }}>
                  Delivery vertical
                </span>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{activeItem.title}</h3>

                <ol className="mt-6 space-y-4">
                  {activeItem.steps.map((step, i) => (
                    <motion.li
                      key={step}
                      initial={reducedMotion ? false : { opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: smoothEase }}
                      className="flex gap-4"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums text-white"
                        style={{ backgroundColor: `${activeItem.accent}33`, border: `1px solid ${activeItem.accent}66` }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-white/70 sm:text-para">{step}</p>
                    </motion.li>
                  ))}
                </ol>

                {!reducedMotion && (
                  <motion.div
                    className="mt-8 h-1 overflow-hidden rounded-full bg-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: activeItem.accent }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.5, ease: "linear" }}
                      key={activeItem.id}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

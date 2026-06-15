"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function TmPatientPanel() {
  const { patientPanel } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = patientPanel.items;
  const item = items[active];

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(advance, 6000);
    return () => clearInterval(id);
  }, [advance, reducedMotion]);

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="tm-patient-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tm-patient-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {patientPanel.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">
          {patientPanel.intro}
        </BlurFadeIn>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 lg:flex-wrap">
          {items.map((feat, i) => (
            <HydrationButton
              key={feat.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className="shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-colors sm:text-sm"
              style={{
                borderColor: i === active ? `${feat.accent}88` : "rgba(255,255,255,0.12)",
                backgroundColor: i === active ? `${feat.accent}18` : "transparent",
                color: i === active ? "#fff" : "rgba(255,255,255,0.55)",
              }}
            >
              {feat.title}
            </HydrationButton>
          ))}
        </div>

        <div className="mt-8 flex justify-center" style={{ perspective: 1400 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, rotateY: -72, scale: 0.94 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, rotateY: 72, scale: 0.94 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="relative w-full max-w-3xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-surface-elevated/90 p-8 backdrop-blur-md sm:p-10">
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: item.accent }}>
                  Patient feature · {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">{item.title}</h3>
                <p className="mt-4 text-para leading-relaxed text-white/68">{item.description}</p>
                {!reducedMotion && (
                  <motion.div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.accent }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      key={item.id}
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

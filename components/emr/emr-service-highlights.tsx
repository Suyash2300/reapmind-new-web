"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrServiceHighlights() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const tabs = emrConfig.serviceHighlights.tabs;

  return (
    <section className="section-app bg-surface-dark py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, letterSpacing: "0.3em" }}
          whileInView={reduced ? undefined : { opacity: 1, letterSpacing: "0em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {emrConfig.serviceHighlights.title}
        </motion.h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="flex flex-wrap gap-2 lg:col-span-4 lg:flex-col">
            {tabs.map((tab, index) => (
              <button
                key={tab.title}
                type="button"
                onClick={() => setActive(index)}
                className={`min-h-[48px] rounded-2xl border px-5 py-3 text-left text-sm font-semibold transition-all sm:text-base ${
                  active === index
                    ? "border-[#2563EB]/70 bg-[#2563EB]/15 text-white"
                    : "border-white/10 bg-black/40 text-white/75 hover:border-white/25"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-6 sm:p-8 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={tabs[active].title}
                initial={reduced ? false : { opacity: 0, x: 80, skewX: 6 }}
                animate={reduced ? undefined : { opacity: 1, x: 0, skewX: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -60, skewX: -4 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="text-h4 font-bold text-[#93C5FD]">{tabs[active].title}</h3>
                <p className="mt-4 text-para leading-relaxed text-white/75">{tabs[active].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

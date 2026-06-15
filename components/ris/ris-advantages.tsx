"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RisAdvantages() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const tabs = risConfig.advantages.tabs;

  return (
    <section className="section-app relative overflow-hidden bg-black py-20 sm:py-24">
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.25), transparent 55%)",
              "radial-gradient(ellipse at 80% 40%, rgba(139,92,246,0.3), transparent 55%)",
              "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.25), transparent 55%)",
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container-app relative">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, skewX: -6 }}
          whileInView={reduced ? undefined : { opacity: 1, skewX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {risConfig.advantages.title}
        </motion.h2>

        <div className="relative mt-8 flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActive(index)}
              className={`relative shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                active === index ? "text-white" : "border border-white/15 bg-white/5 text-white/75"
              }`}
            >
              {active === index && !reduced && (
                <motion.span
                  layoutId="ris-adv-tab"
                  className="absolute inset-0 rounded-full bg-violet-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {active === index && reduced && <span className="absolute inset-0 rounded-full bg-violet-600" />}
              <span className="relative z-10">{tab.title}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={tabs[active].title}
          className="mt-8 rounded-3xl border border-violet-500/30 bg-violet-950/25 p-6 sm:p-8"
          initial={reduced ? false : { opacity: 0, y: 20, rotateZ: -1 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, rotateZ: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-h4 font-bold text-violet-300">{tabs[active].title}</h3>
          <p className="mt-4 text-para leading-relaxed text-white/75">{tabs[active].description}</p>
        </motion.div>
      </div>
    </section>
  );
}

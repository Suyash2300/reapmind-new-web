"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsBenefits() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const tabs = oamsConfig.benefits.tabs;

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, filter: "blur(6px)" }}
          whileInView={reduced ? undefined : { opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {oamsConfig.benefits.title}
        </motion.h2>

        <div className="mt-8 flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActive(index)}
              className={`shrink-0 snap-start rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                active === index
                  ? "scale-105 bg-emerald-600 text-white"
                  : "border border-white/15 bg-white/5 text-white/75"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <motion.div
          key={tabs[active].title}
          className="mt-8 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-6 sm:p-8"
          initial={reduced ? false : { opacity: 0, scale: 0.96 }}
          animate={reduced ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-h4 font-bold text-emerald-300">{tabs[active].title}</h3>
          <p className="mt-4 text-para leading-relaxed text-white/75">{tabs[active].description}</p>
        </motion.div>
      </div>
    </section>
  );
}

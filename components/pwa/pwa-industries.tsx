"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaIndustries() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <GsapScrollReveal className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            Industries
          </span>
          <h2 className="text-display font-black leading-tight text-white">
            {pwaConfig.industries.title}
          </h2>
          <p className="mt-6 text-h6 font-normal leading-relaxed text-white/70">
            {pwaConfig.industries.subtitle}
          </p>
        </GsapScrollReveal>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="flex flex-wrap gap-2 lg:col-span-4 lg:flex-col">
            {pwaConfig.industries.items.map((item, i) => (
              <GsapScrollReveal key={item.title} start={`top ${85 + i * 2}%`}>
                <button
                  onClick={() => setActive(i)}
                  className={`rounded-2xl border px-5 py-4 text-left text-sm font-bold transition-all duration-300 sm:text-base ${
                    active === i
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              </GsapScrollReveal>
            ))}
          </div>

          <div className="lg:col-span-8">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-primary">
                    0{active + 1} / 0{pwaConfig.industries.items.length}
                  </span>
                  <h3 className="mt-4 text-h3 font-bold text-white">
                    {pwaConfig.industries.items[active].title}
                  </h3>
                  <p className="mt-6 text-para leading-relaxed text-white/70">
                    {pwaConfig.industries.items[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

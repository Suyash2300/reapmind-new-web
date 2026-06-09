"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaServices() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-app bg-black py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            What We Offer
          </span>
          <h2 className="mt-4 max-w-3xl text-display font-bold leading-none text-white">
            {pwaConfig.services.title}
          </h2>
        </GsapScrollReveal>

        <div className="mt-20 grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-3">
            {pwaConfig.services.items.map((service, i) => (
              <GsapScrollReveal key={service.title} start={`top ${80 + i * 4}%`}>
                <button
                  onClick={() => setActive(i)}
                  className={`w-full rounded-2xl border p-6 text-left transition-all duration-500 sm:p-8 ${
                    active === i
                      ? "border-primary bg-primary/10"
                      : "border-white/5 bg-white/3 hover:border-white/20"
                  }`}
                >
                  <span
                    className={`text-sm font-bold uppercase tracking-widest ${
                      active === i ? "text-primary" : "text-white/40"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className={`mt-2 text-h4 font-bold transition-colors ${
                      active === i ? "text-primary" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <AnimatePresence>
                    {active === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden text-para text-white/60 lg:hidden"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </button>
              </GsapScrollReveal>
            ))}
          </div>

          <div className="sticky top-28 hidden lg:block">
            <div className="relative min-h-[480px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col justify-between p-10"
                >
                  <div>
                    <span className="text-sm font-bold uppercase tracking-widest text-primary">
                      0{active + 1} / 0{pwaConfig.services.items.length}
                    </span>
                    <h3 className="mt-4 text-h3 font-bold text-white">
                      {pwaConfig.services.items[active].title}
                    </h3>
                  </div>
                  <p className="text-para leading-relaxed text-white/70">
                    {pwaConfig.services.items[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-white/5">
                <motion.div
                  className="h-full bg-primary"
                  initial={false}
                  animate={{
                    width: `${((active + 1) / pwaConfig.services.items.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

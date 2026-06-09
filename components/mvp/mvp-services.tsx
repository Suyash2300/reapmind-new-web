"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal } from "@/components/mvp/mvp-motion";

const panelVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, filter: "blur(6px)" }),
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, filter: "blur(6px)" }),
};

export function MvpServices() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const select = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  return (
    <section id="services" className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <MvpReveal variant="blurIn" className="mb-16 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Specialisation</span>
          <h2 className="mt-4 text-display font-bold leading-tight text-white">{mvpConfig.services.title}</h2>
        </MvpReveal>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:col-span-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {mvpConfig.services.items.map((service, i) => (
              <motion.button
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                onClick={() => select(i)}
                whileTap={{ scale: 0.98 }}
                className={`relative min-w-[200px] shrink-0 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors duration-300 lg:min-w-0 lg:px-6 lg:py-5 ${
                  active === i
                    ? "border-primary text-black shadow-lg shadow-primary/25"
                    : "border-white/10 bg-black/40 text-white hover:border-white/25"
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="mvp-service-active"
                    className="absolute inset-0 z-0 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={`relative text-xs font-bold uppercase tracking-widest ${active === i ? "text-black/60" : "text-white/40"}`}>
                  0{i + 1}
                </span>
                <h3 className={`relative mt-1 text-base font-bold lg:text-lg ${active === i ? "text-black" : "text-white"}`}>
                  {service.title}
                </h3>
              </motion.button>
            ))}
          </div>

          <div className="relative min-h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-black lg:col-span-3">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={panelVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mb-6 h-1 w-16 origin-left rounded-full bg-primary"
                />
                <h3 className="text-h3 font-bold text-white">{mvpConfig.services.items[active].title}</h3>
                <p className="mt-6 text-para leading-relaxed text-white/70">
                  {mvpConfig.services.items[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

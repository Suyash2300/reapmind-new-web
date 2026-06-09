"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal } from "@/components/mvp/mvp-motion";

export function MvpProcess() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <MvpReveal variant="scaleIn" className="mx-auto mb-20 max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">{mvpConfig.process.badge}</span>
          <h2 className="mt-4 text-display font-black text-white">{mvpConfig.process.title}</h2>
          <p className="mt-6 text-para leading-relaxed text-white/70">{mvpConfig.process.subtitle}</p>
        </MvpReveal>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="relative lg:col-span-4">
            <motion.div
              className="absolute left-[1.65rem] top-4 hidden w-px origin-top bg-gradient-to-b from-primary via-primary/50 to-transparent lg:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "calc(100% - 2rem)" }}
            />
            <div className="flex flex-row gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {mvpConfig.process.steps.map((step, i) => (
                <motion.button
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.02 }}
                  className={`relative flex min-w-[160px] shrink-0 items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-colors lg:min-w-0 lg:px-5 ${
                    active === i ? "border-primary/50 bg-primary/10" : "border-white/10 bg-white/5"
                  }`}
                >
                  <motion.span
                    animate={active === i ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black ${
                      active === i ? "bg-primary text-black" : "bg-white/10 text-white"
                    }`}
                  >
                    {step.step}
                  </motion.span>
                  <span className={`font-bold ${active === i ? "text-primary" : "text-white"}`}>{step.title}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, rotateX: 8, y: 20 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  exit={{ opacity: 0, rotateX: -8, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformPerspective: 800 }}
                >
                  <motion.span
                    key={`num-${active}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-7xl font-black text-primary/20"
                  >
                    {mvpConfig.process.steps[active].step}
                  </motion.span>
                  <h3 className="mt-2 text-h2 font-bold text-white">{mvpConfig.process.steps[active].title}</h3>
                  <p className="mt-6 text-para leading-relaxed text-white/70">
                    {mvpConfig.process.steps[active].description}
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

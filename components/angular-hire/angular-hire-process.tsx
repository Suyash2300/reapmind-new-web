"use client";

import { motion } from "framer-motion";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHireProcess() {
  const { process } = angularHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{process.title}</h2>
          <p className="mt-6 text-para text-white/65">{process.subtitle}</p>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute bottom-4 left-[1.125rem] top-4 w-0.5 origin-top bg-gradient-to-b from-primary via-cyan-400/60 to-primary/20"
            aria-hidden
          />

          <ol className="space-y-0">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18, duration: 0.55 }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="relative z-10 mt-1 h-9 w-9 shrink-0">
                  <motion.div
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.18 + 0.1, type: "spring", stiffness: 200 }}
                    className="absolute inset-0 rounded-sm border-2 border-primary bg-primary/20"
                    aria-hidden
                  />
                  <span className="relative flex h-full w-full items-center justify-center text-xs font-black text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.18 + 0.15 }}
                  className="flex-1 rounded-2xl border border-white/10 bg-black/50 p-6"
                >
                  <h3 className="text-h5 font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
                </motion.div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

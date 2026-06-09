"use client";

import { motion } from "framer-motion";
import { iosHireConfig } from "@/lib/ios-hire-config";

export function IosHireProcess() {
  const { process } = iosHireConfig;

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
          <div className="absolute left-[1.125rem] top-4 bottom-4 w-px bg-white/10 sm:left-6" />
          <ol className="space-y-8">
            {process.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative flex gap-6 pl-2"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, type: "spring" }}
                  className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-black sm:h-12 sm:w-12"
                >
                  {i + 1}
                </motion.span>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                  <h3 className="text-h5 font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-para text-white/65">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

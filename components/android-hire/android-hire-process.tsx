"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHireProcess() {
  const { process } = androidHireConfig;
  const [active, setActive] = useState(0);
  const progress = ((active + 1) / process.steps.length) * 100;

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

        <div className="mx-auto max-w-4xl">
          <div className="mb-10 hidden h-1 overflow-hidden rounded-full bg-white/10 sm:block">
            <motion.div
              className="h-full bg-primary"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <motion.button
                key={step.title}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(i)}
                className={`rounded-2xl border p-6 text-left transition-colors ${
                  active === i ? "border-primary bg-primary/10" : "border-white/10 bg-black/40"
                }`}
              >
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-black ${
                    active === i ? "bg-primary text-black" : "bg-white/10 text-white"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`mt-4 font-bold ${active === i ? "text-primary" : "text-white"}`}>{step.title}</h3>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 rounded-2xl border border-white/10 bg-black/50 p-8"
          >
            <h3 className="text-h4 font-bold text-white">{process.steps[active].title}</h3>
            <p className="mt-4 text-para text-white/65">{process.steps[active].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

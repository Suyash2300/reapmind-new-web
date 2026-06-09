"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHireHiringModels() {
  const { hiringModels } = angularHireConfig;
  const [index, setIndex] = useState(0);
  const model = hiringModels.models[index];

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{hiringModels.title}</h2>
          <p className="mt-6 text-para text-white/65">{hiringModels.subtitle}</p>
        </motion.div>

        <div className="relative mx-auto flex max-w-4xl flex-col gap-8 md:flex-row">
          <div className="relative flex flex-row gap-2 md:flex-col md:gap-3">
            {hiringModels.models.map((m, i) => (
              <motion.button
                key={m.title}
                type="button"
                onClick={() => setIndex(i)}
                whileTap={{ scale: 0.97 }}
                className={`relative rounded-xl border px-5 py-4 text-left text-sm font-bold transition-colors md:min-w-[180px] ${
                  i === index
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-white/10 bg-white/5 text-white/70"
                }`}
              >
                {i === index && (
                  <motion.span
                    layoutId="angular-hire-tab"
                    className="absolute inset-0 rounded-xl border border-primary/30 bg-primary/5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{m.title}</span>
              </motion.button>
            ))}
          </div>

          <div className="relative min-h-[200px] flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={model.title}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-white/[0.04] to-transparent p-10"
              >
                <h3 className="text-h3 font-bold text-primary">{model.title}</h3>
                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-semibold text-white/55">Hours Per Day</dt>
                    <dd className="mt-2 text-xl font-bold text-white">{model.hoursPerDay}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-white/55">Hours Commitment</dt>
                    <dd className="mt-2 text-xl font-bold text-white">{model.commitment}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-10 font-bold text-white"
          >
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

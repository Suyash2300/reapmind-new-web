"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

export function KotlinHireHiringModels() {
  const { hiringModels } = kotlinHireConfig;
  const [active, setActive] = useState(0);
  const model = hiringModels.models[active];

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

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[220px_1fr]">
          <div className="flex flex-row gap-2 md:flex-col">
            {hiringModels.models.map((m, i) => (
              <motion.button
                key={m.title}
                type="button"
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl px-5 py-4 text-left text-sm font-bold transition-colors ${
                  active === i ? "bg-[#7F52FF] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {m.title}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={model.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-[#7F52FF]/25 bg-gradient-to-br from-[#7F52FF]/10 to-black p-8"
            >
              <h3 className="text-h4 font-bold text-[#7F52FF]">{model.title}</h3>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Per Day</dt>
                  <dd className="mt-2 text-2xl font-bold text-white">{model.hoursPerDay}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Commitment</dt>
                  <dd className="mt-2 text-2xl font-bold text-white">{model.commitment}</dd>
                </div>
              </dl>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#7F52FF] px-10 font-bold text-white"
          >
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

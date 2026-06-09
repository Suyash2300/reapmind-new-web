"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { iosHireConfig } from "@/lib/ios-hire-config";

export function IosHireHiringModels() {
  const { hiringModels } = iosHireConfig;
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

        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2">
            {hiringModels.models.map((m, i) => (
              <button
                key={m.title}
                type="button"
                onClick={() => setActive(i)}
                className={`min-h-[48px] rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                  active === i ? "bg-primary text-black" : "border border-white/20 text-white/70 hover:text-white"
                }`}
              >
                {m.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-10 text-center"
            >
              <h3 className="text-h3 font-bold text-primary">{model.title}</h3>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-semibold text-white/55">Hours Per Day</dt>
                  <dd className="mt-2 text-lg font-bold text-white">{model.hoursPerDay}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-white/55">Hours Commitment</dt>
                  <dd className="mt-2 text-lg font-bold text-white">{model.commitment}</dd>
                </div>
              </dl>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact-us"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-10 font-bold text-black"
            >
              {hiringModels.finalizeCta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

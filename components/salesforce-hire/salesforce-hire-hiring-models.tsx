"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

export function SalesforceHireHiringModels() {
  const { hiringModels } = salesforceHireConfig;
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

        <div className="mx-auto max-w-2xl">
          <div className="relative flex rounded-full border border-white/10 bg-white/5 p-1">
            {hiringModels.models.map((m, i) => (
              <button
                key={m.title}
                type="button"
                onClick={() => setActive(i)}
                className={`relative z-10 flex-1 rounded-full px-4 py-3 text-sm font-bold transition-colors sm:text-base ${
                  active === i ? "text-black" : "text-white/70"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="sf-hire-tab"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{m.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 24, rotateX: -12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -16, rotateX: 12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 800 }}
              className="mt-8 rounded-3xl border border-[#00A1E0]/25 bg-gradient-to-br from-[#00A1E0]/10 to-transparent p-10"
            >
              <h3 className="text-h3 font-bold text-[#00A1E0]">{model.title}</h3>
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

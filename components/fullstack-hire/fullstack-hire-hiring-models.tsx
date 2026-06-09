"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";

export function FullstackHireHiringModels() {
  const { hiringModels } = fullstackHireConfig;
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
          <div className="relative flex gap-2 border-b border-white/10 pb-1">
            {hiringModels.models.map((m, i) => (
              <button
                key={m.title}
                type="button"
                onClick={() => setActive(i)}
                className={`relative flex-1 px-4 py-3 text-sm font-bold transition-colors ${
                  active === i ? "text-[#818CF8]" : "text-white/50 hover:text-white/80"
                }`}
              >
                {m.title}
                {active === i && (
                  <motion.span
                    layoutId="fullstack-hire-tab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366F1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={model.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8 rounded-3xl border border-[#6366F1]/25 bg-gradient-to-br from-[#6366F1]/10 to-black p-8"
          >
            <h3 className="text-h4 font-bold text-[#818CF8]">{model.title}</h3>
            <dl className="mt-8 grid gap-6 sm:grid-cols-2">
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#6366F1] px-10 font-bold text-white"
          >
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

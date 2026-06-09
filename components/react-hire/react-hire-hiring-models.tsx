"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

export function ReactHireHiringModels() {
  const { hiringModels } = reactHireConfig;
  const [expanded, setExpanded] = useState<number | null>(0);

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

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {hiringModels.models.map((model, i) => {
            const isOpen = expanded === i;
            return (
              <motion.button
                key={model.title}
                type="button"
                layout
                onClick={() => setExpanded(isOpen ? null : i)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl border p-6 text-left transition-colors ${
                  isOpen
                    ? "border-[#61DAFB]/50 bg-[#61DAFB]/10 md:col-span-1"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-h5 font-bold text-white">{model.title}</h3>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-xl text-[#61DAFB]">
                    +
                  </motion.span>
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.dl
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 24 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Per Day</dt>
                          <dd className="mt-1 text-lg font-bold text-[#61DAFB]">{model.hoursPerDay}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Commitment</dt>
                          <dd className="mt-1 text-lg font-bold text-white">{model.commitment}</dd>
                        </div>
                      </div>
                    </motion.dl>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
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

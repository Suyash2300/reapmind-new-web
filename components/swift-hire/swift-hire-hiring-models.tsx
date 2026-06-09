"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { swiftHireConfig } from "@/lib/swift-hire-config";

export function SwiftHireHiringModels() {
  const { hiringModels } = swiftHireConfig;
  const [open, setOpen] = useState(0);

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

        <div className="mx-auto max-w-2xl space-y-3">
          {hiringModels.models.map((model, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={model.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`overflow-hidden rounded-2xl border ${isOpen ? "border-[#F05138]/40 bg-[#F05138]/5" : "border-white/10 bg-white/[0.03]"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <h3 className={`text-h5 font-bold ${isOpen ? "text-[#F05138]" : "text-white"}`}>{model.title}</h3>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-2xl text-[#F05138]">
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 26 }}
                      className="overflow-hidden"
                    >
                      <dl className="grid gap-4 border-t border-white/10 px-6 pb-6 pt-4 sm:grid-cols-2">
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Per Day</dt>
                          <dd className="mt-1 font-bold text-white">{model.hoursPerDay}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Commitment</dt>
                          <dd className="mt-1 font-bold text-white">{model.commitment}</dd>
                        </div>
                      </dl>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#F05138] px-10 font-bold text-white"
          >
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

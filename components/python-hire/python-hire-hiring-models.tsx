"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pythonHireConfig } from "@/lib/python-hire-config";

export function PythonHireHiringModels() {
  const { hiringModels } = pythonHireConfig;
  const [open, setOpen] = useState(0);

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{hiringModels.title}</h2>
          <p className="mt-6 text-para text-white/65">{hiringModels.subtitle}</p>
        </motion.div>

        <div className="mx-auto max-w-lg space-y-3">
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
                className={`overflow-hidden rounded-2xl border ${
                  isOpen ? "border-[#3776AB]/50 bg-[#3776AB]/10" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-white">{model.title}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-2xl text-[#FFD43B]" aria-hidden>
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 24 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 border-t border-white/10 px-6 pt-4 pb-6 text-sm text-white/65">
                        <p>
                          <span className="text-white/40">Hours Per Day </span>
                          {model.hoursPerDay}
                        </p>
                        <p>
                          <span className="text-white/40">Hours Commitment </span>
                          {model.commitment}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[52px] items-center rounded-full bg-[#3776AB] px-8 font-bold text-white"
          >
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

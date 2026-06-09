"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

export function FlutterHireFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, rotate: -3 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-4 text-h2 font-black text-white md:text-display">FAQs</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {flutterHireConfig.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 120, damping: 14 }}
                className={`overflow-hidden rounded-2xl border ${
                  isOpen ? "border-primary/30 bg-black" : "border-white/10 bg-black/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <span className={`font-bold ${isOpen ? "text-primary" : "text-white"}`}>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.1 : 1 }}
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 0 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/5 px-6 pt-4 pb-6 text-para text-white/60">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

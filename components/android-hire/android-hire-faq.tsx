"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHireFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <div className="grid gap-14 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="mt-4 text-h2 font-black text-white md:text-display">FAQ</h2>
          </motion.div>

          <div className="space-y-3 lg:col-span-8">
            {androidHireConfig.faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
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
                    <motion.span animate={{ rotate: isOpen ? 135 : 0 }} className="text-xl text-primary">
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 28 }}
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
      </div>
    </section>
  );
}

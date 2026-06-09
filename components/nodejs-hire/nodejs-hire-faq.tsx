"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

export function NodejsHireFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, rotateX: -15 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
          style={{ perspective: 800 }}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#339933]">FAQs</span>
          <h2 className="mt-4 text-h2 font-black text-white md:text-display">FAQ</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {nodejsHireConfig.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border ${
                  isOpen ? "border-[#339933]/40 bg-black" : "border-white/10 bg-black/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <span className={`font-bold ${isOpen ? "text-[#339933]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#339933]/50 text-lg leading-none text-[#339933]"
                    aria-hidden
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, x: -16 }}
                      animate={{ height: "auto", opacity: 1, x: 0 }}
                      exit={{ height: 0, opacity: 0, x: -16 }}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/5 px-6 pt-4 pb-6">
                        <p className="text-para leading-relaxed text-white/60">{faq.answer}</p>
                      </div>
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

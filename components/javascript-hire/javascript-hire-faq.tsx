"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

type FaqItem = (typeof javascriptHireConfig.faqs)[number];

function FaqAnswer({ faq }: { faq: FaqItem }) {
  if ("answer" in faq && faq.answer) {
    return <p className="text-para text-white/60">{faq.answer}</p>;
  }
  return null;
}

export function JavascriptHireFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#F7DF1E]">FAQ</span>
          <h2 className="mt-4 text-h2 font-black text-white md:text-display">FAQ</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-black/40">
          {javascriptHireConfig.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <span className={`font-bold ${isOpen ? "text-[#F7DF1E]" : "text-white"}`}>{faq.question}</span>
                  <motion.span
                    animate={{ scale: isOpen ? 1.2 : 1, rotate: isOpen ? 180 : 0 }}
                    className="mt-1 shrink-0 text-[#F7DF1E]"
                    aria-hidden
                  >
                    ▾
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 150, damping: 22 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <FaqAnswer faq={faq} />
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

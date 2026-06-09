"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal } from "@/components/mvp/mvp-motion";

export function MvpFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <div className="grid gap-16 lg:grid-cols-12">
          <MvpReveal variant="blurIn" className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="mt-4 text-h2 font-black text-white md:text-display">Frequently Asked Questions</h2>
          </MvpReveal>

          <div className="space-y-3 lg:col-span-8">
            {mvpConfig.faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
                  layout
                  className={`rounded-2xl border transition-colors ${
                    isOpen ? "border-primary/30 bg-black" : "border-white/10 bg-black/40"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 p-6 text-left"
                  >
                    <span className={`font-bold ${isOpen ? "text-primary" : "text-white"}`}>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`mt-1 shrink-0 text-xl ${isOpen ? "text-primary" : "text-white/40"}`}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: -8 }}
                          animate={{ y: 0 }}
                          className="border-t border-white/5 px-6 pt-4 pb-6 text-para leading-relaxed text-white/60"
                        >
                          {faq.answer}
                        </motion.p>
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

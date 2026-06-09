"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-app relative overflow-hidden border-t border-white/5 bg-surface-dark py-32">
      <div className="absolute top-0 left-1/2 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 to-transparent" />

      <div className="container-app">
        <GsapScrollReveal className="mx-auto mb-20 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="text-display font-black leading-tight text-white">
            Frequently Asked Questions
          </h2>
        </GsapScrollReveal>

        <div className="mx-auto max-w-4xl space-y-4">
          {pwaConfig.faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <GsapScrollReveal key={i} start="top 90%" delay={i * 0.03}>
                <div
                  className={`group overflow-hidden rounded-2xl border transition-colors duration-500 ${
                    isOpen
                      ? "border-primary/30 bg-white/5"
                      : "border-white/10 bg-transparent hover:bg-white/5"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                  >
                    <span
                      className={`text-lg font-bold transition-colors ${
                        isOpen ? "text-primary" : "text-white group-hover:text-primary/80"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-primary bg-primary/10"
                          : "border-white/20"
                      }`}
                    >
                      <svg
                        className={`h-5 w-5 ${isOpen ? "text-primary" : "text-white"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="border-t border-white/5 px-6 pt-4 pb-6 text-para leading-relaxed text-white/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </GsapScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

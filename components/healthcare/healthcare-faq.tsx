"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { healthcareConfig } from "@/lib/healthcare-config";

export function HealthcareFaq() {
  const faqs = healthcareConfig.faqs || [];
  const [open, setOpen] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <section className="bg-surface-dark py-14 md:py-24" aria-labelledby="healthcare-faq-heading">
      <div className="container-app">
        <FadeIn>
          <h2 id="healthcare-faq-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            Everything you need to know about our healthcare app development services.
          </p>
        </FadeIn>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.1 }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen ? "border-primary/50 bg-primary/5" : "border-border-strong bg-surface-elevated/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold ${isOpen ? "text-primary-foreground" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface-dark text-white/70 transition-colors group-hover:text-white"
                    aria-hidden
                  >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 1.5L6 6L10.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-6 text-sm leading-relaxed text-white/70 sm:px-6">
                        {faq.answer}
                      </p>
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

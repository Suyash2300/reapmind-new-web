"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyFaq() {
  const { faqs } = topPythonConfig;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tpy-faq-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tpy-faq-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          FAQs
        </BlurFadeIn>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-2xl border backdrop-blur-md ${
                  isOpen ? "border-[#3776AB]/50 bg-[#3776AB]/10" : "border-white/10 bg-white/5"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold ${isOpen ? "text-[#FFD43B]" : "text-white"}`}>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#3776AB]/40 text-[#3776AB]"
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
                      transition={{ duration: 0.35 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/65 sm:px-6 sm:pb-6">{faq.answer}</p>
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

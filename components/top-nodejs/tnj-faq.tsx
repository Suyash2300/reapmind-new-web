"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjFaq() {
  const { faqs } = topNodejsConfig;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#050a06] py-14 md:py-20" aria-labelledby="tnj-faq-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tnj-faq-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          FAQs
        </BlurFadeIn>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, rotateX: -8 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`overflow-hidden rounded-2xl border backdrop-blur-md ${
                  isOpen ? "border-[#339933]/40 bg-[#339933]/5" : "border-white/10 bg-white/5"
                }`}
                style={{ perspective: 800 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold ${isOpen ? "text-[#339933]" : "text-white"}`}>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#339933]/40 text-[#339933]"
                    aria-hidden
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

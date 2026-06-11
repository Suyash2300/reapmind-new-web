"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmFaq() {
  const { faqs } = topReactNativeMumbaiConfig;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0b0f14] py-14 md:py-20" aria-labelledby="trnm-faq-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="trnm-faq-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          FAQs
        </BlurFadeIn>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 120 }}
                className={`overflow-hidden rounded-2xl border backdrop-blur-md ${isOpen ? "border-[#61DAFB]/50 bg-[#61DAFB]/10" : "border-white/10 bg-white/5"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold ${isOpen ? "text-[#61DAFB]" : "text-white"}`}>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0, scale: isOpen ? 1.1 : 1 }}
                    className="text-xl text-[#61DAFB]"
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
                      transition={{ type: "spring", stiffness: 200, damping: 24 }}
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

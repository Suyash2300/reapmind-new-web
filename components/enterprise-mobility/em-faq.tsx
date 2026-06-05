"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-app bg-black py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2" />
      
      <div className="container-app">
        <GsapScrollReveal className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">FAQ</span>
          <h2 className="text-display font-black text-white leading-tight">
            Frequently Asked Questions
          </h2>
        </GsapScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {enterpriseMobilityConfig.faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <GsapScrollReveal key={i} start={`top ${90}%`} delay={i * 0.05}>
                <div 
                  className={`group border border-white/10 rounded-2xl overflow-hidden transition-colors duration-500 ${
                    isOpen ? "bg-white/5 border-primary/30" : "bg-transparent hover:bg-white/5"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between gap-6"
                  >
                    <span className={`font-bold text-lg transition-colors ${isOpen ? "text-primary" : "text-white group-hover:text-primary/80"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-primary bg-primary/10 rotate-180" : "border-white/20"}`}>
                      <svg className={`w-5 h-5 transition-colors ${isOpen ? "text-primary" : "text-white"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <div className="px-6 pb-6 pt-0 text-para text-white/60 leading-relaxed border-t border-white/5 mt-2 pt-4">
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

"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

const ease = [0.22, 1, 0.36, 1] as const;

export function HealthcareFaq() {
  const faqs = healthcareConfig.faqs || [];
  const [open, setOpen] = useState<number | null>(0);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  if (!faqs.length) return null;

  return (
    <section className="bg-surface-dark py-14 md:py-24 overflow-hidden" aria-labelledby="healthcare-faq-heading">
      <div className="container-app relative">
        <div ref={headingRef} className="mx-auto max-w-3xl text-center relative z-10">
          <motion.h2
            id="healthcare-faq-heading"
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={headingInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            className="text-h3 font-bold text-white sm:text-h2"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mx-auto mt-4 max-w-2xl text-center text-white/70"
          >
            Everything you need to know about our healthcare app development services.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-4 relative z-10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return <FaqItem key={faq.question} faq={faq} isOpen={isOpen} index={i} onClick={() => setOpen(isOpen ? null : i)} />;
          })}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq, isOpen, index, onClick }: { faq: any, isOpen: boolean, index: number, onClick: () => void }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease }}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-500 group ${
        isOpen ? "border-transparent bg-primary/5 shadow-[0_0_30px_rgba(var(--primary),0.1)]" : "border-border-strong bg-surface-elevated/50 hover:border-white/20"
      }`}
    >
      {/* Animated gradient border for active state */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-primary pointer-events-none"
        initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
        animate={isOpen ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : { clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
        transition={{ duration: 0.6, ease }}
      />

      <button
        type="button"
        onClick={onClick}
        className="relative flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6 z-10"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? "text-primary-foreground" : "text-white group-hover:text-primary/90"}`}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? "rgba(var(--primary), 1)" : "rgba(255,255,255,0.05)" }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong group-hover:border-primary/50 text-white/70 group-hover:text-white transition-colors"
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 1.5L6 6L10.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.4, ease }}
          >
            <p className="px-5 pb-6 text-base leading-relaxed text-white/70 sm:px-6 relative z-10 max-w-2xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

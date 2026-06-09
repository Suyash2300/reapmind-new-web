"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";

type FaqItem = {
  question: string;
  answer: string;
};

type ServiceFaqSectionProps = {
  title?: string;
  faqs: FaqItem[];
};

export function ServiceFaqSection({
  title = "Frequently Asked Questions",
  faqs,
}: ServiceFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-app border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="service-faq-heading"
    >
      <div className="container-app">
        <FadeIn className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 id="service-faq-heading" className="text-h2 font-black leading-tight text-white sm:text-display">
            {title}
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeIn key={faq.question} delay={0.04 * i}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-primary/30 bg-white/5"
                      : "border-white/10 bg-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <HydrationButton
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  >
                    <span
                      className={`text-base font-bold sm:text-lg ${
                        isOpen ? "text-primary" : "text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform ${
                        isOpen
                          ? "rotate-180 border-primary bg-primary/10"
                          : "border-white/20"
                      }`}
                      aria-hidden
                    >
                      <svg
                        className={`h-4 w-4 ${isOpen ? "text-primary" : "text-white"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </HydrationButton>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <p className="border-t border-white/10 px-5 pb-5 pt-4 text-para leading-relaxed text-white/65 sm:px-6 sm:pb-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

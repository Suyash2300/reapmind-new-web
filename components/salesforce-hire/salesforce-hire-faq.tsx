"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

type FaqItem = (typeof salesforceHireConfig.faqs)[number];

function FaqAnswer({ faq }: { faq: FaqItem }) {
  if ("answer" in faq && faq.answer) {
    return <p className="text-para text-white/60">{faq.answer}</p>;
  }

  return (
    <div className="space-y-4 text-para text-white/60">
      {"intro" in faq && faq.intro ? <p>{faq.intro}</p> : null}
      {"bullets" in faq && faq.bullets ? (
        <ul className="list-disc space-y-2 pl-5">
          {faq.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
      {"sections" in faq && faq.sections
        ? faq.sections.map((section) => (
            <div key={section.title}>
              <p className="font-semibold text-white/80">{section.title}:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))
        : null}
    </div>
  );
}

export function SalesforceHireFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#00A1E0]">FAQ</span>
          <h2 className="mt-4 text-h2 font-black text-white md:text-display">FAQ</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-0 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/40">
          {salesforceHireConfig.faqs.map((faq, i) => {
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
                  className="flex w-full items-start gap-4 p-6 text-left"
                >
                  <motion.span
                    animate={{
                      backgroundColor: isOpen ? "rgba(0,161,224,0.25)" : "rgba(255,255,255,0.06)",
                      color: isOpen ? "#00A1E0" : "rgba(255,255,255,0.5)",
                    }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-black"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <span className={`flex-1 font-bold ${isOpen ? "text-[#00A1E0]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    className="mt-1 text-lg text-[#00A1E0]"
                    aria-hidden
                  >
                    ›
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                      animate={{ height: "auto", opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                      exit={{ height: 0, opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/5 px-6 pt-2 pb-6 pl-[4.5rem]">
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

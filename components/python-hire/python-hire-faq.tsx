"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pythonHireConfig } from "@/lib/python-hire-config";

type FaqItem = (typeof pythonHireConfig.faqs)[number];

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
    </div>
  );
}

export function PythonHireFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#3776AB]">FAQ</span>
          <h2 className="mt-4 text-h2 font-black text-white md:text-display">FAQ</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {pythonHireConfig.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={faq.question}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/40"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <span className={`font-bold ${isOpen ? "text-[#3776AB]" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    className="mt-0.5 shrink-0 text-xl font-light text-[#FFD43B]"
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
                      transition={{ type: "spring", stiffness: 160, damping: 22 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/5 px-6 pt-4 pb-6">
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

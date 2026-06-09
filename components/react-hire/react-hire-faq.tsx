"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

type FaqItem = (typeof reactHireConfig.faqs)[number];

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

export function ReactHireFaq() {
  const [active, setActive] = useState(0);
  const faq = reactHireConfig.faqs[active];

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#61DAFB]">FAQ</span>
          <h2 className="mt-4 text-h2 font-black text-white md:text-display">FAQ</h2>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <ul className="space-y-2">
            {reactHireConfig.faqs.map((item, i) => (
              <motion.li key={item.question}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`w-full rounded-xl px-5 py-4 text-left text-sm font-semibold transition-colors sm:text-base ${
                    active === i
                      ? "bg-[#61DAFB] text-black"
                      : "bg-black/40 text-white/70 hover:bg-black/60"
                  }`}
                >
                  {item.question}
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="relative min-h-[280px] rounded-3xl border border-white/10 bg-black p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, x: 30, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="text-h5 font-bold text-white">{faq.question}</h3>
                <div className="mt-6">
                  <FaqAnswer faq={faq} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

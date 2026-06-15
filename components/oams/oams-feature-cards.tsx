"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsFeatureCards() {
  const reduced = usePrefersReducedMotion();
  const [open, setOpen] = useState(0);

  return (
    <section className="section-app bg-surface-dark py-16 sm:py-20">
      <div className="container-app">
        <div className="mx-auto grid max-w-6xl gap-3 lg:grid-cols-2">
          {oamsConfig.featureItems.map((item, index) => {
            const isOpen = open === index;
            return (
              <motion.article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/50"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full min-h-[52px] items-center justify-between gap-3 px-4 py-3 text-left sm:px-5"
                >
                  <span className="text-base font-bold text-white sm:text-lg">{item.title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="text-xl text-emerald-400"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden border-t border-white/10 px-4 pb-4 pt-2 sm:px-5"
                    >
                      {item.points.map((point, pi) => (
                        <li key={pi} className="mt-2 flex gap-2 text-sm text-white/70 sm:text-base">
                          <span className="text-emerald-400">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

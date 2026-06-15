"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { oltConfig } from "@/lib/olt-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const roleIcons = ["🩺", "👤", "🔬"];

export function OltInterfaces() {
  const reduced = usePrefersReducedMotion();
  const [open, setOpen] = useState(0);

  return (
    <section className="section-app bg-gradient-to-b from-[#0a0f1a] to-black py-16 sm:py-20">
      <div className="container-app">
        <motion.h3
          className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {oltConfig.features.envisionedTitle}
        </motion.h3>

        <div className="relative mx-auto mt-10 max-w-3xl">
          {!reduced && (
            <motion.div
              className="absolute left-6 top-0 w-0.5 origin-top bg-gradient-to-b from-cyan-500 via-amber-500 to-cyan-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ height: "calc(100% - 2rem)" }}
            />
          )}

          <div className="space-y-4">
            {oltConfig.interfaces.map((iface, index) => {
              const isOpen = open === index;
              return (
                <motion.article
                  key={iface.title}
                  className="relative ml-0 overflow-hidden rounded-2xl border border-white/10 bg-black/60 pl-0 sm:ml-4 sm:pl-8"
                  initial={reduced ? false : { opacity: 0, x: -20 }}
                  whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full min-h-[56px] items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-lg">
                        {roleIcons[index]}
                      </span>
                      <span className="text-lg font-bold text-white">{iface.title}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-cyan-400"
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={reduced ? undefined : { height: "auto", opacity: 1 }}
                        exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden border-t border-white/8 px-5 pb-5"
                      >
                        {iface.items.map((item, pi) => (
                          <motion.li
                            key={item.label}
                            className="mt-4 border-l-2 border-amber-500/50 pl-4"
                            initial={reduced ? false : { opacity: 0, x: -12 }}
                            animate={reduced ? undefined : { opacity: 1, x: 0 }}
                            transition={{ delay: pi * 0.06 }}
                          >
                            <p className="text-sm font-semibold text-cyan-300">{item.label}</p>
                            <p className="mt-1 text-sm leading-relaxed text-white/70">{item.description}</p>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

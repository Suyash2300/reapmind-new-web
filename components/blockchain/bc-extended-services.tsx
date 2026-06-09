"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { blockchainConfig } from "@/lib/blockchain-config";

export function BcExtendedServices() {
  const { extendedServices } = blockchainConfig;
  const [activeId, setActiveId] = useState(extendedServices.items[0].id);
  const active =
    extendedServices.items.find((item) => item.id === activeId) ??
    extendedServices.items[0];

  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="text-h3 font-bold text-white sm:text-h2">{extendedServices.title}</h2>
        </FadeIn>

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-6">
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {extendedServices.items.map((item) => {
              const selected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={selected}
                  className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    selected
                      ? "border-primary/50 bg-primary/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/25"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-6 sm:p-7"
            >
              <h3 className="text-h4 font-bold text-white">{active.title}</h3>
              <p className="mt-4 text-para leading-relaxed text-white/65">{active.description}</p>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OmdCustomer() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section className="section-app bg-surface-dark py-20 sm:py-24">
      <div className="container-app">
        <h2 className="text-h2 font-black text-white md:text-display">{omdConfig.customer.title}</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-4">
            {omdConfig.customer.tabs.map((tab, index) => {
              const isActive = active === index;
              return (
                <button
                  key={tab.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`w-full rounded-2xl border px-5 py-4 text-left transition-all ${
                    isActive
                      ? "border-[#0D9488]/70 bg-[#0D9488]/15 text-white"
                      : "border-white/10 bg-black/40 text-white/80 hover:border-white/20"
                  }`}
                >
                  <span className="text-base font-semibold">{tab.title}</span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 sm:p-8 lg:col-span-8">
            {!reduced && (
              <motion.div
                key={active}
                className="pointer-events-none absolute -inset-24 rounded-full"
                animate={{ x: [0, 30, 0], y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  background: "radial-gradient(circle, rgba(13,148,136,0.25) 0%, rgba(13,148,136,0) 60%)",
                }}
              />
            )}

            <AnimatePresence mode="wait">
              <motion.article
                key={omdConfig.customer.tabs[active].title}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.32 }}
                className="relative"
              >
                <h3 className="text-h3 font-bold text-white">{omdConfig.customer.tabs[active].title}</h3>
                <p className="mt-4 text-para leading-relaxed text-white/75">
                  {omdConfig.customer.tabs[active].description}
                </p>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

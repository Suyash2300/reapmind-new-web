"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsTestimonials() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = oamsConfig.testimonials.items;
  const item = items[active];

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <h2 className="text-h2 font-black text-white md:text-display">{oamsConfig.testimonials.title}</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="flex flex-wrap gap-2 lg:col-span-4 lg:flex-col">
            {items.map((t, index) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setActive(index)}
                className={`flex min-h-[48px] items-center gap-3 rounded-2xl border px-4 py-2 text-left transition-all ${
                  active === index
                    ? "border-emerald-500/60 bg-emerald-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" />
                </div>
                <span className="text-sm font-semibold text-white">{t.name}</span>
              </button>
            ))}
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-3xl border border-white/10 bg-surface-elevated p-6 sm:p-8 lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.name}
                initial={reduced ? false : { opacity: 0, x: 40 }}
                animate={reduced ? undefined : { opacity: 1, x: 0 }}
                exit={reduced ? undefined : { opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{item.role}</p>
                <p className="mt-4 text-para leading-relaxed text-white/80">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-6 font-bold text-white">— {item.name}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

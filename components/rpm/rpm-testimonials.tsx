"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rpmConfig } from "@/lib/rpm-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RpmTestimonials() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const items = rpmConfig.testimonials.items;

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <h2 className="text-center text-h2 font-black text-white md:text-display">
          {rpmConfig.testimonials.title}
        </h2>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="mb-6 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all ${
                  active === index ? "w-8 bg-cyan-500" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-950/30 to-black p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[active].name}
                initial={reduced ? false : { opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={reduced ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={reduced ? undefined : { opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full border-2 border-cyan-500/40">
                  <Image src={items[active].image} alt={items[active].name} fill className="object-cover" sizes="64px" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber-400">
                  {items[active].role}
                </p>
                <p className="mt-5 text-para leading-relaxed text-white/80">&ldquo;{items[active].quote}&rdquo;</p>
                <p className="mt-6 font-bold text-white">— {items[active].name}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

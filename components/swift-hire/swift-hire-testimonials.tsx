"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { swiftHireConfig } from "@/lib/swift-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function SwiftHireTestimonials() {
  const { testimonials } = swiftHireConfig;
  const [active, setActive] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const t = testimonials.items[active];

  if (reducedMotion) {
    return (
      <section className="section-app bg-surface-dark py-32">
        <div className="container-app">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
            <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.items.map((item) => (
              <blockquote key={item.name} className="rounded-2xl border border-white/10 bg-black p-6">
                <p className="text-sm italic text-white/70">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-bold text-white">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
          <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex justify-center gap-2 overflow-x-auto pb-2">
            {testimonials.items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(i)}
                className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 transition-colors ${
                  active === i ? "border-[#F05138]" : "border-white/20"
                }`}
                aria-label={item.name}
              >
                <Image src={item.image} alt="" fill className="object-cover" sizes="48px" unoptimized />
              </button>
            ))}
          </div>

          <div className="relative min-h-[320px]" style={{ perspective: 1000 }}>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, rotateY: -25, x: 40 }}
                animate={{ opacity: 1, rotateY: 0, x: 0 }}
                exit={{ opacity: 0, rotateY: 25, x: -40 }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-white/10 bg-black p-8 md:p-10"
              >
                <p className="text-base italic leading-relaxed text-white/75 md:text-lg">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#F05138]/30">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" unoptimized />
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-white">{t.name}</cite>
                    <p className="text-sm text-white/50">{t.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

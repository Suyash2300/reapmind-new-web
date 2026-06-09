"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHireTestimonials() {
  const { testimonials } = androidHireConfig;
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % testimonials.items.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.items.length) % testimonials.items.length);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
          <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
        </motion.div>

        <div className="relative mx-auto max-w-2xl">
          <div className="relative h-[400px] sm:h-[360px]">
            {testimonials.items.map((t, i) => {
              const pos = (i - active + testimonials.items.length) % testimonials.items.length;
              if (pos > 2) return null;
              return (
                <motion.blockquote
                  key={t.name}
                  animate={{
                    scale: 1 - pos * 0.04,
                    y: pos * 16,
                    x: pos * 10,
                    rotate: pos * 1.5,
                    zIndex: 10 - pos,
                    opacity: pos === 0 ? 1 : 0.5 - pos * 0.12,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className="absolute inset-x-0 top-0 rounded-2xl border border-white/10 bg-black p-8 shadow-2xl sm:p-10"
                >
                  <p className="text-para italic leading-relaxed text-white/70">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/30">
                      <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <cite className="not-italic font-bold text-white">{t.name}</cite>
                      <p className="text-xs text-white/50">{t.role}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              );
            })}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <button type="button" onClick={prev} aria-label="Previous" className="h-12 w-12 rounded-full border border-white/20">
              ←
            </button>
            <button type="button" onClick={next} aria-label="Next" className="h-12 w-12 rounded-full border border-white/20">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

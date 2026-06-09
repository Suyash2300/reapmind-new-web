"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function JavascriptHireTestimonials() {
  const { testimonials } = javascriptHireConfig;
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.items.length), 5500);
    return () => clearInterval(id);
  }, [reduced, testimonials.items.length]);

  const t = testimonials.items[index];

  if (reduced) {
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

        <div className="relative mx-auto min-h-[320px] max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(12px)" }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl border border-white/10 bg-black p-8"
            >
              <p className="text-sm italic leading-relaxed text-white/75 md:text-base">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#F7DF1E]/30">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" unoptimized />
                </div>
                <div>
                  <cite className="not-italic text-sm font-bold text-white">{t.name}</cite>
                  <p className="text-[11px] text-white/50">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[#F7DF1E]" : "w-2 bg-white/20"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

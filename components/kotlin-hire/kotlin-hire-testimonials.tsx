"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function KotlinHireTestimonials() {
  const { testimonials } = kotlinHireConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.items.length);
    }, 6000);
    return () => clearInterval(id);
  }, [reducedMotion, testimonials.items.length]);

  if (reducedMotion) {
    return (
      <section className="section-app bg-surface-dark py-32">
        <div className="container-app">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
            <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.items.map((t) => (
              <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-black p-6">
                <p className="text-sm italic text-white/70">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-bold text-white">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const stack = testimonials.items.map((t, i) => ({
    ...t,
    offset: (i - index + testimonials.items.length) % testimonials.items.length,
  }));

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

        <div className="relative mx-auto h-[420px] max-w-2xl">
          {stack
            .filter((t) => t.offset < 3)
            .map((t) => (
              <motion.blockquote
                key={`${t.name}-${index}`}
                animate={{
                  y: t.offset * 16,
                  scale: 1 - t.offset * 0.04,
                  opacity: 1 - t.offset * 0.25,
                  zIndex: 10 - t.offset,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 24 }}
                className="absolute inset-x-0 top-0 rounded-3xl border border-white/10 bg-black p-8 shadow-xl"
                style={{ zIndex: 10 - t.offset }}
              >
                <p className="text-sm italic leading-relaxed text-white/75 md:text-base">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#7F52FF]/30">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" unoptimized />
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-bold text-white">{t.name}</cite>
                    <p className="text-[11px] text-white/50">{t.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[#7F52FF]" : "w-2 bg-white/20"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

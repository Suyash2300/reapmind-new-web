"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function NodejsHireTestimonials() {
  const { testimonials } = nodejsHireConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.items.length);
    }, 7000);
    return () => clearInterval(id);
  }, [reducedMotion, testimonials.items.length]);

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

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

  const current = testimonials.items[index];

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
          <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
        </motion.div>

        <div ref={dragRef} className="relative mx-auto max-w-2xl overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={current.name}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 120 : -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -120 : 120 }}
              transition={{ type: "spring", stiffness: 200, damping: 26 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) {
                  setDirection(1);
                  setIndex((i) => (i + 1) % testimonials.items.length);
                } else if (info.offset.x > 80) {
                  setDirection(-1);
                  setIndex((i) => (i - 1 + testimonials.items.length) % testimonials.items.length);
                }
              }}
              className="cursor-grab rounded-3xl border border-white/10 bg-black p-8 shadow-xl active:cursor-grabbing"
            >
              <p className="text-sm italic leading-relaxed text-white/75 md:text-base">&ldquo;{current.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#339933]/30">
                  <Image src={current.image} alt={current.name} fill className="object-cover" sizes="40px" unoptimized />
                </div>
                <div>
                  <cite className="not-italic text-sm font-bold text-white">{current.name}</cite>
                  <p className="text-[11px] text-white/50">{current.role}</p>
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
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[#339933]" : "w-2 bg-white/20"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

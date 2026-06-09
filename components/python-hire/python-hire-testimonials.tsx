"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { pythonHireConfig } from "@/lib/python-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function PythonHireTestimonials() {
  const { testimonials } = pythonHireConfig;
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const dragRef = useRef(0);

  if (reduced) {
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

        <div className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -((testimonials.items.length - 1) * 340), right: 0 }}
            dragElastic={0.08}
            onDragEnd={(_, info) => {
              const delta = info.offset.x - dragRef.current;
              if (delta < -80 && index < testimonials.items.length - 1) setIndex((i) => i + 1);
              else if (delta > 80 && index > 0) setIndex((i) => i - 1);
              dragRef.current = 0;
            }}
            animate={{ x: -index * 340 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {testimonials.items.map((t) => (
              <blockquote
                key={t.name}
                className="w-[min(85vw,320px)] shrink-0 rounded-3xl border border-white/10 bg-black p-8"
              >
                <p className="text-sm italic leading-relaxed text-white/75">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#3776AB]/30">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" unoptimized />
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-bold text-white">{t.name}</cite>
                    <p className="text-[11px] text-white/50">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[#3776AB]" : "w-2 bg-white/20"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

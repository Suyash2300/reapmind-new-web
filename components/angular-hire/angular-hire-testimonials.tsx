"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { angularHireConfig } from "@/lib/angular-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function AngularHireTestimonials() {
  const { testimonials } = angularHireConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const total = testimonials.items.length;

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setActive((a) => (a + 1) % total), 6000);
    return () => clearInterval(id);
  }, [reducedMotion, total]);

  const t = testimonials.items[active];

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

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex justify-center gap-2">
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className="h-2 rounded-full transition-all"
                style={{
                  width: active === i ? 32 : 8,
                  backgroundColor: active === i ? "#1a69fd" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-black p-8 md:p-12"
            >
              <p className="text-para italic leading-relaxed text-white/70">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/30">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" unoptimized />
                </div>
                <div>
                  <cite className="not-italic font-bold text-white">{t.name}</cite>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

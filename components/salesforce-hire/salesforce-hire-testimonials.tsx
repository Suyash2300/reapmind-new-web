"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function SalesforceHireTestimonials() {
  const { testimonials } = salesforceHireConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.items.length);
    }, 5500);
    return () => clearInterval(id);
  }, [reducedMotion, testimonials.items.length]);

  const t = testimonials.items[active];

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
          <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-surface-dark to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-surface-dark to-transparent" />

          <div className="min-h-[300px] py-4">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 80, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -80, filter: "blur(6px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/10 bg-black p-8 sm:p-10"
              >
                <p className="text-para italic leading-relaxed text-white/70">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="relative h-12 w-12 overflow-hidden rounded-full border border-[#00A1E0]/30"
                  >
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" unoptimized />
                  </motion.div>
                  <div>
                    <cite className="not-italic font-bold text-white">{t.name}</cite>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={item.name}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-[#00A1E0]" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

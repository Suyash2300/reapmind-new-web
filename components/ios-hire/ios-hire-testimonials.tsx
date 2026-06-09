"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { iosHireConfig } from "@/lib/ios-hire-config";

export function IosHireTestimonials() {
  const { testimonials } = iosHireConfig;
  const reducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const items = [...testimonials.items, ...testimonials.items];

  useAnimationFrame((_, delta) => {
    if (reducedMotion || !ref.current) return;
    const width = ref.current.scrollWidth / 2;
    let next = x.get() - delta * 0.04;
    if (Math.abs(next) >= width) next = 0;
    x.set(next);
  });

  if (reducedMotion) {
    return (
      <section className="section-app bg-surface-dark py-32">
        <div className="container-app">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
            <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.items.map((t) => (
              <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-black p-8">
                <p className="text-para italic text-white/70">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 text-sm font-bold text-white">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-app overflow-hidden bg-surface-dark py-32">
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
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-dark to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-dark to-transparent sm:w-28" />
        <motion.div ref={ref} style={{ x }} className="flex w-max gap-6 px-4">
          {items.map((t, i) => (
            <blockquote
              key={`${t.name}-${i}`}
              className="w-[min(88vw,420px)] shrink-0 rounded-2xl border border-white/10 bg-black p-8"
            >
              <p className="line-clamp-6 text-para italic leading-relaxed text-white/70">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/30">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" unoptimized />
                </div>
                <div>
                  <cite className="not-italic font-bold text-white">{t.name}</cite>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

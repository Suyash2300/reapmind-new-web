"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";

export function ReactHireTestimonials() {
  const { testimonials } = reactHireConfig;

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

        <div className="columns-1 gap-5 sm:columns-2">
          {testimonials.items.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, rotateX: 25, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.55 }}
              style={{ transformPerspective: 800 }}
              className="mb-5 break-inside-avoid rounded-2xl border border-white/10 bg-black p-6"
            >
              <p className="text-sm italic leading-relaxed text-white/70 sm:text-para">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#61DAFB]/30">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="44px" unoptimized />
                </div>
                <div>
                  <cite className="not-italic text-sm font-bold text-white">{t.name}</cite>
                  <p className="text-[11px] leading-snug text-white/50">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal } from "@/components/mvp/mvp-motion";

export function MvpTestimonials() {
  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <MvpReveal variant="springPop">
          <h2 className="text-display font-black text-white">What clients say about us</h2>
        </MvpReveal>

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {mvpConfig.testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: (i % 3) * 0.12,
                duration: 0.65,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -6, borderColor: "rgba(var(--color-primary), 0.3)" }}
              className="mb-6 break-inside-avoid rounded-2xl border border-white/5 bg-black p-8"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.35, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.05, type: "spring" }}
                className="block font-serif text-5xl leading-none text-primary"
              >
                &ldquo;
              </motion.span>
              <p className="text-para italic leading-relaxed text-white/65">{t.quote}</p>
              <footer className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/20"
                >
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </motion.div>
                <div>
                  <cite className="not-italic font-bold text-white">{t.name}</cite>
                  <p className="mt-0.5 text-xs text-white/50">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

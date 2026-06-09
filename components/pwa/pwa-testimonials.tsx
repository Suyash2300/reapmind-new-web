"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaTestimonials() {
  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            Client Stories
          </span>
          <h2 className="max-w-3xl text-display font-black leading-none text-white">
            What clients say about us
          </h2>
        </GsapScrollReveal>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pwaConfig.testimonials.map((t, i) => (
            <GsapScrollReveal key={t.name} start={`top ${84 + i * 3}%`}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group flex h-full flex-col gap-6 rounded-[2rem] border border-white/5 bg-black p-8 transition-all duration-500 hover:border-primary/20 hover:bg-primary/5 sm:p-10"
              >
                <span className="select-none font-serif text-[4rem] leading-none text-primary/30">
                  &ldquo;
                </span>
                <p className="flex-1 text-para italic leading-relaxed text-white/60">
                  {t.quote}
                </p>
                <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{t.name}</p>
                    <p className="mt-1 max-w-[220px] text-xs leading-snug text-white/50">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

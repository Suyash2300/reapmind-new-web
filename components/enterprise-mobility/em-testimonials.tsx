"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmTestimonials() {
  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Client Stories</span>
          <h2 className="text-display font-black text-white leading-none max-w-3xl">
            What clients say about us
          </h2>
        </GsapScrollReveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseMobilityConfig.testimonials.map((t, i) => (
            <GsapScrollReveal key={t.name} start={`top ${84 + i * 3}%`}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col gap-6 rounded-[2rem] border border-white/5 bg-black p-10 hover:border-primary/20 hover:bg-primary/5 transition-all duration-500 h-full"
              >
                <span className="text-[4rem] leading-none text-primary/30 font-serif select-none">&ldquo;</span>

                <p className="text-para text-white/60 leading-relaxed flex-1 italic">
                  {t.quote}
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{t.name}</p>
                    <p className="text-xs text-white/50 mt-1 leading-snug max-w-[200px]">{t.role}</p>
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

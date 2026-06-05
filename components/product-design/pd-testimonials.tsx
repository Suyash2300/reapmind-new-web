"use client";

import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { productDesignConfig } from "@/lib/product-design-config";
import { motion } from "framer-motion";

const INITIALS = (name: string) =>
  name.split(" ").filter(w => /^[A-Z]/.test(w)).map(w => w[0]).join("").slice(0, 2);

export function PdTestimonials() {
  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Client Stories</span>
          <h2 className="mt-4 text-display font-bold text-white leading-none max-w-3xl">
            {productDesignConfig.meta.title.split("|")[0].trim().includes("Top") ? "What clients say about us" : "What clients say about us"}
          </h2>
        </GsapScrollReveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productDesignConfig.testimonials.map((t, i) => (
            <GsapScrollReveal key={t.name} start={`top ${84 + i * 3}%`}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col gap-6 rounded-3xl border border-white/5 bg-white/3 p-8 hover:border-primary/20 hover:bg-primary/5 transition-all duration-500"
              >
                {/* Quote mark */}
                <span className="text-[4rem] leading-none text-primary/30 font-serif select-none">&ldquo;</span>

                {/* Actual testimonial body */}
                <p className="text-para text-white/60 leading-relaxed flex-1">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-black text-sm">
                    {INITIALS(t.name)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/50 mt-0.5 leading-snug">{t.role}</p>
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

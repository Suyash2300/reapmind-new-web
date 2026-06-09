"use client";

import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaEngagement() {
  return (
    <section className="section-app relative bg-surface-dark py-32">
      <div className="container-app">
        <GsapScrollReveal className="mx-auto mb-24 max-w-4xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            ReapMind Process
          </span>
          <h2 className="text-display font-black leading-tight text-white">
            {pwaConfig.engagementModels.title}
          </h2>
          <p className="mt-6 text-h6 font-normal leading-relaxed text-white/70">
            {pwaConfig.engagementModels.subtitle}
          </p>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pwaConfig.engagementModels.models.map((model, i) => (
            <GsapScrollReveal key={model.title} start={`top ${85 + (i % 2) * 10}%`}>
              <motion.div
                className="group h-full rounded-3xl border border-white/10 bg-black/40 p-8 transition-all duration-500 hover:border-primary/50 sm:p-10"
                whileHover={{ y: -8 }}
              >
                <div className="mb-6 flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-black transition-colors duration-500 group-hover:border-primary group-hover:bg-primary sm:h-16 sm:w-16">
                    <span className="text-xl font-black text-white group-hover:text-black sm:text-2xl">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-h4 font-bold text-white transition-colors group-hover:text-primary">
                    {model.title}
                  </h3>
                </div>
                <p className="text-para leading-relaxed text-white/70">{model.description}</p>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { mumbaiModConfig } from "@/lib/mumbai-mod-config";

export function MmServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="section-app bg-surface-dark py-32 relative">
      <div className="container-app">
        <GsapScrollReveal className="max-w-5xl mx-auto text-center mb-24">
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
            Our Services
          </span>
          <h2 className="text-display font-black text-white leading-tight">
            {mumbaiModConfig.services.title}
          </h2>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mumbaiModConfig.services.items.map((service, i) => (
            <GsapScrollReveal key={service.title} start={`top ${85 + (i % 3) * 5}%`}>
              <motion.div
                className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/5 bg-black p-8 transition-all duration-500 hover:bg-white/5 hover:border-primary/30"
                whileHover={{ y: -8 }}
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 text-7xl font-black text-white/5 select-none transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/10">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-8 border border-primary/30 group-hover:bg-primary transition-colors duration-500">
                    <svg className="w-6 h-6 text-primary group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-h5 font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-para text-white/60 leading-relaxed mt-auto">
                    {service.description}
                  </p>
                </div>

                {/* Animated bottom border */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

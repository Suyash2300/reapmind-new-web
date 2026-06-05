"use client";

import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { erpConfig } from "@/lib/erp-config";

export function ErpWhyNeed() {
  return (
    <section className="section-app bg-black py-32 relative">
      <div className="container-app">
        <GsapScrollReveal className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-display font-black text-white leading-tight">
            {erpConfig.whyNeed.title}
          </h2>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {erpConfig.whyNeed.items.map((item, i) => (
            <GsapScrollReveal key={item.title} start={`top ${85 + (i % 3) * 5}%`}>
              <motion.div
                className="group h-full relative bg-surface-dark border border-white/5 rounded-3xl p-10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Glowing orb effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                    <span className="font-black text-white group-hover:text-black">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-h5 font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-para text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { erpConfig } from "@/lib/erp-config";

export function ErpEndToEnd() {
  return (
    <section className="section-app bg-black py-32 relative">
      <div className="container-app">
        <GsapScrollReveal className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-display font-black text-white leading-tight mb-6">
            {erpConfig.endToEnd.title}
          </h2>
          <p className="text-h6 text-white/70 leading-relaxed font-normal mb-8">
            {erpConfig.endToEnd.description}
          </p>
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-bold text-primary">
            {erpConfig.endToEnd.subtitle}
          </span>
        </GsapScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {erpConfig.endToEnd.points.map((point, i) => (
            <GsapScrollReveal key={point} start={`top ${85 + (i % 6) * 5}%`}>
              <motion.div
                className="group flex flex-col items-center text-center gap-4 bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <span className="font-bold text-white/50 group-hover:text-primary">
                    {i + 1}
                  </span>
                </div>
                <span className="font-bold text-white group-hover:text-primary transition-colors">
                  {point}
                </span>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

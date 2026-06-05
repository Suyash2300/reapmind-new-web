"use client";

import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmImportance() {
  return (
    <section className="section-app bg-surface-dark py-32 relative overflow-hidden">
      <div className="container-app relative z-10">
        <GsapScrollReveal className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-display font-black text-white leading-tight mb-6">
            {enterpriseMobilityConfig.importance.title}
          </h2>
          <p className="text-h6 text-white/70 leading-relaxed font-normal">
            {enterpriseMobilityConfig.importance.subtitle}
          </p>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enterpriseMobilityConfig.importance.items.map((item, i) => (
            <GsapScrollReveal key={item.title} start={`top ${80 + (i % 2) * 10}%`}>
              <motion.div 
                className="group h-full bg-black/40 border border-white/10 rounded-[2rem] p-10 hover:bg-white/5 transition-colors duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-500">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-h4 font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-para text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

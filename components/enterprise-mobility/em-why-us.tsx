"use client";

import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmWhyUs() {
  return (
    <section className="section-app bg-black py-32 relative">
      <div className="container-app">
        <GsapScrollReveal className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">
            Why Us
          </span>
          <h2 className="text-display font-black text-white leading-tight">
            {enterpriseMobilityConfig.whyUs.title}
          </h2>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {enterpriseMobilityConfig.whyUs.items.map((item, i) => (
            <GsapScrollReveal key={item.title} start={`top ${85 + (i % 3) * 5}%`}>
              <motion.div 
                className="group relative"
                whileHover={{ x: 10 }}
              >
                <div className="mb-4 text-primary opacity-50 font-black text-2xl">
                  {String(i + 1).padStart(2, '0')}.
                </div>
                <h3 className="text-h5 font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-para text-white/60 leading-relaxed pr-6">
                  {item.description}
                </p>
                <div className="absolute left-0 -bottom-6 w-12 h-0.5 bg-primary/30 transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

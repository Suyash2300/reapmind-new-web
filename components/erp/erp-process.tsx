"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { erpConfig } from "@/lib/erp-config";

export function ErpProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="section-app bg-surface-dark py-32 relative">
      <div className="container-app">
        <GsapScrollReveal className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-display font-black text-white leading-tight mb-6">
            {erpConfig.process.title}
          </h2>
          <p className="text-h6 text-white/70 leading-relaxed font-normal">
            {erpConfig.process.description}
          </p>
        </GsapScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 hidden md:block" 
          />

          <div className="space-y-16 md:space-y-32">
            {erpConfig.process.steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-center md:justify-between group">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-20 h-20 bg-black border border-white/20 rounded-full flex items-center justify-center -translate-x-1/2 z-10 transition-colors duration-500 group-hover:border-primary group-hover:bg-primary/10">
                    <span className="text-xl font-black text-white group-hover:text-primary transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${isEven ? 'md:text-right md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <GsapScrollReveal start="top 80%">
                      <motion.div 
                        className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-primary/30 transition-colors duration-500"
                        whileHover={{ y: -8, scale: 1.02 }}
                      >
                        <h3 className="text-h4 font-bold text-white mb-4 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-para text-white/60 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </GsapScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

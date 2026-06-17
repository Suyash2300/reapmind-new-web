"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

export function HealthcareProcessTimeline() {
  const { title, steps } = healthcareConfig.process;
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  // Animate the connecting line as user scrolls through the section
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-surface-dark py-24 border-t border-white/5 overflow-hidden">
      <div className="container-app mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-h2 font-bold text-primary-foreground max-w-3xl"
        >
          {title}
        </motion.h2>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc((100vw-80rem)/2))] pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-[min(80vw,340px)] shrink-0 snap-center"
          >
            <div className="bg-surface-elevated/40 border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full flex flex-col hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300 group relative">
              {/* Step number bubble */}
              <div className="w-14 h-14 rounded-2xl bg-surface-dark border-2 border-white/10 group-hover:border-primary flex items-center justify-center mb-8 transition-colors duration-300 shadow-inner flex-shrink-0">
                <span className="text-xl font-black text-white group-hover:text-primary transition-colors duration-300">
                  {step.number ?? String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-5 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>

              <ul className="space-y-3 flex-1">
                {step.items?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary mt-[6px] mr-3 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-sm font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Progress indicator line on last card */}
              {index === steps.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-primary/60 origin-left"
                    style={{ scaleX: lineScaleX }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

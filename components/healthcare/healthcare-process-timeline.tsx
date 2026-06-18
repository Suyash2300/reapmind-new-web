"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

/* ---------- 3-D flip-in variant ---------- */
const cardVariants = {
  hidden: {
    opacity: 0,
    rotateY: -60,
    y: 40,
    scale: 0.88,
  },
  visible: (i: number) => ({
    opacity: 1,
    rotateY: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 16,
      mass: 0.8,
      delay: i * 0.12,
    },
  }),
};

export function HealthcareProcessTimeline() {
  const { title, steps } = healthcareConfig.process;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"],
  });

  /* Smooth spring so the progress line feels alive */
  const springProg = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 18,
  });
  const lineScaleX = useTransform(springProg, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="bg-surface-dark py-24 border-t border-white/5 overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      <div className="container-app mb-14">
        {/* Clip-path wipe for the heading */}
        <motion.h2
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-h2 font-bold text-primary-foreground max-w-3xl"
        >
          {title}
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-[3px] w-32 mt-4 rounded-full bg-gradient-to-r from-primary to-primary/0 origin-left"
        />
      </div>

      {/* Horizontal scroll track */}
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc((100vw-80rem)/2))] pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -8, scale: 1.02, rotateY: 3 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-[min(80vw,340px)] shrink-0 snap-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="bg-surface-elevated/40 border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-full flex flex-col hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
              {/* Radial glow on hover */}
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.15),transparent_60%)]" />

              {/* Step number bubble */}
              <div className="w-14 h-14 rounded-2xl bg-surface-dark border-2 border-white/10 group-hover:border-primary flex items-center justify-center mb-8 transition-colors duration-300 shadow-inner flex-shrink-0 relative z-10">
                <span className="text-xl font-black text-white group-hover:text-primary transition-colors duration-300">
                  {step.number ?? String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-5 group-hover:text-primary transition-colors duration-300 relative z-10">
                {step.title}
              </h3>

              <ul className="space-y-3 flex-1 relative z-10">
                {step.items?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary mt-[6px] mr-3 flex-shrink-0 transition-colors duration-300" />
                    <span className="text-sm font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Spring-driven progress bar on last card */}
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

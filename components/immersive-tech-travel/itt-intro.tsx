"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IttIntroProps {
  paragraphs: readonly string[];
  transformationsIntro: string;
}

const STATS = [
  { value: "$5.91B", label: "AR Market in 2020" },
  { value: "$250B+", label: "Projected by 2025" },
  { value: "4 Ways", label: "AR/VR Reshaping Travel" },
  { value: "∞", label: "Possibilities Ahead" },
];

export function IttIntro({ paragraphs, transformationsIntro }: IttIntroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative bg-black py-24 overflow-hidden" ref={ref}>
      {/* Horizontal scan-line effect */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent origin-left"
      />

      <div className="container-app mx-auto px-4 md:px-6 relative z-10">
        {/* Stat counters row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm hover:border-blue-500/40 transition-colors duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/60 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Heading — clip-path reveal */}
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
              How is Immersive Technology reshaping{" "}
              <span className="text-blue-400">Travel & Tourism?</span>
            </h2>
          </motion.div>

          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg leading-relaxed text-white/75"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

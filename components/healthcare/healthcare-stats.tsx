"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";
import { CountUp } from "@/components/motion/count-up";

export function HealthcareStats() {
  const { heading, items, growthStats } = healthcareConfig.stats;

  return (
    <section className="relative py-24 bg-surface-dark overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-app relative z-10">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-h2 font-bold text-primary-foreground"
          >
            {heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {items.map((item, index) => {
            const numericValueMatch = item.value.match(/\d+/);
            const numericValue = numericValueMatch ? parseInt(numericValueMatch[0], 10) : 0;
            const suffix = item.value.replace(/[0-9]/g, "");

            return (
              <MagneticStatCard 
                key={index} 
                end={numericValue} 
                suffix={suffix} 
                label={item.label} 
                index={index} 
              />
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center max-w-4xl mx-auto backdrop-blur-sm"
        >
          <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            {growthStats}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MagneticStatCard({ end, suffix, label, index }: { end: number, suffix: string, label: string, index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.15, y: y * 0.15 }); // Magnetic pull strength
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-surface-elevated/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm hover:bg-surface-elevated hover:border-primary/30 transition-colors duration-300"
    >
      <div className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">
        <CountUp end={end} suffix={suffix} className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent" />
      </div>
      <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed">
        {label}
      </p>
    </motion.div>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";
import { CountUp } from "@/components/motion/count-up";

const ease = [0.22, 1, 0.36, 1] as const;

export function HealthcareStats() {
  const { heading, items, growthStats } = healthcareConfig.stats;
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const words = heading.split(" ");

  return (
    <section className="relative py-24 bg-surface-dark overflow-hidden">
      {/* Animated background radial */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.1, 0.04] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary rounded-full blur-[120px] pointer-events-none z-0"
      />

      <div className="container-app relative z-10">
        {/* Word-by-word heading */}
        <div ref={headingRef} className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2
            className="text-h2 font-bold text-primary-foreground"
            aria-label={heading}
          >
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={headingInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.065, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {items.map((item, index) => {
            const numericValueMatch = item.value.match(/\d+/);
            const numericValue = numericValueMatch
              ? parseInt(numericValueMatch[0], 10)
              : 0;
            const suffix = item.value.replace(/[0-9]/g, "");

            return (
              <GlowPulseCard
                key={index}
                end={numericValue}
                suffix={suffix}
                label={item.label}
                index={index}
              />
            );
          })}
        </div>

        {/* Growth stat banner — clip-path wipe */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0 round 1.5rem)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0 0% 0 0 round 1.5rem)", opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease }}
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

/* ── Glow-pulse card: pulses with a radial glow on enter ── */
function GlowPulseCard({
  end,
  suffix,
  label,
  index,
}: {
  end: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease }}
      whileHover={{ y: -6, scale: 1.03 }}
      className="relative bg-surface-elevated/40 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300 overflow-hidden group"
    >
      {/* Cursor-tracked glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(var(--primary), 0.18) 0%, transparent 65%)`,
        }}
      />

      {/* Entry pulse ring */}
      <AnimatePresence>
        {isInView && (
          <motion.div
            key="pulse"
            initial={{ scale: 0.6, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1, delay: index * 0.12 + 0.2, ease: "easeOut" }}
            className="absolute inset-0 rounded-3xl border border-primary pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="text-4xl md:text-6xl font-black text-primary-foreground mb-4 relative z-10">
        <CountUp
          end={end}
          suffix={suffix}
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        />
      </div>
      <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed relative z-10">
        {label}
      </p>
    </motion.div>
  );
}

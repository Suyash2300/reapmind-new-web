"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

export function HealthcareServices() {
  const { title, description, items } = healthcareConfig.services;

  return (
    <section className="relative bg-surface-dark py-24 overflow-hidden border-t border-white/5">
      <div className="container-app">
        <div className="mb-16 md:mb-24 max-w-3xl">
          {/* Word-by-word stagger reveal */}
          <WordReveal
            text={title}
            className="text-h2 font-bold text-primary-foreground mb-6"
          />
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-white/70"
          >
            {description}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          {/* Pinned Left Side */}
          <div className="hidden lg:block lg:w-1/3 sticky top-32">
            <div className="relative border-l-2 border-white/10 pl-8 space-y-12 py-4">
              {items.map((item, index) => (
                <ServiceIndexIndicator key={index} index={index} title={item.title} />
              ))}
            </div>
          </div>

          {/* Scrolling Right Side */}
          <div className="w-full lg:w-2/3 space-y-24">
            {items.map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Word-by-word clip-path reveal */
function WordReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <h2 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

function ServiceIndexIndicator({ index, title }: { index: number; title: string }) {
  return (
    <div className="relative group">
      <motion.div
        className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-surface-dark border-2 border-primary origin-center"
        initial={{ scale: 0, opacity: 0.3 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.35, type: "spring", stiffness: 200 }}
      />
      <motion.h3
        className="text-xl font-bold transition-colors duration-300"
        initial={{ color: "rgba(255,255,255,0.2)", x: -10 }}
        whileInView={{ color: "rgba(255,255,255,1)", x: 0 }}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.4 }}
      >
        0{index + 1}. {title}
      </motion.h3>
    </div>
  );
}

function ServiceCard({
  item,
  index,
}: {
  item: { title: string; description: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} className="relative">
      {/* Clip-path wipe reveal */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0 round 1.5rem)" }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0 round 1.5rem)" } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="bg-surface-elevated/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm group hover:border-primary/30 transition-colors duration-500 relative overflow-hidden"
      >
        {/* Corner glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500 transform translate-x-1/2 -translate-y-1/2" />

        <div className="flex flex-col md:flex-row md:items-center mb-6 gap-6 relative z-10">
          {/* Icon with spin-in */}
          <motion.div
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={isInView ? { rotate: 0, scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.25 }}
            className="h-14 w-14 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
            </svg>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-h3 font-bold text-primary-foreground group-hover:text-primary transition-colors duration-300"
          >
            {item.title}
          </motion.h3>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-white/70 leading-relaxed relative z-10"
        >
          {item.description}
        </motion.p>
      </motion.div>
    </div>
  );
}

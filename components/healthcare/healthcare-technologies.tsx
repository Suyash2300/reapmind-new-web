"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

const ease = [0.22, 1, 0.36, 1] as const;

export function HealthcareTechnologies() {
  const { title, items } = healthcareConfig.technologies;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);

  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const words = title.split(" ");

  // Throttle mouse tracking to one rAF per frame
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) {
        rafRef.current = null;
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      rafRef.current = null;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: -9999, y: -9999 });
  }, []);

  return (
    <section
      className="bg-surface-dark py-24 relative overflow-hidden border-t border-white/5"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Glow that follows the mouse */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none transition-transform duration-75 hidden md:block"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
      />

      <div className="container-app relative z-10">
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
           <h2
            className="text-h2 font-bold text-primary-foreground"
            aria-label={title}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((tech, index) => {
            const isLeft = index % 4 < 2;
            const rotateStart = isLeft ? -10 : 10;
            const xStart = isLeft ? -30 : 30;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, x: xStart, rotateZ: rotateStart, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, x: 0, rotateZ: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                  scale: { type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 },
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-surface-elevated/40 border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden group h-full flex flex-col hover:border-primary/50 hover:bg-surface-elevated/60 transition-all duration-300"
              >
                {/* Diagonal sweep hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out z-0 pointer-events-none" />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="w-12 h-12 mb-7 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-inner flex-shrink-0 group-hover:scale-110 duration-300">
                    <span className="font-bold text-primary text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-white/55 leading-relaxed text-sm">
                    {tech.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

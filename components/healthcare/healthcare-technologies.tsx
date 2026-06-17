"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { healthcareConfig } from "@/lib/healthcare-config";

export function HealthcareTechnologies() {
  const { title, items } = healthcareConfig.technologies;
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);

  // Throttle mouse tracking to one rAF per frame — eliminates the setState storm
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (rafRef.current !== null) return; // skip if a frame is already queued
    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) { rafRef.current = null; return; }
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
      {/* Static grid background — no JS, pure CSS */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* Glow that follows the mouse — single element, no per-card state */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none transition-transform duration-75 hidden md:block"
        style={{ transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)` }}
      />

      <div className="container-app relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-h2 font-bold text-primary-foreground"
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-surface-elevated/40 border border-white/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden group h-full flex flex-col hover:border-primary/50 hover:bg-surface-elevated/60 transition-colors duration-300"
            >
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="w-12 h-12 mb-7 rounded-2xl bg-surface-dark border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-inner flex-shrink-0">
                  <span className="font-bold text-primary text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

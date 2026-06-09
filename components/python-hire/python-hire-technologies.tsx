"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pythonHireConfig } from "@/lib/python-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function PythonHireTechnologies() {
  const { technologies } = pythonHireConfig;
  const reduced = usePrefersReducedMotion();
  const items = technologies.items;

  return (
    <section className="section-app overflow-hidden bg-surface-dark py-32">
      <div className="container-app">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
            <p className="mt-6 text-para text-white/65">{technologies.description}</p>
            <div className="relative mt-10 hidden aspect-square max-w-xs lg:block">
              <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="320px" unoptimized />
            </div>
          </motion.div>

          <div className="relative mx-auto flex h-[min(90vw,420px)] w-[min(90vw,420px)] items-center justify-center">
            <motion.div
              animate={reduced ? undefined : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-[#3776AB]/30"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-2xl border border-[#FFD43B]/30 bg-black px-6 py-3 text-center">
                <p className="text-sm font-bold text-[#FFD43B]">Python Stack</p>
              </div>
            </div>
            {items.map((tech, i) => {
              const angle = (i / items.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 42;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, zIndex: 20 }}
                  className="absolute flex w-[72px] flex-col items-center gap-1"
                  style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-black p-1">
                    <Image src={tech.icon} alt={tech.name} fill className="object-contain" sizes="48px" unoptimized />
                  </div>
                  <span className="max-w-[80px] text-center text-[9px] font-medium text-white/60">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

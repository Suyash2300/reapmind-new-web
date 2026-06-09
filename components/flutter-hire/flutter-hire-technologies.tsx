"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

export function FlutterHireTechnologies() {
  const { technologies } = flutterHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-md lg:col-span-5"
          >
            <motion.div
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="400px" />
            </motion.div>
            {technologies.items.slice(0, 6).map((tech, i) => {
              const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 42;
              const y = 50 + Math.sin(angle) * 42;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    opacity: { delay: 0.15 + i * 0.1 },
                    scale: { delay: 0.15 + i * 0.1, type: "spring" },
                    y: { repeat: Infinity, duration: 2.4 + i * 0.2, ease: "easeInOut", delay: 0.5 },
                  }}
                  animate={{ y: [0, i % 2 ? -5 : 5, 0] }}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-primary/30 bg-black/90 p-1.5 sm:h-12 sm:w-12"
                >
                  <Image src={tech.icon} alt={tech.name} fill className="object-contain" sizes="48px" unoptimized />
                </motion.div>
              );
            })}
          </motion.div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7">
            {technologies.items.map((tech, i) => (
              <motion.li
                key={tech.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, skewX: i % 2 === 0 ? -8 : 8 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
                whileHover={{ skewX: 0, scale: 1.04, borderColor: "rgba(59,130,246,0.4)" }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/50 px-3 py-4"
              >
                <div className="relative h-10 w-10 sm:h-11 sm:w-11">
                  <Image src={tech.icon} alt={tech.name} fill className="object-contain" sizes="44px" unoptimized />
                </div>
                <span className="text-center text-[11px] font-semibold text-white/80 sm:text-xs">{tech.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

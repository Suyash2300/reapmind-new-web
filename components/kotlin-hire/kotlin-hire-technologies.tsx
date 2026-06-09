"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

export function KotlinHireTechnologies() {
  const { technologies } = kotlinHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-[300px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-[300px]"
          >
            <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="300px" />
          </motion.div>

          <div className="grid auto-rows-fr grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.items.map((tech, i) => {
              const tall = i % 5 === 0;
              return (
                <motion.div
                  key={`${tech.name}-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10px" }}
                  transition={{ delay: (i % 4) * 0.05 + Math.floor(i / 4) * 0.08, type: "spring" }}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(127,82,255,0.2)" }}
                  className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/60 p-4 text-center ${
                    tall ? "sm:row-span-2" : ""
                  }`}
                >
                  <div className="relative h-10 w-10">
                    <Image src={tech.icon} alt="" fill className="object-contain" sizes="40px" unoptimized />
                  </div>
                  <span className="text-[10px] font-semibold leading-tight text-white/85 sm:text-xs">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

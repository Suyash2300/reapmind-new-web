"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrSectors() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-surface-dark py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, scale: 1.08 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {emrConfig.sectors.title}
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {emrConfig.sectors.items.map((sector, index) => (
            <motion.div
              key={sector.name}
              className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center"
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              whileHover={reduced ? undefined : { y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#2563EB]/10">
                <div className="relative h-10 w-10">
                  <Image src={sector.icon} alt={sector.name} fill className="object-contain" sizes="40px" />
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold text-white sm:text-base">{sector.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsSectors() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <h2 className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display">
          {oamsConfig.sectors.title}
        </h2>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
        >
          {oamsConfig.sectors.items.map((sector, index) => (
            <motion.div
              key={sector.name}
              className="rounded-2xl border border-white/10 bg-surface-elevated p-4 text-center sm:p-5"
              initial={reduced ? false : { opacity: 0, rotate: -8, scale: 0.9 }}
              whileInView={reduced ? undefined : { opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, type: "spring", stiffness: 260 }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
                <div className="relative h-9 w-9">
                  <Image src={sector.icon} alt={sector.name} fill className="object-contain" sizes="36px" />
                </div>
              </div>
              <p className="mt-2 text-xs font-semibold text-white sm:text-sm">{sector.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

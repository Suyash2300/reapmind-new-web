"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal, getAlternatingVariant } from "@/components/mvp/mvp-motion";

export function MvpSectors() {
  return (
    <section className="section-app overflow-hidden bg-surface-dark py-32">
      <div className="container-app">
        <MvpReveal variant="clipUp" className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-display font-black leading-tight text-white">{mvpConfig.sectors.title}</h2>
        </MvpReveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {mvpConfig.sectors.items.map((sector, i) => (
            <MvpReveal key={sector.name} variant={getAlternatingVariant(i)} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -8, rotate: i % 2 === 0 ? 2 : -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-white/5 bg-black/60 p-6 text-center md:p-8"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="relative h-14 w-14 md:h-16 md:w-16"
                >
                  <Image src={sector.icon} alt={sector.name} fill className="object-contain" />
                </motion.div>
                <h3 className="text-sm font-bold text-white group-hover:text-primary md:text-base">{sector.name}</h3>
              </motion.div>
            </MvpReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

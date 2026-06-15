"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OmdSectors() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-20 sm:py-24">
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0D9488]/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="container-app relative">
        <h2 className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display">{omdConfig.sectors.title}</h2>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {omdConfig.sectors.items.map((sector, index) => (
            <motion.div
              key={sector.name}
              className="group rounded-2xl border border-white/10 bg-black/45 p-5 text-center"
              initial={reduced ? false : { opacity: 0, scale: 0.92 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
              animate={
                reduced
                  ? undefined
                  : {
                      y: [0, index % 2 === 0 ? -8 : -4, 0],
                    }
              }
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-white/5">
                <div className="relative h-10 w-10">
                  <Image src={sector.icon} alt={sector.name} fill className="object-contain" sizes="40px" />
                </div>
              </div>
              <p className="mt-3 text-sm font-semibold text-white transition-colors group-hover:text-[#5eead4] sm:text-base">
                {sector.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

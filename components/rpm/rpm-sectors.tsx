"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { rpmConfig } from "@/lib/rpm-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RpmSectors() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-gradient-to-b from-black to-[#0a0f1a] py-20 sm:py-24">
      <div className="container-app">
        <h2 className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display">
          {rpmConfig.sectors.title}
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {rpmConfig.sectors.items.map((sector: any, index: number) => (
            <motion.div
              key={sector.name}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-center backdrop-blur-sm sm:p-5"
              initial={reduced ? false : { opacity: 0, y: 40 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
                duration: 0.5,
                ease: [0.34, 1.2, 0.64, 1],
              }}
              whileHover={reduced ? undefined : { y: -6, borderColor: "rgba(245,158,11,0.4)" }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-amber-500/15">
                <div className="relative h-9 w-9">
                  <Image src={sector.icon} alt={sector.name} fill className="object-contain" sizes="36px" />
                </div>
              </div>
              <p className="mt-2 text-xs font-semibold text-white sm:text-sm">{sector.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

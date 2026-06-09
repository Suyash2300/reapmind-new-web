"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaSectors() {
  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <div className="container-app relative z-10">
        <GsapScrollReveal className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="text-display font-black leading-tight text-white">
            {pwaConfig.sectors.title}
          </h2>
        </GsapScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {pwaConfig.sectors.items.map((sector, i) => (
            <GsapScrollReveal key={sector.name} start={`top ${85 + (i % 4) * 5}%`}>
              <motion.div
                className="group flex aspect-square cursor-pointer flex-col items-center justify-center gap-6 rounded-3xl border border-white/5 bg-black p-6 transition-all duration-500 hover:border-primary/30 hover:bg-white/5 md:p-8"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="relative h-14 w-14 transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
                  <Image
                    src={sector.icon}
                    alt={sector.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-bold text-white transition-colors group-hover:text-primary md:text-base">
                  {sector.name}
                </h3>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

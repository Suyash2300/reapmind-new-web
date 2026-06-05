"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { enterpriseMobilityConfig } from "@/lib/enterprise-mobility-config";

export function EmSectors() {
  return (
    <section className="section-app bg-black py-32 relative overflow-hidden">
      <div className="container-app relative z-10">
        <GsapScrollReveal className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-display font-black text-white leading-tight">
            {enterpriseMobilityConfig.sectors.title}
          </h2>
        </GsapScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {enterpriseMobilityConfig.sectors.items.map((sector, i) => (
            <GsapScrollReveal key={sector.name} start={`top ${85 + (i % 4) * 5}%`}>
              <motion.div 
                className="group flex flex-col items-center justify-center gap-6 bg-surface-dark border border-white/5 rounded-3xl p-8 aspect-square hover:bg-white/5 hover:border-primary/30 transition-all duration-500 cursor-pointer"
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={sector.icon}
                    alt={sector.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-center font-bold text-white text-sm md:text-base group-hover:text-primary transition-colors">
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

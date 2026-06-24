"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";

type SectorItem = {
  name: string;
  icon: string;
};

type ServiceSectorsSectionProps = {
  title: string;
  items: readonly SectorItem[] | SectorItem[];
};

export function ServiceSectorsSection({ title, items }: ServiceSectorsSectionProps) {
  return (
    <section className="section-app relative overflow-hidden bg-black py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app relative z-10">
        <GsapScrollReveal className="mx-auto mb-10 max-w-4xl text-center lg:mb-14">
          <h2 className="text-h2 font-black leading-tight text-white sm:text-display">
            {title}
          </h2>
        </GsapScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {items.map((sector, i) => (
            <GsapScrollReveal key={sector.name} start={`top ${85 + (i % 4) * 5}%`}>
              <motion.div
                className="group flex aspect-square cursor-default flex-col items-center justify-center gap-4 rounded-3xl border border-white/5 bg-surface-dark p-6 transition-all duration-500 hover:border-primary/30 hover:bg-white/5 sm:gap-6 sm:p-8"
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="relative h-14 w-14 transition-transform duration-500 group-hover:scale-110 md:h-16 md:w-16 lg:h-20 lg:w-20">
                  <Image
                    src={sector.icon}
                    alt={sector.name}
                    fill
                    sizes="80px"
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

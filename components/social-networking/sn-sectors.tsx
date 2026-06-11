"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingConfig } from "@/lib/social-networking-config";
import { industrySectors } from "@/lib/recent-works-portfolio";

const SECTOR_ACCENTS = [
  "#c084fc", "#67e8f9", "#f9a8d4", "#6ee7b7", "#fde047",
  "#93c5fd", "#fda4af", "#a5b4fc", "#7dd3fc", "#e879f9",
  "#c4b5fd", "#fcd34d",
] as const;

export function SnSectors() {
  const { sectors } = socialNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const gridScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);
  const items = industrySectors.items;

  return (
    <section ref={sectionRef} className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="sn-sectors-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="sn-sectors-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {sectors.title}
        </BlurFadeIn>

        <motion.div className="relative mx-auto mt-12 max-w-4xl" style={reducedMotion ? undefined : { scale: gridScale }}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
            {items.map((sector, index) => {
              const accent = SECTOR_ACCENTS[index % SECTOR_ACCENTS.length];
              const isOffset = index % 2 === 1;
              return (
                <motion.div
                  key={sector.name}
                  initial={reducedMotion ? false : { opacity: 0, y: isOffset ? 28 : 0, x: isOffset ? 8 : -8 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: index * 0.035, duration: 0.5, type: "spring", stiffness: 200 }}
                  whileHover={reducedMotion ? undefined : { rotate: index % 2 === 0 ? 2 : -2, scale: 1.04 }}
                  className="group relative flex flex-col items-center p-4 text-center"
                  style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                >
                  <div
                    className="flex w-full flex-col items-center rounded-none border border-white/10 bg-surface-elevated/70 py-5 backdrop-blur-sm transition-colors group-hover:border-white/25"
                    style={{ background: `linear-gradient(180deg, ${accent}14, transparent)` }}
                  >
                    <div
                      className="relative mb-3 flex h-12 w-12 items-center justify-center overflow-hidden"
                      style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)" }}
                    >
                      <Image src={sector.icon} alt="" width={28} height={28} className="object-contain" />
                    </div>
                    <p className="px-2 text-xs font-semibold leading-snug text-white/80 sm:text-sm">{sector.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

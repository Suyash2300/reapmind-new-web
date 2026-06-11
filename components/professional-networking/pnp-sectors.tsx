"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { professionalNetworkingConfig } from "@/lib/professional-networking-config";
import { industrySectors } from "@/lib/recent-works-portfolio";

const SECTOR_ACCENTS = [
  "#34d399", "#60a5fa", "#c084fc", "#fbbf24", "#4ade80", "#fb7185",
  "#22d3ee", "#818cf8", "#38bdf8", "#f472b6", "#a78bfa", "#fcd34d",
] as const;

export function PnpSectors() {
  const { sectors } = professionalNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const items = industrySectors.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="pnp-sectors-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="pnp-sectors-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {sectors.title}
        </BlurFadeIn>

        <div className="relative mx-auto mt-12 max-w-4xl">
          {!reducedMotion && (
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-500/15"
              animate={{ rotate: 360, scale: [1, 1.06, 1] }}
              transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              aria-hidden
            />
          )}

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
            {items.map((sector, index) => {
              const accent = SECTOR_ACCENTS[index % SECTOR_ACCENTS.length];
              return (
                <motion.div
                  key={sector.name}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ delay: index * 0.04, duration: 0.45 }}
                  whileHover={reducedMotion ? undefined : { y: -4, boxShadow: `0 16px 40px -12px ${accent}44` }}
                  className="group flex flex-col items-center rounded-2xl border border-white/10 bg-surface-elevated/60 p-4 text-center backdrop-blur-sm"
                >
                  <div
                    className="relative mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border transition-colors group-hover:border-white/20"
                    style={{ borderColor: `${accent}44`, backgroundColor: `${accent}12` }}
                  >
                    <Image src={sector.icon} alt="" width={28} height={28} className="object-contain" />
                  </div>
                  <p className="text-xs font-semibold leading-snug text-white/80 sm:text-sm">{sector.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

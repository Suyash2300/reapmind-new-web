"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { shortVideoAppConfig } from "@/lib/short-video-app-config";
import { industrySectors } from "@/lib/recent-works-portfolio";

const ACCENTS = ["#f97316", "#ec4899", "#8b5cf6", "#1a69fd", "#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#22d3ee", "#a78bfa", "#fb7185", "#fcd34d"] as const;

export function SvadSectors() {
  const { sectors } = shortVideoAppConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="svad-sectors-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="svad-sectors-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {sectors.title}
        </BlurFadeIn>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industrySectors.items.map((sector, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <motion.div
                key={sector.name}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, type: "spring", stiffness: 260 }}
                whileHover={reducedMotion ? undefined : { scale: 1.08, rotate: -2 }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-surface-elevated/60 px-4 py-2.5 backdrop-blur-sm"
                style={{ boxShadow: `0 0 0 1px ${accent}22` }}
              >
                <Image src={sector.icon} alt="" width={20} height={20} className="object-contain" />
                <span className="text-xs font-semibold text-white/85 sm:text-sm">{sector.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

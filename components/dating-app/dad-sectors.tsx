"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { datingAppConfig } from "@/lib/dating-app-config";
import { industrySectors } from "@/lib/recent-works-portfolio";

const SECTOR_ACCENTS = [
  "#fda4af", "#fb7185", "#f472b6", "#e879f9", "#f9a8d4",
  "#fdba74", "#fb923c", "#fbbf24", "#fcd34d", "#86efac",
  "#67e8f9", "#c084fc",
] as const;

export function DadSectors() {
  const { sectors } = datingAppConfig;
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const waveY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const items = industrySectors.items;

  const col1 = items.filter((_, i) => i % 3 === 0);
  const col2 = items.filter((_, i) => i % 3 === 1);
  const col3 = items.filter((_, i) => i % 3 === 2);

  function SectorCard({ sector, index }: { sector: (typeof items)[number]; index: number }) {
    const accent = SECTOR_ACCENTS[index % SECTOR_ACCENTS.length];
    return (
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ delay: (index % 4) * 0.05, duration: 0.45 }}
        whileHover={reducedMotion ? undefined : { y: -4, boxShadow: `0 12px 32px -8px ${accent}44` }}
        className="mb-3 flex items-center gap-3 rounded-xl border border-white/10 bg-surface-elevated/70 p-3 backdrop-blur-sm sm:p-4"
        style={{ background: `linear-gradient(135deg, ${accent}12, transparent)` }}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${accent}18` }}>
          <Image src={sector.icon} alt="" width={24} height={24} className="object-contain" />
        </div>
        <p className="text-xs font-semibold leading-snug text-white/80 sm:text-sm">{sector.name}</p>
      </motion.div>
    );
  }

  return (
    <section ref={sectionRef} className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="dad-sectors-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="dad-sectors-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {sectors.title}
        </BlurFadeIn>

        <motion.div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3" style={reducedMotion ? undefined : { y: waveY }}>
          <div className="space-y-0 sm:mt-0">{col1.map((s, i) => <SectorCard key={s.name} sector={s} index={i} />)}</div>
          <div className="space-y-0 sm:mt-6">{col2.map((s, i) => <SectorCard key={s.name} sector={s} index={i + 4} />)}</div>
          <div className="space-y-0 sm:mt-3">{col3.map((s, i) => <SectorCard key={s.name} sector={s} index={i + 8} />)}</div>
        </motion.div>
      </div>
    </section>
  );
}

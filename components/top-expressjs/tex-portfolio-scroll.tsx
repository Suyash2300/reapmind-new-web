"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexPortfolioScroll() {
  const { caseStudies } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start end", "end start"] });
  const dragX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section className="overflow-hidden bg-black py-14 md:py-20" aria-label="Portfolio case studies">
      <motion.div
        ref={trackRef}
        style={reducedMotion ? undefined : { x: dragX }}
        className="flex gap-5 px-6 md:gap-6 md:px-10"
      >
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.id}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9, z: -index * 20 }}
            whileInView={{ opacity: 1, scale: 1, z: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05, duration: 0.55 }}
            whileHover={reducedMotion ? undefined : { y: -12, rotateX: 4, zIndex: 20 }}
            style={{ transformStyle: "preserve-3d", zIndex: index, perspective: 800 }}
            className="w-[min(88vw,400px)] shrink-0"
          >
            <div className="overflow-hidden rounded-2xl border border-[#a78bfa]/25 bg-gradient-to-br from-[#a78bfa]/10 to-transparent shadow-[0_24px_60px_-20px_rgba(167,139,250,0.35)]">
              <div className="relative aspect-[16/10]">
                <Image src={study.image} alt={study.title} fill className="object-cover" sizes="400px" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-white/60">{study.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#22d3ee]">Results</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-black/50 p-3 text-center">
                      <p className="text-lg font-bold text-[#a78bfa]">{stat.value}</p>
                      <p className="text-[11px] text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

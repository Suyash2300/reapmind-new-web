"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoPortfolioScroll() {
  const { caseStudies } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="overflow-hidden bg-[#0a1014] py-14 md:py-20" aria-label="Portfolio case studies">
      <div className="flex gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] snap-x snap-mandatory md:px-10 [&::-webkit-scrollbar]:hidden">
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.id}
            initial={reducedMotion ? false : { opacity: 0, y: 60, rotateZ: index * -2 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: index * -1.5 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.55 }}
            whileHover={reducedMotion ? undefined : { y: -10, rotateZ: 0, zIndex: 30 }}
            style={{ transformStyle: "preserve-3d", zIndex: index }}
            className="w-[min(88vw,400px)] shrink-0 snap-center"
          >
            <div className="overflow-hidden rounded-2xl border border-[#00ADD8]/20 bg-black/60 backdrop-blur-md">
              <div className="relative aspect-[16/10]">
                <Image src={study.image} alt={study.title} fill className="object-cover" sizes="400px" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-white/60">{study.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#00ADD8]">Results</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-[#00ADD8]/5 p-3 text-center">
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[11px] text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjPortfolioScroll() {
  const { caseStudies } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="overflow-hidden border-t border-white/10 bg-black py-14 md:py-20" aria-label="Portfolio case studies">
      <div className="flex gap-6 overflow-x-auto px-6 pb-4 pt-2 [scrollbar-width:none] snap-x snap-mandatory md:px-10 [&::-webkit-scrollbar]:hidden">
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.id}
            initial={reducedMotion ? false : { opacity: 0, rotateZ: index % 2 === 0 ? -3 : 3, y: 40 }}
            whileInView={{ opacity: 1, rotateZ: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            whileHover={reducedMotion ? undefined : { y: -8, rotateZ: 0, zIndex: 10 }}
            style={{ transformStyle: "preserve-3d", zIndex: index }}
            className="w-[min(88vw,420px)] shrink-0 snap-center"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="relative aspect-[16/10]">
                <Image src={study.image} alt={study.title} fill className="object-cover" sizes="420px" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-white/60">{study.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#339933]">Results</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
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

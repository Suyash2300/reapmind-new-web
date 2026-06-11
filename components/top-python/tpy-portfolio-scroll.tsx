"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyPortfolioScroll() {
  const { caseStudies } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section className="overflow-hidden bg-black py-14 md:py-20" aria-label="Portfolio case studies">
      <motion.div
        ref={ref}
        style={reducedMotion ? undefined : { x }}
        className="flex gap-6 px-6 pb-4 [scrollbar-width:none] md:px-10"
      >
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.id}
            initial={reducedMotion ? false : { opacity: 0, y: 50, rotateY: index % 2 === 0 ? 8 : -8 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.04, duration: 0.6 }}
            whileHover={reducedMotion ? undefined : { y: -10, scale: 1.02 }}
            style={{ transformStyle: "preserve-3d", zIndex: index }}
            className="w-[min(88vw,420px)] shrink-0"
          >
            <div className="overflow-hidden rounded-2xl border border-[#3776AB]/25 bg-gradient-to-b from-[#3776AB]/10 to-transparent backdrop-blur-md">
              <div className="relative aspect-[16/10]">
                <Image src={study.image} alt={study.title} fill className="object-cover" sizes="420px" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white">{study.title}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-white/60">{study.description}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#FFD43B]">Results</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-white/10 bg-black/50 p-3 text-center">
                      <p className="text-lg font-bold text-[#3776AB]">{stat.value}</p>
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

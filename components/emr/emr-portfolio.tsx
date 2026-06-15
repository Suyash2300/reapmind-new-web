"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { emrConfig } from "@/lib/emr-config";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrPortfolio() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-28%"]);

  return (
    <section className="section-app overflow-hidden bg-surface-dark py-20 sm:py-24">
      <div className="container-app">
        <h2 className="text-h2 font-black text-white md:text-display">Our Recent Works</h2>
      </div>

      <motion.div ref={ref} className="mt-10 flex gap-6 px-4 sm:px-8" style={reduced ? undefined : { x }}>
        {emrConfig.portfolio.map((item, index) => (
          <PortfolioCaseLink
            key={item.title}
            href={item.link}
            className="group w-[min(88vw,400px)] shrink-0 rounded-[1.75rem] border border-white/10 bg-black/60 p-4"
            initial={reduced ? false : { opacity: 0, rotateY: 45, scale: 0.85 }}
            whileInView={reduced ? undefined : { opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05, duration: 0.55 }}
            style={{ transformPerspective: 1200 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#f4f4f5]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                sizes="400px"
              />
            </div>
            <div className="mt-4">
              <span className="inline-flex rounded-full border border-[#2563EB]/50 bg-[#2563EB]/15 px-3 py-1 text-xs font-semibold text-[#93C5FD]">
                {item.category}
              </span>
              <h3 className="mt-3 line-clamp-2 text-base font-bold text-white group-hover:text-[#93C5FD] sm:text-lg">
                {item.title}
              </h3>
            </div>
          </PortfolioCaseLink>
        ))}
      </motion.div>
    </section>
  );
}

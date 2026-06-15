"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { risConfig } from "@/lib/ris-config";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RisPortfolio() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="section-app bg-surface-header py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, x: -30 }}
          whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Our Recent Works
        </motion.h2>

        <motion.div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={reduced ? undefined : { y: gridY }}>
          {risConfig.portfolio.map((item, index) => (
            <PortfolioCaseLink
              key={item.title}
              href={item.link}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4"
              initial={reduced ? false : { opacity: 0, scale: 0.88, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.55, type: "spring" }}
              whileHover={reduced ? undefined : { scale: 1.03, rotate: 0.5 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#f4f4f5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="mt-3">
                <span className="text-xs font-semibold text-violet-400">{item.category}</span>
                <h3 className="mt-1 line-clamp-2 text-base font-bold text-white group-hover:text-violet-300">
                  {item.title}
                </h3>
              </div>
            </PortfolioCaseLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

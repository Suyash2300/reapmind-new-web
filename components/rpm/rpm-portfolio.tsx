"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { rpmConfig } from "@/lib/rpm-config";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RpmPortfolio() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-app bg-surface-header py-20 sm:py-24">
      <div className="container-app">
        <h2 className="text-h2 font-black text-white md:text-display">Our Recent Works</h2>

        {!reduced && (
          <div className="mt-4 h-1 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full bg-gradient-to-r from-cyan-500 to-amber-500" style={{ width: progressWidth }} />
          </div>
        )}

        <div
          ref={ref}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {rpmConfig.portfolio.map((item, index) => (
            <PortfolioCaseLink
              key={item.title}
              href={item.link}
              className="group w-[min(85vw,320px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-black/50"
              initial={reduced ? false : { opacity: 0, x: 80 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f4f4f5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-cyan-400">{item.category}</span>
                <h3 className="mt-1 line-clamp-2 text-base font-bold text-white group-hover:text-cyan-300">
                  {item.title}
                </h3>
              </div>
            </PortfolioCaseLink>
          ))}
        </div>
      </div>
    </section>
  );
}

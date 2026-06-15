"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsPortfolio() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-surface-header py-20 sm:py-24">
      <div className="container-app">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          {oamsConfig.portfolioLead.title}
        </p>
        <h2 className="mt-3 text-h2 font-black text-white md:text-display">Our Recent Works</h2>

        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {oamsConfig.portfolio.map((item, index) => (
            <PortfolioCaseLink
              key={item.title}
              href={item.link}
              className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-4"
              initial={reduced ? false : { opacity: 0, y: 50 - index * 8 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              whileHover={reduced ? undefined : { y: -8, zIndex: 10 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#f4f4f5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="mt-3">
                <span className="text-xs font-semibold text-emerald-400">{item.category}</span>
                <h3 className="mt-1 line-clamp-2 text-base font-bold text-white group-hover:text-emerald-300">
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

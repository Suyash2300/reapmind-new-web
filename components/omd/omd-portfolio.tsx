"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { omdConfig } from "@/lib/omd-config";
import { PortfolioCaseLink } from "@/components/shared/portfolio-case-link";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OmdPortfolio() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <h2 className="text-h2 font-black text-white md:text-display">Our Recent Works</h2>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {omdConfig.portfolio.map((item, index) => (
            <PortfolioCaseLink
              key={item.title}
              href={item.link}
              className="group block h-full w-[88vw] shrink-0 snap-center rounded-[1.75rem] border border-white/10 bg-surface-elevated p-4 sm:w-[430px]"
              whileHover={reduced ? undefined : { scale: 1.02, y: -6 }}
              initial={reduced ? false : { opacity: 0, x: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#f4f4f5]">
                <motion.div
                  className="relative h-full w-full"
                  whileHover={reduced ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 88vw, 430px"
                  />
                </motion.div>
              </div>

              <div className="mt-4">
                <span className="inline-flex rounded-full border border-[#0D9488]/50 bg-[#0D9488]/15 px-3 py-1 text-xs font-semibold text-[#5eead4]">
                  {item.category}
                </span>
                <h3 className="mt-3 line-clamp-2 text-base font-bold text-white transition-colors group-hover:text-[#5eead4] sm:text-lg">
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

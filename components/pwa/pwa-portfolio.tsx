"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaPortfolio() {
  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h2 className="mt-4 max-w-3xl text-display font-bold leading-none text-white">
            Our Recent Works
          </h2>
        </GsapScrollReveal>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pwaConfig.portfolio.map((item, i) => (
            <GsapScrollReveal key={item.title} start={`top ${85 + i * 3}%`}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <motion.div
                  className="group relative flex aspect-[4/3] cursor-pointer flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 bg-surface-header transition-all duration-500 hover:scale-[1.02]"
                  whileHover={{ y: -6 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-8">
                    <span className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/70">
                      {item.category}
                    </span>
                    <h3 className="mt-4 text-h4 font-bold leading-snug text-white transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </a>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { productDesignConfig } from "@/lib/product-design-config";

export function PdPortfolio() {
  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <GsapScrollReveal>
          <span className="text-primary font-bold tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="mt-4 text-display font-bold text-white leading-none max-w-3xl">
            Products we&apos;ve brought to life
          </h2>
        </GsapScrollReveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productDesignConfig.portfolio.map((item, i) => (
            <GsapScrollReveal key={item.title} start={`top ${85 + i * 3}%`}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <motion.div
                  className="group relative flex flex-col justify-end overflow-hidden rounded-[2rem] border border-white/10 bg-surface-header aspect-[4/3] transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  whileHover={{ y: -6 }}
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                    <span className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white/70">
                      {item.category}
                    </span>
                    <h3 className="mt-4 text-h4 font-bold text-white leading-snug group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-sm font-bold text-primary opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-8 transition-all duration-500">
                      View Case Study
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </a>
            </GsapScrollReveal>
          ))}
        </div>

        <GsapScrollReveal className="mt-16 text-center">
          <Link
            href="/contact-reapmind"
            className="inline-flex h-16 items-center justify-center rounded-full border border-white/20 px-12 text-lg font-bold text-white transition-all hover:bg-primary hover:border-primary"
          >
            Get a Callback from Expert
          </Link>
        </GsapScrollReveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaInsights() {
  return (
    <section className="section-app border-t border-white/5 bg-black py-32">
      <div className="container-app">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <GsapScrollReveal>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Resources
            </span>
            <h2 className="mt-4 text-display font-bold leading-none text-white">
              {pwaConfig.insights.title}
            </h2>
          </GsapScrollReveal>
          <GsapScrollReveal className="shrink-0">
            <Link
              href="/blogs"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-bold text-white transition-all hover:bg-white hover:text-black"
            >
              View all insights
            </Link>
          </GsapScrollReveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pwaConfig.insights.articles.map((article, i) => (
            <GsapScrollReveal key={article.title} start={`top ${84 + i * 2}%`}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-surface-dark transition-colors duration-500 hover:border-primary/30"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white/50">
                      <span className="text-primary">{article.category}</span>
                      <span className="h-1 w-1 rounded-full bg-white/20" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="flex-1 text-h5 font-bold leading-snug text-white transition-colors duration-300 group-hover:text-primary">
                      {article.title}
                    </h3>
                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="text-sm text-white/60">By {article.author}</span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-primary group-hover:text-black">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
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

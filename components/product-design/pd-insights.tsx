"use client";

import Link from "next/link";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { productDesignConfig } from "@/lib/product-design-config";
import { motion } from "framer-motion";

export function PdInsights() {
  return (
    <section className="section-app bg-surface-dark py-32 border-t border-white/5">
      <div className="container-app">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <GsapScrollReveal>
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Resources</span>
            <h2 className="mt-4 text-display font-bold text-white leading-none">
              {productDesignConfig.insights.title}
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productDesignConfig.insights.articles.map((article, i) => (
            <GsapScrollReveal key={`${article.link}-${article.date}`} start={`top ${84 + i * 3}%`}>
              <Link href={article.link} className="block group h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col h-full rounded-3xl border border-white/5 bg-black p-8 hover:border-primary/30 transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-white/50 uppercase mb-6">
                    <span className="text-primary">{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-h4 font-bold text-white group-hover:text-primary transition-colors duration-300 leading-snug flex-1">
                    {article.title}
                  </h3>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-sm text-white/60">By {article.author}</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </GsapScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

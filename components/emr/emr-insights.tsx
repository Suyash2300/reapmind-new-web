"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function EmrInsights() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app border-t border-white/10 bg-black py-20 sm:py-24">
      <div className="container-app">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-h2 font-black text-white md:text-display">{emrConfig.insights.title}</h2>
          <Link
            href="/blogs"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            View all insights
          </Link>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {emrConfig.insights.articles.map((article, index) => (
            <motion.div
              key={article.title}
              className="w-[min(88vw,360px)] shrink-0 snap-center"
              initial={reduced ? false : { opacity: 0, rotateZ: -4, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, rotateZ: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
            >
              <Link
                href={article.link}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="360px"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#93C5FD]">
                    {article.category}
                  </p>
                  <h3 className="mt-2 line-clamp-3 flex-1 text-base font-bold text-white group-hover:text-[#93C5FD]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-xs text-white/60">
                    {article.date} · {article.author}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsInsights() {
  const reduced = usePrefersReducedMotion();
  const articles = oamsConfig.insights.articles;

  return (
    <section className="section-app border-t border-white/10 bg-surface-dark py-20 sm:py-24">
      <div className="container-app">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-h2 font-black text-white md:text-display">{oamsConfig.insights.title}</h2>
          <Link
            href="/blogs"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white hover:bg-white hover:text-black"
          >
            View all insights
          </Link>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              className="mb-5 break-inside-avoid"
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.06, duration: 0.45 }}
            >
              <Link
                href={article.link}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-black/50"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    {article.category}
                  </p>
                  <h3 className="mt-2 line-clamp-3 text-base font-bold text-white group-hover:text-emerald-300">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/60">
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

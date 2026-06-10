"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { rpmConfig } from "@/lib/rpm-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RpmInsights() {
  const reduced = usePrefersReducedMotion();
  const articles = rpmConfig.insights.articles;

  return (
    <section className="section-app border-t border-white/8 bg-[#0a0f1a] py-20 sm:py-24">
      <div className="container-app">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-h2 font-black text-white md:text-display">{rpmConfig.insights.title}</h2>
          <Link
            href="/blogs"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-cyan-500/30 px-6 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/10"
          >
            View all insights
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              className="w-[min(88vw,340px)] shrink-0"
              initial={reduced ? false : { opacity: 0, x: 60 }}
              whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Link
                href={article.link}
                className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="340px"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                    {article.category}
                  </p>
                  <h3 className="mt-2 line-clamp-3 text-base font-bold text-white group-hover:text-cyan-300">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/55">
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

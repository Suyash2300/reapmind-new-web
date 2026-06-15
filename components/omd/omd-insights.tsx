"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { omdConfig } from "@/lib/omd-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type InsightCardProps = {
  article: (typeof omdConfig.insights.articles)[number];
  index: number;
  reduced: boolean;
};

function InsightCard({ article, index, reduced }: InsightCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const imageY = useMotionValue(0);
  const shineX = useMotionValue(180);
  const shineY = useMotionValue(120);
  const shine = useMotionTemplate`radial-gradient(300px circle at ${shineX}px ${shineY}px, rgba(13,148,136,0.26), transparent 60%)`;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated"
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.04, duration: 0.45 }}
      onMouseMove={(event) => {
        if (reduced) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        rotateX.set((rect.height / 2 - y) / 26);
        rotateY.set((x - rect.width / 2) / 26);
        imageY.set((rect.height / 2 - y) / 10);
        shineX.set(x);
        shineY.set(y);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        imageY.set(0);
      }}
      style={reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {!reduced && <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: shine }} />}
      <div className="relative aspect-video overflow-hidden">
        <motion.div
          className="relative h-full w-full"
          style={reduced ? undefined : { y: imageY }}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </motion.div>
      </div>
      <div className="relative z-20 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5eead4]">{article.category}</p>
        <h3 className="mt-2 line-clamp-3 text-base font-bold text-white group-hover:text-[#5eead4]">{article.title}</h3>
        <p className="mt-3 text-xs text-white/60">
          {article.date} · {article.author}
        </p>
      </div>
    </motion.article>
  );
}

export function OmdInsights() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-h2 font-black text-white md:text-display">{omdConfig.insights.title}</h2>
          <Link
            href="/blogs"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            View all insights
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {omdConfig.insights.articles.map((article, index) => (
            <Link key={article.title} href={article.link} className="block h-full">
              <InsightCard article={article} index={index} reduced={reduced} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

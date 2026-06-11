"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { shortVideoAppInsights } from "@/lib/short-video-app-config";

export function SvadInsightsSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section ref={sectionRef} className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="svad-insights-heading">
      <div className="container-app">
        <motion.div style={reducedMotion ? undefined : { y: headerY }}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <BlurFadeIn as="h2" id="svad-insights-heading" className="text-h3 font-bold text-white sm:text-h2">
              Latest Insights
            </BlurFadeIn>
            <BlurFadeIn delay={0.06}>
              <Link href="/blogs" className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white hover:bg-white hover:text-black">
                View all insights
              </Link>
            </BlurFadeIn>
          </div>
        </motion.div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {shortVideoAppInsights.map((article, index) => (
            <motion.div
              key={`${article.link}-${article.date}`}
              initial={reducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.06, duration: 0.5 }}
              className="mb-5 break-inside-avoid"
            >
              <Link href={article.link} className="group block overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/50">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-orange-400">{article.category}</p>
                  <h3 className="mt-2 line-clamp-3 text-base font-bold text-white group-hover:text-primary">{article.title}</h3>
                  <p className="mt-2 text-xs text-white/55">{article.date} · {article.author}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

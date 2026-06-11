"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { datingAppInsights } from "@/lib/dating-app-config";

export function DadInsightsSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="dad-insights-heading">
      <div className="container-app">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <BlurFadeIn as="h2" id="dad-insights-heading" className="text-h3 font-bold text-white sm:text-h2">
            Latest Insights
          </BlurFadeIn>
          <BlurFadeIn delay={0.06}>
            <Link
              href="/blogs"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
            >
              View all insights
            </Link>
          </BlurFadeIn>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {datingAppInsights.map((article, index) => (
            <motion.div
              key={`${article.link}-${index}`}
              initial={reducedMotion ? false : { opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: (index % 3) * 0.07, duration: 0.55 }}
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
            >
              <Link
                href={article.link}
                className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/50"
              >
                <div className="relative aspect-video overflow-hidden">
                  {article.image && (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-400">{article.category}</p>
                  <h3 className="mt-2 line-clamp-3 text-base font-bold text-white transition-colors group-hover:text-primary sm:text-lg">
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { professionalNetworkingInsights } from "@/lib/professional-networking-config";

export function PnpInsightsSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="pnp-insights-heading">
      <div className="container-app">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <BlurFadeIn as="h2" id="pnp-insights-heading" className="text-h3 font-bold text-white sm:text-h2">
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

        <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {professionalNetworkingInsights.map((article, index) => (
            <motion.div
              key={`${article.link}-${article.date}`}
              initial={reducedMotion ? false : { opacity: 0, rotateZ: -3, x: 40 }}
              whileInView={{ opacity: 1, rotateZ: 0, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              whileHover={reducedMotion ? undefined : { rotateZ: 1, y: -4 }}
              className="w-[min(88vw,340px)] shrink-0"
            >
              <Link
                href={article.link}
                className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/50"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="340px"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">{article.category}</p>
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingInsights } from "@/lib/social-networking-config";

export function SnInsightsSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -6]);

  return (
    <section ref={sectionRef} className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="sn-insights-heading">
      <div className="container-app">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <BlurFadeIn as="h2" id="sn-insights-heading" className="text-h3 font-bold text-white sm:text-h2">
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

        <motion.div
          style={reducedMotion ? undefined : { rotateX, transformPerspective: 900 }}
          className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {socialNetworkingInsights.map((article, index) => (
            <motion.div
              key={`${article.link}-${index}`}
              initial={reducedMotion ? false : { opacity: 0, z: -80, rotateY: 12 }}
              whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.04, duration: 0.55 }}
              whileHover={reducedMotion ? undefined : { z: 20, rotateY: -4, y: -6 }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-[min(88vw,340px)] shrink-0 snap-center"
            >
              <Link
                href={article.link}
                className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/50 shadow-[0_20px_50px_-20px_rgba(168,85,247,0.25)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  {article.image && (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="340px"
                    />
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-violet-400">{article.category}</p>
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
        </motion.div>
      </div>
    </section>
  );
}

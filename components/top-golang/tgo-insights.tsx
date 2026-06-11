"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoInsights() {
  const { insights } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const skew = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -2]);

  return (
    <section ref={ref} className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tgo-insights-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tgo-insights-heading" className="text-h3 font-bold text-white sm:text-h2">
          {insights.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {insights.intro}
        </BlurFadeIn>
        <motion.div
          style={reducedMotion ? undefined : { skewY: skew }}
          className="mt-10 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {insights.items.map((post, i) => (
            <motion.article
              key={post.title}
              initial={reducedMotion ? false : { opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={reducedMotion ? undefined : { y: -8, rotateY: 5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-[min(88vw,320px)] shrink-0 snap-center"
            >
              <Link href={post.link} className="group block overflow-hidden rounded-2xl border border-[#00ADD8]/20 bg-[#0a1014]">
                <div className="relative aspect-video">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="320px" />
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-3 text-base font-bold text-white group-hover:text-[#00ADD8]">{post.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-white/60">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

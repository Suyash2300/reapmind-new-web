"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyInsights() {
  const { insights } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);

  return (
    <section ref={ref} className="bg-[#0a1628] py-14 md:py-20" aria-labelledby="tpy-insights-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tpy-insights-heading" className="text-h3 font-bold text-white sm:text-h2">
          {insights.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {insights.intro}
        </BlurFadeIn>

        <motion.div
          style={reducedMotion ? undefined : { rotateY, transformPerspective: 900 }}
          className="mt-10 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {insights.items.map((post, i) => (
            <motion.article
              key={post.title}
              initial={reducedMotion ? false : { opacity: 0, z: -60, rotateX: 10 }}
              whileInView={{ opacity: 1, z: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              whileHover={reducedMotion ? undefined : { y: -8, rotateY: -3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-[min(88vw,340px)] shrink-0 snap-center"
            >
              <Link href={post.link} className="group block h-full overflow-hidden rounded-2xl border border-[#3776AB]/30 bg-black/50">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="340px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-3 text-base font-bold text-white transition-colors group-hover:text-[#FFD43B] sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm text-white/60">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

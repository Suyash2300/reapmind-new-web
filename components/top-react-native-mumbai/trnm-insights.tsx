"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmInsights() {
  const { insights } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  return (
    <section ref={ref} className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="trnm-insights-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="trnm-insights-heading" className="text-h3 font-bold text-white sm:text-h2">
          {insights.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {insights.intro}
        </BlurFadeIn>
        <motion.div
          style={reducedMotion ? undefined : { scale }}
          className="mt-10 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {insights.items.map((post, i) => (
            <motion.article
              key={post.title}
              initial={reducedMotion ? false : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={reducedMotion ? undefined : { y: -10 }}
              className="w-[min(88vw,340px)] shrink-0 snap-center"
            >
              <Link href={post.link} className="group block overflow-hidden rounded-2xl border border-[#61DAFB]/20 bg-[#0b0f14]">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="340px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-3 text-base font-bold text-white group-hover:text-[#61DAFB]">{post.title}</h3>
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

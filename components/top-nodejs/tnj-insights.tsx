"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjInsights() {
  const { insights } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tnj-insights-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tnj-insights-heading" className="text-h3 font-bold text-white sm:text-h2">
          {insights.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {insights.intro}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {insights.items.map((post, i) => (
            <motion.article
              key={post.title}
              initial={reducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              whileHover={reducedMotion ? undefined : { y: -6 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <Link href={post.link} className="block">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.9 }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="line-clamp-3 text-base font-bold text-white transition-colors group-hover:text-[#339933] sm:text-lg">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm text-white/60">{post.excerpt}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

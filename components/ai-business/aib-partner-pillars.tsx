"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { aiBusinessConfig } from "@/lib/ai-business-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function AibPartnerPillars() {
  const { partnerPillars } = aiBusinessConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="aib-partner-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="aib-partner-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {partnerPillars.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {partnerPillars.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: smoothEase }}
              whileHover={reducedMotion ? undefined : { y: -4 }}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/50"
            >
              <div className="relative h-52 overflow-hidden sm:h-60 md:h-64">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  quality={92}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: item.imagePosition ?? "center center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <span
                  className="absolute left-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
                  style={{ backgroundColor: `${item.accent}55` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-subtitle font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

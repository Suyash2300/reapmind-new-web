"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingConfig } from "@/lib/social-networking-config";

function FlipFeatureCard({
  title,
  description,
  accent,
  index,
  wide,
}: {
  title: string;
  description: string;
  accent: string;
  index: number;
  wide?: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 32, rotateX: 12 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.05, duration: 0.55 }}
      className={`group ${wide ? "sm:col-span-2" : ""}`}
      style={{ perspective: 1000 }}
      onMouseEnter={() => !reducedMotion && setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative min-h-[160px] cursor-pointer"
      >
        <div
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-white/10 p-5 sm:p-6"
          style={{ backfaceVisibility: "hidden", background: `linear-gradient(135deg, ${accent}18 0%, rgba(0,0,0,0.4) 100%)`, borderColor: `${accent}33` }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold" style={{ backgroundColor: `${accent}25`, color: accent }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base font-bold text-white sm:text-lg">{title}</h3>
        </div>
        <div
          className="absolute inset-0 flex items-center rounded-2xl border p-5 sm:p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)", borderColor: `${accent}44`, backgroundColor: "rgba(0,0,0,0.85)" }}
        >
          <p className="text-sm leading-relaxed text-white/70 sm:text-para">{description}</p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function SnFeatures() {
  const { features } = socialNetworkingConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="sn-features-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="sn-features-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {features.title}
        </BlurFadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.items.map((item, i) => (
            <FlipFeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              accent={item.accent}
              index={i}
              wide={i === 2 || i === 5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

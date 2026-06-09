"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GaiTrustBand } from "@/components/generative-ai/gai-trust-band";
import { FadeIn } from "@/components/motion/fade-in";
import { generativeAiConfig } from "@/lib/generative-ai-config";

export function GaiWhyUsSection() {
  const { whyUs, cta } = generativeAiConfig;
  const firstRow = whyUs.items.slice(0, 2);
  const secondRow = whyUs.items.slice(2);

  return (
    <section className="section-app bg-black py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn className="mx-auto mb-10 max-w-4xl text-center lg:mb-14">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            Why Us
          </span>
          <h2 className="text-h2 font-black leading-tight text-white sm:text-display">
            {whyUs.title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {firstRow.map((item, i) => (
            <WhyUsCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <FadeIn className="my-10 lg:my-12">
          <GaiTrustBand />
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {secondRow.map((item, i) => (
            <WhyUsCard key={item.title} item={item} index={i + 2} />
          ))}
        </div>

        {cta?.label ? (
          <FadeIn className="mt-12 text-center">
            <Link
              href={cta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.55)] transition-colors hover:bg-primary-hover"
            >
              {cta.label}
            </Link>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}

function WhyUsCard({
  item,
  index,
}: {
  item: { title: string; description: string };
  index: number;
}) {
  return (
    <FadeIn delay={0.05 * index}>
      <motion.div
        className="group relative rounded-2xl border border-transparent p-1 transition-colors hover:border-white/10"
        whileHover={{ x: 6 }}
      >
        <div className="mb-4 text-2xl font-black text-primary/50">
          {String(index + 1).padStart(2, "0")}.
        </div>
        <h3 className="mb-3 text-h5 font-bold text-white transition-colors duration-300 group-hover:text-primary">
          {item.title}
        </h3>
        <p className="pr-6 text-para leading-relaxed text-white/60">{item.description}</p>
        <div className="absolute -bottom-4 left-0 h-0.5 w-12 bg-primary/30 transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
      </motion.div>
    </FadeIn>
  );
}

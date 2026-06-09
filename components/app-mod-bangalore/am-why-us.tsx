"use client";

import { GaiTrustBand } from "@/components/generative-ai/gai-trust-band";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

export function AmWhyUs() {
  const { whyUs } = appModBangaloreConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="text-h3 font-bold text-white sm:text-h2">{whyUs.title}</h2>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.slice(0, 3).map((item, i) => (
            <WhyCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <FadeIn className="my-10">
          <GaiTrustBand />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {whyUs.items.slice(3).map((item, i) => (
            <WhyCard key={item.title} item={item} index={i + 3} />
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white hover:bg-primary-hover"
          >
            {whyUs.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function WhyCard({
  item,
  index,
}: {
  item: { title: string; description: string };
  index: number;
}) {
  return (
    <FadeIn delay={0.05 * index}>
      <motion.article
        whileHover={{ y: -4 }}
        className="h-full rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6"
      >
        <span className="text-sm font-bold tabular-nums text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-2 text-h5 font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-para text-white/60">{item.description}</p>
      </motion.article>
    </FadeIn>
  );
}

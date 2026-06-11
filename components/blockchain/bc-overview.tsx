"use client";

import Link from "next/link";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { BcBlockchainShowcase } from "@/components/blockchain/bc-blockchain-showcase";
import { blockchainConfig } from "@/lib/blockchain-config";

export function BcOverview() {
  const { overview } = blockchainConfig;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="bc-overview-heading">
      <div className="container-app">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="bc-overview-heading" className="text-h3 font-bold text-white sm:text-h2">
              {overview.title}
            </BlurFadeIn>
            <div className="mt-6 space-y-4">
              {overview.paragraphs.map((paragraph, i) => (
                <BlurFadeIn key={paragraph.slice(0, 48)} as="p" delay={0.06 + i * 0.05} className="text-para leading-relaxed text-white/65">
                  <WordReveal text={paragraph} delay={0.08 + i * 0.04} />
                </BlurFadeIn>
              ))}
            </div>
            <BlurFadeIn delay={0.2} className="mt-8">
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {overview.cta}
              </Link>
            </BlurFadeIn>
          </div>

          <BlurFadeIn delay={0.1} className="lg:sticky lg:top-24">
            <BcBlockchainShowcase />
          </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}

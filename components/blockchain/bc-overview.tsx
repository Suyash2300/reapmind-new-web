"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { blockchainConfig } from "@/lib/blockchain-config";

export function BcOverview() {
  const { overview } = blockchainConfig;

  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-10">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{overview.title}</h2>
            <div className="mt-5 space-y-4">
              {overview.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-para leading-relaxed text-white/65">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-8 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              {overview.cta}
            </Link>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border-strong sm:aspect-[5/6] lg:sticky lg:top-24">
              <Image
                src={overview.image}
                alt="Blockchain development in Dubai"
                fill
                quality={92}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

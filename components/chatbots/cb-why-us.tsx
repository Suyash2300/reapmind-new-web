"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { chatbotsConfig } from "@/lib/chatbots-config";

export function CbWhyUs() {
  const { whyUs } = chatbotsConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{whyUs.title}</h2>
            <div className="mt-5 space-y-4">
              {whyUs.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-para leading-relaxed text-white/65">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {whyUs.cta}
            </Link>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-border-strong sm:aspect-[5/4]">
              <Image
                src={whyUs.promoImage.src}
                alt={whyUs.promoImage.alt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

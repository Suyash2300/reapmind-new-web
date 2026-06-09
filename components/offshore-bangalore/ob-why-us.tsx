"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { offshoreBangaloreConfig } from "@/lib/offshore-bangalore-config";

export function ObWhyUs() {
  const { whyUs } = offshoreBangaloreConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="ob-why-us-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="ob-why-us-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {whyUs.title}
          </h2>
          <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">{whyUs.intro}</p>
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <FadeIn delay={0.06}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated sm:aspect-[5/6] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={whyUs.promoImage.src}
                alt={whyUs.promoImage.alt}
                fill
                quality={92}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                aria-hidden
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="space-y-4">
              {whyUs.bullets.map((bullet) => (
                <li
                  key={bullet.slice(0, 40)}
                  className="rounded-2xl border border-border-strong bg-surface-elevated p-5 text-para leading-relaxed text-white/70 sm:p-6"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="mt-8 text-center lg:mt-10">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.45)] transition-colors hover:bg-primary-hover"
          >
            {whyUs.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { metaverseConfig } from "@/lib/metaverse-config";

export function MvHero() {
  const { hero } = metaverseConfig;
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-10 pt-10 text-primary-foreground md:pb-12 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_0%,rgba(26,105,253,0.15),transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-10">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {hero.badge}
            </p>
            <h1 className="mt-3 text-h2 font-bold tracking-tight text-white sm:text-h1">
              {hero.heading}
            </h1>
            <p className="mt-4 max-w-2xl text-md leading-relaxed text-white/75 sm:text-lg">
              {hero.description}
            </p>
            <Link
              href="/contact-us#free-consultation"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              {hero.cta}
            </Link>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6">
              <h2 className="text-h5 font-bold text-white">Have a Idea? Contact Us</h2>
              <p className="mt-2 text-sm text-white/60">
                Free consultation within 24 hours — tell us about your metaverse project.
              </p>
              <div className="mt-5">
                <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

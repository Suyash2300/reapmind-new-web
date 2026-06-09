"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";

export type WhyUsItem = {
  readonly title: string;
  readonly description: string;
};

type ServiceWhyUsSectionProps = {
  title: string;
  items: ReadonlyArray<WhyUsItem>;
  cta?: { label: string; href: string };
  promoImage?: { src: string; alt: string };
};

export function ServiceWhyUsSection({
  title,
  items,
  cta,
  promoImage,
}: ServiceWhyUsSectionProps) {
  const firstRow = items.slice(0, 2);
  const secondRow = items.slice(2);

  return (
    <section className="section-app bg-black py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn className="mx-auto mb-10 max-w-4xl text-center lg:mb-14">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
            Why Us
          </span>
          <h2 className="text-h2 font-black leading-tight text-white sm:text-display">
            {title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {firstRow.map((item, i) => (
            <WhyUsCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {promoImage ? (
          <FadeIn className="my-10 lg:my-12">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated">
              <div className="relative aspect-[21/9] sm:aspect-[24/9]">
                <Image
                  src={promoImage.src}
                  alt={promoImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"
                  aria-hidden
                />
              </div>
            </div>
          </FadeIn>
        ) : null}

        {secondRow.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
            {secondRow.map((item, i) => (
              <WhyUsCard key={item.title} item={item} index={i + 2} />
            ))}
          </div>
        ) : null}

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

function WhyUsCard({ item, index }: { item: WhyUsItem; index: number }) {
  return (
    <FadeIn delay={0.05 * index}>
      <motion.div className="group relative" whileHover={{ x: 6 }}>
        <div className="mb-4 text-2xl font-black text-primary/50">
          {String(index + 1).padStart(2, "0")}.
        </div>
        <h3 className="mb-3 text-h5 font-bold text-white transition-colors duration-300 group-hover:text-primary">
          {item.title}
        </h3>
        <p className="pr-6 text-para leading-relaxed text-white/60">
          {item.description}
        </p>
        <div className="absolute -bottom-4 left-0 h-0.5 w-12 bg-primary/30 transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
      </motion.div>
    </FadeIn>
  );
}

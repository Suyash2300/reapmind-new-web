"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import type { PortfolioItem } from "@/lib/recent-works-portfolio";

type ServicePortfolioSectionProps = {
  items: PortfolioItem[];
  eyebrow?: string;
  title?: string;
  cta?: { label: string; href: string };
};

export function ServicePortfolioSection({
  items,
  eyebrow = "Portfolio",
  title = "Our Recent Works",
  cta,
}: ServicePortfolioSectionProps) {
  return (
    <section className="section-app bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-4 max-w-3xl text-h2 font-bold leading-none text-white sm:text-display">
            {title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={0.04 * i}>
              <Link href={item.link} className="block h-full">
                <motion.div
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface-elevated transition-all duration-500 hover:border-primary/30"
                  whileHover={{ y: -4 }}
                >
                  <div className="relative aspect-[16/10] bg-[#050505]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain object-center p-4 transition-transform duration-500 group-hover:scale-[1.02] sm:p-5"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-white/10 p-5 sm:p-6">
                    <span className="self-start rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/65">
                      {item.category}
                    </span>
                    <h3 className="mt-3 text-h5 font-bold leading-snug text-white transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {cta ? (
          <FadeIn className="mt-10 text-center">
            <Link
              href={cta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {cta.label}
            </Link>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}

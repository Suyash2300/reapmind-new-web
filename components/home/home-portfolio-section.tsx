"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { portfolioListing } from "@/lib/portfolio";
import { PortfolioClockCarousel } from "./portfolio-clock-carousel";

export function HomePortfolioSection() {
  return (
    <section className="overflow-hidden bg-black py-10 text-primary-foreground md:py-12 lg:py-16">
      <div className="container-app">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-h3 font-bold text-white sm:text-h2">
            {portfolioListing.title}
          </h2>
          <p className="mt-4 text-para leading-relaxed text-white/65">
            {portfolioListing.description}
          </p>
        </FadeIn>

        <div className="mt-6 sm:mt-8">
          <PortfolioClockCarousel />
        </div>

        <FadeIn className="mt-8 flex justify-center sm:mt-10">
          <Link
            href={portfolioListing.viewAllHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-primary hover:bg-white/5"
          >
            {portfolioListing.viewAllLabel}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

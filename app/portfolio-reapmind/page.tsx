import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioListingGrid } from "@/components/portfolio/portfolio-listing-grid";
import { portfolioListingPage } from "@/lib/portfolio-listing";

export const metadata: Metadata = {
  title: portfolioListingPage.metaTitle,
  description: portfolioListingPage.metaDescription,
  alternates: {
    canonical: portfolioListingPage.canonical,
  },
  openGraph: {
    title: portfolioListingPage.metaTitle,
    description: portfolioListingPage.metaDescription,
    url: portfolioListingPage.canonical,
    type: "website",
  },
};

export default function PortfolioListingPage() {
  return (
    <main className="bg-black text-primary-foreground">
      <section className="relative overflow-hidden pb-10 pt-12 md:pb-14 md:pt-16 lg:pb-16 lg:pt-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
        >
          <div className="absolute -left-32 top-0 size-[420px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -right-24 top-1/3 size-[360px] rounded-full bg-primary/10 blur-[100px]" />
        </div>

        <div className="container-app relative">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            {portfolioListingPage.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-h2 font-bold tracking-tight text-white sm:text-h1">
            {portfolioListingPage.title}
          </h1>
          <p className="mt-5 max-w-2xl text-para leading-relaxed text-white/65">
            {portfolioListingPage.subtitle}
          </p>
        </div>
      </section>

      <section className="section-app border-t border-white/5 pt-0">
        <div className="container-app">
          <PortfolioListingGrid />
        </div>
      </section>

      <section className="border-t border-white/5 py-12 md:py-16">
        <div className="container-app flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-xl">
            <h2 className="text-h4 font-bold text-white sm:text-h3">
              Ready to build your next product?
            </h2>
            <p className="mt-2 text-para text-white/60">
              From MVP to enterprise scale — let&apos;s ship something your
              users will love.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Get free consultation
          </Link>
        </div>
      </section>
    </main>
  );
}

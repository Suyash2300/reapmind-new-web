"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { remoteContractConfig } from "@/lib/remote-contract-config";

export function RcPricing() {
  const { pricing } = remoteContractConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="rc-pricing-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="rc-pricing-heading" className="text-h3 font-bold text-white sm:text-h2">
            {pricing.title}
          </h2>
          <p className="mt-4 max-w-3xl text-para text-white/65">{pricing.intro}</p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-4 font-bold text-white">Region</th>
                {pricing.columns.map((col) => (
                  <th key={col} className="px-4 py-4 font-bold text-white/80">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricing.rows.map((row) => (
                <tr
                  key={row.region}
                  className={`border-b border-white/5 ${
                    row.highlight ? "bg-primary/10" : "bg-transparent"
                  }`}
                >
                  <td className="px-4 py-4 font-semibold text-white">{row.region}</td>
                  {row.rates.map((rate) => (
                    <td key={rate} className="px-4 py-4 text-white/70">
                      {rate}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>

        <FadeIn className="mt-8 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {pricing.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { metaverseConfig } from "@/lib/metaverse-config";

export function MvTrustedPartner() {
  const { trustedPartner } = metaverseConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="mv-trusted-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2 id="mv-trusted-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {trustedPartner.title}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
            {trustedPartner.intro}
          </p>
        </FadeIn>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {trustedPartner.stats.map((stat, i) => (
            <FadeIn key={stat.slice(0, 30)} delay={0.04 + i * 0.03}>
              <li className="rounded-2xl border border-border-strong bg-surface-elevated px-5 py-4 text-sm leading-relaxed text-white/70 sm:text-para">
                {stat}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

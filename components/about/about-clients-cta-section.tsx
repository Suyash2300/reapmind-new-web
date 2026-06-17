"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import {
  aboutOurCompanyClients,
  aboutOurCompanyCta,
  aboutOurCompanyStats,
} from "@/lib/about-our-company";

export function AboutClientsCtaSection() {
  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="text-h3 font-bold text-white sm:text-h2">
            {aboutOurCompanyClients.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-10">
            {aboutOurCompanyClients.logos.map((logo) => (
              <li
                key={logo.name}
                className="flex items-center justify-center opacity-80 transition-opacity hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={56}
                  className="h-10 w-auto max-w-[120px] object-contain brightness-0 invert sm:h-12 sm:max-w-[140px]"
                />
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-10 grid grid-cols-2 divide-x divide-y divide-white/10 overflow-hidden rounded-2xl border border-border-strong bg-surface-elevated lg:grid-cols-4 lg:divide-y-0">
            {aboutOurCompanyStats.map((stat, index) => (
              <article
                key={stat.label}
                className={`flex flex-col items-center justify-center px-4 py-6 text-center sm:py-8 ${
                  index % 2 === 1 ? "border-l border-white/10 lg:border-l-0" : ""
                } ${index >= 2 ? "border-t border-white/10 lg:border-t-0" : ""} ${
                  index > 0 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                <p className="text-h2 font-bold tabular-nums text-accent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/65">{stat.label}</p>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-10 text-center">
          <h3 className="text-h4 font-bold text-white sm:text-h3">
            {aboutOurCompanyCta.title}
          </h3>
          <p className="mt-2 text-para text-white/60">{aboutOurCompanyCta.body}</p>
          <Link
            href={aboutOurCompanyCta.href}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            {aboutOurCompanyCta.buttonLabel}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { servicesNavGroups } from "@/lib/services-page";

export function ServicesLinksSection() {
  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 text-primary-foreground md:py-12"
      aria-labelledby="services-links-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2
            id="services-links-heading"
            className="text-h4 font-bold text-white sm:text-h3"
          >
            Explore delivery lanes
          </h2>
          <p className="mt-2 max-w-2xl text-para text-white/60">
            Jump straight into the service pages we build and ship for clients
            worldwide.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesNavGroups.map((group) => (
            <FadeIn key={group.title} delay={0.06}>
              <div className="h-full rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-sm font-semibold text-white/75 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

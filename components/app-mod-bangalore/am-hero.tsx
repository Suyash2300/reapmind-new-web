"use client";

import Link from "next/link";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

type HeroConfig = {
  badge: string;
  heading: string;
  description: string;
  cta: string;
  image: string;
  fallbackImage: string;
};

type AmHeroProps = {
  hero?: HeroConfig;
  formSubtitle?: string;
};

export function AmHero({
  hero: heroProp,
  formSubtitle = "Free consultation within 24 hours — tell us about your app.",
}: AmHeroProps = {}) {
  const hero = heroProp ?? appModBangaloreConfig.hero;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-10 pt-10 text-primary-foreground md:pb-12 md:pt-12 lg:pt-14">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(26,105,253,0.18),transparent)]"
        aria-hidden
      />

      <div className="container-app relative">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-10">
          <div>
            <StaggerGrid className="space-y-4">
              <StaggerItem>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  {hero.badge}
                </p>
              </StaggerItem>
              <StaggerItem>
                <h1 className="text-h2 font-bold tracking-tight text-white sm:text-h1">
                  {hero.heading}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="max-w-2xl text-md leading-relaxed text-white/75 sm:text-lg">
                  {hero.description}
                </p>
              </StaggerItem>
              <StaggerItem>
                <Link
                  href="/contact-us#free-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.5)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
                >
                  {hero.cta}
                </Link>
              </StaggerItem>
            </StaggerGrid>
          </div>

          <FadeIn delay={0.08}>
            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6 lg:sticky lg:top-24">
              <h2 className="text-h5 font-bold text-white">Have a Idea? Contact Us</h2>
              <p className="mt-2 text-sm text-white/60">{formSubtitle}</p>
              <div className="mt-4">
                <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { homeWhyChooseUs } from "@/lib/home-why-choose-us";

function WhyChooseIcon({ id }: { id: string }) {
  const className = "size-6 text-primary";

  switch (id) {
    case "expertly-priced":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "coding-mastery":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="m16 18 6-6-6-6M8 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "data-driven":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M3 3v18h18M7 16l4-4 4 4 5-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flawless-apps":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect
            x="7"
            y="2"
            width="10"
            height="20"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M11 18h2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      );
    case "top-talent":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "no-risk":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "premium-quality":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "stunning-design":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17ZM19 13l.5 1.5L21 15l-1.5.5L19 17l-.5-1.5L17 15l1.5-.5L19 13Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function HomeWhyChooseUsSection() {
  return (
    <section
      className="bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Why ReapMind
            </p>
            <h2
              id="why-choose-us-heading"
              className="mt-4 text-h3 font-bold tracking-tight text-white sm:text-h2"
            >
              {homeWhyChooseUs.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-4 text-para leading-relaxed text-white/70 sm:text-md">
              {homeWhyChooseUs.subtitle}
            </p>
          </FadeIn>
        </div>

        <StaggerGrid className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {homeWhyChooseUs.items.map((item) => (
            <StaggerItem key={item.id} className="h-full" hoverable>
              <article className="group flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated p-4 transition-[box-shadow,border-color,background-color] duration-200 ease-out hover:border-primary hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(26,105,253,0.35)] sm:p-5">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 transition-colors group-hover:bg-primary/20 sm:size-12">
                  <WhyChooseIcon id={item.id} />
                </div>
                <h3 className="mt-4 text-subtitle font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-para leading-snug text-white/60 transition-colors group-hover:text-white/75">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

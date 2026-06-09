"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { aiCopilotConfig } from "@/lib/ai-copilot-config";

const ICONS = ["team", "custom", "integrate", "excellence"] as const;

function WhyIcon({ type }: { type: (typeof ICONS)[number] }) {
  const className = "size-6 text-primary";

  switch (type) {
    case "team":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4 19c0-2.5 2.2-4 5-4M14 19c0-1.8 1.6-3 3.5-3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "custom":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="M12 3 4 7v6c0 4.5 3.4 7.4 8 9 4.6-1.6 8-4.5 8-9V7l-8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "integrate":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <rect x="3" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="13" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M11 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
          <path
            d="m12 3 2.4 4.8 5.3.8-3.8 3.7.9 5.3L12 15.8 7.2 17.6l.9-5.3L4.3 8.6l5.3-.8L12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function AcWhyUsSection() {
  const { whyUs } = aiCopilotConfig;

  return (
    <section
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="ac-why-us-heading"
    >
      <div className="container-app">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Why Us</p>
          <h2 id="ac-why-us-heading" className="mt-3 max-w-3xl text-h3 font-bold text-white sm:text-h2">
            {whyUs.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-5 lg:items-stretch">
          <FadeIn delay={0.06}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated sm:aspect-[5/6] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={whyUs.promoImage.src}
                alt={whyUs.promoImage.alt}
                fill
                quality={92}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Expert delivery team
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  AI specialists who design, build, and integrate copilots tailored to your workflows.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.items.map((item, i) => (
              <FadeIn key={item.title} delay={0.08 + i * 0.05}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                    <WhyIcon type={ICONS[i] ?? "excellence"} />
                  </div>
                  <h3 className="mt-4 text-subtitle font-bold text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60 sm:text-para">
                    {item.description}
                  </p>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.15} className="mt-8 text-center lg:mt-10">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.45)] transition-colors hover:bg-primary-hover"
          >
            {whyUs.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

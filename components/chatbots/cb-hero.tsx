"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { CbChatVisual } from "@/components/chatbots/cb-chat-visual";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CB_ACCENT, chatbotsConfig } from "@/lib/chatbots-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function CbHero() {
  const { hero } = chatbotsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [bgFailed, setBgFailed] = useState(false);
  const bgSrc = bgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={bgSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.14]"
          priority
          quality={90}
          onError={() => setBgFailed(true)}
        />
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 85% 65% at 50% -15%, rgba(26,105,253,0.28), transparent)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_90%_75%,rgba(34,211,238,0.1),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/95 to-black" />
      </div>

      <div className="container-app relative">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {hero.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < hero.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-[#1A69FD]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <MountBlurFade as="p" className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
              {hero.badge}
            </MountBlurFade>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Chatbot" />
            </div>

            <MountBlurFade as="p" delay={0.4} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: smoothEase }}
              className="mt-8"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.55)] transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: CB_ACCENT }}
              >
                {hero.cta}
              </Link>
            </motion.div>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {hero.trustPills.map((pill, i) => (
                <motion.div
                  key={pill.label}
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.07, duration: 0.45, ease: smoothEase }}
                  className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-black/40 px-3 py-2.5"
                >
                  <span className="text-sm" aria-hidden>
                    {pill.icon}
                  </span>
                  <span className="text-xs font-medium leading-snug text-white/65">{pill.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.25, duration: 0.85, ease: smoothEase }}
            className="space-y-4"
          >
            <CbChatVisual />
            <div className="rounded-[1.75rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md sm:p-6">
              <h2 className="text-h5 font-bold text-white">{hero.formTitle}</h2>
              <p className="mt-2 text-sm text-white/60">
                Free consultation within 24 hours — tell us about your chatbot project.
              </p>
              <div className="mt-5">
                <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

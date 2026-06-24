"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { groceryDeliveryConfig } from "@/lib/grocery-delivery-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const FLOW_STEPS = [
  { label: "Browse", sub: "Search & filter" },
  { label: "Order", sub: "Pay securely" },
  { label: "Track", sub: "Live updates" },
  { label: "Deliver", sub: "On schedule" },
] as const;

export function GdsHero() {
  const { hero } = groceryDeliveryConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover opacity-[0.22]" priority onError={() => setImgFailed(true)} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_0%,rgba(16,185,129,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_90%_20%,rgba(26,105,253,0.15),transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400"
            >
              {hero.badge}
            </motion.p>
            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Services" />
            </div>
            <MountBlurFade as="p" delay={0.45} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.55, ease: smoothEase }}
              className="mt-7"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.5)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8, ease: smoothEase }}
            className="space-y-4"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/45 p-5 backdrop-blur-md sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">Delivery flow</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {FLOW_STEPS.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: smoothEase }}
                    className="rounded-xl border border-white/10 bg-surface-elevated/80 px-3 py-3 text-center"
                  >
                    <span className="text-[10px] font-bold tabular-nums text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-1 text-sm font-bold text-white">{step.label}</p>
                    <p className="mt-0.5 text-[10px] text-white/45 sm:text-xs">{step.sub}</p>
                  </motion.div>
                ))}
              </div>
              {!reducedMotion && (
                <motion.div
                  className="mt-4 h-1 overflow-hidden rounded-full bg-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-primary to-emerald-400"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    style={{ width: "40%" }}
                  />
                </motion.div>
              )}
            </div>

            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated/95 p-5 backdrop-blur-sm sm:p-6">
              <h2 className="text-h5 font-bold text-white">Have a Idea? Contact Us</h2>
              <p className="mt-2 text-sm text-white/60">{hero.formSubtitle}</p>
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

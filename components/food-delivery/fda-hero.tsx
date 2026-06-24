"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { foodDeliveryConfig } from "@/lib/food-delivery-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const ORDER_FLOW = [
  { label: "Order", icon: "🛒" },
  { label: "Kitchen", icon: "👨‍🍳" },
  { label: "Rider", icon: "🛵" },
  { label: "Delivered", icon: "✓" },
] as const;

export function FdaHero() {
  const { hero } = foodDeliveryConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-contain object-center opacity-[0.12] p-[12%]"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(249,115,22,0.32),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_90%_75%,rgba(239,68,68,0.12),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/95 to-black" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Delivery" />
            </div>

            <MountBlurFade as="p" delay={0.4} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>
            <MountBlurFade as="p" delay={0.52} className="mt-4 max-w-2xl text-md leading-relaxed text-white/65 sm:text-lg">
              {hero.descriptionSecondary}
            </MountBlurFade>
            <MountBlurFade as="p" delay={0.64} className="mt-4 max-w-2xl text-md leading-relaxed text-white/65 sm:text-lg">
              {hero.descriptionTertiary}
            </MountBlurFade>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.6, ease: smoothEase }}
              className="mt-8"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.55)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.25, duration: 0.85, ease: smoothEase }}
            className="relative order-2 mx-auto w-full max-w-[400px] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:ml-auto"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/55 p-4 backdrop-blur-md sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-400/90">Order tracker</p>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">28 min ETA</span>
              </div>

              <div className="relative mt-4 flex items-center justify-between px-1">
                {ORDER_FLOW.map((step, i) => (
                  <div key={step.label} className="relative z-10 flex flex-col items-center">
                    <motion.span
                      initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm ${
                        i <= 2
                          ? "border-orange-400/40 bg-orange-500/20"
                          : "border-white/15 bg-white/5 text-white/40"
                      }`}
                      aria-hidden
                    >
                      {step.icon}
                    </motion.span>
                    <span className="mt-1.5 text-[9px] font-medium text-white/50">{step.label}</span>
                  </div>
                ))}
                <div className="absolute left-[12%] right-[12%] top-[18px] h-px bg-white/10" aria-hidden>
                  {!reducedMotion && (
                    <motion.div
                      className="h-full bg-orange-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1.4, ease: smoothEase, delay: 0.5 }}
                    />
                  )}
                </div>
              </div>

              <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#0a0806]">
                <Image
                  src={hero.appPreview.src}
                  alt={hero.appPreview.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-orange-500/10" aria-hidden />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                {[
                  { label: "Restaurant", value: "Spice Hub" },
                  { label: "Items", value: "3 in cart" },
                  { label: "Total", value: "₹ 649" },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 + i * 0.07, duration: 0.4 }}
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-2"
                  >
                    <p className="text-[9px] text-white/40">{chip.label}</p>
                    <p className="text-[10px] font-semibold text-white">{chip.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.85, ease: smoothEase }}
            className="order-3 rounded-[1.5rem] border border-border-strong bg-surface-elevated/90 p-5 backdrop-blur-md sm:p-6 lg:order-none lg:col-start-1 lg:row-start-2"
          >
            <h2 className="text-h5 font-bold text-white">Have a Idea? Contact Us</h2>
            <p className="mt-2 text-sm text-white/60">{hero.formSubtitle}</p>
            <div className="mt-5">
              <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

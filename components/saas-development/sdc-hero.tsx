"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { saasDevelopmentConfig } from "@/lib/saas-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const METRICS = [
  { label: "MRR", value: "₹ 12.4L", delta: "+18%" },
  { label: "Active users", value: "48.2K", delta: "+6%" },
  { label: "Uptime", value: "99.98%", delta: "SLA" },
] as const;

export function SdcHero() {
  const { hero } = saasDevelopmentConfig;
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
          className="object-contain object-center opacity-[0.1] p-[14%]"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(6,182,212,0.28),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_90%_75%,rgba(26,105,253,0.14),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="SaaS" />
            </div>

            <MountBlurFade as="p" delay={0.4} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>

            <div className="mt-5 flex flex-wrap gap-2">
              {hero.regions.map((region, i) => (
                <motion.span
                  key={region}
                  initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.06, duration: 0.4 }}
                  className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                >
                  {region}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.6, ease: smoothEase }}
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
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/90">SaaS control panel</p>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">All systems go</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {METRICS.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.45, ease: smoothEase }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2.5 text-center"
                  >
                    <p className="text-[9px] text-white/40">{metric.label}</p>
                    <p className="text-xs font-bold text-white">{metric.value}</p>
                    <p className="text-[9px] font-medium text-cyan-400">{metric.delta}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-[#060a12] p-3">
                <div className="flex items-center justify-between text-[10px] text-white/45">
                  <span>Subscription growth</span>
                  <span className="text-cyan-400">Last 6 months</span>
                </div>
                <div className="mt-3 flex h-16 items-end gap-1.5">
                  {[32, 44, 38, 56, 62, 78].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={reducedMotion ? false : { height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.55 + i * 0.07, duration: 0.5, ease: smoothEase }}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/30 to-cyan-400/80"
                      aria-hidden
                    />
                  ))}
                </div>
              </div>

              <div className="mt-3 space-y-2">
                {[
                  { plan: "Enterprise", seats: "240 seats", status: "Active" },
                  { plan: "Pro", seats: "1,120 seats", status: "Active" },
                ].map((row, i) => (
                  <motion.div
                    key={row.plan}
                    initial={reducedMotion ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2"
                  >
                    <div>
                      <p className="text-xs font-semibold text-white">{row.plan}</p>
                      <p className="text-[9px] text-white/40">{row.seats}</p>
                    </div>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[9px] font-semibold text-emerald-400">
                      {row.status}
                    </span>
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

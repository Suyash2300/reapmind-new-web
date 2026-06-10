"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fleetManagementConfig } from "@/lib/fleet-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FmsServicesIntro() {
  const { services } = fleetManagementConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-12 text-primary-foreground md:py-16 lg:py-20"
      aria-labelledby="fms-services-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.04),transparent)]" aria-hidden />

      <div className="container-app relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] lg:items-start lg:gap-16">
          <div>
            <BlurFadeIn as="h2" id="fms-services-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {services.title}
            </BlurFadeIn>

            <div className="mt-8 space-y-6">
              {services.paragraphs.map((p, i) => (
                <BlurFadeIn key={p.slice(0, 48)} as="p" delay={0.06 + i * 0.08} className="text-para leading-relaxed text-white/65">
                  <WordReveal text={p} delay={0.1 + i * 0.05} />
                </BlurFadeIn>
              ))}
            </div>

            <BlurFadeIn delay={0.28} className="mt-10">
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {services.cta}
              </Link>
            </BlurFadeIn>
          </div>

          <div className="space-y-4">
            {services.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? false : { opacity: 0, x: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: smoothEase }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated p-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                <p className="text-3xl font-black tabular-nums text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-white/50">{stat.label}</p>
              </motion.div>
            ))}

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8, ease: smoothEase }}
              className="relative mt-2 aspect-[16/11] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src="/generative-ai/electric-car.png"
                alt="Fleet vehicles under management"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-emerald-500/10" aria-hidden />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

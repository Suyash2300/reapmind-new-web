"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { valetParkingAppConfig } from "@/lib/valet-parking-app-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function VpaServicesIntro() {
  const { services } = valetParkingAppConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-12 text-primary-foreground md:py-16 lg:py-20"
      aria-labelledby="vpa-services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(245,158,11,0.04),transparent_40%,rgba(6,182,212,0.04))]"
        aria-hidden
      />

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="vpa-services-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {services.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14">
          <div>
            {services.paragraphs.map((p, i) => (
              <BlurFadeIn key={p.slice(0, 40)} as="p" delay={0.06 + i * 0.08} className="text-para leading-relaxed text-white/65">
                <WordReveal text={p} delay={0.1 + i * 0.05} />
              </BlurFadeIn>
            ))}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.apps.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: smoothEase }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated p-5"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 ${
                      app.id === "customer"
                        ? "bg-[radial-gradient(circle_at_top_left,rgba(26,105,253,0.2),transparent_65%)]"
                        : "bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.2),transparent_65%)]"
                    }`}
                    aria-hidden
                  />
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">{app.label}</p>
                  <p className="mt-2 text-sm font-medium text-white/70">{app.tag}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {services.extras.map((extra, i) => (
                <motion.span
                  key={extra}
                  initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/75"
                >
                  {extra}
                </motion.span>
              ))}
            </div>

            <BlurFadeIn delay={0.2} className="mt-8">
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {services.cta}
              </Link>
            </BlurFadeIn>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10">
              <Image
                src="/generative-ai/logistics-1.png"
                alt="Smart valet parking and vehicle logistics"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-amber-500/10" aria-hidden />
            </div>

            <motion.div
              className="absolute -bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/75 p-4 backdrop-blur-md sm:left-6 sm:right-6"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6, ease: smoothEase }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Dual-app sync</p>
                  <p className="mt-1 text-sm font-semibold text-white">Customer ↔ Valet in real time</p>
                </div>
                <div className="flex -space-x-2" aria-hidden>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-primary text-xs font-bold text-white">
                    C
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-amber-500 text-xs font-bold text-black">
                    V
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

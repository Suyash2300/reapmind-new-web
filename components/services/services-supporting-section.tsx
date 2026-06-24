"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import {
  servicesCta,
  servicesImages,
  servicesSupporting,
} from "@/lib/services-page";

export function ServicesSupportingSection() {
  const [activeId, setActiveId] = useState<string>(servicesSupporting.items[0].id);
  const active =
    servicesSupporting.items.find((item) => item.id === activeId) ??
    servicesSupporting.items[0];

  return (
    <>
      <section
        className="border-t border-white/10 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
        aria-labelledby="services-support-heading"
      >
        <div className="container-app">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-10">
            <FadeIn>
              <h2
                id="services-support-heading"
                className="text-h3 font-bold text-white sm:text-h2"
              >
                {servicesSupporting.title}
              </h2>
              <p className="mt-3 max-w-lg text-para text-white/60">
                Stamp a capability to read how we support strategy, security,
                brand, and go-to-market alongside engineering.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {servicesSupporting.items.map((item) => {
                  const selected = item.id === activeId;
                  return (
                    <HydrationButton
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      aria-pressed={selected}
                      className={`min-h-11 rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                        selected
                          ? "border-primary bg-primary/15 text-white"
                          : "border-white/12 bg-white/[0.03] text-white/55 hover:border-white/25"
                      }`}
                    >
                      {item.title}
                    </HydrationButton>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface-elevated">
                <div className="relative aspect-[16/10] sm:aspect-[5/3]">
                  <Image
                    src={servicesImages.team}
                    alt="ReapMind team collaborating"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="border-t border-white/10 p-5 sm:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                        Capability stamp
                      </p>
                      <h3 className="mt-2 text-h4 font-bold text-white">
                        {active.title}
                      </h3>
                      <p className="mt-3 text-para leading-relaxed text-white/70">
                        {active.body}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14">
        <div className="container-app">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border-strong bg-surface-elevated">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_100%_0%,rgba(26,105,253,0.18),transparent)]"
                aria-hidden
              />
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:p-10">
                <div className="relative z-10 text-center lg:text-left">
                  <Image
                    src={servicesImages.brandMark}
                    alt="ReapMind"
                    width={160}
                    height={48}
                    className="mx-auto h-10 w-auto object-contain lg:mx-0"
                  />
                  <h2 className="mt-5 text-h4 font-bold text-white sm:text-h3">
                    {servicesCta.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-para text-white/65 lg:max-w-none">
                    {servicesCta.subtitle}
                  </p>
                  <Link
                    href={servicesCta.href}
                    className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                  >
                    {servicesCta.buttonLabel}
                  </Link>
                </div>

                <div className="relative z-10 mx-auto flex w-full max-w-xs flex-col items-center gap-4 lg:max-w-[280px]">
                  <div className="relative aspect-square w-full max-w-[220px]">
                    <Image
                      src={servicesImages.consultationCaller}
                      alt="Schedule a consultation with ReapMind"
                      fill
                      sizes="220px"
                      className="object-contain drop-shadow-[0_20px_48px_rgba(26,105,253,0.35)]"
                    />
                  </div>
                  <Image
                    src={servicesImages.greatPlaceToWork}
                    alt="Great Place To Work certified"
                    width={180}
                    height={72}
                    className="h-14 w-auto object-contain opacity-90"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

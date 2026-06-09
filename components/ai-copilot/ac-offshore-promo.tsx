"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { aiCopilotConfig } from "@/lib/ai-copilot-config";

export function AcOffshorePromo() {
  const { offshorePromo } = aiCopilotConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12">
      <div className="container-app">
        <FadeIn>
          <motion.div
            whileHover={reducedMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.35 }}
            className="grid items-stretch overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated lg:grid-cols-2"
          >
            <div className="relative min-h-[240px] overflow-hidden bg-[#030712] lg:min-h-[320px]">
              <Image
                src={offshorePromo.image}
                alt={offshorePromo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/80 lg:from-black/50 lg:via-transparent lg:to-black/60"
                aria-hidden
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Global delivery
              </p>
              <h2 className="mt-3 text-h4 font-bold text-white sm:text-h3">
                {offshorePromo.title}
              </h2>
              <p className="mt-4 text-para leading-relaxed text-white/65">{offshorePromo.body}</p>
              <Link
                href={offshorePromo.href}
                className="mt-6 inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                {offshorePromo.cta}
              </Link>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

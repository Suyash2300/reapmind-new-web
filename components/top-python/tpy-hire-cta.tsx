"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyHireCta() {
  const { hireCta } = topPythonConfig;
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(255,212,59,0.22), transparent 68%)`;

  return (
    <section className="bg-[#0a1628] py-14 md:py-20" aria-labelledby="tpy-hire-heading">
      <div className="container-app">
        <motion.div
          ref={ref}
          onMouseMove={(e) => {
            if (reducedMotion || !ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            mx.set(e.clientX - rect.left);
            my.set(e.clientY - rect.top);
          }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl md:p-12"
        >
          <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
          <div className="relative max-w-3xl">
            <BlurFadeIn as="h3" id="tpy-hire-heading" className="text-h4 font-bold text-white sm:text-h3">
              {hireCta.title}
            </BlurFadeIn>
            <BlurFadeIn delay={0.08} className="mt-4 text-para text-white/65">
              {hireCta.description}
            </BlurFadeIn>
            <BlurFadeIn delay={0.12} className="mt-8">
              <Link
                href={hireCta.href}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#3776AB] px-10 text-sm font-semibold text-white hover:bg-[#2d5f8f]"
              >
                {hireCta.cta}
              </Link>
            </BlurFadeIn>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmHireCta() {
  const { hireCta } = topReactNativeMumbaiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const btnX = useSpring(mx, { stiffness: 300, damping: 16 });
  const btnY = useSpring(my, { stiffness: 300, damping: 16 });

  return (
    <section className="bg-black py-14 md:py-20" aria-labelledby="trnm-hire-heading">
      <div className="container-app">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-[#61DAFB]/25 bg-gradient-to-br from-[#61DAFB]/10 via-white/[0.02] to-transparent p-8 backdrop-blur-2xl md:p-12"
        >
          <motion.div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#61DAFB]/15 blur-3xl"
            animate={reducedMotion ? undefined : { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity }}
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <BlurFadeIn as="h3" id="trnm-hire-heading" className="text-h4 font-bold text-white sm:text-h3">
              {hireCta.title}
            </BlurFadeIn>
            <BlurFadeIn delay={0.08} className="mt-4 text-para text-white/65">
              {hireCta.description}
            </BlurFadeIn>
            <BlurFadeIn delay={0.12} className="mt-8">
              <motion.div
                className="inline-block"
                onMouseMove={(e) => {
                  if (reducedMotion) return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  mx.set((e.clientX - rect.left) / rect.width - 0.5);
                  my.set((e.clientY - rect.top) / rect.height - 0.5);
                }}
                onMouseLeave={() => {
                  mx.set(0);
                  my.set(0);
                }}
                style={{ x: btnX, y: btnY }}
              >
                <Link
                  href={hireCta.href}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#61DAFB] px-10 text-sm font-bold text-[#0b0f14] hover:bg-[#7ee4ff]"
                >
                  {hireCta.cta}
                </Link>
              </motion.div>
            </BlurFadeIn>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

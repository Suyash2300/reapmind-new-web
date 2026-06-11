"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

function IndustryTag({ name, index }: { name: string; index: number }) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });
  const y = useSpring(useTransform(mx, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (reducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
      }}
      onMouseLeave={() => mx.set(0)}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 12) * 0.03 }}
      style={reducedMotion ? undefined : { x, y }}
      className={`rounded-xl border border-[#61DAFB]/20 bg-[#61DAFB]/5 px-3 py-3 text-center text-xs font-semibold text-white/80 backdrop-blur-sm sm:text-sm ${index % 7 === 0 ? "sm:col-span-2" : ""}`}
    >
      {name}
    </motion.div>
  );
}

export function TrnmIndustries() {
  const { industries } = topReactNativeMumbaiConfig;

  return (
    <section className="relative overflow-hidden bg-black py-14 md:py-20" aria-labelledby="trnm-industries-heading">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-40"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, #61DAFB15, transparent 45%)",
            "radial-gradient(circle at 80% 70%, #61DAFB12, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden
      />
      <div className="container-app relative">
        <BlurFadeIn as="h2" id="trnm-industries-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {industries.title}
        </BlurFadeIn>
        <BlurFadeIn delay={0.06} className="mt-4 max-w-3xl text-para text-white/65">
          {industries.intro}
        </BlurFadeIn>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {industries.items.map((name, i) => (
            <IndustryTag key={name} name={name} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

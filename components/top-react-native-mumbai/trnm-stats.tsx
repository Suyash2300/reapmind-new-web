"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

function StatRing({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const reducedMotion = usePrefersReducedMotion();
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 45, damping: 22 });
  const display = useTransform(rounded, (v) => `${Math.round(v)}${suffix}`);
  const [text, setText] = useState(`0${suffix}`);

  useEffect(() => {
    if (inView) count.set(numeric);
  }, [inView, count, numeric]);
  useEffect(() => {
    const unsub = display.on("change", setText);
    return unsub;
  }, [display]);

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-md"
    >
      <motion.div
        className="pointer-events-none absolute inset-2 rounded-xl border border-[#61DAFB]/30"
        animate={reducedMotion ? undefined : { scale: [1, 1.04, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
        aria-hidden
      />
      <p className="relative text-3xl font-black text-[#61DAFB] sm:text-4xl">{reducedMotion ? value : text}</p>
      <p className="relative mt-2 text-sm text-white/65">{label}</p>
    </motion.div>
  );
}

export function TrnmStats() {
  const { stats } = topReactNativeMumbaiConfig;

  return (
    <section className="relative overflow-hidden border-y border-[#61DAFB]/12 bg-black py-14 md:py-20" aria-labelledby="trnm-stats-heading">
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#61DAFB]/8 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        aria-hidden
      />
      <div className="container-app relative">
        <BlurFadeIn as="h2" id="trnm-stats-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {stats.title}
        </BlurFadeIn>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.items.map((item, i) => (
            <StatRing key={item.label} value={item.value} label={item.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

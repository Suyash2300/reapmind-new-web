"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

function StatCounter({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="rounded-2xl border border-[#339933]/25 bg-[#339933]/5 p-6 text-center backdrop-blur-md"
    >
      <p className="text-3xl font-black text-[#339933] sm:text-4xl">{text}</p>
      <p className="mt-2 text-sm text-white/65">{label}</p>
    </motion.div>
  );
}

export function TnjStats() {
  const { stats } = topNodejsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tnj-stats-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tnj-stats-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {stats.title}
        </BlurFadeIn>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.items.map((item, i) =>
            reducedMotion ? (
              <div key={item.label} className="rounded-2xl border border-[#339933]/25 bg-[#339933]/5 p-6 text-center">
                <p className="text-3xl font-black text-[#339933]">{item.value}</p>
                <p className="mt-2 text-sm text-white/65">{item.label}</p>
              </div>
            ) : (
              <StatCounter key={item.label} value={item.value} label={item.label} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

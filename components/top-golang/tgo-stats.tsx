"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topGolangConfig } from "@/lib/top-golang-config";

function StatCounter({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });
  const display = useTransform(rounded, (v) => `${Math.round(v)}${suffix}`);
  const [text, setText] = useState(`0${suffix}`);

  useEffect(() => { if (inView) count.set(numeric); }, [inView, count, numeric]);
  useEffect(() => { const unsub = display.on("change", setText); return unsub; }, [display]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#00ADD8]/10 to-transparent p-6 text-center"
    >
      <p className="text-3xl font-black text-[#00ADD8] sm:text-4xl">{text}</p>
      <p className="mt-2 text-sm text-white/65">{label}</p>
    </motion.div>
  );
}

export function TgoStats() {
  const { stats } = topGolangConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="bg-black py-14 md:py-20" aria-labelledby="tgo-stats-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tgo-stats-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {stats.title}
        </BlurFadeIn>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.items.map((item, i) =>
            reducedMotion ? (
              <div key={item.label} className="rounded-2xl border border-[#00ADD8]/25 p-6 text-center">
                <p className="text-3xl font-black text-[#00ADD8]">{item.value}</p>
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

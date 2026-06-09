"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = usePrefersReducedMotion();
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[\d]/g, "");
  const [display, setDisplay] = useState(reducedMotion ? value : "0" + suffix);

  useEffect(() => {
    if (!inView || reducedMotion || Number.isNaN(numeric)) return;
    let frame = 0;
    const total = 36;
    const tick = () => {
      frame += 1;
      const progress = frame / total;
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(numeric * eased) + suffix);
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, numeric, reducedMotion, suffix, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-surface-elevated px-4 py-5 text-center"
    >
      <p className="text-h3 font-black tabular-nums text-accent sm:text-h2">{display}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/55">{label}</p>
    </motion.div>
  );
}

export function AmWhyChoose() {
  const { whyChoose } = appModBangaloreConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{whyChoose.title}</h2>
            <p className="mt-4 text-para leading-relaxed text-white/65">{whyChoose.description}</p>
            <Link
              href="/contact-us#free-consultation"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
            >
              {whyChoose.cta}
            </Link>
          </FadeIn>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {whyChoose.stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function TiltCard({
  tier,
  index,
}: {
  tier: (typeof fullstackHireConfig.pricing.tiers)[number];
  index: number;
}) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 22 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      style={reduced ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center"
    >
      <h3 className="text-h5 font-bold text-white">{tier.title}</h3>
      <p className="mt-6 text-3xl font-black text-[#6366F1]">{tier.price}</p>
      <p className="mt-3 text-sm text-white/55">{tier.experience}</p>
    </motion.article>
  );
}

export function FullstackHirePricing() {
  const { pricing } = fullstackHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{pricing.title}</h2>
          <p className="mt-6 text-para text-white/65">{pricing.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <TiltCard key={tier.title} tier={tier} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

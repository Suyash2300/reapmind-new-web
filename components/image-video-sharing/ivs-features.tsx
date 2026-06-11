"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { imageVideoSharingConfig } from "@/lib/image-video-sharing-config";

function BentoCard({
  title,
  description,
  accent,
  index,
}: {
  title: string;
  description: string;
  accent: string;
  index: number;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 28 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 28 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      initial={reducedMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.55 }}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/70 p-6 sm:p-7"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60" style={{ backgroundColor: accent }} />
      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: accent }}>
        Feature {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="relative mt-3 text-lg font-bold text-white sm:text-xl">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/62 sm:text-para">{description}</p>
    </motion.article>
  );
}

export function IvsFeatures() {
  const { features } = imageVideoSharingConfig;
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="ivs-features-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="ivs-features-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {features.title}
        </BlurFadeIn>

        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:hidden">
          {features.items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className="rounded-full border px-3 py-1.5 text-xs font-semibold"
              style={{
                borderColor: i === active ? item.accent : "rgba(255,255,255,0.12)",
                color: i === active ? "#fff" : "rgba(255,255,255,0.55)",
                backgroundColor: i === active ? `${item.accent}22` : "transparent",
              }}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <motion.div
            key={features.items[active].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl border border-white/10 bg-surface-elevated/70 p-6"
          >
            <h3 className="text-lg font-bold text-white">{features.items[active].title}</h3>
            <p className="mt-3 text-sm text-white/65">{features.items[active].description}</p>
          </motion.div>
        </div>

        <div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, i) => (
            <BentoCard key={item.id} title={item.title} description={item.description} accent={item.accent} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function AwsHireTestimonials() {
  const { testimonials } = awsHireConfig;
  const reducedMotion = usePrefersReducedMotion();
  const colA = testimonials.items.filter((_, i) => i % 2 === 0);
  const colB = testimonials.items.filter((_, i) => i % 2 === 1);
  const mobileTrack = [...testimonials.items, ...testimonials.items];
  const trackA = [...colA, ...colA];
  const trackB = [...colB, ...colB];

  if (reducedMotion) {
    return (
      <section className="section-app bg-surface-dark py-32">
        <div className="container-app">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
            <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.items.map((t) => (
              <blockquote key={t.name} className="rounded-2xl border border-white/10 bg-black p-6">
                <p className="text-sm italic text-white/70">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-bold text-white">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-app overflow-hidden bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
          <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
        </motion.div>

        <div className="relative grid h-[520px] gap-4 md:grid-cols-2">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-surface-dark to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-surface-dark to-transparent" />

          <motion.div
            className="flex flex-col gap-4 md:hidden"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          >
            {mobileTrack.map((t, i) => (
              <TestimonialCard key={`${t.name}-m-${i}`} t={t} />
            ))}
          </motion.div>

          <motion.div
            className="hidden flex-col gap-4 md:flex"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          >
            {trackA.map((t, i) => (
              <TestimonialCard key={`${t.name}-a-${i}`} t={t} />
            ))}
          </motion.div>

          <motion.div
            className="hidden flex-col gap-4 md:flex"
            animate={{ y: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {trackB.map((t, i) => (
              <TestimonialCard key={`${t.name}-b-${i}`} t={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
}: {
  t: (typeof awsHireConfig.testimonials.items)[number];
}) {
  return (
    <blockquote className="shrink-0 rounded-2xl border border-white/10 bg-black p-6">
      <p className="text-sm italic leading-relaxed text-white/70">&ldquo;{t.quote}&rdquo;</p>
      <footer className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full border border-[#FF9900]/30">
          <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" unoptimized />
        </div>
        <div>
          <cite className="not-italic text-sm font-bold text-white">{t.name}</cite>
          <p className="text-[11px] text-white/50">{t.role}</p>
        </div>
      </footer>
    </blockquote>
  );
}

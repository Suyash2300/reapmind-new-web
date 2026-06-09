"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 280, damping: 28 });

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AndroidHireHiringModels() {
  const { hiringModels } = androidHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{hiringModels.title}</h2>
          <p className="mt-6 text-para text-white/65">{hiringModels.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {hiringModels.models.map((m, i) => (
            <TiltCard
              key={m.title}
              className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent p-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <h3 className="text-h4 font-bold text-primary">{m.title}</h3>
                <dl className="mt-8 space-y-5 text-sm text-white/70">
                  <div>
                    <dt className="font-semibold text-white">Hours Per Day</dt>
                    <dd className="mt-1">{m.hoursPerDay}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Hours Commitment</dt>
                    <dd className="mt-1">{m.commitment}</dd>
                  </div>
                </dl>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-10 font-bold text-black"
          >
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

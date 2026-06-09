"use client";

import { motion } from "framer-motion";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal, mvpStaggerContainer, mvpMotionVariants } from "@/components/mvp/mvp-motion";

export function MvpWinning() {
  return (
    <section className="section-app relative overflow-hidden bg-black py-32">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-primary/5 blur-[120px]"
      />

      <div className="container-app relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <MvpReveal variant="fadeLeft" className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">MVP Expertise</span>
            <h2 className="mt-4 text-h2 font-black leading-tight text-white">{mvpConfig.winning.title}</h2>
          </MvpReveal>

          <motion.div
            className="space-y-6 lg:col-span-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={mvpStaggerContainer}
          >
            {mvpConfig.winning.paragraphs.map((p, i) => (
              <motion.article
                key={i}
                variants={mvpMotionVariants.fadeRight}
                whileHover={{ x: 8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8"
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                />
                <p className="text-para leading-relaxed text-white/70 transition-colors group-hover:text-white/95">
                  {p}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaWhyUs() {
  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <GsapScrollReveal>
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
              Why ReapMind
            </span>
            <h2 className="text-display font-black leading-tight text-white">
              {pwaConfig.whyUs.title}
            </h2>
            <p className="mt-6 text-para leading-relaxed text-white/70">
              {pwaConfig.whyUs.intro}
            </p>
            <Link
              href="/contact-us"
              className="mt-10 inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 font-bold text-white transition-all hover:bg-primary hover:text-black hover:border-primary"
            >
              {pwaConfig.whyUs.cta}
            </Link>
          </GsapScrollReveal>

          <div className="space-y-6">
            {pwaConfig.whyUs.items.map((item, i) => (
              <GsapScrollReveal key={item.title} start={`top ${85 + i * 3}%`}>
                <motion.div
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:border-primary/30"
                  whileHover={{ x: 8 }}
                >
                  <h3 className="text-h5 font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-para leading-relaxed text-white/60">
                    {item.description}
                  </p>
                </motion.div>
              </GsapScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

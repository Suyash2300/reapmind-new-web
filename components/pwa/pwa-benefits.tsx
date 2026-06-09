"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GsapScrollReveal } from "@/components/motion/gsap-scroll-reveal";
import { pwaConfig } from "@/lib/pwa-config";

export function PwaBenefits() {
  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <GsapScrollReveal className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="text-display font-black leading-tight text-white">
            {pwaConfig.benefits.title}
          </h2>
          <p className="mt-6 text-h6 font-normal leading-relaxed text-white/70">
            {pwaConfig.benefits.subtitle}
          </p>
        </GsapScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pwaConfig.benefits.items.map((item, i) => (
            <GsapScrollReveal key={item.title} start={`top ${85 + (i % 3) * 5}%`}>
              <motion.div
                className="group flex h-full flex-col rounded-3xl border border-white/5 bg-white/5 p-8 transition-all duration-500 hover:border-primary/30 hover:bg-white/10"
                whileHover={{ y: -6 }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/20 transition-colors group-hover:bg-primary">
                  <svg
                    className="h-6 w-6 text-primary transition-colors group-hover:text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-h5 font-bold text-white transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-4 text-para leading-relaxed text-white/60">{item.description}</p>
              </motion.div>
            </GsapScrollReveal>
          ))}
        </div>

        <GsapScrollReveal className="mt-16 text-center">
          <Link
            href="/contact-us"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 font-bold text-black transition-transform hover:scale-105"
          >
            {pwaConfig.benefits.cta}
          </Link>
        </GsapScrollReveal>
      </div>
    </section>
  );
}

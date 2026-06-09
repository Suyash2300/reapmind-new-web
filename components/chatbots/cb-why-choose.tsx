"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { chatbotsConfig } from "@/lib/chatbots-config";

export function CbWhyChoose() {
  const { whyChoose } = chatbotsConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
            {whyChoose.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {whyChoose.items.map((item, i) => (
            <FadeIn key={item.id} delay={0.06 + i * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="h-full rounded-2xl border border-border-strong bg-surface-elevated p-6"
              >
                <span className="text-xs font-bold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-subtitle font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-para">
                  {item.description}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

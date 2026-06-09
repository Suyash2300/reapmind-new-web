"use client";

import { motion } from "framer-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";

const bullets = [
  ...awsHireConfig.about.bulletsLeft,
  ...awsHireConfig.about.bulletsRight,
];

export function AwsHireAbout() {
  const { about } = awsHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#FF9900]/20 bg-gradient-to-br from-[#FF9900]/10 via-black to-black p-8 md:p-10"
          >
            <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
            <p className="mt-6 text-para leading-relaxed text-white/70">{about.description}</p>
          </motion.div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {bullets.map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/50 p-4"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.15, type: "spring", stiffness: 260 }}
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF9900] text-xs font-black text-black"
                >
                  ✓
                </motion.span>
                <span className="text-sm font-medium text-white/85">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";

export function AwsHireRelated() {
  const { relatedHire } = awsHireConfig;

  return (
    <section className="section-app bg-black py-24">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl p-[1px]"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{
                  background: "conic-gradient(from 0deg, #FF9900, transparent, #1a69fd, transparent)",
                }}
                aria-hidden
              />
              <div className="relative flex min-h-[220px] flex-col rounded-2xl bg-black p-8">
                <h3 className="text-h5 font-bold text-white">{card.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">{card.description}</p>
                <Link href={card.href} className="mt-6 font-bold text-[#FF9900]">
                  {relatedHire.ctaLabel} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

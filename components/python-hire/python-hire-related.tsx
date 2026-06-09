"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pythonHireConfig } from "@/lib/python-hire-config";

export function PythonHireRelated() {
  const { relatedHire } = pythonHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <div className="relative flex min-h-[320px] items-center justify-center" style={{ perspective: 1200 }}>
          {relatedHire.items.map((item, i) => {
            const offset = i - 1;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, rotateY: offset * 30, z: -100 }}
                whileInView={{ opacity: 1, rotateY: offset * 18, z: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 200 }}
                whileHover={{ y: -12, rotateY: offset * 12, z: 40 }}
                className="absolute w-[min(90vw,300px)] rounded-2xl border border-white/10 bg-zinc-950 p-6 shadow-xl"
                style={{
                  transform: `translateX(${offset * 110}px) rotateY(${offset * 18}deg)`,
                  zIndex: 10 - Math.abs(offset),
                }}
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/60">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex text-sm font-bold text-[#FFD43B] hover:underline"
                >
                  {relatedHire.ctaLabel} →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

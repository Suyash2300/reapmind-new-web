"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

export function JavascriptHireRelated() {
  const { relatedHire } = javascriptHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <div className="grid gap-6 md:grid-cols-3">
          {relatedHire.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12, boxShadow: "0 20px 60px rgba(247,223,30,0.12)" }}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-6"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-white/60">{item.description}</p>
              <Link href={item.href} className="mt-6 inline-flex text-sm font-bold text-[#F7DF1E] hover:underline">
                {relatedHire.ctaLabel} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

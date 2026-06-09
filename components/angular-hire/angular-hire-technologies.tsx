"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHireTechnologies() {
  const { technologies } = angularHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
            whileInView={{ opacity: 1, clipPath: "circle(75% at 50% 50%)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-xs lg:col-span-4"
          >
            <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="320px" />
          </motion.div>

          <div className="columns-2 gap-3 sm:columns-3 lg:col-span-8">
            {technologies.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, rotate: i % 3 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: (i % 5) * 0.06, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.03, borderColor: "rgba(26,105,253,0.4)" }}
                className="mb-3 break-inside-avoid rounded-2xl border border-white/10 bg-black/50 px-3 py-4 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 shrink-0">
                    <Image src={tech.icon} alt="" fill className="object-contain" sizes="40px" unoptimized />
                  </div>
                  <span className="text-xs font-semibold text-white/85 sm:text-sm">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

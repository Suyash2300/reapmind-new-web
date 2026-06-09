"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

export function JavascriptHireTechnologies() {
  const { technologies } = javascriptHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
            <p className="mt-6 text-para text-white/65">{technologies.description}</p>
            <div className="relative mt-10 hidden aspect-square max-w-xs lg:block">
              <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="320px" unoptimized />
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
            {technologies.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: "spring", stiffness: 220 }}
                whileHover={{ scale: 1.1, zIndex: 10, borderColor: "rgba(247,223,30,0.5)" }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/50 p-4"
              >
                <div className="relative h-12 w-12">
                  <Image src={tech.icon} alt={tech.name} fill className="object-contain" sizes="48px" unoptimized />
                </div>
                <span className="text-center text-[10px] font-medium text-white/65 sm:text-xs">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

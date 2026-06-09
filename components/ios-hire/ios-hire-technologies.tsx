"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { iosHireConfig } from "@/lib/ios-hire-config";

export function IosHireTechnologies() {
  const { technologies } = iosHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-sm lg:col-span-4"
          >
            <Image
              src={technologies.illustration}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width:1024px) 80vw, 400px"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8 lg:gap-4">
            {technologies.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, rotate: -8, scale: 0.85 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: (i % 6) * 0.06, type: "spring", stiffness: 160 }}
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(59,130,246,0.15)" }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-3 py-5"
              >
                <div className="relative h-11 w-11 sm:h-12 sm:w-12">
                  <Image src={tech.icon} alt={tech.name} fill className="object-contain" sizes="48px" unoptimized />
                </div>
                <span className="text-center text-[11px] font-semibold text-white/80 sm:text-xs">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

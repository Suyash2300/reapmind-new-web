"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

const bentoSpans = [
  "col-span-1 row-span-1",
  "col-span-1 row-span-1 sm:col-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1 sm:col-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1 sm:col-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1 sm:col-span-1",
];

export function SalesforceHireTechnologies() {
  const { technologies } = salesforceHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-xs lg:col-span-4"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-[#00A1E0]/20 blur-2xl"
              aria-hidden
            />
            <motion.div
              animate={{ borderRadius: ["40% 60% 55% 45%", "55% 45% 60% 40%", "40% 60% 55% 45%"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative m-4 aspect-square overflow-hidden border border-[#00A1E0]/20 bg-black/40"
            >
              <Image
                src={technologies.illustration}
                alt=""
                fill
                className="object-contain p-4"
                sizes="320px"
              />
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-8 lg:gap-4">
            {technologies.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, originX: 0.5, originY: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  delay: i * 0.07,
                  type: "spring",
                  stiffness: 280,
                  damping: 14,
                }}
                whileHover={{ scale: 1.04 }}
                className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-3 py-5 text-center ${bentoSpans[i] ?? ""}`}
              >
                <motion.div
                  initial={{ rotate: -180 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, type: "spring" }}
                  className="relative h-11 w-11 sm:h-12 sm:w-12"
                >
                  <Image src={tech.icon} alt="" fill className="object-contain" sizes="48px" unoptimized />
                </motion.div>
                <span className="text-xs font-semibold leading-snug text-white/85 sm:text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

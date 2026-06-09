"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";

export function AwsHireTechnologies() {
  const { technologies } = awsHireConfig;

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

        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-[280px]"
          >
            <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="280px" />
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ delay: (i % 5) * 0.06 + Math.floor(i / 5) * 0.08, type: "spring" }}
                whileHover={{ y: -5, borderColor: "rgba(255,153,0,0.5)" }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-black/60 p-4 text-center"
              >
                <div className="relative h-10 w-10">
                  <Image src={tech.icon} alt="" fill className="object-contain" sizes="40px" unoptimized />
                </div>
                <span className="text-[11px] font-semibold leading-tight text-white/85 sm:text-xs">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

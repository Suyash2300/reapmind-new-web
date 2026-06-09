"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

export function NodejsHireTechnologies() {
  const { technologies } = nodejsHireConfig;

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, rotate: -8 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative mx-auto aspect-square w-full max-w-[280px]"
          >
            <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="280px" unoptimized />
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.items.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{
                  delay: (i % 4) * 0.04 + Math.floor(i / 4) * 0.06,
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(51,153,51,0.25)" }}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/60 p-4 text-center"
              >
                <div className="flex h-[70px] w-[70px] items-center justify-center rounded-xl bg-white p-1">
                  <Image
                    src={tech.icon}
                    alt=""
                    width={70}
                    height={70}
                    className="max-h-[70px] max-w-[70px] object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-[10px] font-semibold leading-tight text-white/85 sm:text-xs">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

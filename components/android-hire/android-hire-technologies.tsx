"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHireTechnologies() {
  const { technologies } = androidHireConfig;

  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
        className="pointer-events-none absolute -right-32 top-1/4 h-64 w-64 rounded-full border border-dashed border-primary/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="pointer-events-none absolute -left-24 bottom-1/4 h-48 w-48 rounded-full border border-dashed border-white/10"
      />

      <div className="container-app relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-sm lg:col-span-4"
          >
            <Image
              src={technologies.illustration}
              alt="Android developer"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 80vw, 400px"
            />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:col-span-8">
          {technologies.items.map((tech, i) => (
            <motion.div
              key={`${tech.name}-${i}`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ delay: (i % 10) * 0.04, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.08, zIndex: 10 }}
              className="w-[calc(50%-6px)] rounded-2xl border border-white/10 bg-black/50 sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)]"
            >
              <motion.div
                animate={{ y: [0, i % 2 ? 10 : -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 + (i % 5) * 0.4, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 px-3 py-4"
              >
                {tech.icon ? (
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                    <Image src={tech.icon} alt={tech.name} fill className="object-contain" sizes="48px" />
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-sm font-black text-primary">
                    {tech.name.slice(0, 2)}
                  </div>
                )}
                <span className="text-center text-[11px] font-semibold leading-tight text-white/80 sm:text-xs">
                  {tech.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

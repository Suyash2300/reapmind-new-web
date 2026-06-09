"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reactHireConfig } from "@/lib/react-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const orbitPositions = [
  { top: "8%", left: "50%", translate: "-50%, 0" },
  { top: "22%", left: "88%", translate: "-50%, 0" },
  { top: "50%", left: "95%", translate: "-50%, -50%" },
  { top: "78%", left: "88%", translate: "-50%, -100%" },
  { top: "92%", left: "50%", translate: "-50%, -100%" },
  { top: "78%", left: "12%", translate: "-50%, -100%" },
  { top: "50%", left: "5%", translate: "-50%, -50%" },
  { top: "22%", left: "12%", translate: "-50%, 0" },
];

export function ReactHireTechnologies() {
  const { technologies } = reactHireConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{technologies.title}</h2>
          <p className="mt-6 text-para text-white/65">{technologies.description}</p>
        </motion.div>

        <div className="relative mx-auto aspect-square w-full max-w-2xl">
          <motion.div
            animate={reducedMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[12%] rounded-full border border-dashed border-[#61DAFB]/25"
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute inset-[22%]"
          >
            <Image src={technologies.illustration} alt="" fill className="object-contain" sizes="400px" />
          </motion.div>

          {technologies.items.map((tech, i) => {
            const pos = orbitPositions[i];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                className="absolute z-10"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: `translate(${pos.translate})`,
                }}
              >
                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
                  transition={
                    reducedMotion
                      ? undefined
                      : { duration: 2.5 + i * 0.2, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="flex items-center gap-2 rounded-2xl border border-white/15 bg-black/90 px-3 py-2 shadow-lg backdrop-blur-md"
                >
                  <div className="relative h-8 w-8 shrink-0">
                    <Image src={tech.icon} alt="" fill className="object-contain" sizes="32px" unoptimized />
                  </div>
                  <span className="whitespace-nowrap text-xs font-semibold text-white/90">{tech.name}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

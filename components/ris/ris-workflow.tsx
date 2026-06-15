"use client";

import { motion } from "framer-motion";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function RisWorkflow() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-surface-dark py-16 sm:py-20">
      <div className="container-app">
        <motion.h3
          className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2"
          initial={reduced ? false : { opacity: 0, scale: 0.94 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {risConfig.workflow.title}
        </motion.h3>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {risConfig.workflow.items.map((item, index) => (
            <motion.article
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-black/50 p-5"
              initial={reduced ? false : { opacity: 0, rotateX: 40, y: 30 }}
              whileInView={reduced ? undefined : { opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              whileHover={reduced ? undefined : { y: -6, rotateX: 4, rotateY: -4 }}
              style={{ transformStyle: "preserve-3d", perspective: 900 }}
            >
              <motion.span
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/25 text-sm font-bold text-violet-300"
                animate={reduced ? undefined : { boxShadow: ["0 0 0 rgba(124,58,237,0)", "0 0 20px rgba(124,58,237,0.4)", "0 0 0 rgba(124,58,237,0)"] }}
                transition={reduced ? undefined : { duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              <h4 className="mt-3 text-lg font-bold text-white">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

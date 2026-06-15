"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function SectorCard({
  name,
  icon,
  index,
  reduced,
}: {
  name: string;
  icon: string;
  index: number;
  reduced: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-surface-elevated p-4 text-center sm:p-5"
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.45 }}
      style={reduced ? undefined : { x: springX, y: springY }}
      onMouseMove={(e) => {
        if (reduced) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.08);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.08);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500/10"
        animate={reduced ? undefined : { y: [0, -6, 0] }}
        transition={reduced ? undefined : { duration: 3 + index * 0.15, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-9 w-9">
          <Image src={icon} alt={name} fill className="object-contain" sizes="36px" />
        </div>
      </motion.div>
      <p className="mt-2 text-xs font-semibold text-white sm:text-sm">{name}</p>
    </motion.div>
  );
}

export function RisSectors() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <motion.h2
          className="mx-auto max-w-4xl text-center text-h2 font-black text-white md:text-display"
          initial={reduced ? false : { opacity: 0, filter: "blur(10px)" }}
          whileInView={reduced ? undefined : { opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {risConfig.sectors.title}
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {risConfig.sectors.items.map((sector, index) => (
            <SectorCard key={sector.name} name={sector.name} icon={sector.icon} index={index} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

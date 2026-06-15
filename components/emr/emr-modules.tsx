"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { emrConfig } from "@/lib/emr-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function ModuleCard({
  title,
  description,
  image,
  index,
  reduced,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
  reduced: boolean;
}) {
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const glare = useMotionTemplate`linear-gradient(135deg, transparent 40%, rgba(96,165,250,0.35) 50%, transparent 60%)`;

  return (
    <motion.article
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated"
      initial={reduced ? false : { opacity: 0, rotateY: index % 2 === 0 ? -18 : 18, z: -80 }}
      whileInView={reduced ? undefined : { opacity: 1, rotateY: 0, z: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.65 }}
      onMouseMove={(e) => {
        if (reduced) return;
        const rect = e.currentTarget.getBoundingClientRect();
        rotateY.set((e.clientX - rect.left - rect.width / 2) / 20);
        rotateX.set((rect.height / 2 - (e.clientY - rect.top)) / 20);
      }}
      onMouseLeave={() => {
        rotateY.set(0);
        rotateX.set(0);
      }}
      style={reduced ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity group-hover:opacity-100"
          style={{ background: glare }}
        />
      )}
      <div className="relative aspect-[2/1] max-h-[140px] overflow-hidden sm:max-h-[160px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-base font-bold leading-snug text-white sm:text-lg">{title}</h3>
        <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-white/70 sm:text-sm">{description}</p>
        <Link
          href="/contact-us"
          className="mt-3 inline-flex min-h-[40px] items-center text-xs font-semibold text-[#93C5FD] hover:text-white sm:text-sm"
        >
          Contact Us
        </Link>
      </div>
    </motion.article>
  );
}

export function EmrModules() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {emrConfig.modules.map((mod, index) => (
            <ModuleCard
              key={mod.title}
              title={mod.title}
              description={mod.description}
              image={mod.image}
              index={index}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

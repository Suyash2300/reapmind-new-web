"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export function DsbMagneticButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 22 });
  const springY = useSpring(y, { stiffness: 300, damping: 22 });

  const base =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-[0_0_40px_rgba(14,165,233,0.35)]"
      : "border border-white/20 bg-white/[0.04] text-white backdrop-blur-md hover:border-cyan-400/40";

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.22);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.22);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      <Link href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm font-semibold ${base}`}>
        {children}
      </Link>
    </motion.div>
  );
}

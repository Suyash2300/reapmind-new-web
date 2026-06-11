"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export function TtxMagneticButton({
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
  const springX = useSpring(x, { stiffness: 290, damping: 21 });
  const springY = useSpring(y, { stiffness: 290, damping: 21 });

  const base =
    variant === "primary"
      ? "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-[0_0_36px_rgba(99,102,241,0.4)]"
      : "border border-white/20 bg-white/[0.04] text-white backdrop-blur-md hover:border-lime-400/35";

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
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

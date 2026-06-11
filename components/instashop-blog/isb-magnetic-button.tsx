"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

type IsbMagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function IsbMagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: IsbMagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22 });
  const springY = useSpring(y, { stiffness: 260, damping: 22 });

  const base =
    variant === "primary"
      ? "bg-gradient-to-r from-emerald-500 to-primary text-white shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:shadow-[0_0_50px_rgba(26,105,253,0.35)]"
      : "border border-white/20 bg-white/[0.04] text-white backdrop-blur-md hover:border-white/35";

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.18);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-8 text-sm font-semibold transition-colors ${base} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

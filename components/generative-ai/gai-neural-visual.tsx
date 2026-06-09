"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const NODES = [
  { x: 18, y: 28, delay: 0 },
  { x: 42, y: 18, delay: 0.4 },
  { x: 68, y: 32, delay: 0.8 },
  { x: 52, y: 55, delay: 1.2 },
  { x: 28, y: 62, delay: 1.6 },
  { x: 78, y: 58, delay: 2 },
] as const;

type GaiNeuralVisualProps = {
  className?: string;
};

/** Animated neural mesh overlay — pairs with hero/overview photography */
export function GaiNeuralVisual({ className = "" }: GaiNeuralVisualProps) {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 80, damping: 20 });
  const springY = useSpring(my, { stiffness: 80, damping: 20 });
  const orbX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const orbY = useTransform(springY, [-0.5, 0.5], [-10, 10]);
  const orb2X = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const orb2Y = useTransform(springY, [-0.5, 0.5], [6, -6]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="pointer-events-none absolute -left-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-primary/25 blur-[80px]"
        aria-hidden
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="pointer-events-none absolute -bottom-1/4 -right-1/4 h-[60%] w-[60%] rounded-full bg-cyan-500/15 blur-[70px]"
        aria-hidden
      />

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="gai-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(26,105,253,0.05)" />
            <stop offset="50%" stopColor="rgba(26,105,253,0.55)" />
            <stop offset="100%" stopColor="rgba(26,105,253,0.05)" />
          </linearGradient>
        </defs>
        {NODES.map((a, i) =>
          NODES.slice(i + 1).map((b) => (
            <motion.line
              key={`${a.x}-${b.x}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#gai-line)"
              strokeWidth="0.35"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: reducedMotion ? 0 : 2.2,
                delay: (i + b.x) * 0.05,
                ease: "easeOut",
              }}
            />
          )),
        )}
        {NODES.map((node, i) => (
          <motion.g key={node.x}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.8"
              fill="#1a69fd"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: reducedMotion ? 0 : 0.3 + i * 0.15, duration: 0.5 }}
            />
            {!reducedMotion ? (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="1.8"
                fill="none"
                stroke="#1a69fd"
                strokeWidth="0.4"
                animate={{ r: [1.8, 4.5], opacity: [0.7, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: node.delay,
                  ease: "easeOut",
                }}
              />
            ) : null}
          </motion.g>
        ))}
      </svg>

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden
      />
    </div>
  );
}

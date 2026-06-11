"use client";

import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type PortfolioCaseLinkProps = MotionProps & {
  href: ComponentProps<typeof Link>["href"];
  className?: string;
  children: ReactNode;
};

export function PortfolioCaseLink({ href, children, className, ...motionProps }: PortfolioCaseLinkProps) {
  return (
    <motion.div className={className} {...motionProps}>
      <Link href={href} className="block h-full no-underline">
        {children}
      </Link>
    </motion.div>
  );
}

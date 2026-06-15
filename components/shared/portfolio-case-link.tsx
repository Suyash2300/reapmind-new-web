"use client";

import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { isInternalAppHref } from "@/lib/portfolio-links";
import type { ReactNode } from "react";

type PortfolioCaseLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
} & HTMLMotionProps<"a">;

export function PortfolioCaseLink({
  href,
  className,
  children,
  ...motionProps
}: PortfolioCaseLinkProps) {
  if (isInternalAppHref(href)) {
    return (
      <Link href={href} className={className}>
        <motion.div className="flex h-full w-full flex-col" {...motionProps}>
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...motionProps}
    >
      {children}
    </motion.a>
  );
}

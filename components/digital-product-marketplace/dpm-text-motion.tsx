"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type WordRevealProps = {
  text: string;
  delay?: number;
  className?: string;
};

export function WordReveal({ text, delay = 0, className }: WordRevealProps) {
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: delay + i * 0.028, duration: 0.5, ease: smoothEase }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

type HeroWordHeadingProps = {
  text: string;
  accentWord?: string;
};

export function HeroWordHeading({ text, accentWord }: HeroWordHeadingProps) {
  const reduced = usePrefersReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return (
      <h1 className="text-h2 font-bold tracking-tight text-white sm:text-h1">{text}</h1>
    );
  }

  return (
    <h1 className="text-h2 font-bold tracking-tight text-white sm:text-h1">
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.1 + i * 0.09, duration: 0.65, ease: smoothEase }}
          className={`mr-[0.28em] inline-block ${
            word === accentWord
              ? "bg-gradient-to-r from-primary via-[#5B9AFF] to-[#8EC5FF] bg-clip-text text-transparent"
              : ""
          }`}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}

type BlurFadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "h2" | "h3";
  id?: string;
};

export function BlurFadeIn({ children, delay = 0, className, as = "div", id }: BlurFadeInProps) {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Tag = as;
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    );
  }

  return (
    <Component
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ delay, duration: 0.75, ease: smoothEase }}
    >
      {children}
    </Component>
  );
}

type MountBlurFadeProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p";
};

export function MountBlurFade({ children, delay = 0, className, as = "div" }: MountBlurFadeProps) {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay, duration: 0.8, ease: smoothEase }}
    >
      {children}
    </Component>
  );
}

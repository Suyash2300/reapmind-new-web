"use client";

import { motion, type MotionValue } from "framer-motion";
import type { RefObject } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export type ServiceHeroFormCardProps = {
  formImage: string;
  formImageAlt: string;
  formSubtitle: string;
  spotlight: string;
  reducedMotion: boolean;
  cardRef: RefObject<HTMLDivElement | null>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  onCardMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onCardLeave: () => void;
  entranceDelay?: number;
};

export function ServiceHeroFormCard({
  formImage,
  formImageAlt,
  formSubtitle,
  spotlight,
  reducedMotion,
  cardRef,
  rotateX,
  rotateY,
  onCardMove,
  onCardLeave,
  entranceDelay = 0.2,
}: ServiceHeroFormCardProps) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: entranceDelay, duration: 0.8, ease: smoothEase }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onCardMove}
        onMouseLeave={onCardLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated/95 backdrop-blur-sm"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={formImage}
            alt={formImageAlt}
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-elevated" aria-hidden />
          {!reducedMotion && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ background: spotlight }}
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
          )}
        </div>
        <div className="p-5 sm:p-6" style={{ transform: "translateZ(24px)" }}>
          <h2 className="text-h5 font-bold text-white">{formSubtitle}</h2>
          <p className="mt-2 text-sm text-white/60">Free consultation within 24 hours.</p>
          <div className="mt-5">
            <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  testimonials,
  testimonialsSection,
  type Testimonial,
} from "@/lib/testimonials";

type TestimonialsShowcaseProps = {
  title?: string;
  subtitle?: string;
  items?: Testimonial[];
  autoPlay?: boolean;
  autoPlayMs?: number;
  className?: string;
};

function StarRating() {
  return (
    <div
      className="flex gap-0.5 text-primary"
      role="img"
      aria-label="Rated 5 out of 5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="size-4 fill-current sm:size-5"
          aria-hidden
        >
          <path d="M10 1.5 12.4 7.1l6.1.5-4.6 4 1.4 6-5.3-3.2L4.7 17.6l1.4-6-4.6-4 6.1-.5L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ClientPhotoPanel({ item }: { item: Testimonial }) {
  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex w-full max-w-[300px] flex-col items-center lg:items-start"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-[0_24px_64px_-20px_rgba(26,105,253,0.35)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(280px_circle_at_50%_0%,rgba(26,105,253,0.2),transparent_65%)]"
        />
        <Image
          src={item.image}
          alt={item.name}
          width={item.imageWidth}
          height={item.imageHeight}
          sizes="300px"
          className="h-auto w-[min(100%,300px)] object-contain"
          priority={false}
        />
      </div>
      <div className="mt-5 text-center lg:hidden">
        <p className="text-subtitle font-bold text-white">{item.name}</p>
        <p className="mt-1 max-w-[300px] text-sm leading-snug text-white/70">
          {item.role}
        </p>
      </div>
    </motion.div>
  );
}

function QuotePanel({ item }: { item: Testimonial }) {
  return (
    <motion.article
      key={item.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col justify-center"
    >
      <StarRating />
      <p className="mt-6 text-para leading-relaxed text-white/85 sm:text-md lg:text-lg lg:leading-relaxed">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-6 hidden border-t border-white/10 pt-5 lg:mt-8 lg:block lg:pt-6">
        <p className="text-h4 font-bold text-white">{item.name}</p>
        <p className="mt-1 text-sm text-white/55">{item.role}</p>
      </div>
    </motion.article>
  );
}

export function TestimonialsShowcase({
  title = testimonialsSection.title,
  subtitle = testimonialsSection.subtitle,
  items = testimonials,
  autoPlay = true,
  autoPlayMs = 8000,
  className = "",
}: TestimonialsShowcaseProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeItem = items[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + items.length) % items.length);
    },
    [items.length],
  );

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (reducedMotion || !autoPlay || paused || items.length < 2) return;
    const timer = window.setInterval(goNext, autoPlayMs);
    return () => window.clearInterval(timer);
  }, [autoPlay, autoPlayMs, goNext, items.length, paused, reducedMotion]);

  return (
    <section
      className={`bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14 ${className}`}
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Testimonials
            </p>
            <h2
              id="testimonials-heading"
              className="mt-4 text-h3 font-bold tracking-tight text-white sm:text-h2"
            >
              {title}
            </h2>
          </FadeIn>
          {subtitle ? (
            <FadeIn delay={0.06}>
              <p className="mt-4 text-para leading-relaxed text-white/65 sm:text-md">
                {subtitle}
              </p>
            </FadeIn>
          ) : null}
        </div>

        <div className="mx-auto mt-10 max-w-5xl lg:mt-12">
          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:items-start lg:gap-8">
            <div className="relative shrink-0">
              <AnimatePresence mode="wait">
                <ClientPhotoPanel item={activeItem} />
              </AnimatePresence>
            </div>

            <div className="relative min-h-[12rem] w-full min-w-0 flex-1 lg:pt-1">
              <AnimatePresence mode="wait">
                <QuotePanel item={activeItem} />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
          {items.map((item, index) => {
            const active = index === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`View testimonial from ${item.name}`}
                aria-pressed={active}
                className={`relative size-14 overflow-hidden rounded-full border-2 transition-[border-color,box-shadow,transform] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:size-16 ${
                  active
                    ? "scale-110 border-primary shadow-[0_0_24px_-4px_rgba(26,105,253,0.65)]"
                    : "border-white/15 opacity-70 hover:border-primary/40 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.thumbImage}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous testimonial"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition-colors hover:border-primary/40 hover:text-white"
          >
            <svg viewBox="0 0 20 20" className="size-4" aria-hidden>
              <path
                d="M12.5 15 7.5 10l5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next testimonial"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition-colors hover:border-primary/40 hover:text-white"
          >
            <svg viewBox="0 0 20 20" className="size-4" aria-hidden>
              <path
                d="m7.5 15 5-5-5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

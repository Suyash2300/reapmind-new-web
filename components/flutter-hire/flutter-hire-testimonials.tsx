"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

function TypewriterQuote({ text, active }: { text: string; active: boolean }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!active) {
      setShown("");
      return;
    }
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 12);
    return () => clearInterval(id);
  }, [text, active]);

  const typing = shown.length < text.length;

  return (
    <p className="text-para italic leading-relaxed text-white/70">
      &ldquo;{shown}
      {typing ? (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="text-primary"
        >
          |
        </motion.span>
      ) : null}
      &rdquo;
    </p>
  );
}

export function FlutterHireTestimonials() {
  const { testimonials } = flutterHireConfig;
  const [active, setActive] = useState(0);
  const t = testimonials.items[active];

  const next = () => setActive((a) => (a + 1) % testimonials.items.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.items.length) % testimonials.items.length);

  return (
    <section className="section-app bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{testimonials.title}</h2>
          <p className="mt-6 text-para text-white/65">{testimonials.subtitle}</p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateX: -10 }}
              transition={{ duration: 0.45 }}
              style={{ transformPerspective: 800 }}
              className="rounded-2xl border border-white/10 bg-black p-8 sm:p-10"
            >
              <TypewriterQuote text={t.quote} active />
              <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", delay: 0.3 }}
                  className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/30"
                >
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" unoptimized />
                </motion.div>
                <div>
                  <cite className="not-italic font-bold text-white">{t.name}</cite>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button type="button" onClick={prev} aria-label="Previous" className="h-12 w-12 rounded-full border border-white/20">
              ←
            </button>
            {testimonials.items.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={item.name}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-primary" : "w-2 bg-white/30"}`}
              />
            ))}
            <button type="button" onClick={next} aria-label="Next" className="h-12 w-12 rounded-full border border-white/20">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

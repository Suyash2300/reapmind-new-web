"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CbChatVisual } from "@/components/chatbots/cb-chat-visual";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { chatbotsConfig } from "@/lib/chatbots-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function CbAiVerticals() {
  const { aiVerticals } = chatbotsConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [imgFailed, setImgFailed] = useState<Record<string, boolean>>({});
  const sector = aiVerticals.items[active];
  const useChatVisual = "useChatVisual" in sector && sector.useChatVisual;
  const sectorImage =
    imgFailed[sector.id] && "fallbackImage" in sector && sector.fallbackImage
      ? sector.fallbackImage
      : sector.image;

  return (
    <section
      className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20"
      aria-labelledby="cb-ai-verticals-heading"
    >
      <div className="container-app">
        <BlurFadeIn as="h2" id="cb-ai-verticals-heading" className="text-h3 font-bold text-white sm:text-h2">
          {aiVerticals.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)] lg:items-stretch lg:gap-8">
          <div className="flex flex-wrap gap-2 lg:flex-col" role="tablist" aria-label="AI chatbot industries">
            {aiVerticals.items.map((item, i) => (
              <HydrationButton
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`min-h-12 flex-1 rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition-all lg:flex-none ${
                  i === active
                    ? "border-white/25 text-white shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)]"
                    : "border-white/10 bg-black/30 text-white/55 hover:border-white/20"
                }`}
                style={
                  i === active
                    ? { borderColor: `${item.accent}66`, backgroundColor: `${item.accent}14` }
                    : undefined
                }
              >
                {item.title}
              </HydrationButton>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={sector.id}
              role="tabpanel"
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: smoothEase }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/55 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.65)]"
            >
              {useChatVisual ? (
                <div
                  className="border-b border-white/10 p-5 sm:p-7"
                  style={{ background: `linear-gradient(135deg, ${sector.accent}14, black)` }}
                >
                  <CbChatVisual />
                </div>
              ) : (
                <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
                  <Image
                    src={sectorImage}
                    alt={sector.title}
                    fill
                    quality={92}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    style={{ objectPosition: sector.imagePosition ?? "center center" }}
                    priority={active === 0}
                    onError={() => setImgFailed((prev) => ({ ...prev, [sector.id]: true }))}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" aria-hidden />
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{ background: `linear-gradient(135deg, ${sector.accent}33, transparent 55%)` }}
                    aria-hidden
                  />
                  <h3 className="absolute bottom-5 left-5 right-5 text-h4 font-bold text-white sm:text-h3">
                    {sector.title}
                  </h3>
                </div>
              )}
              <div className="p-5 sm:p-7">
                {useChatVisual && (
                  <h3 className="mb-3 text-h4 font-bold text-white sm:text-h3">{sector.title}</h3>
                )}
                <p className="text-para leading-relaxed text-white/65">{sector.description}</p>
                <Link
                  href="/contact-us#free-consultation"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: sector.accent }}
                >
                  Contact Us
                </Link>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

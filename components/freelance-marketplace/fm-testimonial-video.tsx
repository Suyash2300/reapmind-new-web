"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { freelanceMarketplaceConfig } from "@/lib/freelance-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

type FmTestimonialVideoProps = {
  src: string;
  poster: string;
  title: string;
  className?: string;
  fillHeight?: boolean;
};

export function FmTestimonialVideo({ src, poster, title, className, fillHeight = false }: FmTestimonialVideoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <BlurFadeIn className={fillHeight ? `h-full ${className ?? ""}` : className}>
      <div
        className={`group relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-black shadow-[0_40px_100px_-40px_rgba(26,105,253,0.45)] ${
          fillHeight ? "flex h-full min-h-0 flex-col" : ""
        }`}
      >
        <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-primary/40 via-transparent to-violet-500/30 opacity-60" aria-hidden />
        <div
          className={`relative overflow-hidden rounded-[1.72rem] bg-black ${
            fillHeight ? "min-h-[220px] flex-1 sm:min-h-[260px]" : "aspect-video"
          }`}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster={poster}
            playsInline
            controls={playing}
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          >
            <source src={src} type="video/mp4" />
          </video>

          {!playing && (
            <motion.button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/35 transition-colors hover:bg-black/25"
              aria-label={`Play video: ${title}`}
              whileHover={reducedMotion ? undefined : { scale: 1.01 }}
              transition={{ duration: 0.3, ease: smoothEase }}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-primary/90 shadow-[0_0_40px_rgba(26,105,253,0.55)] backdrop-blur-sm sm:h-20 sm:w-20">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white sm:h-8 sm:w-8" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </motion.button>
          )}
        </div>
        <p className="border-t border-white/10 px-4 py-3 text-center text-sm font-medium text-white/70">{title}</p>
      </div>
    </BlurFadeIn>
  );
}

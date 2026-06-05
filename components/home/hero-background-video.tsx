"use client";

import { useEffect, useRef, useState } from "react";
import { homeHero } from "@/lib/home-hero-config";

type HeroBackgroundVideoProps = {
  src: string;
  className?: string;
};

/**
 * Background hero video — explicit play() for reliable autoplay (Chrome, Safari, Cursor preview).
 */
export function HeroBackgroundVideo({
  src,
  className = "absolute inset-0 size-full object-cover",
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeSrc, setActiveSrc] = useState(src);

  useEffect(() => {
    setActiveSrc(src);
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          /* Autoplay blocked — retry once after a tick */
          window.setTimeout(() => {
            void video.play().catch(() => {});
          }, 150);
        });
      }
    };

    tryPlay();

    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [activeSrc]);

  const handleError = () => {
    if (activeSrc !== homeHero.video.fallbackMp4) {
      setActiveSrc(homeHero.video.fallbackMp4);
    }
  };

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      src={activeSrc}
      onError={handleError}
    />
  );
}

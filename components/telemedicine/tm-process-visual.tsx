"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { gsap, registerGsapPlugins } from "@/lib/animation/gsap-register";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

export function TmProcessVisual() {
  const { processVisual } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? processVisual.fallbackImage : processVisual.image;
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reducedMotion || !wrapRef.current || !imgRef.current) return;
      registerGsapPlugins();

      gsap.fromTo(
        imgRef.current,
        { scale: 0.92, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: 1.2,
          },
        },
      );
    },
    { scope: wrapRef, dependencies: [reducedMotion] },
  );

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="tm-process-visual-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tm-process-visual-heading" className="mx-auto max-w-3xl text-center text-h3 font-bold text-white sm:text-h2">
          {processVisual.title}
        </BlurFadeIn>

        <div ref={wrapRef} className="relative mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40 p-4 sm:p-6">
          <div ref={imgRef} className="relative mx-auto aspect-[16/7] max-w-5xl">
            <Image
              src={imageSrc}
              alt="ReapMind telemedicine development process"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
              onError={() => setImgFailed(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

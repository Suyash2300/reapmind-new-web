"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type Logo = { name: string; src: string };

export function ClientLogoShowcase({ logos }: { logos: readonly Logo[] }) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
        {logos.map((logo) => (
          <LogoItem key={logo.name} logo={logo} />
        ))}
      </ul>
    );
  }

  const rowOne = [...logos, ...logos];
  const rowTwo = [...[...logos].reverse(), ...[...logos].reverse()];

  return (
    <div className="pointer-events-none relative min-h-[7.5rem] select-none sm:min-h-[8.5rem]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface-header via-surface-header/80 to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface-header via-surface-header/80 to-transparent sm:w-28" />

      <LogoRow track={rowOne} duration="42s" />
      <LogoRow
        track={rowTwo}
        className="mt-6 sm:mt-8"
        duration="36s"
        reverse
      />
    </div>
  );
}

function LogoRow({
  track,
  className = "",
  duration,
  reverse = false,
}: {
  track: Logo[];
  className?: string;
  duration: string;
  reverse?: boolean;
}) {
  return (
    <div className={`overflow-hidden py-1 ${className}`}>
      <div
        className={`flex w-max items-center gap-10 animate-logo-marquee sm:gap-14 md:gap-16 ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
        style={{ animationDuration: duration }}
      >
        {track.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-14 w-[130px] shrink-0 items-center justify-center sm:h-16 sm:w-[150px]">
      <Image
        src={logo.src}
        alt={logo.name}
        width={160}
        height={80}
        className="h-auto max-h-10 w-auto max-w-[120px] object-contain opacity-90 brightness-0 invert sm:max-h-12 sm:max-w-[140px]"
      />
    </div>
  );
}

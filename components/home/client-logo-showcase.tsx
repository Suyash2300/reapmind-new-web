"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type Logo = { name: string; src: string };
type LogoSize = "default" | "large";

type ClientLogoShowcaseProps = {
  logos: readonly Logo[];
  /** Match marquee edge fade to section background */
  fadeVariant?: "header" | "dark";
  /** Alias for fadeVariant */
  variant?: "header" | "dark";
  size?: LogoSize;
};

export function ClientLogoShowcase({
  logos,
  fadeVariant,
  variant,
  size = "default",
}: ClientLogoShowcaseProps) {
  const reducedMotion = usePrefersReducedMotion();
  const resolvedFade = fadeVariant ?? variant ?? "header";
  const fadeClass =
    resolvedFade === "dark"
      ? "from-black via-black/80"
      : "from-surface-header via-surface-header/80";

  if (reducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12 lg:grid-cols-5 lg:gap-14">
        {logos.map((logo) => (
          <LogoItem key={logo.name} logo={logo} size={size} />
        ))}
      </ul>
    );
  }

  const rowOne = [...logos, ...logos];
  const rowTwo = [...[...logos].reverse(), ...[...logos].reverse()];
  const rowMinH =
    size === "large"
      ? "min-h-[10rem] sm:min-h-[12rem] md:min-h-[14rem]"
      : "min-h-[8.5rem] sm:min-h-[10rem] md:min-h-[11rem]";

  return (
    <div className={`pointer-events-none relative select-none ${rowMinH}`}>
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${fadeClass} to-transparent sm:w-28`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${fadeClass} to-transparent sm:w-28`}
      />

      <LogoRow track={rowOne} duration="42s" size={size} />
      <LogoRow
        track={rowTwo}
        className="mt-8 sm:mt-10"
        duration="36s"
        reverse
        size={size}
      />
    </div>
  );
}

function LogoRow({
  track,
  className = "",
  duration,
  reverse = false,
  size = "default",
}: {
  track: Logo[];
  className?: string;
  duration: string;
  reverse?: boolean;
  size?: LogoSize;
}) {
  return (
    <div className={`overflow-hidden py-1 ${className}`}>
      <div
        className={`flex w-max items-center gap-12 animate-logo-marquee sm:gap-16 md:gap-20 lg:gap-24 ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
        style={{ animationDuration: duration }}
      >
        {track.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} logo={logo} size={size} />
        ))}
      </div>
    </div>
  );
}

const logoSizeStyles: Record<LogoSize, { slot: string; sizes: string }> = {
  default: {
    slot: "h-16 w-[150px] sm:h-20 sm:w-[180px] md:h-24 md:w-[200px]",
    sizes: "(max-width: 640px) 150px, 200px",
  },
  large: {
    slot: "h-20 w-[190px] sm:h-24 sm:w-[230px] md:h-28 md:w-[270px] lg:h-32 lg:w-[300px]",
    sizes: "(max-width: 640px) 190px, (max-width: 1024px) 230px, 300px",
  },
};

function LogoItem({ logo, size = "default" }: { logo: Logo; size?: LogoSize }) {
  const s = logoSizeStyles[size];

  return (
    <div className={`relative shrink-0 ${s.slot}`}>
      <Image
        src={logo.src}
        alt={logo.name}
        fill
        quality={100}
        unoptimized
        sizes={s.sizes}
        className="object-contain opacity-90 brightness-0 invert"
      />
    </div>
  );
}

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
      <ul className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-5">
        {logos.map((logo) => (
          <LogoItem key={logo.name} logo={logo} size={size} animated={false} />
        ))}
      </ul>
    );
  }

  const rowOne = [...logos, ...logos];
  const rowTwo = [...[...logos].reverse(), ...[...logos].reverse()];

  return (
    <div className="pointer-events-none relative select-none overflow-hidden">
      {/* Edge fades */}
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
    <div className={`overflow-hidden py-2 ${className}`}>
      <div
        className={`flex w-max items-center gap-10 animate-logo-marquee sm:gap-14 md:gap-20 ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
        style={{ animationDuration: duration }}
      >
        {track.map((logo, i) => (
          <LogoItem key={`${logo.name}-${i}`} logo={logo} size={size} animated />
        ))}
      </div>
    </div>
  );
}

/**
 * Every logo slot has the SAME fixed height + width.
 * object-contain makes sure both wide wordmarks and compact icons
 * fill the box proportionally — no logo ever looks bigger/smaller.
 */
const logoSizeStyles: Record<LogoSize, { slot: string; sizes: string }> = {
  default: {
    // h-16 = 64px tall, w-40 = 160px wide — comfortable for all logo types
    slot: "h-16 w-40 sm:h-20 sm:w-48 md:h-20 md:w-52",
    sizes: "(max-width: 640px) 160px, 208px",
  },
  large: {
    slot: "h-20 w-52 sm:h-24 sm:w-60 md:h-28 md:w-72 lg:h-32 lg:w-80",
    sizes: "(max-width: 640px) 208px, (max-width: 1024px) 240px, 320px",
  },
};

function LogoItem({
  logo,
  size = "default",
  animated = true,
}: {
  logo: Logo;
  size?: LogoSize;
  animated?: boolean;
}) {
  const s = logoSizeStyles[size];

  return (
    <div
      className={`relative shrink-0 ${s.slot} ${
        animated
          ? "pointer-events-auto transition-transform duration-300 ease-out hover:scale-110"
          : ""
      }`}
    >
      <Image
        src={logo.src}
        alt={logo.name}
        fill
        unoptimized
        sizes={s.sizes}
        className="object-contain brightness-0 invert opacity-75 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

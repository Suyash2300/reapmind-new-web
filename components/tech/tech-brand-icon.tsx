"use client";

import { useState } from "react";

type TechBrandIconProps = {
  name: string;
  slug: string;
  color?: string;
  src?: string;
  size?: number;
  className?: string;
};

function initials(name: string) {
  const parts = name.replace(/\./g, "").split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

/** Brand mark via Simple Icons CDN (SVG). Native img — Next/Image blocks remote SVGs. */
export function TechBrandIcon({
  name,
  slug,
  color = "ffffff",
  src,
  size = 28,
  className = "",
}: TechBrandIconProps) {
  const [failed, setFailed] = useState(false);
  const hex = color.replace("#", "");
  const resolvedSrc =
    src ?? `https://cdn.simpleicons.org/${slug}/${hex}`;

  if (failed) {
    return (
      <span
        className={`flex shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-[0.65rem] font-bold text-white/75 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {initials(name)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote SVG; next/image disallows SVG
    <img
      src={resolvedSrc}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`shrink-0 object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

export function techIconUrl(slug: string, color = "ffffff") {
  return `https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`;
}

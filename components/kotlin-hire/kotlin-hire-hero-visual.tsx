"use client";

import { HireStackHeroVisual } from "@/components/shared/hire-stack-hero-visual";
import { hireStackAriaLabel } from "@/lib/hire-stack-visual";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

export function KotlinHeroVisual() {
  const { accentColor, hero } = kotlinHireConfig;
  return (
    <HireStackHeroVisual
      stack={hero.stackVisual}
      accentColor={accentColor}
      ariaLabel={hireStackAriaLabel(hero.stackVisual)}
    />
  );
}

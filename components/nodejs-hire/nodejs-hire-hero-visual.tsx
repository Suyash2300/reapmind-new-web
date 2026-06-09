"use client";

import { HireStackHeroVisual } from "@/components/shared/hire-stack-hero-visual";
import { hireStackAriaLabel } from "@/lib/hire-stack-visual";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";

export function NodejsHeroVisual() {
  const { accentColor, hero } = nodejsHireConfig;
  return (
    <HireStackHeroVisual
      stack={hero.stackVisual}
      accentColor={accentColor}
      ariaLabel={hireStackAriaLabel(hero.stackVisual)}
    />
  );
}

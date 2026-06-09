"use client";

import { HireStackHeroVisual } from "@/components/shared/hire-stack-hero-visual";
import { hireStackAriaLabel } from "@/lib/hire-stack-visual";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHeroVisual() {
  const { accentColor, hero } = angularHireConfig;
  return (
    <HireStackHeroVisual
      stack={hero.stackVisual}
      accentColor={accentColor}
      ariaLabel={hireStackAriaLabel(hero.stackVisual)}
    />
  );
}

"use client";

import { HireStackHeroVisual } from "@/components/shared/hire-stack-hero-visual";
import { hireStackAriaLabel } from "@/lib/hire-stack-visual";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

export function FlutterHeroVisual() {
  const { accentColor, hero } = flutterHireConfig;
  return (
    <HireStackHeroVisual
      stack={hero.stackVisual}
      accentColor={accentColor}
      ariaLabel={hireStackAriaLabel(hero.stackVisual)}
    />
  );
}

"use client";

import { HireStackHeroVisual } from "@/components/shared/hire-stack-hero-visual";
import { hireStackAriaLabel } from "@/lib/hire-stack-visual";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

export function SalesforceHeroVisual() {
  const { accentColor, hero } = salesforceHireConfig;
  return (
    <HireStackHeroVisual
      stack={hero.stackVisual}
      accentColor={accentColor}
      ariaLabel={hireStackAriaLabel(hero.stackVisual)}
    />
  );
}

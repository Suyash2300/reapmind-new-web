import { Metadata } from "next";
import { lifeConfig } from "@/lib/life-config";
import { LifeHero } from "@/components/life/life-hero";
import { LifeCulture } from "@/components/life/life-culture";
import { LifeBenefits } from "@/components/life/life-benefits";
import { LifeWhyUs } from "@/components/life/life-why-us";
import { LifeTeam } from "@/components/life/life-team";
import { LifeCta } from "@/components/life/life-cta";

export const metadata: Metadata = {
  title: lifeConfig.hero.title + " | ReapMind",
  description: lifeConfig.hero.description,
};

export default function LifeAtReapmindPage() {
  return (
    <main className="flex flex-col bg-black text-white selection:bg-primary/30 overflow-hidden">
      <LifeHero />
      <LifeCulture />
      <LifeWhyUs />
      <LifeTeam />
      <LifeBenefits />
      <LifeCta />
    </main>
  );
}

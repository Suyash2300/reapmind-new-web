import { teamConfig } from "@/lib/team-config";
import { TeamHero } from "@/components/team/team-hero";
import { TeamGrid } from "@/components/team/team-grid";
import { TeamWhyUs } from "@/components/team/team-why-us";
import { TeamStats } from "@/components/team/team-stats";
import { TeamCTA } from "@/components/team/team-cta";
import { CompanyLocations } from "@/components/company/company-locations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | ReapMind Innovations",
  description: teamConfig.hero.description,
};

export default function TeamPage() {
  return (
    <main className="flex flex-col bg-black text-primary-foreground selection:bg-primary/30">
      <TeamHero />
      <TeamGrid />
      <TeamWhyUs />
      <TeamStats />
      <TeamCTA />
      <CompanyLocations />
    </main>
  );
}

import { HomeClientsSection } from "@/components/home/home-clients-section";
import { HomeDigitalExcellenceSection } from "@/components/home/home-digital-excellence-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeIntroStatsSection } from "@/components/home/home-intro-stats-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <HomeHero />
      <HomeClientsSection />
      <HomePortfolioSection />
      <HomeIntroStatsSection />
      <HomeDigitalExcellenceSection />
    </div>
  );
}

import { HomeClientsSection } from "@/components/home/home-clients-section";
import { HomeDigitalExcellenceSection } from "@/components/home/home-digital-excellence-section";
import { HomeHero } from "@/components/home/home-hero";
import { HomeBankingAiShowcaseSection } from "@/components/home/home-banking-ai-showcase-section";
import { HomeBankingAiCtaSection } from "@/components/home/home-banking-ai-cta-section";
import { HomeIntroStatsSection } from "@/components/home/home-intro-stats-section";
import { HomePortfolioSection } from "@/components/home/home-portfolio-section";
import { HomeWhyChooseUsSection } from "@/components/home/home-why-choose-us-section";
import { HomeMeetingIndustriesSection } from "@/components/home/home-meeting-industries-section";
import { HomeCuttingEdgeTechSection } from "@/components/home/home-cutting-edge-tech-section";
import { HomeServicesCtaSection } from "@/components/home/home-services-cta-section";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <HomeHero />
      <HomeClientsSection />
      <HomePortfolioSection />
      <HomeIntroStatsSection />
      <HomeDigitalExcellenceSection />
      <HomeBankingAiShowcaseSection />
      <HomeBankingAiCtaSection />
      <HomeMeetingIndustriesSection />
      <HomeWhyChooseUsSection />
      <HomeCuttingEdgeTechSection />
      <HomeServicesCtaSection />
    </div>
  );
}

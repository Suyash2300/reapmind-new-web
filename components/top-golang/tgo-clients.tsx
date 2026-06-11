"use client";

import { TopTechClientsSection } from "@/components/top-tech/top-tech-clients-section";
import { topGolangConfig } from "@/lib/top-golang-config";

export function TgoClients() {
  const { clients } = topGolangConfig;
  return <TopTechClientsSection title={clients.title} logos={clients.logos} />;
}

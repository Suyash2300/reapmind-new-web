"use client";

import { TopTechClientsSection } from "@/components/top-tech/top-tech-clients-section";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexClients() {
  const { clients } = topExpressjsConfig;
  return <TopTechClientsSection title={clients.title} logos={clients.logos} />;
}

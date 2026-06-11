"use client";

import { TopTechClientsSection } from "@/components/top-tech/top-tech-clients-section";
import { topNodejsConfig } from "@/lib/top-nodejs-config";

export function TnjClients() {
  const { clients } = topNodejsConfig;
  return <TopTechClientsSection title={clients.title} logos={clients.logos} />;
}

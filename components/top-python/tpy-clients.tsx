"use client";

import { TopTechClientsSection } from "@/components/top-tech/top-tech-clients-section";
import { topPythonConfig } from "@/lib/top-python-config";

export function TpyClients() {
  const { clients } = topPythonConfig;
  return <TopTechClientsSection title={clients.title} logos={clients.logos} />;
}

"use client";

import { TopTechClientsSection } from "@/components/top-tech/top-tech-clients-section";
import { topReactNativeMumbaiConfig } from "@/lib/top-react-native-mumbai-config";

export function TrnmClients() {
  const { clients } = topReactNativeMumbaiConfig;
  return <TopTechClientsSection title={clients.title} logos={clients.logos} />;
}

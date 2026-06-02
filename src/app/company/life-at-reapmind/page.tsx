import { Metadata } from "next";
import LifeAtReapMind from "@/app/life-at-reapmind/page";

export const metadata: Metadata = {
  title:
    "life@reapmind - Top Digital Transformation Company in India USA UK UAE",
  description:
    "Life @ ReapMind! Brilliant professionals – that's what makes us different! Showcasing Innovation, Delivering Excellence. Discover our vibrant culture, core values, and the innovative environment where every voice matters.",
  openGraph: {
    title:
      "life@reapmind - Top Digital Transformation Company in India USA UK UAE",
    description:
      "Life @ ReapMind! Brilliant professionals – that's what makes us different! Showcasing Innovation, Delivering Excellence.",
    url: "https://reapmind.com/company/life-at-reapmind",
    siteName: "ReapMind",
    type: "website",
  },
};

export default function LifeAtReapMindPage() {
  return <LifeAtReapMind />;
}

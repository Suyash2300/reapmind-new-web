import { Metadata } from "next";
import TeamClient from "./team-client";

export const metadata: Metadata = {
  title: "Team | ReapMind Innovations - Top Digital Transformation Company in India USA UK UAE",
  description: "Know our experts. Leading the way to digital transformation with brilliant minds. Step into a world where innovation reigns supreme, and where your business soars to unprecedented heights.",
  openGraph: {
    title: "Team | ReapMind Innovations - Top Digital Transformation Company",
    description: "Know our experts. Leading the way to digital transformation with brilliant minds.",
    url: "https://reapmind.com/team-reapmind",
    siteName: "ReapMind",
    images: [
      {
        url: "/images/company-team.jpg",
        width: 1200,
        height: 630,
        alt: "ReapMind Innovations Team",
      },
    ],
    type: "website",
  },
};

export default function TeamPage() {
  return <TeamClient />;
}

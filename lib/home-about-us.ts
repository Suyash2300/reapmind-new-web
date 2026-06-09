/** Homepage — About us block (from https://reapmind.com/) */

import { teamConfig } from "@/lib/team-config";

export const homeAboutUs = {
  eyebrow: "Who we are",
  title: "About us",
  lead:
    "We are proud to be acknowledged as a top digital transformation company in India and the United States. As a premium brand, we work with innovative technologies in a results-oriented environment.",
  supporting: [
    "At ReapMind Innovations, we are dedicated to delivering world-class IT and digital solutions that meet and surpass our client’s expectations while maintaining the highest standards.",
    "ReapMind offers innovative solutions that help businesses stay competitive in the digital transformation market. Our services leverage AI, automation, cloud computing, and data analytics to streamline operations, enhance decision-making, improve efficiency, drive growth, foster innovation, optimize processes, reduce costs, accelerate performance, and enable scalability, keeping businesses ahead of the curve.",
  ],
  image: {
    src: "/company/hero-office.jpg",
    alt: "ReapMind team collaborating in the office",
  },
  team: {
    eyebrow: "Our leadership",
    title: "Brilliant Professionals",
    highlight: "that's what makes us different!",
    subtitle:
      "Leading the way to digital transformation with brilliant minds — strategy, operations, and architecture under one roof.",
    badges: teamConfig.highlights,
    members: [
      {
        ...teamConfig.members[0],
        focus:
          "Sets the vision for ReapMind — blending innovation, client trust, and global growth.",
      },
      {
        ...teamConfig.members[1],
        focus:
          "Shapes business strategy and partnerships that turn ambitious ideas into scalable wins.",
      },
      {
        ...teamConfig.members[2],
        focus:
          "Orchestrates delivery excellence — keeping projects on track, on quality, and on time.",
      },
      {
        ...teamConfig.members[3],
        focus:
          "Architects enterprise-grade systems built to scale, integrate, and endure.",
      },
    ],
    cta: { label: "Meet our team", href: "/team-reapmind" },
  },
  proof: {
    title: "Why Choose Us",
    subtitle: "Outcomes that speak louder than promises.",
    stats: [
      {
        id: "products",
        kind: "static" as const,
        display: "25,000 +",
        label: "Products Delivered",
      },
      {
        id: "satisfaction",
        kind: "animated" as const,
        end: 99,
        suffix: "%",
        label: "Client satisfaction rate",
      },
      {
        id: "clients",
        kind: "animated" as const,
        end: 100,
        suffix: "+",
        label: "Total Corporate Clients",
      },
      {
        id: "awards",
        kind: "animated" as const,
        end: 99,
        suffix: "%",
        label: "Awards & Certifications",
      },
    ],
  },
  companyCta: { label: "Learn more about us", href: "/about-our-company" },
} as const;

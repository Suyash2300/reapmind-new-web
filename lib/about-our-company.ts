/** About our company — content from https://reapmind.com/about-our-company/ */

import { homeClients } from "@/lib/home-sections";

export const aboutOurCompanySeo = {
  title: "Top Mobile App Development Company in India & USA | ReapMind",
  description:
    "Since our enthusiast beginning, ReapMind delivers cutting-edge technology solutions to startups, SMBs, and enterprises — your Digital IT partner in India and the USA.",
  canonical: "https://reapmind.com/about-our-company/",
} as const;

export const aboutOurCompanyHero = {
  eyebrow: "Who we are",
  title: "WHO WE ARE",
  subtitle: "Glance our Uplifting story",
  stamps: ["Est. 2018", "India · USA", "Digital IT Partner"],
} as const;

export const aboutOurCompanyStory = {
  chapters: [
    {
      id: "beginning",
      label: "The beginning",
      body: "Since the enthusiast beginning, ReapMind is in the way to bring digital disruption in the conventional market space and ambitiously missions to deliver cutting-edge technology solutions to auspicious start-ups, small and medium growing businesses, and established enterprises that make them reach never touching heights.",
    },
    {
      id: "partner",
      label: "Digital IT partner",
      body: "Being glorified as a Digital IT partner, we empower businesses to figure out the complexities in today's market space and encourage them to incorporate the best-fit technology solution that certainly delivers new value to their end customers.",
    },
    {
      id: "mission",
      label: "Our mission",
      body: "Our ultimate goal is to \"Bring wonders in your business with new-age technology solutions\". We are here to cheers our client's success, regardless of whether they are newly found ventures, companies aiming to outperform the competition, or well-established associations focused to maintain their positions.",
    },
  ],
  quote:
    "Bring wonders in your business with new-age technology solutions.",
} as const;

export const aboutOurCompanyEthics = {
  title: "Our core ethics that make us reputable",
  intro:
    "We have identified what can make us stand exclusive from others. Our core ethics, thus, narrates the genuineness and transparency in our behavior.",
  items: [
    {
      id: "innovation",
      title: "Commitment for Innovation and Quality",
      short: "Innovation & Quality",
      body: "Innovation is what we believe in. We never aim to offer the same solutions for diverse clients but help them to rule out with our unique and innovative solutions that carry excellence that's what brings the difference in crowed space.",
    },
    {
      id: "integrity",
      title: "Integrity",
      short: "Integrity",
      body: "We respect our client's visions, ideas, and business strategy and vow to safeguards the internal information with extreme care and confidentiality.",
    },
    {
      id: "reliability",
      title: "Reliability",
      short: "Reliability",
      body: "For us client's success is superior and our success is dedicated to achieving their goals. We target to provide that exceptional technology-based solution that stuns our client's expectations and makes them spread the word of our profit-generating services.",
    },
    {
      id: "trust",
      title: "Trust",
      short: "Trust",
      body: "Trust is everything for us to produce an impeccable digital solution and we can mount up your business to peak level only if we uphold your trust throughout the process.",
    },
  ],
} as const;

export const aboutOurCompanyClients = {
  title: "Among our clients",
  logos: homeClients.logos,
} as const;

export const aboutOurCompanyStats = [
  { value: "200+", label: "Specialists" },
  { value: "100+", label: "Corporate Clients" },
  { value: "250+", label: "Projects Delivered" },
  { value: "95+", label: "Client satisfaction rate" },
] as const;

export const aboutOurCompanyCta = {
  title: "Ready to bring wonders to your business?",
  body: "Talk to our team — first consultation is free.",
  href: "/contact-us#free-consultation",
  buttonLabel: "Get free consultation",
} as const;

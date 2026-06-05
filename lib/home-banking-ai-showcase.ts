/** Banking AI / VIFI section — content from https://reapmind.com/ */

export const homeBankingAiShowcase = {
  title:
    "We are the pioneers of deep AI integration in banking. We are focused on revolutionary frontend interactions and seamless transactional AI.",
  services: [
    {
      id: "vifi-space",
      title: "VIFI SPACE",
      description: "Advanced spatial banking platform",
    },
    {
      id: "vifi-ai",
      title: "VIFI AI",
      description: "Cutting-edge GenAI for conversational banking",
    },
    {
      id: "vifi-makeover",
      title: "VIFI MAKEOVER",
      description: "Service to dramatically revamp existing platforms",
    },
    {
      id: "vifi-core",
      title: "VIFI CORE",
      description:
        "Service focused on setting up core banking for new-age experiences",
    },
  ],
  video: {
    youtubeId: "VpVvzlJwTzo",
    title: "VIFI banking platform demo",
  },
  cta: {
    headline:
      "Ready to move from strategy to extraordinary results? Partner with us and experience the power of flawless execution.",
    buttonLabel: "Get a free Consultation",
    href: "/contact-us",
  },
  stats: [
    { id: "clients", value: "25,000 +", label: "Clients Served" },
    { id: "talent", value: "20,000 +", label: "Global Talent" },
    { id: "industries", value: "300 +", label: "Industries Served" },
    { id: "years", value: "14 +", label: "Years in Business" },
  ] as const,
} as const;

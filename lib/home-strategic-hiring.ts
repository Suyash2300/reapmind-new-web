/** Homepage — Strategic Hiring Partner (from https://reapmind.com/) */

export type HiringModel = {
  id: string;
  title: string;
  description: string;
  icon: "contract" | "c2h" | "permanent" | "onsite" | "remote" | "pre-hiring" | "post-hiring";
};

export type HiringDimension = {
  id: string;
  label: string;
  shortLabel: string;
  accentLine: string;
  accentGlow: string;
  items: readonly HiringModel[];
};

export const homeStrategicHiring = {
  eyebrow: "Talent Solutions",
  title: "Strategic Hiring Partner for Every Tech Need",
  intro:
    "Outsource the complete recruitment process to us and we'll make sure that you hire software developers that are right for your business.",
  dimensions: [
    {
      id: "engagement",
      label: "By Engagement",
      shortLabel: "Engagement",
      accentLine: "from-primary via-primary/40 to-transparent",
      accentGlow: "rgba(26,105,253,0.35)",
      items: [
        {
          id: "contract",
          title: "Contract",
          icon: "contract",
          description:
            "Hire a software programmer who works with you full-time on a contract basis. We will manage all the hiring and post-hiring formalities.",
        },
        {
          id: "c2h",
          title: "C2H Model",
          icon: "c2h",
          description:
            "If you like the work of the developer you are working with, you can hire them permanently on your payroll after a certain period.",
        },
        {
          id: "permanent",
          title: "Permanent",
          icon: "permanent",
          description:
            "We help you hire skilled in-house software engineers 10X faster, ensuring seamless integration, collaboration, creativity, and innovation.",
        },
      ],
    },
    {
      id: "location",
      label: "By Location",
      shortLabel: "Location",
      accentLine: "from-cyan-400 via-cyan-400/35 to-transparent",
      accentGlow: "rgba(34,211,238,0.28)",
      items: [
        {
          id: "onsite",
          title: "On-Site",
          icon: "onsite",
          description:
            "Hire software developers who can work closely with your team in an office environment or in a hybrid setup.",
        },
        {
          id: "remote",
          title: "Remote",
          icon: "remote",
          description:
            "Hire full-time remote software engineers for seamless integration, top performance, and exceptional expertise.",
        },
      ],
    },
    {
      id: "stage",
      label: "By Hiring Stage",
      shortLabel: "Hiring Stage",
      accentLine: "from-emerald-400 via-emerald-400/35 to-transparent",
      accentGlow: "rgba(16,185,129,0.28)",
      items: [
        {
          id: "pre-hiring",
          title: "Pre-Hiring",
          icon: "pre-hiring",
          description:
            "We save you time in sourcing, screening, and share only the best vetted profiles for you to efficiently interview, select, and hire top talent quickly and confidently.",
        },
        {
          id: "post-hiring",
          title: "Post-Hiring",
          icon: "post-hiring",
          description:
            "We handle every aspect of onboarding including statutory compliances, weekly timesheets, and reviews through a dedicated account manager.",
        },
      ],
    },
  ] as const satisfies readonly HiringDimension[],
  cta: {
    label: "Start hiring with ReapMind",
    href: "/contact-us#free-consultation",
  },
} as const;

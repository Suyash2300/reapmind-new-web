/**
 * Portfolio case studies — paths aligned with https://reapmind.com/portfolio/*
 * Images stored in /public/portfolio/
 */

export type PortfolioHighlight = {
  value: string;
  label: string;
};

export type PortfolioCaseStudy = {
  slug: string;
  /** Short label for top filter pills */
  tabLabel: string;
  title: string;
  tagline: string;
  summary: string;
  href: `/portfolio/${string}`;
  image: string;
  imageAlt: string;
  accent: string;
  highlights: readonly [PortfolioHighlight, PortfolioHighlight];
  bullets?: readonly [string, string];
};

export const portfolioListing = {
  title: "Our Portfolio Works",
  description:
    "Discover our diverse portfolio of successful projects, including websites, mobile apps, and enterprise solutions tailored to startups and large organizations alike.",
  viewAllHref: "/portfolio-reapmind" as const,
  viewAllLabel: "View all case studies",
} as const;

export const portfolioCases = [
  {
    slug: "happy-harvest-farms-delivery",
    tabLabel: "Happy Harvest",
    title: "Happy Harvest Farms",
    tagline: "Organic grocery delivery",
    summary:
      "HappyHarvestFarms connects users to 1200+ farmers for certified-organic, chemical-free food across India.",
    href: "/portfolio/happy-harvest-farms-delivery",
    image: "/portfolio/happy-harvest.webp",
    imageAlt: "Happy Harvest Farms organic grocery app",
    accent: "#f4f1e8",
    highlights: [
      { value: "10,000+", label: "App downloads" },
      { value: "100K", label: "New users acquired" },
    ],
    bullets: [
      "Farm-to-table marketplace for organic produce",
      "Direct farmer network across India",
    ],
  },
  {
    slug: "leep-rideshare-app",
    tabLabel: "Leep Ride",
    title: "Leep Ride",
    tagline: "Rideshare & mobility",
    summary:
      "Leep Ride revolutionizes cab booking with a seamless experience across India, the USA, and the UK.",
    href: "/portfolio/leep-rideshare-app",
    image: "/portfolio/leep-rideshare.png",
    imageAlt: "Leep Ride rideshare application",
    accent: "#e3f4fc",
    highlights: [
      { value: "1,000+", label: "App downloads" },
      { value: "1K+", label: "Active riders" },
    ],
    bullets: [
      "Multi-region booking with reliable dispatch",
      "User-first interface for hassle-free journeys",
    ],
  },
  {
    slug: "carloana-car-finance-made-smarter",
    tabLabel: "Carloana",
    title: "Carloana",
    tagline: "Smart car finance",
    summary:
      "Carloana simplifies car buying and financing with Kotak Mahindra Bank and Bank of Baroda integrations.",
    href: "/portfolio/carloana-car-finance-made-smarter",
    image: "/portfolio/carloana.webp",
    imageAlt: "Carloana car finance web application",
    accent: "#ffffff",
    highlights: [
      { value: "50,000+", label: "App downloads" },
      { value: "600K", label: "New users acquired" },
    ],
    bullets: [
      "One-click comparison of cars and variants",
      "Trusted bank partnerships for financing",
    ],
  },
  {
    slug: "formulaw-consult-lawyer-online",
    tabLabel: "FormuLaw",
    title: "FormuLaw",
    tagline: "Online legal consultation",
    summary:
      "FormuLaw connects users across India with experienced lawyers for civil, criminal, real estate, and business matters.",
    href: "/portfolio/formulaw-consult-lawyer-online",
    image: "/portfolio/formulaw.webp",
    imageAlt: "FormuLaw lawyer consultation app",
    accent: "#f0edf8",
    highlights: [
      { value: "20,000+", label: "App downloads" },
      { value: "200K", label: "New users acquired" },
    ],
    bullets: [
      "Ask-an-expert and pro bono workflows",
      "Nationwide network of verified lawyers",
    ],
  },
  {
    slug: "worlds-best-tool-for-personal-connections",
    tabLabel: "& Connection",
    title: "& Connection",
    tagline: "Inclusive social connection",
    summary:
      "A USA-based personal connection app prioritizing inclusivity, safety, and meaningful matches.",
    href: "/portfolio/worlds-best-tool-for-personal-connections",
    image: "/portfolio/connection.webp",
    imageAlt: "Personal connection mobile application",
    accent: "#fdf2f7",
    highlights: [
      { value: "10,000+", label: "App downloads" },
      { value: "100K", label: "Community members" },
    ],
    bullets: [
      "Community guidelines for safe, respectful UX",
      "Designed for meaningful long-term connections",
    ],
  },
  {
    slug: "vkonnect-health",
    tabLabel: "Vkonnect Health",
    title: "Vkonnect Health",
    tagline: "Digital health platform",
    summary:
      "Healthcare experience engineered for accessible consultations and patient engagement at scale.",
    href: "/portfolio/vkonnect-health",
    image: "/portfolio/vkonnect.webp",
    imageAlt: "Vkonnect Health healthcare application",
    accent: "#ecfdf5",
    highlights: [
      { value: "24/7", label: "Care access" },
      { value: "HIPAA-ready", label: "Secure workflows" },
    ],
    bullets: [
      "Telehealth and engagement in one ecosystem",
      "Built for providers and patient trust",
    ],
  },
  {
    slug: "mechuni-mechanical-services-and-parking-app",
    tabLabel: "MechUni",
    title: "MechUni",
    tagline: "Mechanical services & parking",
    summary:
      "MechUni streamlines mechanical services and smart parking operations through a unified mobile experience.",
    href: "/portfolio/mechuni-mechanical-services-and-parking-app",
    image: "/portfolio/mechuni.webp",
    imageAlt: "MechUni mechanical services and parking app",
    accent: "#eef6ff",
    highlights: [
      { value: "5,000+", label: "App downloads" },
      { value: "5K+", label: "Active users" },
    ],
    bullets: [
      "Service booking and parking in one flow",
      "Built for field teams and customers",
    ],
  },
  {
    slug: "beemate-enhancing-school-transportation-safety-and-communication",
    tabLabel: "Beemate",
    title: "Beemate App",
    tagline: "School transportation",
    summary:
      "Beemate enhances school transportation safety and parent–school communication with real-time tracking and alerts.",
    href: "/portfolio/beemate-enhancing-school-transportation-safety-and-communication",
    image: "/portfolio/beemate.png",
    imageAlt: "Beemate school transportation application",
    accent: "#fff8e8",
    highlights: [
      { value: "Live", label: "Route tracking" },
      { value: "Safe", label: "Student comms" },
    ],
    bullets: [
      "Real-time bus visibility for parents",
      "Safer, transparent school transport",
    ],
  },
  {
    slug: "muncipal-banking",
    tabLabel: "Municipal Bank",
    title: "Municipal Bank",
    tagline: "Digital banking app",
    summary:
      "A leading European bank revolutionizing customer experience with a seamless mobile banking platform for finances and personalized services.",
    href: "/portfolio/muncipal-banking",
    image: "/portfolio/municipal-bank.png",
    imageAlt: "Municipal Bank digital banking application",
    accent: "#f5f5f5",
    highlights: [
      { value: "5,000+", label: "App downloads" },
      { value: "5K+", label: "New users" },
    ],
    bullets: [
      "All-in-one mobile banking experience",
      "Personalized financial services",
    ],
  },
  {
    slug: "pawspace",
    tabLabel: "Paw Space",
    title: "Paw Space",
    tagline: "Pet care platform",
    summary:
      "Paw Space connects pet owners with trusted care services through an intuitive, mobile-first marketplace experience.",
    href: "/portfolio/pawspace",
    image: "/portfolio/pawspace.png",
    imageAlt: "Paw Space pet care application",
    accent: "#fef3e8",
    highlights: [
      { value: "10,000+", label: "App downloads" },
      { value: "50K+", label: "Pet parents" },
    ],
    bullets: [
      "Booking and care coordination made simple",
      "Trusted network for pet services",
    ],
  },
  {
    slug: "deutsche-quality-systems-india-dqs-india-audit-app",
    tabLabel: "DQS India",
    title: "Deutsche Quality Systems India",
    tagline: "Audit App",
    summary:
      "A comprehensive audit application for Deutsche Quality Systems India, streamlining compliance workflows and field inspections.",
    href: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app",
    image: "/portfolio/dqs-india.jpg",
    imageAlt: "DQS India audit application",
    accent: "#eef4ff",
    highlights: [
      { value: "Audit-ready", label: "Compliance workflows" },
      { value: "Field", label: "Inspection tools" },
    ],
    bullets: [
      "Digitized audit and quality assurance",
      "Built for enterprise compliance teams",
    ],
  },
  {
    slug: "lakshya-academy-empowering-education",
    tabLabel: "Lakshya Academy",
    title: "Lakshya Academy",
    tagline: "Empowering education through technology",
    summary:
      "Lakshya Academy delivers a modern learning platform that connects students, educators, and institutions with engaging digital tools.",
    href: "/portfolio/lakshya-academy-empowering-education",
    image: "/portfolio/dqs-india.jpg",
    imageAlt: "Lakshya Academy education platform",
    accent: "#fff4e6",
    highlights: [
      { value: "Digital", label: "Learning delivery" },
      { value: "Scalable", label: "Institution-ready" },
    ],
    bullets: [
      "Student-centric learning experiences",
      "Tools for educators and administrators",
    ],
  },
  {
    slug: "mt-educare-education-management",
    tabLabel: "MTeducare",
    title: "MTeducare",
    tagline: "Education management",
    summary:
      "MTeducare revolutionizes education management with unified administration, scheduling, and student engagement in one platform.",
    href: "/portfolio/mt-educare-education-management",
    image: "/portfolio/mteducare.jpg",
    imageAlt: "MTeducare education management application",
    accent: "#f0f7ff",
    highlights: [
      { value: "Unified", label: "School operations" },
      { value: "Engaged", label: "Student experience" },
    ],
    bullets: [
      "End-to-end institution management",
      "Scheduling and communication in one place",
    ],
  },
  {
    slug: "organic-world",
    tabLabel: "Organic World",
    title: "organic world",
    tagline: "Organic marketplace",
    summary:
      "organic world connects conscious consumers with certified organic products through a seamless mobile commerce experience.",
    href: "/portfolio/organic-world",
    image: "/portfolio/organic-world.png",
    imageAlt: "organic world marketplace application",
    accent: "#edf7ed",
    highlights: [
      { value: "Organic", label: "Certified catalog" },
      { value: "Direct", label: "Consumer reach" },
    ],
    bullets: [
      "Mobile-first organic grocery experience",
      "Trusted product discovery and checkout",
    ],
  },
  {
    slug: "i30-jee-neet-foundation-coaching-programs-app-reapmind",
    tabLabel: "i30",
    title: "i30",
    tagline: "JEE, NEET & Foundation coaching",
    summary:
      "i30 is a coaching programs app for JEE, NEET, and foundation courses — delivering structured learning paths and progress tracking.",
    href: "/portfolio/i30-jee-neet-foundation-coaching-programs-app-reapmind",
    image: "/portfolio/mteducare.jpg",
    imageAlt: "i30 coaching programs application",
    accent: "#f5f0ff",
    highlights: [
      { value: "JEE & NEET", label: "Exam prep" },
      { value: "Foundation", label: "Course tracks" },
    ],
    bullets: [
      "Structured coaching program delivery",
      "Progress tracking for students and mentors",
    ],
  },
] as const satisfies readonly PortfolioCaseStudy[];

export type PortfolioSlug = (typeof portfolioCases)[number]["slug"];

const bySlug = new Map<string, PortfolioCaseStudy>(
  portfolioCases.map((c) => [c.slug, c]),
);

export function getPortfolioCase(slug: string): PortfolioCaseStudy | undefined {
  return bySlug.get(slug);
}

export function getPortfolioSlugs(): PortfolioSlug[] {
  return portfolioCases.map((c) => c.slug);
}

export const portfolioCarouselCases = portfolioCases;

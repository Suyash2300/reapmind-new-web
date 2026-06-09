/** Shared portfolio grid used across service landing pages. */

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  link: string;
};

/** Images aligned with live case-study hero assets (distinct per project). */
export const recentWorksPortfolio: PortfolioItem[] = [
  {
    title: "Deutsche Quality Systems India (DQS India) – Audit App",
    category: "Enterprise",
    image: "/generative-ai/2.jpg",
    link: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app",
  },
  {
    title: "Lakshya Academy: Empowering Education Through Technology",
    category: "EdTech",
    image: "/generative-ai/3.jpg",
    link: "/portfolio/lakshya-academy-empowering-education",
  },
  {
    title: "MTeducare: Revolutionizing Education Management",
    category: "EdTech",
    image: "/generative-ai/1.jpg",
    link: "/portfolio/mt-educare-education-management",
  },
  {
    title: "Organic World",
    category: "E-Commerce",
    image: "/generative-ai/banner-2.png",
    link: "/portfolio/organic-world",
  },
  {
    title: "PawSpace",
    category: "Marketplace",
    image: "/generative-ai/banner-1.png",
    link: "/portfolio/pawspace",
  },
  {
    title: "Municipal Banking",
    category: "FinTech",
    image: "/generative-ai/Municipal-Bank-hero-image.png",
    link: "/portfolio/muncipal-banking",
  },
];

export const industrySectors = {
  title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
  items: [
    { name: "Healthcare", icon: "/enterprise-mobility/doctor.png" },
    { name: "Banking", icon: "/enterprise-mobility/mobile-payment.png" },
    { name: "eCommerce & Retail", icon: "/enterprise-mobility/mobile-shopping.png" },
    { name: "Education", icon: "/enterprise-mobility/edu.png" },
    { name: "Electric Vehicles", icon: "/enterprise-mobility/electric-car.png" },
    { name: "Food & Restaurants", icon: "/enterprise-mobility/cinema.png" },
    { name: "On-Demand Solutions", icon: "/enterprise-mobility/smartphone.png" },
    { name: "Supply chain & Logistics", icon: "/enterprise-mobility/logistics-1.png" },
    { name: "Travel & Hospitality", icon: "/enterprise-mobility/vacation.png" },
    { name: "Media", icon: "/enterprise-mobility/newspaper.png" },
    { name: "NFT & Crypto", icon: "/enterprise-mobility/blockchain.png" },
    { name: "Entertainment", icon: "/enterprise-mobility/cinema.png" },
  ],
} as const;

export const aiInsightsArticles = [
  {
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    date: "Nov 5, 2025",
    author: "Prakhar Lohia",
    link: "/ai-agent-development-cost-for-hr-industry/",
  },
  {
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    date: "Oct 31, 2025",
    author: "Prakhar Lohia",
    link: "/ai-agent-development-cost-2025/",
  },
  {
    title: "Why Your Enterprise Needs a Custom Intranet Portal",
    category: "Offshore Development",
    date: "Oct 14, 2025",
    author: "Prakhar Lohia",
    link: "/why-your-enterprise-needs-a-custom-intranet-portal/",
  },
  {
    title: "How to Build an AI-Powered Language Learning App",
    category: "Artificial Intelligence",
    date: "Aug 14, 2025",
    author: "ReapMind Innovations",
    link: "/how-to-build-an-ai-powered-language-learning-app/",
  },
  {
    title: "Smarter School Bus Monitoring Solution with IoT & Mobility in 2025",
    category: "Uncategorized",
    date: "Aug 14, 2025",
    author: "ReapMind Innovations",
    link: "/blogs",
  },
  {
    title: "DevOps Automation: Approaching Business-Critical Functionality",
    category: "Blog",
    date: "May 7, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
  },
  {
    title: "The Role of AI in Intelligent Document Processing and Management",
    category: "Artificial Intelligence",
    date: "May 6, 2025",
    author: "ReapMind Innovations",
    link: "/blogs",
  },
  {
    title: "EMR Integration in Healthcare Systems – Benefits, Features, Process, Costs",
    category: "Technology",
    date: "May 5, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
  },
  {
    title: "Cybersecurity in Manufacturing: Building Cyber Resilience for Smart Factories",
    category: "Technology",
    date: "May 1, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
  },
] as const;

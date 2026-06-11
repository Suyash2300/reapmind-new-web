import { blogPostContent } from "@/lib/blog-post-content";
import { blogSlugAliases } from "@/lib/blog-routes";

export type InsightCard = {
  title: string;
  category: string;
  date: string;
  author: string;
  link: string;
  image?: string;
};

const insightArticleMeta: Omit<InsightCard, "link">[] = [
  {
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    date: "Nov 5, 2025",
    author: "Prakhar Lohia",
  },
  {
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    date: "Nov 5, 2025",
    author: "Prakhar Lohia",
  },
  {
    title: "Why Your Enterprise Needs a Custom Intranet Portal (And How to Build One That Actually Works)",
    category: "Offshore Development",
    date: "Oct 18, 2025",
    author: "Prakhar Lohia",
  },
  {
    title: "How to Build an AI-Powered Language Learning App: Features, Process & Costs (2025 Guide)",
    category: "Artificial Intelligence",
    date: "Aug 15, 2025",
    author: "ReapMind Innovations",
  },
  {
    title: "Smarter School Bus Monitoring Solution with IoT & Mobility in 2025",
    category: "Uncategorized",
    date: "Aug 15, 2025",
    author: "ReapMind Innovations",
  },
  {
    title: "DevOps Automation: Approaching Business-Critical Functionality",
    category: "Blog",
    date: "May 7, 2025",
    author: "Prakhar Lohia",
  },
  {
    title: "The Role of AI in Intelligent Document Processing and Management – Benefits and Applications",
    category: "Artificial Intelligence",
    date: "Apr 6, 2025",
    author: "ReapMind Innovations",
  },
  {
    title: "EMR Integration in Healthcare Systems – Benefits, Features, Process, Costs",
    category: "Technology",
    date: "May 5, 2025",
    author: "Prakhar Lohia",
  },
  {
    title: "Cybersecurity in Manufacturing: Building Cyber Resilience for Smart Factories",
    category: "Technology",
    date: "May 2, 2025",
    author: "Prakhar Lohia",
  },
  {
    title: "How Much Does It Cost to Develop a Mutual Fund Investment Portal or App?",
    category: "Technology",
    date: "Apr 30, 2025",
    author: "Prakhar Lohia",
  },
  {
    title: "Healthcare Workforce Management Software: A Catalyst for Streamlined Business Operations",
    category: "Healthcare",
    date: "Apr 24, 2025",
    author: "Prakhar Lohia",
  },
  {
    title: "How an AI Chatbot for Higher Education Revolutionizes Student Support Services",
    category: "Artificial Intelligence",
    date: "Apr 28, 2025",
    author: "Prakhar Lohia",
  },
];

const canonicalSlugs = [
  "how-much-does-it-cost-to-develop-an-ai-agent-for-the-human-resource-industry",
  "how-much-does-it-cost-to-develop-an-ai-agent-in-2025",
  "why-your-enterprise-needs-a-custom-intranet-portal-and-how-to-build-one-that-actually-works",
  "how-to-build-an-ai-powered-language-learning-app-features-process-costs-2025-guide",
  "smarter-school-bus-monitoring-solution-with-iot-mobility-in-2025",
  "devops-automation-approaching-business-critical-functionality",
  "the-role-of-ai-in-intelligent-document-processing-and-management-benefits-and-applications",
  "emr-integration-in-healthcare-systems-benefits-features-process-costs",
  "cybersecurity-in-manufacturing-building-cyber-resilience-for-smart-factories",
  "how-much-does-it-cost-to-develop-a-mutual-fund-investment-portal-or-app",
  "healthcare-workforce-management-software-a-catalyst-for-streamlined-business-operations",
  "how-an-ai-chatbot-for-higher-education-revolutionizes-student-support-services",
] as const;

/** Legacy short paths used on service landing pages (matches reapmind.com) */
const legacyLinks = [
  "/ai-agent-development-cost-for-hr-industry/",
  "/ai-agent-development-cost-2025/",
  "/why-your-enterprise-needs-a-custom-intranet-portal/",
  "/how-to-build-an-ai-powered-language-learning-app/",
  ...canonicalSlugs.slice(4).map((slug) => `/${slug}/`),
] as const;

export function getInsightCards(imagePrefix = "/short-video-app/"): InsightCard[] {
  const images = [
    `${imagePrefix}Featured-Image-2.png`,
    `${imagePrefix}Featured-Image-1-scaled.png`,
    `${imagePrefix}Featured-Image-scaled.png`,
    `${imagePrefix}Featured-Image-13-scaled.png`,
    `${imagePrefix}Featured-Image-11-scaled.png`,
    `${imagePrefix}Featured-Image-9-scaled.png`,
    `${imagePrefix}Featured-Image-5-scaled.png`,
    `${imagePrefix}Featured-Image-3-scaled.png`,
    `${imagePrefix}Featured-Image-scaled.png`,
    `${imagePrefix}Featured-Image-3-scaled.png`,
    `${imagePrefix}Featured-Image-5-scaled.png`,
    `${imagePrefix}Featured-Image-9-scaled.png`,
  ];

  return insightArticleMeta.map((item, index) => ({
    ...item,
    link: legacyLinks[index],
    image: images[index],
  }));
}

export function listBlogPosts() {
  return Object.values(blogPostContent).sort((a, b) => {
    if (a.isoDate && b.isoDate) return b.isoDate.localeCompare(a.isoDate);
    return 0;
  });
}

export function getPublicBlogPaths(): string[] {
  const paths = new Set<string>();
  for (const slug of Object.keys(blogPostContent)) {
    paths.add(slug);
  }
  for (const [alias, canonical] of Object.entries(blogSlugAliases)) {
    if (blogPostContent[canonical]) paths.add(alias);
  }
  return [...paths];
}

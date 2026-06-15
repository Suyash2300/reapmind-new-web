import {
  blogPostContent,
  blogSlugs,
  type BlogPostContent,
  type BlogPostSection,
} from "@/lib/blog-post-content";

export type BlogInsightCard = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  link: string;
};

const SKIP_SECTION =
  /let's spark|contact us now|follow us|instagram|popupmaker|for project queries/i;
const SKIP_PARAGRAPH =
  /©20\d{2}|wppopupmaker|Bannerghatta|Development Center|All Rights Reserved|step-by-step guide/i;

/** Card metadata for insight grids (shared across OMD, MVP, PWA, etc.). */
export const blogInsightCards: BlogInsightCard[] = [
  {
    slug: "how-much-does-it-cost-to-develop-an-ai-agent-for-the-human-resource-industry",
    title: "How Much Does It Cost to Develop an AI Agent for the Human Resource Industry?",
    category: "Artificial Intelligence",
    date: "Nov 5, 2025",
    author: "Prakhar Lohia",
    image: "/omd/blog-hr-ai-agent.png",
    link: "/how-much-does-it-cost-to-develop-an-ai-agent-for-the-human-resource-industry",
  },
  {
    slug: "how-much-does-it-cost-to-develop-an-ai-agent-in-2025",
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    date: "Oct 31, 2025",
    author: "Prakhar Lohia",
    image: "/omd/blog-ai-agent-2025.png",
    link: "/how-much-does-it-cost-to-develop-an-ai-agent-in-2025",
  },
  {
    slug: "why-your-enterprise-needs-a-custom-intranet-portal-and-how-to-build-one-that-actually-works",
    title:
      "Why Your Enterprise Needs a Custom Intranet Portal (And How to Build One That Actually Works)",
    category: "Offshore Development",
    date: "Oct 14, 2025",
    author: "Prakhar Lohia",
    image: "/omd/blog-intranet.png",
    link: "/why-your-enterprise-needs-a-custom-intranet-portal-and-how-to-build-one-that-actually-works",
  },
  {
    slug: "how-to-build-an-ai-powered-language-learning-app-features-process-costs-2025-guide",
    title:
      "How to Build an AI-Powered Language Learning App: Features, Process & Costs (2025 Guide)",
    category: "Artificial Intelligence",
    date: "Aug 14, 2025",
    author: "ReapMind Innovations",
    image: "/omd/blog-language-learning.png",
    link: "/how-to-build-an-ai-powered-language-learning-app-features-process-costs-2025-guide",
  },
  {
    slug: "smarter-school-bus-monitoring-solution-with-iot-mobility-in-2025",
    title: "Smarter School Bus Monitoring Solution with IoT & Mobility in 2025",
    category: "Uncategorized",
    date: "Aug 14, 2025",
    author: "ReapMind Innovations",
    image: "/omd/blog-school-bus.png",
    link: "/smarter-school-bus-monitoring-solution-with-iot-mobility-in-2025",
  },
  {
    slug: "devops-automation-approaching-business-critical-functionality",
    title: "DevOps Automation: Approaching Business-Critical Functionality",
    category: "Blog",
    date: "May 7, 2025",
    author: "Prakhar Lohia",
    image: "/omd/blog-devops.png",
    link: "/devops-automation-approaching-business-critical-functionality",
  },
  {
    slug: "the-role-of-ai-in-intelligent-document-processing-and-management-benefits-and-applications",
    title:
      "The Role of AI in Intelligent Document Processing and Management – Benefits and Applications",
    category: "Artificial Intelligence",
    date: "May 6, 2025",
    author: "ReapMind Innovations",
    image: "/omd/blog-document-ai.png",
    link: "/the-role-of-ai-in-intelligent-document-processing-and-management-benefits-and-applications",
  },
  {
    slug: "emr-integration-in-healthcare-systems-benefits-features-process-costs",
    title: "EMR Integration in Healthcare Systems – Benefits, Features, Process, Costs",
    category: "Technology",
    date: "May 5, 2025",
    author: "Prakhar Lohia",
    image: "/omd/blog-emr.png",
    link: "/emr-integration-in-healthcare-systems-benefits-features-process-costs",
  },
  {
    slug: "cybersecurity-in-manufacturing-building-cyber-resilience-for-smart-factories",
    title: "Cybersecurity in Manufacturing: Building Cyber Resilience for Smart Factories",
    category: "Technology",
    date: "May 1, 2025",
    author: "Prakhar Lohia",
    image: "/omd/blog-cybersecurity.png",
    link: "/cybersecurity-in-manufacturing-building-cyber-resilience-for-smart-factories",
  },
  {
    slug: "how-much-does-it-cost-to-develop-a-mutual-fund-investment-portal-or-app",
    title: "How Much Does It Cost to Develop a Mutual Fund Investment Portal or App?",
    category: "Mobile App Development Cost",
    date: "Apr 30, 2025",
    author: "ReapMind Innovations",
    image: "/omd/blog-mutual-fund.png",
    link: "/how-much-does-it-cost-to-develop-a-mutual-fund-investment-portal-or-app",
  },
  {
    slug: "healthcare-workforce-management-software-a-catalyst-for-streamlined-business-operations",
    title:
      "Healthcare Workforce Management Software: A Catalyst for Streamlined Business Operations",
    category: "Technology",
    date: "Apr 29, 2025",
    author: "ReapMind Innovations",
    image: "/omd/blog-emr.png",
    link: "/healthcare-workforce-management-software-a-catalyst-for-streamlined-business-operations",
  },
  {
    slug: "how-an-ai-chatbot-for-higher-education-revolutionizes-student-support-services",
    title:
      "How an AI Chatbot for Higher Education Revolutionizes Student Support Services",
    category: "Artificial Intelligence",
    date: "Apr 28, 2025",
    author: "ReapMind Innovations",
    image: "/omd/blog-ai-agent-2025.png",
    link: "/how-an-ai-chatbot-for-higher-education-revolutionizes-student-support-services",
  },
];

const cardBySlug = Object.fromEntries(
  blogInsightCards.map((card) => [card.slug, card]),
) as Record<string, BlogInsightCard>;

function cleanSections(sections: BlogPostSection[]): BlogPostSection[] {
  return sections
    .filter((section) => !SKIP_SECTION.test(section.title))
    .map((section) => ({
      title: section.title,
      paragraphs: section.paragraphs.filter((p) => !SKIP_PARAGRAPH.test(p)),
    }))
    .filter((section) => section.paragraphs.length > 0);
}

function fallbackPost(card: BlogInsightCard): BlogPostContent {
  return {
    slug: card.slug,
    canonicalPath: card.link,
    metaTitle: `${card.title} | ReapMind`,
    metaDescription: `Read ${card.title} — insights from ReapMind Innovations on ${card.category.toLowerCase()}.`,
    heroTitle: card.title,
    heroImage: card.image,
    category: card.category,
    author: card.author,
    date: card.date,
    isoDate: "",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          `${card.title} explores how modern software, AI, and digital platforms help organizations move faster with better outcomes. ReapMind Innovations partners with enterprises to design, build, and scale solutions tailored to real business needs.`,
          "This article covers key considerations, implementation approaches, and the value drivers teams should evaluate before investing in a new platform or product initiative.",
        ],
      },
    ],
  };
}

function mergePost(card: BlogInsightCard): BlogPostContent {
  const scraped = blogPostContent[card.slug];
  if (!scraped) return fallbackPost(card);

  const heroTitle =
    scraped.heroTitle === card.slug || scraped.heroTitle.length < 20
      ? card.title
      : scraped.heroTitle;

  return {
    ...scraped,
    heroTitle,
    heroImage: card.image,
    category: card.category,
    author: card.author,
    date: card.date || scraped.date,
    metaTitle:
      scraped.metaTitle === card.slug || scraped.metaTitle.length < 20
        ? `${card.title} | ReapMind`
        : scraped.metaTitle,
    sections: cleanSections(scraped.sections),
  };
}

export function getAllBlogSlugs() {
  return blogInsightCards.map((card) => card.slug);
}

export function isBlogSlug(slug: string) {
  return slug in cardBySlug;
}

export function getBlogPost(slug: string): BlogPostContent | null {
  const card = cardBySlug[slug];
  if (!card) return null;
  return mergePost(card);
}

export function getAllBlogPosts() {
  return blogInsightCards.map((card) => mergePost(card));
}

/** Insight cards for a page — optionally remap image prefix (e.g. /mvp/, /pwa/). */
export function getInsightCards(
  imagePrefix: "/omd/" | "/emr/" | "/oams/" | "/ris/" | "/olt/" | "/mvp/" | "/pwa/" | "/pd/",
) {
  return blogInsightCards.map((card) => ({
    ...card,
    image: card.image.replace("/omd/", imagePrefix),
  }));
}

export const knownBlogSlugs = [...blogSlugs, ...blogInsightCards.map((c) => c.slug)] as const;

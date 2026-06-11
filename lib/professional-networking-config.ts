/** Professional Networking Platform — https://reapmind.com/professional-networking-platform/ */

import { mediaSocialFormVisuals } from "@/lib/media-social-form-visuals";
import type { PortfolioItem } from "@/lib/recent-works-portfolio";

const formVisual = mediaSocialFormVisuals.professionalNetworking;

export const professionalNetworkingConfig = {
  meta: {
    title: "Professional Networking Application Development Services in India & USA | ReapMind",
    description:
      "A professional networking platform aims to create and maintain commercial or professional ties over time, to fulfill a business or professional development objectives.",
    canonical: "https://reapmind.com/professional-networking-platform/",
    ogImage: "/professional-networking/Offshore-development-center-setup.jpg",
  },
  hero: {
    badge: "Media / Social · Professional Network",
    heading:
      "Professional Networking an Investment to Yield Great Results in Business with Eminent Mark in Professional World",
    description:
      "Regular pulling of clients and buyers rests heavily on social seriousness and reciprocal requirements. A professional networking platform is advantageous to everyone to attract a large number of users. One can meet numerous needs, such as promoting businesses, establishing professional relations and finding top talent, finding and seeking jobs, and promoting themselves as professionals, establishing business relationships, and staying informed as regards what is happening in their industries.",
    cta: "Reach out to get started on your requirements",
    formSubtitle: "Have a Idea? Contact Us",
    formImage: formVisual.formImage,
    formImageAlt: formVisual.formImageAlt,
    formSpotlight: formVisual.spotlight,
    image: "/professional-networking/Offshore-development-center-setup.jpg",
    fallbackImage: "/professional-networking/Offshore-development-center-setup.jpg",
  },
  featuresIntro: {
    title: "Features to add to build Best Professional Networking an Investment",
    paragraph:
      "A professional networking platform needs unique features to keep users on the platform long, but this is not only a user-friendly feature that helps apps reach more and remain in the market for long. Team ReapMind is one of the best web and mobile app development firms in India. We assist you in designing and integrating user-pleasant functions, which all ages may readily access.",
  },
  features: {
    title: "Why Choose ReapMind as your Envisioned Professional Networking?",
    items: [
      {
        id: "profile",
        title: "Profile Setup",
        description:
          "A user name, image, and links are provided to a profile to allow other users to connect via other prominent networking sites. Easy to contact individuals & businesses who share similar aims on professional networking sites.",
        accent: "#10B981",
      },
      {
        id: "chat",
        title: "Real-time Chat",
        description:
          "Users are permitted to communicate with other users in real-time using text messaging. This enables organizations to communicate with customers, staff, job seekers, and companies of the same mind.",
        accent: "#1A69FD",
      },
      {
        id: "feeds",
        title: "New Feeds",
        description:
          "To improve user engagement, the programming is created in such a way that there is constant content flow — such as holidays, news, images, videos, and article. The algorithm is designed in a way to ensure that material is relevant to users.",
        accent: "#8B5CF6",
      },
      {
        id: "interaction",
        title: "User Interaction",
        description:
          "Users can share words, photos, videos, and articles, and can create, upload, and share a variety of content. A professional networking platform lets status update, where one can update their business requirements.",
        accent: "#06B6D4",
      },
      {
        id: "connection",
        title: "Business Connection",
        description:
          "One can find anyone by typing a name, term, or job title, they are seeking, details may also be added by inputting location or industry during the search. Automatic matching implementation assists companies to locate possible candidates based on user profile expertise.",
        accent: "#F59E0B",
      },
    ],
  },
  benefits: {
    title: "Business Benefits of Professional Networking Platform",
    items: [
      { id: "connection", title: "Strengthen Connection", accent: "#10B981" },
      { id: "ideas", title: "New Ideas", accent: "#1A69FD" },
      { id: "noticed", title: "Get Noticed", accent: "#8B5CF6" },
      { id: "practices", title: "Learn about Best Practices", accent: "#06B6D4" },
      { id: "perspective", title: "Get Different Perspective", accent: "#F59E0B" },
    ],
  },
  portfolioCta: "Get a Callback from Expert",
  process: {
    title: "Process",
    subtitle: "Our end-end development process to get develop a Professional Networking",
    intro:
      "We believe in delivering flawless mobile apps that ensure our clients gain a legacy in their business space. With the standard development process our team design, deploy and deliver quality products that result in bringing intended outcome in terms of quality and efficiency.",
    steps: [
      { step: "01", title: "Agile Approach", description: "Sprint-based delivery for profiles, feeds, chat, and connection matching flows." },
      { step: "02", title: "Planning", description: "Roadmap user roles, search filters, engagement algorithms, and integrations." },
      { step: "03", title: "UI / UX Designing", description: "Professional-first interfaces for networking, messaging, and content sharing." },
      { step: "04", title: "Coding", description: "Secure backends for real-time chat, feeds, and business connection search." },
      { step: "05", title: "Quality Assurance", description: "Cross-device testing, chat latency, and feed relevance validation." },
      { step: "06", title: "Launch", description: "Deployment, analytics setup, and growth-ready professional network operations." },
    ],
    tagline: "Delivering services that empower businesses to reap the benefits of digital transformation",
    cta: "Convert your Idea into Mobile App",
  },
  sectors: {
    title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
  },
  whyBuild: {
    title: "Why Choose ReapMind as your Desired Professional Networking?",
    intro:
      "When it comes to building feature-rich and profitable mobile apps, ReapMind does the solution by integrating the power of technology into your dream apps. Our passion and commitment towards transforming ideas into life have rewarded success for numerous companies and clients.",
    items: [
      {
        id: "innovation",
        title: "Ensure Innovation",
        description:
          "We believe innovation is base for making your apps stand unique from competitors. Our core team holds potentiality in bringing out the most creative and original mobile app concepts that leads your business to achieve success in this technology-oriented world.",
      },
      {
        id: "commitment",
        title: "Commitment",
        description:
          "We aim to unleash success for our customers by offering valuable mobile app development solutions that effectiveness for their users. We are known for commitment, hard work, and expertise that's how we differ from other mobile app development companies.",
      },
      {
        id: "quality",
        title: "Quality results",
        description:
          "Quality is the primary element that differentiates your apps from others. ReapMind high tech team is essentially focused on developing quality based mobile apps that meets the needed standards of your end-users.",
      },
    ],
    video: {
      src: "/freelance-marketplace/client-testimonial.mp4",
      poster: "/professional-networking/Reapmind-Client-Testimonials.jpg",
      title: "Reapmind Client Testimonials",
    },
    cta: "Book a Free Consultation",
  },
  midConsultation: {
    title: "Get a Free Consultation",
    submitLabel: "Contact Us Today",
  },
  consultation: {
    title: "Get a Free Consultation from our Technology Expert",
    subtitle: "Trusted by Global Companies. Contact Us Today!",
    submitLabel: "Send",
    trustLine: "Trusted by global companies",
    contacts: [
      { label: "Phone", value: "+91-9637828283", href: "tel:+919637828283" },
      { label: "Email", value: "info@reapmind.com", href: "mailto:info@reapmind.com" },
    ],
    clientLogos: [
      { name: "Bosch", src: "/professional-networking/bosch.png" },
      { name: "Oracle", src: "/professional-networking/oracle.png" },
      { name: "Disney", src: "/professional-networking/disney-client.png" },
    ],
  },
} as const;

export const professionalNetworkingPortfolio: PortfolioItem[] = [
  {
    title: "Deutsche Quality Systems India (DQS India) – Audit App",
    category: "Enterprise",
    image: "/professional-networking/2.jpg",
    link: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app",
  },
  {
    title: "Lakshya Academy: Empowering Education Through Technology",
    category: "EdTech",
    image: "/professional-networking/3.jpg",
    link: "/portfolio/lakshya-academy-empowering-education",
  },
  {
    title: "MTeducare: Revolutionizing Education Management",
    category: "EdTech",
    image: "/professional-networking/1.jpg",
    link: "/portfolio/mt-educare-education-management",
  },
  {
    title: "organic world",
    category: "E-Commerce",
    image: "/professional-networking/banner-2.png",
    link: "/portfolio/organic-world",
  },
  {
    title: "PawSpace",
    category: "Marketplace",
    image: "/professional-networking/banner-1.png",
    link: "/portfolio/pawspace",
  },
  {
    title: "Muncipal banking",
    category: "FinTech",
    image: "/professional-networking/Municipal-Bank-hero-image.png",
    link: "/portfolio/muncipal-banking",
  },
];

export const professionalNetworkingInsights = [
  {
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    date: "Nov 5, 2025",
    author: "Prakhar Lohia",
    link: "/ai-agent-development-cost-for-hr-industry/",
    image: "/professional-networking/Featured-Image-2.png",
  },
  {
    title: "How Much Does It Cost to Develop an AI Agent in 2025?",
    category: "Artificial Intelligence",
    date: "Nov 5, 2025",
    author: "Prakhar Lohia",
    link: "/ai-agent-development-cost-2025/",
    image: "/professional-networking/Featured-Image-1-scaled.png",
  },
  {
    title: "Why Your Enterprise Needs a Custom Intranet Portal (And How to Build One That Actually Works)",
    category: "Offshore Development",
    date: "Oct 18, 2025",
    author: "Prakhar Lohia",
    link: "/why-your-enterprise-needs-a-custom-intranet-portal/",
    image: "/professional-networking/Featured-Image-scaled.png",
  },
  {
    title: "How to Build an AI-Powered Language Learning App: Features, Process & Costs (2025 Guide)",
    category: "Artificial Intelligence",
    date: "Aug 15, 2025",
    author: "ReapMind Innovations",
    link: "/how-to-build-an-ai-powered-language-learning-app/",
    image: "/professional-networking/Featured-Image-13-scaled.png",
  },
  {
    title: "Smarter School Bus Monitoring Solution with IoT & Mobility in 2025",
    category: "Uncategorized",
    date: "Aug 15, 2025",
    author: "ReapMind Innovations",
    link: "/blogs",
    image: "/professional-networking/Featured-Image-11-scaled.png",
  },
  {
    title: "DevOps Automation: Approaching Business-Critical Functionality",
    category: "Blog",
    date: "May 7, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
    image: "/professional-networking/Featured-Image-9-scaled.png",
  },
  {
    title: "The Role of AI in Intelligent Document Processing and Management – Benefits and Applications",
    category: "Artificial Intelligence",
    date: "Apr 6, 2025",
    author: "ReapMind Innovations",
    link: "/blogs",
    image: "/professional-networking/Featured-Image-5-scaled.png",
  },
  {
    title: "EMR Integration in Healthcare Systems – Benefits, Features, Process, Costs",
    category: "Technology",
    date: "May 5, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
    image: "/professional-networking/Featured-Image-3-scaled.png",
  },
  {
    title: "Cybersecurity in Manufacturing: Building Cyber Resilience for Smart Factories",
    category: "Technology",
    date: "May 2, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
    image: "/professional-networking/Featured-Image-scaled.png",
  },
  {
    title: "How Much Does It Cost to Develop a Mutual Fund Investment Portal or App?",
    category: "Technology",
    date: "Apr 30, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
    image: "/professional-networking/Featured-Image-3-scaled.png",
  },
  {
    title: "Healthcare Workforce Management Software: A Catalyst for Streamlined Business Operations",
    category: "Healthcare",
    date: "Apr 24, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
    image: "/professional-networking/Featured-Image-5-scaled.png",
  },
  {
    title: "How an AI Chatbot for Higher Education Revolutionizes Student Support Services",
    category: "Artificial Intelligence",
    date: "Apr 28, 2025",
    author: "Prakhar Lohia",
    link: "/blogs",
    image: "/professional-networking/Featured-Image-9-scaled.png",
  },
] as const;

export const professionalNetworkingTestimonialIds = [
  "gunjan-jain",
  "matthew-carter",
  "jeremy-del-zotto",
  "sd-shibulal",
  "roland-owens",
  "murugan-kandasamy",
] as const;

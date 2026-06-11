/** Dating App Development — https://reapmind.com/dating-app-development/ */

import { getInsightCards } from "@/lib/blog-posts";
import { mediaSocialFormVisuals } from "@/lib/media-social-form-visuals";
import type { PortfolioItem } from "@/lib/recent-works-portfolio";

const formVisual = mediaSocialFormVisuals.datingApp;

export const datingAppConfig = {
  meta: {
    title: "Dating App Development Company in USA & India | ReapMind",
    description:
      "With our Dating App Development Services, we help you design innovative functional features and a beautiful interface that would help businesses attracts people and engages them on dating apps.",
    canonical: "https://reapmind.com/dating-app-development/",
    ogImage: "/dating-app/Offshore-development-center-setup.jpg",
  },
  hero: {
    badge: "Media / Social · Dating App",
    heading: "Best Dating App Development Company",
    description:
      "Dating apps are the most booming apps in today's world. The app is now designed for all age groups and genders. Research states that globally dating apps makes a business of around $2.6 billion and in 2020 has risen to $3.8 billion and is expected to rise more in coming years.",
    cta: "Reach out to get started on your requirements",
    formSubtitle: "Have a Idea? Contact Us",
    formImage: formVisual.formImage,
    formImageAlt: formVisual.formImageAlt,
    formSpotlight: formVisual.spotlight,
    image: "/dating-app/Offshore-development-center-setup.jpg",
    fallbackImage: "/dating-app/Offshore-development-center-setup.jpg",
  },
  clientSuccess: {
    title: "Celebrating Success Stories",
    subtitle: "Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/dating-app/bosch.png" },
      { name: "Oracle", src: "/dating-app/oracle.png" },
      { name: "Disney", src: "/dating-app/disney-client.png" },
      { name: "Siemens", src: "/dating-app/Siemens-client.png" },
      { name: "Times Group", src: "/dating-app/client-logos-21.png" },
      { name: "Hyundai", src: "/dating-app/client-logos-6.png" },
      { name: "Client", src: "/dating-app/client-logos-23.png" },
      { name: "Client", src: "/dating-app/client-logos-14.png" },
      { name: "Client", src: "/dating-app/client-logos-22.png" },
    ],
  },
  featuresIntro: {
    title: "Features to add to build Best Dating App",
    paragraphs: [
      "A dating app needs to have unique features so that it can hold people on the platform for longer, not only this but user-friendly feature helps apps to reach more and stay longer in the market.",
      "If you see many dating app platforms match a person on their mutual likes, compatibility, and similarity which is boosted with accurate yet innovative algorithms which act as ropes for business revenues to climb up.",
      "At ReapMind we help you design innovative functional features and a beautiful interface that would help businesses attracts people and engages them on dating apps. We analyze the market, understand requirements, and design features to deliver at most satisfaction to the customers.",
    ],
  },
  features: {
    title: "Why Choose ReapMind as your Envisioned Android App Development Partner?",
    items: [
      {
        id: "profile",
        title: "Profile Setup",
        description:
          "One must ensure that the dating app has a feature that allows users to verify their profiles by requiring them to upload identity proof before allowing them to search for and interact with other users. As a result, everyone who wants to try online dating will find the app trustworthy. Profile verification can also be accomplished by requiring users to link their social media accounts to their dating accounts. While the primary goal of a dating app is to provide a platform for users to meet new people, users' safety must also be considered.",
        accent: "#F43F5E",
      },
      {
        id: "events",
        title: "Events & Meet-ups",
        description:
          "There could be some unique events featured on the dating app where individuals can discover nearby events that fit their interests. People who share similar interests might attend these events together and take their relationship to the next level. One can create categories for \"animal lovers,\" \"romantic individuals,\" \"fitness fanatics,\" and other interests to organize online events and let people connect with similar interests.",
        accent: "#FB7185",
      },
      {
        id: "filters",
        title: "Advanced Filters",
        description:
          "Each individual has their expectation when it comes to finding a companion. Some people are looking for a friend to date or hang out with, while others are looking for a long-term commitment. People may also be picky about their age, gender, religion, caste, or astrological sign. As a result, complex search tools with filters assist users to narrow down their search. The filter is built using precise algorithms to produce the appropriate results quickly.",
        accent: "#E879F9",
      },
      {
        id: "match",
        title: "Match Suggestion",
        description:
          "Along with search tools or filters to assist users in finding their ideal mate for dating, love, and romance. However, artificial intelligence (AI) can take this scenario of dating apps to the next level by automatically proposing or recommending profiles that meet search criteria or partner preferences.",
        accent: "#F472B6",
      },
      {
        id: "video",
        title: "Video Calls",
        description:
          "A video call feature is already there in many dating apps. To make dating apps more secured adding AI-driven video calling helps to build app more secured. AI can assist in detecting nudity or vulgarity during a conversation, which can further help the admin to block such users from the app.",
        accent: "#FDA4AF",
      },
      {
        id: "chatbots",
        title: "In-build Chatbots",
        description:
          "Offering AI-based chatbots will not only set the app apart from the competition but will also assist customers, particularly introverts, in breaking the ice. A chatbot like this would recommend the first few sentences of a discussion to the customer. It might also display their ideas for how to respond to a certain message. It's a necessary feature since \"what you say and how you say\" has a significant impact when speaking with a stranger.",
        accent: "#FB923C",
      },
    ],
  },
  portfolioCta: "Get a Callback from Expert",
  process: {
    title: "Process",
    subtitle: "Our end-end development process to get develop a perfect app",
    intro:
      "We believe in delivering flawless mobile apps that ensure our clients gain a legacy in their business space. With the standard development process our team design, deploy and deliver quality products that result in bringing intended outcome in terms of quality and efficiency.",
    steps: [
      { step: "01", title: "Agile Approach", description: "Iterative delivery for profiles, matching, chat, and video call features." },
      { step: "02", title: "Planning", description: "Scope verification flows, AI match algorithms, filters, and safety tooling." },
      { step: "03", title: "UI / UX Designing", description: "Engaging swipe-first interfaces with trust and safety at the core." },
      { step: "04", title: "Coding", description: "Scalable backends for real-time chat, video, events, and AI recommendations." },
      { step: "05", title: "Quality Assurance", description: "Cross-device testing, moderation flows, and match accuracy validation." },
      { step: "06", title: "Launch", description: "Store deployment, analytics setup, and growth-ready dating operations." },
    ],
    tagline: "Delivering services that empower businesses to reap the benefits of digital transformation",
    cta: "Convert your Idea into Mobile App",
  },
  sectors: {
    title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
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
      { name: "Bosch", src: "/dating-app/bosch.png" },
      { name: "Oracle", src: "/dating-app/oracle.png" },
      { name: "Disney", src: "/dating-app/disney-client.png" },
    ],
  },
} as const;

export const datingAppPortfolio: PortfolioItem[] = [
  {
    title: "Deutsche Quality Systems India (DQS India) – Audit App",
    category: "Enterprise",
    image: "/dating-app/2.jpg",
    link: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app",
  },
  {
    title: "Lakshya Academy: Empowering Education Through Technology",
    category: "EdTech",
    image: "/dating-app/3.jpg",
    link: "/portfolio/lakshya-academy-empowering-education",
  },
  {
    title: "MTeducare: Revolutionizing Education Management",
    category: "EdTech",
    image: "/dating-app/1.jpg",
    link: "/portfolio/mt-educare-education-management",
  },
  {
    title: "organic world",
    category: "E-Commerce",
    image: "/dating-app/banner-2.png",
    link: "/portfolio/organic-world",
  },
  {
    title: "PawSpace",
    category: "Marketplace",
    image: "/dating-app/banner-1.png",
    link: "/portfolio/pawspace",
  },
  {
    title: "Muncipal banking",
    category: "FinTech",
    image: "/dating-app/Municipal-Bank-hero-image.png",
    link: "/portfolio/muncipal-banking",
  },
];

export const datingAppInsights = getInsightCards("/dating-app/");

export const datingAppTestimonialIds = [
  "gunjan-jain",
  "matthew-carter",
  "jeremy-del-zotto",
  "sd-shibulal",
  "roland-owens",
  "murugan-kandasamy",
] as const;

/** Social Networking Platform — https://reapmind.com/social-networking-platform/ */

import { getInsightCards } from "@/lib/blog-posts";
import { mediaSocialFormVisuals } from "@/lib/media-social-form-visuals";
import type { PortfolioItem } from "@/lib/recent-works-portfolio";

const formVisual = mediaSocialFormVisuals.socialNetworking;

export const socialNetworkingConfig = {
  meta: {
    title: "Social Networking Platform iOS & Android App Development Services in India & USA | ReapMind",
    description:
      "The social networking platform has expanded to include a whole range of web services, from simple chat rooms filled by the most technologically knowledgeable computer use.",
    canonical: "https://reapmind.com/social-networking-platform/",
    ogImage: "/social-networking/Offshore-development-center-setup.jpg",
  },
  hero: {
    badge: "Media / Social · Social Network",
    heading: "A Social Networking Platform to Connect the World",
    description:
      "The social networking platform has expanded to include a whole range of web services, from simple chat rooms filled by the most technologically knowledgeable computer use. The social networking boom is ongoing every year, with millions of people joining upcoming sites.",
    descriptionSecondary:
      "Social networking platforms help one connect people who share similar interests, work, backgrounds, or connections to life or personal or career; not only these social networking platforms are grown to a extend that businesses can now do marketing as well as sell their products from these platforms.",
    cta: "Reach out to get started on your requirements",
    formSubtitle: "Have a Idea? Contact Us",
    formImage: formVisual.formImage,
    formImageAlt: formVisual.formImageAlt,
    formSpotlight: formVisual.spotlight,
    image: "/social-networking/Offshore-development-center-setup.jpg",
    fallbackImage: "/social-networking/Offshore-development-center-setup.jpg",
  },
  clientSuccess: {
    title: "Celebrating Success Stories",
    subtitle: "Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/social-networking/bosch.png" },
      { name: "Oracle", src: "/social-networking/oracle.png" },
      { name: "Disney", src: "/social-networking/disney-client.png" },
      { name: "Siemens", src: "/social-networking/Siemens-client.png" },
      { name: "Times Group", src: "/social-networking/client-logos-21.png" },
      { name: "Hyundai", src: "/social-networking/client-logos-6.png" },
      { name: "Client", src: "/social-networking/client-logos-23.png" },
      { name: "Client", src: "/social-networking/client-logos-14.png" },
      { name: "Client", src: "/social-networking/client-logos-22.png" },
    ],
  },
  featuresIntro: {
    title: "Explore the Features of Social Networking Platform",
    paragraph:
      "As most people have their presence on various social networking platforms, the features have to be designed considering various age groups and segments.",
  },
  features: {
    title: "Why Choose ReapMind as your Envisioned Social Networking Platform?",
    items: [
      {
        id: "set-profile",
        title: "Set Profile",
        description:
          "A user needs to register on the social networking platform and set a password for further login. One can link a platform with various social platforms to retrieve user data.",
        accent: "#A855F7",
      },
      {
        id: "build-profile",
        title: "Build Profile",
        description:
          "Building up profiles helps serve various reasons, enable friends or contacts to identify members of their profiles; and, secondly, to connect to members with similar backgrounds by using social networking sites; ultimately helping reach a better connection.",
        accent: "#06B6D4",
      },
      {
        id: "upload-content",
        title: "Upload Content",
        description:
          "Social networking platforms provide a free upload of text messages, photos, audio, and video files. All postings to be ordered downwards, and the last post first comes; information is published in real-time and instantaneously made available to the user.",
        accent: "#F472B6",
      },
      {
        id: "gps",
        title: "GPS Setting",
        description:
          "Users can share location API retrieves a device location from GPS and mobile network, location data helps business in monetization.",
        accent: "#34D399",
      },
      {
        id: "interactive",
        title: "Interactive Interface",
        description:
          "An interactive interface for social networking platform helps for better engagement, users can chat, comment and share content in all forms.",
        accent: "#FBBF24",
      },
      {
        id: "ads",
        title: "In-App Advertisement",
        description:
          "The social networking platform needs to be developed in a way that one can easily integrate advertisement and related services in the content which helps businesses reach different segments of customers.",
        accent: "#60A5FA",
      },
      {
        id: "audience",
        title: "Target Audience",
        description:
          "One can build a social networking platform targeting a specific set of audiences like photographers, musicians, or any type of content creator; one can create a single platform for all of this and then make segments targeting each type of audience.",
        accent: "#FB7185",
      },
      {
        id: "analytics",
        title: "Analytics",
        description:
          "This usually helps businesses to know the reach of their post or ads and see if the marketing & targeting audience is in line with planned strategies.",
        accent: "#818CF8",
      },
    ],
  },
  portfolioCta: "Get a Callback from Expert",
  benefits: {
    title: "Benefits of Social Networking Platform",
    items: [
      { id: "networking", title: "Networking", accent: "#A855F7" },
      { id: "marketing", title: "Marketing Channel", accent: "#06B6D4" },
      { id: "awareness", title: "Awareness", accent: "#F472B6" },
      { id: "share", title: "Share Information", accent: "#34D399" },
      { id: "connectivity", title: "Connectivity", accent: "#FBBF24" },
    ],
  },
  process: {
    title: "Process",
    subtitle: "Our end-end development process to get develop a Social Networking Platform",
    intro:
      "We believe in delivering flawless mobile apps that ensure our clients gain a legacy in their business space. With the standard development process our team design, deploy and deliver quality products that result in bringing intended outcome in terms of quality and efficiency.",
    steps: [
      { step: "01", title: "Agile Approach", description: "Iterative delivery for profiles, feeds, messaging, and real-time social interactions." },
      { step: "02", title: "Planning", description: "Scope user roles, content types, GPS features, ads integration, and audience segments." },
      { step: "03", title: "UI / UX Designing", description: "Engaging interfaces for multi-age audiences with intuitive social flows." },
      { step: "04", title: "Coding", description: "Scalable backends for content uploads, chat, location services, and analytics." },
      { step: "05", title: "Quality Assurance", description: "Cross-device testing, real-time sync, and engagement flow validation." },
      { step: "06", title: "Launch", description: "Store deployment, CDN setup, and day-one social network operations." },
    ],
    tagline: "Delivering services that empower businesses to reap the benefits of digital transformation",
    cta: "Convert your Idea into Mobile App",
  },
  sectors: {
    title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
  },
  whyBuild: {
    title: "Why Choose ReapMind as your Desired Social Networking Platform to Connect the World ?",
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
      poster: "/social-networking/Reapmind-Client-Testimonials.jpg",
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
      { name: "Bosch", src: "/social-networking/bosch.png" },
      { name: "Oracle", src: "/social-networking/oracle.png" },
      { name: "Disney", src: "/social-networking/disney-client.png" },
    ],
  },
} as const;

export const socialNetworkingPortfolio: PortfolioItem[] = [
  {
    title: "Deutsche Quality Systems India (DQS India) – Audit App",
    category: "Enterprise",
    image: "/social-networking/2.jpg",
    link: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app",
  },
  {
    title: "Lakshya Academy: Empowering Education Through Technology",
    category: "EdTech",
    image: "/social-networking/3.jpg",
    link: "/portfolio/lakshya-academy-empowering-education",
  },
  {
    title: "MTeducare: Revolutionizing Education Management",
    category: "EdTech",
    image: "/social-networking/1.jpg",
    link: "/portfolio/mt-educare-education-management",
  },
  {
    title: "organic world",
    category: "E-Commerce",
    image: "/social-networking/banner-2.png",
    link: "/portfolio/organic-world",
  },
  {
    title: "PawSpace",
    category: "Marketplace",
    image: "/social-networking/banner-1.png",
    link: "/portfolio/pawspace",
  },
  {
    title: "Muncipal banking",
    category: "FinTech",
    image: "/social-networking/Municipal-Bank-hero-image.png",
    link: "/portfolio/muncipal-banking",
  },
];

export const socialNetworkingInsights = getInsightCards("/social-networking/");

export const socialNetworkingTestimonialIds = [
  "gunjan-jain",
  "matthew-carter",
  "jeremy-del-zotto",
  "sd-shibulal",
  "roland-owens",
  "murugan-kandasamy",
] as const;

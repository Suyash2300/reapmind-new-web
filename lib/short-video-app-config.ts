/** Short Video App Development Platform — https://reapmind.com/short-video-app-development-platform/ */

import { getInsightCards } from "@/lib/blog-posts";
import { mediaSocialFormVisuals } from "@/lib/media-social-form-visuals";
import type { PortfolioItem } from "@/lib/recent-works-portfolio";

const formVisual = mediaSocialFormVisuals.shortVideoApp;

export const shortVideoAppConfig = {
  meta: {
    title: "Short Video App Development Company in India & USA | ReapMind",
    description:
      "ReapMind helps you to design, plan and integrate user-friendly features with short video app development services, which could be easily accessed by all age groups.",
    canonical: "https://reapmind.com/short-video-app-development-platform/",
    ogImage: "/short-video-app/Offshore-development-center-setup.jpg",
  },
  hero: {
    badge: "Media / Social · Short Video",
    heading: "Short Video App Development Platform",
    description:
      "Short Video making is now the second name of entertainment, for all age groups. Everyone today is looking for quick and easy content. Visual content is quite easy to understand and moving pictures (videos) make it interesting for everyone.",
    descriptionSecondary:
      "There are several individuals with various skills, such short video apps are platforms for these people to showcase their skills in from of the world. It helps discover many hidden talents and many people get a chance to acquire new skills.",
    cta: "Reach out to get started on your requirements",
    formSubtitle: "Have a Idea? Contact Us",
    formImage: formVisual.formImage,
    formImageAlt: formVisual.formImageAlt,
    formSpotlight: formVisual.spotlight,
    image: "/short-video-app/Offshore-development-center-setup.jpg",
    fallbackImage: "/short-video-app/Offshore-development-center-setup.jpg",
  },
  clientSuccess: {
    title: "Celebrating Success Stories",
    subtitle: "Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/short-video-app/bosch.png" },
      { name: "Oracle", src: "/short-video-app/oracle.png" },
      { name: "Disney", src: "/short-video-app/disney-client.png" },
      { name: "Siemens", src: "/short-video-app/Siemens-client.png" },
      { name: "Times Group", src: "/short-video-app/client-logos-21.png" },
      { name: "Hyundai", src: "/short-video-app/client-logos-6.png" },
      { name: "Client", src: "/short-video-app/client-logos-23.png" },
      { name: "Client", src: "/short-video-app/client-logos-14.png" },
      { name: "Client", src: "/short-video-app/client-logos-22.png" },
    ],
  },
  features: {
    title: "Why Choose ReapMind as your Envisioned Features to add in Short Video App Partner?",
    items: [
      {
        id: "login",
        title: "Login Process",
        description:
          "Users who do not sign up for the short video app will be unable to publish any videos. Users can sign up using a variety of methods, including email, phone number, or any other social network account. After signing up, customers must pay attention and remember their credentials so that they may use them to log in the next time they use the app, or so that they can continue to use the service without logging out.",
        accent: "#F97316",
      },
      {
        id: "profile",
        title: "Profile Creation",
        description:
          "It is a must for all users to create a profile on the short video app with the necessary information and can personalize it by changing name, profile photo, or adding a unique bio. These features enable users to distinguish their profiles from those of others.",
        accent: "#EC4899",
      },
      {
        id: "notifications",
        title: "Notifications",
        description:
          "Notify others whenever a person creates new content. Notify the user about new videos, likes, and comments, among other things. For Apple and Android push notification services, it can be implemented using Google Cloud Messaging. This helps in engaging users to a short video app platform.",
        accent: "#8B5CF6",
      },
      {
        id: "editing",
        title: "Editing",
        description:
          "All users of short video app should be familiar with fundamental video editing tools built in-app, to improve their videos. These options include playing speed, music addition, and a beautiful setting for smooth skin, among others. Filters, stickers, animations, and masks will all be included helping users to effortlessly upload their films to the app.",
        accent: "#1A69FD",
      },
      {
        id: "sharing",
        title: "Video Sharing",
        description:
          "For users to gain more likes and followers, the short video app must have sharing options. It should allow users to link their accounts to other social media platforms where they can easily share.",
        accent: "#06B6D4",
      },
      {
        id: "live",
        title: "Live Sharing",
        description:
          "It's a premium feature of the app that allows users to receive virtual gifts from their fans in exchange for app money, as well as broadcast live streams.",
        accent: "#EF4444",
      },
      {
        id: "admin",
        title: "Admin Panel",
        description:
          "It is used to manage people in the program, and it allows the admin to delete or block annoying users. It assists the admin in recording or storing postings from certain users or data from new users, among other things.",
        accent: "#10B981",
      },
      {
        id: "other",
        title: "Other Features",
        description:
          "Users can follow and share using a QR code scanner, one can specify the location from where the content is been shared; these features could be added to make a short video app more appealing to the users.",
        accent: "#F59E0B",
      },
    ],
  },
  portfolioCta: "Get a Callback from Expert",
  process: {
    title: "Process",
    subtitle: "Our end-end development process to get develop a Short Video App",
    intro:
      "We believe in delivering flawless mobile apps that ensure our clients gain a legacy in their business space. With the standard development process our team design, deploy and deliver quality products that result in bringing intended outcome in terms of quality and efficiency.",
    steps: [
      { step: "01", title: "Agile Approach", description: "Iterative delivery for capture, editing, feeds, and live streaming features." },
      { step: "02", title: "Planning", description: "Scope login flows, admin tools, notifications, and social sharing integrations." },
      { step: "03", title: "UI / UX Designing", description: "Creator-first interfaces for recording, editing, and publishing short videos." },
      { step: "04", title: "Coding", description: "Scalable media pipelines, real-time notifications, and cross-platform delivery." },
      { step: "05", title: "Quality Assurance", description: "Device testing, compression quality, and engagement flow validation." },
      { step: "06", title: "Launch", description: "Store deployment, CDN setup, and day-one short video operations." },
    ],
    tagline: "Delivering services that empower businesses to reap the benefits of digital transformation",
    cta: "Convert your Idea into Mobile App",
  },
  sectors: {
    title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
  },
  whyBuild: {
    title: "Why Choose ReapMind as your Desired Short Video App Partne Partner?",
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
      poster: "/short-video-app/Reapmind-Client-Testimonials.jpg",
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
      { name: "Bosch", src: "/short-video-app/bosch.png" },
      { name: "Oracle", src: "/short-video-app/oracle.png" },
      { name: "Disney", src: "/short-video-app/disney-client.png" },
    ],
  },
} as const;

export const shortVideoAppPortfolio: PortfolioItem[] = [
  { title: "Deutsche Quality Systems India (DQS India) – Audit App", category: "Enterprise", image: "/short-video-app/2.jpg", link: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app" },
  { title: "Lakshya Academy: Empowering Education Through Technology", category: "EdTech", image: "/short-video-app/3.jpg", link: "/portfolio/lakshya-academy-empowering-education" },
  { title: "MTeducare: Revolutionizing Education Management", category: "EdTech", image: "/short-video-app/1.jpg", link: "/portfolio/mt-educare-education-management" },
  { title: "organic world", category: "E-Commerce", image: "/short-video-app/banner-2.png", link: "/portfolio/organic-world" },
  { title: "PawSpace", category: "Marketplace", image: "/short-video-app/banner-1.png", link: "/portfolio/pawspace" },
  { title: "Muncipal banking", category: "FinTech", image: "/short-video-app/Municipal-Bank-hero-image.png", link: "/portfolio/muncipal-banking" },
];

export const shortVideoAppInsights = getInsightCards("/short-video-app/");

export const shortVideoAppTestimonialIds = [
  "gunjan-jain", "matthew-carter", "jeremy-del-zotto", "sd-shibulal", "roland-owens", "murugan-kandasamy",
] as const;

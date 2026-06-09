/** Footer content — mirrored from https://reapmind.com/ */

import type { NavLink } from "./site-config";

export const footerBrand = {
  logo: "/footer-logo.png",
  gptwBadge: "/gptw-badge.png",
  gptwHref:
    "https://www.greatplacetowork.in/great/company/reapmind-innovations-private-limited",
} as const;

export const footerSocialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/reapmindinnovations",
    icon: "facebook" as const,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/ReapmindI",
    icon: "twitter" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/reapmind/",
    icon: "linkedin" as const,
  },
  { label: "Dribbble", href: "#", icon: "dribbble" as const },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reapmind.innovations/",
    icon: "instagram" as const,
  },
] as const;

export const footerExploreBlurb =
  "With our innovative technology solutions, you can experience the future of technology today and stay ahead of the curve in the rapidly evolving digital landscape. Experience the power of technology in action.";

export const footerPortfolio = {
  title: "Portfolio",
  href: "/portfolio-reapmind",
  links: [
    { label: "Vkonnect Health", href: "/portfolio/vkonnect-health" },
    {
      label: "MechUni",
      href: "/portfolio/mechuni-mechanical-services-and-parking-app",
    },
    { label: "Leep", href: "/portfolio/leep-rideshare-app" },
    {
      label: "Happy Harvest Farms",
      href: "/portfolio/happy-harvest-farms-delivery",
    },
    {
      label: "Carloana",
      href: "/portfolio/carloana-car-finance-made-smarter",
    },
    {
      label: "Online Dating App",
      href: "/portfolio/worlds-best-tool-for-personal-connections",
    },
    {
      label: "Online Consultation Lawyer",
      href: "/portfolio/formulaw-consult-lawyer-online",
    },
  ],
} as const;

export const footerPopularNow = {
  title: "Popular Now",
  links: [
    {
      label: "10 Min Grocery Delivery",
      href: "/how-much-does-it-cost-to-build-a-grocery-delivery-app-like-instashop",
    },
    {
      label: "Blockchain",
      href: "/blockchain-app-development-company",
    },
    {
      label: "D2C App",
      href: "/how-much-does-it-d2c-app-development-cost",
    },
    {
      label: "Door Step Banking",
      href: "/how-much-does-it-cost-to-develop-a-doorstep-banking-app",
    },
    {
      label: "Tax Preperation",
      href: "/how-much-does-it-cost-to-build-a-tax-preparation-app-like-turbotax",
    },
  ],
} as const;

export const footerBlogs = {
  title: "Blogs",
  href: "/blogs",
  links: [
    {
      label: "Artificial Intelligence",
      href: "/blogs/?term=artificial-intelligence",
    },
    {
      label: "App Development",
      href: "/blogs/?term=android-app-development",
    },
    { label: "Cloud", href: "/blogs/?term=cloud-management" },
    {
      label: "Travel / Transport",
      href: "/how-is-immersive-technology-reshaping-travel-and-tourism",
    },
    {
      label: "Ionic",
      href: "/top-ionic-app-development-company-in-india",
    },
    { label: "Node JS", href: "/top-nodejs-development-company" },
    { label: "Python", href: "/top-python-development-company" },
    { label: "Express JS", href: "/top-expressjs-development-company" },
    { label: "Golang", href: "/top-golang-development-company" },
    {
      label: "React Native",
      href: "/top-react-native-development-company-in-mumbai",
    },
  ],
} as const;

export const footerStats = {
  built: { value: "1000 +", label: "Brands Globally" },
  countries: { value: "30 +", label: "Countries Served" },
  earthImage: "/footer-earth.png",
} as const;

export type FooterCountryCode = "IN" | "US";

export const footerCountryFlags: Record<
  FooterCountryCode,
  { label: string; src: string }
> = {
  IN: { label: "India", src: "/flags/in.svg" },
  US: { label: "United States", src: "/flags/us.svg" },
};

export type FooterLocationItem = {
  title: string;
  lines: readonly string[];
  href?: string;
  countryCode?: FooterCountryCode;
};

export const footerOfficesAll = [
  {
    city: "Development Center",
    countryCode: "IN" as const,
    address:
      "4th Floor, Business Hub, IDFC Bank, 401, Sykes Extension, Kolhapur, Maharashtra, 416001",
  },
  {
    city: "Mumbai",
    countryCode: "IN" as const,
    address:
      "Kalpataru Plaza, 503, Chincholi Bunder Rd, Malad, Nadiyawala Colony 2, W, Mumbai, Maharashtra 400064",
  },
  {
    city: "Bangalore",
    countryCode: "IN" as const,
    address:
      "175, Bannerghatta Main Rd, Dollars Colony, Phase 4, J. P. Nagar, Bengaluru, Karnataka 560076",
  },
  {
    city: "USA",
    countryCode: "US" as const,
    address: "Atlanta, Georgia, United States of America (USA).",
  },
] as const;

export type FooterLocationTabId =
  | "all"
  | "mumbai"
  | "bangalore"
  | "usa"
  | "development-center";

export const footerLocationTabs: readonly {
  id: FooterLocationTabId;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "mumbai", label: "Mumbai" },
  { id: "bangalore", label: "Bangalore" },
  { id: "usa", label: "USA" },
  { id: "development-center", label: "Development Center" },
] as const;

export const footerLocationPanels: Record<
  FooterLocationTabId,
  readonly FooterLocationItem[]
> = {
  all: footerOfficesAll.map((o) => ({
    title: o.city,
    lines: [o.address],
    countryCode: o.countryCode,
  })),
  mumbai: [
    {
      title: "Office Address",
      countryCode: "IN",
      lines: [
        "Kalpataru Plaza, 503, Chincholi Bunder Rd, Malad, Nadiyawala Colony 2, W, Mumbai, Maharashtra 400064",
      ],
    },
    {
      title: "Call ReapMind",
      lines: ["India +91-9405344966"],
      href: "tel:+919405344966",
    },
    { title: "Drop An Email", lines: ["info@reapmind.com"], href: "mailto:info@reapmind.com" },
  ],
  bangalore: [
    {
      title: "Office Address",
      countryCode: "IN",
      lines: [
        "175, Bannerghatta Main Rd, Dollars Colony, Phase 4, J. P. Nagar, Bengaluru, Karnataka 560076",
      ],
    },
  ],
  usa: [
    {
      title: "USA",
      countryCode: "US",
      lines: ["Atlanta, Georgia, United States of America (USA)."],
    },
  ],
  "development-center": [
    {
      title: "Development Center",
      countryCode: "IN",
      lines: [
        "4th Floor, Business Hub, IDFC Bank, 401, Sykes Extension, Kolhapur, Maharashtra, 416001",
      ],
    },
  ],
};

/** Desktop footer link columns — exact live-site labels & paths */
export const footerLinkColumns: readonly {
  title: string;
  links: readonly NavLink[];
}[] = [
  {
    title: "About",
    links: [
      { label: "Who we are", href: "/about-our-company" },
      { label: "Meet our Team", href: "/team-reapmind" },
      { label: "Life @ ReapMind", href: "/company/life-at-reapmind" },
      { label: "Portfolio", href: "/portfolio-reapmind" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Product Design & Development",
        href: "/top-product-design-and-development-company-in-india",
      },
      {
        label: "Enterprise Mobility Solutions",
        href: "/top-notch-enterprise-mobility-solutions",
      },
      {
        label: "Mobile Appication",
        href: "/mobile-application-modernization-services-in-mumbai",
      },
      {
        label: "ERP Software",
        href: "/top-erp-software-development-company-in-mumbai",
      },
      {
        label: "Progressive Web App",
        href: "/pwa-prgressive-web-app-development-company",
      },
      { label: "MVP Development", href: "/top-mvp-development-company" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Banking / Finance", href: "/contact-us" },
      { label: "Ecommerce", href: "/ecommerce-business-solution" },
      { label: "Education", href: "/galileo-smart-school-management" },
      { label: "Healthcare", href: "/healthcare-app-development" },
      { label: "Media", href: "/short-video-app-development-platform" },
    ],
  },
  {
    title: "Hire Developers",
    links: [
      { label: "Android Developers", href: "/hire-top-android-developers" },
      { label: "IOS Developers", href: "/hire-the-best-ios-developers" },
      { label: "Flutter Developers", href: "/hire-flutter-developers" },
      {
        label: "Salesforce Developers",
        href: "/hire-top-salesforce-developers",
      },
      { label: "Angular Developers", href: "/hire-angular-js-developers" },
      { label: "React Developers", href: "/hire-top-react-js-developers" },
      { label: "AWS Developers", href: "/hire-top-aws-developers" },
      { label: "Swift Developers", href: "/hire-top-swift-developers" },
      { label: "Kotlin Developers", href: "/hire-top-kotlin-developers" },
      {
        label: "Python Developer",
        href: "/hire-dedicated-python-developer",
      },
      {
        label: "JavaScript Developer",
        href: "/hire-javascript-developer",
      },
      { label: "NodeJS Developer", href: "/hire-nodejs-developers" },
      { label: "Full Stack Developer", href: "/hire-full-stack-developers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Portfolio", href: "/portfolio-reapmind" },
      { label: "Blogs", href: "/blogs" },
      { label: "Press Release", href: "/contact-us" },
    ],
  },
];

export const footerBottomLinks = [
  { label: "About Us", href: "/about-our-company" },
  { label: "Portfolio", href: "/portfolio-reapmind" },
  { label: "Contact", href: "/contact-us" },
] as const;

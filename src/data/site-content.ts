export const LOGO_URL =
  "https://reapmind.com/wp-content/uploads/2023/03/Reapmind-New-Logo.png";

export const HERO_BACKGROUND = {
  image:
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Teams-rl7hpeyg0j7fmvixa3ucfr60r7b50ck8pjrhmofnz4.jpeg",
  alt: "ReapMind team collaboration",
} as const;

export const HERO_DECORATIVE = {
  image: "https://reapmind.com/wp-content/uploads/2024/11/RM-Image.png",
  alt: "ReapMind digital innovation",
} as const;

export const HERO_TYPED_STRINGS = [
  "Digital Transformation",
  "Application Development",
  "Business Automation",
  "DATA & AI",
] as const;

export const HERO_CLIENT_LOGOS = [
  { name: "Bosch", src: "https://reapmind.com/wp-content/uploads/2023/10/bosch.png" },
  { name: "Oracle", src: "https://reapmind.com/wp-content/uploads/2023/10/oracle.png" },
  { name: "Disney", src: "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png" },
  { name: "Siemens", src: "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png" },
  { name: "Times Group", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png" },
  { name: "Hyundai", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png" },
  { name: "Zydus", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png" },
  { name: "Paw Space", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-14.png" },
  { name: "Yarnx", src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-22.png" },
] as const;

export const HERO_STATS = [
  {
    value: "120 +",
    label: "Dedicated Support Specialists",
    description:
      "Our dedicated support specialists are available 24/7 to ensure your digital transformation journey is smooth and successful.",
  },
  {
    value: "100 +",
    label: "Technology Partnerships",
    description:
      "We've forged strong partnerships with over 100 leading technology providers, ensuring we have access to the best tools and resources to drive your digital transformation.",
  },
  {
    value: "75 %",
    label: "Reduction in Time-to-Market",
    description:
      "Our streamlined processes and agile methodologies help businesses accelerate their time-to-market by an average of 75%.",
  },
  {
    value: "90 %",
    label: "Project Success Rate",
    description:
      "We have a proven track record of success, with a 90% project success rate.",
  },
  {
    value: "05 +",
    label: "Strategic Federal Partnerships",
    description:
      "We drive collaborative initiatives that address critical challenges and deliver impactful solutions.",
  },
] as const;

export type NavLink = { label: string; href: string };
export type NavSection = { title: string; links: NavLink[] };

export const NAV_ABOUT_CTA = {
  image:
    "https://reapmind.com/wp-content/uploads/elementor/thumbs/Teams-rl7hpeyg0j7fmvixa3ucfr60r7b50ck8pjrhmofnz4.jpeg",
  alt: "ReapMind team",
} as const;

export const NAV_TOP_BAR = {
  address: "175, Bannerghatta Main Rd, Dollars Colony, J. P. Nagar, Bangalore",
  mapsUrl: "https://goo.gl/maps/KC9S2Dk7E6wC4iKX9",
  phone: "+91 9637828283",
  phoneHref: "tel:+919637828283",
  careersHref: "/careers",
  careersLabel: "We are Hiring!",
} as const;

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/reapmindinnovations",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/reapmind/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reapmind.innovations/",
    icon: "instagram",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/ReapmindI",
    icon: "twitter",
  },
] as const;

export const NAV_ABOUT: NavLink[] = [
  { label: "Who we are", href: "/company" },
  { label: "Meet our Team", href: "/team-reapmind" },
  { label: "Life @ ReapMind", href: "/company/life-at-reapmind" },
  { label: "Portfolio", href: "/portfolio-reapmind" },
  { label: "Contact Us", href: "/contact-us" },
];

export const NAV_SERVICES: NavSection[] = [
  {
    title: "Design & Development",
    links: [
      { label: "Product Design & Development", href: "/top-product-design-and-development-company-in-india" },
      { label: "Enterprise Mobility Solutions", href: "/top-notch-enterprise-mobility-solutions" },
      { label: "Mobile Application Modernization", href: "/mobile-application-modernization-services-in-mumbai" },
      { label: "ERP Software", href: "/top-erp-software-development-company-in-mumbai" },
      { label: "Progressive Web App", href: "/pwa-prgressive-web-app-development-company" },
      { label: "MVP Development", href: "/top-mvp-development-company" },
    ],
  },
  {
    title: "Technology Development",
    links: [
      { label: "Generative AI Development", href: "/generative-ai-development-company" },
      { label: "Application Modernization", href: "/application-modernization-services-in-bangalore" },
      { label: "AI Copilot Development", href: "/ai-copilot-development-company" },
      { label: "Blockchain App Development", href: "/blockchain-app-development-company" },
      { label: "Chatbots Development", href: "/chatbots-development" },
      {label:"Business Digital Transformation", href:"/"},
      {label:"Startup", href:"/top-startup-development-company-in-india"},
      { label: "Metaverse Development", href: "/metaverse-development-company" },
      {label:"NFT Development",href:"/nft-marketplace-development-company"},
    ],
  },
  {
    title: "Hire Developers",
    links: [
      { label: "Android Developers", href: "/hire-top-android-developers" },
      { label: "iOS Developers", href: "/hire-the-best-ios-developers" },
      {label:"Flutter Developers", href:"/hire-flutter-developers"},
      {label:"Salesforce Developers", href:"/hire-top-salesforce-developers"},
      {label:"Angular Developers", href:"/hire-angular-js-developers"},
      { label: "React Developers", href: "/hire-top-react-js-developers" },
      {label:"AWS Developers",  href:"/hire-top-aws-developers"},
      {label:"Swift Developers", href:"/hire-top-swift-developers"},
      {label:"Kotlin Developers", href:"/hire-top-kotlin-developers"},
      { label: "Python Developers", href: "/hire-dedicated-python-developer" },
      {label:"Javascript Developers", href:"/hire-javascript-developer"},
      {label:"NodeJS Developers", href:"/hire-nodejs-developers"},
      { label: "Full Stack Developers", href: "/hire-full-stack-developers" },
    ],
  },
  {
    title: "Business Models",
    links: [
      { label: "Offshore Development Center", href: "/offshore-development-company-in-bangalore" },
      { label: "Remote Contract Developers", href: "/hire-to-remote-contract-developers-in-india" },
      { label: "Nearshoring / Offshoring", href: "/lower-your-onshore-team-expenses-with-nearshoring-offshoring-optimize-efficiency" },
      { label: "Fixed Costs", href: "/fixed-costs-in-business" },
      { label: "Time & Material Model", href: "/our-time-and-material-model" },
    ],
  },
];

export const NAV_INDUSTRIES: NavSection[] = [
  {
    title: "Healthcare",
    links: [
      { label: "Online Medicine Delivery", href: "/online-medicine-delivery-solution" },
      { label: "Electronic Medical Record", href: "/electronic-medical-record" },
      { label: "Telemedicine App", href: "/top-telemedicine-app-development-company" },
    ],
  },
  {
    title: "Marketplace",
    links: [
      { label: "Ecommerce Business Solution", href: "/ecommerce-business-solution" },
      { label: "Online Marketplace", href: "/online-marketplace" },
      { label: "Grocery Delivery", href: "/grocery-delivery-services" },
    ],
  },
  {
    title: "Travel / Transport",
    links: [
      { label: "Online Cab Booking", href: "/online-cab-booking-service" },
      { label: "Fleet Management", href: "/fleet-management-system" },
      { label: "Transport Booking", href: "/transport-booking-software" },
    ],
  },
  {
    title: "Most Popular",
    links: [
      { label: "Food Delivery App", href: "/food-delivery-app-development" },
      { label: "SaaS Development", href: "/top-saas-development-company" },
      { label: "Banking & Finance", href: "/mobile-banking-app-development-company-in-india" },
    ],
  },
];

export const NAV_TECHNOLOGIES: NavSection[] = [
  {
    title: "Tech Stack",
    links: [
      { label: "AngularJS Development", href: "/top-angularjs-development-company" },
      { label: "ReactJS Development", href: "/top-reactjs-development-company" },
      { label: "Next.js Development", href: "/top-nextjs-development-company" },
      { label: "Node.js Development", href: "/top-nodejs-development-company" },
      { label: "Python Development", href: "/top-python-development-company" },
    ],
  },
  {
    title: "Popular Now",
    links: [
      { label: "Artificial Intelligence", href: "/artificial-intelligence-future-of-your-business" },
      { label: "Blockchain Development", href: "/blockchain-app-development-company" },
      { label: "Salesforce Development", href: "/top-salesforce-development-company-in-mumbai" },
      { label: "Android App Development", href: "/android-app-development-services" },
      { label: "iOS App Development", href: "/ios-app-development-company" },
    ],
  },
];

export const NAV_RESOURCES: NavSection[] = [
  {
    title: "Portfolio",
    links: [
      { label: "VKonnect Health", href: "/portfolio/vkonnect-health" },
      { label: "Leep Rideshare App", href: "/portfolio/leep-rideshare-app" },
      { label: "Happy Harvest Farms", href: "/portfolio/happy-harvest-farms-delivery" },
      { label: "Carloana", href: "/portfolio/carloana-car-finance-made-smarter" },
    ],
  },
  {
    title: "Popular Now",
    links: [
      { label: "Grocery Delivery App Cost", href: "/how-much-does-it-cost-to-build-a-grocery-delivery-app-like-instashop" },
      { label: "D2C App Development Cost", href: "/how-much-does-it-d2c-app-development-cost" },
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

export const FOOTER_EXPLORE_TEXT =
  "With our innovative technology solutions, you can experience the future of technology today and stay ahead of the curve in the rapidly evolving digital landscape. Experience the power of technology in action.";

export const FOOTER_OFFICES = [
  {
    city: "Mumbai",
    address:
      "Kalpataru Plaza, 503, Chincholi Bunder Rd, Malad, Nadiyawala Colony 2, W, Mumbai, Maharashtra 400064",
  },
  {
    city: "Bangalore",
    address:
      "175, Bannerghatta Main Rd, Dollars Colony, Phase 4, J. P. Nagar, Bengaluru, Karnataka 560076",
  },
  {
    city: "Development Center",
    address:
      "4th Floor, Business Hub, IDFC Bank, 401, Sykes Extension, Kolhapur, Maharashtra, 416001",
  },
  {
    city: "USA",
    address: "Atlanta, Georgia, United States of America (USA).",
  },
] as const;

export const FOOTER_COLUMNS = {
  about: {
    title: "About",
    links: [
      { label: "Who we are", href: "/company" },
      { label: "Meet our Team", href: "/team-reapmind" },
      { label: "Life @ ReapMind", href: "/company/life-at-reapmind" },
      { label: "Portfolio", href: "/portfolio-reapmind" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { label: "Product Design & Development", href: "/top-product-design-and-development-company-in-india" },
      { label: "Enterprise Mobility Solutions", href: "/top-notch-enterprise-mobility-solutions" },
      { label: "Mobile Appication", href: "/mobile-application-modernization-services-in-mumbai" },
      { label: "ERP Software", href: "/top-erp-software-development-company-in-mumbai" },
      { label: "Progressive Web App", href: "/pwa-prgressive-web-app-development-company" },
      { label: "MVP Development", href: "/top-mvp-development-company" },
    ],
  },
  industries: {
    title: "Industries",
    links: [
      { label: "Banking / Finance", href: "/contact-us" },
      { label: "Ecommerce", href: "/ecommerce-business-solution" },
      { label: "Education", href: "/galileo-smart-school-management" },
      { label: "Travel / Transport", href: "/transport-booking-software" },
      { label: "Healthcare", href: "/healthcare-app-development" },
      { label: "Media", href: "/short-video-app-development-platform" },
    ],
  },
  hire: {
    title: "Hire Developers",
    href: "/hire-developers",
    links: [
      { label: "Android Developers", href: "/hire-top-android-developers" },
      { label: "IOS Developers", href: "/hire-the-best-ios-developers" },
      { label: "Flutter Developers", href: "/hire-flutter-developers" },
      { label: "React Developers", href: "/hire-top-react-js-developers" },
      { label: "Python Developers", href: "/hire-dedicated-python-developer" },
      { label: "Full Stack Developers", href: "/hire-full-stack-developers" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Portfolio", href: "/portfolio-reapmind" },
      { label: "Blogs", href: "/blogs" },
      { label: "Press Release", href: "/contact-us" },
    ],
  },
} as const;

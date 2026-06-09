/** Mirrors live https://reapmind.com navigation & footer (SEO-safe paths). */

export const site = {
  name: "ReapMind",
  legalName: "Reapmind Innovations Pvt Ltd",
  logo: "https://reapmind.com/wp-content/uploads/2024/09/Reapmind-New-Logo-300x150.png",
  phone: "+91-9637828283",
  phoneHref: "tel:+919637828283",
  email: "info@reapmind.com",
  address:
    "175, Bannerghatta Main Rd, Dollars Colony, Phase 4, J. P. Nagar, Bengaluru, Karnataka 560076",
  mapsUrl: "https://goo.gl/maps/KC9S2Dk7E6wC4iKX9",
  contactUrl: "/contact-us",
  ctaLabel: "Get free consultation now",
  exploreBlurb:
    "With our innovative technology solutions, you can experience the future of technology today and stay ahead of the curve in the rapidly evolving digital landscape. Experience the power of technology in action.",
  copyright: "©2023. Reapmind Innovations Pvt Ltd. All Rights Reserved.",
} as const;

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/reapmindinnovations",
  },
  { label: "Twitter", href: "https://twitter.com/ReapmindI" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/reapmind/" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/reapmind.innovations/",
  },
] as const;

export type NavLink = { label: string; href: string };

export type NavGroup = {
  title?: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  href?: string;
  groups?: NavGroup[];
};

/** Desktop header — aligned with live reapmind.com mega menus */
export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about-our-company",
    groups: [
      {
        links: [
          { label: "Who we are", href: "/about-our-company" },
          { label: "Meet our Team", href: "/team-reapmind" },
          { label: "Life @ ReapMind", href: "/company/life-at-reapmind" },
          { label: "Portfolio", href: "/portfolio-reapmind" },
          { label: "Contact Us", href: "/contact-us" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        title: "Design & Development",
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
            label: "Mobile Application",
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
        title: "Technology Development",
        links: [
          {
            label: "Generative AI",
            href: "/generative-ai-development-company",
          },
          {
            label: "Application Modernization",
            href: "/application-modernization-services-in-bangalore",
          },
          {
            label: "AI Copilot Development",
            href: "/ai-copilot-development-company",
          },
          {
            label: "Blockchain Development",
            href: "/blockchain-app-development-company",
          },
          { label: "Chatbot Development", href: "/chatbots-development" },
          {
            label: "Business Digital Transformation",
            href: "/",
          },
          {
            label: "Startup",
            href: "/top-startup-development-company-in-india",
          },
          {
            label: "Metaverse Development",
            href: "/metaverse-development-company",
          },
          {
            label: "NFT Development",
            href: "/nft-marketplace-development-company",
          },
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
          {
            label: "Angular Developers",
            href: "/hire-angular-js-developers",
          },
          { label: "React Developers", href: "/hire-top-react-js-developers" },
          { label: "AWS Developers", href: "/hire-top-aws-developers" },
          { label: "Swift Developers", href: "/hire-top-swift-developers" },
          { label: "Kotlin Developers", href: "/hire-top-kotlin-developers" },
          {
            label: "Python Developers",
            href: "/hire-dedicated-python-developer",
          },
          {
            label: "JavaScript Developers",
            href: "/hire-javascript-developer",
          },
          { label: "NodeJS Developers", href: "/hire-nodejs-developers" },
          {
            label: "Full Stack Developers",
            href: "/hire-full-stack-developers",
          },
        ],
      },
      {
        title: "Business Models",
        links: [
          {
            label: "Offshore Development Center",
            href: "/offshore-development-company-in-bangalore",
          },
          {
            label: "Remote Contract Developers",
            href: "/hire-to-remote-contract-developers-in-india",
          },
          {
            label: "Nearshore Development",
            href: "/lower-your-onshore-team-expenses-with-nearshoring-offshoring-optimize-efficiency",
          },
          { label: "Fixed Cost", href: "/fixed-costs-in-business" },
          {
            label: "Time & Material",
            href: "/our-time-and-material-model",
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    groups: [
      {
        title: "Healthcare",
        links: [
          {
            label: "Online Medicine Delivery",
            href: "/online-medicine-delivery-solution",
          },
          {
            label: "Electronic Medical Record",
            href: "/electronic-medical-record",
          },
          {
            label: "Online Appointment Management",
            href: "/online-appointment-management-system",
          },
          {
            label: "Remote Patient Monitoring",
            href: "/remote-patient-monitoring-system",
          },
          {
            label: "Radiology Information System (RIS)",
            href: "/radiology-information-system",
          },
          { label: "Online Lab Tests", href: "/online-lab-test" },
          {
            label: "Telemedicine App",
            href: "/top-telemedicine-app-development-company",
          },
          { label: "More on Healthcare", href: "/contact-us" },
        ],
      },
      {
        title: "Marketplace",
        links: [
          {
            label: "Digital Product Marketplace",
            href: "/digital-product-marketplace",
          },
          {
            label: "eCommerce Business",
            href: "/ecommerce-business-solution",
          },
          { label: "Freelance Marketplace", href: "/freelance-marketplace" },
          { label: "Grocery Delivery", href: "/grocery-delivery-services" },
          {
            label: "Home Delivery App",
            href: "/online-home-delivery-services",
          },
          { label: "Online Marketplace", href: "/online-marketplace" },
          { label: "Online Pet Care", href: "/online-pet-care" },
          { label: "B2B Marketplace", href: "/b2b-marketplace" },
        ],
      },
      {
        title: "Travel / Transport",
        links: [
          { label: "Valet Parking App", href: "/valet-parking-app" },
          {
            label: "Employee Transportation",
            href: "/employee-transportation-management-system",
          },
          { label: "Online Cab Booking", href: "/online-cab-booking-service" },
          { label: "Fleet Management", href: "/fleet-management-system" },
          { label: "Vehicle Tracking System", href: "/vehicle-tracking-system" },
          { label: "Transport Booking", href: "/transport-booking-software" },
        ],
      },
      {
        title: "Media / Social",
        links: [
          { label: "Audio Networking", href: "/audio-networking-platform" },
          { label: "Image-Video Sharing", href: "/image-video-sharing-app" },
          {
            label: "Professional Networking",
            href: "/professional-networking-platform",
          },
          {
            label: "Short Video App",
            href: "/short-video-app-development-platform",
          },
          {
            label: "Social Networking",
            href: "/social-networking-platform",
          },
          { label: "Dating App", href: "/dating-app-development" },
        ],
      },
      {
        title: "Education",
        links: [
          {
            label: "E-Learning Platform",
            href: "/learning-management-system-e-learning-platform",
          },
          {
            label: "Smart School Management",
            href: "/smart-school-management-software",
          },
          {
            label: "University Management",
            href: "/university-management-system",
          },
          { label: "Online Tuition App", href: "/online-tuition-app" },
          { label: "More on Education", href: "/contact-us" },
        ],
      },
      {
        title: "Most Popular",
        links: [
          { label: "Food Delivery", href: "/food-delivery-app-development" },
          { label: "Valet Parking", href: "/valet-parking-app" },
          {
            label: "Fantasy Sports App",
            href: "/top-fantasy-sports-app-development-company-in-bangalore",
          },
          { label: "SaaS App", href: "/top-saas-development-company" },
          {
            label: "Real Estate App",
            href: "/top-real-estate-app-development-company",
          },
        ],
      },
      {
        title: "Banking & Finance",
        links: [
          {
            label: "Fintech App",
            href: "/mobile-banking-app-development-company-in-india",
          },
          { label: "Vifi.Ai", href: "https://vifi.ai/" },
          { label: "View More", href: "/contact-us" },
        ],
      },
    ],
  },
  {
    label: "Technologies",
    groups: [
      {
        title: "Tech Stack",
        links: [
          { label: "Angular JS", href: "/top-angularjs-development-company" },
          { label: "React JS", href: "/top-reactjs-development-company" },
          { label: "Vue.JS", href: "/top-vuejs-development-company" },
          { label: "Next JS", href: "/top-nextjs-development-company" },
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
      },
      {
        title: "Popular Now",
        links: [
          {
            label: "Artificial Intelligence",
            href: "/artificial-intelligence-future-of-your-business",
          },
          { label: "Blockchain", href: "/blockchain-app-development-company" },
          {
            label: "Salesforce",
            href: "/top-salesforce-development-company-in-mumbai",
          },
          { label: "Chatbot", href: "/chatbots-development" },
          { label: "Android", href: "/android-app-development-services" },
          { label: "iOS", href: "/ios-app-development-company" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    groups: [
      {
        title: "Portfolio",
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
          { label: "View More", href: "/portfolio-reapmind" },
        ],
      },
      {
        title: "Popular Now",
        links: [
          {
            label: "10 Min Grocery Delivery",
            href: "/how-much-does-it-cost-to-build-a-grocery-delivery-app-like-instashop",
          },
          { label: "Blockchain", href: "/blockchain-app-development-company" },
          {
            label: "D2C App",
            href: "/how-much-does-it-d2c-app-development-cost",
          },
          {
            label: "Door Step Banking",
            href: "/how-much-does-it-cost-to-develop-a-doorstep-banking-app",
          },
          {
            label: "Tax Preparation",
            href: "/how-much-does-it-cost-to-build-a-tax-preparation-app-like-turbotax",
          },
        ],
      },
      {
        title: "Blogs",
        links: [
          { label: "All Blogs", href: "/blogs" },
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
      },
    ],
  },
];


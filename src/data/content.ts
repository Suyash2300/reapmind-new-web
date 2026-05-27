export type PageData = {
  title: string;
  description: string;
  slug: string;
  category: "services" | "industries" | "hire";
};

export const pagesData: Record<string, PageData> = {
  // Services
  "top-product-design-and-development-company-in-india": {
    title: "Top Product Design & Development Company | ReapMind",
    description: "Premium product design and development services. We build digital solutions that scale.",
    slug: "top-product-design-and-development-company-in-india",
    category: "services",
  },
  "top-notch-enterprise-mobility-solutions": {
    title: "Enterprise Mobility Solutions | ReapMind",
    description: "Empower your workforce with top-notch enterprise mobility solutions.",
    slug: "top-notch-enterprise-mobility-solutions",
    category: "services",
  },
  "mobile-application-modernization-services-in-mumbai": {
    title: "Mobile Application Modernization Services | ReapMind",
    description: "Modernize your legacy mobile applications with cutting-edge technology.",
    slug: "mobile-application-modernization-services-in-mumbai",
    category: "services",
  },
  
  // Industries
  "online-medicine-delivery-solution": {
    title: "Online Medicine Delivery Solution | Healthcare App | ReapMind",
    description: "Build robust and secure online medicine delivery applications.",
    slug: "online-medicine-delivery-solution",
    category: "industries",
  },
  "electronic-medical-record": {
    title: "Electronic Medical Record (EMR) Solutions | ReapMind",
    description: "Next-gen Electronic Medical Record systems for modern healthcare.",
    slug: "electronic-medical-record",
    category: "industries",
  },

  // Hire
  "hire-top-android-developers": {
    title: "Hire Top Android Developers | ReapMind",
    description: "Hire highly skilled Android developers for your next big project.",
    slug: "hire-top-android-developers",
    category: "hire",
  },
  "hire-the-best-ios-developers": {
    title: "Hire Best iOS Developers | ReapMind",
    description: "Hire elite iOS developers for enterprise-grade applications.",
    slug: "hire-the-best-ios-developers",
    category: "hire",
  },
};

export function getPageData(slug: string): PageData | undefined {
  return pagesData[slug];
}

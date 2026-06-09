/** Services listing — content from https://reapmind.com/services/ */

export const servicesImages = {
  mobilePrimary:
    "/services/2022-121-rl7hnl5trrqfp99u5uxzqaap41f85j9gx6sui66osw.jpg",
  mobileSecondary:
    "/services/2022-021-rl7hnl5trrqfp99u5uxzqaap41f85j9gx6sui66osw.jpg",
  web: "/services/2022-991-rl7hnl5trrqfp99u5uxzqaap41f85j9gx6sui66osw.jpg",
  blockchain:
    "/services/2022-132-rl7hnl5trrqfp99u5uxzqaap41f85j9gx6sui66osw.jpg",
  immersive:
    "/services/2022-000-rl7hnl5trrqfp99u5uxzqaap41f85j9gx6sui66osw.jpeg",
  ai: "/services/2022-0022-rl7hnl5trrqfp99u5uxzqaap41f85j9gx6sui66osw.jpg",
  team: "/services/Teams-rl7hpeyg0j7fmvixa3ucfr60r7b50ck8pjrhmofnz4.jpeg",
  heroAccent: "/company/abstract-tech.jpg",
  brandMark:
    "/services/New-Reapmind-rl7hpe0fd9mevnxsfxof53j9l5e7yh61f9zef2lpos.png",
  greatPlaceToWork: "/services/Large.png",
  consultationCaller:
    "/services/caller-rl7hpey8c8vw3iten7rkzbvdkfckww8cqg3bz79kfk.png",
} as const;

export const servicesPageSeo = {
  title:
    "Services | ReapMind - Top Digital Transformation Company in India USA UK UAE",
  description:
    "Delivering services that empower businesses to reap the benefits of digital transformation — mobile apps, web & CMS, blockchain, AR/VR/XR, AI & ML, and more.",
  canonical: "https://reapmind.com/services/",
} as const;

export const servicesHero = {
  eyebrow: "Capabilities",
  title: "Services",
  subtitle:
    "Delivering services that empower businesses to reap the benefits of digital transformation",
} as const;

export const servicesPrimary = [
  {
    id: "mobile",
    index: "01",
    title: "Mobile App Development",
    body: "We are enthusiastic about developing outstanding mobile apps for iOS, Android, and hybrid platforms. Our team of talented developers curates unique solutions that focus on user experience, functionality, and scalability.",
    image: servicesImages.mobilePrimary,
    imageAlt: "Mobile app development services by ReapMind",
    tags: [
      "Android App",
      "iPhone App",
      "Flutter App",
      "React Native",
      "Hybrid App",
    ],
    href: "/mobile-application-modernization-services-in-mumbai",
    cta: "More about services",
  },
  {
    id: "web",
    index: "02",
    title: "Web & CMS Development",
    body: "We specialize in Web & CMS Development services that empower businesses to reach their full potential. Our team of skilled developers delivers custom solutions that optimize website performance, enhance user experiences, and streamline content management.",
    image: servicesImages.web,
    imageAlt: "Web and CMS development services",
    tags: ["NodeJS", "Python", "Typescript", "PHP", "Java", "VueJS"],
    href: "/top-product-design-and-development-company-in-india",
    cta: "More about services",
  },
  {
    id: "blockchain",
    index: "03",
    title: "Blockchain Development",
    body: "We provide Blockchain Solutions to help businesses realize the full potential of this transformational technology. Our team of expert developers delivers custom solutions that are secure, scalable, and optimized for performance.",
    image: servicesImages.blockchain,
    imageAlt: "Blockchain development services",
    tags: [
      "NFT Marketplace",
      "Ethereum",
      "Wallet",
      "Exchange",
      "Web3",
      "Smart Contracts",
    ],
    href: "/contact-us#free-consultation",
    cta: "Contact us",
  },
  {
    id: "immersive",
    index: "04",
    title: "AR, VR & XR",
    body: "We provide AR, VR, and XR services that transform how businesses interact with their consumers. Our team of passionate developers develops immersive experiences that enhance engagement, boost sales, and drive growth.",
    image: servicesImages.immersive,
    imageAlt: "AR VR and XR development services",
    tags: [
      "Object Recognition",
      "Counter",
      "Business Intelligence",
      "Text To Speech",
      "Data Analytics",
      "Sentimental Analysis",
    ],
    href: "/contact-us#free-consultation",
    cta: "More about services",
  },
  {
    id: "ai",
    index: "05",
    title: "AI & ML",
    body: "We offer AI and ML services to help businesses harness the full potential of these cutting-edge technologies. Our skilled team of developers offers innovative solutions that optimize processes, enhance decision-making, and drive growth.",
    image: servicesImages.ai,
    imageAlt: "AI and machine learning services",
    tags: ["WebAR", "Wikitude", "8th Wall", "ARCore", "ARKit", "Hololens"],
    href: "/contact-us#free-consultation",
    cta: "More about services",
  },
] as const;

export const servicesSupporting = {
  title: "Beyond build — strategy & growth",
  items: [
    {
      id: "audit",
      title: "Audit",
      body: "Delve deep into operations, unlock efficiencies, and embrace growth opportunities with our thorough audit services.",
    },
    {
      id: "security",
      title: "Data security",
      body: "Shield your valuable information from threats with our robust data security solutions.",
    },
    {
      id: "mobile-exp",
      title: "Mobile apps",
      body: "Create immersive, user-centric mobile experiences that captivate and connect.",
    },
    {
      id: "consulting",
      title: "Consulting",
      body: "Customized direction toward achieving your goals, resulting in strategic victories.",
    },
    {
      id: "brand",
      title: "Brand identity",
      body: "Craft a unique brand identity that resonates, setting you apart in a crowded market.",
    },
    {
      id: "marketing",
      title: "Marketing planning",
      body: "Strategize for impactful outreach, achieving tangible results through well-defined marketing plans.",
    },
  ],
} as const;

export const servicesCta = {
  title: "Take the first step towards a new project or collaboration.",
  subtitle: "Let's connect — free consultation within 24 hours.",
  href: "/contact-us#free-consultation",
  buttonLabel: "Get free consultation",
} as const;

export const servicesNavGroups = [
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
    ],
  },
] as const;

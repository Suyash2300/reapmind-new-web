/** Remote Contract Developers — https://reapmind.com/hire-to-remote-contract-developers-in-india/ */

export type RemoteContractTechItem = {
  name: string;
  /** Simple Icons slug — https://simpleicons.org */
  icon: string;
  /** Brand hex without # */
  color?: string;
  /** Local or full URL when CDN slug is unavailable */
  iconSrc?: string;
};

export const remoteContractConfig = {
  meta: {
    title: "Remote Contract Developers in India",
    description:
      "Hire remote contract developers in India from ReapMind — pre-vetted React, Node, Flutter, AWS talent. Full-time, part-time, and hourly engagement models.",
    canonical: "https://reapmind.com/hire-to-remote-contract-developers-in-india/",
  },
  hero: {
    badge: "Hire Dedicated Developer",
    heading: "Hire Remote Contract Developers",
    description:
      "Get ahead with reapmind's elite network of remote contract developers. We hand-pick experienced professionals, ensuring not only top-notch coding skills but also excellent communication and collaboration. Say goodbye to lengthy hiring processes and hefty overhead. reapmind offers a streamlined solution to scale your development team quickly and efficiently.",
    cta: "Get Free Consultation",
    formSubtitle:
      "Choose Full Time, Part Time, or Hourly hire — free consultation within 24 hours.",
    stats: [
      { value: "1000+", label: "App Delivered" },
      { value: "16+", label: "Years Of Industry Experience" },
      { value: "250+", label: "App Developers" },
      { value: "99+", label: "Certified Expert Programmers" },
    ],
  },
  clientSuccess: {
    title: "Celebrating Success Stories",
    subtitle: "Empowering Our Clients to Achieve Unprecedented Heights",
  },
  talentIntro: {
    title: "Find the perfect remote talent. Drive your projects forward.",
    intro:
      "Embrace agility, scalability, and cost-effectiveness with reapmind's remote contract developers. Our curated network of skilled professionals allows you to quickly adapt to changing project needs and scale your team up or down as required, without the long-term commitments and overhead of traditional hiring. Access specialized expertise precisely when you need it, paying only for the work delivered. This flexible approach optimizes your resources and maximizes your budget, ensuring you get the best value for your investment.",
    bullets: [
      "Hire a team of Your Choice",
      "Code Documentation",
      "Time-Zone Compatibility",
      "Flexibility and Retention",
      "Flexible Contracts",
      "Data Security Assurance",
    ],
    cta: "Hire Remote Contract Developers",
  },
  techStack: {
    title: "Hire Remote Developers for different Technologies",
    intro:
      "Access a global pool of expert remote contract developers in India for hire, proficient in the most sought-after technologies. reapmind connects you with top-tier talent specializing in:",
    cta: "Hire Remote Contract Developers",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        description: "Pixel-perfect interfaces and performant SPAs built with modern JavaScript frameworks.",
        accent: "#60a5fa",
        items: [
          { name: "React", icon: "react", color: "61DAFB" },
          { name: "Angular", icon: "angular", color: "DD0031" },
          { name: "Vue.js", icon: "vuedotjs", color: "4FC08D" },
          { name: "HTML5", icon: "html5", color: "E34F26" },
          { name: "CSS3", icon: "css3", color: "1572B6" },
          { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
          { name: "TypeScript", icon: "typescript", color: "3178C6" },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        description: "Scalable APIs, microservices, and enterprise-grade server-side architecture.",
        accent: "#34d399",
        items: [
          { name: "Node.js", icon: "nodedotjs", color: "339933" },
          { name: "Django", icon: "django", color: "44B78B" },
          { name: "Flask", icon: "flask", color: "FFFFFF" },
          { name: "Spring Boot", icon: "springboot", color: "6DB33F" },
          { name: "Laravel", icon: "laravel", color: "FF2D20" },
          { name: "Ruby on Rails", icon: "rubyonrails", color: "CC0000" },
          { name: "Golang", icon: "go", color: "00ADD8" },
        ],
      },
      {
        id: "mobile",
        title: "Mobile",
        description: "Native and cross-platform apps engineered for iOS, Android, and beyond.",
        accent: "#c084fc",
        items: [
          { name: "React Native", icon: "react", color: "61DAFB" },
          { name: "Flutter", icon: "flutter", color: "02569B" },
          { name: "Swift (iOS)", icon: "swift", color: "F05138" },
          { name: "Kotlin (Android)", icon: "kotlin", color: "7F52FF" },
        ],
      },
      {
        id: "cloud",
        title: "Cloud & DevOps",
        description: "Cloud-native infrastructure, container orchestration, and automated delivery pipelines.",
        accent: "#38bdf8",
        items: [
          { name: "AWS", icon: "amazonaws", color: "FF9900", iconSrc: "/icons/tech/aws.svg" },
          { name: "Azure", icon: "microsoftazure", color: "0078D4", iconSrc: "/icons/tech/azure.svg" },
          { name: "Google Cloud Platform", icon: "googlecloud", color: "4285F4" },
          { name: "Serverless computing", icon: "serverless", color: "FD5750" },
          { name: "Kubernetes", icon: "kubernetes", color: "326CE5" },
          { name: "Docker", icon: "docker", color: "2496ED" },
          { name: "CI/CD", icon: "githubactions", color: "2088FF" },
        ],
      },
      {
        id: "data",
        title: "Data & AI",
        description: "Data stores, caching layers, and machine-learning models for intelligent products.",
        accent: "#fbbf24",
        items: [
          { name: "MySQL", icon: "mysql", color: "4479A1" },
          { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
          { name: "MongoDB", icon: "mongodb", color: "47A248" },
          { name: "Redis", icon: "redis", color: "FF4438" },
          { name: "Cassandra", icon: "apachecassandra", color: "1287B1" },
          { name: "TensorFlow", icon: "tensorflow", color: "FF6F00" },
          { name: "PyTorch", icon: "pytorch", color: "EE4C2C" },
        ],
      },
      {
        id: "emerging",
        title: "Blockchain",
        description: "Decentralized apps, smart contracts, and distributed ledger integrations.",
        accent: "#facc15",
        items: [
          { name: "Ethereum", icon: "ethereum", color: "627EEA" },
          { name: "Hyperledger Fabric", icon: "hyperledger", color: "1293D8" },
        ],
      },
    ],
  },
  pricing: {
    title: "Remote developer rates by region",
    intro: "Compare typical hourly rates for junior, mid-level, and senior remote contract developers.",
    columns: ["Junior Developer (hourly)", "Mid-Level Developer (hourly)", "Senior Developer (hourly)"],
    rows: [
      { region: "USA", rates: ["$50 – $100", "$80 – $150", "$120 – $200+"] },
      { region: "Western Europe", rates: ["$40 – $80", "$60 – $120", "$100 – $180+"] },
      { region: "Eastern Europe", rates: ["$25 – $50", "$40 – $80", "$60 – $120"] },
      { region: "Latin America", rates: ["$20 – $40", "$30 – $60", "$50 – $100"] },
      { region: "India", rates: ["$15 – $30", "$25 – $50", "$40 – $80"], highlight: true },
    ],
    cta: "Hire Remote Contract Developers",
  },
  ctaBands: [
    {
      id: "bottleneck",
      title: "Don't let development bottlenecks slow you down.",
      body: "Hire pre-vetted remote contract developers from India and get your projects moving now. Flexible, scalable, and cost-effective solutions with reapmind.",
      cta: "Book a free Consultation",
    },
    {
      id: "growth",
      title: "Unleash explosive growth with elite remote contract developers.",
      body: "Scale your team instantly, access top-tier talent, and dominate your market with reapmind.",
      cta: "Book a free Consultation",
    },
  ],
  hiringModels: {
    title: "Our Flexible Hiring Models",
    intro:
      "Build your dream-based tech application on a budget. Our flexible engagement models ensure you get the expertise you need at a price that works for you.",
    cta: "Finalize the hiring Model",
    items: [
      {
        id: "full-time",
        title: "Full Time",
        hoursPerDay: "8 Hrs/ Day",
        commitment: "160 Hrs/ Month",
      },
      {
        id: "part-time",
        title: "Part Time",
        hoursPerDay: "4 Hrs/ Day",
        commitment: "60 Hrs/ Month",
      },
      {
        id: "hourly",
        title: "Hourly Basis",
        hoursPerDay: "Flexible Hrs/ Day",
        commitment: "50 Hrs Minimum",
      },
    ],
  },
  process: {
    title: "Hire Remote Contract Developers from Reapmind innovations",
    intro:
      "Take a look at the simple & straight forward process to Hire Remote Contract Developers from Reapmind Innovations",
    image: "/generative-ai/gai-offshore-visual.png",
    imageAlt: "Remote contract developers",
    items: [
      {
        id: "inquiry",
        title: "Inquiry",
        description: "We Access Project alignment for potential collaboration.",
      },
      {
        id: "developers",
        title: "Developer Section",
        description: "We select developers from our tech pool as per project needs.",
      },
      {
        id: "integration",
        title: "Integration",
        description: "Upon ETA approval, Developers start with direct task alignments.",
      },
      {
        id: "scaling",
        title: "Scaling",
        description: "Modify team size as needed, Aided by an account manager.",
      },
    ],
  },
  hireCards: {
    title: "Hire specialist developers",
    items: [
      {
        id: "react-native",
        title: "Hire React Native Developers",
        description:
          "Deploy the finest web engineers with extensive knowledge & creativity in crafting user-appealing web applications.",
        cta: "Hire Now",
      },
      {
        id: "mobile",
        title: "Hire Mobile App Developers",
        description:
          "Deploy our handpicked talent to build an enterprise-grade mobile application for simplifying your business operations.",
        cta: "Hire Now",
      },
      {
        id: "android",
        title: "Hire Android App Developers",
        description: "Hire Android app developers from ReapMind Innovations to inject growth into your Business.",
        cta: "Hire Now",
      },
    ],
  },
  faqs: [
    {
      question: "Why should I hire remote contract developers from India through Reapmind?",
      answer:
        "Hiring remote contract developers from India through Reapmind offers numerous advantages: cost-effectiveness with access to a highly skilled talent pool at significantly lower rates compared to US or European developers; scalability to quickly scale your team up or down based on project needs; expertise across cutting-edge AI/ML to robust backend systems; rigorous vetting ensuring top-tier talent pre-vetted for technical skills, communication, and collaboration; and reduced overhead eliminating recruitment, payroll, and benefits administration hassles.",
    },
    {
      question: "How does Reapmind ensure the quality of its remote contract developers?",
      answer:
        "Reapmind maintains a rigorous vetting process: comprehensive technical assessments to evaluate coding proficiency and problem-solving abilities; communication evaluation to ensure effective collaboration; background checks to verify experience and credentials; and ongoing performance monitoring with feedback mechanisms to maintain high standards.",
    },
    {
      question: "What technologies are Reapmind's remote contract developers proficient in?",
      answer:
        "Reapmind's network includes developers specializing in Frontend (React, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript), Backend (Node.js, Python, Java, PHP, Ruby on Rails, Go), Mobile (React Native, Flutter, Swift, Kotlin), Cloud (AWS, Azure, GCP, Serverless, Kubernetes), Databases (MySQL, PostgreSQL, MongoDB, Redis, Cassandra), and Emerging Tech (AI/ML, DevOps, Blockchain, AR/VR).",
    },
    {
      question: "How do I manage communication and collaboration with remote developers in India?",
      answer:
        "Reapmind facilitates seamless communication through project management tools like Jira, Trello, or Asana; clear communication protocols using Slack, Microsoft Teams, or other preferred tools; regular video conferences and stand-ups; and help finding developers with overlapping time zones for real-time interaction.",
    },
    {
      question: "What are the typical engagement models and payment terms for reapmind's remote contract developers?",
      answer:
        "Reapmind offers flexible engagement models: project-based hiring for specific scopes and deliverables; hourly engagement for ongoing support or shorter-term tasks; and dedicated teams for long-term projects. Payment terms are transparent with escrow services, milestone-based payments, and flexible billing cycles (weekly, bi-weekly, monthly).",
    },
  ],
  consultation: {
    title: "Get a Free Consultation from our Technology Expert",
    subtitle: "Trusted by startups & Fortune 500 companies",
    submitLabel: "Send",
    trustLine: "Trusted by global companies",
    contacts: [
      { label: "Phone", value: "+91-9637828283", href: "tel:+919637828283" },
      { label: "Email", value: "info@reapmind.com", href: "mailto:info@reapmind.com" },
    ],
    clientLogos: [
      { name: "Bosch", src: "/generative-ai/bosch.png" },
      { name: "Oracle", src: "/generative-ai/oracle.png" },
      { name: "Disney", src: "/generative-ai/disney-client.png" },
    ],
  },
} as const;

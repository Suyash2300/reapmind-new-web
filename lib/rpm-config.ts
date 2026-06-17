export interface RpmConfig {
  meta: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  breadcrumb: [
    { label: string; href: string },
    { label: string }
  ];
  hero: {
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    image: string;
  };
  clientLogos: {
    title: string;
    logos: { name: string; src: string }[];
  };
  features: {
    title: string;
    intro: string;
    image: string;
    envisionedTitle: string;
  };
  interfaces: {
    title: string;
    items: { label: string; description: string }[];
  }[];
  portfolio: {
    title: string;
    link: string;
    image: string;
    category: string;
  }[];
  benefits: {
    title: string;
    items: { title: string; description: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: string[];
    tagline: string;
    cta: string;
  };
  sectors: {
    title: string;
    items: { name: string; icon: string }[];
  };
  whyUs: {
    title: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  testimonials: {
    title: string;
    items: { name: string; image: string; role: string; quote: string }[];
  };
  insights: {
    title: string;
    articles: { link: string; image: string; category: string; title: string; date: string; author: string }[];
  };
  consultation: {
    title: string;
    subtitle: string;
  };
  ctas: {
    afterPortfolio: { title: string; primaryLabel: string };
    afterProcess: { title: string; primaryLabel: string };
    afterWhyUs: { title: string; primaryLabel: string };
  };
}

export const rpmConfig: RpmConfig = {
  meta: {
    title: "Remote Patient Monitoring System Development",
    description: "Build a custom remote patient monitoring system to improve healthcare outcomes.",
    canonicalPath: "https://reapmind.com/remote-patient-monitoring-system",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Remote Patient Monitoring" },
  ],
  hero: {
    heading: "Remote Patient Monitoring",
    description: "Transform healthcare delivery with continuous real-time monitoring and actionable insights.",
    primaryCta: "Book a Consultation",
    secondaryCta: "Explore Solutions",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=2000",
  },
  clientLogos: {
    title: "Trusted by Healthcare Leaders",
    logos: [
      { name: "Partner 1", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
      { name: "Partner 2", src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    ],
  },
  features: {
    title: "Advanced RPM Features",
    intro: "Our remote patient monitoring platforms are equipped with the latest features ensuring accurate data tracking, secure communication, and seamless integration with existing EMR systems.",
    image: "https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=1000",
    envisionedTitle: "Interfaces Designed for Everyone",
  },
  interfaces: [
    {
      title: "For Patients",
      items: [
        { label: "Vital Tracking", description: "Easy to use vital signs tracking." },
        { label: "Alerts", description: "Medication reminders and alerts." },
      ],
    },
    {
      title: "For Providers",
      items: [
        { label: "Dashboard", description: "Comprehensive patient dashboard." },
      ],
    },
    {
      title: "For Admins",
      items: [
        { label: "Management", description: "Manage roles and system settings." },
      ],
    },
  ],
  portfolio: [
    {
      title: "HeartCare Connect",
      link: "/portfolio/heartcare",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
      category: "Cardiology App",
    },
  ],
  benefits: {
    title: "Benefits of RPM",
    items: [
      { title: "Reduced Readmissions", description: "Proactively monitor patients to avoid hospital readmissions." },
      { title: "Better Engagement", description: "Keep patients engaged with their own care plans." },
    ],
  },
  process: {
    title: "Our Development Process",
    subtitle: "A proven strategy to deliver reliable healthcare applications.",
    steps: ["Discovery", "Design", "Development", "Compliance", "Deployment"],
    tagline: "Ready to start your RPM project?",
    cta: "Start Your Project",
  },
  sectors: {
    title: "Healthcare Sectors We Serve",
    items: [
      { name: "Cardiology", icon: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop" },
      { name: "Endocrinology", icon: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop" },
    ],
  },
  whyUs: {
    title: "Why Choose ReapMind",
    intro: "We specialize in building secure, scalable, and compliant healthcare solutions tailored to your specific needs.",
    items: [
      { title: "HIPAA Compliant", description: "All our solutions adhere to strict HIPAA guidelines." },
      { title: "Domain Expertise", description: "Deep understanding of the healthcare landscape." },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    items: [
      {
        name: "Dr. Smith",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200",
        role: "Chief Medical Officer",
        quote: "ReapMind delivered a stellar RPM platform that reduced our readmissions by 30%.",
      },
    ],
  },
  insights: {
    title: "Latest Insights",
    articles: [
      {
        link: "/blog/rpm-future",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
        category: "Healthcare Trends",
        title: "The Future of Remote Patient Monitoring",
        date: "Oct 12, 2024",
        author: "ReapMind Team",
      },
    ],
  },
  consultation: {
    title: "Ready to Innovate?",
    subtitle: "Let's discuss how our RPM solutions can transform your healthcare delivery.",
  },
  ctas: {
    afterPortfolio: { title: "See how we can build your next solution", primaryLabel: "Get in touch" },
    afterProcess: { title: "Let's streamline your care delivery", primaryLabel: "Talk to an expert" },
    afterWhyUs: { title: "Partner with a trusted healthcare development team", primaryLabel: "Schedule a call" },
  },
};

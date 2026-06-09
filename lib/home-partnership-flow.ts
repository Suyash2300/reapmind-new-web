/** Homepage — Partnership That Works / Flow of Our Successful Solutions */

export type PartnershipFlowStep = {
  id: string;
  stepLabel: string;
  title: string;
  description: string;
};

export type PartnershipEngagementModel = {
  id: string;
  title: string;
  description: string;
};

export const homePartnershipFlow = {
  eyebrow: "Partnership That Works",
  title: "The Flow of Our Successful Solutions",
  intro:
    "ReapMind builds custom software solutions that evolve with your business. Our expert teams combine technical prowess with strategic insight to create solutions that not only meet your current needs but also lay the foundation for future growth and innovation.",
  steps: [
    {
      id: "deep-dive",
      stepLabel: "01",
      title: "Deep Dive",
      description:
        "It all starts with a deep dive. ReapMind becomes an extension of your team, delving into the intricacies of your business, understanding your challenges, and uncovering your aspirations.",
    },
    {
      id: "blueprint",
      stepLabel: "02",
      title: "Blueprinting the Vision",
      description:
        "Transforming ideas into tangible plans. This stage involves crafting detailed roadmaps and designing intuitive user experiences, always with a focus on user-centricity. Prototypes and mockups bring the vision to life, ensuring a shared understanding.",
    },
    {
      id: "engineering",
      stepLabel: "03",
      title: "The Art of Engineering",
      description:
        "Elegant code, and robust solutions. ReapMind's engineers blend artistry and technical expertise, constructing digital masterpieces that stand the test of time. Agile methodologies and iterative refinement ensure that every line of code serves a purpose.",
    },
    {
      id: "beyond-delivery",
      stepLabel: "04",
      title: "Beyond Delivery",
      description:
        "Our team goes beyond simply delivering a product; it's about empowering your business for long-term success. This includes seamless deployment, ongoing support, and continuous optimization, ensuring your solution remains a powerful asset.",
    },
  ] as const satisfies readonly PartnershipFlowStep[],
  engagement: {
    title: "Flexibility Built For You",
    models: [
      {
        id: "fixed-price",
        title: "Fixed-Price Model",
        description:
          "Know your project costs upfront. We deliver your solution within a set budget and agreed-upon timeline, offering predictability and peace of mind.",
      },
      {
        id: "time-materials",
        title: "Time and Materials (T&M) Model",
        description:
          "Stay agile and adapt to changing needs. We track time and resources, billing transparently for maximum flexibility and collaboration.",
      },
      {
        id: "dedicated-team",
        title: "Dedicated Team Model",
        description:
          "Get a dedicated team of experts focused solely on your project. Enjoy seamless integration and long-term support for your success.",
      },
    ] as const satisfies readonly PartnershipEngagementModel[],
  },
  cta: {
    label: "Get a free consultation",
    href: "/contact-us#free-consultation",
  },
} as const;

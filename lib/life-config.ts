export const lifeConfig = {
  hero: {
    title: "Life @ ReapMind",
    heading: "Brilliant professionals – that's what makes us different!",
    description: "Our employees are the beating heart of our company's success, with every member playing a vital role in shaping our achievements.",
    image: "/company/life-hero.jpg"
  },
  culture: {
    title: "Our Culture",
    heading: "Our passionate team is at the heart of our success",
    paragraphs: [
      "Our employees are the beating heart of our company's success, with every member playing a vital role in shaping our achievements. Their dedication, expertise, and passion are what drive us forward, and we recognise and appreciate their contributions every step of the way.",
      "Together, as Team ReapMind, we are bound by a shared vision of revolutionising the digital transformation industry."
    ],
    image: "/company/life-culture.jpg"
  },
  benefits: [
    { title: "Flexible Working Hours", description: "Work when you're most productive." },
    { title: "Health Insurance", description: "Comprehensive coverage for you and your family." },
    { title: "Working Learner Program", description: "Continuous learning and upskilling opportunities." },
    { title: "Rewarding Work Culture", description: "Recognition, bonuses, and a supportive environment." }
  ],
  whyUs: {
    title: "What makes us the best choice",
    points: [
      { name: "Technical Expertise", description: "Deep knowledge in cutting-edge technologies.", image: "/company/experience.jpg" },
      { name: "Client-Centric Approach", description: "Delivering exceptional value tailored to client needs.", image: "/company/team-hero.jpg" },
      { name: "Technology", description: "Leveraging the latest stack to solve complex problems.", image: "/company/abstract-tech.jpg" },
      { name: "Youngster-Driven", description: "An energetic, fast-paced, and innovative mindset.", image: "/company/life-hero.jpg" }
    ],
    image: "/company/life-benefits.jpg"
  },
  members: [
    {
      name: "Aroof Shaikh",
      role: "CEO/ Founder",
      image: "/portfolio/Aroof_370x400-370x400-1.jpg"
    },
    {
      name: "Bhaskar Nallamelli",
      role: "Head of Business Strategies",
      image: "/portfolio/Bhaskar_370x400-370x400-1.jpg"
    },
    {
      name: "Keith Wallace",
      role: "Head of Operational Strategies",
      image: "/portfolio/imgpsh_fullsize_anim-18-370x400-1.jpeg"
    },
    {
      name: "Venkatashwara Kakula",
      role: "Enterprise Architect",
      image: "/portfolio/Venkat_370x400-370x400-1.jpg"
    }
  ],
  cta: {
    title: "Careers",
    heading: "Join our team today",
    description: "Once you fill out this form, our sales representatives will contact you within 24 hours.",
    buttonText: "Apply Now",
    href: "/contact-us"
  },
  stats: [
    { value: "200+", label: "Projects" },
    { value: "250+", label: "Employees" },
    { value: "1M+", label: "Users Reached" },
    { value: "250+", label: "Clients" },
    { value: "95+", label: "Retention" }
  ]
} as const;

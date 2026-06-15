export const companyConfig = {
  hero: {
    title: "Who we are",
    subtitle: "We are proud to be acknowledged as a top digital transformation company in India and the United States. As a premium brand, we work with innovative technologies in a results-oriented environment.",
    description: "At ReapMind Innovations, we are dedicated to delivering world-class IT and digital solutions that meet and surpass our client’s expectations while maintaining the highest standards.",
    image: "/company/company-hero.jpg"
  },
  stats: [
    { value: "2018", label: "Five years of excellence & innovation" },
    { value: "200+", label: "Completed projects" },
    { value: "100+", label: "Team members" },
    { value: "250+", label: "Happy clients" },
    { value: "95+", label: "Client retention" }
  ],
  services: [
    { title: "Mobile App Development", icon: "📱" },
    { title: "Web & CMS Development", icon: "💻" },
    { title: "Blockchain Solutions", icon: "⛓️" },
    { title: "AR, VR, and XR", icon: "👓" },
    { title: "AI and ML", icon: "🤖" },
    { title: "Cloud Management", icon: "☁️" }
  ],
  experience: {
    title: "Experience",
    description: "With years of digital transformation experience, we have successfully delivered tailored solutions to businesses all over the world, boosting growth and streamlining operations using cutting-edge technology.",
    image: "/company/company-experience.jpg"
  },
  values: [
    { title: "Innovation", description: "Pioneering new technologies and approaches to stay ahead of the curve." },
    { title: "Customer Satisfaction", description: "Our clients' success is our ultimate measure of achievement." },
    { title: "Integrity", description: "Maintaining the highest ethical standards in all our business practices." },
    { title: "Continuous Learning", description: "Constantly updating our skills to deliver cutting-edge solutions." },
    { title: "Teamwork", description: "Collaborating seamlessly across departments and borders." },
    { title: "Empowerment", description: "Giving our team the tools and autonomy they need to excel." },
    { title: "Social Responsibility", description: "Making a positive impact on the communities where we operate." }
  ],
  features: [
    { title: "Technical Expertise", description: "Deep knowledge and experience across diverse technology stacks." },
    { title: "Client-Centric Approach", description: "Tailoring solutions to meet the unique needs and goals of every partner." },
    { title: "Technology", description: "Leveraging the latest tools and frameworks to build future-proof products." },
    { title: "Youngster-Driven", description: "A dynamic team bringing fresh perspectives and boundless energy to every challenge." }
  ],
  locations: [
    {
      title: "Mumbai",
      address:
        "Kalpataru Plaza, 503, Chincholi Bunder Rd, Malad, Nadiyawala Colony 2, W, Mumbai, Maharashtra 400064",
      flag: "/flags/in.svg",
      flagLabel: "India",
    },
    {
      title: "Bangalore",
      address:
        "175, Bannerghatta Main Rd, Dollars Colony, Phase 4, J. P. Nagar, Bengaluru, Karnataka 560076",
      flag: "/flags/in.svg",
      flagLabel: "India",
    },
    {
      title: "Development Center",
      address:
        "4th Floor, Business Hub, IDFC Bank, 401, Sykes Extension, Kolhapur, Maharashtra, 416001",
      flag: "/flags/in.svg",
      flagLabel: "India",
    },
    {
      title: "USA",
      address: "Atlanta, Georgia, United States of America (USA).",
      flag: "/flags/us.svg",
      flagLabel: "United States",
    },
  ],
  cta: {
    title: "Take the first step towards a new project or collaboration. Let's connect!",
    subtitle: "Once you fill out this form, our sales representatives will contact you within 24 hours.",
    exploreMore: {
      title: "Explore More",
      description: "With our innovative technology solutions, you can experience the future of technology today and stay ahead of the curve in the rapidly evolving digital landscape. Experience the power of technology in action."
    }
  }
} as const;

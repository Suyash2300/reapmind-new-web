/** Homepage sections — content from https://reapmind.com/ */

export const homeClients = {
  title:
    "Celebrating Victories, Empowering Visions, or The Catalyst for Your Greatest Achievements",
  logos: [
    {
      name: "Bosch",
      src: "https://reapmind.com/wp-content/uploads/2023/10/bosch.png",
    },
    {
      name: "Oracle",
      src: "https://reapmind.com/wp-content/uploads/2023/10/oracle.png",
    },
    {
      name: "Disney",
      src: "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png",
    },
    {
      name: "Siemens",
      src: "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png",
    },
    {
      name: "Times Group",
      src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png",
    },
    {
      name: "Hyundai",
      src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png",
    },
    {
      name: "Zydus",
      src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png",
    },
    {
      name: "Paw Space",
      src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-14.png",
    },
    {
      name: "Yarnx",
      src: "https://reapmind.com/wp-content/uploads/2023/04/client-logos-22.png",
    },
  ],
} as const;

export const homeDigitalExcellence = {
  title: "Achieve Peak Performance with Our Digital Excellence",
  body: "Gain a competitive edge with ReapMind's digital transformation services. We help you leverage cutting-edge technologies and innovative strategies to outperform the competition and lead your industry.",
  cards: [
    {
      id: "mobile-app",
      title: "Mobile App Development",
      icon: "/digital-excellence/mobile-app.svg",
      description:
        "Crafting intuitive and user-friendly apps for iOS and Android that connect you with your audience, wherever they are.",
    },
    {
      id: "software",
      title: "Software Development",
      icon: "/digital-excellence/software.svg",
      description:
        "Boost efficiency and ignite innovation with our custom software solutions, from development to upgrades.",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      icon: "/digital-excellence/digital-transformation.svg",
      description:
        "We seamlessly integrate cutting-edge technologies into your existing systems, driving your digital transformation.",
    },
    {
      id: "product-engineering",
      title: "Product Engineering",
      icon: "/digital-excellence/product-engineering.svg",
      description:
        "Our end-to-end product engineering services guide you through every stage of development.",
    },
    {
      id: "ideation-design",
      title: "Ideation and Design Strategy",
      icon: "/digital-excellence/ideation-design.svg",
      description:
        "Our strategic process ensures your digital products connect with users on an emotional level.",
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      icon: "/digital-excellence/it-consulting.svg",
      description:
        "Your trusted IT advisors. We collaborate with you to navigate technology challenges and achieve your strategic business objectives",
    },
  ],
} as const;

export const homeIntro = {
  title: "Empowering People, Transforming Businesses, Transcending Boundaries",
  body: "ReapMind believes in a future where technology empowers, not divides. We are digital architects helping businesses build bridges across continents and platforms, fostering genuine connections and unlocking human potential. More than just transformation, ReapMind is about making technology accessible and human, driving collaboration and growth in an increasingly interconnected world. With ReapMind, businesses don't just adapt to the digital age; they thrive in it.",
  /** ReapMind differentiators — not duplicated on the live stat cards */
  pillars: [
    {
      title: "AI-native from day one",
      description:
        "Intelligent automation, data pipelines, and copilots are designed into discovery and delivery—not patched on after launch.",
    },
    {
      title: "Follow-the-sun delivery",
      description:
        "Studios in Bengaluru, Kolhapur, and Atlanta keep your product moving across time zones with one accountable roadmap.",
    },
    {
      title: "Outcomes you can measure",
      description:
        "Every engagement ties to time-to-value, adoption, and ROI—so progress shows up in the business, not just in reports.",
    },
  ],
  stats: [
    {
      value: 120,
      suffix: "+",
      label: "Dedicated Support Specialists",
      tag: "24/7 guidance",
      description:
        "Our dedicated support specialists are available 24/7 to ensure your digital transformation journey is smooth and successful. We're with you every step of the way, providing expert guidance and timely assistance whenever needed.",
    },
    {
      value: 100,
      suffix: "+",
      label: "Technology Partnerships",
      tag: "Best-in-class stack",
      description:
        "We've forged strong partnerships with over 100 leading technology providers, ensuring we have access to the best tools and resources to drive your digital transformation. From cloud platforms to AI solutions, we leverage the power of collaboration to deliver exceptional results.",
    },
    {
      value: 75,
      suffix: "%",
      label: "Reduction in Time-to-Market",
      tag: "Agile velocity",
      description:
        "Our streamlined processes and agile methodologies help businesses accelerate their time-to-market by an average of 75%. We empower you to launch new products and services faster, gaining a competitive edge in the digital marketplace.",
    },
    {
      value: 90,
      suffix: "%",
      label: "Project Success Rate",
      tag: "Proven delivery",
      description:
        "We have a proven track record of success, with a 90% project success rate. Our meticulous planning, rigorous execution, and unwavering commitment to quality ensure that your digital transformation initiatives deliver exceptional outcomes.",
    },
    {
      value: 5,
      prefix: "0",
      suffix: "+",
      label: "Strategic Federal Partnerships",
      tag: "Public-sector ready",
      description:
        "We drive collaborative initiatives that address critical challenges and deliver impactful solutions—combining governance, security, and compliance-first delivery for enterprise and federal programs.",
    },
  ],
  cta: {
    headline: "Ready to innovate & drive an impact?",
    buttonLabel: "Get free consultation now",
    href: "/contact-us",
  },
} as const;

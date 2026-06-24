import { getInsightCards } from "@/lib/blog-posts";

const workflowItems = [
    {
      title: "Registration",
      description:
        "Registering a new patient is a lengthy task in relying on typically large numbers of papers; with RIS instead, staff can type information in once and never waste time inserting it.",
    },
    {
      title: "Scheduling",
      description:
        "The scheduling is also easier because, with initial consultations and follow-up appointments, can see at first glance which times remain available.",
    },
    {
      title: "Storage & Tracking",
      description:
        "With vast amounts of documents generated during the treatment of patients, one needs a robust system that can store and track those records with large digital files from your scanning department.",
    },
    {
      title: "Interactive Documents",
      description:
        "Cutting-edge interactive papers are made possible by computerized medical systems and networking technology. Ensures that all essential data is entered into the patients' charts.",
    },
    {
      title: "Result Reporting & Delivery",
      description:
        "RIS simplifies the reporting process, whether for a monthly progress report on unpaid payments or to assess how many cancellations one has received in the last quarter.",
    },
    {
      title: "Medical Billing",
      description:
        "One can shorten the revenue cycle because the RIS allows staff to work more quickly and efficiently as they process documents to bill providers for the services they provided.",
    },
    {
      title: "Material Management",
      description:
        "To manage a data-intensive task as material management it's best to employ a computerized system. The team can see what is in short supply and needs to be reordered right away, as well as where one has a surplus, at a glance.",
    },
] as const;

export const risConfig = {
  meta: {
    title: "Radiology Information System (RIS) Healthcare App Development Services in India & USA | ReapMind",
    description:
      "A Radiology Information System (RIS) is a type of electronic health record (EHR) system that is specifically designed for use in radiology.",
    canonicalPath: "/radiology-information-system",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Radiology Information System", href: "/radiology-information-system", current: true },
  ],
  hero: {
    heading: "Radiology information system (RIS)",
    paragraphs: [
      "A Radiology Information System (RIS) is a sophisticated database system used by radiology medical professionals to keep track of patient data and the massive image files that are typically generated during diagnosis and treatment. A radiology information system (RIS) is a type of electronic health record (EHR) system that is specifically designed for use in radiology. It is used to manipulate and distribute patient data.",
      "Our healthcare solutions at ReapMind are crafted to the needs of healthcare organizations, assisting them in improving patient flow, treatment outcomes, and income and productivity. Most importantly, we support the design and construction of a model that supports the health sector to lead the market.",
    ],
    primaryCta: "Reach out to get started on your requirements",
    secondaryCta: "Have a Idea? Contact Us",
    image: "/ris/hero-banner.png",
    accentColor: "#7C3AED",
  },
  clientLogos: {
    title: "Celebrating Success Stories Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/ris/bosch.png" },
      { name: "Oracle", src: "/ris/oracle.png" },
      { name: "Disney", src: "/ris/disney-client.png" },
      { name: "Siemens", src: "/ris/siemens-client.png" },
      { name: "Times Group", src: "/ris/client-logos-21.png" },
      { name: "Hyundai", src: "/ris/client-logos-6.png" },
      { name: "Zydus", src: "/ris/client-logos-23.png" },
      { name: "Paw Space", src: "/ris/client-logos-14.png" },
      { name: "Yarnx", src: "/ris/client-logos-22.png" },
    ],
  },
  howItWorks: {
    title: "How does RIS work?",
    intro:
      "RIS integrates multiple functions in one comprehensive system that eliminates redundant measures and increases your employees' effectiveness through easier access to critical data.",
    image: "/ris/features-radiology.png",
  },
  workflow: {
    title: "Why Choose ReapMind as your Envisioned Radiology information system?",
    items: workflowItems,
  },
  portfolio: [
    {
      title: "Deutsche Quality Systems India (DQS India) – Audit App",
      category: "Enterprise",
      image: "/portfolio/pd-dqs.jpg",
      link: "/portfolio/deutsche-quality-systems-india-dqs-india-audit-app",
    },
    {
      title: "Lakshya Academy: Empowering Education Through Technology",
      category: "EdTech",
      image: "/portfolio/pd-lakshya.png",
      link: "/portfolio/lakshya-academy-empowering-education",
    },
    {
      title: "MTeducare: Revolutionizing Education Management",
      category: "EdTech",
      image: "/portfolio/pd-mteducare.png",
      link: "/portfolio/mt-educare-education-management",
    },
    {
      title: "organic world",
      category: "E-Commerce",
      image: "/portfolio/pd-organic.png",
      link: "/portfolio/organic-world",
    },
    {
      title: "PawSpace",
      category: "Marketplace",
      image: "/portfolio/pd-pawspace.png",
      link: "/portfolio/pawspace",
    },
    {
      title: "Muncipal banking",
      category: "FinTech",
      image: "/portfolio/pd-municipal.png",
      link: "/portfolio/muncipal-banking",
    },
  ],
  advantages: {
    title: "Advantages of Implementing RIS",
    tabs: [
    {
      title: "Better Coordination",
      description:
        "It is easier to coordinate patient treatment, easy to share information with consulting specialists and the patient's primary care physician, for post-treatment exercises.",
    },
    {
      title: "Fewer Errors",
      description:
        "Templates in the application guide data input, ensuring that, for example, a team member does not miss a critical piece of information before moving on to the next screen.",
    },
    {
      title: "Streamlines Functions",
      description:
        "Many RIS features streamline administrative operations, resulting in significant savings in overhead expenditures.",
    },
    {
      title: "Accurate Diagnoses",
      description:
        "Should anticipate seeing an increase in the statistics generated on yearly patient positive outcomes as a result of the more accurate diagnosis.",
    },
    {
      title: "Boosts Revenue",
      description:
        "By eliminating missed appointments and shortening report turnaround times, RIS will assist enhance income.",
    },
  ],
  },
  ctas: {
    afterPortfolio: {
      title: "Get a Callback from Expert",
      primaryLabel: "Get a Callback from Expert",
    },
    afterProcess: {
      title: "Get a Free Consultation",
      primaryLabel: "Get a Free Consultation",
    },
    afterSectors: {
      title: "Book a Free Consultation",
      primaryLabel: "Book a Free Consultation",
    },
  },
  process: {
    title: "Our end-end development process to get develop a Radiology information system",
    subtitle:
      "We believe in delivering flawless mobile apps that ensure our clients gain a legacy in their business space. With the standard development process our team design, deploy and deliver quality products that result in bringing intended outcome in terms of quality and efficiency.",
    tagline:
      "Delivering services that empower businesses to reap the benefits of digital transformation",
    steps: [
      "Agile Approach",
      "Planning",
      "UI / UX Designing",
      "Coding",
      "Quality Assurance",
      "Launch",
    ],
    cta: "Convert your Idea into Mobile App",
  },
  sectors: {
    title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
    items: [
      { name: "Healthcare", icon: "/ris/doctor.png" },
      { name: "Banking", icon: "/ris/mobile-payment.png" },
      { name: "eCommerce & Retail", icon: "/ris/mobile-shopping.png" },
      { name: "Education", icon: "/ris/edu.png" },
      { name: "Electric Vehicles", icon: "/ris/electric-car.png" },
      { name: "Food & Restaurants", icon: "/ris/cinema.png" },
      { name: "On-Demand Solutions", icon: "/ris/smartphone.png" },
      { name: "Supply chain & Logistics", icon: "/ris/logistics-1.png" },
      { name: "Travel & Hospitality", icon: "/ris/vacation.png" },
      { name: "Media", icon: "/ris/newspaper.png" },
      { name: "NFT & Crypto", icon: "/ris/blockchain.png" },
      { name: "Entertainment", icon: "/ris/cinema.png" },
    ],
  },
  whyUs: {
    title: "Why Choose ReapMind as your Desired Radiology information system?",
    intro:
      "When it comes to building feature-rich and profitable mobile apps, ReapMind does the solution by integrating the power of technology into your dream apps. Our passion and commitment towards transforming ideas into life have rewarded success for numerous companies and clients.",
    items: [
      {
        title: "Ensure Innovation",
        description:
          "We believe innovation is base for making your apps stand unique from competitors. Our core team holds potentiality in bringing out the most creative and original mobile app concepts that leads your business to achieve success in this technology-oriented world.",
      },
      {
        title: "Commitment",
        description:
          "We aim to unleash success for our customers by offering valuable mobile app development solutions that effectiveness for their users. We are known for commitment, hard work, and expertise that's how we differ from other mobile app development companies.",
      },
      {
        title: "Quality results",
        description:
          "Quality is the primary element that differentiates your apps from others. ReapMind high tech team is essentially focused on developing quality based mobile apps that meets the needed standards of your end-users.",
      },
    ],
    videoPoster: "/ris/testimonial-video-poster.jpg",
  },
  testimonials: {
    title: "What clients say about us",
    items: [
      {
        name: "Miss Gunjan Jain",
        role: "Founder and CEO of Internationally Awarded Healthtech Ventures",
        image: "/ris/testimonial-0.jpg",
        quote:
          "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
      },
      {
        name: "Mr. Matthew Carter",
        role: "CTO of Leep Rideshare LLC",
        image: "/ris/testimonial-1.jpg",
        quote:
          "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
      },
      {
        name: "Mr. Jeremy Del Zotto",
        role: "Founder & CEO - & Connection INC. (Canada)",
        image: "/ris/testimonial-2.jpg",
        quote:
          "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
      },
      {
        name: "S. D. Shibulal",
        role: "Founder: Innovations Investment Management India Private Ltd (INDIA)",
        image: "/ris/testimonial-sd.jpg",
        quote:
          "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
      },
      {
        name: "Roland Owens",
        role: "Director: Synerphase, Inc., Silicon Valley (USA)",
        image: "/ris/testimonial-5.jpg",
        quote:
          "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.",
      },
      {
        name: "Dr. Murugan Kandasamy",
        role: "CEO- Deutsch Quality Systems (India)",
        image: "/ris/testimonial-6.jpg",
        quote:
          "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
      },
    ],
  },
  insights: {
    title: "Latest Insights",
    articles: getInsightCards("/ris/"),
  },
  consultation: {
    title: "Get a Free Consultation from our Technology Expert",
    subtitle: "Trusted by Global Companies. Contact Us Today!",
  },
} as const;

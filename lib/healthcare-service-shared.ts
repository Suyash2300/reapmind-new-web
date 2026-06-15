import { hireTestimonialImages } from "./hire-testimonial-images";

export const healthcareClientLogosTitle =
  "Celebrating Success Stories Empowering Our Clients to Achieve Unprecedented Heights";

export const healthcareProcessSteps = [
  "Agile Approach",
  "Planning",
  "UI / UX Designing",
  "Coding",
  "Quality Assurance",
  "Launch",
] as const;

export const healthcareCtas = {
  afterPortfolio: {
    title: "Get a Callback from Expert",
    primaryLabel: "Get a Callback from Expert",
  },
  afterProcess: {
    title: "Get a Free Consultation",
    primaryLabel: "Get a Free Consultation",
  },
  afterBenefits: {
    title: "Convert your Idea into Mobile App",
    primaryLabel: "Convert your Idea into Mobile App",
  },
  afterWhyUs: {
    title: "Book a Free Consultation",
    primaryLabel: "Book a Free Consultation",
  },
} as const;

export const healthcareWhyUs = {
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
} as const;

export const healthcarePortfolio = [
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
] as const;

export const healthcareTestimonials = {
  title: "What clients say about us",
  items: [
    {
      name: "Miss Gunjan Jain",
      role: "Founder and CEO of Internationally Awarded Healthtech Ventures",
      image: hireTestimonialImages.gunjan,
      quote:
        "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
    },
    {
      name: "Mr. Matthew Carter",
      role: "CTO of Leep Rideshare LLC",
      image: hireTestimonialImages.matthew,
      quote:
        "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
    },
    {
      name: "Mr. Jeremy Del Zotto",
      role: "Founder & CEO - & Connection INC. (Canada)",
      image: hireTestimonialImages.jeremy,
      quote:
        "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
    },
    {
      name: "S. D. Shibulal",
      role: "Founder: Innovations Investment Management India Private Ltd (INDIA)",
      image: hireTestimonialImages.shibulal,
      quote:
        "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
    },
    {
      name: "Roland Owens",
      role: "Director: Synerphase, Inc., Silicon Valley (USA)",
      image: hireTestimonialImages.roland,
      quote:
        "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.",
    },
    {
      name: "Dr. Murugan Kandasamy",
      role: "CEO- Deutsch Quality Systems (India)",
      image: hireTestimonialImages.murugan,
      quote:
        "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
    },
  ],
} as const;

export function healthcareClientLogos(assetPrefix: string) {
  return [
    { name: "Bosch", src: `${assetPrefix}bosch.png` },
    { name: "Oracle", src: `${assetPrefix}oracle.png` },
    { name: "Disney", src: `${assetPrefix}disney-client.png` },
    { name: "Siemens", src: `${assetPrefix}siemens-client.png` },
    { name: "Times Group", src: `${assetPrefix}client-logos-21.png` },
    { name: "Hyundai", src: `${assetPrefix}client-logos-6.png` },
    { name: "Zydus", src: `${assetPrefix}client-logos-23.png` },
    { name: "Paw Space", src: `${assetPrefix}client-logos-14.png` },
    { name: "Yarnx", src: `${assetPrefix}client-logos-22.png` },
  ];
}

export function healthcareSectors(assetPrefix: string) {
  return [
    { name: "Healthcare", icon: `${assetPrefix}doctor.png` },
    { name: "Banking", icon: `${assetPrefix}mobile-payment.png` },
    { name: "eCommerce & Retail", icon: `${assetPrefix}mobile-shopping.png` },
    { name: "Education", icon: `${assetPrefix}edu.png` },
    { name: "Electric Vehicles", icon: `${assetPrefix}electric-car.png` },
    { name: "Food & Restaurants", icon: `${assetPrefix}cinema.png` },
    { name: "On-Demand Solutions", icon: `${assetPrefix}smartphone.png` },
    { name: "Supply chain & Logistics", icon: `${assetPrefix}logistics-1.png` },
    { name: "Travel & Hospitality", icon: `${assetPrefix}vacation.png` },
    { name: "Media", icon: `${assetPrefix}newspaper.png` },
    { name: "NFT & Crypto", icon: `${assetPrefix}blockchain.png` },
    { name: "Entertainment", icon: `${assetPrefix}cinema.png` },
  ];
}

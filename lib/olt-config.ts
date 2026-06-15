import { getInsightCards } from "@/lib/blog-posts";

function parseRoleItems(description: string) {
  return description
    .split(/\s+(?=[A-Z][A-Za-z\s&']{2,48}\s*:)/)
    .map((seg) => {
      const colon = seg.indexOf(":");
      if (colon === -1) return null;
      return {
        label: seg.slice(0, colon).trim(),
        description: seg.slice(colon + 1).trim(),
      };
    })
    .filter((x): x is { label: string; description: string } => Boolean(x?.label && x?.description));
}

const interfaces = [
  {
    title: "Doctors Interface",
    description:
      "Quick Login : Just one click and doctors can login into the online lab tests application with their mobile numbers or email address. Prescribe Online Test to Patients : Looking at the history and to diagnose patient's healthcare providers can directly prescribe tests through online lab tests.. Easily Check Reports : Once the tests are done and uploaded by lab, patients as well as doctors can see it on their screen and then doctors can look for further action.",
  },
  {
    title: "User Interface",
    description:
      "Easy Login : Patients can login onto the online lab tests application with their cell numbers or email addresses with only one click. Book Appointments : Book appointments easily by selecting the prescribed test, then select lab and book appointment also the online lab test helps book labs service at home, where a person from lab would visit home to collect samples. Sharing of Reports : Now no more waiting to share reports with doctor, as soon as the lab uploads the reports patient will receive notification and reports will be accessible to the concerned doctor as well; doctor can also see the history of reports of a patient on online lab testing.",
  },
  {
    title: "Lab Interface",
    description:
      "Manage Request : Slots would be displayed to patients because of whom patients can themselves book their appointments, lab incharge will always have liberty to shuffle schedule as per the requirement. Create and Manage Reports : Lab technician can easily create reports and upload it on same platform, can create and edit tests making it convenient for the user to easily share details. Share Reports : Once the report is prepared, lab incharge can easily upload it on the online lab test portal and it will be accessible to patients and doctors..",
  },
].map((item) => ({
  title: item.title,
  items: parseRoleItems(item.description),
  summary: item.description,
}));

export const oltConfig = {
  meta: {
    title: "Online Lab Test App Development in USA & India | Book your Lab Test Online | ReapMind",
    description:
      "Online lab tests help individuals in need of pathology or radiology find local laboratories and choose one that meets their individual needs. Book your lab test online with ReapMind.",
    canonicalPath: "/online-lab-test",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Online Lab Test", href: "/online-lab-test", current: true },
  ],
  hero: {
    heading: "Get Online Lab Tests Appointment Booking",
    description:
      "As the business grows, product range and target audience will most likely be expanded and business will be developed in line with customer demand. Adding more platforms to business by adding additional payment options and even increasing by deciding to ship to eCommerce business website or mobile application without having to worry about changing position or moving to bigger premises yet serving the customer to best is always a better option.",
    primaryCta: "Reach out to get started on your requirements",
    secondaryCta: "Have a Idea? Contact Us",
    image: "/olt/hero-banner.png",
    accentColor: "#06B6D4",
  },
  clientLogos: {
    title: "Celebrating Success Stories Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/olt/bosch.png" },
      { name: "Oracle", src: "/olt/oracle.png" },
      { name: "Disney", src: "/olt/disney-client.png" },
      { name: "Siemens", src: "/olt/siemens-client.png" },
      { name: "Times Group", src: "/olt/client-logos-21.png" },
      { name: "Hyundai", src: "/olt/client-logos-6.png" },
      { name: "Zydus", src: "/olt/client-logos-23.png" },
      { name: "Paw Space", src: "/olt/client-logos-14.png" },
      { name: "Yarnx", src: "/olt/client-logos-22.png" },
    ],
  },
  features: {
    title: "Features of Online Lab Tests Services",
    intro:
      "Get one stop solution for your lab and let your patients sit back and get their appointment booked. Team ReapMind is a group of specialists dedicated to providing high-quality healthcare to the world. Building a user-centric website, user research, mobile responsive design, social media marketing management, and a native mobile app for Android and iOS are all part of our tasks.",
    image: "/olt/features-lab.png",
    envisionedTitle: "Why Choose ReapMind as your Envisioned Online Lab Tests Appointment?",
  },
  interfaces,
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
  ctas: {
    afterPortfolio: {
      title: "Get a Callback from Expert",
      primaryLabel: "Get a Callback from Expert",
    },
    afterProcess: {
      title: "Get a Free Consultation",
      primaryLabel: "Get a Free Consultation",
    },
  },
  process: {
    title: "Our end-end development process to get develop a Online Lab Tests Appointment",
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
      { name: "Healthcare", icon: "/olt/doctor.png" },
      { name: "Banking", icon: "/olt/mobile-payment.png" },
      { name: "eCommerce & Retail", icon: "/olt/mobile-shopping.png" },
      { name: "Education", icon: "/olt/edu.png" },
      { name: "Electric Vehicles", icon: "/olt/electric-car.png" },
      { name: "Food & Restaurants", icon: "/olt/cinema.png" },
      { name: "On-Demand Solutions", icon: "/olt/smartphone.png" },
      { name: "Supply chain & Logistics", icon: "/olt/logistics-1.png" },
      { name: "Travel & Hospitality", icon: "/olt/vacation.png" },
      { name: "Media", icon: "/olt/newspaper.png" },
      { name: "NFT & Crypto", icon: "/olt/blockchain.png" },
      { name: "Entertainment", icon: "/olt/cinema.png" },
    ],
  },
  testimonials: {
    title: "What clients say about us",
    items: [
      {
        name: "Miss Gunjan Jain",
        role: "Founder and CEO of Internationally Awarded Healthtech Ventures",
        image: "/olt/testimonial-0.jpg",
        quote:
          "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
      },
      {
        name: "Mr. Matthew Carter",
        role: "CTO of Leep Rideshare LLC",
        image: "/olt/testimonial-1.jpg",
        quote:
          "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
      },
      {
        name: "Mr. Jeremy Del Zotto",
        role: "Founder & CEO - & Connection INC. (Canada)",
        image: "/olt/testimonial-2.jpg",
        quote:
          "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
      },
      {
        name: "S. D. Shibulal",
        role: "Founder: Innovations Investment Management India Private Ltd (INDIA)",
        image: "/olt/testimonial-sd.jpg",
        quote:
          "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
      },
      {
        name: "Roland Owens",
        role: "Director: Synerphase, Inc., Silicon Valley (USA)",
        image: "/olt/testimonial-5.jpg",
        quote:
          "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.",
      },
      {
        name: "Dr. Murugan Kandasamy",
        role: "CEO- Deutsch Quality Systems (India)",
        image: "/olt/testimonial-6.jpg",
        quote:
          "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
      },
    ],
  },
  insights: {
    title: "Latest Insights",
    articles: getInsightCards("/olt/"),
  },
  consultation: {
    title: "Get a Free Consultation from our Technology Expert",
    subtitle: "Trusted by Global Companies. Contact Us Today!",
  },
} as const;

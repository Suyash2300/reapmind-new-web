import { getInsightCards } from "@/lib/blog-posts";

function parsePoints(description: string) {
  return description
    .split(/\s*\d+\.\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const featureItems = [
  {
    title: "Pre-registration",
    description:
      "1. Pre-registering patients allows crucial data to be collected before the patient even enters the office. 2. Built-in eligibility insurance checks. 3. Decrease the crowding of waiting areas thus reducing the amount of time to wait. 4. Data collected easily be saved and organized into a searchable system.",
  },
  {
    title: "Scheduling",
    description:
      "1. Patients can request appointments by looking at available slots. 2. Automatic reminders to patients, through email or telephone so that they don't forget an appointment. 3. Rescheduling and other modifications can also be done from the backend. 4. Report walk-in patients when a doctor is available.",
  },
  {
    title: "Appointment Management",
    description:
      "1. Slot customization: date, time, doctor, and other information can all be modified in the actual table slot. 2. The appointment management system is automated by patient planning. 3. Patients & management can change, change or cancel appointments if necessary.",
  },
  {
    title: "Reminder",
    description:
      "1. Ensures that patients are aware of their appointments. 2. Both patients and staff can see individual appointment details. 3. Recall lists are helpful resources for patient care, all drugs or medical devices needed are included in the reminder list.",
  },
  {
    title: "Visit Management",
    description:
      "1. Charge for hourly pays 2. Check-in, check-out, and no-show monitoring. 3. Ensure accurate and value-driven treatment. 4. All elements of this appointment management system contribute to the legal compliance and responsibility under HIPPA guidelines",
  },
  {
    title: "Physician Management",
    description:
      "1. Patients and clinicians easily managed on daily basis. 2. Ability to manage physician vacation time and calendars. 3. Avoid the need to switch between systems and speeding up the scheduling process.",
  },
  {
    title: "Business Reports",
    description:
      "1. An appointment management system drill down into data that are rarely examined. 2. Reports and dashboards help clinicians visualize a variety of data types.",
  },
].map((item) => ({
  title: item.title,
  points: parsePoints(item.description),
}));

export const oamsConfig = {
  meta: {
    title: "Online Appointment Management System in India & USA | ReapMind",
    description:
      "Online appointment management system is nothing but an E-Health system, which offers patients or any other user a convenient way to book a doctor's visit anywhere, anytime online.",
    canonicalPath: "/online-appointment-management-system",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    {
      label: "Online Appointment Management System",
      href: "/online-appointment-management-system",
      current: true,
    },
  ],
  hero: {
    heading: "Healthcare Online Appointment Management System",
    description:
      "Online appointment management is nothing more than an E-Health system that allows patients or other users to schedule a doctor's visit from anywhere, at any time. It's a complete software system that includes all of the patient information needed for outpatient registration, treatment, check-out, and reporting. All appointments are linked and integrated through the internet, leads, mobile, and reception desks using an online appointment management system. Make an appointment for patients in the most expedient manner possible. On one calendar, the healthcare team will be able to access, receive, and organise appointments.",
    primaryCta: "Reach out to get started on your requirements",
    secondaryCta: "Have a Idea? Contact Us",
    image: "/oams/hero-banner.png",
    accentColor: "#059669",
  },
  clientLogos: {
    title: "Celebrating Success Stories Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/oams/bosch.png" },
      { name: "Oracle", src: "/oams/oracle.png" },
      { name: "Disney", src: "/oams/disney-client.png" },
      { name: "Siemens", src: "/oams/siemens-client.png" },
      { name: "Times Group", src: "/oams/client-logos-21.png" },
      { name: "Hyundai", src: "/oams/client-logos-6.png" },
      { name: "Zydus", src: "/oams/client-logos-23.png" },
      { name: "Paw Space", src: "/oams/client-logos-14.png" },
      { name: "Yarnx", src: "/oams/client-logos-22.png" },
    ],
  },
  features: {
    title: "Features of Online Appointment Management System",
    intro:
      "Online appointment system helps healthcare take a technological leap of shifting the manual task of scheduling an appointment to a digitized platform where patients can look for available slots and freeze them.",
    image: "/oams/features-appointment.png",
  },
  featureItems,
  benefits: {
    title: "Benefits of implementing Appointment Management System",
    tabs: [
      {
        title: "Keeps Slots Full",
        description:
          "Online appointment management systems help businesses save money by reducing no-shows and absenteeism.",
      },
      {
        title: "Convenient Appointment Booking",
        description:
          "With an appointment management system, patients can see healthcare provider's availability and schedule appointments online.",
      },
      {
        title: "Saves Resources",
        description:
          "Reduce documentation and form filing required online system is automated and self-managing can reduce the number of clinic employees & other resources.",
      },
      {
        title: "Better Schedule Management",
        description:
          "Helps plan for the day and organize activities without worrying about client cancellations at the last minute.",
      },
      {
        title: "Mobility",
        description:
          "As an online appointment management system's data is stored in the cloud, all one needs is an internet-connected device to access the information needed.",
      },
    ],
  },
  portfolioLead: {
    title: "Why Choose ReapMind as your Healthcare Online Appointment Management Partner?",
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
  testimonials: {
    title: "What clients say about us",
    items: [
      {
        name: "Miss Gunjan Jain",
        role: "Founder and CEO of Internationally Awarded Healthtech Ventures",
        image: "/oams/testimonial-0.jpg",
        quote:
          "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
      },
      {
        name: "Mr. Matthew Carter",
        role: "CTO of Leep Rideshare LLC",
        image: "/oams/testimonial-1.jpg",
        quote:
          "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
      },
      {
        name: "Mr. Jeremy Del Zotto",
        role: "Founder & CEO - & Connection INC. (Canada)",
        image: "/oams/testimonial-2.jpg",
        quote:
          "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
      },
      {
        name: "S. D. Shibulal",
        role: "Founder: Innovations Investment Management India Private Ltd (INDIA)",
        image: "/oams/testimonial-sd.jpg",
        quote:
          "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
      },
      {
        name: "Roland Owens",
        role: "Director: Synerphase, Inc., Silicon Valley (USA)",
        image: "/oams/testimonial-5.jpg",
        quote:
          "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.",
      },
      {
        name: "Dr. Murugan Kandasamy",
        role: "CEO- Deutsch Quality Systems (India)",
        image: "/oams/testimonial-6.jpg",
        quote:
          "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
      },
    ],
  },
  process: {
    title: "Our end-end development process to get develop a Healthcare Online Appointment",
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
      { name: "Healthcare", icon: "/oams/doctor.png" },
      { name: "Banking", icon: "/oams/mobile-payment.png" },
      { name: "eCommerce & Retail", icon: "/oams/mobile-shopping.png" },
      { name: "Education", icon: "/oams/edu.png" },
      { name: "Electric Vehicles", icon: "/oams/electric-car.png" },
      { name: "Food & Restaurants", icon: "/oams/cinema.png" },
      { name: "On-Demand Solutions", icon: "/oams/smartphone.png" },
      { name: "Supply chain & Logistics", icon: "/oams/logistics-1.png" },
      { name: "Travel & Hospitality", icon: "/oams/vacation.png" },
      { name: "Media", icon: "/oams/newspaper.png" },
      { name: "NFT & Crypto", icon: "/oams/blockchain.png" },
      { name: "Entertainment", icon: "/oams/cinema.png" },
    ],
  },
  insights: {
    title: "Latest Insights",
    articles: getInsightCards("/oams/"),
  },
  consultation: {
    title: "Get a Free Consultation from our Technology Expert",
    subtitle: "Trusted by Global Companies. Contact Us Today!",
  },
} as const;

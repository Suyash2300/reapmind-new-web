import { hireTestimonialImages } from "./hire-testimonial-images";
import { getInsightCards } from "@/lib/blog-posts";

const monitoringTypes = [
  {
    title: "Blood Pressure Monitoring",
    description:
      "Calculate patient's heart rate and blood flow daily with remote patient monitoring system; calculate average, gather numerous readings. Home monitoring can aid in the early detection of illnesses that contribute to high blood pressure, such as diabetes or renal disease. It can also make the delivery of healthcare less stressful.",
  },
  {
    title: "Glucose Monitoring",
    description:
      "Blood sugar monitoring is required for efficient diabetes management. With a single drop of blood, patients can test diabetes at home with a remote patient monitoring system; which can help keep an eye on the medication's side effects, keep track of how patient's diet and activity impact blood sugar levels, demonstrate how blood sugar levels are affected by stress or illness. Along with this doctors can track progress toward treatment objectives.",
  },
  {
    title: "ECG Device for Remote Patient Monitoring",
    description:
      "Gadgets whether handheld, wearable, or patch form, can aid in the detection of life-threatening disorders. Even during endurance or sports training, these remote patient monitoring systems record electric impulses from a patient's heart and communicate them to a doctor in real-time. Such readily available data can assist the team in making on-the-fly adjustments to care plans before a patient pushes their heart past its capacity.",
  },
  {
    title: "Heart Rate Monitoring",
    description:
      "The remote patient monitoring system automatically records and sends a patient's cardiac data during errands, exercise, stressful events, and even sleep so doctors can inform patients when they should be exercising more or less vigorously—and taking medication more or less frequently.",
  },
  {
    title: "Maternity Care Monitoring",
    description:
      "A pregnant woman can have virtual visits with a nurse who trains them on how to use an automatic blood pressure cuff, hand-held Doppler monitors, and weight monitors, thus the number of required clinic visits decreases. Doctors can also connect patients through online prenatal forums and encourage them to keep a pregnancy notebook. A remote patient monitoring system also makes it possible to notify and respond to emergencies quickly.",
  },
  {
    title: "Pulse Oximeter",
    description:
      "The amount of hemoglobin in oxygen-saturated blood is measured by the remote patient monitoring system. A patient's pulse is also taken by pulse oximeters. Patients with chronic heart or lung problems, as well as people, who supplement oxygen, have been using these devices for decades to alter their flow. As a result, they're very useful for diagnosing deteriorating lung function which may prompt a COVID-19 test.",
  },
  {
    title: "Medication Monitoring",
    description:
      "Patient monitoring portals connect patients and healthcare service providers now and are included with intelligent connected pill dispensers. To avoid adverse drug events, this real-time communication can remind patients to take their prescription at the correct time of day and the exact dosage advised. The remote patient monitoring system is extremely useful for psychologists, whose patient's prescriptions must be monitored and adjusted regularly.",
  },
].map((item) => ({
  title: item.title,
  items: [{ label: item.title, description: item.description }],
  summary: item.description,
}));

export const rpmConfig = {
  meta: {
    title: "Remote patient monitoring software company in India & USA | ReapMind",
    description:
      "Imagine being able to monitor, report, and evaluate your patients' acute and chronic diseases from anywhere on the planet. Clinicians and program directors can watch patients remotely in real-time with remote patient monitoring equipment.",
    canonicalPath: "/remote-patient-monitoring-system",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    {
      label: "Remote Patient Monitoring System",
      href: "/remote-patient-monitoring-system",
      current: true,
    },
  ],
  hero: {
    heading: "Explore the World of Remote Patient Monitoring System",
    description:
      "Imagine being able to monitor, report, and evaluate your patients' acute and chronic diseases from anywhere on the planet. Clinicians and program directors can watch patients remotely in real-time with remote patient monitoring equipment.",
    primaryCta: "Reach out to get started on your requirements",
    secondaryCta: "Have a Idea? Contact Us",
    image: "/rpm/hero-banner.png",
    accentColor: "#0EA5E9",
  },
  clientLogos: {
    title: "Celebrating Success Stories Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/rpm/bosch.png" },
      { name: "Oracle", src: "/rpm/oracle.png" },
      { name: "Disney", src: "/rpm/disney-client.png" },
      { name: "Siemens", src: "/rpm/siemens-client.png" },
      { name: "Times Group", src: "/rpm/client-logos-21.png" },
      { name: "Hyundai", src: "/rpm/client-logos-6.png" },
      { name: "Zydus", src: "/rpm/client-logos-23.png" },
      { name: "Paw Space", src: "/rpm/client-logos-14.png" },
      { name: "Yarnx", src: "/rpm/client-logos-22.png" },
    ],
  },
  features: {
    title: "Various type of Remote Patient Monitoring System",
    intro:
      "The use of a remote patient monitoring system contributes to the development of trust and transparency. Users get a better understanding of diseases and treatments, allowing them to take more control over the treatment regimens.",
    image: "/rpm/features-monitoring.png",
    envisionedTitle:
      "Why Choose ReapMind as your Envisioned Remote Patient Monitoring System Partner?",
  },
  interfaces: monitoringTypes,
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
    afterBenefits: {
      title: "Convert your Idea into Mobile App",
      primaryLabel: "Convert your Idea into Mobile App",
    },
    afterWhyUs: {
      title: "Book a Free Consultation",
      primaryLabel: "Book a Free Consultation",
    },
  },
  benefits: {
    title: "Benefits of Remote Patient Monitoring System",
    items: [
      {
        title: "Real-Time Data Transfer",
        description:
          "Clinicians and program directors can watch patients remotely in real-time with remote patient monitoring equipment.",
      },
      {
        title: "Improves Patients Lifestyle",
        description:
          "Users get a better understanding of diseases and treatments, allowing them to take more control over the treatment regimens.",
      },
      {
        title: "Healthcare available at doorsteps",
        description:
          "Monitor, report, and evaluate your patients' acute and chronic diseases from anywhere on the planet.",
      },
    ],
  },
  process: {
    title: "Our end-end development process to get develop a Remote Patient Monitoring",
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
  whyUs: {
    title: "Why Choose ReapMind as your Desired Remote Patient Monitoring?",
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
  },
  sectors: {
    title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
    items: [
      { name: "Healthcare", icon: "/rpm/doctor.png" },
      { name: "Banking", icon: "/rpm/mobile-payment.png" },
      { name: "eCommerce & Retail", icon: "/rpm/mobile-shopping.png" },
      { name: "Education", icon: "/rpm/edu.png" },
      { name: "Electric Vehicles", icon: "/rpm/electric-car.png" },
      { name: "Food & Restaurants", icon: "/rpm/cinema.png" },
      { name: "On-Demand Solutions", icon: "/rpm/smartphone.png" },
      { name: "Supply chain & Logistics", icon: "/rpm/logistics-1.png" },
      { name: "Travel & Hospitality", icon: "/rpm/vacation.png" },
      { name: "Media", icon: "/rpm/newspaper.png" },
      { name: "NFT & Crypto", icon: "/rpm/blockchain.png" },
      { name: "Entertainment", icon: "/rpm/cinema.png" },
    ],
  },
  testimonials: {
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
  },
  insights: {
    title: "Latest Insights",
    articles: getInsightCards("/rpm/"),
  },
  consultation: {
    title: "Get a Free Consultation from our Technology Expert",
    subtitle: "Trusted by Global Companies. Contact Us Today!",
  },
} as const;

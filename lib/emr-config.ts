import { getInsightCards } from "@/lib/blog-posts";

const emrModules = [
    {
      title: "Patient Scheduling",
      description:
        "An electronic medical record has a tool that helps set appointment allow office staff to simply book patients, register them, and select a reason for their visit. To prevent no-shows and improve collections, this electronic medical record system sends out automatic appointment reminders via email or text.",
    },
    {
      title: "Patient Flow for Electronic Medical Record",
      description:
        "To maximize productivity, one must first understand how patients flow through the business. To reduce inefficiencies, the most useful electronic medical record track patient flows in real-time. When a clean examination room is available, patients should never be forced to wait in the waiting room.",
    },
    {
      title: "Task Management",
      description:
        "Assist in managing the routine duties that clog up the everyday agenda. Signing notes, reviewing test findings, approving prescriptions, and responding to patient messages are all things that a quality system will remind healthcare providers to do. Won't waste time looking for misplaced charts, waiting by the fax machine, or digging for missing patient information electronic medical records will get it done.",
    },
    {
      title: "Patient History Charts",
      description:
        "Patient information such as prescriptions, allergies, current disorders, vaccines, and other crucial data points are easily accessible with an electronic medical record. The EMR instantly records clinical content so that healthcare providers can document normal conditions and abnormalities with a few simple mouse clicks, minimizing transcription time and cost.",
    },
    {
      title: "Sort Patients with Similar Condition",
      description:
        "Helps to sort patients with similar conditions, the electronic medical record system allows creating order sets and templates. Later, sorts patients with similar diagnoses, which can be re-used to save time and speed up the clinical interaction.",
    },
    {
      title: "Detailed Reports for Medical Record",
      description:
        "An electronic medical record system gives real-time access to clinical and financial data, allowing you to make better practice decisions. The ability to generate thorough reports that illustrate how progressing toward meaningful use. This will reveal where one should concentrate their efforts to qualify for those coveted government incentives.",
  },
] as const;

export const emrConfig = {
  meta: {
    title: "Electronic Medical Record Systems Company in India & USA | ReapMind",
    description:
      "An electronic medical record can increase the ability to diagnose diseases and reduce even prevent medical errors, resulting in better patient health outcomes.",
    canonicalPath: "/electronic-medical-record",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Electronic Medical Record", href: "/electronic-medical-record", current: true },
  ],
  hero: {
    heading: "One File that Saves it All- Electronic Medical Record.",
    paragraphs: [
      "Patients benefit from better medical care because healthcare providers have access to complete and accurate data. An electronic medical record can increase the ability to diagnose diseases and reduce even prevent medical errors, resulting in better patient health outcomes. Helps improve engagement and communication between patients and healthcare providers. Prescriptions will be safer and more dependable as a result of this technology.",
      "Our healthcare solutions at Reapmind are specifically suited to the demands of healthcare companies, supporting them in enhancing patient flow, treatment outcomes, and revenue and productivity. Most importantly, we assist in the design and development of a model that assists the healthcare business in delivering in a manner that allows one to dominate the market.",
    ],
    primaryCta: "Reach out to get started on your requirements",
    secondaryCta: "Have a Idea? Contact Us",
    image: "/emr/hero-banner.png",
    accentColor: "#2563EB",
  },
  clientLogos: {
    title: "Celebrating Success Stories Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/emr/bosch.png" },
      { name: "Oracle", src: "/emr/oracle.png" },
      { name: "Disney", src: "/emr/disney-client.png" },
      { name: "Siemens", src: "/emr/siemens-client.png" },
      { name: "Times Group", src: "/emr/client-logos-21.png" },
      { name: "Hyundai", src: "/emr/client-logos-6.png" },
      { name: "Zydus", src: "/emr/client-logos-23.png" },
      { name: "Paw Space", src: "/emr/client-logos-14.png" },
      { name: "Yarnx", src: "/emr/client-logos-22.png" },
    ],
  },
  features: {
    title: "Best Electronic Medical Record Services",
    intro:
      "In electronic medical records just like paper medical records, it keeps track of patient data and medical history in electronic format. This documentation serves a variety of purposes, including maintaining a thorough record of patient care for future decision-making, promoting continuity of care across visits, and supporting diagnoses, treatment plans, and medication or other orders. The days of a family doctor remembering each patient's medical history are long gone as the world's population continues to grow. To keep track of births, deaths, immunizations, and each person's whole medical history, healthcare providers rely on technology.",
  },
  serviceHighlights: {
    title: "Service Highlights",
    tabs: [
      {
        title: "Popular Platform",
        description:
          "Around 84.7% of Mobile devices are based out of the android platform and known to be the most user-friendly and beloved one among developers. Enjoy the benefit of embracing heavy downloads by creating android apps through accessing a proficient Android app development company. We are born to help businesses in developing comprehensive android apps with responsive UI design and impactful features that lead them to achieve required success.",
      },
      {
        title: "Open Source",
        description:
          "Android is an Open source platform implies it is royalty free and isn't just stuck to the android market. This platform uncovers a lot of features for creativity and innovativeness. But for leveraging the android platform uniqueness you have to go behind the right android app developers in India, USA, and UK region that processes great skills in shaping out the incredible apps. And ReapMind android developers are been recognized for developing business transformational apps for global and local clients.",
      },
      {
        title: "Easier Installation",
        description:
          "In addition to the Google play store, android apps can be hosted on any third-party website. Android software development kit unlocks these impressive abilities to install the app directly on the device or through the command line. It can be the best reason for investing in the Android app development platform as the apps are available for a larger number of users. For the best utilization of the android platform to achieve your business goals need to emphasize choosing our android development team.",
      },
      {
        title: "Lower Development Cost",
        description:
          "When compared to any other mobile app platform, android is notable as an affordable platform as Google play store subscription for uploading the APK is lesser than other platforms. Gain higher revenue in less investment by preferring android as your desired app development platform for bringing out the best in your business. Achieve users winning android applications by getting greater support from our developers who are knowledgeable and experienced for crafting out the apps with advanced languages.",
      },
    ],
  },
  modules: emrModules.map((box, index) => ({
    title: box.title,
    description: box.description,
    image:
      index % 3 === 0
        ? "/emr/hero-banner.png"
        : index % 3 === 1
          ? "/emr/feature-banner-2.png"
          : "/emr/blog-emr.png",
  })),
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
    afterWhyUs: {
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
        image: "/emr/testimonial-0.jpg",
        quote:
          "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
      },
      {
        name: "Mr. Matthew Carter",
        role: "CTO of Leep Rideshare LLC",
        image: "/emr/testimonial-1.jpg",
        quote:
          "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
      },
      {
        name: "Mr. Jeremy Del Zotto",
        role: "Founder & CEO - & Connection INC. (Canada)",
        image: "/emr/testimonial-2.jpg",
        quote:
          "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
      },
      {
        name: "S. D. Shibulal",
        role: "Founder: Innovations Investment Management India Private Ltd (INDIA)",
        image: "/emr/testimonial-sd.jpg",
        quote:
          "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
      },
      {
        name: "Roland Owens",
        role: "Director: Synerphase, Inc., Silicon Valley (USA)",
        image: "/emr/testimonial-5.jpg",
        quote:
          "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.",
      },
      {
        name: "Dr. Murugan Kandasamy",
        role: "CEO- Deutsch Quality Systems (India)",
        image: "/emr/testimonial-6.jpg",
        quote:
          "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
      },
    ],
  },
  process: {
    title: "Our end-end development process to get develop a perfect app",
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
  valueCards: {
    title: "Why Choose ReapMind as your Envisioned Android App Development Partner?",
    items: [
      {
        title: "Professional & Skilled Developers",
        description:
          "As a reputable android app development firm, we assign our customers the highly ambitious and enthusiastic team of developers. Their skills and proficiency meet any kind of challenging app development requirements.",
      },
      {
        title: "Full Transparency",
        description:
          "In the entire android app development process, we provide the transparency that empowers our clients to be on track with the project so that they can provide some inputs according to their ideas and need a concept.",
      },
      {
        title: "Focused & Latest Technologies",
        description:
          "We believe in leveraging the brand new technologies that turn up to an out of box android app development solution than ever. Our team goes in parallel with all the new updates in android in order to provide A1 android apps that support all the latest versions.",
      },
      {
        title: "Technical Consultation",
        description:
          "We not just stick on in providing android app development solutions but also provide the needful technical consultancy by understanding the market trends. It's alright if you have a rough plan or idea, once you collaborate you would definitely get the biggest hit technological solution.",
      },
    ],
  },
  sectors: {
    title: "Catering to Diverse Sectors: Our Targeted Industry Solutions",
    items: [
      { name: "Healthcare", icon: "/emr/doctor.png" },
      { name: "Banking", icon: "/emr/mobile-payment.png" },
      { name: "eCommerce & Retail", icon: "/emr/mobile-shopping.png" },
      { name: "Education", icon: "/emr/edu.png" },
      { name: "Electric Vehicles", icon: "/emr/electric-car.png" },
      { name: "Food & Restaurants", icon: "/emr/cinema.png" },
      { name: "On-Demand Solutions", icon: "/emr/smartphone.png" },
      { name: "Supply chain & Logistics", icon: "/emr/logistics-1.png" },
      { name: "Travel & Hospitality", icon: "/emr/vacation.png" },
      { name: "Media", icon: "/emr/newspaper.png" },
      { name: "NFT & Crypto", icon: "/emr/blockchain.png" },
      { name: "Entertainment", icon: "/emr/cinema.png" },
    ],
  },
  whyUs: {
    title: "Why Choose ReapMind as your Desired Mobile App Development Partner?",
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
    closing:
      "With our innovative technology solutions, you can experience the future of technology today and stay ahead of the curve in the rapidly evolving digital landscape. Experience the power of technology in action.",
  },
  insights: {
    title: "Latest Insights",
    articles: getInsightCards("/emr/"),
  },
  consultation: {
    title: "Get a Free Consultation from our Technology Expert",
    subtitle: "Trusted by Global Companies. Contact Us Today!",
  },
} as const;

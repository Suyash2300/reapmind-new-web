import { getInsightCards } from "@/lib/blog-posts";

export const omdConfig = {
  meta: {
    title: "Online Medicine Delivery App Development Company in USA & India | ReapMind",
    description:
      "Team ReapMind simplifies and injects efficiency in the medical supply chain while developing trust and providing a better user experience as a leading online medicine delivery app development firm.",
    canonicalPath: "/online-medicine-delivery-solution",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Online Medicine Delivery Solution", href: "/online-medicine-delivery-solution", current: true },
  ],
  hero: {
    heading: "Online Medicine Delivery Solution",
    description:
      "As the business grows, product range and target audience will most likely be expanded and business will be developed in line with customer demand. Adding more platforms to business by adding additional payment options and even increasing by deciding to ship to eCommerce business website or mobile application without having to worry about changing position or moving to bigger premises yet serving the customer to best is always a better option.",
    primaryCta: "Reach out to get started on your requirements",
    secondaryCta: "Have a Idea? Contact Us",
    image: "/omd/hero-setup.jpg",
    accentColor: "#0D9488",
  },
  clientLogos: {
    title: "Celebrating Success Stories Empowering Our Clients to Achieve Unprecedented Heights",
    logos: [
      { name: "Bosch", src: "/omd/bosch.png" },
      { name: "Oracle", src: "/omd/oracle.png" },
      { name: "Disney", src: "/omd/disney-client.png" },
      { name: "Siemens", src: "/omd/siemens-client.png" },
      { name: "Times Group", src: "/omd/client-logos-21.png" },
      { name: "Hyundai", src: "/omd/client-logos-6.png" },
      { name: "Zydus", src: "/omd/client-logos-23.png" },
      { name: "Paw Space", src: "/omd/client-logos-14.png" },
      { name: "Yarnx", src: "/omd/client-logos-22.png" },
    ],
  },
  features: {
    title: "In-App Features of Online Medicine Delivery",
    intro:
      "Role-based user permissions are included in the online medicine delivery application. Each permission category grants access to a distinct set of features. We the team ReapMind simplify and inject efficiency in the medical supply chain while developing trust and providing a better user experience as a leading online medicine delivery app development firm. Our solutions are customized to meet specific business demands, whether it’s on-demand online medicine ordering or online medicine delivery to a patient’s address or obtaining prescriptions and consultations. We offer cutting-edge online medicine delivery app development solutions that assist pharma businesses to grow their market footprint and delight end-users by medicine home delivery, backed by substantial experience in pharmaceutical supply chain operations and technology knowledge.",
    managementHeading: "Why Choose ReapMind as your Envisioned Online Medicine Delivery?",
  },
  management: [
    {
      title: "Pharmacies Management",
      items: [
        {
          label: "Pharmacist Login",
          description:
            "Each pharmacist can log in through id and password or phone number and OTP. Authentication at each stage is a must for the overall security of the online medicine delivery app.",
        },
        {
          label: "Store details",
          description:
            "The pharmacist will have all rights to add, delete and change the list of medication information available in the store. Easy to track available stock.",
        },
        {
          label: "Order Notification",
          description:
            "Each new order received will be notified to the pharmacists along with the prescription for verification purposes. Also, stores will be able to manage ongoing orders in real-time.",
        },
        {
          label: "Discounts and Payments",
          description:
            "Pharmacists will have the rights to provide discounts and offer to a loyal customer; will all payments in the app and would be able to track payments in real-time.",
        },
        {
          label: "MIS management",
          description:
            "The store can now easily keep a record of stock, check out for similar medicines, look after P&L of the store, record of the customer, etc with the online medicine delivery application.",
        },
      ],
    },
    {
      title: "Courier Management",
      items: [
        {
          label: "Delivery boy login & details",
          description:
            "All delivery partners can log in through id and password or phone number and OTP for authentication.",
        },
        {
          label: "Order Notification",
          description:
            "When the order is placed delivery partner will receive a notification and details of pickup and delivery.",
        },
        {
          label: "Sharing Updates",
          description:
            "Courier partners will have to share details of each process to help customers and pharmacists track the status in real-time.",
        },
        {
          label: "Delivery Status",
          description:
            "The delivery partner will have to authenticate the customer with an OTP and then post handing over parcel need to update the same.",
        },
      ],
    },
    {
      title: "Admin Management",
      items: [
        {
          label: "Manage user & supplier",
          description:
            "The admin has the rights to add, edit and delete customers, suppliers, manufacturers, and delivery partners.",
        },
        {
          label: "Inventory Check",
          description:
            "Admin will have all access to check stock at each store and notify about expiry date and low stock the suppliers.",
        },
        {
          label: "Design Campaigns",
          description:
            "To attract more customers admin can design campaigns in various forms and try to sell more, helping pharmaceuticals to generate more profits.",
        },
        {
          label: "Analytics & Reports",
          description:
            "Admin has access to monitor all the functions in the app and thus can bring together operational data and statistics, and help by providing interactive reports for smooth business flow helping boost the revenues.",
        },
      ],
    },
  ],
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
    finalConsultation: {
      title: "Get a Free Consultation from our Technology Expert",
    },
  },
  customer: {
    title: "Customer Management",
    tabs: [
      {
        title: "Registration & Login",
        description:
          "Easy registration and login interface where user can log in through email id and password or using phone number and OTP.",
      },
      {
        title: "Set Profile",
        description:
          "On registration, one needs to fill in basic details like age, gender, weight, medical history, etc. This would help the pharmacist to analyze and help well.",
      },
      {
        title: "Upload Prescription",
        description:
          "The user is expected to click the picture and upload the prescription for the pharmacist to review and authenticate it. Prescription is a must for all medicines.",
      },
      {
        title: "Medicine Detail",
        description:
          "Customers will be able to see the description of the medicine and the contents, the name of the manufacturer, and can compare the price.",
      },
      {
        title: "Payment Gateway",
        description:
          "Each pharmacist can log in through id and password or phone number and OTP. Authentication at each stage is a must for overall security.",
      },
    ],
  },
  process: {
    title: "Our end-end development process to get develop a Online Medicine Delivery",
    subtitle:
      "We believe in delivering flawless mobile apps that ensure our clients gain a legacy in their business space. With the standard development process our team design, deploy and deliver quality products that result in bringing intended outcome in terms of quality and efficiency.",
    tagline: "Delivering services that empower businesses to reap the benefits of digital transformation",
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
      { name: "Healthcare", icon: "/omd/doctor.png" },
      { name: "Banking", icon: "/omd/mobile-payment.png" },
      { name: "eCommerce & Retail", icon: "/omd/mobile-shopping.png" },
      { name: "Education", icon: "/omd/edu.png" },
      { name: "Electric Vehicles", icon: "/omd/electric-car.png" },
      { name: "Food & Restaurants", icon: "/omd/cinema.png" },
      { name: "On-Demand Solutions", icon: "/omd/smartphone.png" },
      { name: "Supply chain & Logistics", icon: "/omd/logistics-1.png" },
      { name: "Travel & Hospitality", icon: "/omd/vacation.png" },
      { name: "Media", icon: "/omd/newspaper.png" },
      { name: "NFT & Crypto", icon: "/omd/blockchain.png" },
      { name: "Entertainment", icon: "/omd/cinema.png" },
    ],
  },
  whyUs: {
    title: "Why Choose ReapMind as your Desired Online Medicine Delivery ?",
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
          "We aim to unleash success for our customers by offering valuable mobile app development solutions that effectiveness for their users. We are known for commitment, hard work, and expertise that’s how we differ from other mobile app development companies.",
      },
      {
        title: "Quality results",
        description:
          "Quality is the primary element that differentiates your apps from others. ReapMind high tech team is essentially focused on developing quality based mobile apps that meets the needed standards of your end-users.",
      },
    ],
  },
  insights: {
    title: "Latest Insights",
    articles: getInsightCards("/omd/"),
  },
  consultation: {
    title: "Get a Free Consultation from our Technology Expert",
    subtitle: "Trusted by Global Companies. Contact Us Today!",
  },
} as const;

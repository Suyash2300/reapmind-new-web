import { createHealthcareServiceConfig } from "./healthcare-service-factory";

export const oltConfig = createHealthcareServiceConfig({
  assetPrefix: "/olt",
  canonicalPath: "/online-lab-test",
  metaTitle:
    "Online Lab Test App Development in USA & India | Book your Lab Test Online | ReapMind",
  metaDescription:
    "Online lab tests help individuals in need of pathology or radiology find local laboratories and choose one that meets their individual needs. Book your lab test online with ReapMind.",
  breadcrumbLabel: "Online Lab Tests",
  heroHeading: "Get Online Lab Tests Appointment Booking",
  heroDescription:
    "As the business grows, product range and target audience will most likely be expanded and business will be developed in line with customer demand. Adding more platforms to business by adding additional payment options and even increasing by deciding to ship to eCommerce business website or mobile application without having to worry about changing position or moving to bigger premises yet serving the customer to best is always a better option.",
  heroImage: "/olt/blog-cybersecurity.png",
  featuresTitle: "Features of Online Lab Tests Services",
  featuresIntro:
    "Get one stop solution for your lab and let your patients sit back and get their appointment booked. Team ReapMind is a group of specialists dedicated to providing high-quality healthcare to the world. Building a user-centric website, user research, mobile responsive design, social media marketing management, and a native mobile app for Android and iOS are all part of our tasks.",
  featuresImage: "/olt/blog-devops.png",
  envisionedTitle:
    "Why Choose ReapMind as your Envisioned Online Lab Tests Appointment?",
  modules: [
    {
      title: "Doctors Interface",
      description:
        "Quick Login: Just one click and doctors can login into the online lab tests application with their mobile numbers or email address. Prescribe Online Test to Patients: Looking at the history and to diagnose patient's healthcare providers can directly prescribe tests through online lab tests. Easily Check Reports: Once the tests are done and uploaded by lab, patients as well as doctors can see it on their screen and then doctors can look for further action.",
    },
    {
      title: "User Interface",
      description:
        "Easy Login: Patients can login onto the online lab tests application with their cell numbers or email addresses with only one click. Book Appointments: Book appointments easily by selecting the prescribed test, then select lab and book appointment also the online lab test helps book labs service at home, where a person from lab would visit home to collect samples. Sharing of Reports: Now no more waiting to share reports with doctor, as soon as the lab uploads the reports patient will receive notification and reports will be accessible to the concerned doctor as well; doctor can also see the history of reports of a patient on online lab testing.",
    },
    {
      title: "Lab Interface",
      description:
        "Manage Request: Slots would be displayed to patients because of whom patients can themselves book their appointments, lab incharge will always have liberty to shuffle schedule as per the requirement. Create and Manage Reports: Lab technician can easily create reports and upload it on same platform, can create and edit tests making it convenient for the user to easily share details. Share Reports: Once the report is prepared, lab incharge can easily upload it on the online lab test portal and it will be accessible to patients and doctors.",
    },
  ],
  hideBenefits: true,
  benefitsTitle: "Benefits of Online Lab Tests Platform",
  whyUsTitle: "Why Choose ReapMind as your Desired Online Lab Tests?",
  processTitle:
    "Our end-end development process to get develop a Online Lab Tests Appointment",
});

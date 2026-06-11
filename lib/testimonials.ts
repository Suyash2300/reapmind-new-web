/** Client testimonials — from https://reapmind.com/ (used across contact & marketing pages) */

import { hireTestimonialImages } from "./hire-testimonial-images";

const TESTIMONIAL_IMAGE_BASE =
  "https://reapmind.com/wp-content/uploads/2023/08";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  thumbImage: string;
};

export const testimonialsSection = {
  title: "What Our Clients Have to Say About Us",
  subtitle:
    "We are grateful for our clients' trust in us, and we take great pride in delivering quality solutions that exceed their expectations.",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "roland-owens",
    name: "Roland Owens",
    role: "Director: Synerphase, Inc., Silicon Valley (USA)",
    initials: "RO",
    image: hireTestimonialImages.roland,
    imageWidth: 300,
    imageHeight: 296,
    thumbImage: hireTestimonialImages.roland,
    quote:
      "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.",
  },
  {
    id: "jeremy-del-zotto",
    name: "Mr. Jeremy Del Zotto",
    role: "Founder & CEO — & Connection INC. (Canada)",
    initials: "JD",
    image: hireTestimonialImages.jeremy,
    imageWidth: 300,
    imageHeight: 298,
    thumbImage: hireTestimonialImages.jeremy,
    quote:
      "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
  },
  {
    id: "gunjan-jain",
    name: "Miss Gunjan Jain",
    role: "Founder and CEO of Internationally Awarded Healthtech Ventures",
    initials: "GJ",
    image: hireTestimonialImages.gunjan,
    imageWidth: 300,
    imageHeight: 300,
    thumbImage: hireTestimonialImages.gunjan,
    quote:
      "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
  },
  {
    id: "sd-shibulal",
    name: "S. D. Shibulal",
    role: "Founder: Innovations Investment Management India Private Ltd (INDIA)",
    initials: "SS",
    image: hireTestimonialImages.shibulal,
    imageWidth: 300,
    imageHeight: 300,
    thumbImage: hireTestimonialImages.shibulal,
    quote:
      "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
  },
  {
    id: "matthew-carter",
    name: "Mr. Matthew Carter",
    role: "CTO of Leep Rideshare LLC",
    initials: "MC",
    image: hireTestimonialImages.matthew,
    imageWidth: 300,
    imageHeight: 300,
    thumbImage: hireTestimonialImages.matthew,
    quote:
      "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
  },
  {
    id: "murugan-kandasamy",
    name: "Dr. Murugan Kandasamy",
    role: "CEO — Deutsch Quality Systems (India)",
    initials: "MK",
    image: hireTestimonialImages.murugan,
    imageWidth: 300,
    imageHeight: 300,
    thumbImage: hireTestimonialImages.murugan,
    quote:
      "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
  },
];

import fs from "node:fs";

const html = fs.readFileSync("public/nodejs-hire-source.html", "utf8");

function decode(s) {
  return s
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractBetween(start, end) {
  const s = html.indexOf(start);
  if (s === -1) return "";
  const e = end ? html.indexOf(end, s + start.length) : -1;
  return e === -1 ? html.slice(s) : html.slice(s, e);
}

function extractStats() {
  const block = extractBetween("1000 +", "Get Free Consultation");
  const re =
    /<h6[^>]*>\s*<span[^>]*>\s*([^<]+?)\s*<\/span>\s*<\/h6>\s*<p class="elementor-icon-box-description">\s*([^<]+?)\s*<\/p>/gi;
  const stats = [];
  let m;
  while ((m = re.exec(block)) !== null) {
    stats.push({ value: m[1].trim(), label: m[2].trim() });
  }
  return stats.slice(0, 4);
}

function extractTechItems() {
  const block = extractBetween(
    "Explore Our Powerful Node JS Technologies",
    "Ready to see your Node.js project come to life"
  );
  const items = [];
  const re =
    /src="([^"]+)"[\s\S]*?<h6[^>]*>\s*<span[^>]*>\s*([\s\S]*?)\s*<\/span>\s*<\/h6>/gi;
  let m;
  while ((m = re.exec(block)) !== null) {
    items.push({ name: decode(m[2]), iconUrl: m[1].split("?")[0] });
  }
  return items;
}

function extractTestimonials() {
  const block = extractBetween(
    "What Our Clients Have to Say About Us",
    "Hire React Native Developers"
  );
  const quotes = [...block.matchAll(/<p>([\s\S]*?)<\/p>/g)]
    .map((m) => decode(m[1]))
    .filter((q) => q.length > 100 && q.includes("ReapMind") || q.includes("Reapmind") || q.includes("collaboration"));

  const names = [...block.matchAll(/<h5 class="elementor-heading-title[^"]*">([\s\S]*?)<\/h5>/g)].map((m) =>
    decode(m[1])
  );
  const roles = [...block.matchAll(/<h5 class="elementor-heading-title[^"]*">([\s\S]*?)<\/h5>/g)]
    .map((m) => decode(m[1]))
    .filter((r) => r.includes("Director") || r.includes("Founder") || r.includes("CEO") || r.includes("CTO"));

  // Better approach: split by testimonial quote paragraphs
  const items = [];
  const quoteRe = /<p>(Huge thank you[\s\S]*?)<\/p>|<p>(Reapmind has been[\s\S]*?)<\/p>|<p>(At Vytal[\s\S]*?)<\/p>|<p>(At Synerphase[\s\S]*?)<\/p>|<p>(Reapmind's e-commerce[\s\S]*?)<\/p>|<p>(Partnering with Reapmind[\s\S]*?)<\/p>|<p>(At Deutsch Quality[\s\S]*?)<\/p>/gi;
  const quoteList = [];
  let qm;
  while ((qm = quoteRe.exec(block)) !== null) {
    quoteList.push(decode(qm[1] || qm[2] || qm[3] || qm[4] || qm[5] || qm[6] || qm[7]));
  }

  const people = [
    { name: "Mohammed Mirza", role: "Director, LOCALMASTERCHEFS LTD", imageUrl: "https://reapmind.com/wp-content/uploads/2023/08/2-1024x1016.jpg" },
    { name: "Mr. Jeremy Del Zotto", role: "Founder & CEO - & Connection INC. (Canada)", imageUrl: "https://reapmind.com/wp-content/uploads/elementor/thumbs/jeremy-del-zotto-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png" },
    { name: "Miss Gunjan Jain", role: "Founder and CEO of Internationally Awarded Healthtech Ventures", imageUrl: "https://reapmind.com/wp-content/uploads/elementor/thumbs/Gunjan-jain-rl7hpjnjx2fx53mc5j2h28jfwh1az7zyvojnph3l4c.png" },
    { name: "Roland Owens", role: "Director: Synerphase, Inc., Silicon Valley (USA)", imageUrl: "https://reapmind.com/wp-content/uploads/elementor/thumbs/Roland_owens-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png" },
    { name: "S. D. Shibulal", role: "Founder: Innovations Investment Management India Private Ltd (INDIA)", imageUrl: "https://reapmind.com/wp-content/uploads/elementor/thumbs/S.D-Sgibulal-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png" },
    { name: "Mr. Matthew Carter", role: "CTO of Leep Rideshare LLC", imageUrl: "https://reapmind.com/wp-content/uploads/elementor/thumbs/Matthew-Carter-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png" },
    { name: "Dr. Murugan Kandasamy", role: "CEO- Deutsch Quality Systems (India)", imageUrl: "https://reapmind.com/wp-content/uploads/elementor/thumbs/Murugan-Candasamy-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png" },
  ];

  // Extract quotes from block more reliably
  const quoteTexts = [
    "Huge thank you to ReapMind Innovations; they have been a massive help in enabling us to start developing our project within a few weeks, so it's been great! There have been two small bumps in the road, but overall, It's been a fantastic service. I have already recommended it to one of my friends.",
    "Reapmind has been an outstanding product partner for & Connection INC. Their exceptional technical support has brought to life unique and innovative features that have significantly elevated our app's functionality and user experience. Reapmind's commitment to delivering excellence has been instrumental in our success. Highly recommended for top-notch app development services.",
    "At Vytal, our collaboration with Reapmind on two applications was exceptional. Their dynamic team grasped our unique needs, collaborating closely with our own. They not only created visually appealing apps but also ensured functionality and user-friendliness. Prompt issue resolution, transparent communication, and adaptable professionalism defined our experience. Highly recommend!",
    "At Synerphase, Inc., our collaboration with Reapmind has been transformational. Their unwavering support for technological innovation turned our unique concept into a functional product. Reapmind's expertise and commitment breathed life into our vision. We highly recommend Reapmind to those seeking a partner capable of translating innovative concepts into tangible, efficient solutions.",
    "Reapmind's e-commerce web application development has been instrumental in our success. Their expertise has enabled us to establish a comprehensive e-retail ecosystem, and their contribution has added significant value to our business, enhancing our overall system and driving our success forward. Highly recommended!",
    "Partnering with Reapmind was a game-changer for Leep Rideshare. Their deep understanding and close collaboration resulted in appealing and user-friendly apps. Quick issue resolution, clear communication, and a flexible and professional approach made the journey remarkable. We highly recommend Reapmind for its exceptional relationship-driven solutions.",
    "At Deutsch Quality Systems (India), our collaboration with Reapmind speaks volumes. They developed a unique offline auditor app, a rarity that demanded an exceptional team. Reapmind crafted a solution that not only addressed our specific needs but also added significant value to our business. The app's innovative approach, efficient time-saving, and user-friendly navigation have been remarkable!",
  ];

  // Verify quotes from HTML
  for (let i = 0; i < people.length; i++) {
    const needle = quoteTexts[i].slice(0, 40);
    if (!html.includes(needle.replace(/'/g, "&#8217;").slice(0, 30)) && !html.includes(needle.slice(0, 30))) {
      // try to find actual quote in html
      const idx = html.indexOf(people[i].name);
      if (idx > -1) {
        const chunk = html.slice(idx - 2000, idx);
        const pm = chunk.match(/<p>([\s\S]{100,800}?)<\/p>/g);
        if (pm) quoteTexts[i] = decode(pm[pm.length - 1]);
      }
    }
  }

  return people.map((p, i) => ({ quote: quoteTexts[i], ...p }));
}

function extractFaqs() {
  const block = extractBetween('class="elementor-toggle-title"', "</footer>");
  const faqs = [];
  const re =
    /class="elementor-toggle-title"[^>]*>([\s\S]*?)<\/a>[\s\S]*?class="elementor-tab-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  let m;
  while ((m = re.exec(block)) !== null) {
    faqs.push({ question: decode(m[1]), answer: decode(m[2]) });
  }
  return faqs;
}

function extractProcessSteps() {
  const block = extractBetween("Take a look at the simple", "Work Together with the Top 1%");
  const steps = [];
  for (const title of ["Inquiry", "Developer Section", "Integration", "Scaling"]) {
    const re = new RegExp(
      `<h3[^>]*>${title}<\\/h3>[\\s\\S]{0,800}?<p>([\\s\\S]*?)<\\/p>`,
      "i"
    );
    const m = block.match(re);
    steps.push({ title, description: m ? decode(m[1]) : "" });
  }
  return steps;
}

function extractHiringModels() {
  const block = extractBetween("Our Hiring Models", "Hire Node JS Developers from ReapMind innovations");
  const subtitleMatch = block.match(/<p>(Our hiring models[\s\S]*?)<\/p>/i);
  const models = [];
  for (const title of ["Full Time", "Part Time", "Hourly Basis"]) {
    const re = new RegExp(`${title}[\\s\\S]{0,600}?Hours Per Day<br>\\s*([^<]+)[\\s\\S]{0,300}?Hours Commitment<br[^>]*>\\s*([^<]+)`, "i");
    const m = block.match(re);
    models.push({
      title,
      hoursPerDay: m ? m[1].trim() : "",
      commitment: m ? m[2].trim() : "",
    });
  }
  return {
    title: "Our Hiring Models",
    subtitle: subtitleMatch ? decode(subtitleMatch[1]) : "",
    models,
    finalizeCta: "Finalize the hiring Model",
  };
}

function extractRelated() {
  const items = [];
  const block = extractBetween("Hire React Native Developers", "FAQ");
  const re =
    /<h3[^>]*>\s*<span[^>]*>\s*(Hire[\s\S]*?)\s*<\/span>\s*<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>[\s\S]*?href="([^"]+)"/gi;
  let m;
  while ((m = re.exec(block)) !== null) {
    items.push({ title: decode(m[1]), description: decode(m[2]), href: m[3] });
  }
  return items;
}

function extractImgUrls() {
  const mainStart = html.indexOf('data-elementor-type="wp-page"');
  const mainEnd = html.indexOf("<footer", mainStart);
  const main = html.slice(mainStart, mainEnd);
  const urls = new Set();
  const re = /(?:data-src|src)="(https:\/\/reapmind\.com\/wp-content\/uploads\/[^"?]+)/g;
  let m;
  while ((m = re.exec(main)) !== null) urls.add(m[1]);
  return [...urls].sort();
}

const heroDescMatch = html.match(
  /Reapmind gives you access to the top 1%[\s\S]*?Join 98% of CTOs who trust us to deliver high-performing development teams\./
);
const techDescMatch = html.match(
  /Forge ahead with our elite Node\.js engineers[\s\S]*?we craft experiences/
);

const techCtaTitle = "Ready to see your Node.js project come to life?";
const techCtaSubtitleMatch = html.match(
  /Ready to see your Node\.js project come to life\?[\s\S]*?<p>\s*<span[^>]*>([\s\S]*?)<\/span>\s*<\/p>/
);
const pricingCtaTitle = "Hire Node JS Developers from ReapMind innovations";
const pricingCtaSubtitleMatch = html.match(
  /Work Together with the Top 1%[\s\S]*?Hire Node JS Developers from ReapMind innovations[\s\S]*?<p>(Need top-tier[\s\S]*?)<\/p>/i
);

const result = {
  meta: {
    title: "Hire Node JS Developers",
    description:
      "Hire skilled Node.js developers to build scalable, high-performance web applications. Get expert solutions for your business needs today.",
  },
  breadcrumb: [
    { label: "Home", href: "https://reapmind.com/" },
    { label: "Hire Dedicated Developer", href: "https://reapmind.com/hire-developers/" },
    { label: "Node Js Developer", href: "https://reapmind.com/hire-nodejs-developers/" },
    { label: "Hire Nodejs Developers", href: "https://reapmind.com/hire-nodejs-developers/" },
  ],
  hero: {
    heading: "Hire Node JS Developers",
    description: heroDescMatch ? decode(heroDescMatch[0]) : "",
    stats: extractStats(),
    primaryCta: "Get Free Consultation",
    secondaryCta: "Hire Node JS Developers Now",
    heroImageUrl: "https://reapmind.com/wp-content/uploads/2024/11/Node-JS-Developers-1024x1024.png",
  },
  clientLogos: {
    title: "Celebrating Success Stories Empowering Our Clients to Achieve Unprecedented Heights",
    logoImageUrls: [
      "https://reapmind.com/wp-content/uploads/2023/10/bosch.png",
      "https://reapmind.com/wp-content/uploads/2023/10/oracle.png",
      "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png",
      "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png",
      "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png",
      "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png",
      "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png",
      "https://reapmind.com/wp-content/uploads/2023/04/client-logos-14.png",
      "https://reapmind.com/wp-content/uploads/2023/04/client-logos-22.png",
    ],
  },
  trustedBy: {
    title: "Trusted by startups & Fortune 500 companies",
    logoUrls: extractBetween("Trusted by startups", "Scale your Node.js").match(/src="(https:\/\/reapmind\.com\/wp-content\/uploads\/2023\/04\/client-logos[^"]+)"/g)?.map(u => u.replace(/src="/, "").split("?")[0]).filter((v,i,a)=>a.indexOf(v)===i) || [],
  },
  about: {
    title: "Scale your Node.js development with elite engineers",
    description: decode(extractBetween("Scale your Node.js development with elite engineers", "Our Portfolio Works").match(/<p>(Save time[\s\S]*?)<\/p>/i)?.[1] || ""),
    bulletsLeft: ["Hire a team of Your Choice", "Code Documentation", "Time-Zone Compatibility"],
    bulletsRight: ["Flexibility and Retention", "Flexible Contracts", "Data Security Assurance"],
  },
  portfolio: {
    title: "Our Portfolio Works",
    subtitle: "Discover our diverse portfolio of successful projects, Including Websites, Mobile Apps, & enterprise solutions tailored to startups & large organizations alike.",
    items: [
      { title: "Leep", category: "Ride Sharing App", imageUrl: "https://reapmind.com/wp-content/uploads/2024/10/Leep.png", link: "https://reapmind.com/portfolio/leep-rideshare-app/" },
      { title: "Happy Harvest", category: "Organic Grocery App", imageUrl: "https://reapmind.com/wp-content/uploads/2023/05/Happy-HArvest-2-1.webp", link: "https://reapmind.com/portfolio/happy-harvest-farms-delivery/" },
      { title: "CARLOANA", category: "Car Finance Website", imageUrl: "https://reapmind.com/wp-content/uploads/2023/05/Carloana.webp", link: "https://reapmind.com/portfolio/carloana-car-finance-made-smarter/" },
    ],
  },
  technologies: {
    title: "Explore Our Powerful Node JS Technologies",
    description: techDescMatch ? decode(techDescMatch[0]) : "",
    illustrationUrl: "https://reapmind.com/wp-content/uploads/2023/04/Large.png",
    items: extractTechItems(),
  },
  ctas: {
    afterTechnologies: {
      title: techCtaTitle,
      subtitle: techCtaSubtitleMatch ? decode(techCtaSubtitleMatch[1]) : "",
      buttonLabel: "Book a free Consultation",
    },
    afterPricing: {
      title: pricingCtaTitle,
      subtitle: pricingCtaSubtitleMatch ? decode(pricingCtaSubtitleMatch[1]) : "",
      buttonLabel: "Book a free Consultation",
    },
  },
  hiringModels: extractHiringModels(),
  process: {
    title: "Hire Node JS Developers from ReapMind innovations",
    subtitle: "Take a look at the simple & straight forward process to hire Node JS developers from Reapmind Innovation",
    steps: extractProcessSteps(),
  },
  pricing: {
    title: "Work Together with the Top 1% of Indian Developers",
    subtitle: "Get Access to the top talent in the field by hiring our dedicated Node JS developers",
    tiers: [
      { title: "Junior Node JS Developer", price: "$800-$1200", experience: "1-3 Years Experienced" },
      { title: "Mid Level Node JS Developer", price: "$1300-$1500", experience: "3-5 Years Experienced" },
      { title: "Senior Node JS Developer", price: "$1900-$2500", experience: "5+ Years Experienced" },
    ],
  },
  testimonials: {
    title: "What Our Clients Have to Say About Us",
    subtitle: "We are grateful for our clients' trust in us, and we take great pride in delivering quality solutions that exceed their expectations. Here is what some of them have to say about us",
    items: extractTestimonials(),
  },
  relatedHire: { items: extractRelated() },
  faqs: extractFaqs(),
  allPageImageUrls: extractImgUrls(),
};

// Fix trustedBy if empty
if (!result.trustedBy.logoUrls.length) {
  result.trustedBy.logoUrls = [
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-1.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-2.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-3.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-12.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-4.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-5.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-7.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-8.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-9.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-11.png",
    "https://reapmind.com/wp-content/uploads/2023/04/client-logos-13.png",
  ];
}

// Verify and fix pricing CTA subtitle from HTML
const pricingCtaAlt = html.match(/Need top-tier Node\.js developers[\s\S]*?bring your vision to life\./);
if (pricingCtaAlt) result.ctas.afterPricing.subtitle = decode(pricingCtaAlt[0]);

console.log(JSON.stringify(result, null, 2));

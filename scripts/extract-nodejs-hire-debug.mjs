import fs from "node:fs";

const html = fs.readFileSync("public/nodejs-hire-source.html", "utf8");

function extract(pattern, label) {
  const m = html.match(pattern);
  console.log(`\n=== ${label} ===`);
  console.log(m ? m[1] || m[0] : "NOT FOUND");
}

// Hero description
extract(
  /Reapmind gives you access to the top 1%[\s\S]{0,500}?Join 98% of CTOs[\s\S]{0,200}?\./,
  "hero desc"
);

// Stats labels
extract(/1000 \+<\/h6>[\s\S]{0,200}?<\/h6>/g, "stats block");
const statsRe = /(<h6[^>]*>(1000 \+|16 \+ Years|250 \+|99 \+ Certified)<\/h6>[\s\S]{0,300}?<p[^>]*>([\s\S]*?)<\/p>)/gi;
let sm;
while ((sm = statsRe.exec(html)) !== null) {
  console.log("STAT:", sm[2], "->", sm[3].replace(/<[^>]+>/g, "").trim());
}

// Hero image
extract(/Node-JS-Developers[^"']+\.(png|webp|jpg)/i, "hero img partial");
const heroImg = html.match(/wp-content\/uploads\/2024\/11\/Node-JS-Developers[^"']+/);
console.log("\n=== hero img ===", heroImg?.[0]);

// CTAs
extract(/Ready to see your Node\.js project come to life\?[\s\S]{0,800}?Book a free Consultation/, "tech cta");
extract(/Hire Node JS Developers from ReapMind innovations[\s\S]{0,500}?Book a free Consultation/i, "pricing cta");

// Tech description
extract(/Explore Our Powerful Node JS Technologies[\s\S]{0,1200}?JavaScript \(ES6\+\)/, "tech section");

// Hiring models subtitle
extract(/Our Hiring Models[\s\S]{0,600}?Full Time/, "hiring models");

// Process subtitle
extract(/Hire Node JS Developers from ReapMind innovations[\s\S]{0,400}?Inquiry/, "process");

// Process steps
for (const step of ["Inquiry", "Developer Section", "Integration", "Scaling"]) {
  const re = new RegExp(`<h3[^>]*>${step}<\\/h3>[\\s\\S]{0,400}`, "i");
  const m = html.match(re);
  if (m) console.log(`\nSTEP ${step}:`, m[0].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 200));
}

// Testimonials - use itemprop or testimonial
const testimonialRe = /elementor-testimonial-content[^>]*>([\s\S]*?)<\/div>[\s\S]*?elementor-testimonial-name[^>]*>([\s\S]*?)<\/div>[\s\S]*?elementor-testimonial-job[^>]*>([\s\S]*?)<\/div>/gi;
let tm;
let i = 0;
while ((tm = testimonialRe.exec(html)) !== null) {
  i++;
  console.log(`\nTESTIMONIAL ${i}:`);
  console.log("quote:", tm[1].replace(/<[^>]+>/g, "").trim().slice(0, 150));
  console.log("name:", tm[2].replace(/<[^>]+>/g, "").trim());
  console.log("role:", tm[3].replace(/<[^>]+>/g, "").trim());
}

// Related hire
const relatedRe = /<h3[^>]*>(Hire (?:React Native|Mobile App|Android App) Developers)<\/h3>[\s\S]{0,600}?href=["']([^"']+)["']/gi;
let rm;
while ((rm = relatedRe.exec(html)) !== null) {
  console.log("\nRELATED:", rm[1], rm[2]);
}

// FAQs
const faqRe = /elementor-toggle-title[^>]*>([\s\S]*?)<\/a>[\s\S]*?elementor-toggle-content[^>]*>([\s\S]*?)<\/div>/gi;
let fq;
while ((fq = faqRe.exec(html)) !== null) {
  console.log("\nFAQ Q:", fq[1].replace(/<[^>]+>/g, "").trim());
  console.log("FAQ A:", fq[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 300));
}

// Tech icons - pair h6 with preceding img
const techStart = html.indexOf("Explore Our Powerful Node JS Technologies");
const techEnd = html.indexOf("Ready to see your Node.js project come to life");
const techBlock = html.slice(techStart, techEnd);
const iconRe = /(?:data-src|src)=["']([^"']+)["'][\s\S]{0,400}?<h6[^>]*>([\s\S]*?)<\/h6>/gi;
let ic;
while ((ic = iconRe.exec(techBlock)) !== null) {
  console.log("\nTECH:", ic[2].replace(/<[^>]+>/g, "").trim(), ic[1].split("?")[0]);
}

// Breadcrumb visible
extract(/Hire Dedicated Developer[\s\S]{0,200}?Node Js Developer[\s\S]{0,200}?Hire Nodejs Developers/, "visible breadcrumb");

// Secondary CTA
extract(/Hire Node JS Developers Now/, "secondary cta");

// View More Portfolio
extract(/View More Portfolio/, "portfolio cta");

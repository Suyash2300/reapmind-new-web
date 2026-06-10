import fs from "fs";

const html = fs.readFileSync("public/emr-source.html", "utf8");

function strip(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/\s+/g, " ")
    .trim();
}

const keys = [
  "Patient Scheduling",
  "Patient Flow for Electronic Medical Record",
  "Task Management",
  "Patient History Charts",
  "Sort Patients with Similar Condition",
  "Detailed Reports for Medical Record",
  "Service Highlights",
  "Best Electronic Medical Record",
  "Our healthcare solutions at Reapmind",
  "Popular Platform",
  "Open Source",
  "Easier Installation",
  "Lower Development Cost",
];

const out = {};
for (const k of keys) {
  const i = html.indexOf(k);
  if (i < 0) {
    out[k] = null;
    continue;
  }
  const chunk = html.slice(i, i + 4000);
  const ps = [...chunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => strip(m[1]))
    .filter((p) => p.length > 20 && !/cookie|popup|©20/i.test(p));
  out[k] = ps.slice(0, 3);
}

// hero paragraphs after h1
const h1i = html.indexOf("One File that Saves it All");
const heroChunk = html.slice(h1i, h1i + 3000);
out.heroParagraphs = [...heroChunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
  .map((m) => strip(m[1]))
  .filter((p) => p.length > 30);

// why us from boxes
out.whyUs = [
  {
    title: "Professional & Skilled Developers",
    desc: "As a reputable android app development firm, we assign our customers the highly ambitious and enthusiastic team of developers. Their skills and proficiency meet any kind of challenging app development requirements.",
  },
  {
    title: "Full Transparency",
    desc: "In the entire android app development process, we provide the transparency that empowers our clients to be on track with the project so that they can provide some inputs according to their ideas and need a concept.",
  },
  {
    title: "Focused & Latest Technologies",
    desc: "We believe in leveraging the brand new technologies that turn up to an out of box android app development solution than ever. Our team goes in parallel with all the new updates in android in order to provide A1 android apps that support all the latest versions.",
  },
  {
    title: "Technical Consultation",
    desc: "We not just stick on in providing android app development solutions but also provide the needful technical consultancy by understanding the market trends. It's alright if you have a rough plan or idea, once you collaborate you would definitely get the biggest hit technological solution.",
  },
];

fs.writeFileSync("public/emr-features.json", JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));

import fs from "fs";

const html = fs.readFileSync("public/emr-source.html", "utf8");

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function strip(frag) {
  return decode(frag.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

// h3 sections with following paragraphs
const h3Sections = [];
const h3Re = /<h3[^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/h3>/gi;
let m;
const h3Matches = [...html.matchAll(h3Re)].map((x) => ({
  title: strip(x[1]),
  index: x.index,
}));

for (let i = 0; i < h3Matches.length; i++) {
  const start = h3Matches[i].index;
  const end = h3Matches[i + 1]?.index ?? start + 6000;
  const chunk = html.slice(start, end);
  const paragraphs = [...chunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((p) => strip(p[1]))
    .filter((p) => p.length > 30 && !/cookie|popup|©20/i.test(p));
  if (paragraphs.length) {
    h3Sections.push({ title: h3Matches[i].title, paragraphs });
  }
}

// tab titles h5 in service highlights area
const serviceIdx = html.indexOf("Service Highlights");
const serviceChunk = html.slice(serviceIdx, serviceIdx + 25000);
const tabTitles = [...serviceChunk.matchAll(/<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>/g)].map(
  (x) => strip(x[1]),
);
const tabDescs = [...serviceChunk.matchAll(/<div class="the7-e-tab-content[^"]*"[\s\S]*?<p>([^<]+)<\/p>/g)].map(
  (x) => strip(x[1]),
);
const serviceTabs = tabTitles.map((title, i) => ({ title, desc: tabDescs[i] || "" }));

// testimonials
const testimonialIdx = html.indexOf("What clients say about us");
const testimonialChunk = html.slice(testimonialIdx, testimonialIdx + 50000);
const testimonials = [];
for (const tm of testimonialChunk.matchAll(
  /<h4[^>]*>([^<]+)<\/h4>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi,
)) {
  const name = strip(tm[1]);
  const quote = strip(tm[2]);
  if (name && quote.length > 40 && !/contact|menu|about|services/i.test(name)) {
    testimonials.push({ name, quote });
  }
}

const heroDesc = strip(
  html.match(/One File that Saves it All[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "",
);

const featuresIntro = strip(
  html.match(/Best Electronic Medical Record Services[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "",
);

const secondPara = strip(
  html.match(/Best Electronic Medical Record Services[\s\S]*?<p[^>]*>[\s\S]*?<\/p>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] ||
    "",
);

console.log("HERO DESC:", heroDesc.slice(0, 200));
console.log("FEATURES:", featuresIntro.slice(0, 200));
console.log("SECOND:", secondPara.slice(0, 200));
console.log("\nH3 SECTIONS:", h3Sections.length);
h3Sections.forEach((s) => console.log(`- ${s.title} (${s.paragraphs.length} paras)`));
console.log("\nSERVICE TABS:", serviceTabs);
console.log("\nTESTIMONIALS:", testimonials.length);

fs.writeFileSync(
  "public/emr-text-blocks.json",
  JSON.stringify({ heroDesc, featuresIntro, secondPara, h3Sections, serviceTabs, testimonials }, null, 2),
);

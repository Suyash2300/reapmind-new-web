import fs from "fs";

const html = fs.readFileSync("public/ris-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

// All h2/h3/h4 with context
const headings = [...html.matchAll(/<h([234])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
  level: m[1],
  text: strip(m[2]),
}));

// Hero buttons near h1
const h1pos = html.indexOf("Radiology information system");
const heroArea = html.slice(h1pos, h1pos + 6000);
const heroButtons = [...heroArea.matchAll(/elementor-button[^>]*href="([^"]*)"[^>]*>[\s\S]*?elementor-button-text[^>]*>([^<]+)/gi)].map(
  (m) => ({ href: m[1], label: strip(m[2]) }),
);

// Why choose - look for different pattern
const whyIdx = html.indexOf("Why Choose ReapMind");
const whyChunk = html.slice(whyIdx, whyIdx + 30000);
const whyH4 = [...whyChunk.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi)].map((m) => strip(m[1]));
const whyList = [...whyChunk.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => strip(m[1])).filter((t) => t.length > 10);

// Process h2
const processH2 = headings.filter((h) => /development process|end-end|Radiology/i.test(h.text));

// Feature image near How does RIS
const howIdx = html.indexOf("How does RIS work");
const howChunk = html.slice(howIdx - 500, howIdx + 8000);
const howImgs = [...howChunk.matchAll(/src="(https:\/\/reapmind\.com\/wp-content\/uploads\/[^"]+)"/g)].map((m) => m[1]);

// Testimonials alt pattern
const testChunk = html.slice(html.indexOf("What clients say"), html.indexOf("What clients say") + 20000);
const testNames = [...testChunk.matchAll(/elementor-testimonial__name[^>]*>([\s\S]*?)<\/div>/gi)].map((m) => strip(m[1]));

// CTA sections
const ctaTitles = [...html.matchAll(/<h2[^>]*>([^<]*(?:Callback|Consultation|Expert)[^<]*)<\/h2>/gi)].map((m) => strip(m[1]));

console.log(JSON.stringify({ headings: headings.slice(0, 25), heroButtons, whyH4, whyList: whyList.slice(0, 10), processH2, howImgs, testNames, ctaTitles }, null, 2));

import fs from "fs";

const html = fs.readFileSync("public/ris-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const desiredIdx = html.indexOf("Desired Radiology");
const desiredChunk = html.slice(desiredIdx, desiredIdx + 6000);
const desiredPs = [...desiredChunk.matchAll(/<p>([\s\S]*?)<\/p>/gi)].map((m) => strip(m[1]));

// Parse "Title: description" inline paragraphs
const whyItems = [];
for (const p of desiredPs.slice(1)) {
  const m = p.match(/^([^:]+):\s*(.+)$/);
  if (m) whyItems.push({ title: strip(m[1]), description: strip(m[2]) });
}

const processIdx = html.indexOf("end-end development process");
const processChunk = html.slice(processIdx - 200, processIdx + 5000);
const processCta = strip(processChunk.match(/elementor-button-text[^>]*>([^<]+)/i)?.[1] || "");

const portfolioTitles = [
  "Deutsche Quality Systems India (DQS India) – Audit App",
  "Lakshya Academy: Empowering Education Through Technology",
  "MTeducare: Revolutionizing Education Management",
  "organic world",
  "PawSpace",
  "Muncipal banking",
];

console.log(JSON.stringify({ desiredPs, whyItems, processCta, portfolioTitles }, null, 2));

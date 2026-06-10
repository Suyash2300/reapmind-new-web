import fs from "fs";

const html = fs.readFileSync("public/oams-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const whyIdx = html.indexOf("Why Choose ReapMind as your Healthcare Online Appointment Management Partner");
const whyChunk = html.slice(whyIdx, whyIdx + 20000);
const whyParagraphs = [...whyChunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
  .map((m) => strip(m[1]))
  .filter((p) => p.length > 40);

const benIdx = html.indexOf("Benefits of implementing Appointment Management System");
const benChunk = html.slice(benIdx, benIdx + 30000);

const benefitBoxes = [];
for (const m of benChunk.matchAll(
  /<h3 class="elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  benefitBoxes.push({ title: strip(m[1]), description: strip(m[2]) });
}

// fallback: icon list pairs
const iconTexts = [...benChunk.matchAll(/elementor-icon-list-text[^>]*>([^<]+)</gi)].map((m) => strip(m[1]));

console.log("whyParagraphs", whyParagraphs);
console.log("benefitBoxes", benefitBoxes);
console.log("iconTexts", iconTexts);

fs.writeFileSync(
  "public/oams-benefits.json",
  JSON.stringify({ whyParagraphs, benefitBoxes, iconTexts }, null, 2),
);

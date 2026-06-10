import fs from "fs";

const html = fs.readFileSync("public/oams-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const featIdx = html.indexOf("Features of Online Appointment Management System");
const featChunk = html.slice(featIdx, featIdx + 8000);
const featuresIntro = strip(featChunk.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");

const whyIdx = html.indexOf("Why Choose ReapMind as your Healthcare Online Appointment Management Partner");
const whyChunk = html.slice(whyIdx, whyIdx + 12000);
const whyIntro = strip(whyChunk.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");

const benefitsIdx = html.indexOf("Benefits of implementing Appointment Management System");
const benefitsChunk = html.slice(benefitsIdx, benefitsIdx + 15000);
const benefitItems = [];
for (const m of benefitsChunk.matchAll(/elementor-icon-list-text[^>]*>([^<]+)</gi)) {
  const t = strip(m[1]);
  if (t.length > 5) benefitItems.push(t);
}

const processTitle = strip(
  html.match(/Our end-end development process to get develop a Healthcare Online Appointment[\s\S]*?<\/h3>/i)?.[0]?.replace(/<[^>]+>/g, " ") || 
  "Our end-end development process to get develop a Healthcare Online Appointment",
);

const processSubtitle = strip(
  html.slice(html.indexOf("Our end-end development process"), html.indexOf("Our end-end development process") + 5000)
    .match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "",
);

console.log({ featuresIntro: featuresIntro.slice(0, 200), whyIntro: whyIntro.slice(0, 200), benefitItems, processTitle, processSubtitle: processSubtitle.slice(0, 150) });

fs.writeFileSync(
  "public/oams-text.json",
  JSON.stringify({ featuresIntro, whyIntro, benefitItems, processTitle, processSubtitle }, null, 2),
);

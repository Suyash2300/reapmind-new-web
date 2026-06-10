import fs from "fs";

const html = fs.readFileSync("public/oams-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const idx = html.indexOf("Why Choose ReapMind as your Healthcare Online Appointment Management Partner");
const chunk = html.slice(idx, idx + 25000);
const texts = [...chunk.matchAll(/elementor-widget-text-editor[^>]*>([\s\S]*?)<\/div>/gi)]
  .map((m) => strip(m[1]))
  .filter((t) => t.length > 40);

console.log(texts);

import fs from "fs";

const html = fs.readFileSync("public/emr-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const idx = html.indexOf("What clients say about us");
const chunk = html.slice(idx, idx + 120000);

const testimonials = [];
for (const m of chunk.matchAll(
  /elementor-testimonial__text[^>]*>([\s\S]*?)<\/div>[\s\S]*?elementor-testimonial__name[^>]*>([^<]+)</gi,
)) {
  testimonials.push({ quote: strip(m[1]), name: strip(m[2]) });
}
for (const m of chunk.matchAll(
  /elementor-testimonial__name[^>]*>([^<]+)<[\s\S]*?elementor-testimonial__text[^>]*>([\s\S]*?)<\/div>/gi,
)) {
  const name = strip(m[1]);
  const quote = strip(m[2]);
  if (!testimonials.find((t) => t.name === name)) testimonials.push({ name, quote });
}

// images
const images = [...chunk.matchAll(/src="(https:\/\/reapmind\.com\/wp-content\/uploads\/2023\/08\/[^"]+\.jpg)"/gi)]
  .map((m) => m[1])
  .filter((u) => !u.includes("-300x") && !u.includes("-150x") && !u.includes("pexels"));

console.log(JSON.stringify({ testimonials, images: [...new Set(images)] }, null, 2));
fs.writeFileSync("public/emr-testimonials.json", JSON.stringify({ testimonials, images: [...new Set(images)] }, null, 2));

import { readFileSync } from "node:fs";

const slug = process.argv[2] ?? "deutsche-quality-systems-india-dqs-india-audit-app";
const html = await fetch(`https://reapmind.com/portfolio/${slug}/`).then((r) => r.text());
const headerEnd = html.lastIndexOf("</header>");
const h1Match = html
  .slice(headerEnd)
  .match(/<h1 class="elementor-heading-title[^"]*">([\s\S]*?)<\/h1>/i);
const absoluteStart =
  headerEnd + html.slice(headerEnd).indexOf(h1Match[0]);
const absoluteEnd = html.indexOf("Our Recent Works", absoluteStart + 500);
const slice = html.slice(absoluteStart, absoluteEnd);

const re =
  /elementor-widget-(heading|text-editor|image|the7_icon_box_grid_widget)[^>]*>[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/gi;
let m,
  count = 0;
while ((m = re.exec(slice)) !== null) count++;
console.log("widget matches:", count);

const alt = [...slice.matchAll(/data-widget_type="(heading|text-editor|image)[^"]*"/g)];
console.log("widget types:", alt.slice(0, 20).map((x) => x[1]));

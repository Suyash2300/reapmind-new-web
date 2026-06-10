import fs from "fs";

const html = fs.readFileSync("public/omd-source.html", "utf8");
const idx = html.indexOf('id="the7-e-tab-content-8205"');
console.log(html.slice(idx, idx + 800).replace(/></g, ">\n<"));

import https from "https";

function fetchText(target) {
  return new Promise((resolve, reject) => {
    https.get(target, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

const html = await fetchText("https://reapmind.com/remote-patient-monitoring-system/");
const title = html.match(/<title>([^<]+)/)?.[1];
const desc = html.match(/name="description" content="([^"]+)"/)?.[1];
const text = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, "\n")
  .replace(/&#8217;/g, "'")
  .replace(/&hellip;/g, "...")
  .replace(/\n{3,}/g, "\n\n");
const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
console.log("TITLE:", title);
console.log("DESC:", desc);
console.log("LINES:", lines.slice(0, 80).join("\n"));

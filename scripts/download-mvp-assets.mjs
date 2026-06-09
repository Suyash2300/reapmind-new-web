import fs from "fs";
import path from "path";
import https from "https";

const ASSETS = [
  ["hero-setup.jpg", "https://reapmind.com/wp-content/uploads/2023/11/Offshore-development-center-setup.jpg"],
  ["bosch.png", "https://reapmind.com/wp-content/uploads/2023/10/bosch.png"],
  ["oracle.png", "https://reapmind.com/wp-content/uploads/2023/10/oracle.png"],
  ["disney-client.png", "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png"],
  ["siemens-client.png", "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png"],
  ["client-logos-21.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png"],
  ["client-logos-6.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png"],
  ["client-logos-23.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png"],
  ["client-logos-14.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-14.png"],
  ["client-logos-22.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-22.png"],
  ["testimonial-0.jpg", "https://reapmind.com/wp-content/uploads/2023/08/0.jpg"],
  ["testimonial-1.jpg", "https://reapmind.com/wp-content/uploads/2023/08/1.jpg"],
  ["testimonial-2.jpg", "https://reapmind.com/wp-content/uploads/2023/08/2.jpg"],
  ["testimonial-sd.jpg", "https://reapmind.com/wp-content/uploads/2023/08/S.-D.-Shibulal.jpg"],
  ["testimonial-5.jpg", "https://reapmind.com/wp-content/uploads/2023/08/5.jpg"],
  ["testimonial-6.jpg", "https://reapmind.com/wp-content/uploads/2023/08/6.jpg"],
  ["blog-hr-ai-agent.png", "https://reapmind.com/wp-content/uploads/2025/10/Featured-Image-2.png"],
  ["blog-ai-agent-2025.png", "https://reapmind.com/wp-content/uploads/2025/08/Featured-Image-1-scaled.png"],
  ["blog-intranet.png", "https://reapmind.com/wp-content/uploads/2025/08/Featured-Image-2.png"],
  ["blog-language-learning.png", "https://reapmind.com/wp-content/uploads/2025/05/Featured-Image-scaled.png"],
  ["blog-school-bus.png", "https://reapmind.com/wp-content/uploads/2025/04/Featured-Image-13-scaled.png"],
  ["blog-devops.png", "https://reapmind.com/wp-content/uploads/2025/04/Featured-Image-11-scaled.png"],
  ["blog-document-ai.png", "https://reapmind.com/wp-content/uploads/2025/04/Featured-Image-9-scaled.png"],
  ["blog-emr.png", "https://reapmind.com/wp-content/uploads/2025/04/Featured-Image-5-scaled.png"],
  ["blog-cybersecurity.png", "https://reapmind.com/wp-content/uploads/2025/04/Featured-Image-3-scaled.png"],
  ["blog-mutual-fund.png", "https://reapmind.com/wp-content/uploads/2025/04/Featured-Image-scaled.png"],
];

const dir = path.join("public", "mvp");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", reject);
  });
}

for (const [name, url] of ASSETS) {
  const dest = path.join(dir, name);
  if (fs.existsSync(dest)) { console.log(`skip ${name}`); continue; }
  process.stdout.write(`download ${name}... `);
  await download(url, dest);
  console.log("ok");
}

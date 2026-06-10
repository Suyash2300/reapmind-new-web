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
  ["doctor.png", "https://reapmind.com/wp-content/uploads/2023/05/doctor.png"],
  ["mobile-payment.png", "https://reapmind.com/wp-content/uploads/2023/05/mobile-payment.png"],
  ["mobile-shopping.png", "https://reapmind.com/wp-content/uploads/2023/05/mobile-shopping.png"],
  ["edu.png", "https://reapmind.com/wp-content/uploads/2023/05/edu.png"],
  ["electric-car.png", "https://reapmind.com/wp-content/uploads/2023/05/electric-car.png"],
  ["smartphone.png", "https://reapmind.com/wp-content/uploads/2023/05/smartphone.png"],
  ["car-service.png", "https://reapmind.com/wp-content/uploads/2023/05/car-service.png"],
  ["logistics-1.png", "https://reapmind.com/wp-content/uploads/2023/05/logistics-1.png"],
  ["vacation.png", "https://reapmind.com/wp-content/uploads/2023/05/vacation.png"],
  ["newspaper.png", "https://reapmind.com/wp-content/uploads/2023/05/newspaper.png"],
  ["blockchain.png", "https://reapmind.com/wp-content/uploads/2023/05/blockchain.png"],
  ["cinema.png", "https://reapmind.com/wp-content/uploads/2023/05/cinema.png"],
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

const dir = path.join("public", "omd");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          if (fs.existsSync(dest)) fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

for (const [name, url] of ASSETS) {
  const dest = path.join(dir, name);
  if (fs.existsSync(dest)) {
    console.log(`skip ${name}`);
    continue;
  }
  process.stdout.write(`download ${name}... `);
  await download(url, dest);
  console.log("ok");
}

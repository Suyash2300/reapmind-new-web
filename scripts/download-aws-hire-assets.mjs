import fs from "fs";
import path from "path";
import https from "https";

const ASSETS = [
  ["hero.png", "https://reapmind.com/wp-content/uploads/2024/11/AWS-Developers-1024x1024.png"],
  ["tech-illustration.png", "https://reapmind.com/wp-content/uploads/2023/04/Large.png"],
  ["tech-ec2.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/EC2-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png"],
  ["tech-lambda.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Lambda-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png"],
  ["tech-ecs.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/ECS-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-eks.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/EKS-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-s3.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/S3-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png"],
  ["tech-efs.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/EFS-rl7hpfw1x5iym4p6a9qmhs7nn544spq84og8drzk8s.png"],
  ["tech-vpc.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/VPS-1-rl7hpfw2ruo2f49sc99q02bi3l5bytlefhtd9or4xo.png"],
  ["tech-route53.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/image-58-rl7hpkl943h4x20ivgvyl5gn4m2nm9gz2h0ymt40mc.png"],
  ["tech-cloudfront.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/image-58-rl7hpklb29iowaixatzmvn10actstf1l3t81u7e3ww.png"],
  ["tech-rds.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/RDS-rl7hpfw350atrjimd3xc2r80amvk6kyrezjki7xt8c.png"],
  ["tech-dynamodb.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Dynamo-DB-rl7hpfw75q9mxh383c31q1tkr8nfknmoc6y1qg77q4.png"],
  ["tech-aurora.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/AWS-Aurora-rl7hpeybr1groqzac0txu4yrpa8qm1a00hy557jufk.png"],
  ["tech-iam.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/IAM-rl7hpjneohok9uf556b3lfxibrcyo7q3jzgfx91ysc.png"],
  ["tech-kms.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/KMS-rl7hpjngvfhekokagbl0b59joyyflpxurokkcxfi34.png"],
  ["tech-ebs.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/EBS-rl7hpjneohoa1jqzz4yvbw0i4u4v19qi98piwrsh9k.png"],
  ["bosch.png", "https://reapmind.com/wp-content/uploads/2023/10/bosch.png"],
  ["oracle.png", "https://reapmind.com/wp-content/uploads/2023/10/oracle.png"],
  ["disney-client.png", "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png"],
  ["siemens-client.png", "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png"],
  ["client-logos-21.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png"],
  ["client-logos-6.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png"],
  ["client-logos-23.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png"],
  ["client-logos-14.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-14.png"],
  ["client-logos-22.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-22.png"],
  ["client-logos-1.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-1.png"],
  ["client-logos.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos.png"],
  ["client-logos-2.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-2.png"],
  ["client-logos-3.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-3.png"],
  ["client-logos-12.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-12.png"],
  ["client-logos-4.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-4.png"],
  ["client-logos-5.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-5.png"],
  ["client-logos-7.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-7.png"],
  ["client-logos-8.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-8.png"],
  ["client-logos-9.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-9.png"],
  ["client-logos-11.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-11.png"],
  ["client-logos-13.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-13.png"],
  ["portfolio-leep.png", "https://reapmind.com/wp-content/uploads/2024/10/Leep.png"],
  ["portfolio-happy-harvest.webp", "https://reapmind.com/wp-content/uploads/2023/05/Happy-HArvest-2-1.webp"],
  ["portfolio-carloana.webp", "https://reapmind.com/wp-content/uploads/2023/05/Carloana.webp"],
  ["testimonial-mirza.jpg", "https://reapmind.com/wp-content/uploads/2023/08/0.jpg"],
  ["testimonial-jeremy.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/jeremy-del-zotto-rl7hpklfbr92m4ef2vnt7pb95co3ksc8i4ahb70fxo.png"],
  ["testimonial-gunjan.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Gunjan-jain-rl7hpjnl4x7saifs8d96n7jsjysqd38i5zmztx1u3w.png"],
  ["testimonial-roland.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Roland_owens-rl7hpklfbr92m4ef2vnt7pb95co3ksc8i4ahb70fxo.png"],
  ["testimonial-shibulal.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/S.D-Sgibulal-rl7hpklfbr92m4ef2vnt7pb95co3ksc8i4ahb70fxo.png"],
  ["testimonial-matthew.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Matthew-Carter-rl7hpjnl4x7saifs8d96n7jsjysqd38i5zmztx1u3w.png"],
  ["testimonial-murugan.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Murugan-Candasamy-rl7hpjnl4x7saifs8d96n7jsjysqd38i5zmztx1u3w.png"],
];

const dir = path.join("public", "aws-hire");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
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

const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/EC2-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'ec2.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Lambda-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'lambda.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/ECS-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'ecs.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/EKS-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'eks.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/S3-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 's3.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/EBS-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'ebs.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/EFS-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'efs.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/VPS-rl7hpfw1odroaj2fehke2kfzfo9t2d32ybj75hw48k.png',
    name: 'vpc.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/10/AWS-Aurora.png',
    name: 'aurora.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/IAM-rl7hpjnefpwxoadtnqxe1yntvzg46bw8tj8ph71jcs.png',
    name: 'iam.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/KMS-rl7hpjngvfhekokagbl0b59joyyflpxurokkcxfi34.png',
    name: 'kms.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/10/RDS.png',
    name: 'rds.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Dynamo-DB-rl7hpfw75q9mxh383c31q1tkr8nfknmoc6y1qg77q4.png',
    name: 'dynamo-db.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/AWS-Developers-1024x1024.png',
    name: 'aws-developers.png'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  const dir = path.join(__dirname, '..', 'public', 'images', 'aws');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const img of images) {
    const dest = path.join(dir, img.name);
    console.log(`Downloading ${img.url} to ${dest}...`);
    try {
      await download(img.url, dest);
      console.log(`Downloaded ${img.name} successfully.`);
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }
}

main();

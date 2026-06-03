const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/Salesforce-Einstein.png',
    name: 'salesforce-einstein.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Lightning-Web-Components-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'lightning-web-components.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Mulesoft-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'mulesoft.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/Visualforce.png',
    name: 'visualforce.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/Salesforce-APIs.png',
    name: 'salesforce-apis.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/Salesforce-DX.png',
    name: 'salesforce-dx.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/CD-pipelines-2.png',
    name: 'cd-pipelines.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/Heroku.png',
    name: 'heroku.png'
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
  const dir = path.join(__dirname, '..', 'public', 'images', 'salesforce');
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

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://reapmind.com/company/';
const publicDir = path.join(__dirname, 'public', 'company');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

console.log('Fetching HTML from', url);

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    // Basic regex to find image sources in wp-content/uploads
    const regex = /<img[^>]+src="([^">]+wp-content\/uploads[^">]+)"/g;
    const matches = [...data.matchAll(regex)].map(m => m[1]);
    const uniqueUrls = Array.from(new Set(matches));
    
    console.log(`Found ${uniqueUrls.length} images to download.`);
    
    uniqueUrls.forEach((imgUrl) => {
      let fullUrl = imgUrl;
      if (fullUrl.startsWith('//')) {
        fullUrl = 'https:' + fullUrl;
      } else if (fullUrl.startsWith('/')) {
        fullUrl = 'https://reapmind.com' + fullUrl;
      }
      
      const fileName = path.basename(new URL(fullUrl).pathname);
      const filePath = path.join(publicDir, fileName);
      
      if (!fs.existsSync(filePath)) {
        https.get(fullUrl, (imgRes) => {
          const writeStream = fs.createWriteStream(filePath);
          imgRes.pipe(writeStream);
          writeStream.on('finish', () => {
            writeStream.close();
            console.log(`Downloaded: ${fileName}`);
          });
        }).on('error', (err) => {
          console.error(`Error downloading ${fileName}:`, err.message);
        });
      } else {
        console.log(`Already exists: ${fileName}`);
      }
    });
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err.message);
});

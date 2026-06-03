const https = require('https');

https.get('https://reapmind.com/generative-ai-development-company/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const regex = /https:\/\/reapmind\.com\/wp-content\/uploads\/[^"']+\.(png|jpg|jpeg|webp)/g;
    const matches = data.match(regex);
    if (matches) {
      console.log([...new Set(matches)].join('\n'));
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});

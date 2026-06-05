import fs from 'fs';
const b1 = fs.readFileSync('f:/Reapmind_nextjs_devNew/public/portfolio/pd-lakshya.jpg');
console.log(b1.subarray(0, 8).toString('hex'));

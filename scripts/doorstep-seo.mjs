const res = await fetch("https://reapmind.com/how-much-does-it-cost-to-develop-a-doorstep-banking-app/");
const h = await res.text();
const m = h.match(/name="description"\s+content="([^"]+)"/i);
console.log(m?.[1] ?? "not found");

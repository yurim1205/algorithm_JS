const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt";
const input = fs.readFileSync(filePath, 'utf-8').trim();

console.log(`${input}??!`);
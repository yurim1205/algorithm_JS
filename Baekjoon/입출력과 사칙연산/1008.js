const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt";
const inputData = fs.readFileSync(filePath, 'utf-8').trim().split(' ').map(Number);

console.log((inputData[0]/(inputData[1])));

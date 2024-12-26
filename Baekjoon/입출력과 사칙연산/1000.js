const fs = require('fs');

const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt";

const inputData = fs.readFileSync(filePath, 'utf-8').trim().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);

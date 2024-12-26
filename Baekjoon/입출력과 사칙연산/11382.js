const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt";
const input = fs.readFileSync(filePath, 'utf-8').split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

const result = parseInt(a+b+c);
console.log(result);

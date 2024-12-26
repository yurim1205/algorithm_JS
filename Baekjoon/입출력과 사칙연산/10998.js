const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt";
const inputData = fs.readFileSync(filePath, 'utf-8').trim().split(' ').map(Number); // 입력값 예시 참조 위해 구분을 공백으로 처리

console.log((inputData[0]) * (inputData[1]));

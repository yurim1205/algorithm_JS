const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

const arr = input[1].split(' ').map(Number);
const ansNum = Number(input[2]);

const count = arr.filter(num => num  === ansNum).length;
// arr.filter(num => num  === ansNum)를 통해 
// input[2]와 일치하는 값만 필터링하고, 새로운 배열로 만듦
// length를 통해 input[2] 등장 횟수 세기

console.log(count);
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

  let max = Number(input[0].split(' ')[1]);
  let arr = input[1].split(' ').map(Number);

  let result = arr.filter(arr => arr < max);

  console.log(result.join(' '));
  // join(' '): 배열의 각 요소를 공백으로 나눠 문자열로 합침
  // [1, 2] -> "1 2"
  
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

  let arr = input[1].split(' ').map(Number);

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  console.log(min, max);
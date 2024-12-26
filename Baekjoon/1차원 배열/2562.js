const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n')
  .map(x => Number(x));

  let max = Math.max(...input);

  console.log(max);
  console.log(input.indexOf(max)+1);
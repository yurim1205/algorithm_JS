const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/documents/algorithm/input.txt")
  .toString()
  .split('\n');

  const str = input[0];
  let length = str.length;

  console.log(length);
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/documents/algorithm/input.txt")
  .toString()
  .split('\n');

  const S = input[0];
  let i = Number(input[1]);

  console.log(S[i - 1]);
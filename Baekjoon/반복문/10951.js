const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .trim()
  .split('\n');

  for(let i=0; i< input.length; i++) {
    let num = input[i].split(' ');

    console.log(Number(num[0]) + Number(num[1]));
  }
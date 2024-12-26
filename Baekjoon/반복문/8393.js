const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n'); // 줄 단위로 분리

  const n = parseInt(input[0]);
  let sum=0;

  for(let i=1; i<=n; i++){
    sum += i;
  }

  console.log(sum);
  
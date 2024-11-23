const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString();

  const num = Number(input);

  for (let i=1; i<=9; i++){
    const result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }
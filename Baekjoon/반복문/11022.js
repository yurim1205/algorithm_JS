const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

  const inputCase = Number(input[0]);

  for (let i = 1; i <= inputCase; i++) {
    let num = input[i].split(' ');
    let num1 = Number(num[0]);
    let num2 = Number(num[1]);
    let result = num1 + num2;

    console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${result}`);
  }
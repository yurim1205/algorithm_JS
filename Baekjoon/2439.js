const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .trim();

  const inputCase = Number(input);

  for (let i = 1; i <= inputCase; i++) {
    let space = " ".repeat(inputCase-i);
    // 공백을 inputCase-i번 반복하면서 space에 저장함

    let star = "*".repeat(i);

    console.log(space + star);
  }
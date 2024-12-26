const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .trim();

  const inputCase = Number(input);

  for (let i = 1; i <= inputCase; i++) {
    let row = "";

    for(let j= 1; j<=i; j++) {
        row += '*';
    }
    console.log(row);
  }
  
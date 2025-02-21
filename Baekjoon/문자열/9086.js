const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/documents/algorithm/input.txt")
  .toString()
  .trim()
  .split('\n');

  const testCaseCount = Number(input[0]);

  for (let i = 1; i <= testCaseCount; i++) {
    const line = input[i];
    console.log(line[0] + line[line.length - 1]);
  }
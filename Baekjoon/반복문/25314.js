const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString();

  console.log("long ".repeat(input/4)+"int");

  // 문제 풀이: 입력값을 4로 나눈 몫만큼 long을 출력하고, int를 하나 출력
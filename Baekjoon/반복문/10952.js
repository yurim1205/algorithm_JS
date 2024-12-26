const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

  let i = 0;
  let result = '';

  // input[i]가 '0 0'을 만날 때까지 반복
  while (input[i] != '0 0') {
    let num = input[i].split(' ');

    result += Number(num[0]) + Number(num[1]) + '\n';
    // 한 줄씩 계산 뒤 줄바꿈을 위해 \n 추가

    i += 1;
  }

  console.log(result);
  
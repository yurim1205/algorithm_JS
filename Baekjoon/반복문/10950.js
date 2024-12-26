const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n'); // 줄 단위로 구분하여 나눔

  // input[0]: 반복 횟수를 결정함
  for (let i=1; i<=input[0]; i++) {
    let num = input[i].split(' ');
    // input[i]: 두 번째 줄부터 시작하는 각 줄을 의미함
    // split(' '): 공백을 기준으로 문자열을 나눠 배열로 만듦

    let num1 = Number(num[0]);
    let num2 = Number(num[1]);
    // Number(): 문자열을 숫자로 변환함

    console.log(num1 + num2);
  } 
  
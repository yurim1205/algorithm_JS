const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .trim()
  .split('\n');
// 줄을 기준으로 배열로 나눠서
// input[0]: 총합 금액
// input[1]: 물건의 개수
// input[2]부터는 물건 가격과 개수가 각각 저장됨

let totalPrice = 0; // 총 금액
let sum = parseInt(input[0]); // 총합

for (let i = 2; i < input.length; i++) {  // i < input.length로 수정
  const [x, num] = input[i].split(' ').map(Number);
  // map(Number): 배열의 요소를 숫자로 변환

  totalPrice += x * num;  // 물건 가격을 더함
}

// 계산된 총액과 sum 비교
totalPrice === sum ? console.log("Yes") : console.log("No");
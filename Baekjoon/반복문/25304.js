const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .trim()
  .split('\n');
// 줄을 기준으로 배열로 나눠서
// input[0]: 총합 금액
// input[1]: 물건의 개수
// input[2]: 각 물건 가격과 개수

let totalPrice = 0; // 총 금액
let sum = parseInt(input[0]); // 총합

for (let i = 2; i < input.length; i++) {
  const [price, count] = input[i].split(' ').map(Number);
  // .split(' ') : 문자열을 공백을 기준으로 가격,개수로 나눠 배열로 만듦
  // map(Number): 배열의 요소를 숫자로 변환

  totalPrice += price * count;  
  // 물건 가격 * 물건 개수 : 물건의 총 가격이 됨
  // 위 값을 totalPrice에 계속해서 더해서 전체 물건의 가격 총합을 구함
}

// 계산된 총액과 sum 비교
totalPrice === sum ? console.log("Yes") : console.log("No");
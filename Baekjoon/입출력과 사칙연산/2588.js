const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt";
const input = fs.readFileSync(filePath, 'utf-8').split('\n');
// 줄바꿈 문자로 입력을 분리하기 위해 split('\n')을 사용
// split(' ')로 분리하니 공백을 기준으로 제대로 분리되지 않아 NaN이 출력됨

const A = parseInt(input[0]);
let B = parseInt(input[1]); // B 값을 재할당해야해서 let 사용함

const three = parseInt((B%10)*A);
B = parseInt(B/10);
const four = parseInt((B%10)*A);
B = parseInt(B/10);
const five = parseInt((B%10)*A);

const result = parseInt(three + (four*10) + (five*100));

console.log(three);
console.log(four);
console.log(five);
console.log(result);

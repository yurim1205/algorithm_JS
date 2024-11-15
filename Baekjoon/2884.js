const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .trim()
  .split(' ');

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

if (minute < 45){
    hour -= 1;
    minute = 60 + minute - 45; 
// 분이 45분보다 작으면 60을 더해주고 45를 뺌
} else {
    minute -= 45;
// 분이 45분보다 크면 시간에서 안 빼와도 되므로 45만 빼줌
}

// hour가 0일 땐 자정임을 의미하며, 
// 1시간을 빼면 음수이므로 23시로 바꿔줘야 함
if (hour <0){
    hour = 23;
}

console.log(hour,minute);
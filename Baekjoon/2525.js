const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt")
  .toString()
  .split('\n');

  // input[0] 이렇게 하면 분을 제대로 처리하지 못함
  // split(' ')로 분리하여 시,분을 각각 할당해야 함 
  let [hour, minute] = input[0].split(' ').map(Number);
  
  let addMinute =parseInt(input[1]);

  minute += addMinute;

  // 분이 60 이상이면, 1시간이 넘기 때문에 hour를 증가시킴
  // minute / 60: minute이 60이상일 경우 몇 시간을 추가해야하는지 알 수 있음
  // minute % 60: hour를 증가시키고 남은 분을 계산함
 if (minute >= 60) { 
    hour += Math.floor(minute / 60);
    minute = minute % 60;
 }

 // 시는 24시를 넘으면 안 되므로, % 연산을 통해 시간을 맞춰야 함
if(hour >=24){
    hour = hour % 24;
}

console.log(hour,minute);
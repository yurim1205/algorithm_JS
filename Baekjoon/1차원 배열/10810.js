const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/documents/algorithm/input.txt")
  .toString()
  .split('\n');

  const [N, M] = input[0].split(' ').map(Number);

  // fill(0): 배열의 모든 요소를 0으로 초기화
  const baskets = new Array(N).fill(0);  
  
  for (let i = 1; i <= M; i++) {
      const [start, end, ball] = input[i].split(' ').map(Number);
      
      for (let j = start; j <= end; j++) {
          baskets[j - 1] = ball;
      }
  }
  
  console.log(baskets.join(" "));  // 결과를 공백으로 구분하여 출력
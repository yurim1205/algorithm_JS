const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt";
const input = fs.readFileSync(filePath, 'utf-8').split(' ');

const score = parseInt(input[0]);

if(score>= 90 && score<=100)
    console.log('A');
else if(score>= 80 && score<=90)
    console.log('B');
else if(score>= 70 && score<=79)
    console.log('C');
else if(score>= 60 && score<=69)
    console.log('D');
else 
    console.log('F');
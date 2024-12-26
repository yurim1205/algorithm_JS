const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "/Users/iyulim/Desktop/algorithm/input.txt";
const input = fs.readFileSync(filePath, 'utf-8').split(' ');

const year = parseInt(input[0]);

if((year%100 !==0 && year%4==0) || year%400==0){
    console.log("1");
} else {
    console.log("0");
}
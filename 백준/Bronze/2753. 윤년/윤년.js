const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim() / 1;

let answer;
if (!(input % 4)) {
  if (input % 100 || !(input % 400)) answer = 1;
  else answer = 0;
} else answer = 0;

console.log(answer);
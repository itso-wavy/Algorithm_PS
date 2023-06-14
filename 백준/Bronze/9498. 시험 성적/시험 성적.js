const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const newLine = process.platform === 'linux' ? '\n' : '\r\n';

const input = fs.readFileSync(filePath).toString().trim();

let answer;
if (90 <= ~~input) answer = 'A';
else if (80 <= ~~input) answer = 'B';
else if (70 <= ~~input) answer = 'C';
else if (60 <= ~~input) answer = 'D';
else answer = 'F';

console.log(answer);
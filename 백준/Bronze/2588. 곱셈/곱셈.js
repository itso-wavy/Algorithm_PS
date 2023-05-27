const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const newLine = process.platform === 'linux' ? '\n' : '\r\n';

const [A, C] = fs.readFileSync(filePath).toString().trim().split(newLine);

const [...B] = C;

console.log(~~A * B.pop());
console.log(~~A * B.pop());
console.log(~~A * B.pop());
console.log(A * C);
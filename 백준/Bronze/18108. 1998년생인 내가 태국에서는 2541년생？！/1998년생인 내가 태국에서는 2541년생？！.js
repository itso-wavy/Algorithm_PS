const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const newLine = process.platform === 'linux' ? '\n' : '\r\n';

const input = fs.readFileSync(filePath).toString().trim();

console.log(~~input - 543);
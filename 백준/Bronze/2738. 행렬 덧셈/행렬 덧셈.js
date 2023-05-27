const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const newLine = process.platform === 'linux' ? '\n' : '\r\n';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .map(v => v.split(' ').map(Number));

const [[n, m]] = input;
const A = input.slice(1, n + 1);
const B = input.slice(n + 1);

const C = A.map((v, i) => v.map((w, j) => w + B[i][j]));

for (let c of C) console.log(...c);
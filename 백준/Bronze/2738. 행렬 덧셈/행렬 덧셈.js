const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const newLine = process.platform === 'linux' ? '\n' : '\r\n';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .map(v => v.split(' ').map(Number));

const [row, col] = input.shift();

const A = input.slice(0, row);
const B = input.slice(row);

for (let r = 0; r < row; r++) {
  for (let c = 0; c < col; c++) {
    A[r][c] += B[r][c];
  }
}

for (let a of A) console.log(...a);
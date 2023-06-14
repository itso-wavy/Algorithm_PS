const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const newLine = process.platform === 'linux' ? '\n' : '\r\n';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const obj = {};
for (let i of input) obj[i] = (obj[i] || 0) + 1;
const arr = Object.entries(obj);

if (arr.length === 1) console.log(10000 + arr[0][0] * 1000);
else if (arr.length === 2)
  console.log(1000 + arr.sort((a, b) => b[1] - a[1])[0][0] * 100);
else if (arr.length === 3)
  console.log(arr.sort((a, b) => b[0] - a[0])[0][0] * 100);

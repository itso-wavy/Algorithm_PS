// 문제38: 호준이의 아르바이트

const enter = '97 86 75 66 55 97 85 97 97 95'.split(' ');
const obj = {};

enter.forEach(i => (obj[i] = (obj[i] || 0) + 1));
const answer = Object.entries(obj)
  .sort((a, b) => b[0] - a[0])
  .slice(0, 3)
  .reduce((a, c) => a + c[1], 0);

console.log(answer);

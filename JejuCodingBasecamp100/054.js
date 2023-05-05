// 문제54: 연속되는 수

const enter = prompt('Enter sequence of numbers')
  .split(' ')
  .sort((a, b) => a - b);

for (let i = 0; i < enter.length - 1; i++) {
  if (enter[i] + 1 === enter[i + 1]) return 'NO';
}
return 'YES';

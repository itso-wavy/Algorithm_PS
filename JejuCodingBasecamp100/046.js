// 문제46: 각 자리수의 합 2

const arr = Array.from({ length: 20 }, (v, i) => 1 + i);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const answer = arr
  .join('')
  .split('')
  .reduce((a, c) => a + ~~c, 0);
  
console.log(answer);

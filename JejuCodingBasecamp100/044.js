// 문제44: 각 자리수의 합

const arr = prompt('Enter a number').split('');
const answer = arr.reduce((a, c) => a + ~~c, 0);
console.log(answer);

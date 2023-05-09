// 문제59 : 빈칸채우기

const enter = prompt('Enter some what');

const leftWing = '='.repeat(~~((50 - enter.length) / 2)) + enter;
const answer = leftWing.padEnd(50, '=');

console.log(answer);

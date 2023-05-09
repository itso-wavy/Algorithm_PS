// 문제57 : 1의 개수

let str = '';
for (let i = 0; i <= 1000; i++) {
  str += i;
}
const answerArr = str.split('1').length - 1;
const answerRE = str.match(/1/g).length;

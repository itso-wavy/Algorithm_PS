// 문제45: getTime()함수 사용하기

const date = new Date().getTime();
let year = ~~(date / (1000 * 60 * 60 * 24 * 365)) + 1970;
console.log(year);

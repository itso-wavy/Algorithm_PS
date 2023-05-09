// 문제56 : 객체의 함수 응용

const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const korea = nationWidth['korea'];
delete nationWidth['korea'];

const arr = Object.entries(nationWidth).map((v, i) => [
  v[0],
  Math.abs(v[1] - korea),
]);
const answer = arr.sort((a, b) => a[1] - b[1])[0][0];
console.log(answer);

// 문제40: 놀이동산에 가자

const enter = '50 5 20 20 20 20 20';
const arr = enter.split(' ').map(i => ~~i);
const [limit, number, ...friends] = arr;

let count = 0;
friends
  .sort((a, b) => a - b)
  .reduce((a, c) => {
    if (a >= c) {
      count++;
      return a - c;
    }
  }, limit);

console.log(count);

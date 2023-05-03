// 문제37: 반장 선거

const enter = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ');
const obj = {};

enter.forEach(i => (obj[i] || 0) + 1);
const winVotes = Object.entries(obj).sort((a, b) => b[1] - a[1])[0];

console.log(`${winVotes[0]}(이)가 총 ${winVotes[1]}표로 반장이 되었습니다.`);

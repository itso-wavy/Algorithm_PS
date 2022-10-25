// 문제18: 평균 점수

const enter = '20 30 40'
const arr = enter.split(' ').map(i => ~~i)
console.log(arr.reduce((a,c) => a + c, 0) / arr.length)
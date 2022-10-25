// 문제20: 몫과 나머지

const enter = '10 2'
const arr = enter.split(' ')

const 몫 = ~~(arr[0] / arr[1])
const 나머지 = arr[0] % arr[1]
console.log(몫, 나머지)
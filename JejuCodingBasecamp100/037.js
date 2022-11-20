// 문제37: 반장 선거 

const enter = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ')
const obj = {}
enter.forEach(i => {
    obj[i] === undefined ? obj[i] = 1 : obj[i] += 1
})

const arr = Object.entries(obj).sort((a, b) => b[1] - a[1])

console.log(arr[0][0])


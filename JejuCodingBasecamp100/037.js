// 문제37: 반장 선거 

const enter = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ')
const obj = {}
enter.forEach(i => {
    obj[i] === undefined ? obj[i] = 1 : obj[i] += 1
})
// {
//     원범: 2,
//     혜원: 4,
//     유진: 2
// }

const arr = Object.entries(obj).sort((a, b) => b[1] - a[1])
// [['혜원', 4], ['원범', 2], ['유진', 2]]

console.log(arr[0][0])


// 문제38: 호준이의 아르바이트

const enter = '97 86 75 66 55 97 85 97 97 95'.split(' ')
const obj = {}

enter.map(function (i) {
    obj[i] = (obj[i] === undefined) ? 1 : obj[i] + 1
})
const arr = Object.entries(obj).sort((n, m) => m[0] - n[0])

let answer = 0
for(let i = 0; i <= 2; i++) answer += arr[i][1]
console.log(answer)

 
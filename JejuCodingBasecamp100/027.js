// 문제27: 객체 만들기
const names = 'Yujin Hyewon'.split(' ')
const scores = '70 100'.split(' ')
const obj = {}

for(let i = 0; i < names.length; i++) {
    obj[names[i]] = ~~(scores[i] )   
}

console.log(obj)
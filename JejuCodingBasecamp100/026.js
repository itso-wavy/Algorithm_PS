// 문제26: 행성 문제2
const enter = prompt('행성 이름을 입력하세요')
const planets = {
    수성: 'Venus', 
    금성: 'Mercury', 
    지구: 'Earth', 
    화성: 'Mars', 
    목성: 'Jupiter', 
    토성: 'Saturn', 
    천왕성: 'Uranus', 
    해왕성: 'Neptune',
}

console.log(planets[enter])
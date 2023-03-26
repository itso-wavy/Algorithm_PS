const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    // input = 입력값의 string 타입, 인자
}).on('close', function () {
    solution(Number(input[0]))
    // input[0] = 첫번째 인자
});

function solution (num) {
    for(let i=0; i<num; i++) {
        let star = '';
        for(let j=0; j<=i; j++) {
            star=star+'*'
        }
        console.log(star)
    }
}
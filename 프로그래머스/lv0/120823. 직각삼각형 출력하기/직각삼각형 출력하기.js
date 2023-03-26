function solution (num) {
    for(let i=0; i<num; i++) {
        let star = '';
        for(let j=0; j<=i; j++) {
            star=star+'*'
        }
        console.log(star)
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    solution(line)
}).on('close', function () {
    // console.log(Number(input[0]));
});


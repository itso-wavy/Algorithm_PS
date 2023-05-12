const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (str) {
    str.split('').forEach(i => console.log(i))
})
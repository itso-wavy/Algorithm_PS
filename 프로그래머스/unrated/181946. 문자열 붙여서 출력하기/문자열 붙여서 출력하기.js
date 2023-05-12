const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    const [str1, str2] = line.split(' ');
    console.log(str1+str2)
})
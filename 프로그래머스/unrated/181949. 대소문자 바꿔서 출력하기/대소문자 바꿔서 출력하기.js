const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (str) {
    const answer = [...str].map(i => /[a-z]/.test(i) ? i.toUpperCase() : i.toLowerCase()).join('')
    console.log(answer)
})
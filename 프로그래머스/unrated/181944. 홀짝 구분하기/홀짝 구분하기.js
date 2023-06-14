const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    console.log(~~line % 2 ? `${~~line} is odd` : `${~~line} is even` )
});
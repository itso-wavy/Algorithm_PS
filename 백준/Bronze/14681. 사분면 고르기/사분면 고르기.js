const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', line => {
  input.push(parseInt(line));
}).on('close', () => {
  const [x, y] = input;

  if (x > 0) {
    if (y > 0) console.log(1);
    else console.log(4);
  } else {
    if (y > 0) console.log(2);
    else console.log(3);
  }
});
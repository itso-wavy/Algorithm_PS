const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', line => {
  input.push(parseInt(line));
}).on('close', () => {
  const x = ~~input[0];
  const y = ~~input[1];
  if (x > 0) {
    if (y > 0) {
      return console.log(1);
    } else {
      return console.log(4);
    }
  } else {
    if (y > 0) {
      return console.log(2);
    } else {
      return console.log(3);
    }
  }
});
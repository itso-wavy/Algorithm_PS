// 문제53: 괄호 문자열

let enter = prompt('Enter parentheses string');
const parentheses = [
  ['(', ')'],
  ['{', '}'],
  ['[', ']'],
];

/* pattern은  두가지: ((...)), ()() */
for (let p of parentheses) {
  if (enter[0] !== p[0] || enter.slice(-1) !== p[1]) break;
}

while (enter.length > 1) {
  for (let p of parentheses) {
    enter = enter.replaceAll(p[0] + p[1], '');
  }
}

console.log(enter.length ? `NO` : `YES`);

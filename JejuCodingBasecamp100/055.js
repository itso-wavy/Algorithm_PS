// 문제55: 하노이의 탑

const route = [];

function hanoi(num, start, end, temp) {
  if (num === 1) {
    route.push([start, end]);
    return;
  }

  hanoi(num - 1, start, temp, end);
  route.push([start, end]);
  hanoi(num - 1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);

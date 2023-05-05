// 문제51: merge sort를 만들어보자

function mergeHelper(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] >= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  while (left.length) result.push(...left);
  while (right.length) result.push(...right);

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return mergeHelper(mergeSort(left), mergeSort(right));
}

const array = prompt('배열을 입력하세요')
  .split(' ')
  .map(n => parseInt(n, 10));

console.log(mergeSort(array));

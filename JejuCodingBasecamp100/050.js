// 문제50: 버블정렬 구현하기

function bubble(arr) {
  let result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

const arr = [4, 2, 3, 8, 5];
console.log(bubble(arr));

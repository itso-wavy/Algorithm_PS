// 문제58 : 콤마 찍기

const enter = [...prompt('Enter a number')];
const arr = [];

for (let i = 0; i < enter.length; i++) {
  if (i !== 0 && i % 3 === 0) arr.push(',');
  arr.push(enter[i]);
}

arr.join('');

// 풀이 2
const enter2 = prompt('Enter a number');
enter2.toLocaleString();

// 풀이 3: 재귀함수
const func = str => {
  if (str.length <= 3) {
    return str;
  } else {
    return func(str.slice(0, str.length - 3)) + ',' + str.slice(str.length - 3);
  }
};

const enter3 = prompt('Enter a number');
func(enter3);

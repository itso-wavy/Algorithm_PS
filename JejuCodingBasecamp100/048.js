// 문제48 : 대소문자 바꿔서 출력하기

const enter = 'AAABBBcccddd';

const arr = enter.split('').map(i => {
  console.log(i, /[az]/.test(i));

  return /[a-z]/.test(i) ? i.toUpperCase() : i.toLowerCase();
});

const answer = arr.join('');
console.log(answer);

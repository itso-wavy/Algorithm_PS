// 문제18: 평균 점수

const enter = '20 30 40';
enter.split(' ').reduce((a, c) => a + ~~c, 0) / 3;

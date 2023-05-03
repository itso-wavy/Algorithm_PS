// 문제42: 2020년 DATE

function get2020Day(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const date = new Date(`2020-${a}-${b}`).getDay();

  return days[date];
}

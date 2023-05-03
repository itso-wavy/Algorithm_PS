// 문제41: 소수판별

const num = Number(prompt('Enter a number to guess'));

function isInt(n) {
  if (n === ~~n) {
    return true;
  } else {
    console.log('Please enter a integer');
    return false;
  }
}

function isPrimeNum(n) {
  if (isInt(n)) {
    if (n === 2) return true;
    else if (n >= 3) {
      for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    } else return false;
  }
}

isPrimeNum(num);

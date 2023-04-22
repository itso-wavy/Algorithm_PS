function isPrime(p) {
  if (p === 1) return false;
  for (let i = 2; i <= Math.sqrt(p); i++) {
    if (p % i === 0) return false;
  }
  return true;
}

function solution(n) {
  const arr = []
  for(let i = 2 ; i <= n; i++) {
    if (n % i === 0) {
      isPrime(i) && arr.push(i)
    }
    else continue;
  }
  return arr
}
function solution(n) {
    // array < Math.sqrt + set
    let s = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        !(n % i) && (s.add(i), s.add(n / i))
    }
    return [...s].sort((a, b) => a - b);
}

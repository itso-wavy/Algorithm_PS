function solution(n) {
    if(n) {
        const s = new Set;
        for (i = 1; i <= Math.sqrt(n); i++) {
            if(n % i === 0) {
                s.add(i);
                s.add(n / i);
                }
            }
        return [...s].reduce((a, b) => a + b)
    } else return 0
}
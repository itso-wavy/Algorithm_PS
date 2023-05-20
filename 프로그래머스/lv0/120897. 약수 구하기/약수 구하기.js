function solution(n) {
    const arr = [1]
    for(let i = 2; i <= n; i++) {
        !(n % i) && arr.push(i)
    }
    return arr
    // 2)
    // return Array(n).fill(0).map((v, i) => v+i+1).filter(i => n % i === 0)
    
    // 3)
    // return Array.from({ length: n }, (_, i) => i + 1).filter(i => n % i === 0)
    
    // 4)
    // let s = new Set();
    // for (let i = 1; i <= Math.sqrt(n); i++) {
    //     if (n % i === 0) {
    //         s.add(i);
    //         s.add(n / i);
    //     }
    // }
    // return [...s].sort((a, b) => a - b);
}
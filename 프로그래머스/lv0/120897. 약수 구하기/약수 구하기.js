function solution(n) {
    // 1)
    // const arr = [];
    // for(let i = 0; i <= n; i++)
    //     n % i === 0 ? arr.push(i) : undefined;      
    // return arr;
    
    // 2)
    // return Array(n).fill(0).map((v, i) => v+i+1).filter(i => n % i === 0)
    
    // 3)
    // return Array.from({ length: n }, (_, i) => i + 1).filter(i => n % i === 0)
    
    // 4)
    let s = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            s.add(i);
            s.add(n / i);
        }
    }
    return [...s].sort((a, b) => a - b);
}

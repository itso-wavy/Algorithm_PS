function solution(n) {
    // 1) Time: 0.25 ms, Memory: 33.6 MB
//     const arr = []
//     for(let i = 1; i <= Math.sqrt(n); i++) {
//         !(n % i) && (arr.push(i), arr.push(n/i))
//     }
//     return arr.sort((a,b) => a-b)
    
        let s = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            s.add(i);
            s.add(n / i);
        }
    }
    return [...s].sort((a, b) => a - b);
    // 3) Time: 0.24 ms, Memory: 33.5 MB
    // const set = new Set()
    // for(let i = 1; i <= n; i++) {
    //     !(n % i) && set.add(i)
    // }
    // return [...set]
}

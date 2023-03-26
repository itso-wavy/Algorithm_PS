function solution(n) {
    const arr = [];
    for(let i = 0; i <= n; i++)
        n % i === 0 ? arr.push(i) : undefined;      
    return arr;
}
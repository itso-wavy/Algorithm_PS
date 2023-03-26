function solution(n) {
    const arr = [];
    let i = 0;
    while(i <= n){
        i++;
        n % i === 0 ? arr.push(i) : undefined;      
    }
    return arr;
}
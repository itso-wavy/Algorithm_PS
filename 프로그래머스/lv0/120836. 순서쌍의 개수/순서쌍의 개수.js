function solution(n) {
    let num = 0
    for(i = 1; i <= n; i++) {
        num = n % i === 0 ? num + 1 : num
    }
    return num;
}
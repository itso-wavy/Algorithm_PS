function solution(n) {
    // for문은 return 후에도 3항을 실행함
    for(let i=1, m=1; true; ++i) {
        if(m > n) return i-2
        m *= i
    }
}

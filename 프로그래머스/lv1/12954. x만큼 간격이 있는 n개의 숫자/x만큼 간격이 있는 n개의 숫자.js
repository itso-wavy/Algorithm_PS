function solution(x, n) {
    return Array(n).fill(x).map((_,i)=> x*(i+1))
}
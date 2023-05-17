function solution(ineq, eq, n, m) {
    return eq === '!' ? +eval(n+ineq+m) : +eval(n+ineq+eq+m)
}
function solution(ineq, eq, n, m) {
    const formula = eq === '!' ? n+ineq+m : n+ineq+eq+m
    return eval(formula) ? 1 : 0
}
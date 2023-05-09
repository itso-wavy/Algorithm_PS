function solution(a, b) {
    return a.reduce((v, c, i) => v + c*b[i], 0)
}

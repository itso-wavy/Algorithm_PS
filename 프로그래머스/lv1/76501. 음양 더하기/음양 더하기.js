function solution(absolutes, signs) {
    return absolutes.reduce((a, c, i) => signs[i] ? a+c : a-c, 0)
}
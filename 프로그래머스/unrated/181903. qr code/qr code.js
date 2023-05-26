function solution(q, r, code) {
    return [...code].reduce((a,c,i) => i%q===r ? a+c : a, '')
}
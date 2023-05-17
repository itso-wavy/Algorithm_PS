function solution(a, d, included) {
    let result = 0
    included.forEach((v,i) => result = (v ? a+i*d : 0) + result)
    return result;
}
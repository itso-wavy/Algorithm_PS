function solution(a, b) {
    let num = 0
    for(let i in a) {
        num += a[i]*b[i]
    }
    return num;
}
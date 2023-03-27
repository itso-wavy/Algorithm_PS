function solution(i, j, k) {
    let str = ''
    for(i; i <= j; i++) str = str + i
    return str.split(k).length - 1
}
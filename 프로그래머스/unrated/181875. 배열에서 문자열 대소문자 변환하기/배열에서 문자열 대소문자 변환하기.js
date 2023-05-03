function solution(strArr) {
    return strArr.map((v, i) =>  i % 2 ? v.toUpperCase() : v.toLowerCase())
}
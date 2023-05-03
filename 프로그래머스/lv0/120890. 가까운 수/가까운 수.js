function solution(array, n) {
    // 1)
    // const sub = array.reduce((a, v) => Math.min(Math.abs(v - n), a), Math.abs(array[0] - n))
    // return array.includes(n - sub) ? n - sub : n + sub
    
    // 2)
    array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b)
    return array[0]
}
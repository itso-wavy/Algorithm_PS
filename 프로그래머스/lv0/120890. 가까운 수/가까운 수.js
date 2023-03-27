function solution(array, n) {
    const sub = array.reduce((a, v) => Math.min(Math.abs(v - n), a), Math.abs(array[0] - n))
    return array.includes(n - sub) ? n - sub : n + sub
}
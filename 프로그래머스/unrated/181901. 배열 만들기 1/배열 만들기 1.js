function solution(n, k) {
    return Array(~~(n/k)).fill(k).map((_, i) => k * (i + 1))
}
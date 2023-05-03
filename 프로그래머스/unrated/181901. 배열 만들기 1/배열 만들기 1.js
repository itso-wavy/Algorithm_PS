function solution(n, k) {
    return Array.from({length: ~~(n/k)}).map((_, i) => k * (i + 1))
}
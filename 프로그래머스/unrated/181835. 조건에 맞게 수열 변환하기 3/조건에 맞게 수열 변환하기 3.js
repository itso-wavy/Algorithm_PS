function solution(arr, k) {
    return Array.from(arr, v => k % 2 ? v*k : v+k)
}
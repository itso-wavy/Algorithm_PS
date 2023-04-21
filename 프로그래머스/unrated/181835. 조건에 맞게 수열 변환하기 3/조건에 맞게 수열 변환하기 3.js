function solution(arr, k) {
    return (k % 2 ? Array.from(arr, v => v*k) : Array.from(arr, v => v+k)) 
}